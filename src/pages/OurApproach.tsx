import { Download } from "lucide-react";
import SiteHeader from "@/components/SiteHeader";
import SiteFooter from "@/components/SiteFooter";
import PageHero from "@/components/PageHero";

const steps = [
  { num: "01", title: "Kickoff & NDA", desc: "Scope, volumes, standards, PPAP requirements." },
  { num: "02", title: "DFM & Tooling", desc: "Design for Manufacture feedback; in-house jig and fixture design; control plan.", note: "We give feedback on design intent, not just tolerances. If a drawing can be made more manufacturable without compromising function, we say so." },
  { num: "03", title: "Prototyping", desc: "Sample builds; linked inspection and functional test reports." },
  { num: "04", title: "Validation", desc: "Performance testing; capability runs; packaging trials." },
  { num: "05", title: "Ramp-up", desc: "Engineering change management; order handling; buffer stock." },
  { num: "06", title: "Sustain", desc: "Ongoing quality reporting; ESG compliance. Export packaging, Incoterms, lead time reliability, engineering change management. [Owner to supply specifics]" },
];

const checklist = [
  "3D and 2D toleranced drawings",
  "Bill of materials and expected annual volumes",
  "Applicable standards and test specifications",
  "Special process requirements (heat treatment, coatings, packaging)",
  "PPAP/FAI/traceability requirements and target dates",
];

const standards = [
  { label: "ISO 9001:2015", note: "Quality Management System, certified by Intertek (UKAS accredited)" },
  { label: "ISO 14001:2015", note: "Environmental Management System [status: in progress — confirm with owner before publishing]" },
  { label: "ISO 45001:2018", note: "Occupational Health & Safety [status: in progress — confirm with owner before publishing]" },
  { label: "PPAP and APQP", note: "capability" },
];

export default function WorkingWithPentagon() {
  return (
    <div className="min-h-screen flex flex-col">
      <SiteHeader />
      <PageHero title="Working with Pentagon" subtitle="[PLACEHOLDER — owner to write intro.]" />
      <main className="flex-1">
        <section className="section-padding">
          <div className="max-w-7xl mx-auto">
            {/* Values statement */}
            <div className="max-w-3xl mb-12">
              <p className="text-muted-foreground leading-relaxed italic">
                Pentagon approaches every engagement as a long-term engineering partnership. We give design feedback before tooling starts, invest in new machinery when a design requires it, and treat full traceability as standard on every assembly. Our longest client relationship is 26 years. That is the standard we hold ourselves to.
              </p>
              <p className="text-xs text-muted-foreground mt-2">[Owner to refine]</p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
              {steps.map((s) => (
                <div key={s.num} className="capability-card">
                  <div className="text-primary font-bold text-2xl mb-2">{s.num}</div>
                  <h3 className="text-lg font-semibold mb-2">{s.title}</h3>
                  <p className="text-sm text-muted-foreground">{s.desc}</p>
                  {s.note && (
                    <p className="text-sm text-muted-foreground italic mt-3 pt-3 border-t border-border">
                      {s.note}
                    </p>
                  )}
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

            {/* Quality proof placeholder */}
            <div className="mt-12 border border-dashed border-border rounded-lg p-8 text-center">
              <p className="text-sm text-muted-foreground">
                <span className="font-medium text-foreground">Quality Proof Download</span> — Sample inspection report or capability study coming soon.
              </p>
              <a href="#" className="download-btn mt-4 opacity-50 pointer-events-none">
                <Download size={16} /> Download Sample Inspection Report
              </a>
            </div>

            {/* Standards & Certifications */}
            <div className="mt-16 border-t border-border pt-8">
              <h3 className="text-lg font-semibold mb-4">Standards & Certifications</h3>
              <ul className="space-y-2">
                {standards.map((s) => (
                  <li key={s.label} className="text-sm text-muted-foreground">
                    <span className="font-medium text-foreground">{s.label}</span> — {s.note}
                  </li>
                ))}
              </ul>
            </div>

            {/* ESG */}
            <div className="mt-12 border-t border-border pt-8">
              <h3 className="text-lg font-semibold mb-6">ESG</h3>
              <div className="grid md:grid-cols-3 gap-6">
                <div>
                  <h4 className="text-sm font-semibold text-foreground mb-1">Quality</h4>
                  <p className="text-sm text-muted-foreground">ISO 9001:2015 certified. [1 sentence — owner to write]</p>
                </div>
                <div>
                  <h4 className="text-sm font-semibold text-foreground mb-1">Environment</h4>
                  <p className="text-sm text-muted-foreground">ISO 14001:2015 in progress. [1 sentence — owner to write]</p>
                </div>
                <div>
                  <h4 className="text-sm font-semibold text-foreground mb-1">Safety</h4>
                  <p className="text-sm text-muted-foreground">ISO 45001:2018 in progress. [1 sentence — owner to write]</p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <SiteFooter />
    </div>
  );
}
