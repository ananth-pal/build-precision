import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import SiteHeader from "@/components/SiteHeader";
import SiteFooter from "@/components/SiteFooter";
import PageHero from "@/components/PageHero";

export default function GearCutting() {
  return (
    <div className="min-h-screen flex flex-col">
      <SiteHeader />
      <PageHero title="Gear Cutting" subtitle="Spur and helical gears, splined shafts, and transmission components from a dedicated facility." />
      <main className="flex-1 section-padding">
        <div className="max-w-7xl mx-auto">
          <div className="mb-12">
            <h3 className="text-lg font-semibold mb-4">What Makes Pentagon's Gear Cutting Different</h3>
            <p className="text-sm text-muted-foreground leading-relaxed max-w-3xl">
              The gear cutting division is self-contained, with in-house profile and PCD testing. Gears produced here feed directly into Pentagon's own sub-assembly builds — the same team that cuts the gears assembles the PTOs. There is no handoff between suppliers at this stage.
            </p>
          </div>

          <div className="bg-card border border-border rounded-lg p-8 shadow-sm mb-12">
            <h3 className="text-lg font-semibold mb-4">Gear Types</h3>
            <p className="text-base text-muted-foreground leading-relaxed">
              External and internal spur and helical gears up to around 6 module and 200 mm outside diameter are produced routinely to ISO accuracy grade 4. Splined shafts, pinion shafts, and other transmission components are also manufactured. Tooth rounding and chamfering are standard, while crowning, tip relief, and similar profile modifications are included where the application calls for them.
            </p>
          </div>

          <Link to="/technologies" className="text-primary text-sm font-medium inline-flex items-center gap-1 hover:gap-2 transition-all">
            See the equipment and processes behind this capability <ArrowRight size={14} />
          </Link>
        </div>
      </main>
      <SiteFooter />
    </div>
  );
}
