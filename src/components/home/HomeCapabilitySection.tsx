import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import ProgrammesInProduction from "./ProgrammesInProduction";
import makinoImg from "@/assets/home/makino-a51nx-wide.jpg";
import calibrationProbe from "@/assets/technologies/calibration-probe.jpg.asset.json";

export default function HomeCapabilitySection() {
  return (
    <section className="px-4 sm:px-6 lg:px-8 py-16 lg:py-20 bg-background">
      <div className="max-w-7xl mx-auto">
        <div className="space-y-8">
          <div className="grid md:grid-cols-2 gap-6">
            <article className="capability-card space-y-3">
              <div className="relative w-full aspect-[16/10] overflow-hidden rounded-md mb-2 bg-muted">
                <img
                  src={calibrationProbe.url}
                  alt="Calibration probe in use"
                  loading="lazy"
                  className="w-full h-full object-cover"
                  style={{ filter: "saturate(0.78) contrast(1.05) brightness(1.02)" }}
                />
                <div
                  aria-hidden
                  className="pointer-events-none absolute inset-0 mix-blend-overlay"
                  style={{ backgroundColor: "rgb(180, 195, 210)", opacity: 0.06 }}
                />
              </div>
              <h3 className="text-xl font-semibold">Capabilities</h3>
              <p className="font-semibold text-foreground text-sm">
                Assembly, Machining, Gear cutting
              </p>
              <p className="text-muted-foreground text-sm leading-relaxed">
                Precision components and housings in steel, cast iron, ductile iron and non-ferrous alloys. Spur and helical gears, splined shafts, and integrated electromechanical assemblies up to 30 kg. Best suited to high-mix, medium-volume work. Every delivered part carries full material and process traceability, supporting OEM programmes that run for decades.
              </p>
              <Link to="/capabilities" className="text-primary text-sm font-medium inline-flex items-center gap-1 hover:gap-2 transition-all">
                See capabilities <ArrowRight size={14} />
              </Link>
            </article>
            <article className="capability-card space-y-3">
              <div className="relative w-full aspect-[16/10] overflow-hidden rounded-md mb-2 bg-muted">
                <img
                  src={makinoImg}
                  alt="Makino a51nx CNC horizontal machining centre"
                  loading="lazy"
                  className="w-full h-full object-cover"
                  style={{ filter: "saturate(0.78) contrast(1.05) brightness(1.02)" }}
                />
                <div
                  aria-hidden
                  className="pointer-events-none absolute inset-0 mix-blend-overlay"
                  style={{ backgroundColor: "rgb(180, 195, 210)", opacity: 0.06 }}
                />
              </div>

              <h3 className="text-xl font-semibold">Means of Production</h3>
              <p className="font-semibold text-foreground text-sm">
                Two plants, best-in-class machines and tooling
              </p>
              <p className="text-muted-foreground text-sm leading-relaxed">
                20,000 sq. ft. built-up spread across two plants of area 43,200 sq. ft.— balance ready for expansion. Clean-room assembly with automated test rigs. CNC horizontal and vertical machining centres, CNC turning, cylindrical and surface grinding. A dedicated gear-cutting division with CNC hobbing, shaping, shaving, broaching, tooth chamfering, CNC cylindrical & bore grinding and gear profile testing. CMM and high-resolution surface metrology in-house.
              </p>
              <Link to="/technologies" className="text-primary text-sm font-medium inline-flex items-center gap-1 hover:gap-2 transition-all">
                See means of production <ArrowRight size={14} />
              </Link>
            </article>
          </div>

          <ProgrammesInProduction />
        </div>
      </div>
    </section>
  );
}
