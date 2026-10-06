# Home page: heritage and leadership snapshot in "Who We Are"

The section keeps the title **Who We Are**. It is extended so that visitors see the heritage and the leadership without leaving the home page.

## New layout of "Who We Are"

```text
Who We Are
[Sellvinds Group logo] Part of the Sellvinds Group — 62 years of manufacturing excellence
---------------------------------------------------------------
Existing 3 paragraphs (machine-tool roots, plants, generations) | Zoller photo
---------------------------------------------------------------
Heritage strip: 4 milestones in a row (stacked on phones)
  1954  Founder joins HMT, later DGM; sets up its SPM Division
  1970s Pentagon founded as a custom machine-tool builder
  1999  Contract manufacturing begins for a global hydraulics OEM
  Today 100+ product types exported; ISO 9001:2015
  -> See our heritage
---------------------------------------------------------------
Leadership: 4 compact cards (photo, name, title, one-line credential)
  Ramanathan Palaniappan  Founder Chairman (Retired)   Ex-DGM, HMT; founded PROTEL (1965)
  Natarajan Palaniappan   Managing Director            36+ years; Fellow, IIPE
  Dr. Varun Palaniappan   Manager, Strategy & Planning Imperial College London
  Ananth Palaniappan      Manager, Project Engineering Cornell MEng; Six Sigma Black Belt
  Line note: Line managers average two decades or more with the company.
  -> Meet the leadership
```

- The Sellvinds line sits right under the heading so visitors recognise the group name straight away.
- The milestones and the credentials come word for word from the existing Heritage and Leadership pages. Nothing new is invented.
- The current "Learn more about us" link stays.
- The design stays minimal: thin red accent rules, round photos the same as on the Leadership page, and no carousels.

## Technical details

- Edit only `src/pages/Index.tsx`. Inside the existing "Who We Are" section, add a Sellvinds badge (`@/assets/brand/sellvinds-logo-cropped.png`), a milestone grid (`grid-cols-2 lg:grid-cols-4`) and a leader card grid (`grid-cols-1 sm:grid-cols-2 lg:grid-cols-4`).
- Import the leader photos from the existing `src/assets/leadership/*.asset.json` files and load them lazily.
- Use the semantic tokens that are already in place (`text-primary`, `border-border`, `text-muted-foreground`).
- The links go to `/about/heritage` and `/about/leadership`.
