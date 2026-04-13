import SiteHeader from "@/components/SiteHeader";
import SiteFooter from "@/components/SiteFooter";
import PageHero from "@/components/PageHero";
import productsDisplay from "@/assets/products-display.jpg";
import hydraulicValve from "@/assets/hydraulic-valve.jpg";

const families = [
  { title: "Hydraulic Valves & Gear Pumps", desc: "High-pressure hydraulic sub-assemblies; developed and supplied to a multinational hydraulics OEM for 26+ years." },
  { title: "Power Take-Off (PTO) Gearboxes", desc: "75+ variants — cable-operated, pneumatic, hydraulic, and hot-shift; wide range of transmission applications." },
  { title: "Engine Balancer Assemblies", desc: "Mid-engine balancer assemblies for a major Indian engine OEM; in production since 2008." },
  { title: "Precision Machined Components & Gears", desc: "Steel, cast iron, ductile iron, non-ferrous; spur/helical gears, splined shafts." },
];

export default function WhatWeMake() {
  return (
    <div className="min-h-screen flex flex-col">
      <SiteHeader />
      <PageHero title="What We Make" subtitle="[PLACEHOLDER — owner to write intro.]" />
      <main className="flex-1">
        <section className="section-padding">
          <div className="max-w-7xl mx-auto">
            <div className="grid md:grid-cols-2 gap-8 mb-16">
              {families.map((f) => (
                <div key={f.title} className="capability-card">
                  <h3 className="text-lg font-semibold mb-3">{f.title}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">{f.desc}</p>
                </div>
              ))}
            </div>
            <div className="grid md:grid-cols-2 gap-8 mb-16">
              <img src={productsDisplay} alt="Pentagon product range — PTO gearboxes and hydraulic valves" className="rounded-lg object-cover w-full h-64 md:h-80" />
              <img src={hydraulicValve} alt="Hydraulic valve assembly" className="rounded-lg object-cover w-full h-64 md:h-80 bg-muted" />
            </div>

            {/* Industries */}
            <div>
              <h2 className="text-2xl font-bold mb-6">Industries</h2>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                {["Hydraulics & Industrial Machinery", "Robotics", "Aerospace", "Defence"].map((sector) => (
                  <div key={sector} className="border border-border rounded-lg px-4 py-6 text-center">
                    <span className="text-sm font-medium text-foreground">{sector}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>
      </main>
      <SiteFooter />
    </div>
  );
}
