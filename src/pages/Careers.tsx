import { useState } from "react";
import { Mail } from "lucide-react";
import SiteHeader from "@/components/SiteHeader";
import SiteFooter from "@/components/SiteFooter";
import PageHero from "@/components/PageHero";

const CAREERS_EMAIL = "jobs@sellvindsgroup.com";

const areas = [
  "Trainee / Fresher",
  "CNC / Machining",
  "Gear Cutting",
  "Assembly",
  "Quality / Metrology",
  "Other",
];

export default function Careers() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    qualification: "",
    area: areas[0],
    experience: "",
    note: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const subject = `Career application — ${form.name} (${form.area})`;
    const body = `Name: ${form.name}\nEmail: ${form.email}\nPhone: ${form.phone}\nQualification: ${form.qualification}\nArea of interest: ${form.area}\nYears of experience: ${form.experience}\n\nNote:\n${form.note}\n\n(Please attach your CV / resume to this email before sending.)`;
    window.location.href = `mailto:${CAREERS_EMAIL}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
  };

  return (
    <div className="min-h-screen flex flex-col">
      <SiteHeader />
      <PageHero
        title="Careers at Pentagon"
        subtitle="We're always open to hearing from engineering trainees, ITI/diploma freshers, and experienced machinists. Even if no role is formally listed, share your details — good people find work with us."
      />
      <main className="flex-1 section-padding">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-16">
            {/* Left */}
            <div>
              <p className="text-muted-foreground leading-relaxed mb-8">
                Pentagon is a hands-on shop. Our line managers have been with us for two decades or more, and our engineers train under them on real production work — precision hydraulics, gear cutting, and assemblies that ship to OEMs across the world. If you like machines and want to learn the trade properly, we would like to meet you.
              </p>

              <div className="mb-8">
                <h2 className="text-lg font-semibold mb-3">Who we're looking for</h2>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li>• Graduate and diploma engineering trainees (Mechanical / Production)</li>
                  <li>• ITI machinists and fitters</li>
                  <li>• CNC operators and setters</li>
                  <li>• Quality and metrology technicians</li>
                  <li>• Experienced hires across gear cutting, assembly, and machining</li>
                </ul>
              </div>

              <div className="mb-8">
                <h2 className="text-lg font-semibold mb-3">What we offer</h2>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li>• Structured on-the-job training under long-tenure line managers</li>
                  <li>• Exposure to precision hydraulics, gear cutting, and complex assemblies</li>
                  <li>• Medical cover for the full workforce, exceeding statutory norms</li>
                  <li>• A long-term career path in a stable, engineer-led company</li>
                </ul>
              </div>

              <div className="flex items-center gap-3 text-sm">
                <Mail size={18} className="text-primary shrink-0" />
                <span>
                  Or email your CV directly to{" "}
                  <a href={`mailto:${CAREERS_EMAIL}?subject=${encodeURIComponent("Career application")}`} className="text-primary hover:underline">
                    {CAREERS_EMAIL}
                  </a>
                </span>
              </div>
            </div>

            {/* Right - Form */}
            <form onSubmit={handleSubmit} className="space-y-5">
              <div className="grid sm:grid-cols-2 gap-5">
                <div>
                  <label className="block text-sm font-medium mb-1.5">Full Name *</label>
                  <input type="text" required value={form.name} onChange={(e) => setForm({ ...form, name: e.target.value })} className="w-full px-4 py-2.5 border border-input rounded bg-background text-sm focus:outline-none focus:ring-2 focus:ring-ring" />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-1.5">Email *</label>
                  <input type="email" required value={form.email} onChange={(e) => setForm({ ...form, email: e.target.value })} className="w-full px-4 py-2.5 border border-input rounded bg-background text-sm focus:outline-none focus:ring-2 focus:ring-ring" />
                </div>
              </div>
              <div className="grid sm:grid-cols-2 gap-5">
                <div>
                  <label className="block text-sm font-medium mb-1.5">Phone</label>
                  <input type="tel" value={form.phone} onChange={(e) => setForm({ ...form, phone: e.target.value })} className="w-full px-4 py-2.5 border border-input rounded bg-background text-sm focus:outline-none focus:ring-2 focus:ring-ring" />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-1.5">Highest Qualification</label>
                  <input type="text" placeholder="e.g. B.E. Mechanical, ITI Fitter" value={form.qualification} onChange={(e) => setForm({ ...form, qualification: e.target.value })} className="w-full px-4 py-2.5 border border-input rounded bg-background text-sm focus:outline-none focus:ring-2 focus:ring-ring" />
                </div>
              </div>
              <div className="grid sm:grid-cols-2 gap-5">
                <div>
                  <label className="block text-sm font-medium mb-1.5">Area of Interest *</label>
                  <select required value={form.area} onChange={(e) => setForm({ ...form, area: e.target.value })} className="w-full px-4 py-2.5 border border-input rounded bg-background text-sm focus:outline-none focus:ring-2 focus:ring-ring">
                    {areas.map((a) => (
                      <option key={a} value={a}>{a}</option>
                    ))}
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-medium mb-1.5">Years of Experience</label>
                  <input type="text" placeholder="0 for freshers" value={form.experience} onChange={(e) => setForm({ ...form, experience: e.target.value })} className="w-full px-4 py-2.5 border border-input rounded bg-background text-sm focus:outline-none focus:ring-2 focus:ring-ring" />
                </div>
              </div>
              <div>
                <label className="block text-sm font-medium mb-1.5">A short note about yourself</label>
                <textarea rows={4} value={form.note} onChange={(e) => setForm({ ...form, note: e.target.value })} className="w-full px-4 py-2.5 border border-input rounded bg-background text-sm focus:outline-none focus:ring-2 focus:ring-ring resize-none" />
              </div>
              <p className="text-xs text-muted-foreground">
                On submit, your email client will open a pre-filled message to {CAREERS_EMAIL}. Please attach your CV / resume to the email before sending.
              </p>
              <button type="submit" className="w-full sm:w-auto px-8 py-3 bg-primary text-primary-foreground font-medium rounded hover:opacity-90 transition-opacity">
                Submit Application
              </button>
            </form>
          </div>
        </div>
      </main>
      <SiteFooter />
    </div>
  );
}
