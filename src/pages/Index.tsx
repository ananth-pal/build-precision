import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import SiteHeader from "@/components/SiteHeader";
import SiteFooter from "@/components/SiteFooter";
import HomeCapabilitySection from "@/components/home/HomeCapabilitySection";
import MarketCard from "@/components/home/MarketCard";
import gearHobberAsset from "@/assets/technologies/gear-hobber.jpg.asset.json";

import gearStockAsset from "@/assets/capabilities/gear-stock.jpg.asset.json";
import zeissCmmAsset from "@/assets/technologies/zeiss-cmm.jpg.asset.json";
import zollerAsset from "@/assets/technologies/zoller-presetter.jpg.asset.json";
import calibrationProbeAsset from "@/assets/technologies/calibration-probe.jpg.asset.json";
import drillLoopAsset from "@/assets/technologies/drill-loop.mp4.asset.json";

type HeroSlide = { src: string; kind: "image" | "video"; pos: string };
const heroSlides: HeroSlide[] = [
  { src: gearHobberAsset.url, kind: "image", pos: "center 40%" },
  { src: zeissCmmAsset.url, kind: "image", pos: "center" },
  { src: zollerAsset.url, kind: "image", pos: "center 35%" },
  { src: calibrationProbeAsset.url, kind: "image", pos: "center" },
  { src: gearStockAsset.url, kind: "image", pos: "center 60%" },
  { src: drillLoopAsset.url, kind: "video", pos: "center" },
];

const stats = [
  { number: "45+", label: "Years manufacturing heritage" },
  { number: "62", label: "Year group legacy" },
  { number: "100+", label: "Product types developed & exported" },
  { number: "25+", label: "Year export to longstanding customers" },
];

import auto1 from "@/assets/markets/automotive_trial_1.jpg.asset.json";
import auto2 from "@/assets/markets/automotive_trial_2.jpg.asset.json";
import oh1 from "@/assets/markets/stock_dump_truck.webp.asset.json";
import oh2 from "@/assets/markets/off_highway_trial_2.jpg.asset.json";
import oh3 from "@/assets/markets/off_highway_trial_3.jpg.asset.json";
import tractorImg from "@/assets/markets/stock_tractor.webp.asset.json";
import roboticsImg from "@/assets/markets/stock_robot.webp.asset.json";
import SEO from "@/components/SEO";

const markets = [
  {
    label: "Off-highway and Commercial Vehicles",
    body: "Power take-off gearboxes, transmission components,\u00a0and precision hydraulics\u00a0for trucks, construction equipment, and material handling.",
    images: [oh1.url, oh2.url, oh3.url],
  },
  {
    label: "Automotive and Agriculture",
    body: "Engine components and balancer assemblies produced in repeat production for Indian automotive OEMs.",
    images: [tractorImg.url, auto2.url, auto1.url],
  },
];

const currentlyUnderway = [
  {
    title: "Plant 2 gear-cutting facility refurbishment",
    body: "Epoxy flooring and modernised services installation at the gear-cutting division.",
    placeholder: "[Photograph of Plant 2 gear-cutting floor or refurbishment work in progress — to be supplied]",
  },
  {
    title: "ISO 45001 and ISO 14001 certification",
    body: "Occupational health and safety, and environmental management systems implementation are in progress.",
    placeholder: null,
  },
];

export default function Home() {
  const [activeSlide, setActiveSlide] = useState(0);

  useEffect(() => {
    const id = window.setInterval(() => {
      setActiveSlide((i) => (i + 1) % heroSlides.length);
    }, 6000);
    return () => window.clearInterval(id);
  }, []);

  return (
    <div className="min-h-screen flex flex-col">
      <SEO title="Pentagon Machines & Services — Precision Manufacturing" description="Family-run precision contract manufacturer in Chennai, India. Machining, gear cutting, and validated assembly for global OEMs." />
      <SiteHeader />
      <main className="flex-1">
        {/* Hero */}
        <section className="relative min-h-[70vh] flex items-center overflow-hidden bg-muted">
          {/* Rotating hero imagery */}
          <div className="absolute inset-0">
            {heroSlides.map((slide, i) => {
              const active = i === activeSlide;
              const common = {
                opacity: active ? 1 : 0,
                transition: "opacity 1200ms ease-in-out",
              } as const;
              
              if (slide.kind === "video") {
                return (
                  <video
                    key={i}
                    src={slide.src}
                    autoPlay
                    muted
                    loop
                    playsInline
                    className="absolute inset-0 w-full h-full object-cover"
                    style={{ ...common, objectPosition: slide.pos }}
                  />
                );
              }
              return (
                <div
                  key={i}
                  className="absolute inset-0 bg-no-repeat bg-center"
                  style={{
                    ...common,
                    backgroundImage: `url(${slide.src})`,
                    backgroundPosition: slide.pos,
                    backgroundSize: "cover",
                  }}
                />
              );
            })}
          </div>
          {/* Darkened overlay (~40%) for legibility */}
          <div
            className="absolute inset-0"
            style={{
              background:
                "linear-gradient(135deg, hsla(220,20%,10%,0.75), hsla(348,76%,45%,0.35))",
            }}
          />
          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 w-full">
            <h1 className="sr-only">Pentagon Machines — Precision Contract Manufacturing &amp; Assembly in Chennai, India</h1>
            <p className="text-3xl sm:text-4xl lg:text-5xl font-bold text-background max-w-4xl leading-tight mb-6">
              We build the products you bet your business on.
            </p>
            <p className="text-lg text-background/80 max-w-2xl mb-8">
              With 45 years of engineering experience, we are a family-run precision contract manufacturer in Chennai, India, delivering validated, traceable assemblies with a 26-year track record of global export reliability. Our scope extends from in-house tooling and CNC machining to clean-room assembly and automated validation.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link to="/capabilities" className="inline-flex items-center px-6 py-3 border-2 border-background/40 text-background font-medium rounded hover:bg-background/10 transition-colors">
                See Capabilities
              </Link>
              <Link to="/contact" className="inline-flex items-center px-6 py-3 bg-primary text-primary-foreground font-medium rounded hover:opacity-90 transition-opacity">
                Request a Quote
              </Link>
            </div>
          </div>
        </section>

        {/* Capability Section (V1/V2 toggle) — includes Programmes in production */}
        <HomeCapabilitySection />

        {/* Scale and heritage */}
        <section className="px-4 sm:px-6 lg:px-8 py-12 lg:py-16">
          <div className="max-w-7xl mx-auto space-y-6">
            <h2 className="text-2xl lg:text-3xl font-bold">Who We Are</h2>

            <div className="grid lg:grid-cols-5 gap-8 lg:gap-12 items-stretch">
              <div className="lg:col-span-3 space-y-6">
                <p className="text-muted-foreground leading-relaxed">
                  Pentagon was established as a custom machine tool builder in the 1970s, supplying purpose-built machines to India's leading automotive OEMs. These strong foundational roots enable us to design and manufacture all our own jigs, fixtures, and gauges in-house, along with a strong maintenance team that can strip, rebuild, and customise machine tools from first principles.
                </p>
                <p className="text-muted-foreground leading-relaxed">
                  Operations are split across two plants in Ambattur Industrial Estate, Chennai. Plant 1 houses machining, assembly, testing, and administration. Plant 2 is a dedicated gear-cutting division. Total footprint is 43,200 sq. ft., of which 20,000 sq. ft. is currently built-up, with the balance ready for expansion as customer programmes grow. Both plants are ISO 9001:2015 certified.
                </p>
                <p className="text-muted-foreground leading-relaxed">
                  Pentagon is now in its second generation of management, with the third generation joining the business. Line managers and senior staff have, in many cases, spent over two decades with the company.
                </p>
                <Link to="/about" className="text-primary text-sm font-medium inline-flex items-center gap-1 hover:gap-2 transition-all">
                  Learn more about us →
                </Link>
              </div>
              <div className="lg:col-span-2 overflow-hidden border border-border rounded bg-muted flex items-center justify-center self-start">
                <img
                  src={zollerAsset.url}
                  alt="In-house Zoller tool presetter at Pentagon's Plant 1"
                  loading="lazy"
                  className="w-full h-auto object-contain"
                />
              </div>

            </div>
          </div>
        </section>


        {/* What Makes Pentagon Different */}
        <section className="px-4 sm:px-6 lg:px-8 py-12 lg:py-16">
          <div className="max-w-7xl mx-auto space-y-6">
            <h2 className="text-2xl lg:text-3xl font-bold">What makes us different</h2>
            <div className="grid lg:grid-cols-5 gap-8 lg:gap-12 items-stretch">
              <div className="lg:col-span-3 space-y-6">
                <p className="text-muted-foreground leading-relaxed">
                  Our strength lies in DFM feedback and coordinating with multinational teams to optimise manufacturability and support efficient scaling from development to mass production. We believe in flexible manufacturing suited to a wide variety of precision components delivered in small-medium volumes. Our consistent on-time delivery record reflects disciplined planning, process control and long-term accountability.
                </p>
                <p className="text-muted-foreground leading-relaxed">
                  Our deep engineering knowledge, lean workforce, efficient production methods and global export reliability make us trustworthy partners to global OEMs that seek outsourcing opportunities in today's geopolitical climate.
                </p>
                <Link to="/working-with-pentagon" className="text-primary text-sm font-medium inline-flex items-center gap-1 hover:gap-2 transition-all">
                  See our commitment →
                </Link>
              </div>
              <div className="lg:col-span-2 overflow-hidden border border-border rounded bg-muted flex items-center justify-center self-start">
                <img
                  src={zeissCmmAsset.url}
                  alt="Zeiss coordinate measuring machine (CMM) in Pentagon's inspection room"
                  loading="lazy"
                  className="w-full h-auto object-contain"
                />
              </div>
            </div>
          </div>
        </section>


        {/* Markets we serve */}
        <section className="px-4 sm:px-6 lg:px-8 py-12 lg:py-16">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-2xl lg:text-3xl font-bold mb-8">Markets we serve</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 lg:gap-8">
              {markets.map((m) => (
                <MarketCard key={m.label} label={m.label} body={m.body} images={m.images} />
              ))}
            </div>
            {/* Expanding into callout */}
            <div className="mt-8">

              <div className="border-l-4 border-primary bg-muted/40 rounded-r-md overflow-hidden grid grid-cols-1 sm:grid-cols-2">
                <div className="p-6 lg:p-8 flex flex-col justify-between gap-6">
                  <div>
                    <div className="text-xs uppercase tracking-wider text-muted-foreground font-semibold mb-3">
                      <span className="text-primary">Exploratory</span> · Targeted next sectors
                    </div>
                    <h3 className="text-xl lg:text-2xl font-bold leading-tight mb-3">
                      Bringing Pentagon's precision discipline to new regulated sectors.
                    </h3>
                    <p className="text-sm text-muted-foreground leading-relaxed">
                      Not yet in production for these markets — capabilities transfer directly as qualified programmes emerge.
                    </p>
                  </div>
                  <div className="grid grid-cols-2 gap-x-4 gap-y-3">
                    {[
                      { name: "Defence", note: "Certified vendor network existing for 30+ years" },
                      { name: "Aerospace", note: "In-house CMM and air-gauge inspection; complex geometries needing custom fixtures" },
                      { name: "Robotics", note: "Precision gearboxes and actuators" },
                      { name: "Medical", note: "Superfine finishes and miniature assemblies" },
                    ].map((s) => (
                      <div key={s.name} className="border-t border-border pt-2">
                        <div className="text-sm font-semibold text-foreground">{s.name}</div>
                        <div className="text-xs text-muted-foreground leading-snug">{s.note}</div>
                      </div>
                    ))}
                  </div>
                  <Link
                    to="/technologies#new-processes"
                    className="text-primary text-sm font-medium inline-flex items-center gap-1 hover:gap-2 transition-all"
                  >
                    See how new processes and equipment are handled →
                  </Link>
                </div>
                {showExpandingImage && (
                  <div className="aspect-[4/3] border-l border-border bg-muted">
                    <img
                      src={roboticsImg.url}
                      alt="Collaborative robotic arm handling components on an assembly line"
                      loading="lazy"
                      className="w-full h-full object-cover"
                    />
                  </div>
                )}
              </div>

            </div>
            <div className="mt-6">
              <Link to="/what-we-make" className="text-primary text-sm font-medium inline-flex items-center gap-1 hover:gap-2 transition-all">
                See our portfolio →
              </Link>
            </div>
          </div>
        </section>

        {/* Currently underway */}
        <section className="px-4 sm:px-6 lg:px-8 py-12 lg:py-16">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-2xl lg:text-3xl font-bold mb-8">Currently underway</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
              {currentlyUnderway.map((item) => (
                <div key={item.title} className="border-l-4 border-primary pl-6 py-2 space-y-3">
                  <h3 className="text-lg font-semibold">{item.title}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">{item.body}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Closing CTA */}
        <section className="px-4 sm:px-6 lg:px-8 py-16 lg:py-20 border-t border-border">
          <div className="max-w-3xl mx-auto text-center space-y-6">
            <h2 className="text-2xl lg:text-3xl font-bold">Start a conversation</h2>
            <p className="text-muted-foreground leading-relaxed">
              Are you looking for a reliable manufacturing partner that is committed to a longstanding relationship? Send us your enquiry and we can get started.
            </p>
            <div className="flex justify-center">
              <Link to="/contact" className="inline-flex items-center px-6 py-3 bg-primary text-primary-foreground font-medium rounded hover:opacity-90 transition-opacity">
                Request a Quote
              </Link>
            </div>
          </div>
        </section>

        {/* Stats */}
        <section className="border-t border-border">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 text-center">
              {stats.map((s) => (
                <div key={s.label}>
                  <div className="stat-number">{s.number}</div>
                  <div className="text-sm text-muted-foreground mt-1">{s.label}</div>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>
      <SiteFooter />
    </div>
  );
}
