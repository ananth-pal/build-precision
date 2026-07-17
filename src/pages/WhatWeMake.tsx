import { Link } from "react-router-dom";

import SiteHeader from "@/components/SiteHeader";
import SiteFooter from "@/components/SiteFooter";
import PageHero from "@/components/PageHero";
import SelectedWorkGallery, { type GalleryItem } from "@/components/SelectedWorkGallery";

import balancers1 from "@/assets/portfolio/Balancer_1.png.asset.json";
import balancers2 from "@/assets/portfolio/Balancer_2.png.asset.json";
import couplers2 from "@/assets/portfolio/Couplers.png.asset.json";
import gears2 from "@/assets/portfolio/Gears.png.asset.json";
import gearPumpComponents1 from "@/assets/portfolio/Gear_pump_components.png.asset.json";
import ptoShafts1 from "@/assets/portfolio/Shafts.png.asset.json";
import valveSpools1 from "@/assets/portfolio/Valve_spools.png.asset.json";
import valves1 from "@/assets/portfolio/valves-new.png.asset.json";
import ptoFinished1 from "@/assets/portfolio/PTO_finished_1_edit.png.asset.json";
import ptoFinished2 from "@/assets/portfolio/PTO_finished_2_edit.png.asset.json";
import gearPump5 from "@/assets/portfolio/Gear_pump_5_edit-4.png.asset.json";
import gearPump1 from "@/assets/portfolio/Gear_pump_1_edited-5.png.asset.json";
import machinedHousings from "@/assets/portfolio/Machined_housings_1_edited-3.png.asset.json";
import fixtures2 from "@/assets/portfolio/Fixtures_2_edited-2.png.asset.json";

const emergingMarkets = ["Defence", "Aerospace", "Robotics", "Medical"];

const selectedWork: GalleryItem[] = [
  // Assemblies — PTOs, pumps, balancers, valves
  { src: ptoFinished1.url, caption: "PTO Gearboxes" },
  { src: ptoFinished2.url, caption: "PTO Housings" },
  { src: gearPump5.url, caption: "Gear Pump" },
  { src: gearPump1.url, caption: "Gear Pump Housing" },
  { src: valves1.url, caption: "Hydraulic Valves" },
  { src: machinedHousings.url, caption: "Machined Housings" },
  { src: balancers1.url, caption: "Engine Balancers" },
  { src: balancers2.url, caption: "Engine Balancers" },
  // Components
  { src: gearPumpComponents1.url, caption: "Gear Pump Components" },
  { src: ptoShafts1.url, caption: "PTO Shafts" },
  { src: couplers2.url, caption: "Couplers" },
  { src: gears2.url, caption: "Gears" },
  { src: valveSpools1.url, caption: "Valve spools" },
  { src: fixtures2.url, caption: "Fixtures" },
];

export default function WhatWeMake() {
  return (
    <div className="min-h-screen flex flex-col">
      <SiteHeader />
      <PageHero
        title="Portfolio"
        subtitle="Assemblies, gears, and precision machined parts currently in OEM-supply production."
      />
      <main className="flex-1">
        {/* Credibility band */}
        <section className="px-6 md:px-12 pt-12 pb-8">
          <div className="max-w-7xl mx-auto">
            <p className="text-base md:text-lg text-muted-foreground leading-relaxed max-w-3xl">
              Pentagon supplies precision-machined parts, gears, and tested assemblies to OEM
              customers on long-running production programs. More than 100 product types have been
              developed and shipped to date. Several programs have been in continuous production for
              over two decades.
            </p>
          </div>
        </section>

        <section className="px-6 md:px-12 pb-8">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-2xl font-bold mb-6">Selected Work</h2>
            <SelectedWorkGallery items={selectedWork} />
          </div>
        </section>

        <section className="section-padding pt-4">
          <div className="max-w-7xl mx-auto">
            <p className="text-muted-foreground leading-relaxed max-w-3xl">
              Aside from our work in <span className="font-semibold text-foreground">off-highway, commercial vehicles, agriculture,</span> and{" "}
              <span className="font-semibold text-foreground">automotive</span>, we are also expanding into{" "}
              {emergingMarkets.slice(0, -1).join(", ")}, and {emergingMarkets[emergingMarkets.length - 1]} —
              with active enquiry and early-stage development underway.
            </p>
          </div>
        </section>

        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <hr className="border-border" />
        </div>

        <section className="section-padding">
          <div className="max-w-7xl mx-auto">
            <div className="max-w-3xl space-y-4">
              <p className="text-muted-foreground leading-relaxed">
                Enquiries are welcome from OEMs across any sector. If a part in your bill of materials
                fits the work above, we would be glad to see a drawing.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                For the machines and measurement equipment that support these programs, see{" "}
                <Link to="/technologies" className="text-primary underline underline-offset-4 hover:no-underline">
                  Means of Production
                </Link>
                . For a fuller account of what we do and how, see{" "}
                <Link to="/capabilities" className="text-primary underline underline-offset-4 hover:no-underline">
                  Capabilities
                </Link>
                .
              </p>
            </div>
          </div>
        </section>
      </main>
      <SiteFooter />
    </div>
  );
}
