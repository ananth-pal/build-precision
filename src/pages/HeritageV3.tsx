import { Link } from "react-router-dom";
import { useState } from "react";
import SiteHeader from "@/components/SiteHeader";
import SiteFooter from "@/components/SiteFooter";
import PageHero from "@/components/PageHero";


type Entry = { label: string; body: string };
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
        body: "After planning and setting up HMT's Special Purpose Machine Division, he leaves as Deputy General Manager and moves to Madras. He co-founds Productivity Elements Pvt. Ltd. (PROTEL), one of India's first small-scale machine tool companies.",
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
        body: "43,200 sq ft across two plants in Ambattur, Chennai (20,000 sq ft built-up, balance ready for development). More than 100 product types being exported.",
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
        body: "Natarajan Palaniappan's sons join the company: Dr Varun Palaniappan (strategy and planning) and Ananth Palaniappan (project engineering) join the business after their education at Imperial College London and Cornell University.",
      },
      {
        label: "Today",
        body: "43,200 sq ft across two plants in Ambattur, Chennai (20,000 sq ft built-up, balance ready for development). Approximately 80 employees. More than 100 product types being exported. ISO 14001 and ISO 45001 certifications in progress.",
      },
    ],
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
        <p className="text-muted-foreground text-sm mt-1 leading-relaxed">
          {entry.body}
        </p>
      </div>
    </div>
  );
}

const founderFormation =
  "Ramanathan Palaniappan graduates top of his class in Mechanical Engineering from Annamalai University and joins Hindustan Machine Tools Ltd. (HMT), Bangalore, as a graduate apprentice in 1954. While at HMT, he leads delegations to machine-building firms in Europe and signs collaboration agreements on HMT's behalf. One assignment takes him to Renault, France, where he spends six months with a team of fifteen engineers studying the Renault special-purpose machine (SPM) division. After planning and setting up HMT's Special Purpose Machine Division, he leaves as Deputy General Manager and moves to Madras.";

import cafomaAutopartsLogo from "@/assets/brand/cafoma-autoparts-logo.png";
import cafomaEngineLogo from "@/assets/brand/cafoma-engine-components-logo.png";

type Company = { name: string; year: string; caption?: string; body: string; logo?: string };

const groupCompanies: Company[] = [
  {
    name: "Productivity Elements Pvt. Ltd. (PROTEL)",
    year: "1965",
    body: "He co-founds Productivity Elements Pvt. Ltd. (PROTEL), one of India's first small-scale machine tool companies, making broaching machines.",
  },
  {
    name: "SRP Tools Ltd",
    year: "1964",
    caption: "Founder served as Technical Director — not a Sellvinds Group company.",
    body: "Ramanathan Palaniappan helps set up SRP Tools Ltd as Technical Director to support the promoters who had a commercial background. He coordinates collaboration agreements with Mitsubishi to manufacture hobs, broaches, shaping cutters, and shaving cutters, and SRP grows into India's largest gear-cutting-tool company. He remains Technical Director until SRP is sold back to Mitsubishi in 2005.",
  },
  {
    name: "Sellvinds",
    year: "Early 1970s",
    body: "Sellvinds is set up to manufacture autoparts. Indian OEMs including TELCO (Tata Motors), HMT Tractors, and Greaves Cotton bring tricky components to Sellvinds for development. A separate plant is set up to assemble and supply engine lubricating-oil pumps for OEMs — totally run by women, an industry first.",
  },
  {
    name: "Pentagon Machines and Services Pvt. Ltd.",
    year: "1970s",
    body: "Founded as a custom machine-tool manufacturer and now a precision contract manufacturer. Its full history is traced in the timeline below.",
  },
  {
    name: "CAFOMA Autoparts Ltd",
    year: "1983",
    body: "CAFOMA Autoparts Ltd is set up to machine fully-finished crankshafts. Working with customer-supplied forgings, CAFOMA supplies HMT Tractors, Simpson & Co., Greaves Cotton, and Tata Motors, producing 150,000 crankshafts a year by the 1990s. Tata Motors takes 24% equity in the company. CAFOMA Autoparts is sold to MM Forgings Ltd in 2021 on the founder's retirement and continues to operate as one of India's leading crankshaft manufacturers.",
    logo: cafomaAutopartsLogo,
  },
  {
    name: "CAFOMA Engine Components Pvt. Ltd",
    year: "2007",
    body: "CAFOMA Engine Components Pvt. Ltd is established as a greenfield venture to machine fully-finished automotive cylinder heads, at SIPCOT Industrial Park, Irungatukottai, near Chennai.",
    logo: cafomaEngineLogo,
  },
];

const erasV2: Era[] = eras.slice(1).map((era, i) => ({
  ...era,
  number: `Era ${i + 1}`,
}));

function Thumb({ src, alt, label, kind }: { src?: string; alt: string; label?: string; kind: "logo" | "photo" }) {
  return (
    <figure className="flex flex-col items-center text-center w-full">
      <div className="w-full aspect-[4/3] flex items-center justify-center">
        {src ? (
          <img src={src} alt={alt} className="max-h-full max-w-full object-contain" />
        ) : (
          <span className="text-muted-foreground text-[10px] uppercase tracking-wide">
            {kind === "photo" ? "Photo coming soon" : "Logo coming soon"}
          </span>
        )}
      </div>
      {label && (
        <figcaption className="mt-1.5 text-[11px] text-muted-foreground leading-snug">
          {label}
        </figcaption>
      )}
    </figure>
  );
}

function CompanyRow({ company }: { company: Company }) {
  return (
    <div>
      <div className="flex items-baseline gap-3 flex-wrap">
        <span className="text-primary font-bold text-base">{company.name}</span>
        <span className="text-muted-foreground text-sm">{company.year}</span>
      </div>
      {company.caption && (
        <div className="text-muted-foreground text-xs italic mt-0.5">{company.caption}</div>
      )}
      <p className="text-muted-foreground text-sm mt-1 leading-relaxed">{company.body}</p>
    </div>
  );
}

import pentagonLogo from "@/assets/brand/pentagon-logo.png.asset.json";
import sellvindsLogoSrc from "@/assets/brand/sellvinds-logo-cropped.png";
const sellvindsLogo = { url: sellvindsLogoSrc };

// Member logos for the family-of-companies lockup. Only include logos that exist;
// missing assets are intentionally omitted rather than shown as placeholders.
const memberLogos: { src: string; alt: string; scale?: number }[] = [
  { src: pentagonLogo.url, alt: "Pentagon Machines and Services" },
  { src: cafomaAutopartsLogo, alt: "CAFOMA Autoparts Pvt. Ltd." },
  { src: cafomaEngineLogo, alt: "CAFOMA Engine Components Private Limited", scale: 0.95 },
];

const earlyMilestones: Entry[] = [
  {
    label: "1954",
    body: "Ramanathan Palaniappan graduates top of his class in Mechanical Engineering from Annamalai University and joins Hindustan Machine Tools Ltd. (HMT), Bangalore, as a graduate apprentice.",
  },
  {
    label: "Late 1950s–early 1960s",
    body: "While at HMT, he leads delegations to machine-building firms in Europe and signs collaboration agreements on HMT's behalf. One assignment takes him to Renault, France, where he spends six months with a team of fifteen engineers studying the Renault special-purpose machine (SPM) division.",
  },
  {
    label: "1964",
    body: "Ramanathan Palaniappan helps set up SRP Tools Ltd as Technical Director to support the promoters who had a commercial background. He coordinates collaboration agreements with Mitsubishi to manufacture hobs, broaches, shaping cutters, and shaving cutters, and SRP grows into India's largest gear-cutting-tool company. He remains Technical Director until SRP is sold back to Mitsubishi in 2005.",
  },
  {
    label: "1965",
    body: "After planning and setting up HMT's Special Purpose Machine Division, he leaves as Deputy General Manager and moves to Madras. He co-founds Productivity Elements Pvt. Ltd. (PROTEL), one of India's first small-scale machine tool companies, making broaching machines.",
  },
  {
    label: "Early 1970s",
    body: "Sellvinds is set up to manufacture autoparts. Indian OEMs including TELCO (Tata Motors), HMT Tractors, and Greaves Cotton bring tricky components to Sellvinds for development. A separate plant is set up to assemble and supply engine lubricating-oil pumps for OEMs — totally run by women, an industry first.",
  },
  {
    label: "1970s",
    body: "Pentagon Machines and Services Pvt. Ltd. is founded as a custom machine-tool manufacturer. Its full history is traced in the timeline below.",
  },
  {
    label: "1983",
    body: "CAFOMA Autoparts Ltd is set up to machine fully-finished crankshafts. Working with customer-supplied forgings, CAFOMA supplies HMT Tractors, Simpson & Co., Greaves Cotton, and Tata Motors, producing 150,000 crankshafts a year by the 1990s. Tata Motors takes 24% equity in the company. CAFOMA Autoparts is sold to MM Forgings Ltd in 2021 on the founder's retirement and continues to operate as one of India's leading crankshaft manufacturers.",
  },
  {
    label: "2007",
    body: "CAFOMA Engine Components Pvt. Ltd is established as a greenfield venture to machine fully-finished automotive cylinder heads, at SIPCOT Industrial Park, Irungatukottai, near Chennai.",
  },
];

export default function Heritage() {
  const [variant, setVariant] = useState<"v1" | "v2" | "v3">("v1");
  const isV2 = variant === "v2";
  const isV3 = variant === "v3";


  return (
    <div className="min-h-screen flex flex-col">
      <SiteHeader />
      <PageHero title="Heritage" subtitle="Deep engineering roots across machine building, engine components, and contract manufacturing" />

      <main className="flex-1 section-padding">
        <div className="max-w-7xl mx-auto">
          {/* Layout variant toggle */}
          <div className="mb-10 flex items-center justify-end gap-1 text-xs">
            {(["v1", "v2", "v3"] as const).map((v) => (
              <button
                key={v}
                type="button"
                onClick={() => setVariant(v)}
                className={`px-3 py-1.5 rounded-md border transition-colors ${
                  variant === v
                    ? "bg-primary text-primary-foreground border-primary font-semibold"
                    : "bg-muted text-muted-foreground border-border hover:text-foreground"
                }`}
              >
                {v.toUpperCase()}
              </button>
            ))}
          </div>

          {/* Section 1 — Pentagon as part of The Sellvinds Group */}
          <section className="mb-24 md:mb-32">
            {/* V1 & V2: family-of-companies lockup at top */}
            {!isV3 && (
              <div className="mb-16 flex justify-center">
                <div className="flex items-center gap-8 md:gap-12">
                  <img
                    src={sellvindsLogo.url}
                    alt="Sellvinds Group"
                    className="h-24 md:h-28 w-auto shrink-0"
                  />
                  <div className="h-20 md:h-24 w-px bg-border" />
                  {isV2 ? (
                    <div className="flex items-center gap-6 md:gap-10">
                      {memberLogos.map((m) => (
                        <img
                          key={m.alt}
                          src={m.src}
                          alt={m.alt}
                          className="h-9 md:h-11 w-auto object-contain"
                          style={m.scale ? { transform: `scale(${m.scale})`, transformOrigin: "center" } : undefined}
                        />
                      ))}
                    </div>
                  ) : (
                    <div className="grid grid-cols-2 gap-x-6 md:gap-x-8 gap-y-3 items-center">
                      {memberLogos.map((m) => (
                        <div
                          key={m.alt}
                          className="h-9 md:h-11 w-36 md:w-44 flex items-center justify-center"
                        >
                          <img
                            src={m.src}
                            alt={m.alt}
                            className="max-h-full max-w-full object-contain"
                            style={m.scale ? { transform: `scale(${m.scale})` } : undefined}
                          />
                        </div>
                      ))}
                    </div>
                  )}
                </div>
              </div>
            )}


            {/* Intro — V3 places Sellvinds logo to the right of the prose */}
            {isV3 ? (
              <div className="grid md:grid-cols-[1fr_auto] gap-10 md:gap-16 items-start">
                <div>
                  <h2 className="text-3xl md:text-4xl font-bold text-foreground">
                    Pentagon as part of The Sellvinds Group
                  </h2>
                  <div className="space-y-5 text-muted-foreground text-sm leading-relaxed mt-8">
                    <p>
                      The Sellvinds Group is a Chennai-based industrial group whose companies have built machine tools and machined fully-finished engine components for India's leading automotive OEMs across more than seven decades. Sister companies in the group continue to machine fully-finished cylinder heads at scale.
                    </p>
                    <p>
                      This shared lineage shapes Pentagon's approach to process definition, vendor selection, gauging, and inspection planning. Operating habits developed across decades of high-volume automotive component manufacturing carry over into Pentagon's high-mix, medium-volume contract work. Managers within Pentagon remain and Sellvinds has an active ex-employees association to keep in touch.
                    </p>
                  </div>
                </div>
                <img
                  src={sellvindsLogo.url}
                  alt="Sellvinds Group"
                  className="h-32 md:h-40 w-auto shrink-0 mt-8 md:mt-0 md:self-center justify-self-center md:justify-self-end md:mr-8 lg:mr-16"
                />
              </div>
            ) : (
              <div>
                <h2 className="text-3xl md:text-4xl font-bold text-foreground">
                  Pentagon as part of The Sellvinds Group
                </h2>
                <div className="space-y-5 text-muted-foreground text-sm leading-relaxed mt-8">
                  <p>
                    The Sellvinds Group is a Chennai-based industrial group whose companies have built machine tools and machined fully-finished engine components for India's leading automotive OEMs across more than seven decades. Sister companies in the group continue to machine fully-finished cylinder heads at scale.
                  </p>
                  <p>
                    This shared lineage shapes Pentagon's approach to process definition, vendor selection, gauging, and inspection planning. Operating habits developed across decades of high-volume automotive component manufacturing carry over into Pentagon's high-mix, medium-volume contract work. Managers within Pentagon remain and Sellvinds has an active ex-employees association to keep in touch.
                  </p>
                </div>
              </div>
            )}

            {/* V2: combined "Early group milestones" timeline */}
            {isV2 ? (
              <div className="mt-16">
                <h3 className="text-2xl md:text-3xl font-bold text-foreground mb-10">
                  Group milestones
                </h3>
                <div className="relative">
                  <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-px bg-border md:-translate-x-px" />
                  <div className="space-y-12">
                    {earlyMilestones.map((entry, i) => (
                      <EntryRow key={entry.label + i} entry={entry} index={i} />
                    ))}
                  </div>
                </div>
              </div>
            ) : (
              <>
                {/* Founder — prose paragraph */}
                <div className="mt-12">
                  <h3 className="text-lg md:text-xl font-semibold text-foreground">
                    A machine-tool engineer's formation
                  </h3>
                  <p className="text-muted-foreground text-sm leading-relaxed mt-6">
                    {founderFormation}
                  </p>
                </div>

                <h3 className="text-lg md:text-xl font-semibold text-foreground mt-12">
                  Companies Affiliated with Sellvinds Group
                </h3>

                {/* Company profiles — text only */}
                <div className="space-y-8 mt-10">
                  {groupCompanies.map((company, i) => (
                    <CompanyRow key={company.name + i} company={company} />
                  ))}
                </div>
              </>
            )}

            <div className="mt-12">
              <div className="h-px w-10 bg-primary mb-4" />
              <p className="text-foreground text-lg md:text-xl font-semibold leading-relaxed">
                Pentagon's own story unfolds alongside this wider group history. The timeline below traces it from the company's founding to today.
              </p>
            </div>

          </section>

          {/* Section 2 — Pentagon's heritage */}
          <section>
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-8">
              Pentagon's heritage
            </h2>

            <div className="relative">
              <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-px bg-border md:-translate-x-px" />

              {erasV2.map((era) => (
                <section key={era.number}>
                  {/* Era divider */}
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

          {/* Closing tagline — Sellvinds + Pentagon paired lockup */}
          <div className="my-24 md:my-32 text-center flex flex-col items-center">
            <div className="flex items-center gap-8 md:gap-12 mb-10">
              <img src={sellvindsLogo.url} alt="Sellvinds Group" className="h-20 md:h-24 w-auto" />
              <div className="w-px h-14 md:h-16 bg-border" />
              <img src={pentagonLogo.url} alt="Pentagon Machines and Services Private Limited" className="h-9 md:h-11 w-auto" />
            </div>
            <p className="text-foreground text-lg md:text-xl max-w-2xl">
              Pentagon is part of The Sellvinds Group — 72 years of manufacturing excellence.
            </p>
          </div>

          {/* Leadership cross-reference */}
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
