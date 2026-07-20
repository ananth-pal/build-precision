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
});

const RECIPIENT = 'enquiries@sellvindsgroup.com';
const DROPBOX_FOLDER = '/Machine List Requests';

function escapeHtml(s: string) {
  return s
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#39;');
}

function renderInternalEmail(data: Record<string, string>, id: string) {
  const rows = Object.entries(data)
    .filter(([, v]) => v && v.length > 0)
    .map(
      ([k, v]) =>
        `<tr><td style="padding:6px 12px;border-bottom:1px solid #eee;color:#666;font-size:13px;text-transform:capitalize;vertical-align:top;">${escapeHtml(k)}</td><td style="padding:6px 12px;border-bottom:1px solid #eee;font-size:14px;color:#111;white-space:pre-wrap;">${escapeHtml(v)}</td></tr>`
    )
    .join('');
  return `<!doctype html><html><body style="font-family:Arial,sans-serif;background:#fff;color:#111;">
    <div style="max-width:560px;margin:0 auto;padding:24px;">
      <h2 style="margin:0 0 4px 0;font-size:18px;">New Detailed Machine List request</h2>
      <p style="margin:0 0 16px 0;color:#666;font-size:13px;">Submitted via Pentagon website — Means of Production</p>
      <table style="width:100%;border-collapse:collapse;border-top:1px solid #eee;">${rows}</table>
      <p style="margin:20px 0 0 0;color:#999;font-size:12px;">Reference ID: ${id}</p>
    </div></body></html>`;
}

function renderConfirmationEmail(name: string) {
  return `<!doctype html><html><body style="font-family:Arial,sans-serif;background:#fff;color:#111;">
    <div style="max-width:560px;margin:0 auto;padding:24px;">
      <h2 style="margin:0 0 12px 0;font-size:18px;">Request received</h2>
      <p style="font-size:14px;line-height:1.6;color:#333;">Dear ${escapeHtml(name)},</p>
      <p style="font-size:14px;line-height:1.6;color:#333;">Thank you for your interest in Pentagon's manufacturing capabilities. We have received your request for our detailed machine list and a member of our team will be in touch shortly.</p>
      <p style="font-size:14px;line-height:1.6;color:#333;">If your enquiry is time-sensitive, you may also reach us directly at <a href="mailto:enquiries@sellvindsgroup.com" style="color:#c8102e;">enquiries@sellvindsgroup.com</a>.</p>
      <p style="font-size:14px;line-height:1.6;color:#333;margin-top:24px;">— Pentagon Machines and Services Pvt. Ltd.</p>
    </div></body></html>`;
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

async function sendEmail(
  apiKey: string,
  payload: { to: string[]; subject: string; html: string; reply_to?: string }
) {
  const res = await fetch('https://api.resend.com/emails', {
    method: 'POST',
    headers: {
      Authorization: `Bearer ${apiKey}`,
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      from: 'Pentagon Website <onboarding@resend.dev>',
      ...payload,
    }),
  });
  if (!res.ok) {
    const text = await res.text();
    throw new Error(`Resend send failed: ${res.status} ${text}`);
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

    const { name, company, email, country, phone, notes } = parsed.data;

    const supabase = createClient(
      Deno.env.get('SUPABASE_URL')!,
      Deno.env.get('SUPABASE_SERVICE_ROLE_KEY')!
    );

    const { data: inserted, error: insertError } = await supabase
      .from('machine_list_requests')
      .insert({
        name,
        company,
        email,
        country: country || null,
        phone: phone || null,
        notes: notes || null,
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

    // Dropbox + email run in parallel; failures are logged but do not fail the request.
    const dropboxToken = Deno.env.get('DROPBOX_ACCESS_TOKEN');
    const resendKey = Deno.env.get('RESEND_API_KEY');

    const dropboxPayload = JSON.stringify(
      {
        id,
        created_at: inserted.created_at,
        name,
        company,
        email,
        country: country || null,
        phone: phone || null,
        notes: notes || null,
      },
      null,
      2
    );

    const tasks: Promise<unknown>[] = [];

    if (dropboxToken) {
      tasks.push(
        uploadToDropbox(dropboxToken, `${DROPBOX_FOLDER}/${id}.json`, dropboxPayload).catch(
          (err) => console.error('Dropbox upload error:', err)
        )
      );
    } else {
      console.warn('DROPBOX_ACCESS_TOKEN not set — skipping Dropbox upload');
    }

    if (resendKey) {
      const summary = { name, company, email, country: country || '', phone: phone || '', notes: notes || '' };
      tasks.push(
        sendEmail(resendKey, {
          to: [RECIPIENT],
          subject: `New machine list request — ${company}`,
          html: renderInternalEmail(summary, id),
          reply_to: email,
        }).catch((err) => console.error('Internal email send error:', err))
      );
      tasks.push(
        sendEmail(resendKey, {
          to: [email],
          subject: 'We received your request — Pentagon',
          html: renderConfirmationEmail(name),
        }).catch((err) => console.error('Confirmation email send error:', err))
      );
    } else {
      console.warn('RESEND_API_KEY not set — skipping email send');
    }

    await Promise.all(tasks);

    return new Response(JSON.stringify({ ok: true, id }), {
      status: 200,
      headers: { ...corsHeaders, 'Content-Type': 'application/json' },
    });
  } catch (err) {
    console.error('Unexpected error:', err);
    return new Response(
      JSON.stringify({ error: 'internal_error', message: (err as Error).message }),
      { status: 500, headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
    );
  }
});
