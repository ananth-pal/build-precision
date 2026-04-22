import { Link } from "react-router-dom";
import heroCnc from "@/assets/hero-cnc.jpg";
import SiteHeader from "@/components/SiteHeader";
import SiteFooter from "@/components/SiteFooter";
import HomeCapabilitySection from "@/components/home/HomeCapabilitySection";

const stats = [
  { number: "45+", label: "Years manufacturing heritage" },
  { number: "65", label: "Year group legacy" },
  { number: "100+", label: "Product types developed & exported" },
  { number: "75+", label: "Variants, one product family, one partner" },
];

const markets = [
  {
    label: "Off-highway and commercial vehicles",
    body: "Power take-off gearboxes, housings, and transmission components for trucks, construction, and material handling equipment.",
    placeholder: "[Photograph of commercial truck, construction equipment, or similar off-highway application — to be supplied]",
  },
  {
    label: "Automotive",
    body: "Engine components and balancer assemblies produced in repeat production for Indian automotive OEMs.",
    placeholder: "[Photograph of engine assembly, automotive powertrain component, or finished Pentagon automotive part — to be supplied]",
  },
  {
    label: "Industrial machinery",
    body: "Precision machined components and integrated assemblies for industrial equipment builders.",
    placeholder: "[Photograph of industrial machinery or related application — to be supplied]",
  },
  {
    label: "Agriculture",
    body: "Engine balancer assemblies and precision components for tractor engine manufacturers.",
    placeholder: "[Photograph of agricultural equipment, tractor engine, or similar — to be supplied]",
  },
];

const currentlyUnderway = [
  {
    title: "Plant 2 gear-cutting facility refurbishment",
    body: "Epoxy flooring and modernised services installation underway at the gear-cutting division.",
    status: "Underway — completion target to be confirmed",
    placeholder: "[Photograph of Plant 2 gear-cutting floor or refurbishment work in progress — to be supplied]",
  },
  {
    title: "ISO 45001 and ISO 14001 certification",
    body: "Occupational health and safety and environmental management system audits are in progress.",
    status: "Audits in progress — certification targets to be confirmed",
    placeholder: null,
  },
];

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col">
      <SiteHeader />
      <main className="flex-1">
        {/* Hero */}
        <section className="relative min-h-[70vh] flex items-center overflow-hidden" style={{ backgroundImage: `linear-gradient(135deg, hsla(220,20%,10%,0.85), hsla(348,76%,45%,0.2)), url(${heroCnc})`, backgroundSize: "cover", backgroundPosition: "center" }}>
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 w-full">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-background max-w-3xl leading-tight mb-6">
              We build the products your customers bet their business on
            </h1>
            <p className="text-lg text-background/80 max-w-2xl mb-8">
              Pentagon is a precision contract manufacturer headquartered in Chennai, India that consolidates operations from machining and gear cutting to validating assemblies under one roof.
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

        {/* Markets we serve */}
        <section className="px-4 sm:px-6 lg:px-8 py-12 lg:py-16">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-2xl lg:text-3xl font-bold mb-8">Markets we serve</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 lg:gap-8">
              {markets.map((m) => (
                <div key={m.label} className="space-y-3">
                  <div className="aspect-[4/3] bg-muted border border-border rounded flex items-center justify-center text-center px-6">
                    <span className="text-xs uppercase tracking-wider text-muted-foreground">
                      {m.placeholder}
                    </span>
                  </div>
                  <h3 className="text-lg font-semibold">{m.label}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">{m.body}</p>
                </div>
              ))}
            </div>
            {/* Expanding into line */}
            <p className="text-sm text-muted-foreground italic leading-relaxed mt-8 max-w-4xl">
              Expanding into: medical, aerospace, defence, and robotics applications — Pentagon's precision machining, gear cutting, traceability, and in-house tooling transfer directly to these sectors as qualified programmes emerge.
            </p>
          </div>
        </section>

        {/* Capability Section (V1/V2 toggle) — includes Programmes in production */}
        <HomeCapabilitySection />

        {/* Scale and heritage */}
        <section className="px-4 sm:px-6 lg:px-8 py-12 lg:py-16">
          <div className="max-w-7xl mx-auto space-y-10">
            <h2 className="text-2xl lg:text-3xl font-bold">Scale and heritage</h2>

            {/* Paragraph 1 + Slot A */}
            <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
              <p className="text-muted-foreground leading-relaxed">
                Pentagon was established as a custom machine tool builder in the 1970s, supplying purpose-built machines to India's leading automotive OEMs. That origin shapes how Pentagon operates today — jigs, fixtures, and gauges are designed and manufactured in-house, and the maintenance team can strip, rebuild, and customise machine tools from first principles.
              </p>
              <div className="aspect-[4/3] bg-muted border border-border rounded flex items-center justify-center text-center px-6">
                <span className="text-xs uppercase tracking-wider text-muted-foreground">
                  [Photograph of Plant 1 machine shop or Plant 2 gear-cutting facility — to be supplied]
                </span>
              </div>
            </div>

            {/* Paragraph 2 + Slot B */}
            <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
              <div className="aspect-[4/3] bg-muted border border-border rounded flex items-center justify-center text-center px-6 lg:order-1">
                <span className="text-xs uppercase tracking-wider text-muted-foreground">
                  [Photograph of CMM or metrology bay — to be supplied]
                </span>
              </div>
              <p className="text-muted-foreground leading-relaxed lg:order-2">
                Operations are split across two plants in Ambattur Industrial Estate, Chennai. Plant 1 houses machining, assembly, testing, and administration. Plant 2 is a dedicated gear-cutting division. Total footprint is 43,200 sq. ft., of which 20,000 sq. ft. is currently built-up, with the balance ready for expansion as customer programmes grow. Both plants are ISO 9001:2015 certified.
              </p>
            </div>

            {/* Paragraph 3 */}
            <p className="text-muted-foreground leading-relaxed max-w-4xl">
              Pentagon is now in its second generation of management, with the third generation joining the business. Line managers and senior staff have, in many cases, spent over two decades with the company.
            </p>
          </div>
        </section>

        {/* Currently underway */}
        <section className="px-4 sm:px-6 lg:px-8 py-12 lg:py-16 bg-secondary">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-2xl lg:text-3xl font-bold mb-8">Currently underway</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
              {currentlyUnderway.map((item) => (
                <div key={item.title} className="space-y-3">
                  {item.placeholder && (
                    <div className="aspect-[4/3] bg-muted border border-border rounded flex items-center justify-center text-center px-6">
                      <span className="text-xs uppercase tracking-wider text-muted-foreground">
                        {item.placeholder}
                      </span>
                    </div>
                  )}
                  <h3 className="text-lg font-semibold">{item.title}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">{item.body}</p>
                  <p className="text-xs italic text-muted-foreground">{item.status}</p>
                </div>
              ))}
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
