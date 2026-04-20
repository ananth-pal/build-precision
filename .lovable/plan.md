

User wants three edits to `src/pages/OurApproach.tsx`:

1. Merge "Ramp-up" (05) and "Sustain" (06) into a single "Ramp and Sustain" step, with content closer to the brochure.
2. Remove the italic note on step 02 (DFM & Tooling).
3. Remove placeholder text on the page.

Let me parse the brochure to get the exact "Ramp and Sustain" copy.
<lov-plan-tools>
<lov-tool-use id="toolu_vrtx_01XkasKSxCJq8kZkvYtfJ58b" name="document--parse_document" integration-id="document" data="{\"file_path\": \"user-uploads://Pentagon_Brochure-2.pdf\"}">
</lov-tool-use>

<lov-tool-use id="toolu_vrtx_01N5EMTcWiKnojj6b27T6bZo" name="document--parse_document" integration-id="document" data="{\"file_path\": \"user-uploads://Pentagon_Brochure-2.pdf\"}">
</lov-tool-use>
<lov-plan>
Edits to `src/pages/OurApproach.tsx`:

**1. Merge Ramp-up + Sustain back into one step**

Replace steps 05 and 06 with a single combined step matching the brochure:
- `05 — Ramp and Sustain` — "Release, engineering change, order handling, buffer stock, and ongoing quality reporting."

Final steps array (5 items):
- 01 Kickoff and NDA
- 02 DFM and Tooling
- 03 Prototyping
- 04 Validation
- 05 Ramp and Sustain

**2. Remove italic content in step 02 (DFM and Tooling)**

Drop the `note` field on the DFM card ("We give feedback on design intent, not just tolerances..."). The italic block at the bottom of that card disappears.

**3. Remove placeholder text**

- Hero subtitle `[PLACEHOLDER — owner to write intro.]` → replace with brochure intro: *"At Pentagon, precision dictates our every process. Every stage of our workflow is built on collaboration, technical rigour, and continuous improvement to ensure each product meets the highest standards of quality and performance."*
- Remove the small `[Owner to refine]` caption under the values paragraph.
- Remove `[status: in progress — confirm with owner before publishing]` notes from ISO 14001 and ISO 45001 entries (leaving the cert names with a clean short note, or drop them entirely — defaulting to keeping only ISO 9001:2015 to avoid shipping unconfirmed claims, consistent with brochure which only lists ISO 9001:2015).

**4. No other changes**

ESG section, page title ("Working with Pentagon"), and overall layout stay as-is.

Files touched: `src/pages/OurApproach.tsx` only.
