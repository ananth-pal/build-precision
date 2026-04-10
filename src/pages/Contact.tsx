import { useState } from "react";
import { Mail, Phone, MapPin, Download } from "lucide-react";
import SiteHeader from "@/components/SiteHeader";
import SiteFooter from "@/components/SiteFooter";
import PageHero from "@/components/PageHero";

export default function Contact() {
  const [form, setForm] = useState({ name: "", company: "", country: "", email: "", phone: "", message: "" });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    window.location.href = `mailto:enquiries@sellvindsgroup.com?subject=RFQ from ${form.name} - ${form.company}&body=${encodeURIComponent(`Name: ${form.name}\nCompany: ${form.company}\nCountry: ${form.country}\nEmail: ${form.email}\nPhone: ${form.phone}\n\n${form.message}`)}`;
  };

  return (
    <div className="min-h-screen flex flex-col">
      <SiteHeader />
      <PageHero title="Contact / Request a Quote" />
      <main className="flex-1 section-padding">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-16">
            {/* Left */}
            <div>
              <p className="text-muted-foreground leading-relaxed mb-8">
                Ready to discuss your next project? Send us your drawings and specifications, and our engineering team will respond with a detailed assessment.
              </p>
              <div className="space-y-4 mb-8">
                <div className="flex items-start gap-3">
                  <MapPin size={18} className="text-primary mt-0.5 shrink-0" />
                  <span className="text-sm">Sidco Plot 12, Ambattur Industrial Estate, Chennai 600098, India</span>
                </div>
                <div className="flex items-center gap-3">
                  <Phone size={18} className="text-primary shrink-0" />
                  <a href="tel:+918637481952" className="text-sm hover:text-primary">+91 86374 81952</a>
                </div>
                <div className="flex items-center gap-3">
                  <Mail size={18} className="text-primary shrink-0" />
                  <a href="mailto:enquiries@sellvindsgroup.com" className="text-sm hover:text-primary">enquiries@sellvindsgroup.com</a>
                </div>
              </div>
              <a href="#" className="download-btn">
                <Download size={16} /> Download RFQ Checklist
              </a>
            </div>

            {/* Right - Form */}
            <form onSubmit={handleSubmit} className="space-y-5">
              <div className="grid sm:grid-cols-2 gap-5">
                <div>
                  <label className="block text-sm font-medium mb-1.5">Full Name *</label>
                  <input type="text" required value={form.name} onChange={(e) => setForm({ ...form, name: e.target.value })} className="w-full px-4 py-2.5 border border-input rounded bg-background text-sm focus:outline-none focus:ring-2 focus:ring-ring" />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-1.5">Company *</label>
                  <input type="text" required value={form.company} onChange={(e) => setForm({ ...form, company: e.target.value })} className="w-full px-4 py-2.5 border border-input rounded bg-background text-sm focus:outline-none focus:ring-2 focus:ring-ring" />
                </div>
              </div>
              <div className="grid sm:grid-cols-2 gap-5">
                <div>
                  <label className="block text-sm font-medium mb-1.5">Country *</label>
                  <input type="text" required value={form.country} onChange={(e) => setForm({ ...form, country: e.target.value })} className="w-full px-4 py-2.5 border border-input rounded bg-background text-sm focus:outline-none focus:ring-2 focus:ring-ring" />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-1.5">Email *</label>
                  <input type="email" required value={form.email} onChange={(e) => setForm({ ...form, email: e.target.value })} className="w-full px-4 py-2.5 border border-input rounded bg-background text-sm focus:outline-none focus:ring-2 focus:ring-ring" />
                </div>
              </div>
              <div>
                <label className="block text-sm font-medium mb-1.5">Phone</label>
                <input type="tel" value={form.phone} onChange={(e) => setForm({ ...form, phone: e.target.value })} className="w-full px-4 py-2.5 border border-input rounded bg-background text-sm focus:outline-none focus:ring-2 focus:ring-ring" />
              </div>
              <div>
                <label className="block text-sm font-medium mb-1.5">What are you looking to manufacture?</label>
                <textarea rows={4} value={form.message} onChange={(e) => setForm({ ...form, message: e.target.value })} className="w-full px-4 py-2.5 border border-input rounded bg-background text-sm focus:outline-none focus:ring-2 focus:ring-ring resize-none" />
              </div>
              <div>
                <label className="block text-sm font-medium mb-1.5">Attach drawing or specification (optional)</label>
                <input type="file" className="w-full text-sm text-muted-foreground file:mr-4 file:py-2 file:px-4 file:rounded file:border-0 file:text-sm file:font-medium file:bg-secondary file:text-foreground hover:file:bg-muted" />
              </div>
              <button type="submit" className="w-full sm:w-auto px-8 py-3 bg-primary text-primary-foreground font-medium rounded hover:opacity-90 transition-opacity">
                Send Enquiry
              </button>
            </form>
          </div>
        </div>
      </main>
      <SiteFooter />
    </div>
  );
}
