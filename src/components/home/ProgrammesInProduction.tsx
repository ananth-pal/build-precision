import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";

export default function ProgrammesInProduction() {
  return (
    <div>
      <h2 className="text-2xl lg:text-3xl font-bold mb-8">Programmes in production</h2>
      <div className="grid md:grid-cols-2 gap-6">
        <article className="capability-card space-y-3">
          <h3 className="text-xl font-semibold">Power Takeoff (PTO) gearboxes for global transmission brands</h3>
          <p className="text-muted-foreground text-sm leading-relaxed">
            26 years of development and supply to a long standing multinational OEM in Australia. 75+ PTO variants — cable-operated, pneumatic, hydraulic, and hot-shift — built to run with Allison, Eaton, Hino, Isuzu, Mack, Mitsubishi, Volvo and ZF transmissions. Jigs and fixtures, housing machining, gear cutting, assembly, testing, and engineering change management handled through product lifecycle.
          </p>
        </article>
        <article className="capability-card space-y-3">
          <h3 className="text-xl font-semibold">Engine balancer assemblies for an Indian OEM engine manufacturer</h3>
          <p className="text-muted-foreground text-sm leading-relaxed">
            Mid-engine balancer assemblies designed by AVL, developed in-house for manufacturing and supplied to India's leading tractor engine manufacturer, Simpson and Co. Ltd. This is a critical assembly driven by the engine crankshaft and rotating at twice the engine RPM, with the lube oil pump also mounted to it.
          </p>
        </article>
      </div>
      <div className="mt-6">
        <Link to="/portfolio" className="text-primary text-sm font-medium inline-flex items-center gap-1 hover:gap-2 transition-all">
          See portfolio <ArrowRight size={14} />
        </Link>
      </div>
    </div>
  );
}
