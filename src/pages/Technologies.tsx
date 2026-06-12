import { useState } from "react";
import { Cog, Settings, Wrench, Ruler, Hammer, Network, FileText } from "lucide-react";
import RequestMachineListDialog from "@/components/RequestMachineListDialog";
import SiteHeader from "@/components/SiteHeader";
import SiteFooter from "@/components/SiteFooter";
import PageHero from "@/components/PageHero";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
  DialogTrigger,
} from "@/components/ui/dialog";
import gearHobberAsset from "@/assets/technologies/gear-hobber.jpg.asset.json";
import gearGrinderAsset from "@/assets/technologies/gear-grinder.jpg.asset.json";
import zeissCmmAsset from "@/assets/technologies/zeiss-cmm.jpg.asset.json";
import calibrationProbeAsset from "@/assets/technologies/calibration-probe.jpg.asset.json";
import zollerAsset from "@/assets/technologies/zoller-presetter.jpg.asset.json";
import drillLoopAsset from "@/assets/technologies/drill-loop.mp4.asset.json";

type Card = {
  icon: typeof Cog;
  title: string;
  desc: string;
  details: string[];
  image?: string;
  video?: string;
  dialogImage?: string;
};

const cards: Card[] = [
  {
    icon: Cog,
    title: "Machine Tools: Components",
    desc: "General machining, from raw or near-net-shape input through finished part.",
    video: drillLoopAsset.url,
    details: [
      "CNC horizontal machining centres — Makino",
      "CNC vertical machining centres",
      "CNC turning centres",
      "Fine-boring machines",
      "Vertical mills",
      "Radial drills",
      "Double-disc lapping machine",
      "Surface grinding machine",
      "Vertical single pass honing machines",
      "Special-purpose machines",
    ],
  },
  {
    icon: Settings,
    title: "Machine Tools: Gears",
    desc: "A dedicated plant covering the route from blank preparation through finished teeth.",
    image: gearGrinderAsset.url,
    details: [
      "CNC gear hobbers — Cooper Pfauter, up to 6 module",
      "Gear shapers — Lorenz, up to 4 module",
      "Gear shaver — Red Ring, up to 200 mm dia",
      "Vertical broaching machine — 10 ton",
      "Gear tooth rounding and chamfering",
      "CNC bore grinder with HF spindle & diaphragm chuck",
      "CNC angular wheelhead grinder with Marposs gauging & flagging",
      "Cylindrical grinders",
      "Gear profile and PCD tester — Osaka GC 3H",
      "Gear roll tester",
    ],
  },
  {
    icon: Wrench,
    title: "Assembly and Testing",
    desc: "Clean-room assembly of hydraulic valves, gear pumps, PTO gearboxes, and engine balancers, with automated testing for hydraulic units.",
    details: [
      "Automatic pump-testing cycle via Siemens PLC",
      "50 HP AC induction motor with closed-loop RPM control via Siemens vector drive",
      "Maximum pressure: 315 bar",
      "Bosch proportional pressure relief valve",
      "Webster flow transducer and Stauff flow meter",
      "Pressure and temperature transducers",
      "Two-stage filtration through oversized Stauff pressure-line filters",
      "Heat exchanger with cooling tower",
      "Safety interlocks on pressure, flow, temperature, and clogged filters",
    ],
  },
  {
    icon: Ruler,
    title: "Measurement and Metrology",
    desc: "CMM, surface roughness, height gauging, and dedicated gauges, with calibration cycled in-house and via external agencies.",
    image: zeissCmmAsset.url,
    dialogImage: calibrationProbeAsset.url,
    details: [
      "CNC scanning CMM — Zeiss",
      "Surface roughness tester, nanometre resolution — Zeiss",
      "Height measuring machines — Trimos, Electronica",
      "Hardness testers",
      "Air gauges (plug and ring) and receiver gauges",
    ],
  },
  {
    icon: Hammer,
    title: "Tooling and Supporting Processes",
    desc: "In-house jig, fixture, and gauge design and manufacture, plus deburring, washing, and painting.",
    image: zollerAsset.url,
    details: [
      "Jig, fixture, and receiver gauge design and manufacture (manual and hydraulic)",
      "Wide range of cutting tools and tool holders with Zoller CNC tool presetter",
      "SolidWorks for tooling design and early manufacturability review with customers",
      "Component washing machines and painting system",
    ],
  },
  {
    icon: Network,
    title: "Sourcing and External Processes",
    desc: "Long-standing vendor network for castings, forgings, heat treatment, and non-critical machined components.",
    details: [
      "Castings and forgings — long-standing certified vendors in India and abroad",
      "Heat treatment — IATF 16949 certified specialist vendor with automated sealed-quench furnace facility",
      "Non-critical machined components — certified machine shops",
      "Incoming inspection, traceability, and controlled storage applied to all supplied material",
    ],
  },
];

export default function Technologies() {
  const [requestOpen, setRequestOpen] = useState(false);
  return (
    <div className="min-h-screen flex flex-col">
      <SiteHeader />
      <PageHero
        title="Means of Production"
        subtitle="Equipment, measurement, and supporting systems across two Pentagon facilities in Chennai."
        backgroundImage={gearHobberAsset.url}
      />
      <main className="flex-1">
        <section className="section-padding pb-8 lg:pb-12">
          <div className="max-w-7xl mx-auto">
            <p className="text-muted-foreground leading-relaxed max-w-3xl mb-4">
              Pentagon operates two ISO 9001:2015 certified facilities in Ambattur Industrial Estate on a 43,200 sq ft footprint (20,000 sq ft built-up, balance held for expansion) — one for component machining and assembly, one for gear cutting. The equipment base has its roots in Pentagon's original machine tool business. The same team that once built special-purpose machines for India's leading automotive OEMs now specifies, maintains, and where necessary rebuilds the equipment that runs production.
            </p>
            <p className="text-sm text-muted-foreground mb-12 max-w-3xl">
              For the parts and assemblies produced on this equipment, see{" "}
              <a href="/capabilities" className="text-primary font-medium hover:underline">Capabilities →</a>
              . For representative examples, see{" "}
              <a href="/what-we-make" className="text-primary font-medium hover:underline">Portfolio →</a>
              .
            </p>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {cards.map((c) => (
                <div key={c.title} className="capability-card flex flex-col">
                  {c.video ? (
                    <video
                      src={c.video}
                      autoPlay
                      muted
                      loop
                      playsInline
                      className="w-full aspect-video object-cover rounded-md mb-4 bg-muted"
                    />
                  ) : c.image ? (
                    <img
                      src={c.image}
                      alt={c.title}
                      loading="lazy"
                      className="w-full aspect-video object-cover rounded-md mb-4 bg-muted"
                    />
                  ) : null}
                  <c.icon className="text-primary mb-4" size={28} />
                  <h3 className="text-lg font-semibold mb-3">{c.title}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed mb-6 flex-1">{c.desc}</p>
                  <Dialog>
                    <DialogTrigger asChild>
                      <button className="self-start text-sm font-medium text-primary hover:underline">
                        See details →
                      </button>
                    </DialogTrigger>
                    <DialogContent className="max-w-lg">
                      <DialogHeader>
                        <DialogTitle>{c.title}</DialogTitle>
                        <DialogDescription>{c.desc}</DialogDescription>
                      </DialogHeader>
                      {c.dialogImage && (
                        <img
                          src={c.dialogImage}
                          alt={`${c.title} detail`}
                          loading="lazy"
                          className="w-full aspect-video object-cover rounded-md mt-2"
                        />
                      )}
                      <ul className="list-disc pl-5 space-y-2 text-sm text-muted-foreground leading-relaxed mt-2">
                        {c.details.map((d) => (
                          <li key={d}>{d}</li>
                        ))}
                      </ul>
                    </DialogContent>
                  </Dialog>
                </div>
              ))}
            </div>

            <div className="mt-8">
              <button
                type="button"
                onClick={() => setRequestOpen(true)}
                className="download-btn"
              >
                <FileText size={16} /> Request Detailed Machine List
              </button>
            </div>
          </div>
        </section>

        <section className="section-padding bg-secondary">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-2xl sm:text-3xl font-bold mb-6">New Processes and Equipment</h2>
            <p className="text-muted-foreground leading-relaxed max-w-3xl">
              When an enquiry calls for a process we don't currently run in-house, Pentagon's default is to invest — acquiring new machines, acquiring and rebuilding used machines, or re-tooling an existing one. The same logic applies to supporting infrastructure: fixturing, gauging, cleaning, and, where required, controlled environments for inspection or assembly. While that investment is being scoped and commissioned, and for operations that are better kept external, we draw on an established subcontractor network — many carried over from Pentagon's machine tool days and proven over long relationships. This is how Pentagon has historically entered new part families and new industries without starting from a blank factory.
            </p>
          </div>
        </section>
      </main>
      <SiteFooter />
      <RequestMachineListDialog open={requestOpen} onOpenChange={setRequestOpen} />
    </div>
  );
}
