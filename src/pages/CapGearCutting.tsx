import { useState } from "react";
import { Link } from "react-router-dom";
import { Shuffle } from "lucide-react";
import SiteHeader from "@/components/SiteHeader";
import SiteFooter from "@/components/SiteFooter";
import PageHero from "@/components/PageHero";
import gearsImg from "@/assets/portfolio/Gears.png.asset.json";
import gearCuttingImg from "@/assets/capabilities/gear-cutting-machine-v3.png.asset.json";
import shaperCloseup from "@/assets/capabilities/shaper-closeup.png.asset.json";
import shaperWide from "@/assets/capabilities/shaper-wide.png.asset.json";

const shaperImages = [gearCuttingImg, shaperCloseup, shaperWide];
const gearsImages = [
  { url: gearsImg.url, alt: "Finished gears and splined shafts" },
  { url: gearCuttingImg.url, alt: "Gear cutting machine mid-setup" },
];

export default function GearCutting() {
  const [shaperIdx, setShaperIdx] = useState(0);
  const [gearsIdx, setGearsIdx] = useState(0);
  const current = shaperImages[shaperIdx];
  const currentGears = gearsImages[gearsIdx];

  return (
    <div className="min-h-screen flex flex-col">
      <SiteHeader />
      <PageHero title="Gear Cutting" subtitle="External and internal gears, splined shafts, and related transmission components are produced in a dedicated gear cutting division. Gears produced here feed directly into Pentagon's own assemblies." />
      <main className="flex-1 section-padding">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 gap-6 mb-8">
            <div className="bg-card border border-border rounded-lg p-8 shadow-sm">
              <h3 className="text-lg font-semibold mb-4">Gear Types</h3>
              <p className="text-base text-muted-foreground leading-relaxed">
                External and internal spur and helical gears up to around 6 module and 200 mm outside diameter are produced. Splined shafts, pinion shafts, and other transmission components are also manufactured. Tooth rounding and chamfering are standard, while crowning, tip relief, and similar profile modifications are included where the application calls for them.
              </p>
            </div>
            <div className="relative aspect-[4/3] overflow-hidden rounded-md bg-muted">
              <img src={currentGears.url} alt={currentGears.alt} loading="lazy" className="w-full h-full object-cover" />
              <button
                type="button"
                onClick={() => setGearsIdx((i) => (i + 1) % gearsImages.length)}
                aria-label="Show next image"
                className="absolute bottom-3 right-3 inline-flex items-center gap-1.5 rounded-full bg-black/60 hover:bg-black/75 text-white text-xs font-medium px-3 py-1.5 backdrop-blur-sm transition"
              >
                <Shuffle className="w-3.5 h-3.5" />
                {gearsIdx + 1}/{gearsImages.length}
              </button>
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-6 mb-12">
            <div className="relative aspect-[4/3] overflow-hidden rounded-md bg-muted">
              <img src={current.url} alt="Lorenz gear shaper on the floor" loading="lazy" className="w-full h-full object-cover" />
              <button
                type="button"
                onClick={() => setShaperIdx((i) => (i + 1) % shaperImages.length)}
                aria-label="Show next image"
                className="absolute bottom-3 right-3 inline-flex items-center gap-1.5 rounded-full bg-black/60 hover:bg-black/75 text-white text-xs font-medium px-3 py-1.5 backdrop-blur-sm transition"
              >
                <Shuffle className="w-3.5 h-3.5" />
                {shaperIdx + 1}/{shaperImages.length}
              </button>
            </div>
            <div className="bg-card border border-border rounded-lg p-8 shadow-sm">
              <h3 className="text-lg font-semibold mb-4">Process</h3>
              <p className="text-base text-muted-foreground leading-relaxed">
                Blank preparation, teeth cutting, heat treatment, and post-heat treatment finishing are managed under one roof. Heat treatment is coordinated with long-standing certified vendors, and post-heat treatment machining of bore and reference faces is standard. Inspection records and material traceability carry through from blank to finished gear.
              </p>
            </div>
          </div>

          <p className="text-sm text-muted-foreground leading-relaxed max-w-3xl">
            Materials, batch sizes, sourcing and logistics, and quality apply equally to gear work and are covered on the <Link to="/capabilities/machining" className="text-primary hover:underline">Machining</Link> page. Equipment and gear-specific processes are covered under <Link to="/technologies" className="text-primary hover:underline">Means of Production</Link>.
          </p>
        </div>
      </main>
      <SiteFooter />
    </div>
  );
}
