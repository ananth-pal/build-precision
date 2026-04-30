import { Link } from "react-router-dom";
import SiteHeader from "@/components/SiteHeader";
import SiteFooter from "@/components/SiteFooter";
import PageHero from "@/components/PageHero";
import HeritageVersionSwitcher from "@/components/HeritageVersionSwitcher";
import plantExterior from "@/assets/plant-exterior.jpg";

type Source = "pentagon" | "sellvinds";
type Entry = {
  label: string;
  sortYear: number;
  source: Source;
  summary?: string;
  body: string;
};
type Era = {
  number: string;
  range: string;
  rangeStart: number;
  rangeEnd: number;
  title: string;
  entries: Entry[];
};

const sellvindsEntries: Entry[] = [
  {
    label: "1965–2005",
    sortYear: 1965,
    source: "sellvinds",
    summary:
      "SRP Tools Ltd set up with Mitsubishi collaboration; grows into India's largest gear-cutting-tool company.",
    body: "In addition to running PROTEL, Ramanathan Palaniappan helps set up SRP Tools Ltd as Technical Director to support promoters who had a commercial background. He coordinates collaboration agreements with Mitsubishi to manufacture hobs, broaches, shaping cutters, and shaving cutters, and SRP grows into India's largest gear-cutting-tool company. He remains Technical Director until SRP is sold back to Mitsubishi in 2005.",
  },
  {
    label: "Early 1970s",
    sortYear: 1970,
    source: "sellvinds",
    summary:
      "Sellvinds founded to manufacture autoparts for TELCO, HMT Tractors, and Greaves Cotton.",
    body: "Sellvinds is set up to manufacture autoparts. Indian OEMs including TELCO (Tata Motors), HMT Tractors, and Greaves Cotton bring tricky components to Sellvinds for development. A separate plant is set up to assemble and supply engine lubricating-oil pumps for OEMs — totally run by women, an industry first.",
  },
  {
    label: "1983",
    sortYear: 1983,
    source: "sellvinds",
    summary:
      "CAFOMA Autoparts Ltd founded; supplies 150,000 crankshafts a year by the 1990s; Tata Motors takes 24% equity.",
    body: "CAFOMA Autoparts Ltd is set up to machine fully-finished crankshafts. Working with customer-supplied forgings, CAFOMA supplies HMT Tractors, Simpson & Co., Greaves Cotton, and Tata Motors, producing 150,000 crankshafts a year by the 1990s. Tata Motors takes 24% equity in the company. CAFOMA Autoparts is sold to MM Forgings Ltd in 2021 on the founder's retirement and continues to operate as one of India's leading crankshaft manufacturers.",
  },
  {
    label: "2007",
    sortYear: 2007,
    source: "sellvinds",
    summary:
      "CAFOMA Engine Components Ltd commissioned at SIPCOT Irungattukottai for Simpson & Co. cylinder heads.",
    body: "CAFOMA Engine Components Ltd is set up as a greenfield venture in SIPCOT Irungattukottai to machine fully-finished cylinder heads for Simpson & Co. The company is owned and run by P. Ramanathan and his sons Arun Ramanathan and Pranav Ramanathan.",
  },
];

const pentagonEras: Era[] = [
  {
    number: "Era 1",
    range: "1954–1965",
    rangeStart: 1954,
    rangeEnd: 1965,
    title: "A machine-tool engineer's formation",
    entries: [
      {
        label: "1954",
        sortYear: 1954,
        source: "pentagon",
        body: "Ramanathan Palaniappan graduates top of his class in Mechanical Engineering from Annamalai University and joins Hindustan Machine Tools Ltd. (HMT), Bangalore, as a graduate apprentice.",
      },
      {
        label: "Late 1950s–early 1960s",
        sortYear: 1958,
        source: "pentagon",
        body: "While at HMT, he leads delegations to machine-building firms in Europe and signs collaboration agreements on HMT's behalf. One assignment takes him to Renault, France, where he spends six months with a team of fifteen engineers studying the Renault special-purpose machine (SPM) division.",
      },
      {
        label: "1965",
        sortYear: 1965,
        source: "pentagon",
        body: "After planning and setting up HMT's Special Purpose Machine Division, leaves as Deputy General Manager and moves to Madras. Co-founds Productivity Elements Pvt. Ltd. (PROTEL), one of India's first small-scale machine tool companies.",
      },
    ],
  },
  {
    number: "Era 2",
    range: "1970s–1998",
    rangeStart: 1970,
    rangeEnd: 1998,
    title: "Pentagon as a machine-tool builder",
    entries: [
      {
        label: "1970s",
        sortYear: 1971,
        source: "pentagon",
        body: "With SRP making gear-cutting tools and PROTEL making broaching machines, a gap remains for tool-resharpening machines. Pentagon Machines and Services Pvt. Ltd. is founded as a custom machine-tool manufacturer, focused on special-purpose machines, gear shaping cutter and broach resharpening machines, and hob inspection equipment.",
      },
      {
        label: "1970s–1990s",
        sortYear: 1975,
        source: "pentagon",
        body: "Machines are built for most of India's leading automotive and engineering OEMs, including Ashok Leyland, Bajaj Auto, Escorts, Hindustan Motors, Ind-Suzuki (TVS), Lakshmi Machine Works, Heavy Vehicles Factory, T72 Tank Factory, Greaves Cotton, SRP Tools, Nutrine Confectionery, and Wrigley India.",
      },
      {
        label: "1990",
        sortYear: 1990,
        source: "pentagon",
        body: "Natarajan Palaniappan, Ramanathan's younger son, joins after two years of hands-on training at KAREYN Precision Machines, Dehradun, under Ananth Ram Iyer (the first Indian General Manager of HMT), and takes over day-to-day management of the machine-tool business.",
      },
      {
        label: "Throughout the era",
        sortYear: 1995,
        source: "pentagon",
        body: "Pentagon builds dedicated machining lines for tractor transmission housings, cylinder heads, cylinder blocks, crankshafts, engine timing cases and covers, alongside lines for the confectionery and packaging industries. Many of these machines are built for group companies manufacturing crankshafts, cylinder heads, and timing cases.",
      },
    ],
  },
  {
    number: "Era 3",
    range: "1999–2007",
    rangeStart: 1999,
    rangeEnd: 2007,
    title: "Pivot to contract manufacturing",
    entries: [
      {
        label: "1999",
        sortYear: 1999,
        source: "pentagon",
        body: "Pentagon begins contract manufacturing for a multinational hydraulics OEM based in Australia. A clean-room assembly area is commissioned at the Ambattur plant.",
      },
      {
        label: "2000",
        sortYear: 2000,
        source: "pentagon",
        body: "First component released to production: a single-spool hydraulic tipping valve. Over the following three years, the first generation of sliding-shift and hot-shift power take-off platforms, gear pumps, and monoblock valves is developed from prototype on customer drawings.",
      },
      {
        label: "Throughout the period",
        sortYear: 2003,
        source: "pentagon",
        body: "In-house design and manufacture of jigs, fixtures, and receiver gauges is retained from the machine-tool business and becomes a structural advantage for the contract-manufacturing work.",
      },
    ],
  },
  {
    number: "Era 4",
    range: "2008–2019",
    rangeStart: 2008,
    rangeEnd: 2019,
    title: "A second OEM and scale",
    entries: [
      {
        label: "2008",
        sortYear: 2008,
        source: "pentagon",
        body: "Pentagon begins supplying engine balancer assemblies to Simpson & Co. Ltd. The balancer is designed by the prestigious Austrian design firm AVL and developed for production at Pentagon.",
      },
      {
        label: "2008 onward",
        sortYear: 2009,
        source: "pentagon",
        body: "A second plant is commissioned 5 km from the main facility, dedicated to gear cutting: CNC hobbing, shaving, broaching, shaping, CNC bore and angular wheelhead grinding, and gear profile / PCD testing.",
      },
      {
        label: "Product range widens",
        sortYear: 2012,
        source: "pentagon",
        body: "Hot-shift, slide-shift, constant-drive, and rear-mount power take-off families for commercial-vehicle transmissions; high-pressure gear pump platforms; single-spool and two-spool tipping valves, diverter valves, and inline relief valves. Process-capability investments include Makino CNC horizontal machining centres, a Carl Zeiss CNC scanning CMM, nanometer-resolution Carl Zeiss surface roughness testing, and a 315-bar hydraulic test rig built in-house with Siemens PLC control and closed-loop test cycle.",
      },
      {
        label: "Quality management",
        sortYear: 2015,
        source: "pentagon",
        body: "Certified to ISO 9001:2015 by Intertek.",
      },
    ],
  },
  {
    number: "Era 5",
    range: "2020–present",
    rangeStart: 2020,
    rangeEnd: 2100,
    title: "Continuity and the next generation",
    entries: [
      {
        label: "Ongoing",
        sortYear: 2020,
        source: "pentagon",
        body: "New tipping-valve and diverter-valve families, and heavy-duty slide-shift power take-off platforms for current-generation commercial-vehicle transmissions, continue to release each year.",
      },
      {
        label: "Next generation joins",
        sortYear: 2022,
        source: "pentagon",
        body: "Natarajan Palaniappan's sons join the company: Dr Varun Palaniappan (strategy and planning) and Ananth Palaniappan (project engineering).",
      },
      {
        label: "Today",
        sortYear: 2026,
        source: "pentagon",
        body: "43,200 sq ft across two plants in Ambattur, Chennai (20,000 sq ft built-up, balance ready for development). Approximately 80 employees. More than 100 product types exported. ISO 14001 and ISO 45001 certifications in progress.",
      },
    ],
  },
];

function buildMergedEras(): Era[] {
  const merged = pentagonEras.map((era) => ({ ...era, entries: [...era.entries] }));
  for (const sv of sellvindsEntries) {
    const era = merged.find((e) => sv.sortYear >= e.rangeStart && sv.sortYear <= e.rangeEnd);
    if (era) era.entries.push(sv);
  }
  for (const era of merged) {
    era.entries.sort((a, b) => a.sortYear - b.sortYear);
  }
  return merged;
}

function PentagonRow({ entry, index }: { entry: Entry; index: number }) {
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
      </div>
    </div>
  );
}

function SellvindsRow({ entry, index }: { entry: Entry; index: number }) {
  const isLeft = index % 2 === 0;
  return (
    <div
      className={`relative flex items-start gap-8 ${
        isLeft ? "md:flex-row" : "md:flex-row-reverse"
      }`}
    >
      <div className="hidden md:block flex-1" />
      <div className="absolute left-4 md:left-1/2 w-3 h-3 rounded-full border-2 border-primary bg-background -translate-x-1.5 mt-1.5" />
      <div className="ml-12 md:ml-0 flex-1">
        <div className="flex items-baseline gap-2 flex-wrap">
          <span className="text-foreground font-semibold text-sm">
            {entry.label}
          </span>
          <span className="text-[10px] uppercase tracking-wider text-primary border border-primary/40 rounded px-1.5 py-0.5">
            AFFILIATED TO SELLVINDS GROUP
          </span>
        </div>
        <p className="text-muted-foreground text-sm mt-1 leading-relaxed">
          {entry.body}
        </p>
      </div>
    </div>
  );
}

export default function HeritageV4() {
  const eras = buildMergedEras();

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
              Sellvinds heritage
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
                    {era.entries.map((entry, i) =>
                      entry.source === "pentagon" ? (
                        <PentagonRow key={entry.label + i} entry={entry} index={i} />
                      ) : (
                        <SellvindsRow key={entry.label + i} entry={entry} index={i} />
                      )
                    )}
                  </div>
                </section>
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
