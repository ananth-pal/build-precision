import { Link } from "react-router-dom";
import { Cog, CircleDot, Box, ArrowRight } from "lucide-react";
import SiteHeader from "@/components/SiteHeader";
import SiteFooter from "@/components/SiteFooter";
import PageHero from "@/components/PageHero";
import ImagePlaceholder from "@/components/ImagePlaceholder";
import gearCuttingImg from "@/assets/capabilities/gear-cutting-machine.jpeg.asset.json";


const caps = [
  { icon: Box, title: "Assembly", desc: "Integrated electromechanical assemblies up to 30 kg — built in a cleanroom, functionally tested, and serialised for traceability on every unit shipped.", path: "/capabilities/assembly", image: "Cleanroom assembly line — operators at stations, controlled environment", imageSrc: null as string | null },
  { icon: Cog, title: "Machining", desc: "Precision components and housings in steel, cast iron, ductile iron, and non-ferrous alloys. Fixtures and gauges designed and manufactured in-house by a team with a machine-tool-building background.", path: "/capabilities/machining", image: "Makino machining centre, door open — fixture and machined part in view", imageSrc: null as string | null },
  { icon: CircleDot, title: "Gear Cutting", desc: "Spur and helical gears, splined shafts, and transmission components, produced in a dedicated gear-cutting facility with in-house profile and lead inspection.", path: "/capabilities/gear-cutting", image: "Gear cutting machine mid-setup", imageSrc: gearCuttingImg.url },
];

export default function Capabilities() {
  return (
    <div className="min-h-screen flex flex-col">
      <SiteHeader />
      <PageHero title="Capabilities" subtitle="Assembly, machining, and gear cutting — from material in to tested module out" />
      <main className="flex-1 section-padding">
        <div className="max-w-7xl mx-auto">
          <p className="text-muted-foreground leading-relaxed max-w-3xl mb-12 whitespace-pre-line">
            Pentagon manufactures precision assemblies and components in steel, cast iron, ductile iron, and non-ferrous alloys. Work spans integrated assemblies, housings, shafts, valve bodies, and gear sets. The operation is optimised for medium-volume work where part complexity justifies careful process definition and batch sizes are large enough to recover setup cost. Assembly, machining, and gear cutting are integrated so the part is engineered as one build from material through to tested module.
          </p>

          <div className="grid md:grid-cols-3 gap-8">
            {caps.map((c) => (
              <Link key={c.title} to={c.path} className="capability-card group">
                {c.imageSrc ? (
                  <div className="mb-4 aspect-video overflow-hidden rounded-md bg-muted">
                    <img src={c.imageSrc} alt={c.title} loading="lazy" className="w-full h-full object-cover" />
                  </div>
                ) : (
                  <ImagePlaceholder caption={c.image} ratio="aspect-video" className="mb-4" />
                )}
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
