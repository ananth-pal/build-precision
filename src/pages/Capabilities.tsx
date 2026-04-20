import { Link } from "react-router-dom";
import { Cog, CircleDot, Box, ArrowRight } from "lucide-react";
import SiteHeader from "@/components/SiteHeader";
import SiteFooter from "@/components/SiteFooter";
import PageHero from "@/components/PageHero";

const caps = [
  { icon: Cog, title: "Machining", desc: "Precision components and housings in steel, cast iron, ductile iron, and non-ferrous alloys. Fixtures and gauges designed in-house by a team with a machine-tool-building background.", path: "/capabilities/machining" },
  { icon: CircleDot, title: "Gear Cutting", desc: "Spur and helical gears, splined shafts, and transmission components, produced in a dedicated gear-cutting facility with in-house profile and lead inspection.", path: "/capabilities/gear-cutting" },
  { icon: Box, title: "Assembly", desc: "Integrated electromechanical assemblies up to 30 kg — built in a cleanroom, functionally tested, and serialised for traceability on every unit shipped.", path: "/capabilities/assembly" },
];

export default function Capabilities() {
  return (
    <div className="min-h-screen flex flex-col">
      <SiteHeader />
      <PageHero title="Capabilities" subtitle="Machining, gear cutting, and assembly — from material in to tested module out" />
      <main className="flex-1 section-padding">
        <div className="max-w-7xl mx-auto">
          <p className="text-muted-foreground leading-relaxed max-w-3xl mb-12 whitespace-pre-line">
            Pentagon manufactures precision components and assemblies in steel, cast iron, ductile iron, and non-ferrous alloys. Work spans housings, shafts, valve bodies, gear sets, and integrated assemblies. The operation is optimised for medium-volume work where part complexity justifies careful process definition and batch sizes are large enough to recover setup cost.


            Machining, gear cutting, and assembly are integrated so the part is engineered as one build from material through to tested module.
          </p>

          <div className="grid md:grid-cols-3 gap-8">
            {caps.map((c) => (
              <Link key={c.title} to={c.path} className="capability-card group">
                <c.icon className="text-primary mb-4" size={32} />
                <h2 className="text-xl font-semibold mb-3">{c.title}</h2>
                <p className="text-muted-foreground text-sm leading-relaxed mb-6">{c.desc}</p>
                <span className="text-primary text-sm font-medium inline-flex items-center gap-1 group-hover:gap-2 transition-all">
                  Learn more <ArrowRight size={14} />
                </span>
              </Link>
            ))}
          </div>
        </div>
      </main>
      <SiteFooter />
    </div>
  );
}
