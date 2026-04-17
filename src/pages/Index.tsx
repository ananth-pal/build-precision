import { Link } from "react-router-dom";
import { ArrowRight, Cog, CircleDot, Box } from "lucide-react";
import heroCnc from "@/assets/hero-cnc.jpg";
import SiteHeader from "@/components/SiteHeader";
import SiteFooter from "@/components/SiteFooter";

const stats = [
  { number: "45+", label: "Years manufacturing heritage" },
  { number: "65", label: "Year group legacy" },
  { number: "100+", label: "Product types developed & exported" },
  { number: "75+", label: "Variants, one product family, one partner" },
];

const capabilities = [
  { icon: Cog, title: "Machining", desc: "CNC turning, milling, grinding, and in-house tooling design — from a team that built machine tools before becoming a contract manufacturer.", path: "/capabilities/machining" },
  { icon: CircleDot, title: "Gear Cutting", desc: "Dedicated gear cutting division: hobbing, shaving, shaping, broaching, and precision grinding with full profile testing.", path: "/capabilities/gear-cutting" },
  { icon: Box, title: "Assembly", desc: "Clean-room assembly, functional testing on automated rigs, and serialised traceability on every unit shipped.", path: "/capabilities/assembly" },
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

        {/* Stats */}
        <section className="border-b border-border">
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

        {/* Capability Tiles */}
        <section className="section-padding bg-secondary">
          <div className="max-w-7xl mx-auto">
            <div className="grid md:grid-cols-3 gap-8">
              {capabilities.map((c) => (
                <Link key={c.title} to={c.path} className="capability-card group bg-background">
                  <c.icon className="text-primary mb-4" size={32} />
                  <h3 className="text-xl font-semibold mb-3">{c.title}</h3>
                  <p className="text-muted-foreground text-sm leading-relaxed mb-4">{c.desc}</p>
                  <span className="text-primary text-sm font-medium inline-flex items-center gap-1 group-hover:gap-2 transition-all">
                    Learn more <ArrowRight size={14} />
                  </span>
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* Differentiator Block */}
        <section className="section-padding">
          <div className="max-w-4xl mx-auto space-y-8">
            <h2 className="text-2xl lg:text-3xl font-bold">What makes Pentagon different</h2>
            <div className="space-y-6 text-muted-foreground leading-relaxed">
              <p>
                Pentagon Machines and Services Pvt. Ltd. is a precision contract manufacturing company headquartered in Chennai, India. It started in 19xx building custom special-purpose machines for India's largest automotive OEMs before transitioning to contract manufacturing in 19xx. That origin means Pentagon designs and manufactures all its own jigs, fixtures, and gauges in-house, and its maintenance team can strip, rebuild, and customise machine tools from first principles.
              </p>
              <p>
                Since 1999, Pentagon has supplied a leading multinational hydraulics OEM in Australia continuously — developing 75+ product variants from prototype stage across that period. Since 2008, the company has also produced engine balancer assemblies for Simpson & Co. Ltd., one of India's largest engine manufacturers.
              </p>
              <p>
                Pentagon operates two highly efficient ISO 9001:2015 certified advanced manufacturing facilities totaling 43,200 square feet. These facilities feature clean room assembly, testing and automated validation technologies, as well as a comprehensive range of CNC machine tools and metrology equipment to ensure exceptional quality and reliability.
              </p>
            </div>
          </div>
        </section>
        {/* Facility Video Placeholder */}
        <section className="section-padding bg-secondary">
          <div className="max-w-4xl mx-auto text-center">
            <div className="aspect-video bg-muted rounded-lg flex items-center justify-center border border-border">
              <div className="text-center">
                <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-8 h-8 text-primary"><path d="M8 5v14l11-7z" /></svg>
                </div>
                <p className="text-sm text-muted-foreground">Facility walkthrough video — coming soon</p>
              </div>
            </div>
          </div>
        </section>
      </main>
      <SiteFooter />
    </div>
  );
}
