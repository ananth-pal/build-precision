import { Download } from "lucide-react";
import SiteHeader from "@/components/SiteHeader";
import SiteFooter from "@/components/SiteFooter";
import PageHero from "@/components/PageHero";
import plantExterior from "@/assets/plant-exterior.jpg";

const timeline = [
  { year: "1954", event: "Founder joins Hindustan Machine Tools Ltd. (HMT)" },
  { year: "1965", event: "PROTEL founded — one of India's first small-scale machine tool companies" },
  { year: "1970s", event: "Pentagon established as custom machine tool manufacturer" },
  { year: "1999", event: "Pentagon begins contract manufacturing for a multinational hydraulics OEM (Australia)" },
  { year: "2008", event: "Engine balancer assemblies begin for a major Indian engine OEM" },
  { year: "Present", event: "43,200 sq ft across two facilities; 80+ employees; 100+ product types exported" },
];

export default function Heritage() {
  return (
    <div className="min-h-screen flex flex-col">
      <SiteHeader />
      <PageHero title="Heritage" subtitle="Deep engineering roots — not a recent market entrant." backgroundImage={plantExterior} />
      <main className="flex-1 section-padding">
        <div className="max-w-5xl mx-auto">
          {/* Timeline */}
          <div className="relative mb-16">
            <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-px bg-border md:-translate-x-px" />
            <div className="space-y-12">
              {timeline.map((t, i) => (
                <div key={t.year} className={`relative flex items-start gap-8 ${i % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"}`}>
                  <div className="hidden md:block flex-1" />
                  <div className="absolute left-4 md:left-1/2 w-3 h-3 rounded-full bg-primary -translate-x-1.5 mt-1.5" />
                  <div className="ml-12 md:ml-0 flex-1">
                    <div className="text-primary font-bold text-lg">{t.year}</div>
                    <p className="text-muted-foreground text-sm mt-1">{t.event}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Narrative */}
          <div className="space-y-6 text-muted-foreground leading-relaxed max-w-3xl">
            <p>[PLACEHOLDER — owner to write: The machine tool origin and what it means for engineering culture today.]</p>
            <p>[PLACEHOLDER — owner to write: The transition to contract manufacturing and what continuity across that transition looks like.]</p>
            <p className="text-sm italic">Pentagon is part of The Sellvinds Group; group companies manufacture automotive components including cylinder heads and crankshafts for leading Indian OEMs.</p>
          </div>

          <div className="mt-12">
            <a href="#" className="download-btn">
              <Download size={16} /> Download Company Brochure
            </a>
          </div>
        </div>
      </main>
      <SiteFooter />
    </div>
  );
}
