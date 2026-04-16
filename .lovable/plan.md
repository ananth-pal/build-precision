

## Plan: Rewrite Assembly Capabilities Page

### File: `src/pages/CapAssembly.tsx`

Replace the entire page content with the provided copy, structured as follows:

1. **Hero**: Title "Assembly", subtitle summarizing the value proposition (first paragraph of Introduction)
2. **Introduction section**: Two-paragraph intro covering the engineered production system and value proposition
3. **Content sections** — each as a styled block with heading and body text:
   - Types of Assemblies
   - Batch Sizes and Scale-Up
   - Inspection and Tests
   - Sourcing and Integration
   - Logistics and Shipment Readiness
4. **Conclusion section**: Final two paragraphs as a visually distinct closing block

### Layout approach
- Follow the pattern used in `CapGearCutting.tsx` — prose-driven sections with `text-sm text-muted-foreground leading-relaxed` styling
- Use alternating full-width and two-column layouts to break up the text wall
- Remove the old placeholder cards and stat block entirely

### Files modified
| File | Change |
|---|---|
| `src/pages/CapAssembly.tsx` | Full rewrite with provided copy |

