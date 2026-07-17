DROP POLICY IF EXISTS "Anyone can submit a machine list request" ON public.machine_list_requests;

CREATE POLICY "Anyone can submit a machine list request"
ON public.machine_list_requests
FOR INSERT
TO anon, authenticated
WITH CHECK (
  length(btrim(name)) BETWEEN 1 AND 200
  AND length(btrim(company)) BETWEEN 1 AND 200
  AND length(email) BETWEEN 3 AND 320
  AND email ~* '^[^@\s]+@[^@\s]+\.[^@\s]+$'
  AND (country IS NULL OR length(country) <= 100)
  AND (phone IS NULL OR length(phone) <= 40)
  AND (notes IS NULL OR length(notes) <= 5000)
);