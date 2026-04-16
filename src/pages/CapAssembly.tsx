import SiteHeader from "@/components/SiteHeader";
import SiteFooter from "@/components/SiteFooter";
import PageHero from "@/components/PageHero";

export default function CapAssembly() {
  return (
    <div className="min-h-screen flex flex-col">
      <SiteHeader />
      <PageHero
        title="Assembly"
        subtitle="Our assembly capability stands out not through labor cost alone, but through a deeply engineered production system that combines lean management, disciplined assembly methods, and decades of accumulated operator skill."
      />
      <main className="flex-1 section-padding">
        <div className="max-w-7xl mx-auto space-y-16">

          {/* Introduction */}
          <section className="max-w-3xl">
            <h2 className="text-2xl font-bold mb-6">How Our Factory Assembly Stands Out</h2>
            <p className="text-sm text-muted-foreground leading-relaxed mb-4">
              Standard work, operator certification, and control plans ensure that critical steps are carried out in a defined way and checked at the right stage of assembly rather than left to final inspection.
            </p>
            <p className="text-sm text-muted-foreground leading-relaxed">
              Our value proposition in assembly is the delivery of reliable, tested modules that are ready to install and perform in the field. Fit-up, testing, and packaging for final use are handled within the same scope, reducing integration risk, shortening the path to installation, and lowering total landed cost.
            </p>
          </section>

          {/* Types of Assemblies & Batch Sizes — two-column */}
          <section className="grid md:grid-cols-2 gap-12">
            <div>
              <h3 className="text-lg font-semibold mb-4">Types of Assemblies</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">
                Assembly scope can range from precision mechanical modules to integrated electromechanical systems weighing up to 30 kg. This includes motion-critical assemblies built around shafts, bearings, seals, and aligned housings, as well as products with harnesses, sensors, controls, or fluid-power elements. In some cases, the challenge lies in the interfaces between parts. In others, it lies in the geometry itself, such as a thin large assembly that is easy to distort during handling, fastening, or shipment. Assembly must be carried out without losing alignment, damaging critical surfaces, or introducing problems that only appear at installation.
              </p>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-4">Batch Sizes and Scale-Up</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">
                Assembly can be supported from prototype and pilot builds through recurring production, with the process maturing as volumes increase. Early orders require closer engineering involvement, flexibility in sequencing, and faster feedback into design. As demand stabilizes, the build can be strengthened through fixtures, clearer work instructions, and better material presentation. Good manufacturing judgment lies in knowing when to introduce that structure. A recurring product should not remain dependent on ad hoc build practices, but production methods should also not be imposed so early that they make development work slower and less useful.
              </p>
            </div>
          </section>

          {/* Inspection and Tests — full width */}
          <section className="max-w-3xl">
            <h3 className="text-lg font-semibold mb-4">Inspection and Tests</h3>
            <p className="text-sm text-muted-foreground leading-relaxed">
              Inspection and test plans follow the function of the assembly and are developed to suit customer requirements. Depending on the product, this may include dimensional verification, torque checks, leak or pressure testing, continuity checks, or a broader functional test routine. Test benches are calibrated regularly in line with the quality plan, and digital test records form part of the delivered package.
            </p>
          </section>

          {/* Sourcing & Logistics — two-column */}
          <section className="grid md:grid-cols-2 gap-12">
            <div>
              <h3 className="text-lg font-semibold mb-4">Sourcing and Integration</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">
                Complete assemblies often combine factory-machined parts with bought-out hardware, customer-nominated components, valves, harnesses, seals, or configured devices. Off-the-shelf components are sourced to the required quality level and integrated into the build under controlled revision and assembly conditions. Practical fit-up judgment is also needed when nominally correct parts do not come together as cleanly as the drawing suggests.
              </p>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-4">Logistics and Shipment Readiness</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">
                Handling and dispatch requirements are often part of the assembly problem itself. Some products require dust-sensitive handling, temperature-controlled environments, or ESD-conscious packaging. Others need corrosion protection, customer-specific labeling, export-ready documentation, or evidence that controlled conditions were maintained through final packing and release. These requirements are built into the assembly and release process from the outset. This is particularly important for products whose condition on arrival matters as much as their condition at final test.
              </p>
            </div>
          </section>

          {/* Conclusion */}
          <section className="bg-secondary rounded-lg p-8 max-w-3xl">
            <p className="text-sm text-muted-foreground leading-relaxed mb-4">
              We extend our offering beyond machined parts into modules that are integrated, verified, and ready for use. That capability covers a broad range of assembly types, supports the path from development builds into recurring production, incorporates application-specific inspection and testing, manages mixed-source integration, and prepares products for shipment under defined handling and documentation requirements.
            </p>
            <p className="text-sm font-medium leading-relaxed">
              We pride ourselves on controlling the details that determine whether an assembly goes together cleanly, passes test without rework, and installs without difficulty.
            </p>
          </section>

        </div>
      </main>
      <SiteFooter />
    </div>
  );
}
