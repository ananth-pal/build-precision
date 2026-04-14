import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import SiteHeader from "@/components/SiteHeader";
import SiteFooter from "@/components/SiteFooter";
import PageHero from "@/components/PageHero";
import heroCnc from "@/assets/hero-cnc.jpg";

export default function Machining() {
  return (
    <div className="min-h-screen flex flex-col">
      <SiteHeader />
      <PageHero title="Machining" subtitle="Precision components and housings held to tight tolerances across small-to-medium batch sizes." backgroundImage={heroCnc} />
      <main className="flex-1 section-padding">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 mb-12">
            <div>
              <h3 className="text-lg font-semibold mb-4">What Gets Made Here</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">
                Complex components and sub-assembly parts — housings, shafts, and precision machined components — held to tight tolerances across small-to-medium batch sizes. Materials: steel, cast iron, ductile iron, and non-ferrous alloys. [Owner to add tolerance range and batch size range once confirmed]
              </p>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-4">What Makes Pentagon's Machining Different</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">
                All jigs, fixtures, and gauges are designed and manufactured in-house — a direct consequence of Pentagon's machine tool manufacturing origin. Pentagon does not outsource fixturing. This means faster development cycles and tighter control over first-article quality.
              </p>
            </div>
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
