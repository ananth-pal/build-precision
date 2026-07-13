## Careers page

Add a new `/careers` page inviting trainees, freshers, and experienced applicants to share their details with Pentagon. Uses the same `enquiries@sellvindsgroup.com` mailbox as the Contact page — no new backend or email infrastructure needed.

### Page content (`src/pages/Careers.tsx`)

- `PageHero` title: **"Careers at Pentagon"**, subtitle encouraging engineering trainees, ITI/diploma freshers, and experienced machinists to reach out even when no role is formally listed.
- Short intro paragraph in the site's engineer-to-engineer tone: what kind of people thrive here (curious, hands-on, long-tenure culture — reflects existing "line managers 2 decades+" copy).
- **Who we're looking for** — small list: Graduate/diploma engineering trainees (Mechanical/Production), ITI machinists & fitters, CNC operators & setters, Quality/metrology, Experienced hires across gear cutting, assembly, and machining.
- **What we offer** — short list: structured on-the-job training under long-tenure line managers, exposure to precision hydraulics / gear cutting / assembly, medical cover for the full workforce, long-term career path.
- **Apply** form (right column on desktop, stacked on mobile): Full name, Email, Phone, Highest qualification, Area of interest (select: Trainee/Fresher, CNC/Machining, Gear Cutting, Assembly, Quality, Other), Years of experience, Short note.
  - **Resume attachment note**: browser `mailto:` cannot attach files, so the form uses `mailto:enquiries@sellvindsgroup.com` with subject `Career application — {name} ({area})` and a pre-filled body. A helper line above the submit button tells applicants to attach their CV to the email that opens.
  - Fallback: a plain "Or email your CV directly to enquiries@sellvindsgroup.com" line with a `mailto:` link, matching Contact page styling.

### Navigation & footer wiring

- `src/components/SiteHeader.tsx`: add `{ label: "Careers", path: "/careers" }` to `navItems` (placed after About).
- `src/components/SiteFooter.tsx`: add a "Careers" link alongside "Contact / RFQ".
- `src/App.tsx`: add `<Route path="/careers" element={<Careers />} />` and the import.

### Out of scope

- No database table, edge function, or file upload backend. If the user later wants real resume uploads with storage, that's a follow-up (Lovable Cloud storage bucket + a `career_applications` table + a submission edge function).
