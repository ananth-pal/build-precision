import SiteHeader from "@/components/SiteHeader";
import SiteFooter from "@/components/SiteFooter";
import PageHero from "@/components/PageHero";

const steps = [
  { num: "01", title: "Kickoff & NDA", desc: "Scope, volumes, standards, PPAP requirements." },
  { num: "02", title: "DFM & Tooling", desc: "Design for Manufacture feedback; in-house jig and fixture design; control plan." },
  { num: "03", title: "Prototyping", desc: "Sample builds; linked inspection and functional test reports." },
  { num: "04", title: "Validation", desc: "Performance testing; capability runs; packaging trials." },
  { num: "05", title: "Ramp and Sustain", desc: "Release, engineering change management, order handling, and buffer stock, with ongoing quality reporting through the life of the programme." },
];

const standards = [
  { label: "ISO 9001:2015", note: "Quality Management System, certified by Intertek (UKAS accredited)" },
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

            {/* Standards & Certifications */}
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

            {/* ESG */}
            <div className="mt-12 border-t border-border pt-8">
              <h3 className="text-lg font-semibold mb-2">Environmental, Social & Governance (ESG)</h3>
              <p className="text-sm text-muted-foreground mb-6 max-w-3xl">
                We set benchmarks that exceed statutory requirements through a culture of integrity and continuous improvement. This is demonstrated by our commitment to:
              </p>
              <div className="grid md:grid-cols-3 gap-6">
                <div>
                  <h4 className="text-sm font-semibold text-foreground mb-2">Employee Welfare</h4>
                  <p className="text-sm text-muted-foreground">We provide comprehensive medical insurance for our entire workforce, exceeding legal mandates to ensure the security of our skilled team.</p>
                </div>
                <div>
                  <h4 className="text-sm font-semibold text-foreground mb-2">Industrial Responsibility</h4>
                  <p className="text-sm text-muted-foreground">We ensure the safe and ethical disposal of all industrial waste, maintaining clean-room standards across our 43,200 sq. ft. facilities.</p>
                </div>
                <div>
                  <h4 className="text-sm font-semibold text-foreground mb-2">Resource Efficiency</h4>
                  <p className="text-sm text-muted-foreground">We prioritise energy-efficient manufacturing processes and utilise recyclable packaging—including customer-branded cartons and reusable wooden crates—to minimise our environmental footprint.</p>
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
