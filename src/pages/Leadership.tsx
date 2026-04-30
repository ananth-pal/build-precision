import { useState } from "react";
import { ChevronDown, ChevronUp } from "lucide-react";
import SiteHeader from "@/components/SiteHeader";
import SiteFooter from "@/components/SiteFooter";
import PageHero from "@/components/PageHero";

const leaders = [
  {
    name: "Ramanathan Palaniappan",
    title: "Founder Chairman (Retired)",
    shortBio: "A pioneer in India's machine tool industry. Rose to Deputy General Manager at Hindustan Machine Tools Ltd. (HMT) before founding PROTEL — one of India's first small-scale machine tool companies — in 1965.",
    fullBio: "A mechanical engineer from Annamalai University, he joined HMT in 1954 and left as Deputy General Manager in 1965. While at HMT, he led several delegations to machine building companies around the world. He served on the boards of Chettinad Cements Ltd. and SRP Tools Ltd., as a member of the Indian Planning Commission's Machine Tool Subcommittee, on the Bank of America's India Advisory Board, and as a consultant to the United Nations (ESCAP-UNIDO). He is also an acclaimed Tamil author and recipient of state honours for his contributions to Tamil literature.",
  },
  {
    name: "Natarajan Palaniappan",
    title: "Managing Director",
    shortBio: "A mechanical engineer with 36+ years in the industry. Trained under Ananth Ram Iyer, a legend of the Indian machine tool industry. Leads Pentagon directly from the engineering floor.",
    fullBio: "He began his career at Kareyn Precision Machines Pvt. Ltd., Dehradun, where he received two years of hands-on training in engineering. A Fellow of the Indian Institute of Production Engineers, he leads Pentagon with innovation and precision. He holds a diploma in the German language and has been honoured with the Paul Harris Fellowship by Rotary International.",
  },
  {
    name: "Dr. Varun Palaniappan",
    title: "Manager — Strategy and Planning",
    shortBio: "BSc (Hons) in Surgical Design, Technology & Innovation from Imperial College London. Co-founded a medical imaging start-up at IIT Madras. Leads Pentagon's international growth.",
    fullBio: "A medical graduate from Plymouth University, UK, he completed training through the NHS Wales Academic Foundation Programme and has authored several scientific publications. He brings global perspective, innovation, and academic rigor to the organisation's strategic growth and expansion.",
  },
  {
    name: "Ananth Palaniappan",
    title: "Manager — Project Engineering",
    shortBio: "BS and MEng in Mechanical Engineering from Cornell University. Certified Six Sigma Black Belt. Oversees project engineering and leads expansion initiatives.",
    fullBio: "A graduate of King's College, Taunton, UK, where he received the Provost's Prize for Academic Excellence. Advanced training in SolidWorks. Spent three years at Optimus Technologies in Pittsburgh, contributing to bio-diesel engine retrofit and RFID automation projects. Now based in India, he oversees project engineering.",
  },
];

function LeaderCard({ leader }: { leader: typeof leaders[0] }) {
  const [expanded, setExpanded] = useState(false);
  return (
    <div className="capability-card">
      <div className="w-20 h-20 rounded-full bg-muted mb-4 flex items-center justify-center text-muted-foreground text-xs">[PHOTO]</div>
      <h3 className="text-lg font-semibold">{leader.name}</h3>
      <p className="text-primary text-sm font-medium mb-3">{leader.title}</p>
      <p className="text-sm text-muted-foreground leading-relaxed">{leader.shortBio}</p>
      {leader.fullBio && (
        <>
          <button onClick={() => setExpanded(!expanded)} className="text-primary text-sm font-medium mt-3 inline-flex items-center gap-1">
            {expanded ? "Show less" : "Full bio"} {expanded ? <ChevronUp size={14} /> : <ChevronDown size={14} />}
          </button>
          {expanded && <p className="text-sm text-muted-foreground leading-relaxed mt-3">{leader.fullBio}</p>}
        </>
      )}
    </div>
  );
}

export default function Leadership() {
  return (
    <div className="min-h-screen flex flex-col">
      <SiteHeader />
      <PageHero title="Leadership" subtitle="Technically credentialed and directly engaged — not absentee." />
      <main className="flex-1 section-padding">
        <div className="max-w-7xl mx-auto">
          {/* Founder profile */}
          <section className="max-w-3xl mb-16">
            <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-2">
              Ramanathan Palaniappan, Founder
            </h2>
            <div className="space-y-4 text-muted-foreground text-sm leading-relaxed mt-6">
              <p>
                Ramanathan Palaniappan is the founder of Pentagon Machines and Services Pvt. Ltd. and the broader Sellvinds Group of companies. He graduated top of his class in Mechanical Engineering from Annamalai University in 1954 and joined Hindustan Machine Tools Ltd. (HMT), Bangalore, as a graduate apprentice.
              </p>
              <p>
                During his eleven years at HMT, he led delegations to machine-building firms in Europe and signed collaboration agreements on HMT's behalf, including a six-month assignment at Renault, France, where he led a team of fifteen engineers studying Renault's special-purpose machine division. Before leaving as Deputy General Manager in 1965, he planned and set up HMT's Special Purpose Machine Division.
              </p>
              <p>
                In 1965 he co-founded Productivity Elements Pvt. Ltd. (PROTEL), one of India's first small-scale machine tool companies, and went on to found Pentagon Machines and Services Pvt. Ltd. as a custom machine-tool manufacturer. He also helped establish SRP Tools Ltd. as Technical Director, where he coordinated the company's collaboration agreements with Mitsubishi for the manufacture of hobs, broaches, shaping cutters, and shaving cutters. SRP grew under his technical leadership into India's largest gear-cutting-tool company.
              </p>
              <p>
                Beyond the Sellvinds Group, Ramanathan Palaniappan has served as a Director on the boards of Chettinad Cements Ltd. and on the Indian Advisory Board of Bank of America Ltd. He has been a distinguished member of the Syndicate, Senate, and Board of Selection of Annamalai University, his alma mater.
              </p>
            </div>
          </section>

          <div className="grid md:grid-cols-2 gap-8 mb-12">
            {leaders.map((l) => <LeaderCard key={l.name} leader={l} />)}
          </div>
          <div className="bg-secondary rounded-lg p-8 max-w-3xl">
            <h3 className="text-lg font-semibold mb-2">Line Managers</h3>
            <p className="text-sm text-muted-foreground leading-relaxed">
              Nearly all line managers and senior staff have 18–34 years of service with the company and come from a machine-building background.
            </p>
          </div>
        </div>
      </main>
      <SiteFooter />
    </div>
  );
}
