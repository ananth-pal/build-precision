## Switch to Lovable Emails

Replace the raw Resend integration in `submit-machine-list-request` with Lovable's built-in email infrastructure (queue-based, retries, suppression list, deliverability, no external API keys to manage). Also fix the stale brochure confirmation copy along the way.

### Prerequisite (needs you)

Lovable Emails needs a sender domain you own. You already own `pentagonmachines.in`, so we'll delegate a subdomain like `notify.pentagonmachines.in` for sending. This requires you to add a couple of NS records at your DNS provider — the setup dialog walks you through it.

Click below to start:

start

Set up email domain
&nbsp;

Scaffolding and code changes can happen before DNS verification finishes; emails just won't actually deliver until DNS is green (up to 72h, usually much faster).

### Once the domain is set up, I will:

1. **Provision infrastructure** — pgmq queues, send-log table, suppression list, unsubscribe tokens, queue processor, cron.
2. **Scaffold the transactional email function** — creates `send-transactional-email`, `handle-email-unsubscribe`, `handle-email-suppression`, plus example templates.
3. **Create two React Email templates** in `supabase/functions/_shared/transactional-email-templates/`:
  - `machine-list-request-internal.tsx` — internal notification to `enquiries@sellvindsgroup.com` (with reply-to submitter).
  - `machine-list-request-confirmation.tsx` — confirmation to the submitter.
  - Each template supports both machine-list and brochure variants via props (title/body copy). Brochure confirmation copy will be updated to: *"Thank you for your interest in Pentagon. We have received your request for our Company Brochure and a member of our team will send it across shortly."*
  - Templates use brand red accent, white background, Arial fallback — matches existing look.
  - Register in `registry.ts`.
4. **Rewrite `submit-machine-list-request/index.ts**` to:
  - Keep Zod validation, DB insert, and Dropbox upload as-is (Dropbox is a separate concern — see note below).
  - Remove the direct Resend `fetch` calls.
  - Instead invoke `send-transactional-email` twice (internal + confirmation) with idempotency keys derived from the row ID + template name.
5. **Create the unsubscribe page** at the path scaffolding chooses, so email footer unsubscribe links land on a branded page (required by Lovable Emails).
6. **Deploy** the affected edge functions.
7. **Remove** the now-unused `RESEND_API_KEY` secret.

### Not included (separate follow-ups)

- **Dropbox** is still broken (`401 invalid_access_token`) — that's independent of email. I'll leave the Dropbox code untouched for now; we can tackle the refresh-token flow in a follow-up. Meanwhile, submissions will still save to the database and send both emails; only the Dropbox JSON backup will keep failing silently.
- **Brochure PDF as attachment**: not adding it. Attachments aren't part of the Lovable Emails template pattern; a link in the email would be a better path if you want that later.

### What you'll see when done

- Contact/machine-list/brochure submissions send both emails through the Lovable queue.
- Sends are logged in `email_send_log` — I can query it any time to show delivery status.
- Bounces/complaints auto-populate a suppression list; those addresses are skipped on future sends.
- Unsubscribe footer auto-appended by the system (don't add one to templates).