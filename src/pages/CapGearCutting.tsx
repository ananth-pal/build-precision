import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import SiteHeader from "@/components/SiteHeader";
import SiteFooter from "@/components/SiteFooter";
import PageHero from "@/components/PageHero";
import ImagePlaceholder from "@/components/ImagePlaceholder";
import gearsImg from "@/assets/portfolio/Gears_2.jpeg.asset.json";
import gearShaperImg from "@/assets/capabilities/gear-shaper-lorenz.png.asset.json";


export default function GearCutting() {
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
            <ImagePlaceholder
              ratio="aspect-[4/3]"
            <div className="aspect-[4/3] overflow-hidden rounded-md bg-muted">
              <img src={gearsImg.url} alt="Finished gears and splined shafts" loading="lazy" className="w-full h-full object-cover" />
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-6 mb-12">
            <div className="aspect-[4/3] overflow-hidden rounded-md bg-muted">
              <img src={gearShaperImg.url} alt="Lorenz gear shaper on the floor" loading="lazy" className="w-full h-full object-cover" />
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
