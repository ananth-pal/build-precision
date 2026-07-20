import { Link } from "react-router-dom";

import SiteHeader from "@/components/SiteHeader";
import SiteFooter from "@/components/SiteFooter";
import PageHero from "@/components/PageHero";
import SelectedWorkGallery, { type GalleryItem } from "@/components/SelectedWorkGallery";

import couplers2 from "@/assets/portfolio/Couplers.webp.asset.json";
import gears2 from "@/assets/portfolio/Gears.webp.asset.json";
import valveSpools1 from "@/assets/portfolio/Valve_spools.webp.asset.json";
import fixtures2 from "@/assets/portfolio/Fixtures_2_edited-2.webp.asset.json";

import ptoGearboxes from "@/assets/portfolio/clean/PTO_finished_1_edit_3-clean.png.asset.json";
import ptoHousings from "@/assets/portfolio/clean/PTO_finished_2_edit_3-clean.png.asset.json";
import hydraulicValves from "@/assets/portfolio/clean/Valve_edit_1-clean.png.asset.json";
import gearPump from "@/assets/portfolio/clean/Gear_pump_5_edit-clean.png.asset.json";
import gearPumpHousing from "@/assets/portfolio/clean/Gear_pump_1_edit_2-clean.png.asset.json";
import machinedHousings from "@/assets/portfolio/clean/Machined_housings_1_edited-clean.png.asset.json";
import balancer2 from "@/assets/portfolio/clean/Balancer_2-clean.png.asset.json";
import balancer1 from "@/assets/portfolio/clean/Balancer_1-clean.png.asset.json";
import gearPumpComponents from "@/assets/portfolio/clean/Gear_pump_components-clean.png.asset.json";
import ptoShafts from "@/assets/portfolio/clean/Shafts-clean.png.asset.json";
import SEO from "@/components/SEO";

const emergingMarkets = ["Defence", "Aerospace", "Robotics", "Medical"];

const selectedWork: GalleryItem[] = [
  { src: ptoGearboxes.url, caption: "PTO Gearboxes" },
  { src: ptoHousings.url, caption: "PTO Housings" },
  { src: hydraulicValves.url, caption: "Hydraulic Valves" },
  { src: gearPump.url, caption: "Gear Pump" },
  { src: gearPumpHousing.url, caption: "Gear Pump Housing" },
  { src: machinedHousings.url, caption: "Machined Housings" },
  { src: balancer2.url, caption: "Engine Balancers" },
  { src: balancer1.url, caption: "Engine Balancers" },
  { src: gearPumpComponents.url, caption: "Gear Pump Components" },
  { src: ptoShafts.url, caption: "PTO Shafts" },
  { src: couplers2.url, caption: "Couplers" },
  { src: gears2.url, caption: "Gears" },
  { src: valveSpools1.url, caption: "Valve spools" },
  { src: fixtures2.url, caption: "Fixtures" },
];


export default function WhatWeMake() {
  return (
    <div className="min-h-screen flex flex-col">
      <SEO title="Portfolio — Pentagon Machines & Services" description="Selected precision components and assemblies delivered to off-highway, commercial vehicle, agriculture, and automotive OEMs." />
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
