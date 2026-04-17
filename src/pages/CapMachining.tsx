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
        <div className="max-w-6xl mx-auto space-y-10">

          {/* Batch Sizes & What Gets Made */}
          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-card border border-border rounded-lg p-8 shadow-sm">
              <h3 className="text-lg font-semibold mb-4">Batch Sizes</h3>
              <p className="text-base text-muted-foreground leading-relaxed">
                We are best suited to machined parts with enough repeat demand to recover setup cost and enough technical complexity to justify careful process definition. In practice, this typically means annual volumes from approx. 10's to 100,000's. That range is particularly well matched to high-mix, low-to-medium-volume work, which remains our specialty.
              </p>
            </div>
            <div className="bg-card border border-border rounded-lg p-8 shadow-sm">
              <h3 className="text-lg font-semibold mb-4">What Gets Made Here</h3>
              <p className="text-base text-muted-foreground leading-relaxed">
                Complex components and sub-assembly parts — housings, shafts, and precision machined components — held to tight tolerances across small-to-medium batch sizes. Materials: steel, cast iron, ductile iron, and non-ferrous alloys. [Owner to add tolerance range and batch size range once confirmed]
              </p>
            </div>
          </div>

          {/* What Makes It Different */}
          <div className="bg-card border border-border rounded-lg p-8 shadow-sm">
            <h3 className="text-lg font-semibold mb-4">What Makes Pentagon's Machining Different</h3>
            <p className="text-base text-muted-foreground leading-relaxed">
              All jigs, fixtures, and gauges are designed and manufactured in-house — a direct consequence of Pentagon's machine tool manufacturing origin. Pentagon does not outsource fixturing. This means faster development cycles and tighter control over first-article quality.
            </p>
          </div>

          {/* Sourcing and Logistics */}
          <div className="bg-card border border-border rounded-lg p-8 shadow-sm">
            <h3 className="text-lg font-semibold mb-4">Sourcing and Logistics</h3>
            <p className="text-base text-muted-foreground leading-relaxed">
              We maintain decades-long relationships with key vendors certified for castings, forgings, heat treatment, and raw materials from India and abroad to meet customers' desired quality. Incoming goods inspection, traceability, and controlled storage, support stable production, while packing, labeling, and dispatch ensure parts arrive in the required condition and with the required traceability and documentation. Parts are shipped worldwide.
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
