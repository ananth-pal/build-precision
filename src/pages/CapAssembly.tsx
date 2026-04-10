import SiteHeader from "@/components/SiteHeader";
import SiteFooter from "@/components/SiteFooter";
import PageHero from "@/components/PageHero";

export default function CapAssembly() {
  return (
    <div className="min-h-screen flex flex-col">
      <SiteHeader />
      <PageHero title="Assembly" subtitle="Pentagon assembles complex sub-assemblies in a controlled environment and validates them before shipment. Every unit is serialised. [PLACEHOLDER — owner to refine]" />
      <main className="flex-1 section-padding">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 gap-8 mb-12">
            <div className="capability-card">
              <h3 className="text-lg font-semibold mb-4">Assembly</h3>
              <ul className="text-sm text-muted-foreground space-y-2">
                <li>Controlled-environment clean-room builds</li>
                <li>Cleanliness standards maintained throughout</li>
                <li>In-house painting and packaging in customer-branded cartons</li>
              </ul>
            </div>
            <div className="capability-card">
              <h3 className="text-lg font-semibold mb-4">Validation</h3>
              <ul className="text-sm text-muted-foreground space-y-2">
                <li>Functional testing to specification on automated rigs</li>
                <li>Serialised traceability — every unit linked to heat/lot data and critical dimensions</li>
                <li>Linked inspection documentation shipped with every unit</li>
              </ul>
            </div>
          </div>
          <div className="bg-secondary rounded-lg p-8 text-center">
            <div className="stat-number mb-2">[PLACEHOLDER]</div>
            <p className="text-muted-foreground text-sm">Maximum test pressure on in-house rigs (if owner approves)</p>
          </div>
        </div>
      </main>
      <SiteFooter />
    </div>
  );
}
