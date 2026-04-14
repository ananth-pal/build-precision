import { Download, Cog, CircleDot, Ruler, Droplets, Scissors, Wrench } from "lucide-react";
import SiteHeader from "@/components/SiteHeader";
import SiteFooter from "@/components/SiteFooter";
import PageHero from "@/components/PageHero";

const categories = [
  {
    icon: Cog,
    title: "Machining",
    desc: "CNC horizontal and vertical machining centres, CNC turning, fine boring, surface and cylindrical grinding, lapping and honing. [PLACEHOLDER — owner to add specifics]",
  },
  {
    icon: CircleDot,
    title: "Gear Cutting",
    desc: "Hobbing, shaving, shaping, broaching, tooth rounding and chamfering, bore and angular grinding. Profile and PCD testing in-house. [PLACEHOLDER]",
  },
  {
    icon: Ruler,
    title: "Measurement & Metrology",
    desc: "CNC scanning CMM, surface roughness measurement to nanometre resolution, height gauging, CNC tool pre-setter. All instruments calibrated periodically in-house and through external agencies. [PLACEHOLDER]",
  },
  {
    icon: Droplets,
    title: "Cleaning & Washing",
    desc: "[PLACEHOLDER — owner to write]",
  },
  {
    icon: Scissors,
    title: "Deburring",
    desc: "[PLACEHOLDER — owner to write]",
  },
  {
    icon: Wrench,
    title: "Tooling",
    desc: "All jigs, fixtures, and gauges — manual and hydraulic — are designed and manufactured in-house. This capability originates from Pentagon's machine tool heritage and is not outsourced.",
  },
];

const standards = [
  { label: "ISO 9001:2015", note: "Quality Management System, certified by Intertek (UKAS accredited)" },
  { label: "ISO 14001:2015", note: "Environmental Management System [status: in progress — confirm with owner before publishing]" },
  { label: "ISO 45001:2018", note: "Occupational Health & Safety [status: in progress — confirm with owner before publishing]" },
  { label: "PPAP and APQP", note: "capability" },
];

export default function Technologies() {
  return (
    <div className="min-h-screen flex flex-col">
      <SiteHeader />
      <PageHero
        title="Technologies"
        subtitle="What Pentagon uses to manufacture."
      />
      <main className="flex-1">
        <section className="section-padding">
          <div className="max-w-7xl mx-auto">
            <p className="text-muted-foreground leading-relaxed max-w-3xl mb-12">
              Pentagon operates two dedicated manufacturing facilities — one for machining and assembly, one for gear cutting. The equipment base has its roots in Pentagon's original machine tool manufacturing business; the same team that once built special-purpose machines for India's largest automotive OEMs now uses that knowledge to specify, maintain, and where necessary rebuild the equipment that runs production. [Owner to refine]
            </p>
            <p className="text-sm text-muted-foreground mb-12">
              For what Pentagon produces using these technologies, see <a href="/capabilities" className="text-primary font-medium hover:underline">Capabilities →</a>
            </p>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
              {categories.map((c) => (
                <div key={c.title} className="capability-card">
                  <c.icon className="text-primary mb-4" size={28} />
                  <h3 className="text-lg font-semibold mb-3">{c.title}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">{c.desc}</p>
                </div>
              ))}
            </div>

            <div className="mb-16">
              <a href="#" className="download-btn">
                <Download size={16} /> Download Full Equipment List
              </a>
              <p className="text-xs text-muted-foreground mt-2">
                The PDF contains machine makes, models, and specifications for all six categories.
              </p>
            </div>

            <div className="border-t border-border pt-8">
              <h3 className="text-lg font-semibold mb-4">Standards & Certifications</h3>
              <ul className="space-y-2">
                {standards.map((s) => (
                  <li key={s.label} className="text-sm text-muted-foreground">
                    <span className="font-medium text-foreground">{s.label}</span> — {s.note}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </section>
      </main>
      <SiteFooter />
    </div>
  );
}
