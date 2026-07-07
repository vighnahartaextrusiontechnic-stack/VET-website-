import { SiteLayout, PageHero } from "@/components/site-layout";
import { Breadcrumb, CTAStrip } from "./about";
import { TrendingUp } from "lucide-react";
import { company } from "@/content/extrusion";

const STUDIES = [
  { tag: "Machine Setup", t: "3-layer pipe automatic machine support", c: "Project support for machine setup with material guidance.", m: ["Setup planning", "Material discussion", "Output-focused configuration"] },
  { tag: "Die Head", t: "New design VTD die-head selection", c: "Model selection based on output and pipe range requirements.", m: ["VTD-12 to VTD-40 range", "Cost-aware design", "Efficiency focus"] },
  { tag: "Spares", t: "Extrusion and post-extrusion spare supply", c: "Spares supplied according to customer machine requirements.", m: ["Extruder support", "Tank support", "Custom spare discussion"] },
  { tag: "Process", t: "Calibration and troubleshooting", c: "Expert team support for process problems and calibration dimensions.", m: ["Pipe range review", "Process issue discussion", "Practical solution guidance"] },
];

export default function CaseStudiesPage() {
  return (
    <SiteLayout>
      <PageHero eyebrow="Project Support" title="Extrusion support areas we handle." subtitle="Machine setup, die heads, spares and process support based on the document's product scope." />
      <Breadcrumb items={[{ to: "/", label: "Home" }, { label: "Project Support" }]} />
      <section className="py-20">
        <div className="container-x grid md:grid-cols-2 gap-6">
          {STUDIES.map((s) => (
            <article key={s.t} className="bg-card border border-border rounded-xl p-7 hover:shadow-xl transition">
              <span className="inline-block rounded-full bg-brand/10 px-3 py-1 text-xs font-semibold text-brand">{s.tag}</span>
              <h3 className="mt-4 text-xl font-bold text-brand">{s.t}</h3>
              <p className="mt-3 text-muted-foreground">{s.c}</p>
              <div className="mt-5 grid gap-2">
                {s.m.map((x) => (
                  <div key={x} className="flex gap-3 text-sm"><TrendingUp className="h-4 w-4 text-safety mt-0.5 shrink-0" />{x}</div>
                ))}
              </div>
            </article>
          ))}
        </div>
      </section>
      <CTAStrip />
    </SiteLayout>
  );
}

