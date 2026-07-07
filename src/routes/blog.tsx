import { AppLink as Link } from "@/components/app-link";
import { SiteLayout, PageHero } from "@/components/site-layout";
import { Breadcrumb } from "./about";
import { Calendar, ArrowRight } from "lucide-react";
import { company } from "@/content/extrusion";

const POSTS = [
  { t: "Choosing the right screw type for pipe extrusion", c: "Machine Selection", d: "Jun 12, 2026", e: "A practical look at conical and parallel screw options for CPVC, conduit and PVC production." },
  { t: "What to share before ordering extrusion spares", c: "Spares", d: "May 28, 2026", e: "Machine model, pipe type, output target and worn-part details help us recommend the right spare." },
  { t: "How die-head design affects output and cost", c: "Die Heads", d: "May 14, 2026", e: "New die-head designs can improve efficiency while keeping the operating cost under control." },
];

export default function BlogPage() {
  return (
    <SiteLayout>
      <PageHero eyebrow="Insights" title="Knowledge from the extrusion line." subtitle="Short notes on machine selection, spares, die heads and process stability." />
      <Breadcrumb items={[{ to: "/", label: "Home" }, { label: "Insights" }]} />
      <section className="py-20">
        <div className="container-x grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {POSTS.map((p) => (
            <article key={p.t} className="bg-card border border-border rounded-xl overflow-hidden hover:shadow-xl transition group">
              <div className="aspect-[16/9] bg-gradient-to-br from-brand via-brand-deep to-safety" />
              <div className="p-6">
                <div className="flex items-center gap-3 text-xs text-muted-foreground">
                  <span className="rounded-full bg-secondary px-2.5 py-1 font-semibold text-brand">{p.c}</span>
                  <span className="flex items-center gap-1"><Calendar className="h-3 w-3" />{p.d}</span>
                </div>
                <h3 className="mt-4 text-lg font-bold text-brand group-hover:text-safety transition">{p.t}</h3>
                <p className="mt-2 text-sm text-muted-foreground">{p.e}</p>
                <Link to="/contact" className="mt-4 inline-flex items-center gap-2 text-sm font-semibold text-brand">Discuss requirement <ArrowRight className="h-4 w-4" /></Link>
              </div>
            </article>
          ))}
        </div>
      </section>
    </SiteLayout>
  );
}

