import SiteHeader from "@/components/SiteHeader";
import SiteFooter from "@/components/SiteFooter";
import PageHero from "@/components/PageHero";

export default function CapAssembly() {
  return (
    <div className="min-h-screen flex flex-col">
      <SiteHeader />
      <PageHero
        title="Assembly"
        subtitle={"Our assembly capability stands out not through labor cost alone, but through a production system built on lean management, disciplined assembly methods, and accumulated operator skill. Standard work, operator certification, and control plans ensure that critical steps are defined, executed consistently, and checked at the right stage of assembly.\n\nAssemblies leave as complete modules ready to install and perform in the field. This reduces integration risk, shortens manufacturing timelines, and lowers total landed cost."}
      />
      <main className="flex-1 section-padding">
        <div className="max-w-7xl mx-auto space-y-10">


          {/* Types of Assemblies & Batch Sizes — two-column */}
          <section className="grid md:grid-cols-2 gap-12">
            <div>
              <h3 className="text-lg font-semibold mb-4">Types of Assemblies</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">
                Assembly scope ranges from precision mechanical modules to integrated electromechanical systems weighing up to 30 kg. This includes motion-critical assemblies built around shafts, bearings, seals, and aligned housings, as well as products with harnesses, sensors, controls, or fluid-power elements. Some assemblies are driven mainly by interface control between machined and purchased parts. Others are driven by geometry, such as thin large assemblies that are sensitive to handling, fastening, or shipment. In both cases, alignment, surface condition, and final fit are controlled through the assembly process.
              </p>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-4">Batch Sizes and Scale-Up</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">
                Assembly is supported from prototype and pilot builds through recurring production. Early orders typically require closer engineering involvement, flexible sequencing, and faster feedback into design. As volumes stabilize, the process is strengthened through fixtures, clearer work instructions, better material presentation, and more formal validation steps. This allows development builds to remain flexible while repeat production becomes more robust and efficient.
              </p>
            </div>
          </section>

          {/* Inspection and Tests — full width */}
          <section className="max-w-3xl">
            <h3 className="text-lg font-semibold mb-4">Inspection and Tests</h3>
            <p className="text-sm text-muted-foreground leading-relaxed">
              Inspection and test plans are defined according to the function of the assembly and the customer requirement. Depending on the product, this may include dimensional verification, torque checks, leak or pressure testing, continuity checks, or functional testing. Test benches can be adapted to the application where needed. Calibration is maintained in line with the quality plan, and digital test records form part of the delivered package.
            </p>
          </section>

          {/* Sourcing & Logistics — two-column */}
          <section className="grid md:grid-cols-2 gap-12">
            <div>
              <h3 className="text-lg font-semibold mb-4">Sourcing and Integration</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">
                Complete assemblies often combine factory-machined parts with bought-out hardware, customer-nominated components, valves, harnesses, seals, or configured devices. Off-the-shelf components are sourced to the required quality level and integrated under controlled revision and assembly conditions. Practical fit-up judgment is applied where nominally correct parts do not come together exactly as intended on the drawing. This is particularly important in mixed-source assemblies, where interface problems tend to appear late if they are not addressed during build.
              </p>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-4">Logistics and Shipment Readiness</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">
                Handling and dispatch requirements are addressed as part of the assembly scope. Depending on the product, this may include dust-sensitive handling, temperature-controlled environments, ESD-conscious packaging, corrosion protection, customer-specific labeling, or export-ready documentation. Where required, packing and release records can show that controlled conditions were maintained through final dispatch. This is important for assemblies whose condition on arrival matters as much as their condition at final test.
              </p>
            </div>
          </section>

          {/* Conclusion */}
          <section className="bg-secondary rounded-lg p-8 max-w-3xl">
            <p className="text-sm text-muted-foreground leading-relaxed mb-4">
              We extend our offering beyond machined parts into modules that are assembled, verified, and ready for use. That includes a broad range of assembly types, support from development builds into recurring production, application-specific inspection and testing, mixed-source integration, and shipment under defined handling and documentation requirements.
            </p>
            <p className="text-sm font-medium leading-relaxed">
              What distinguishes this work is control over the details that determine whether an assembly goes together cleanly, passes test, and installs without difficulty.
            </p>
          </section>

        </div>
      </main>
      <SiteFooter />
    </div>
  );
}
