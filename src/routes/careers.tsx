import { SiteLayout, PageHero } from "@/components/site-layout";
import { Breadcrumb } from "./about";
import { Briefcase, MapPin } from "lucide-react";
import { useState } from "react";
import { company } from "@/content/extrusion";

const ROLES = [
  { t: "Extrusion Machine Service Technician", l: "Pune", type: "Full-time" },
  { t: "Die Head Design Support Engineer", l: "Pune", type: "Full-time" },
  { t: "Spare Parts Coordinator", l: "Pune", type: "Full-time" },
  { t: "Project Sales Executive", l: "Maharashtra", type: "Full-time" },
];

export default function CareersPage() {
  const [submitted, setSubmitted] = useState(false);
  return (
    <SiteLayout>
      <PageHero eyebrow="Careers" title="Build with an extrusion-focused team." subtitle="Join a practical engineering and service culture built around customer requirements, spares and machine support." />
      <Breadcrumb items={[{ to: "/", label: "Home" }, { label: "Careers" }]} />
      <section className="py-12 md:py-16">
        <div className="container-x grid lg:grid-cols-[1.4fr_1fr] gap-10">
          <div>
            <h2 className="text-2xl font-bold text-brand">Open positions</h2>
            <div className="mt-6 space-y-3">
              {ROLES.map((r) => (
                <div key={r.t} className="flex flex-col items-start justify-between gap-3 rounded-xl border border-border bg-card p-5 transition hover:border-safety hover:shadow-md min-[520px]:flex-row min-[520px]:items-center">
                  <div className="min-w-0">
                    <h3 className="font-bold text-brand">{r.t}</h3>
                    <div className="mt-1 flex flex-wrap items-center gap-3 text-sm text-muted-foreground">
                      <span className="flex items-center gap-1"><MapPin className="h-3.5 w-3.5" />{r.l}</span>
                      <span className="flex items-center gap-1"><Briefcase className="h-3.5 w-3.5" />{r.type}</span>
                    </div>
                  </div>
                  <a href="#apply" className="inline-flex w-full items-center justify-center rounded-md bg-brand px-4 py-2 text-sm font-semibold text-brand-foreground hover:opacity-90 min-[520px]:w-auto">Apply</a>
                </div>
              ))}
            </div>
          </div>
          <div id="apply" className="self-start rounded-xl bg-secondary p-5 sm:p-7">
            <h3 className="text-xl font-bold text-brand">Apply online</h3>
            <p className="mt-1 text-sm text-muted-foreground">Send your details and relevant extrusion, machine service or sales experience.</p>
            {submitted ? (
              <div className="mt-6 rounded-lg bg-safety/10 border border-safety/30 p-5 text-brand font-semibold">Thanks, we have received your application.</div>
            ) : (
              <form className="mt-5 space-y-3" onSubmit={(e) => { e.preventDefault(); setSubmitted(true); }}>
                <input required maxLength={100} placeholder="Full name" className="w-full rounded-md border border-border bg-card px-4 py-2.5 text-sm outline-none focus:border-safety" />
                <input required type="email" maxLength={255} placeholder="Email" className="w-full rounded-md border border-border bg-card px-4 py-2.5 text-sm outline-none focus:border-safety" />
                <input required maxLength={20} placeholder="Phone" className="w-full rounded-md border border-border bg-card px-4 py-2.5 text-sm outline-none focus:border-safety" />
                <input required maxLength={150} placeholder="Position applying for" className="w-full rounded-md border border-border bg-card px-4 py-2.5 text-sm outline-none focus:border-safety" />
                <textarea required maxLength={1000} rows={4} placeholder="Brief about your experience" className="w-full rounded-md border border-border bg-card px-4 py-2.5 text-sm outline-none focus:border-safety" />
                <button className="w-full rounded-md bg-safety px-4 py-3 text-sm font-semibold text-safety-foreground hover:brightness-110">Submit application</button>
              </form>
            )}
          </div>
        </div>
      </section>
    </SiteLayout>
  );
}
