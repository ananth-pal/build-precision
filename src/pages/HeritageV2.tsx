import { Link } from "react-router-dom";
import SiteHeader from "@/components/SiteHeader";
import SiteFooter from "@/components/SiteFooter";
import PageHero from "@/components/PageHero";
import HeritageVersionSwitcher from "@/components/HeritageVersionSwitcher";
import plantExterior from "@/assets/plant-exterior.jpg";

type Entry = { label: string; body: string; extra?: React.ReactNode };
type Era = {
  number: string;
  range: string;
  title: string;
  entries: Entry[];
};

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
        body: "After planning and setting up HMT's Special Purpose Machine Division, leaves as Deputy General Manager and moves to Madras. Co-founds Productivity Elements Pvt. Ltd. (PROTEL), one of India's first small-scale machine tool companies.",
        extra: (
          <p className="text-foreground text-sm mt-2 leading-relaxed">
            Alongside PROTEL, several other companies are founded in affiliation
            to The Sellvinds Group —{" "}
            <a
              href="#sellvinds-group"
              className="text-primary hover:underline font-medium"
            >
              see the group's affiliations below ↓
            </a>
            .
          </p>
        ),
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
        body: "With SRP making gear-cutting tools and PROTEL making broaching machines, a gap remains for tool-resharpening machines. Pentagon Machines and Services Pvt. Ltd. is founded as a custom machine-tool manufacturer, focused on special-purpose machines, gear shaping cutter and broach resharpening machines, and hob inspection equipment.",
      },
      {
        label: "1970s–1990s",
        body: "Machines are built for most of India's leading automotive and engineering OEMs, including Ashok Leyland, Bajaj Auto, Escorts, Hindustan Motors, Ind-Suzuki (TVS), Lakshmi Machine Works, Heavy Vehicles Factory, T72 Tank Factory, Greaves Cotton, SRP Tools, Nutrine Confectionery, and Wrigley India.",
      },
      {
        label: "1990",
        body: "Natarajan Palaniappan, Ramanathan's younger son, joins after two years of hands-on training at KAREYN Precision Machines, Dehradun, under Ananth Ram Iyer (the first Indian General Manager of HMT), and takes over day-to-day management of the machine-tool business.",
      },
      {
        label: "Throughout the era",
        body: "Pentagon builds dedicated machining lines for tractor transmission housings, cylinder heads, cylinder blocks, crankshafts, engine timing cases and covers, alongside lines for the confectionery and packaging industries. Many of these machines are built for group companies manufacturing crankshafts, cylinder heads, and timing cases.",
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
        label: "2008",
        body: "Pentagon begins supplying engine balancer assemblies to Simpson & Co. Ltd. The balancer is designed by the prestigious Austrian design firm AVL and developed for production at Pentagon.",
      },
      {
        label: "2008 onward",
        body: "A second plant is commissioned 5 km from the main facility, dedicated to gear cutting: CNC hobbing, shaving, broaching, shaping, CNC bore and angular wheelhead grinding, and gear profile / PCD testing.",
      },
      {
        label: "Product range widens",
        body: "Hot-shift, slide-shift, constant-drive, and rear-mount power take-off families for commercial-vehicle transmissions; high-pressure gear pump platforms; single-spool and two-spool tipping valves, diverter valves, and inline relief valves. Process-capability investments include Makino CNC horizontal machining centres, a Carl Zeiss CNC scanning CMM, nanometer-resolution Carl Zeiss surface roughness testing, and a 315-bar hydraulic test rig built in-house with Siemens PLC control and closed-loop test cycle.",
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
        body: "Natarajan Palaniappan's sons join the company: Dr Varun Palaniappan (strategy and planning) and Ananth Palaniappan (project engineering).",
      },
      {
        label: "Today",
        body: "43,200 sq ft across two plants in Ambattur, Chennai (20,000 sq ft built-up, balance ready for development). Approximately 80 employees. More than 100 product types exported. ISO 14001 and ISO 45001 certifications in progress.",
      },
    ],
  },
];

const groupCompanies = [
  {
    name: "PROTEL",
    longName: "Productivity Elements Pvt. Ltd.",
    years: "1965 →",
    body: "One of India's first small-scale machine tool companies. Founding company of The Sellvinds Group; co-founded by Ramanathan Palaniappan after his eleven years at HMT.",
  },
  {
    name: "SRP Tools Ltd. (Ramanathan Palaniappan served as Technical Director)",
    longName: null,
    years: "1965–2005",
    body: "In addition to running PROTEL, Ramanathan Palaniappan also helped set up India's largest Gear Cutting Tool Company SRP Tools Ltd as Technical Director to support promotors who came from a commercial background. He coordinated collaboration agreements with Mitsibushi to manufacture hobs, broaches, shaping cutters, and shaving cutters. He was technical director of SRP until the company was sold back to Mitsubishi in 2005.",
  },
  {
    name: "Sellvinds",
    longName: "Autoparts manufacturing",
    years: "Early 1970s →",
    body: "Manufactured autoparts and engine lubricating-oil pumps for TELCO (Tata Motors), HMT Tractors, and Greaves Cotton. The lubricating-oil pump plant was run entirely by women — an industry first.",
  },
  {
    name: "CAFOMA Autoparts Ltd.",
    longName: null,
    years: "1983–2021",
    body: "Machined fully-finished crankshafts for HMT Tractors, Simpson & Co., Greaves Cotton, and Tata Motors (24% equity holder). Output reached 150,000 crankshafts per year by the 1990s. Sold to MM Forgings Ltd in 2021.",
  },
  {
    name: "CAFOMA Engine Components Ltd.",
    longName: null,
    years: "2007 →",
    body: "Greenfield plant at SIPCOT Irungattukottai machining fully-finished cylinder heads for Simpson & Co. Ltd. Owned and run by P. Ramanathan and his sons Arun Ramanathan and Pranav Ramanathan.",
  },
];

function EntryRow({ entry, index }: { entry: Entry; index: number }) {
  const isLeft = index % 2 === 0;
  return (
    <div
      className={`relative flex items-start gap-8 ${
        isLeft ? "md:flex-row" : "md:flex-row-reverse"
      }`}
    >
      <div className="hidden md:block flex-1" />
      <div className="absolute left-4 md:left-1/2 w-3 h-3 rounded-full bg-primary -translate-x-1.5 mt-1.5" />
      <div className="ml-12 md:ml-0 flex-1">
        <div className="text-primary font-bold text-lg">{entry.label}</div>
        <p className="text-muted-foreground text-sm mt-1 leading-relaxed">{entry.body}</p>
        {entry.extra}
      </div>
    </div>
  );
}

export default function HeritageV2() {
  return (
    <div className="min-h-screen flex flex-col">
      <SiteHeader />
      <PageHero
        title="Heritage"
        subtitle="Deep engineering roots — not a recent market entrant."
        backgroundImage={plantExterior}
      />
      <HeritageVersionSwitcher />
      <main className="flex-1 section-padding">
        <div className="max-w-5xl mx-auto">
          <section>
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-8">
              Pentagon's heritage
            </h2>

            <div className="relative">
              <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-px bg-border md:-translate-x-px" />

              {eras.map((era) => (
                <section key={era.number}>
                  <div className="relative py-12 md:py-20 md:flex md:justify-center">
                    <div className="relative z-10 ml-12 md:ml-0 md:text-center bg-background md:px-6">
                      <div className="text-primary text-sm md:text-base font-semibold tracking-wide">
                        {era.number} · {era.range}
                      </div>
                      <h3 className="mt-2 text-2xl md:text-3xl font-bold text-foreground">
                        {era.title}
                      </h3>
                    </div>
                  </div>

                  <div className="space-y-12">
                    {era.entries.map((entry, i) => (
                      <EntryRow key={entry.label + i} entry={entry} index={i} />
                    ))}
                  </div>
                </section>
              ))}
            </div>
          </section>

          {/* Sellvinds Group section */}
          <section id="sellvinds-group" className="mt-24 md:mt-32 scroll-mt-24">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground">
              The Sellvinds Group
            </h2>
            <div className="space-y-5 text-muted-foreground text-sm leading-relaxed mt-8 max-w-3xl">
              <p>
                The Sellvinds Group is a Chennai-based industrial group whose companies have built machine tools, manufactured autoparts, and machined fully-finished engine components for India's leading automotive OEMs across more than seven decades. Sister companies in the group continue to machine fully-finished cylinder heads at scale.
              </p>
              <p>
                This shared lineage shapes Pentagon's approach to process definition, vendor selection, gauging, and inspection planning. Operating habits developed across decades of high-volume automotive component manufacturing carry over into Pentagon's high-mix, medium-volume contract work.
              </p>
            </div>

            <h3 className="text-lg md:text-xl font-semibold text-foreground mt-12 mb-6">
              Companies affiliated to the group
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
              {groupCompanies.map((c) => (
                <article
                  key={c.name}
                  className="border border-border rounded-md p-5 bg-background hover:border-primary/40 transition-colors"
                >
                  <div className="text-primary text-xs font-semibold tracking-wide mb-2">
                    {c.years}
                  </div>
                  <h4 className="text-base font-bold text-foreground">{c.name}</h4>
                  {c.longName && (
                    <div className="text-xs text-muted-foreground mt-0.5">{c.longName}</div>
                  )}
                  <p className="text-sm text-muted-foreground leading-relaxed mt-3">
                    {c.body}
                  </p>
                </article>
              ))}
            </div>
          </section>

          <div className="my-24 md:my-32 text-center">
            <p className="text-foreground text-lg md:text-xl">
              Pentagon is part of The Sellvinds Group – 72 years of manufacturing excellence.
            </p>
          </div>

          <div className="my-12 md:my-16 max-w-3xl">
            <p className="text-foreground text-base">
              For more on the founder's career and the people who lead Pentagon today, see{" "}
              <Link to="/about/leadership" className="text-primary hover:underline">
                Leadership
              </Link>
              .
            </p>
          </div>
        </div>
      </main>
      <SiteFooter />
    </div>
  );
}
