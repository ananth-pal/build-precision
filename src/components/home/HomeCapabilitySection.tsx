import { useState } from "react";
import { Link } from "react-router-dom";
import { ArrowRight, ChevronLeft, ChevronRight } from "lucide-react";
import ProgrammesInProduction from "./ProgrammesInProduction";
import makinoImg from "@/assets/home/makino-a51nx-wide.jpg";
import capabilitiesLoop from "@/assets/home/capabilities-loop.mp4.asset.json";
import calibrationProbe from "@/assets/technologies/calibration-probe.jpg.asset.json";

export default function HomeCapabilitySection() {
  const slides = [
    { type: "image" as const, src: calibrationProbe.url, alt: "Calibration probe in use" },
    { type: "video" as const, src: capabilitiesLoop.url },
  ];
  const [idx, setIdx] = useState(0);
  const prev = () => setIdx((i) => (i - 1 + slides.length) % slides.length);
  const next = () => setIdx((i) => (i + 1) % slides.length);
  const current = slides[idx];

  return (
    <section className="px-4 sm:px-6 lg:px-8 py-16 lg:py-20 bg-background">
      <div className="max-w-7xl mx-auto">
        <div className="space-y-8">
          <div className="grid md:grid-cols-2 gap-6">
            <article className="capability-card space-y-3">
              <div className="relative group w-full aspect-[16/10] overflow-hidden rounded-md mb-2 bg-muted">
                {current.type === "video" ? (
                  <video
                    key="video"
                    src={current.src}
                    autoPlay
                    loop
                    muted
                    playsInline
                    className="w-full h-full object-cover"
                    style={{ filter: "saturate(0.78) contrast(1.05) brightness(1.02)" }}
                  />
                ) : (
                  <img
                    key="image"
                    src={current.src}
                    alt={current.alt}
                    loading="lazy"
                    className="w-full h-full object-cover"
                    style={{ filter: "saturate(0.78) contrast(1.05) brightness(1.02)" }}
                  />
                )}
                <div
                  aria-hidden
                  className="pointer-events-none absolute inset-0 mix-blend-overlay"
                  style={{ backgroundColor: "rgb(180, 195, 210)", opacity: 0.06 }}
                />
                <button
                  type="button"
                  onClick={prev}
                  aria-label="Previous"
                  className="absolute left-2 top-1/2 -translate-y-1/2 bg-black/55 hover:bg-black/75 text-white rounded-full p-2 opacity-0 group-hover:opacity-100 transition-opacity"
                >
                  <ChevronLeft className="h-5 w-5" />
                </button>
                <button
                  type="button"
                  onClick={next}
                  aria-label="Next"
                  className="absolute right-2 top-1/2 -translate-y-1/2 bg-black/55 hover:bg-black/75 text-white rounded-full p-2 opacity-0 group-hover:opacity-100 transition-opacity"
                >
                  <ChevronRight className="h-5 w-5" />
                </button>
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
                43,200 sq. ft. spread across two plants — 20,000 sq. ft. built-up, balance ready for expansion. Clean-room assembly with automated test rigs. CNC horizontal and vertical machining centres, CNC turning, cylindrical and surface grinding. A dedicated gear-cutting division with hobbing, shaving, shaping, broaching and profile testing. CMM and high-resolution surface metrology in-house.
              </p>
              <Link to="/means-of-production" className="text-primary text-sm font-medium inline-flex items-center gap-1 hover:gap-2 transition-all">
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
