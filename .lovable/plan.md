## Portfolio update

**Remove** these three entries from the Selected Work gallery in `src/pages/WhatWeMake.tsx`:
- PTO Gearboxes (`PTOs_1.png`)
- Base PTOs (`PTOs_2.png`)
- Gear Pumps (`Gear_pumps.png`)

**Add** the 10 newly uploaded photos as new gallery tiles, placed at the top of the assemblies group so they lead the page:

| File | Caption |
|---|---|
| `PTO_1_cropped.png` | PTO Gearbox |
| `PTO_finished_1_edit.png` | PTO Gearboxes |
| `PTO_finished_2_edit.png` | PTO Housings |
| `PTO_assembly_1_edit-4.png` | PTO Assembly |
| `PTO_assembly_2_edit-4.png` | PTO Assembly |
| `PTO_assembly_3_edit-4.png` | PTO Assembly |
| `Gear_pump_5_edit-4.png` | Gear Pump |
| `Gear_pump_1_edited-5.png` | Gear Pump Housing |
| `Machined_housings_1_edited-3.png` | Machined Housings |
| `Fixtures_2_edited-2.png` | Fixtures |

### Technical steps
1. Upload each of the 10 files via `lovable-assets create --file /mnt/user-uploads/...` writing pointers to `src/assets/portfolio/<name>.asset.json`.
2. Delete the three old asset pointers (`PTOs_1`, `PTOs_2`, `Gear_pumps`) with `lovable-assets delete`.
3. Update `src/pages/WhatWeMake.tsx`: replace the three removed imports/entries with the 10 new imports, keeping the existing components (Balancers, Valves, and component shots) in order below.

### Open questions
- Some of the new photos (Machined Housings, Fixtures) are components/tooling rather than finished assemblies — happy to include them in the Portfolio gallery, or would you prefer those two stay off this page? Default: include all 10 as listed.
- Captions above are my suggestions; tell me if you want different wording.
