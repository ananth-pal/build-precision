import { useState } from "react";
import { ArrowRight, RefreshCw } from "lucide-react";
import { Link } from "react-router-dom";
import SiteHeader from "@/components/SiteHeader";
import SiteFooter from "@/components/SiteFooter";
import PageHero from "@/components/PageHero";
import ImagePlaceholder from "@/components/ImagePlaceholder";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Table, TableBody, TableCell, TableRow } from "@/components/ui/table";
import { Button } from "@/components/ui/button";


const qualityRows: [string, string][] = [
  ["Calibration", "Traceable to national standards, performed in-house and with external specialists where needed"],
  
  ["Drawing control", "Revision-controlled through a PLM system"],
  ["Material traceability", "Incoming inspection through dispatch; outside-processed items re-inspected on return"],
  ["Reports", "First article, dimensional, and process records included with product as the job requires"],
  ["Non-conformances", "Contained, and closed with corrective action"],
];

const materialsEstablished = [
  "Carbon, alloy and tool steels, including case-hardening, nitriding, and through hardening grades",
  "Gray iron and ductile iron",
  "Wrought aluminium and cast aluminium",
  "Cast steel",
];

const materialsCapable = [
  "Stainless steels",
  
  "Titanium",
  "Inconel",
  "PEEK, POM",
  "Brass, copper",
];

export default function Machining() {
  
  const [materialsVersion, setMaterialsVersion] = useState<1 | 2>(1);
  return (
    <div className="min-h-screen flex flex-col">
      <SiteHeader />
      <PageHero title="Machining" subtitle="Technically demanding machined components and housings. Suited to parts where process definition and repeat consistency are required." />
      <main className="flex-1 section-padding">
        <div className="max-w-6xl mx-auto space-y-6">
          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-card border border-border rounded-lg p-8 shadow-sm">
              <h3 className="text-lg font-semibold mb-4">Batch Sizes</h3>
              <p className="text-base text-muted-foreground leading-relaxed">
                We are best suited to machined parts with enough repeat demand to recover setup cost and enough technical complexity to justify careful process definition. The operation is optimized for high-mix, low-to-medium-volume work, which remains our specialty.
              </p>
            </div>

            <div className="bg-card border border-border rounded-lg p-8 shadow-sm">
              <h3 className="text-lg font-semibold mb-4">Design Consulting Services</h3>
              <p className="text-base text-muted-foreground leading-relaxed">
                Design consulting is most useful before a part is released to production. We review tolerances, material choice, datum strategy, clamping, and other features that drive machining cost or process instability. This helps reduce avoidable complexity and supports a clean transition from development into repeat production. For early-stage customers, this can also be offered as a separate project phase. SolidWorks CAD and 3D printing are used to support design review and visual prototyping.
              </p>
            </div>


            <div className="bg-card border border-border rounded-lg p-8 shadow-sm">
              <h3 className="text-lg font-semibold mb-4">Sourcing and Logistics</h3>
              <p className="text-base text-muted-foreground leading-relaxed">
                We maintain decades-long relationships with key vendors certified for castings, forgings, heat treatment, and raw materials from India and abroad to meet customers' desired quality. Incoming goods inspection, traceability, and controlled storage, support stable production, while packing, labeling, and dispatch ensure parts arrive in the required condition and with the required traceability and documentation. Parts are shipped worldwide.
              </p>
            </div>

            <div className="bg-card border border-border rounded-lg p-8 shadow-sm">
              <h3 className="text-lg font-semibold mb-4">Engineering and Quality</h3>
              <div className="space-y-4">
                <p className="text-base text-muted-foreground leading-relaxed">
                  Our quality management system is certified to ISO 9001:2015. Measurement covers dimensional inspection, form and geometry, surface finish, and gear metrology.
                </p>
                <Dialog>
                  <DialogTrigger asChild>
                    <Button variant="outline" size="sm">View engineering and quality details</Button>
                  </DialogTrigger>
                  <DialogContent className="max-w-2xl">
                    <DialogHeader>
                      <DialogTitle>Engineering and Quality</DialogTitle>
                    </DialogHeader>
                    <Table>
                      <TableBody>
                        {qualityRows.map(([item, detail]) => (
                          <TableRow key={item}>
                            <TableCell className="font-medium align-top w-1/3">{item}</TableCell>
                            <TableCell className="text-muted-foreground">{detail}</TableCell>
                          </TableRow>
                        ))}
                      </TableBody>
                    </Table>
                  </DialogContent>
                </Dialog>
                <p className="text-base text-muted-foreground leading-relaxed">
                  See{" "}
                  <Link to="/technologies#measurement-metrology" className="text-primary font-medium hover:underline">
                    Measurement &amp; Metrology
                  </Link>{" "}
                  for the full process list.
                </p>
              </div>
            </div>

            <div className="bg-card border border-border rounded-lg p-8 shadow-sm">
              <h3 className="text-lg font-semibold mb-4">Machine Tools</h3>
              <p className="text-base text-muted-foreground leading-relaxed">
                Turning, milling, boring, grinding, gear cutting, and finishing processes are carried out in-house on machines operated and maintained by a team with a machine-tool-building background. Machines are kept to original accuracy through in-house maintenance.
              </p>
              <p className="text-base text-muted-foreground leading-relaxed mt-4">
                See{" "}
                <Link to="/technologies#machine-tools" className="text-primary font-medium hover:underline">
                  Machine Tools
                </Link>{" "}
                for the full list of processes.
              </p>
            </div>


            <div className="bg-card border border-border rounded-lg p-8 shadow-sm">
              <ImagePlaceholder
                ratio="aspect-[4/3]"
                caption="Raw blank beside finished part — casting/forging/bar next to the machined component"
                className="mb-4"
              />
              <h3 className="text-lg font-semibold mb-4 flex items-center gap-2">
                Materials
                <button
                  type="button"
                  onClick={() => setMaterialsVersion((v) => (v === 1 ? 2 : 1))}
                  aria-label="Toggle version"
                  className="inline-flex items-center gap-1 text-muted-foreground hover:text-foreground transition-colors"
                >
                  <RefreshCw className="h-3.5 w-3.5" />
                  <span className="text-xs font-normal opacity-70">v{materialsVersion}</span>
                </button>
              </h3>
              {materialsVersion === 1 ? (
                <div className="space-y-4">
                  <p className="text-base text-muted-foreground leading-relaxed">
                    Established materials and additional materials within machine capability. See table for the full list.
                  </p>
                  <Dialog>
                    <DialogTrigger asChild>
                      <Button variant="outline" size="sm">View materials</Button>
                    </DialogTrigger>
                    <DialogContent className="max-w-3xl">
                      <DialogHeader>
                        <DialogTitle>Materials</DialogTitle>
                      </DialogHeader>
                      <div className="space-y-6">
                        <div>
                          <p className="text-sm font-medium mb-2">Established materials, with tooling, process definition, and repeat experience in place:</p>
                          <ul className="list-disc pl-5 space-y-1 text-sm text-muted-foreground">
                            {materialsEstablished.map((m) => (
                              <li key={m}>{m}</li>
                            ))}
                          </ul>
                        </div>
                        <div>
                          <p className="text-sm font-medium mb-2">Within machine capability, taken on where tooling can be specified and procured for the job:</p>
                          <ul className="list-disc pl-5 space-y-1 text-sm text-muted-foreground">
                            {materialsCapable.map((m) => (
                              <li key={m}>{m}</li>
                            ))}
                          </ul>
                        </div>
                        <p className="text-sm text-muted-foreground">Stock is accepted as bar, plate, castings, or forgings.</p>
                      </div>
                    </DialogContent>
                  </Dialog>
                </div>
              ) : (
                <p className="text-base text-muted-foreground leading-relaxed">
                  Materials worked regularly include carbon, alloy and tool steels — including case-hardening, nitriding, and through hardening grades — cast steel, gray and ductile iron, wrought aluminium, and cast aluminium. Tooling, process definition, and repeat experience are established for these materials. Stainless steels, titanium, Inconel, PEEK, POM, brass, and copper are within the machines' capability and are taken on where tooling can be specified and procured for the job. Stock is accepted as bar, plate, castings, or forgings.
                </p>
              )}
            </div>
          </div>

          <ImagePlaceholder
            ratio="aspect-[21/9]"
            caption="Machining in action — spindle engaging the part, chips or coolant visible. Wide establishing shot."
            className="my-2"
          />

          <Link to="/technologies" className="text-primary text-sm font-medium inline-flex items-center gap-1 hover:gap-2 transition-all">
            See the equipment and processes behind this capability <ArrowRight size={14} />
          </Link>
        </div>
      </main>
      <SiteFooter />
    </div>
  );
}
