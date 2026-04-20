import SiteHeader from "@/components/SiteHeader";
import SiteFooter from "@/components/SiteFooter";
import PageHero from "@/components/PageHero";

const steps = [
  { num: "01", title: "Kickoff & NDA", desc: "Scope, volumes, applicable standards, and PPAP requirements confirmed." },
  { num: "02", title: "DFM & Tooling", desc: "Design-for-manufacture review; in-house jig and fixture design; control plan defined." },
  { num: "03", title: "Prototyping", desc: "Sample builds with linked inspection and functional test reports." },
  { num: "04", title: "Validation", desc: "Performance testing, capability runs, and packaging trials." },
  { num: "05", title: "Ramp and Sustain", desc: "Engineering change management, order handling, buffer stock, and ongoing quality reporting." },
];

const standards = [
  { label: "ISO 9001:2015", note: "Quality Management System, certified by Intertek (UKAS-accredited)." },
  { label: "ISO 14001", note: "Environmental Management System (in progress)." },
  { label: "ISO 45001", note: "Occupational Health & Safety Management System (in progress)." },
];

const memberships = [
  { label: "One Star Export House", note: "DGFT recognition for exporters meeting a minimum cumulative export threshold under the Foreign Trade Policy. Valid through 2028." },
  { label: "EEPC India", note: "Engineering Export Promotion Council, registered Manufacturer Exporter." },
  { label: "FIEO", note: "Federation of Indian Export Organisations, registered Manufacturer Exporter." },
  { label: "FPSI", note: "Fluid Power Society of India, industrial member since 2010." },
  { label: "AIEMA", note: "Ambattur Industrial Estate Manufacturers' Association, member since 2015." },
];

export default function WorkingWithPentagon() {
  return (
    <div className="min-h-screen flex flex-col">
      <SiteHeader />
      <PageHero title="Working with Pentagon" subtitle="Pentagon approaches every engagement as a long-term engineering partnership. We give design feedback before tooling starts, invest in new machinery when a design requires it, and treat full traceability as standard on every assembly. Our longest client relationship is 26 years. That is the standard we hold ourselves to." />
      <main className="flex-1">
        <section className="section-padding">
          <div className="max-w-7xl mx-auto">
            {/* Values statement */}
            <div className="max-w-3xl mb-12">
<p className="text-muted-foreground leading-relaxed italic">
                At Pentagon, precision dictates our every process. Every stage of our workflow is built on collaboration, technical rigour, and continuous improvement to ensure each product meets the highest standards of quality and performance.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
              {steps.map((s) => (
                <div key={s.num} className="capability-card">
                  <div className="text-primary font-bold text-2xl mb-2">{s.num}</div>
                  <h3 className="text-lg font-semibold mb-2">{s.title}</h3>
                  <p className="text-sm text-muted-foreground">{s.desc}</p>
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
