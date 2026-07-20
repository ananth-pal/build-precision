import { useState } from "react";
import { Link } from "react-router-dom";
import { Cog, CircleDot, Box, ArrowRight, Shuffle } from "lucide-react";
import SiteHeader from "@/components/SiteHeader";
import SiteFooter from "@/components/SiteFooter";
import PageHero from "@/components/PageHero";
import ImagePlaceholder from "@/components/ImagePlaceholder";
import gearCuttingImg from "@/assets/capabilities/gear-cutting-machine-v3.webp.asset.json";
import angularGrinder from "@/assets/technologies/gear-grinder.jpg.asset.json";
import gearsImg from "@/assets/portfolio/Gears.webp.asset.json";
import shaperCloseup from "@/assets/capabilities/shaper-closeup.webp.asset.json";
import shaperWide from "@/assets/capabilities/shaper-wide.webp.asset.json";
import angularGrinderAlt from "@/assets/capabilities/angular-wheelhead-grinder-edit-2.png.asset.json";
import machiningImg from "@/assets/capabilities/pto-housing-fixture.webp.asset.json";
import machinedHousings from "@/assets/capabilities/machined-housings.webp.asset.json";
import fixtures from "@/assets/capabilities/fixtures.webp.asset.json";
import airGauge from "@/assets/capabilities/air-gauge.webp.asset.json";
import assemblyLead from "@/assets/capabilities/assembly-pto-lead.png.asset.json";
import assemblyAlt1 from "@/assets/capabilities/PTO_assembly_1_edit.webp.asset.json";
import assemblyAlt2 from "@/assets/capabilities/PTO_assembly_2_edit.webp.asset.json";
import assemblyAlt3 from "@/assets/capabilities/PTO_assembly_3_edit.webp.asset.json";
import assemblyAlt4 from "@/assets/capabilities/Gear_pump_5_edit.webp.asset.json";
import SEO from "@/components/SEO";



type Cap = {
  icon: typeof Box;
  title: string;
  desc: string;
  path: string;
  image: string;
  imageSrc: string | null;
  images?: { src: string; alt: string; position?: string }[];
};

const caps: Cap[] = [
  {
    icon: Box,
    title: "Assembly",
    desc: "Integrated electromechanical assemblies up to 30 kg — built in a cleanroom, functionally tested, and serialised for traceability on every unit shipped.",
    path: "/capabilities/assembly",
    image: "Cleanroom assembly line — operators at stations, controlled environment",
    imageSrc: null,
    images: [
      { src: assemblyAlt1.url, alt: "Operator fitting drive gear into red PTO housing at assembly bench" },
      { src: assemblyAlt2.url, alt: "Operator using impact wrench on red PTO housing during assembly" },
      { src: assemblyAlt3.url, alt: "Cleanroom operator assembling gear stack into PTO housing" },
      { src: assemblyAlt4.url, alt: "Assembled gear pump module with exposed internal gears on workbench" },
    ],
  },
  {
    icon: Cog,
    title: "Machining",
    desc: "Precision components and housings in steel, cast iron, ductile iron, and non-ferrous alloys. Fixtures and gauges designed and manufactured in-house by a team with a machine-tool-building background.",
    path: "/capabilities/machining",
    image: "PTO housing clamped in fixture on Makino machining centre — drill approaching workpiece",
    imageSrc: machiningImg.url,
    images: [
      { src: machiningImg.url, alt: "PTO housing clamped in fixture on a Makino machining centre — drill approaching the workpiece" },
      { src: machinedHousings.url, alt: "Row of machined PTO housings on the finished-goods rack, ready for inspection" },
      { src: fixtures.url, alt: "In-house workholding fixtures organised on shop-floor racks" },
      { src: airGauge.url, alt: "Air gauges in the metrology area — operator checking bore dimensions against master rings" },
    ],
  },
  {
    icon: CircleDot,
    title: "Gear Cutting",
    desc: "Spur and helical gears, splined shafts, and transmission components, produced in a dedicated gear-cutting facility with in-house profile and lead inspection.",
    path: "/capabilities/gear-cutting",
    image: "Gear cutting machine mid-setup",
    imageSrc: angularGrinder.url,
    images: [
      { src: angularGrinder.url, alt: "Angular wheelhead grinder with coolant lines — shaft being ground between centres" },
    ],
  },
];

export default function Capabilities() {
  const [imgIdx, setImgIdx] = useState<Record<string, number>>({});
  return (
    <div className="min-h-screen flex flex-col">
      <SEO title="Capabilities — Pentagon Machines & Services" description="Overview of Pentagon's manufacturing scope: precision machining, gear cutting, and validated assembly for global OEM customers." />
      <SiteHeader />
      <PageHero title="Capabilities" subtitle="Assembly, machining, and gear cutting — from material in to tested module out" />
      <main className="flex-1 section-padding">
        <div className="max-w-7xl mx-auto">
          <p className="text-muted-foreground leading-relaxed max-w-3xl mb-12 whitespace-pre-line">
            Pentagon manufactures precision assemblies and components in steel, cast iron, ductile iron, and non-ferrous alloys. Work spans integrated assemblies, housings, shafts, valve bodies, and gear sets. The operation is optimised for medium-volume work where part complexity justifies careful process definition and batch sizes are large enough to recover setup cost. Assembly, machining, and gear cutting are integrated so the part is engineered as one build from material through to tested module.
          </p>

          <div className="grid md:grid-cols-3 gap-8">
            {caps.map((c) => {
              const idx = imgIdx[c.title] ?? 0;
              const cycle = c.images && c.images.length > 1;
              const current = cycle ? c.images![idx] : null;
              return (
                <Link key={c.title} to={c.path} className="capability-card group">
                  {cycle && current ? (
                    <div className="relative mb-4 aspect-video overflow-hidden rounded-md bg-muted">
                      <img src={current.src} alt={current.alt} loading="lazy" className="w-full h-full object-cover" style={current.position ? { objectPosition: current.position } : undefined} />
                      <button
                        type="button"
                        onClick={(e) => {
                          e.preventDefault();
                          e.stopPropagation();
                          setImgIdx((s) => ({ ...s, [c.title]: (idx + 1) % c.images!.length }));
                        }}
                        aria-label="Show next photo"
                        className="absolute bottom-2 right-2 bg-background/80 hover:bg-background text-foreground rounded-md p-1.5 shadow border border-border"
                      >
                        <Shuffle size={14} />
                      </button>
                    </div>
                  ) : c.imageSrc ? (
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
              );
            })}
          </div>
        </div>
      </main>
      <SiteFooter />
    </div>
  );
}
