import { Download } from "lucide-react";
import SiteHeader from "@/components/SiteHeader";
import SiteFooter from "@/components/SiteFooter";
import PageHero from "@/components/PageHero";

export default function GearCutting() {
  return (
    <div className="min-h-screen flex flex-col">
      <SiteHeader />
      <PageHero title="Gear Cutting" subtitle="[PLACEHOLDER — owner to write intro: gear types, processes, output.]" />
      <main className="flex-1 section-padding">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 gap-8 mb-12">
            <div className="capability-card">
              <h3 className="text-lg font-semibold mb-4">Cutting & Forming</h3>
              <ul className="text-sm text-muted-foreground space-y-2">
                <li>Hobbing</li>
                <li>Shaving</li>
                <li>Shaping</li>
                <li>Broaching</li>
                <li>Tooth rounding / chamfering</li>
              </ul>
            </div>
            <div className="capability-card">
              <h3 className="text-lg font-semibold mb-4">Grinding & Testing</h3>
              <ul className="text-sm text-muted-foreground space-y-2">
                <li>Bore grinding</li>
                <li>Angular grinding</li>
                <li>Cylindrical grinding</li>
                <li>Profile / PCD testing</li>
                <li>Roll testing</li>
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
