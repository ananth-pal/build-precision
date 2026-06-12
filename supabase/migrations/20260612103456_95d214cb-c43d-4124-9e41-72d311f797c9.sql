
CREATE TABLE public.machine_list_requests (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  name text NOT NULL,
  company text NOT NULL,
  email text NOT NULL,
  country text,
  phone text,
  notes text,
  created_at timestamptz NOT NULL DEFAULT now()
);

GRANT INSERT ON public.machine_list_requests TO anon, authenticated;
GRANT ALL ON public.machine_list_requests TO service_role;

ALTER TABLE public.machine_list_requests ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Anyone can submit a machine list request"
  ON public.machine_list_requests
  FOR INSERT
  TO anon, authenticated
  WITH CHECK (true);
