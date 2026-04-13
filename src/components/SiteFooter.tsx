import { Link } from "react-router-dom";
import { Mail, Phone, MapPin } from "lucide-react";

export default function SiteFooter() {
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
                { label: "Technologies", path: "/technologies" },
                { label: "What We Make", path: "/what-we-make" },
                { label: "Our Approach", path: "/our-approach" },
                { label: "About", path: "/about" },
                { label: "Contact / RFQ", path: "/contact" },
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
              <a href="#" className="download-btn text-background border-background/30 hover:bg-background/10 hover:text-background text-xs">
                Download Company Brochure
              </a>
            </div>
          </div>
        </div>
        <div className="mt-12 pt-8 border-t border-background/10 text-sm opacity-50 text-center">
          © {new Date().getFullYear()} Pentagon Machines and Services Pvt. Ltd. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
