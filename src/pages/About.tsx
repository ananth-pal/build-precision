import { Link } from "react-router-dom";
import { ArrowRight, Download } from "lucide-react";
import SiteHeader from "@/components/SiteHeader";
import SiteFooter from "@/components/SiteFooter";
import PageHero from "@/components/PageHero";
import ChennaiLocatorMap from "@/components/ChennaiLocatorMap";
import plantExterior from "@/assets/plant1-exterior.png.asset.json";
import brochure from "@/assets/pentagon-brochure.pdf.asset.json";


export default function About() {
  return (
    <div className="min-h-screen flex flex-col">
      <SiteHeader />
      <PageHero title="About Pentagon" subtitle="A machine tool manufacturer turned precision contract manufacturer. 45+ years of engineering depth." />
      <main className="flex-1 section-padding">
        <div className="max-w-7xl mx-auto space-y-6">
          <img src={plantExterior.url} alt="Plant 1 exterior" className="w-full h-auto rounded-md" />

          <p className="text-muted-foreground leading-relaxed">
            Pentagon Machines and Services Pvt. Ltd. is a precision contract manufacturing company headquartered in Chennai, India. With over 45 years of experience, Pentagon has been a long-term manufacturing partner to a leading multinational organisation in Australia and a prominent Indian automotive OEM.
          </p>

          {/* Our Facilities */}
          <div className="pt-8">
            <h2 className="text-2xl font-bold mb-2">Our Facilities</h2>
            <p className="text-sm text-muted-foreground mb-8">43,200 sq ft total footprint — 20,000 sq ft built-up today, with the balance held for capacity expansion as customer programmes scale.</p>
            <div className="grid md:grid-cols-2 gap-8">
              <div className="capability-card">
                <h3 className="text-lg font-semibold mb-2">Plant 1 — Machining, Assembly & Administration</h3>
                <p className="text-sm text-muted-foreground mb-2">Sidco Plot 12, Ambattur Industrial Estate, Chennai 600098</p>
              </div>
              <div className="capability-card">
                <h3 className="text-lg font-semibold mb-2">Plant 2 — Gear Cutting Division</h3>
                <p className="text-sm text-muted-foreground mb-2">31 A/8, Ambattur Industrial Estate, Chennai (approx. 5 km from Plant 1)</p>
              </div>
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-8 pt-8">
            <Link to="/about/heritage" className="capability-card group">
              <h2 className="text-xl font-semibold mb-3">Heritage</h2>
              <p className="text-sm text-muted-foreground mb-4">From India's machine tool pioneers to precision contract manufacturing — a 65-year engineering legacy.</p>
              <span className="text-primary text-sm font-medium inline-flex items-center gap-1 group-hover:gap-2 transition-all">
                Read more <ArrowRight size={14} />
              </span>
            </Link>
            <Link to="/about/leadership" className="capability-card group">
              <h2 className="text-xl font-semibold mb-3">Leadership</h2>
              <p className="text-sm text-muted-foreground mb-4">Technically credentialed, directly engaged — engineers trained at HMT, Cornell, and Imperial College London.</p>
              <span className="text-primary text-sm font-medium inline-flex items-center gap-1 group-hover:gap-2 transition-all">
                Read more <ArrowRight size={14} />
              </span>
            </Link>
          </div>

          <div className="pt-8">
            <ChennaiLocatorMap />
          </div>

          <div className="pt-8">
            <a href={brochure.url} download="Pentagon-Brochure.pdf" target="_blank" rel="noopener noreferrer" className="download-btn">
              <Download size={16} /> Download Company Brochure
            </a>
          </div>
        </div>
      </main>
      <SiteFooter />
    </div>
  );
}
