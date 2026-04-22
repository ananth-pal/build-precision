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

            {/* Momentum line */}
            <p className="text-sm text-muted-foreground text-center max-w-3xl mx-auto mt-8 leading-relaxed">
              Capacity expansion is underway at Pentagon, with the third generation of the family joining the business alongside decades-long OEM supply programmes.
            </p>

            {/* Currently underway block */}
            <div className="mt-8 pt-6 border-t border-border max-w-4xl mx-auto">
              <div className="text-xs font-semibold uppercase tracking-wider text-primary text-center mb-4">
                Currently underway
              </div>
              <ul className="flex flex-col sm:flex-row sm:items-center sm:justify-center gap-3 sm:gap-0 text-sm text-muted-foreground text-center">
                <li className="sm:px-6">
                  Plant 2 gear-cutting facility refurbishment — epoxy flooring and modernised services
                </li>
                <li className="hidden sm:block w-px h-5 bg-border" aria-hidden="true" />
                <li className="sm:px-6">
                  ISO 45001 and ISO 14001 certification — audits in progress
                </li>
              </ul>
            </div>
          </div>
        </section>

        {/* Differentiator Block */}
        <section className="px-4 sm:px-6 lg:px-8 py-12 lg:py-16">
          <div className="max-w-7xl mx-auto space-y-6">
            <h2 className="text-2xl lg:text-3xl font-bold">What makes Pentagon different</h2>
            <div className="space-y-4 text-muted-foreground leading-relaxed max-w-4xl">
              <p>
                Pentagon Machines and Services Pvt. Ltd. is a precision contract manufacturing company headquartered in Chennai, India. It started in 19xx building custom special-purpose machines for India's largest automotive OEMs before transitioning to contract manufacturing in 19xx. That origin means Pentagon designs and manufactures all its own jigs, fixtures, and gauges in-house, and its maintenance team can strip, rebuild, and customise machine tools from first principles.
              </p>
              <p>
                Since 1999, Pentagon has supplied a leading multinational hydraulics OEM in Australia continuously — developing 75+ product variants from prototype stage across that period. Since 2008, the company has also produced engine balancer assemblies for Simpson & Co. Ltd., one of India's largest engine manufacturers.
              </p>
              <p>
                Pentagon operates two highly efficient ISO 9001:2015 certified advanced manufacturing facilities on a 43,200 sq ft footprint (20,000 sq ft built-up, balance ready for development as customer programmes grow). These facilities feature clean room assembly, testing and automated validation technologies, as well as a comprehensive range of CNC machine tools and metrology equipment to ensure exceptional quality and reliability.
              </p>
              <p>
                Pentagon handles precision machining, gear cutting, and assembly for safety-critical components with full material and process traceability on every delivered part, supporting OEM programmes that run for decades.
              </p>
            </div>
          </div>
        </section>

        {/* Capability Section (V1/V2 toggle) */}
        <HomeCapabilitySection />
        
        {/* Facility Video Placeholder */}
        <section className="px-4 sm:px-6 lg:px-8 py-12 lg:py-16 bg-secondary">
          <div className="max-w-7xl mx-auto">
            <div className="aspect-video bg-muted rounded-lg flex items-center justify-center border border-border max-w-4xl mx-auto">
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
