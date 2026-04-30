## Goal

On the Leadership page, remove the standalone "Ramanathan Palaniappan, Founder" section at the top, and ensure the unique content from that section (notably the Annamalai University Syndicate/Senate/Board of Selection membership) lives inside his "Full bio" dropdown on his leader card.

## Changes (single file: `src/pages/Leadership.tsx`)

1. Delete the `<section>` block (lines 61–80) containing the heading "Ramanathan Palaniappan, Founder" and its four paragraphs. The grid of leader cards becomes the first content block under the page hero.

2. Update the `fullBio` string for Ramanathan Palaniappan (line 12) so the dropdown contains all the relevant info from the removed section, deduplicated.

   The existing `fullBio` already covers: HMT career, delegations, Chettinad Cements board, SRP Tools, Planning Commission Machine Tool Subcommittee, Bank of America India Advisory Board, UN ESCAP-UNIDO consultancy, Tamil author honours.

   Add (only what's new): the Annamalai University Syndicate, Senate, and Board of Selection membership.

   Proposed appended sentence:

   > "He has also been a distinguished member of the Syndicate, Senate, and Board of Selection of Annamalai University, his alma mater."

   The Chettinad Cements and Bank of America facts from the removed paragraph are already in `fullBio`, so they will not be duplicated.

## Result

- Leadership page opens directly with the 2x2 grid of leader cards.
- Ramanathan's card shows the existing short bio; clicking "Full bio" reveals the expanded text including the Annamalai University governance roles.
- No other pages or content affected.
