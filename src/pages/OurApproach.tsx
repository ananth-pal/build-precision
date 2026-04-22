import SiteHeader from "@/components/SiteHeader";
import SiteFooter from "@/components/SiteFooter";
import PageHero from "@/components/PageHero";
import logoIso9001 from "@/assets/logos/iso-9001-intertek-ukas.png";
import logoOneStar from "@/assets/logos/one-star-export-house.jpg";
import logoEepc from "@/assets/logos/eepc-india.png";
import logoFieo from "@/assets/logos/fieo.png";
import logoFpsi from "@/assets/logos/fpsi.jpg";
import logoAiema from "@/assets/logos/aiema.webp";

const steps = [
  { num: "01", title: "Kickoff & NDA", desc: "Scope, volumes, applicable standards, and PPAP requirements confirmed." },
  { num: "02", title: "DFM & Tooling", desc: "Design-for-manufacture review; in-house jig and fixture design; control plan defined." },
  { num: "03", title: "Prototyping", desc: "Sample builds with linked inspection and functional test reports." },
  { num: "04", title: "Validation", desc: "Performance testing, capability runs, and packaging trials." },
  { num: "05", title: "Ramp and Sustain", desc: "Engineering change management, order handling, buffer stock, and ongoing quality reporting." },
];

type Credential = {
  label: string;
  fullName?: string;
  note: string;
  logo?: string;
  status?: string;
};

const standards: Credential[] = [
  {
    label: "ISO 9001:2015",
    fullName: "Quality Management System",
    note: "Certified by Intertek (UKAS-accredited).",
    logo: logoIso9001,
  },
  {
    label: "ISO 14001:2026",
    fullName: "Environmental Management System",
    note: "Certification in progress.",
    status: "In progress",
  },
  {
    label: "ISO 45001:2018",
    fullName: "Occupational Health & Safety Management System",
    note: "Certification in progress.",
    status: "In progress",
  },
];

const memberships: Credential[] = [
  {
    label: "One Star Export House",
    fullName: "DGFT Export House Recognition",
    note: "DGFT recognition for exporters meeting a minimum cumulative export threshold under the Foreign Trade Policy.",
    logo: logoOneStar,
  },
  {
    label: "EEPC India",
    fullName: "Engineering Export Promotion Council",
    note: "Registered Manufacturer Exporter.",
    logo: logoEepc,
  },
  {
    label: "FIEO",
    fullName: "Federation of Indian Export Organisations",
    note: "Registered Manufacturer Exporter.",
    logo: logoFieo,
  },
  {
    label: "FPSI",
    fullName: "Fluid Power Society of India",
    note: "Industrial member.",
    logo: logoFpsi,
  },
  {
    label: "AIEMA",
    fullName: "Ambattur Industrial Estate Manufacturers' Association",
    note: "Member.",
    logo: logoAiema,
  },
];

function CredentialCard({ item }: { item: Credential }) {
  return (
    <div className="border border-border rounded-lg p-5 bg-card flex gap-4 items-center">
      <div className="w-28 h-14 flex-shrink-0 flex items-center justify-center bg-white rounded border border-border">
        {item.logo ? (
          <img
            src={item.logo}
            alt={`${item.label} logo`}
            className="max-h-full max-w-full object-contain p-1"
            loading="lazy"
          />
        ) : (
          <span className="text-[10px] uppercase tracking-wide text-muted-foreground font-medium">
            {item.status ?? "—"}
          </span>
        )}
      </div>
      <div className="min-w-0">
        <div className="font-medium text-foreground text-sm">{item.label}</div>
        {item.fullName && (
          <div className="text-xs text-muted-foreground">{item.fullName}</div>
        )}
        <div className="text-xs text-muted-foreground mt-1">{item.note}</div>
      </div>
    </div>
  );
}

export default function WorkingWithPentagon() {
  return (
    <div className="min-h-screen flex flex-col">
      <SiteHeader />
      <PageHero title="Working with Pentagon" subtitle="Pentagon treats each engagement as long-term production work. We give design feedback before tooling starts, add machinery when a part requires it, and keep traceability standard on every assembly. Our longest and largest customer relationship runs to almost 3 decades." />
      <main className="flex-1">
        <section className="section-padding">
          <div className="max-w-7xl mx-auto">
            {/* How we engage */}
            <h2 className="text-lg font-semibold mb-4">How we engage</h2>
            <p className="text-muted-foreground leading-relaxed max-w-3xl mb-12">
              Most of our work is repeat production for OEM customers. The steps below describe how a new part or assembly moves from release into stable supply.
            </p>

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
              <div className="grid md:grid-cols-2 gap-4">
                {standards.map((s) => (
                  <CredentialCard key={s.label} item={s} />
                ))}
              </div>
            </div>

            {/* Memberships & Export Recognition */}
            <div className="mt-12 border-t border-border pt-8">
              <h3 className="text-lg font-semibold mb-4">Memberships & Export Recognition</h3>
              <p className="text-sm text-muted-foreground mb-6 max-w-3xl">
                Pentagon is a recognised manufacturer-exporter and a member of the principal engineering and fluid-power bodies in India.
              </p>
              <div className="grid md:grid-cols-2 gap-4">
                {memberships.map((m) => (
                  <CredentialCard key={m.label} item={m} />
                ))}
              </div>
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
