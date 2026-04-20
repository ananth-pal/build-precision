import { Download } from "lucide-react";
import SiteHeader from "@/components/SiteHeader";
import SiteFooter from "@/components/SiteFooter";
import PageHero from "@/components/PageHero";
import plantExterior from "@/assets/plant-exterior.jpg";

type Entry = { label: string; body: string };
type Era = { number: string; range: string; title: string; entries: Entry[] };

const eras: Era[] = [
  {
    number: "Era 1",
    range: "1954–1965",
    title: "A machine-tool engineer's formation",
    entries: [
      {
        label: "1954",
        body: "Ramanathan Palaniappan graduates top of his class in Mechanical Engineering from Annamalai University and joins Hindustan Machine Tools Ltd. (HMT), Bangalore, as a graduate apprentice.",
      },
      {
        label: "Late 1950s–early 1960s",
        body: "While at HMT, he leads delegations to machine-building firms in Europe and signs collaboration agreements on HMT's behalf. One assignment takes him to Renault, France, where he spends six months with a team of fifteen engineers studying the Renault special-purpose machine (SPM) division.",
      },
      {
        label: "1965",
        body: "Leaves HMT as Deputy General Manager and moves to Madras. Co-founds Productivity Elements Pvt. Ltd. (PROTEL), one of India's first small-scale machine tool companies.",
      },
    ],
  },
  {
    number: "Era 2",
    range: "1970s–1998",
    title: "Pentagon as a machine-tool builder",
    entries: [
      {
        label: "1970s",
        body: "Pentagon Machines and Services Pvt. Ltd. is founded as a custom machine-tool manufacturer, focused on special-purpose machines, gear shaping cutter and broach resharpening machines, and hob inspection equipment.",
      },
      {
        label: "1970s–1990s",
        body: "Machines are built for most of India's leading automotive and engineering OEMs, including Ashok Leyland, Bajaj Auto, Escorts, Hindustan Motors, Ind-Suzuki, Lakshmi Machine Works, Heavy Vehicles Factory, Greaves, and SRP Tools. Work ranges from centre axle housing duplex milling SPMs to cylinder block duplex milling with Ø500 cutters, alongside dedicated lines for the confectionery industry (hard candy forming at 1,200/minute; twist wrapping at 1,600/minute).",
      },
      {
        label: "1990",
        body: "Natarajan Palaniappan joins after two years of engineering training at Kareyn Precision Machines, Dehradun, and takes over day-to-day management of the machine-tool business.",
      },
    ],
  },
  {
    number: "Era 3",
    range: "1999–2007",
    title: "Pivot to contract manufacturing",
    entries: [
      {
        label: "1999",
        body: "Pentagon begins contract manufacturing for a multinational hydraulics OEM based in Australia. A clean-room assembly area is commissioned at the Ambattur plant.",
      },
      {
        label: "2000",
        body: "First component released to production: a single-spool hydraulic tipping valve. Over the following three years, the first generation of sliding-shift and hot-shift power take-off platforms, gear pumps, and monoblock valves is developed from prototype on customer drawings.",
      },
      {
        label: "Throughout the period",
        body: "In-house design and manufacture of jigs, fixtures, and receiver gauges is retained from the machine-tool business and becomes a structural advantage for the contract-manufacturing work.",
      },
    ],
  },
  {
    number: "Era 4",
    range: "2008–2019",
    title: "A second OEM and scale",
    entries: [
      {
        label: "2007",
        body: "Sister company Cafoma Engine Components Pvt. Ltd. begins machining fully-finished cylinder heads for Simpson & Co. Ltd. at scale. Across the Sellvinds Group, sister companies during this period also manufactured fully-finished, induction-hardened crankshafts at high volumes (up to ~180,000 per year) and other complex machined assemblies for leading Indian automotive OEMs including Simpson & Co., Greaves Ltd., and Axles India Ltd.",
      },
      {
        label: "2008",
        body: "Pentagon begins supplying engine balancer assemblies to Simpson & Co. Ltd.",
      },
      {
        label: "2008 onward",
        body: "A second plant is commissioned 5 km from the main facility, dedicated to gear cutting: CNC hobbing, shaving, broaching, shaping, and gear profile / PCD testing.",
      },
      {
        label: "Product range widens",
        body: "Hot-shift, slide-shift, constant-drive and rear-mount power take-off families for commercial-vehicle transmissions; high-pressure gear pump platforms; single-spool and two-spool tipping valves, diverter valves, and inline relief valves. Process-capability investments include a Zeiss CNC scanning CMM, nanometer-resolution surface roughness testing, and a 315-bar hydraulic test rig with Siemens PLC control and closed-loop pump RPM.",
      },
      {
        label: "Quality management",
        body: "Certified to ISO 9001:2015 by Intertek.",
      },
    ],
  },
  {
    number: "Era 5",
    range: "2020–present",
    title: "Continuity and the next generation",
    entries: [
      {
        label: "Ongoing",
        body: "New tipping-valve and diverter-valve families, and heavy-duty slide-shift power take-off platforms for current-generation commercial-vehicle transmissions, continue to release each year.",
      },
      {
        label: "Next generation joins",
        body: "Dr Varun Palaniappan (strategy and planning) and Ananth Palaniappan (project engineering) join the company.",
      },
      {
        label: "Today",
        body: "43,200 sq ft across two plants in Ambattur, Chennai. Approximately 80 employees. More than 100 product types exported. ISO 14001 and ISO 45001 certifications in progress.",
      },
    ],
  },
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
            {/* Continuous centre rail */}
            <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-px bg-border md:-translate-x-px" />

            {eras.map((era) => (
              <section key={era.number}>
                {/* Era divider — rail passes through, no dot */}
                <div className="relative py-12 md:py-20">
                  <div className="ml-12 md:ml-0 md:text-center">
                    <div className="text-primary text-sm md:text-base font-semibold tracking-wide">
                      {era.number} · {era.range}
                    </div>
                    <h2 className="mt-2 text-2xl md:text-3xl font-bold text-foreground">
                      {era.title}
                    </h2>
                  </div>
                </div>

                {/* Entries */}
                <div className="space-y-12">
                  {era.entries.map((entry, i) => (
                    <div
                      key={entry.label + i}
                      className={`relative flex items-start gap-8 ${
                        i % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
                      }`}
                    >
                      <div className="hidden md:block flex-1" />
                      <div className="absolute left-4 md:left-1/2 w-3 h-3 rounded-full bg-primary -translate-x-1.5 mt-1.5" />
                      <div className="ml-12 md:ml-0 flex-1">
                        <div className="text-primary font-bold text-lg">{entry.label}</div>
                        <p className="text-muted-foreground text-sm mt-1 leading-relaxed">
                          {entry.body}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </section>
            ))}
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
