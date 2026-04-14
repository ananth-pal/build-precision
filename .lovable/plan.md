

## Plan: Update Portfolio Page

### Changes to `src/pages/WhatWeMake.tsx`

1. **Page hero title**: Change "What We Make" to "Portfolio"
2. **Add "What We Make" subheading** above the product cards grid
3. **Add "Industries We Serve" subheading** above the industries section
4. **Split "Hydraulics & Industrial Machinery"** into two separate cards: "Hydraulics" and "Industrial Machinery"
5. **Enhance industry cards** with placeholder images (using unsplash/placeholder URLs) and lorem ipsum description text beneath each industry name
6. **Update industries data** to an array of objects with title, image, and description fields; render as visually richer cards with images

### Result
- 5 industry cards: Hydraulics, Industrial Machinery, Robotics, Aerospace, Defence
- Each industry card gets a placeholder image and a short lorem ipsum blurb
- Clear section headings separate products from industries

### Files modified
| File | Change |
|---|---|
| `src/pages/WhatWeMake.tsx` | All changes above |

