import { SiteLayout } from "@/components/site-layout";
import { CTAStrip } from "./about";
import industriesBreadcrumbImg from "@/assets/breadcrumb/industries.png";
import { Factory, Gauge, PackageCheck, Settings, Wrench } from "lucide-react";

const SECTORS = [
  { i: Factory, n: "CPVC Pipe", d: "Machine and die-head model support for CPVC pipe production ranges listed in the document." },
  { i: PackageCheck, n: "Conduit Pipe", d: "Conical screw model support for CPVC and conduit pipe applications." },
  { i: Settings, n: "PVC Pipe", d: "Parallel screw extrusion support for PVC pipe output requirements." },
  { i: Wrench, n: "Extrusion Spares", d: "Spares for extrusion and post-extrusion machines as per customer requirements." },
  { i: Gauge, n: "Calibration", d: "Special calibration dimensions and process guidance for stable pipe production." },
  { i: Factory, n: "Extruder and Tank", d: "Support across the extrusion line, including extruder and tank sections mentioned in the document." },
  { i: Settings, n: "Smart Automation", d: "PLC programming and Wi-Fi based online troubleshooting for faster remote support." },
  { i: Wrench, n: "Heavy-Duty Spares", d: "Traction chains, rubber pads and screw barrel sets designed for longer running hours." },
  { i: PackageCheck, n: "Raw Materials", d: "PVC, CPVC and foam core composition support with specialized waxes for high-PHR processes." },
];

export default function IndustriesPage() {
  return (
    <SiteLayout>
      <section className="bg-background">
        <img
          src={industriesBreadcrumbImg}
          alt="Vighnaharta Enterprise industries"
          className="block w-full object-cover"
          width={1920}
          height={500}
        />
      </section>
      <section className="py-20">
        <div className="container-x grid md:grid-cols-2 lg:grid-cols-3 gap-5">
          {SECTORS.map((s) => (
            <div key={s.n} className="bg-card border border-border rounded-xl p-6 hover:border-safety hover:shadow-xl transition">
              <s.i className="h-9 w-9 text-safety" />
              <h3 className="mt-4 font-bold text-brand text-lg">{s.n}</h3>
              <p className="mt-2 text-sm text-muted-foreground">{s.d}</p>
            </div>
          ))}
        </div>
      </section>
      <CTAStrip />
    </SiteLayout>
  );
}
