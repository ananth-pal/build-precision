import { corsHeaders } from 'npm:@supabase/supabase-js@2/cors';
import { createClient } from 'npm:@supabase/supabase-js@2';
import { z } from 'npm:zod@3.23.8';

const BodySchema = z.object({
  name: z.string().trim().min(1).max(200),
  company: z.string().trim().min(1).max(200),
  email: z.string().trim().email().max(255),
  country: z.string().trim().max(100).optional().or(z.literal('')),
  phone: z.string().trim().max(50).optional().or(z.literal('')),
  notes: z.string().trim().max(2000).optional().or(z.literal('')),
  purpose: z.enum(['machine-list', 'brochure']).optional(),
});

const DROPBOX_FOLDER = '/Machine List Requests';

async function getDropboxAccessToken(): Promise<string | null> {
  const appKey = Deno.env.get('DROPBOX_APP_KEY');
  const appSecret = Deno.env.get('DROPBOX_APP_SECRET');
  const refreshToken = Deno.env.get('DROPBOX_REFRESH_TOKEN');
  if (!appKey || !appSecret || !refreshToken) return null;

  const res = await fetch('https://api.dropbox.com/oauth2/token', {
    method: 'POST',
    headers: {
      Authorization: `Basic ${btoa(`${appKey}:${appSecret}`)}`,
      'Content-Type': 'application/x-www-form-urlencoded',
    },
    body: new URLSearchParams({
      grant_type: 'refresh_token',
      refresh_token: refreshToken,
    }),
  });
  if (!res.ok) {
    console.error('Dropbox refresh failed:', res.status, await res.text());
    return null;
  }
  const json = await res.json();
  return json.access_token as string;
}

async function uploadToDropbox(token: string, path: string, content: string) {
  const res = await fetch('https://content.dropboxapi.com/2/files/upload', {
    method: 'POST',
    headers: {
      Authorization: `Bearer ${token}`,
      'Content-Type': 'application/octet-stream',
      'Dropbox-API-Arg': JSON.stringify({
        path,
        mode: 'add',
        autorename: true,
        mute: true,
        strict_conflict: false,
      }),
    },
    body: content,
  });
  if (!res.ok) {
    const text = await res.text();
    throw new Error(`Dropbox upload failed: ${res.status} ${text}`);
  }
  return res.json();
}

async function invokeSendEmail(
  supabaseUrl: string,
  serviceKey: string,
  payload: {
    templateName: string;
    recipientEmail?: string;
    idempotencyKey: string;
    templateData: Record<string, unknown>;
  }
) {
  const res = await fetch(`${supabaseUrl}/functions/v1/send-transactional-email`, {
    method: 'POST',
    headers: {
      Authorization: `Bearer ${serviceKey}`,
      apikey: serviceKey,
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(payload),
  });
  if (!res.ok) {
    const text = await res.text();
    throw new Error(`send-transactional-email failed: ${res.status} ${text}`);
  }
  return res.json();
}

Deno.serve(async (req) => {
  if (req.method === 'OPTIONS') {
    return new Response('ok', { headers: corsHeaders });
  }

  try {
    const json = await req.json().catch(() => null);
    const parsed = BodySchema.safeParse(json);
    if (!parsed.success) {
      return new Response(
        JSON.stringify({ error: 'invalid_input', details: parsed.error.flatten().fieldErrors }),
        { status: 400, headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
      );
    }

    const { name, company, email, country, phone, notes, purpose } = parsed.data;
    const kind: 'machine-list' | 'brochure' = purpose ?? 'machine-list';
    const combinedNotes = kind === 'brochure'
      ? [`[Brochure download]`, notes || ''].filter(Boolean).join(' — ')
      : notes;

    const supabaseUrl = Deno.env.get('SUPABASE_URL')!;
    const serviceKey = Deno.env.get('SUPABASE_SERVICE_ROLE_KEY')!;
    const supabase = createClient(supabaseUrl, serviceKey);

    const { data: inserted, error: insertError } = await supabase
      .from('machine_list_requests')
      .insert({
        name,
        company,
        email,
        country: country || null,
        phone: phone || null,
        notes: combinedNotes || null,
      })
      .select('id, created_at')
      .single();

    if (insertError) {
      console.error('DB insert failed', insertError);
      return new Response(
        JSON.stringify({ error: 'db_failed', message: 'Something went wrong, please try again later.' }),
        { status: 500, headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
      );
    }

    const id = inserted.id as string;

    const dropboxPayload = JSON.stringify(
      {
        id,
        created_at: inserted.created_at,
        purpose: kind,
        name,
        company,
        email,
        country: country || null,
        phone: phone || null,
        notes: combinedNotes || null,
      },
      null,
      2
    );

    const tasks: Promise<unknown>[] = [];

    tasks.push(
      (async () => {
        const token = await getDropboxAccessToken();
        if (!token) {
          console.warn('Dropbox credentials not set — skipping upload');
          return;
        }
        await uploadToDropbox(token, `${DROPBOX_FOLDER}/${id}.json`, dropboxPayload);
      })().catch((err) => console.error('Dropbox upload error:', err))
    );

    const templateData = {
      name,
      company,
      email,
      country: country || '',
      phone: phone || '',
      notes: combinedNotes || '',
      purpose: kind,
      referenceId: id,
    };

    // Internal notification (fixed recipient defined on the template)
    tasks.push(
      invokeSendEmail(supabaseUrl, serviceKey, {
        templateName: 'request-internal',
        idempotencyKey: `request-internal-${id}`,
        templateData,
      }).catch((err) => console.error('Internal email enqueue error:', err))
    );

    // Confirmation to the submitter
    tasks.push(
      invokeSendEmail(supabaseUrl, serviceKey, {
        templateName: 'request-confirmation',
        recipientEmail: email,
        idempotencyKey: `request-confirmation-${id}`,
        templateData,
      }).catch((err) => console.error('Confirmation email enqueue error:', err))
    );

    await Promise.all(tasks);

    return new Response(JSON.stringify({ ok: true, id }), {
      status: 200,
      headers: { ...corsHeaders, 'Content-Type': 'application/json' },
    });
  } catch (err) {
    console.error('Unexpected error:', err);
    return new Response(
      JSON.stringify({ error: 'internal_error', message: 'Something went wrong, please try again later.' }),
      { status: 500, headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
    );
  }
});
