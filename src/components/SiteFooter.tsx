import { useState } from "react";
import { Link } from "react-router-dom";
import { Mail, Phone, MapPin } from "lucide-react";
import brochure from "@/assets/pentagon-brochure.pdf.asset.json";
import { trackEvent } from "@/lib/analytics";
import RequestMachineListDialog from "@/components/RequestMachineListDialog";

function triggerBrochureDownload() {
  const a = document.createElement("a");
  a.href = brochure.url;
  a.download = "Pentagon-Brochure.pdf";
  a.target = "_blank";
  a.rel = "noopener noreferrer";
  document.body.appendChild(a);
  a.click();
  document.body.removeChild(a);
}

export default function SiteFooter() {
  const [open, setOpen] = useState(false);
  return (
    <footer className="bg-foreground text-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          <div>
            <h3 className="text-lg font-semibold mb-4">Pentagon Machines & Services</h3>
            <p className="text-sm opacity-70 leading-relaxed">
              Precision contract manufacturer. Chennai, India. 45+ years of manufacturing heritage.
            </p>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <nav className="space-y-2">
              {[
                { label: "Capabilities", path: "/capabilities" },
                { label: "Means of Production", path: "/technologies" },
                { label: "Portfolio", path: "/what-we-make" },
                { label: "Our Commitment", path: "/working-with-pentagon" },
                { label: "About", path: "/about" },
                { label: "Careers", path: "/careers" },
                { label: "Contact / RFQ", path: "/contact" },
                { label: "Privacy", path: "/privacy" },
              ].map((l) => (
                <Link key={l.path} to={l.path} className="block text-sm opacity-70 hover:opacity-100 transition-opacity">
                  {l.label}
                </Link>
              ))}
            </nav>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4">Contact</h3>
            <div className="space-y-3 text-sm opacity-70">
              <div className="flex items-start gap-2">
                <MapPin size={16} className="mt-0.5 shrink-0" />
                <span>Sidco Plot 12, Ambattur Industrial Estate, Chennai 600098, India</span>
              </div>
              <div className="flex items-center gap-2">
                <Phone size={16} className="shrink-0" />
                <a href="tel:+918637481952" className="hover:opacity-100">+91 86374 81952</a>
              </div>
              <div className="flex items-center gap-2">
                <Mail size={16} className="shrink-0" />
                <a href="mailto:enquiries@sellvindsgroup.com" className="hover:opacity-100">enquiries@sellvindsgroup.com</a>
              </div>
            </div>
            <div className="mt-6">
              <button
                type="button"
                onClick={() => { trackEvent("brochure_download_open", { source: "footer" }); setOpen(true); }}
                className="download-btn text-background border-background/30 hover:bg-background/10 hover:text-background text-xs"
              >
                Download Company Brochure
              </button>
            </div>
          </div>
        </div>
        <div className="mt-12 pt-8 border-t border-background/10 text-sm opacity-50 text-center">
          © {new Date().getFullYear()} Pentagon Machines and Services Pvt. Ltd. All rights reserved.
        </div>
      </div>
      <RequestMachineListDialog
        open={open}
        onOpenChange={setOpen}
        variant="brochure"
        onSuccess={() => { trackEvent("brochure_download", { source: "footer" }); triggerBrochureDownload(); }}
      />
    </footer>
  );
}
