import SiteHeader from "@/components/SiteHeader";
import SiteFooter from "@/components/SiteFooter";
import PageHero from "@/components/PageHero";
import productsDisplay from "@/assets/products-display.jpg";
import hydraulicValve from "@/assets/hydraulic-valve.jpg";

const families = [
  { title: "Hydraulic Valves & Gear Pumps", desc: "High-pressure hydraulic sub-assemblies; developed and supplied to a multinational hydraulics OEM for 26+ years.", image: hydraulicValve, imageAlt: "Hydraulic valve assembly" },
  { title: "Power Take-Off (PTO) Gearboxes", desc: "75+ variants — cable-operated, pneumatic, hydraulic, and hot-shift; wide range of transmission applications.", image: productsDisplay, imageAlt: "Pentagon PTO gearboxes product range" },
  { title: "Engine Balancer Assemblies", desc: "Mid-engine balancer assemblies for a major Indian engine OEM; in production since 2008.", image: null, imageAlt: "" },
  { title: "Precision Machined Components & Gears", desc: "Steel, cast iron, ductile iron, non-ferrous; spur/helical gears, splined shafts.", image: null, imageAlt: "" },
];

const industries = [
  { title: "Hydraulics", image: "https://images.unsplash.com/photo-1504328345606-18bbc8c9d7d1?w=400&h=300&fit=crop", desc: "Precision-engineered components for high-pressure hydraulic systems, powering critical fluid-power applications across sectors." },
  { title: "Industrial Machinery", image: "https://images.unsplash.com/photo-1565043589221-1a6fd9ae45c7?w=400&h=300&fit=crop", desc: "Robust assemblies and machined parts designed for heavy-duty industrial equipment and automation systems." },
  { title: "Robotics", image: "https://images.unsplash.com/photo-1485827404703-89b55fcc595e?w=400&h=300&fit=crop", desc: "High-precision gears and drive components enabling accurate, repeatable motion in robotic platforms." },
  { title: "Aerospace", image: "https://images.unsplash.com/photo-1540962351504-03099e0a754b?w=400&h=300&fit=crop", desc: "Mission-critical parts manufactured to exacting tolerances for aerospace propulsion and actuation systems." },
  { title: "Defence", image: "https://images.unsplash.com/photo-1579912437766-7896df6d3cd3?w=400&h=300&fit=crop", desc: "Reliable, battle-tested components for defence vehicles, weapons systems, and support equipment." },
];

export default function WhatWeMake() {
  return (
    <div className="min-h-screen flex flex-col">
      <SiteHeader />
      <PageHero title="Portfolio" subtitle="Precision-engineered products serving critical industries worldwide." />
      <main className="flex-1">
        <section className="section-padding">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-2xl font-bold mb-8">What We Make</h2>
            <div className="grid md:grid-cols-2 gap-8 mb-16">
              {families.map((f) => (
                <div key={f.title} className="capability-card overflow-hidden">
                  {f.image ? (
                    <img src={f.image} alt={f.imageAlt} className="rounded-md object-cover w-full h-48 mb-4" />
                  ) : (
                    <div className="rounded-md bg-muted w-full h-48 mb-4 flex items-center justify-center">
                      <span className="text-xs text-muted-foreground">[PLACEHOLDER — product photo]</span>
                    </div>
                  )}
                  <h3 className="text-lg font-semibold mb-3">{f.title}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">{f.desc}</p>
                </div>
              ))}
            </div>

            <h2 className="text-2xl font-bold mb-8">Industries We Serve</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {industries.map((ind) => (
                <div key={ind.title} className="rounded-lg border border-border overflow-hidden">
                  <img src={ind.image} alt={ind.title} className="w-full h-40 object-cover" />
                  <div className="p-4">
                    <h3 className="text-sm font-semibold mb-2 text-foreground">{ind.title}</h3>
                    <p className="text-xs text-muted-foreground leading-relaxed">{ind.desc}</p>
                  </div>
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
