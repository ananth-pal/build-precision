

## Add partnership invitation to Home page

Place the new copy as a closing call-to-action band at the bottom of the home page, directly above the stats strip. It works there because the page has just walked the reader through capability, scale, philosophy, markets, and current activity — by that point the reader either bounces or wants to act. A short invitation with a single clear next step ("send your drawing") is the right close.

### Copy

> Are you looking for a reliable manufacturing partner that is committed to a longstanding relationship? Send us your drawing and we can get started.

### Placement

`src/pages/Index.tsx` — insert a new `<section>` between the existing "Currently underway" section and the "Stats" section.

### Design

- Full-width band, `bg-secondary` (matches the alternating section rhythm — Currently underway is already `bg-secondary`, so use plain white background here to break the repetition, with a top border).
- Centred content, `max-w-3xl mx-auto`, generous vertical padding (`py-16 lg:py-20`).
- Single short heading: **"Start a conversation"** (h2, same size as other section headings).
- The invitation copy as one paragraph below the heading, `text-muted-foreground`, `leading-relaxed`.
- One CTA button only: **"Request a Quote"** linking to `/contact`, styled to match the primary CTA already used in the hero (`bg-primary text-primary-foreground`). No secondary button — the section's whole job is to funnel to contact.

### What stays untouched

- Hero, capability section, scale and heritage, what makes Pentagon different, markets we serve, currently underway, stats, header, footer.
- No theme tokens, no new components, no images.

