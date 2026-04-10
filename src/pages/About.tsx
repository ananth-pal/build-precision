import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import SiteHeader from "@/components/SiteHeader";
import SiteFooter from "@/components/SiteFooter";
import PageHero from "@/components/PageHero";

export default function About() {
  return (
    <div className="min-h-screen flex flex-col">
      <SiteHeader />
      <PageHero title="About Pentagon" subtitle="A machine tool manufacturer turned precision contract manufacturer. 45+ years of engineering depth." />
      <main className="flex-1 section-padding">
        <div className="max-w-4xl mx-auto space-y-6">
          <p className="text-muted-foreground leading-relaxed">
            Pentagon Machines and Services Pvt. Ltd. is a precision contract manufacturing company headquartered in Chennai, India. With over 45 years of experience, Pentagon has been a long-term manufacturing partner to a leading multinational organisation in Australia and a prominent Indian automotive OEM.
          </p>
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
        </div>
      </main>
      <SiteFooter />
    </div>
  );
}
