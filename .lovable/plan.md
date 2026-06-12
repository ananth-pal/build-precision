## Goal

On `/technologies` (Means of Production), add a "Request Detailed Machine List" button styled like the brochure download button on the About page, placed **above** the "New Processes and Equipment" section. Clicking it opens a modal with a form. On submit, the request is:
1. Stored in a Lovable Cloud database table
2. Uploaded as a JSON file to a Dropbox folder
3. Emailed to enquiries@sellvindsgroup.com

## UI changes

**`src/pages/Technologies.tsx`**
- Add a centered CTA block between the cards grid section and the "New Processes and Equipment" section:
  - Heading: "Detailed Machine List"
  - One-line description: "Full equipment register with makes, models, and capacities — available on request to qualified enquiries."
  - Button (reusing the `.download-btn` class from About) with `FileText` icon: "Request Detailed Machine List"
- Button opens a new `<RequestMachineListDialog />` component (shadcn `Dialog`).

**New: `src/components/RequestMachineListDialog.tsx`**
- shadcn Dialog containing a form with fields:
  - Full Name * (required)
  - Company * (required)
  - Email * (required, validated)
  - Country (optional)
  - Phone (optional)
  - Intended application / notes (optional, textarea)
- Zod schema validation, inline error messages, toast on success/error.
- Submit calls the edge function `submit-machine-list-request` via `supabase.functions.invoke`.
- On success: show confirmation state inside the dialog ("Request received — we will be in touch shortly").

## Backend

**Lovable Cloud table: `machine_list_requests`**

```
id uuid pk default gen_random_uuid()
name text not null
company text not null
email text not null
country text
phone text
notes text
created_at timestamptz default now()
```

Grants: `INSERT` to `anon` and `authenticated` (public form); `SELECT/ALL` to `service_role` only. RLS enabled with an INSERT policy `to anon, authenticated using (true) with check (true)`. No SELECT policy for public — only service role reads.

**Edge function: `supabase/functions/submit-machine-list-request/index.ts`**
- CORS enabled.
- Zod-validated body.
- Steps:
  1. Insert row into `machine_list_requests` using service role.
  2. Upload `{id}.json` (full submission) to Dropbox folder `/Machine List Requests/` via Dropbox API (`POST https://content.dropboxapi.com/2/files/upload`) using `DROPBOX_ACCESS_TOKEN` secret.
  3. Send email to `enquiries@sellvindsgroup.com` with the submission details (subject `New machine list request — {company}`).
- Returns `{ ok: true }` or structured error. Email and Dropbox failures are logged but do not fail the request (DB row is the source of truth).

## Email delivery

Use **Lovable Emails** (built-in) via the app-emails infrastructure:
- Run `email_domain--check_email_domain_status`. If no domain configured, present the email setup dialog first (one-time setup by user).
- Run `email_domain--setup_email_infra`, then `email_domain--scaffold_transactional_email`.
- Add a React Email template `machine-list-request-notification.tsx` (recipient: `enquiries@sellvindsgroup.com`, contents: all submitted fields formatted as a clean detail list).
- Edge function invokes `send-transactional-email` with `templateName: 'machine-list-request-notification'`, `recipientEmail: 'enquiries@sellvindsgroup.com'`, `idempotencyKey: machine-list-${id}`, and `templateData`.

Note: this is permitted as an app email — it's a single notification triggered by a specific user action to a single fixed recipient.

## Dropbox integration

Dropbox is not a Lovable connector, so it needs a manually generated token:
1. User goes to https://www.dropbox.com/developers/apps → Create app → Scoped access → App folder (recommended) or Full Dropbox → Permissions tab → enable `files.content.write` → Generate access token (or set up refresh token for long-lived access).
2. User provides the token; I store it as the secret `DROPBOX_ACCESS_TOKEN`.
3. Edge function uploads to `/Machine List Requests/{id}.json`.

**Caveat to flag**: Dropbox short-lived tokens expire in ~4 hours. For production reliability, a refresh-token flow (with `DROPBOX_APP_KEY`, `DROPBOX_APP_SECRET`, `DROPBOX_REFRESH_TOKEN`) is recommended. I'll implement the refresh-token path so uploads keep working indefinitely.

## Order of operations during build

1. Ask user to confirm Dropbox setup approach (long-lived refresh token vs. simple access token for testing).
2. Enable Lovable Cloud (if not already) and check email domain status.
3. Set up email infrastructure + scaffold transactional email if needed.
4. Create DB migration for `machine_list_requests`.
5. Add Dropbox secrets (request from user via secrets tool).
6. Create edge function and React Email template; deploy.
7. Build dialog component and wire button into `Technologies.tsx`.
8. Test end-to-end from the preview.

## Open questions before implementation

- Dropbox: simple long-lived access token (faster) or refresh-token flow (production-ready)?
- Should the form also CC the submitter with a confirmation email? (Recommended yes — small trust signal.)
- Should the email subject and CTA copy use "Detailed Machine List" or a different label?
