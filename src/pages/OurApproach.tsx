import SiteHeader from "@/components/SiteHeader";
import SiteFooter from "@/components/SiteFooter";
import PageHero from "@/components/PageHero";
import logoIso9001 from "@/assets/logos/iso-9001-intertek-ukas.png";
import logoOneStar from "@/assets/logos/one-star-export-house.jpg";
import logoEepc from "@/assets/logos/eepc-india.png";
import logoFieo from "@/assets/logos/fieo.png";
import logoFpsi from "@/assets/logos/fpsi.jpg";
import logoAiema from "@/assets/logos/aiema.webp";
import SEO from "@/components/SEO";

const steps = [
  { num: "01", title: "Kickoff & NDA", desc: "Scope, volumes, applicable standards, and PPAP requirements confirmed." },
  { num: "02", title: "DFM & Tooling", desc: "Design-for-manufacture review; in-house jig and fixture design; control plan defined." },
  { num: "03", title: "Prototyping", desc: "Sample builds with linked inspection and functional test reports." },
  { num: "04", title: "Validation", desc: "Performance testing, capability runs, and packaging trials." },
  { num: "05", title: "Ramp and Sustain", desc: "Engineering change management, order handling, buffer stock, and ongoing quality reporting." },
];

const valuePillars = [
  {
    pillar: "Design-to-Deployment (DFM) Support",
    sub: "Engineering for Efficiency",
    body: "From legacy drawings to production in months, we provide early manufacturability feedback.",
    tagline: "We bridge the gap between design and production.",
  },
  {
    pillar: "Capacity-Ahead Investment",
    sub: "Ready to Scale",
    body: "We invest in machinery and infrastructure before demand increases.",
    tagline: "Your growth is never bottlenecked.",
  },
  {
    pillar: "Systemic Traceability",
    sub: "Accountability You Can Trust",
    body: "Every assembly has serial tracking with full audit trail.",
    tagline: "From raw material to final validation.",
  },
  {
    pillar: "Continuous Improvement (Kaizen)",
    sub: "Evolution as Standard",
    body: "Continuous learning, waste reduction, and process improvement.",
    tagline: "We refine processes constantly.",
  },
  {
    pillar: "High-mix Specialisation",
    sub: "Agility for Complexity",
    body: "Managing 100+ product types with precision.",
    tagline: "We thrive in complexity.",
  },
  {
    pillar: "Long-Term Partnerships",
    sub: "Extension of Your Factory",
    body: "Aligned with your long-term growth plans.",
    tagline: "We become strategic partners.",
  },
  {
    pillar: "Supply Chain Resilience",
    sub: "Zero Disruption",
    body: "Strong vendor network.",
    tagline: "Ensuring timely delivery always.",
  },
  {
    pillar: "Proven Reliability",
    sub: "Decades of Performance",
    body: "65-year legacy of the Sellvinds Group in delivering critical assemblies and components.",
    tagline: "Trusted by global brands.",
  },
];

type Credential = {
  label: string;
  fullName?: string;
  note: string;
  logo?: string;
  status?: string;
  /** Multiplier to compensate for logos with heavy internal whitespace. Default 1. */
  logoScale?: number;
};

const standards: Credential[] = [
  {
    label: "ISO 9001:2015",
    fullName: "Quality Management System",
    note: "Certified by Intertek (UKAS-accredited).",
    logo: logoIso9001,
    logoScale: 1.8,
  },
  {
    label: "ISO 14001",
    fullName: "Environmental Management System",
    note: "Certification in progress.",
    status: "In progress",
  },
  {
    label: "ISO 45001",
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
    logoScale: 1.8,
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
    <div className="border border-border rounded-lg bg-card overflow-hidden flex flex-col">
      <div className="w-full h-36 bg-white flex items-center justify-center p-6 border-b border-border">
        {item.logo ? (
          <img
            src={item.logo}
            alt={`${item.label} logo`}
            className="max-h-full max-w-full object-contain"
            style={item.logoScale ? { transform: `scale(${item.logoScale})` } : undefined}
            loading="lazy"
          />
        ) : (
          <span className="text-xs uppercase tracking-wide text-muted-foreground font-medium px-3 py-1 border border-border rounded-full">
            {item.status ?? "—"}
          </span>
        )}
      </div>
      <div className="p-5 min-w-0">
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
      <SEO title="Working with Pentagon — Engagement & Approach" description="How Pentagon engages with OEM customers: engineering support, industrial responsibility, and long-term accountability." />
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

            {/* The Pentagon Standard: Our Value System */}
            <div className="border-t border-border pt-8 mb-16">
              <h2 className="text-2xl md:text-3xl font-semibold text-primary text-center mb-8">
                The Pentagon Standard: Our Value System
              </h2>
              <div className="border border-border rounded-lg overflow-hidden">
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-px bg-border">
                  {valuePillars.map((v) => (
                    <div key={v.pillar} className="bg-card flex flex-col">
                      <div className="bg-primary text-primary-foreground text-center px-4 py-3 text-sm font-semibold min-h-[3.5rem] flex items-center justify-center">
                        {v.pillar}
                      </div>
                      <div className="p-5 flex-1 flex flex-col">
                        <div className="font-semibold text-foreground text-sm mb-2">{v.sub}</div>
                        <p className="text-sm text-muted-foreground mb-3 flex-1">{v.body}</p>
                        <p className="text-xs text-muted-foreground italic">{v.tagline}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
              <p className="text-center text-sm text-muted-foreground mt-6 max-w-3xl mx-auto">
                We are a team focused on long-term partnerships through scalability, predictability, and accountability.
              </p>
            </div>

            {/* Standards & Certifications */}
            <div className="border-t border-border pt-8">
              <h3 className="text-lg font-semibold mb-4">Standards & Certifications</h3>
              <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
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
              <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
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
                  <p className="text-sm text-muted-foreground">We ensure the safe and ethical disposal of all industrial waste, maintaining clean-room standards across our facilities.</p>
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
