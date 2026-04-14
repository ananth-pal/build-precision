import { Link } from "react-router-dom";
import { Cog, CircleDot, Box, ArrowRight } from "lucide-react";
import SiteHeader from "@/components/SiteHeader";
import SiteFooter from "@/components/SiteFooter";
import PageHero from "@/components/PageHero";

const caps = [
  { icon: Cog, title: "Machining", desc: "Precision components and housings in steel, cast iron, ductile iron, and non-ferrous alloys. In-house fixturing design from a team that built machine tools.", path: "/capabilities/machining" },
  { icon: CircleDot, title: "Gear Cutting", desc: "Spur and helical gears, splined shafts, and transmission components. Dedicated facility with in-house profile testing.", path: "/capabilities/gear-cutting" },
  { icon: Box, title: "Assembly", desc: "Clean-room builds with automated functional testing and serialised traceability on every unit shipped.", path: "/capabilities/assembly" },
];

export default function Capabilities() {
  return (
    <div className="min-h-screen flex flex-col">
      <SiteHeader />
      <PageHero title="Capabilities" subtitle="Three integrated capability areas under one roof." />
      <main className="flex-1 section-padding">
        <div className="max-w-7xl mx-auto">
          {/* Partner Qualification Block */}
          <div className="mb-12 border border-border rounded-lg p-6">
            <h3 className="text-sm font-semibold uppercase tracking-wider text-muted-foreground mb-4">Partner Qualification</h3>
            <div className="grid sm:grid-cols-3 gap-6">
              <div>
                <div className="text-sm font-medium text-foreground">Batch Size</div>
                <div className="text-sm text-muted-foreground mt-1">[PLACEHOLDER — owner to supply]</div>
              </div>
              <div>
                <div className="text-sm font-medium text-foreground">Materials</div>
                <div className="text-sm text-muted-foreground mt-1">Steel, cast iron, ductile iron, non-ferrous alloys [owner to confirm and expand]</div>
              </div>
              <div>
                <div className="text-sm font-medium text-foreground">Workpiece Dimensions</div>
                <div className="text-sm text-muted-foreground mt-1">[PLACEHOLDER — owner to supply]</div>
              </div>
            </div>
          </div>

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
