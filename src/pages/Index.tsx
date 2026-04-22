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
