import { Link } from "react-router-dom";
import { Cog, CircleDot, Box, ArrowRight } from "lucide-react";
import SiteHeader from "@/components/SiteHeader";
import SiteFooter from "@/components/SiteFooter";
import PageHero from "@/components/PageHero";

const caps = [
  { icon: Cog, title: "Machining", desc: "CNC turning, milling, grinding, finishing, and in-house tooling design from engineers who built machine tools.", path: "/capabilities/machining" },
  { icon: CircleDot, title: "Gear Cutting", desc: "Dedicated gear cutting division — hobbing, shaving, shaping, broaching, and precision grinding with full profile testing.", path: "/capabilities/gear-cutting" },
  { icon: Box, title: "Assembly", desc: "Clean-room assembly, automated functional testing, and serialised traceability on every unit shipped.", path: "/capabilities/assembly" },
];

export default function Capabilities() {
  return (
    <div className="min-h-screen flex flex-col">
      <SiteHeader />
      <PageHero title="Capabilities" subtitle="Three integrated capability areas under one roof." />
      <main className="flex-1 section-padding">
        <div className="max-w-7xl mx-auto">
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
