import { SiteLayout } from "@/components/site-layout";
import { CTAStrip } from "./about";
import servicesBreadcrumbImg from "@/assets/breadcrumb/services.png";
import { Cog, Gauge, Headphones, Settings, Wrench, Zap } from "lucide-react";
import { productLineup2026 } from "@/content/extrusion";

const SVCS = [
  { i: Cog, t: "3-Layer Project Setup", d: "Complete support for 3-layer pipe automatic machine setup with material guidance.", bullets: ["Machine setup planning", "Material guidance", "Pipe line support"] },
  { i: Wrench, t: "Extrusion Machine Spares", d: "Spares supplied as per customer requirement for extrusion and post-extrusion machines.", bullets: ["Custom spare requirements", "Extruder section support", "Tank section support"] },
  { i: Settings, t: "Die Head Solutions", d: "New 3-layer die head designs introduced for lower cost and higher efficiency.", bullets: ["VTD model range", "Efficient design", "Pipe range support"] },
  { i: Gauge, t: "Calibration Dimensions", d: "Special dimensions and practical support for calibration and process stability.", bullets: ["Calibration guidance", "Pipe quality support", "Output improvement"] },
  { i: Headphones, t: "Process Problem Support", d: "Talk to our expert team about process problems and receive a focused solution.", bullets: ["Troubleshooting", "Machine discussion", "Practical recommendations"] },
  { i: Zap, t: "Efficiency Improvement", d: "Support aimed at improving output, consistency and operating cost for pipe production.", bullets: ["Higher efficiency", "Lower cost focus", "Reliable operation"] },
];

export default function ServicesPage() {
  return (
    <SiteLayout>
      <section className="bg-background">
        <img
          src={servicesBreadcrumbImg}
          alt="Vighnaharta Enterprise services"
          className="block w-full object-cover"
          width={1920}
          height={500}
        />
      </section>
      <section className="py-12 md:py-16">
        <div className="container-x grid md:grid-cols-2 gap-6">
          {SVCS.map((s) => (
            <div key={s.t} className="bg-card border border-border rounded-xl p-7 hover:shadow-xl hover:-translate-y-1 transition">
              <div className="grid h-12 w-12 place-items-center rounded-lg bg-brand text-brand-foreground"><s.i className="h-6 w-6" /></div>
              <h3 className="mt-5 text-xl font-bold text-brand">{s.t}</h3>
              <p className="mt-2 text-muted-foreground">{s.d}</p>
              <ul className="mt-4 space-y-1.5 text-sm">
                {s.bullets.map((b) => <li key={b} className="flex gap-2 text-foreground/80"><span className="text-safety">-</span>{b}</li>)}
              </ul>
            </div>
          ))}
        </div>
      </section>
      <section className="py-12 md:py-16 bg-secondary">
        <div className="container-x">
          <p className="text-xs font-semibold uppercase tracking-[0.25em] text-safety">Additional 2026 Services</p>
          <h2 className="mt-3 text-3xl md:text-4xl font-bold text-brand">Plant improvement and support additions.</h2>
          <div className="mt-8 grid md:grid-cols-2 lg:grid-cols-3 gap-5">
            {productLineup2026.filter((item) => ["Smart Automation & Remote Support", "Efficiency Tools", "Panel Modification", "Advanced Raw Materials"].includes(item.title)).map((item) => (
              <div key={item.title} className="bg-card border border-border rounded-xl p-6 last:lg:col-start-2">
                <h3 className="font-bold text-brand">{item.title}</h3>
                <p className="mt-2 text-sm text-muted-foreground">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
      <CTAStrip />
    </SiteLayout>
  );
}
