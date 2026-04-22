import { Link } from "react-router-dom";
import SiteHeader from "@/components/SiteHeader";
import SiteFooter from "@/components/SiteFooter";
import PageHero from "@/components/PageHero";
import productsDisplay from "@/assets/products-display.jpg";
import hydraulicValve from "@/assets/hydraulic-valve.jpg";

const families = [
  {
    title: "Hydraulic Valves & Gear Pumps",
    desc: "High-pressure hydraulic sub-assemblies for mobile and industrial fluid-power applications. Developed and supplied to a multinational hydraulics OEM for over 26 years.",
    image: hydraulicValve,
    imageAlt: "Hydraulic valve assembly",
  },
  {
    title: "Power Take-Off (PTO) Gearboxes",
    desc: "Over 75 PTO variants developed to date — cable-operated, pneumatic, hydraulic, and hot-shift — for commercial-vehicle transmission applications.",
    image: productsDisplay,
    imageAlt: "Pentagon PTO gearboxes product range",
  },
  {
    title: "Engine Balancer Assemblies",
    desc: "Mid-engine balancer assemblies supplied to one of India's leading engine manufacturers. In continuous production since 2008.",
    image: null,
    imageAlt: "",
  },
  {
    title: "Precision Machined Components & Gears",
    desc: "Machined parts, gears, and splined shafts supplied to OEM customers on ongoing production programs. Materials include steel, cast iron, ductile iron, and non-ferrous alloys. Gear scope covers spur and helical gears (hobbed and shaved) and splined shafts.",
    image: null,
    imageAlt: "",
  },
];

const endMarkets = [
  {
    name: "Off-Highway, Commercial Vehicles, and Agriculture",
    supplied:
      "Power take-off gearboxes, hydraulic valves, and gear pumps for auxiliary power and fluid-power systems on commercial, off-highway, and agricultural vehicles. Agricultural exposure is second-tier — parts are supplied to engine and hydraulic OEMs whose products are then built into agricultural equipment.",
    demanding:
      "Parts typically combine precision-bored housings with machined gear cavities and integrated hydraulic sub-assembly, and carry field duty cycles that make serial traceability and field-performance history relevant at qualification.",
    capabilities:
      "Gear cutting (hobbing, shaving, broaching, tooth chamfering), CNC bore and angular grinding, and clean-room hydraulic assembly with automated test-rig validation.",
  },
  {
    name: "Automotive",
    supplied:
      "Engine balancer assemblies for diesel engine builders, and precision-machined gear, shaft, and housing components for drivetrain and transmission applications.",
    demanding:
      "Tolerance on gear flanks, splined shafts, and mating housings is the usual gating requirement, along with PPAP-grade inspection documentation and stable repeat production.",
    capabilities:
      "CNC hobbing and shaving on spur and helical gears, CMM inspection linked to part serial numbers, and long-run production discipline.",
  },
];

const emergingMarkets = ["Medical", "Robotics", "Aerospace", "Defence"];

export default function WhatWeMake() {
  return (
    <div className="min-h-screen flex flex-col">
      <SiteHeader />
      <PageHero
        title="Portfolio"
        subtitle="Assemblies, gears, and precision machined parts currently in OEM-supply production."
      />
      <main className="flex-1">
        {/* Credibility band */}
        <section className="px-6 md:px-12 pt-16 pb-8">
          <div className="max-w-3xl mx-auto">
            <p className="text-base md:text-lg text-muted-foreground leading-relaxed">
              Pentagon supplies precision-machined parts, gears, and tested assemblies to OEM
              customers on long-running production programs. More than 100 product types have been
              developed and shipped to date. Several programs have been in continuous production for
              over two decades.
            </p>
          </div>
        </section>

        {/* What We Make */}
        <section className="section-padding pt-8">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-2xl font-bold mb-8">What We Make</h2>
            <div className="grid md:grid-cols-2 gap-8">
              {families.map((f) => (
                <div key={f.title} className="capability-card overflow-hidden">
                  {f.image ? (
                    <img
                      src={f.image}
                      alt={f.imageAlt}
                      className="rounded-md object-cover w-full h-48 mb-4"
                    />
                  ) : (
                    <div className="rounded-md bg-muted w-full h-48 mb-4 flex items-center justify-center">
                      <span className="text-xs text-muted-foreground">
                        [PLACEHOLDER — product photo]
                      </span>
                    </div>
                  )}
                  <h3 className="text-lg font-semibold mb-3">{f.title}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">{f.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <hr className="border-border" />
        </div>

        {/* End Markets */}
        <section className="section-padding">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-2xl font-bold mb-6">End Markets</h2>
            <p className="text-muted-foreground mb-10 leading-relaxed max-w-3xl">
              Pentagon's products end up in the following markets. Each market block describes what
              we supply, what makes those parts demanding, and which capabilities drive fit.
            </p>
            <div className="grid md:grid-cols-2 gap-8">
              {endMarkets.map((m) => (
                <div key={m.name}>
                  <h3 className="text-lg font-semibold mb-4">{m.name}</h3>
                  <div className="space-y-3 leading-relaxed">
                    <p>
                      <span className="font-medium text-foreground">Pentagon supplies: </span>
                      <span className="text-muted-foreground">{m.supplied}</span>
                    </p>
                    <p>
                      <span className="font-medium text-foreground">What makes it demanding: </span>
                      <span className="text-muted-foreground">{m.demanding}</span>
                    </p>
                    <p>
                      <span className="font-medium text-foreground">Relevant capabilities: </span>
                      <span className="text-muted-foreground">{m.capabilities}</span>
                    </p>
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-12">
              <p className="text-sm text-muted-foreground mb-4">
                Active enquiry and early-stage development in:
              </p>
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
                {emergingMarkets.map((name) => (
                  <div
                    key={name}
                    className="border border-border rounded-md px-4 py-3 text-sm text-muted-foreground"
                  >
                    {name}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <hr className="border-border" />
        </div>

        {/* Closing invitation */}
        <section className="section-padding">
          <div className="max-w-3xl mx-auto space-y-4">
            <p className="text-muted-foreground leading-relaxed">
              Enquiries are welcome from OEMs across any sector. If a part in your bill of materials
              fits the work above, we would be glad to see a drawing.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              For the machines and measurement equipment that support these programs, see{" "}
              <Link to="/technologies" className="text-primary underline underline-offset-4 hover:no-underline">
                Means of Production
              </Link>
              . For a fuller account of what we do and how, see{" "}
              <Link to="/capabilities" className="text-primary underline underline-offset-4 hover:no-underline">
                Capabilities
              </Link>
              .
            </p>
          </div>
        </section>
      </main>
      <SiteFooter />
    </div>
  );
}
