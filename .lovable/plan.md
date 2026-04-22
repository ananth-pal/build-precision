

## Update Portfolio page (`/what-we-make`)

Three changes to `src/pages/WhatWeMake.tsx`:

### 1. Remove "Work We Are Suited To" section
Delete the entire section (heading, intro paragraph, bulleted list of fit characteristics, and closing paragraph) along with the divider above it. Also remove the now-unused `fitCharacteristics` constant at the top of the file.

### 2. Remove "Industrial Machinery" from End Markets
Drop the third entry in the `endMarkets` array. The remaining two cards ("Off-Highway, Commercial Vehicles, and Agriculture" and "Automotive") will still render in the existing 2-column grid.

### 3. Add an "Emerging / Exploratory Markets" sub-block under End Markets
Below the existing 2-column End Markets grid, add a small visually-secondary block listing four new markets at reduced prominence:

- **Medical**
- **Robotics**
- **Aerospace**
- **Defence**

Layout: a single short intro line ("Active enquiry and early-stage development in:") followed by a 2- or 4-column grid of small cards. Each card contains only the market name as a small heading — no body copy. Styling: smaller text (`text-sm`), muted, lighter border, less padding than the main market cards. This visually signals these are emerging/exploratory rather than established production programs, while keeping them on the page so OEMs in those sectors see Pentagon as a candidate.

### Untouched
- Hero, "What We Make" product families grid, "Closing invitation" section, header, footer.
- All other pages, theme tokens, and components.

