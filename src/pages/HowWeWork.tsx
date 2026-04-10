import { Download } from "lucide-react";
import SiteHeader from "@/components/SiteHeader";
import SiteFooter from "@/components/SiteFooter";
import PageHero from "@/components/PageHero";

const steps = [
  { num: "01", title: "Kickoff & NDA", desc: "Scope, volumes, standards, PPAP requirements." },
  { num: "02", title: "DFM & Tooling", desc: "Design for Manufacture feedback; in-house jig and fixture design; control plan." },
  { num: "03", title: "Prototyping", desc: "Sample builds; linked inspection and functional test reports." },
  { num: "04", title: "Validation", desc: "Performance testing; capability runs; packaging trials." },
  { num: "05", title: "Ramp-up", desc: "Engineering change management; order handling; buffer stock." },
  { num: "06", title: "Sustain", desc: "Ongoing quality reporting; ESG compliance." },
];

const checklist = [
  "3D and 2D toleranced drawings",
  "Bill of materials and expected annual volumes",
  "Applicable standards and test specifications",
  "Special process requirements (heat treatment, coatings, packaging)",
  "PPAP/FAI/traceability requirements and target dates",
];

export default function HowWeWork() {
  return (
    <div className="min-h-screen flex flex-col">
      <SiteHeader />
      <PageHero title="How We Work" subtitle="[PLACEHOLDER — owner to write intro.]" />
      <main className="flex-1">
        <section className="section-padding">
          <div className="max-w-7xl mx-auto">
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
              {steps.map((s) => (
                <div key={s.num} className="capability-card">
                  <div className="text-primary font-bold text-2xl mb-2">{s.num}</div>
                  <h3 className="text-lg font-semibold mb-2">{s.title}</h3>
                  <p className="text-sm text-muted-foreground">{s.desc}</p>
                </div>
              ))}
            </div>

            <div className="bg-secondary rounded-lg p-8 lg:p-12 max-w-2xl">
              <h3 className="text-xl font-semibold mb-4">RFQ Checklist</h3>
              <p className="text-sm text-muted-foreground mb-4">To get a quote, Pentagon needs:</p>
              <ul className="space-y-3">
                {checklist.map((item) => (
                  <li key={item} className="flex items-start gap-3 text-sm text-foreground">
                    <span className="w-1.5 h-1.5 rounded-full bg-primary mt-2 shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
              <a href="#" className="download-btn mt-8">
                <Download size={16} /> Download RFQ Checklist
              </a>
            </div>
          </div>
        </section>
      </main>
      <SiteFooter />
    </div>
  );
}
