import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import ptoImg from "@/assets/portfolio/PTO_finished_1_edit.png.asset.json";
import balancerImg from "@/assets/portfolio/Balancer_1.png.asset.json";

export default function ProgrammesInProduction() {
  return (
    <div>
      <h2 className="text-2xl lg:text-3xl font-bold mb-8">Programmes in production</h2>
      <div className="grid md:grid-cols-2 gap-6">
        <article className="capability-card space-y-3">
          <img
            src={ptoImg.url}
            alt="Power Take-Off gearboxes in production"
            loading="lazy"
            className="w-full aspect-[16/10] object-cover rounded-md mb-2 bg-muted"
          />
          <h3 className="text-xl font-semibold">Transport Hydraulic Assemblies for global transmission brand</h3>
          <p className="text-muted-foreground text-sm leading-relaxed">
            26 years of development and ongoing supply to a multinational OEM. High pressure hydraulic spool valves and gear pumps. 75+ Power Take Off (PTO) gearbox variants — cable-operated, pneumatic, hydraulic, and hot-shift — built to run on Allison, Eaton, Hino, Isuzu, Mack, Mitsubishi, Volvo and ZF transmissions. Jigs and fixtures, housing machining, gear cutting, assembly, testing, and engineering change management handled through product lifecycle.
          </p>
        </article>
        <article className="capability-card space-y-3">
          <img
            src={balancerImg.url}
            alt="Engine balancer assemblies"
            loading="lazy"
            className="w-full aspect-[16/10] object-cover rounded-md mb-2 bg-muted"
          />
          <h3 className="text-xl font-semibold">Engine balancer assemblies for an Indian OEM engine manufacturer</h3>
          <p className="text-muted-foreground text-sm leading-relaxed">
            18 years of development and ongoing supply of mid-engine balancer assemblies to Simpson and Co. Ltd. (erstwhile Perkins licensee), India's leading tractor engine manufacturer. Designed by AVL and developed in-house for manufacturing, the assembly is driven by the engine crankshaft and rotates at twice the engine RPM, with the lube oil pump mounted on it.
          </p>
        </article>
      </div>
      <div className="mt-6">
        <Link to="/what-we-make" className="text-primary text-sm font-medium inline-flex items-center gap-1 hover:gap-2 transition-all">
          See portfolio <ArrowRight size={14} />
        </Link>
      </div>
    </div>
  );
}
