import { Link } from "react-router-dom";
import SiteHeader from "@/components/SiteHeader";
import SiteFooter from "@/components/SiteFooter";
import PageHero from "@/components/PageHero";
import ImagePlaceholder from "@/components/ImagePlaceholder";

export default function CapAssembly() {
  return (
    <div className="min-h-screen flex flex-col">
      <SiteHeader />
      <PageHero
        title="Assembly"
        subtitle={"Our assembly capability stands out not through labor cost alone, but through a production system built on lean management, disciplined assembly methods, and accumulated operator skill. Standard operating procedures, operator certification, and control plans ensure that critical steps are defined, executed consistently, and checked at the appropriate stage of assembly.\n\nAssemblies ship as complete modules ready to install and perform in the field. This reduces integration risk, shortens manufacturing timelines, and lowers total landed cost."}
      />
      <main className="flex-1 section-padding">
        <div className="max-w-6xl mx-auto space-y-10">

          {/* Hero image */}
          <div className="max-w-3xl mx-auto">
            <ImagePlaceholder
              ratio="aspect-[16/9]"
              caption="Operator at clean-room assembly station — integrated electromechanical module mid-build with torque tooling and test bench in view"
            />
          </div>

          {/* Types of Assemblies & Batch Sizes */}
          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-card border border-border rounded-lg p-8 shadow-sm">
              <h3 className="text-lg font-semibold mb-4">Types of Assemblies</h3>
              <p className="text-base text-muted-foreground leading-relaxed">
                Assembly scope ranges from precision mechanical modules to integrated electromechanical systems weighing up to 30 kg. This includes motion-critical assemblies built around shafts, bearings, seals, and housings, as well as programmed products with harnesses, sensors, controls, or fluid-power elements.
              </p>
            </div>
            <div className="bg-card border border-border rounded-lg p-8 shadow-sm">
              <h3 className="text-lg font-semibold mb-4">Batch Sizes and Scale-Up</h3>
              <p className="text-base text-muted-foreground leading-relaxed">
                Assembly is supported from prototype and pilot builds through recurring production. Pilot orders typically require closer engineering involvement, flexible sequencing, and faster feedback into design. As volumes stabilize, the process is strengthened through fixtures, updated work instructions, better material presentation, and more formal validation steps. This allows development builds to remain flexible while production at scale becomes robust.
              </p>
            </div>
          </div>

          {/* Inspection and Tests */}
          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-card border border-border rounded-lg p-8 shadow-sm">
              <h3 className="text-lg font-semibold mb-4">Inspection and Testing</h3>
              <p className="text-base text-muted-foreground leading-relaxed">
                Inspection and functional test plans are defined according to the function of the assembly and the customer requirement. Depending on the product, this may include dimensional verification, torque checks, leak or pressure testing, continuity checks, or functional testing. A sampling plan is used for inspection as needed. Test benches can be adapted to the application where needed. Calibration is maintained in line with the Quality Management System, and digital test records form part of the delivered package.
              </p>
            </div>
            <ImagePlaceholder
              ratio="aspect-[4/3]"
              caption="Assembly/pump test bench in operation — digital test-record screen visible"
            />
          </div>

          {/* Sourcing & Logistics */}
          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-card border border-border rounded-lg p-8 shadow-sm">
              <h3 className="text-lg font-semibold mb-4">Sourcing and Integration</h3>
              <p className="text-base text-muted-foreground leading-relaxed">
                Complete assemblies combine factory-machined parts with bought-out and standard parts as needed. Off-the-shelf components are sourced from India and abroad as per requirements from long-standing vendors. Mixed-model assembly is deployed where configurations exist within a product family.
              </p>
            </div>
            <div className="bg-card border border-border rounded-lg p-8 shadow-sm">
              <h3 className="text-lg font-semibold mb-4">Logistics and Shipment Readiness</h3>
              <p className="text-base text-muted-foreground leading-relaxed">
                Handling and dispatch requirements are addressed as part of the assembly scope. Depending on the product, this may include protective packaging, corrosion protection or customer-specific labeling. Where required, instruction manuals and warranty cards can be included in packing.&nbsp;
              </p>
            </div>
          </div>

          <p className="text-sm text-muted-foreground leading-relaxed max-w-3xl">
            Machined components, sourcing and logistics, and quality systems that support assembly are covered on the{" "}
            <Link to="/capabilities/machining" className="text-primary hover:underline">Machining</Link>{" "}
            page. Assembly equipment, test rigs, and measurement systems are covered under{" "}
            <Link to="/technologies" className="text-primary hover:underline">Means of Production</Link>.
          </p>
        </div>
      </main>
      <SiteFooter />
    </div>
  );
}
