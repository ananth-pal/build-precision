import { useState } from "react";
import { Link } from "react-router-dom";
import { ArrowRight, ChevronRight } from "lucide-react";
import ProgrammesInProduction from "./ProgrammesInProduction";

const flowSteps = [
  "Design review",
  "Blank preparation",
  "Machining",
  "Gear cutting",
  "Grinding & finishing",
  "Assembly",
  "Functional testing",
  "Serialised dispatch",
];

function DeepLinks() {
  return (
    <div className="flex flex-col sm:flex-row gap-4 sm:gap-8 mt-6">
      <Link to="/capabilities" className="text-primary text-sm font-medium inline-flex items-center gap-1 hover:gap-2 transition-all">
        See capabilities <ArrowRight size={14} />
      </Link>
      <Link to="/means-of-production" className="text-primary text-sm font-medium inline-flex items-center gap-1 hover:gap-2 transition-all">
        See means of production <ArrowRight size={14} />
      </Link>
    </div>
  );
}

function VersionOne() {
  return (
    <div className="space-y-8">
      <div className="capability-card">
        <h2 className="text-2xl lg:text-3xl font-bold mb-4">How work moves through the factory</h2>
        <p className="text-muted-foreground text-sm leading-relaxed max-w-3xl mb-6">
          Most programmes touch several stations. A typical gearbox component moves from raw material through tested module inside one operation, with outside processes routed through long-standing certified vendors and controlled through incoming inspection.
        </p>
        <div className="flex flex-wrap items-center gap-y-3">
          {flowSteps.map((step, i) => (
            <div key={step} className="flex items-center">
              <span className="text-sm text-foreground whitespace-nowrap">{step}</span>
              {i < flowSteps.length - 1 && (
                <ChevronRight size={14} className="mx-2 text-muted-foreground/60 shrink-0" aria-hidden />
              )}
            </div>
          ))}
        </div>
        <DeepLinks />
      </div>

      <ProgrammesInProduction />
    </div>
  );
}

function VersionTwo() {
  return (
    <div className="space-y-8">
      <div className="grid md:grid-cols-2 gap-6">
        <article className="capability-card space-y-4">
          <h3 className="text-xl font-semibold">Capabilities</h3>
          <p className="text-muted-foreground text-sm leading-relaxed">
            Machining, gear cutting, and assembly in one operation. Precision components and housings in steel, cast iron, ductile iron and non-ferrous alloys. Spur and helical gears, splined shafts, and integrated electromechanical assemblies up to 30 kg. Best suited to high-mix, medium-volume work with annual volumes typically from around 50 to 20,000 parts.
          </p>
          <Link to="/capabilities" className="text-primary text-sm font-medium inline-flex items-center gap-1 hover:gap-2 transition-all">
            See capabilities <ArrowRight size={14} />
          </Link>
        </article>
        <article className="capability-card space-y-4">
          <h3 className="text-xl font-semibold">Means of Production</h3>
          <p className="text-muted-foreground text-sm leading-relaxed">
            Two plants in Ambattur Industrial Estate. CNC horizontal and vertical machining centres, CNC turning, cylindrical and surface grinding. A dedicated gear-cutting division with hobbing, shaving, shaping, broaching and profile testing. Clean-room assembly with automated test rigs. CMM and high-resolution surface metrology in-house.
          </p>
          <Link to="/means-of-production" className="text-primary text-sm font-medium inline-flex items-center gap-1 hover:gap-2 transition-all">
            See means of production <ArrowRight size={14} />
          </Link>
        </article>
      </div>

      <ProgrammesInProduction />
    </div>
  );
}

export default function HomeCapabilitySection() {
  const [version, setVersion] = useState<"v1" | "v2">("v1");

  return (
    <section className="px-4 sm:px-6 lg:px-8 py-16 lg:py-20 bg-background">
      <div className="max-w-7xl mx-auto">
        <div className="flex justify-end mb-6">
          <div
            role="group"
            aria-label="Toggle section version"
            className="inline-flex items-center rounded-full border border-border bg-background p-1 text-xs font-medium"
          >
            <button
              type="button"
              onClick={() => setVersion("v1")}
              aria-pressed={version === "v1"}
              className={`px-3 py-1 rounded-full transition-colors ${
                version === "v1" ? "bg-primary text-primary-foreground" : "text-muted-foreground hover:text-foreground"
              }`}
            >
              V1
            </button>
            <button
              type="button"
              onClick={() => setVersion("v2")}
              aria-pressed={version === "v2"}
              className={`px-3 py-1 rounded-full transition-colors ${
                version === "v2" ? "bg-primary text-primary-foreground" : "text-muted-foreground hover:text-foreground"
              }`}
            >
              V2
            </button>
          </div>
        </div>

        {version === "v1" ? <VersionOne /> : <VersionTwo />}
      </div>
    </section>
  );
}
