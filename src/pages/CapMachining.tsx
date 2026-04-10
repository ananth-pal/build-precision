import { Download } from "lucide-react";
import SiteHeader from "@/components/SiteHeader";
import SiteFooter from "@/components/SiteFooter";
import PageHero from "@/components/PageHero";
import heroCnc from "@/assets/hero-cnc.jpg";

export default function Machining() {
  return (
    <div className="min-h-screen flex flex-col">
      <SiteHeader />
      <PageHero title="Machining" subtitle="[PLACEHOLDER — owner to write intro: material types handled, process families, what Pentagon produces at this stage.]" backgroundImage={heroCnc} />
      <main className="flex-1 section-padding">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-3 gap-8 mb-12">
            <div className="capability-card">
              <h3 className="text-lg font-semibold mb-4">Turning & Milling</h3>
              <ul className="text-sm text-muted-foreground space-y-2">
                <li>CNC horizontal and vertical machining centres</li>
                <li>CNC turning centres</li>
                <li>Fine boring</li>
              </ul>
            </div>
            <div className="capability-card">
              <h3 className="text-lg font-semibold mb-4">Finishing</h3>
              <ul className="text-sm text-muted-foreground space-y-2">
                <li>Surface and cylindrical grinding</li>
                <li>Lapping</li>
                <li>Honing</li>
              </ul>
            </div>
            <div className="capability-card border-primary/30 border-2">
              <h3 className="text-lg font-semibold mb-4 text-primary">Tooling</h3>
              <p className="text-sm text-muted-foreground mb-3">A genuine differentiator — most contract manufacturers outsource fixturing.</p>
              <ul className="text-sm text-muted-foreground space-y-2">
                <li>In-house design and manufacture of jigs, fixtures, and gauges</li>
                <li>Manual and hydraulic fixtures</li>
                <li>CNC tool presetter with extensive high-end tooling</li>
              </ul>
            </div>
          </div>
          <a href="#" className="download-btn">
            <Download size={16} /> Download Equipment List
          </a>
        </div>
      </main>
      <SiteFooter />
    </div>
  );
}
