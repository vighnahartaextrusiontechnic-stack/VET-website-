import { AppLink as Link } from "@/components/app-link";
import type { ComponentProps, ReactNode } from "react";
import { SiteLayout } from "@/components/site-layout";
import heroImg from "@/assets/banner.png";
import aboutImg from "@/assets/about.jpg";
import { aboutCopy, aboutValues, clients, dieHeadModels, machineModels, motto, productHighlights, productLineup2026, screwBarrelSet, supportPromise } from "@/content/extrusion";
import { ArrowRight, CheckCircle2, Cog, Factory, Gauge, Headphones, Settings, ShieldCheck, Wrench, Zap } from "lucide-react";

export default function Index() {
  return (
    <SiteLayout>
      <Hero />
      <Stats />
      <About />
      <Services />
      <Products />
            <NewProductLineup />
      <ModelTables />
      <Clients />
      <WhyUs />
    </SiteLayout>
  );
}

function Hero() {
  return (
    <section className="bg-background">
      <img
        src={heroImg}
        alt="Vighnaharta Enterprise product banner"
        className="block aspect-[2/1] w-full object-contain"
        width={1200}
        height={600}
      />
    </section>
  );
}

function Stats() {
  const stats = [
    { v: "2023", l: "Established" },
    { v: "3 Layer", l: "Pipe Machine Setup" },
    { v: "11", l: "Listed Models" },
    { v: "Custom", l: "Spare Support" },
  ];
  return (
    <section className="bg-brand-deep py-4 text-white sm:py-6">
      <div className="container-x">
        <div className="grid grid-cols-1 overflow-hidden rounded-xl border border-white/10 bg-white/10 shadow-2xl min-[420px]:grid-cols-2 lg:grid-cols-4">
        {stats.map((s) => (
          <div
            key={s.l}
            className="flex min-h-32 flex-col items-center justify-center border-white/10 bg-brand-deep px-5 py-7 text-center transition hover:bg-brand min-[420px]:border-r min-[420px]:last:border-r-0 min-[420px]:nth-[3]:border-r-0 lg:nth-[3]:border-r lg:[&:not(:last-child)]:border-r"
          >
            <div className="font-display text-3xl font-bold leading-none text-safety sm:text-4xl lg:text-5xl">{s.v}</div>
            <div className="mt-3 text-xs font-semibold uppercase tracking-[0.18em] text-white/75 sm:text-sm">{s.l}</div>
          </div>
        ))}
        </div>
      </div>
    </section>
  );
}

function SectionHeader({ eyebrow, title, sub }: { eyebrow: string; title: string; sub?: string }) {
  return (
    <div className="max-w-2xl">
      <p className="text-xs font-semibold uppercase tracking-[0.25em] text-safety">{eyebrow}</p>
      <h2 className="mt-3 text-2xl font-bold text-brand sm:text-3xl md:text-4xl">{title}</h2>
      {sub && <p className="mt-4 text-muted-foreground">{sub}</p>}
    </div>
  );
}

function About() {
  return (
    <section className="py-12 md:py-16">
      <div className="container-x grid gap-8 lg:grid-cols-2 lg:gap-10 items-center">
        <div className="relative">
          <img src={aboutImg} alt="Industrial extrusion workshop" loading="lazy" width={1200} height={800} className="w-full rounded-xl shadow-2xl" />
          <div className="absolute -bottom-6 -right-6 hidden md:block bg-safety text-safety-foreground rounded-xl p-5 shadow-xl max-w-[220px]">
            <div className="font-display text-3xl font-bold">Reliable</div>
            <div className="text-sm font-medium">partner in extrusion machinery and spares</div>
          </div>
        </div>
        <div>
          <SectionHeader eyebrow="About Vighnaharta" title="Committed to quality extrusion support." />
          <p className="mt-4 text-justify text-muted-foreground leading-relaxed">{aboutCopy}</p>
          <p className="mt-4 text-justify text-muted-foreground leading-relaxed">{aboutValues}</p>
          <ul className="mt-6 space-y-3">
            {productHighlights.slice(0, 4).map((t) => (
              <li key={t} className="flex gap-3"><CheckCircle2 className="h-5 w-5 text-safety shrink-0" />{t}</li>
            ))}
          </ul>
          <Link to="/about" className="mt-8 inline-flex items-center gap-2 font-semibold text-brand hover:text-safety">
            Learn more <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </div>
    </section>
  );
}

const SERVICES = [
  { icon: Cog, title: "Machine Project Setup", desc: "Full project support for 3-layer pipe automatic machine setup with material guidance." },
  { icon: Wrench, title: "Extrusion Spares", desc: "Machine spares supplied as per customer requirement for extrusion and post-extrusion lines." },
  { icon: Settings, title: "Die Head Design", desc: "New 3-layer die head designs focused on lower cost, higher efficiency and practical operation." },
  { icon: Gauge, title: "Calibration Support", desc: "Special calibration dimensions and support to stabilize pipe output and quality." },
  { icon: Headphones, title: "Process Troubleshooting", desc: "Discuss process issues with our expert team and get a practical solution for your line." },
  { icon: Zap, title: "Efficiency Improvements", desc: "Support for improving throughput, machine reliability and product consistency." },
];

function Services() {
  return (
    <section className="py-12 md:py-16 bg-secondary">
      <div className="container-x">
        <SectionHeader eyebrow="What We Do" title="Extrusion machinery support from setup to service." sub="We support pipe manufacturers with machines, die heads, spare parts and process guidance." />
        <div className="mt-8 grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {SERVICES.map((s) => (
            <div key={s.title} className="group bg-card border border-border rounded-xl p-6 hover:border-safety hover:shadow-xl hover:-translate-y-1 transition-all">
              <div className="grid h-12 w-12 place-items-center rounded-lg bg-brand text-brand-foreground group-hover:bg-safety group-hover:text-safety-foreground transition">
                <s.icon className="h-6 w-6" />
              </div>
              <h3 className="mt-5 text-lg font-bold text-brand">{s.title}</h3>
              <p className="mt-2 text-sm text-muted-foreground leading-relaxed">{s.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Products() {
  return (
    <section className="py-12 md:py-16">
      <div className="container-x">
        <div className="flex flex-wrap items-end justify-between gap-6">
          <SectionHeader eyebrow="Product Detail" title="3-layer pipe machinery and die heads." sub="The document details extrusion machine models, screw types, outputs, pipe types and die-head ranges." />
          <Link to="/products" className="inline-flex items-center gap-2 font-semibold text-brand hover:text-safety">View product page <ArrowRight className="h-4 w-4" /></Link>
        </div>
        <div className="mt-8 grid md:grid-cols-3 gap-5">
          {[
            { title: "3-Layer Pipe Automatic Machine", desc: "Complete machine setup with material guidance for pipe manufacturing.", icon: Factory },
            { title: "Conical and Parallel Screw Models", desc: "VCTS and VPTS machine models covering CPVC, conduit and PVC pipe needs.", icon: Cog },
            { title: "New Design Die Heads", desc: "VTD die-head models with efficient output and pipe range coverage.", icon: Settings },
          ].map((p) => (
            <Link to="/products" key={p.title} className="group block bg-card border border-border rounded-xl p-6 hover:shadow-2xl transition-all">
              <p.icon className="h-9 w-9 text-safety" />
              <h3 className="mt-5 font-bold text-brand">{p.title}</h3>
              <p className="mt-2 text-sm text-muted-foreground">{p.desc}</p>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}


function NewProductLineup() {
  return (
    <section className="py-12 md:py-16 bg-secondary">
      <div className="container-x">
        <SectionHeader eyebrow="2026 Product Lineup" title="High-quality products focused on lower maintenance cost." sub="The latest document adds new endurance, automation, spare-part and raw-material improvements for pipe manufacturers." />
        <div className="mt-8 grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {productLineup2026.map((item) => (
            <div key={item.title} className="bg-card border border-border rounded-xl p-6 transition hover:border-safety hover:shadow-xl">
              <CheckCircle2 className="h-7 w-7 text-safety" />
              <h3 className="mt-4 font-bold text-brand">{item.title}</h3>
              <p className="mt-2 text-sm text-muted-foreground leading-relaxed">{item.description}</p>
            </div>
          ))}
        </div>
        <div className="mt-8 grid lg:grid-cols-[1fr_1.2fr] gap-6">
          <div className="rounded-xl bg-brand p-7 text-brand-foreground">
            <p className="text-xs font-semibold uppercase tracking-[0.25em] text-safety">Our Motto</p>
            <blockquote className="mt-4 text-xl font-bold leading-snug sm:text-2xl">"{motto}"</blockquote>
            <p className="mt-4 opacity-85">{supportPromise}</p>
          </div>
          <div className="rounded-xl bg-card border border-border p-7">
            <h3 className="text-xl font-bold text-brand">Screw barrel set</h3>
            <div className="mt-5 grid sm:grid-cols-2 gap-4">
              {screwBarrelSet.map((item) => (
                <div key={item.label}>
                  <div className="font-semibold text-brand">{item.label}</div>
                  <p className="mt-1 text-sm text-muted-foreground">{item.detail}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
function ModelTables() {
  return (
    <section className="py-12 md:py-16 bg-secondary">
      <div className="container-x space-y-8">
        <SectionHeader eyebrow="Machine Model Detail" title="Documented extrusion model ranges." />
        <div className="grid lg:grid-cols-2 gap-6">
          <TableCard title="Extrusion Machine Models">
            <thead><tr><th>Model</th><th>Screw Type</th><th>Output</th><th>Pipe Type</th></tr></thead>
            <tbody>{machineModels.map((m) => <tr key={m.model}><td>{m.model}</td><td>{m.screwType}</td><td>{m.output}</td><td>{m.pipeType}</td></tr>)}</tbody>
          </TableCard>
          <TableCard title="New Design Die Heads">
            <thead><tr><th>Model</th><th>Output</th><th>Pipe Range</th></tr></thead>
            <tbody>{dieHeadModels.map((m) => <tr key={m.model}><td>{m.model}</td><td>{m.output}</td><td>{m.pipeRange}</td></tr>)}</tbody>
          </TableCard>
        </div>
      </div>
    </section>
  );
}

function Clients() {
  return (
    <section className="overflow-hidden bg-brand-deep py-12 text-brand-foreground md:py-16">
      <div className="container-x">
        <div className="grid gap-8 lg:grid-cols-[0.85fr_1.15fr] lg:items-end">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.25em] text-safety">
              Our Clients
            </p>
            <h2 className="mt-4 text-2xl font-bold leading-tight sm:text-3xl md:text-4xl">
              Trusted by leading manufacturers.
            </h2>
          </div>
          <div className="grid grid-cols-3 overflow-hidden rounded-xl border border-white/10 bg-white/10">
            {[
              { value: `${clients.length}+`, label: "Client references" },
              { value: "India", label: "Multi-location support" },
              { value: "UAE", label: "International reach" },
            ].map((stat) => (
              <div key={stat.label} className="min-h-28 border-r border-white/10 px-3 py-5 text-center last:border-r-0 sm:px-5">
                <div className="font-display text-2xl font-bold text-safety sm:text-3xl">{stat.value}</div>
                <div className="mt-2 text-[11px] font-semibold uppercase tracking-[0.16em] text-white/65 sm:text-xs">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-8 overflow-hidden rounded-xl border border-white/10 bg-white/[0.04] p-4 shadow-2xl shadow-black/10 sm:p-5">
          <div className="flex flex-wrap items-center justify-between gap-4">
            <h3 className="text-lg font-bold text-white">Trusted customer network</h3>
            <div className="rounded-md bg-safety px-3 py-1.5 text-xs font-bold uppercase tracking-[0.18em] text-safety-foreground">
              {clients.length}+ clients
            </div>
          </div>

          <div className="client-carousel mt-5" aria-label="Client names carousel">
            <div className="client-carousel-track">
              {[0, 1].map((setIndex) => (
                <div key={setIndex} className="client-carousel-group" aria-hidden={setIndex === 1}>
                  {clients.map((client, index) => (
                    <div key={`${client}-${setIndex}-${index}`} className="client-carousel-card">
                      <div className="client-carousel-mark">{clientInitials(client)}</div>
                      <div className="min-w-0">
                        <div className="client-carousel-name">{client}</div>
                        <div className="client-carousel-meta">
                          <ShieldCheck className="h-3.5 w-3.5" /> Client partner
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function clientInitials(name: string) {
  const words = name
    .replace(/[^a-zA-Z0-9 &]/g, " ")
    .split(/\s+/)
    .filter((word) => word.length > 1 && !["and", "pvt", "ltd", "limited", "pipe", "pipes"].includes(word.toLowerCase()));

  return words
    .slice(0, 2)
    .map((word) => word[0])
    .join("")
    .toUpperCase();
}

function TableCard({ title, children }: { title: string; children: ReactNode }) {
  return (
    <div className="bg-card border border-border rounded-xl overflow-hidden shadow-sm">
      <h3 className="px-5 py-4 font-bold text-brand border-b border-border">{title}</h3>
      <div className="overflow-x-auto">
        <table className="w-full text-sm [&_th]:bg-secondary [&_th]:px-4 [&_th]:py-3 [&_th]:text-left [&_th]:font-semibold [&_td]:px-4 [&_td]:py-3 [&_td]:border-t [&_td]:border-border">
          {children}
        </table>
      </div>
    </div>
  );
}

function WhyUs() {
  const items = [
    { icon: AwardIcon, t: "Customer Requirement First", d: "Spares and support are aligned to each customer's machine and process needs." },
    { icon: Settings, t: "Efficient Designs", d: "Die-head designs are introduced for better efficiency and practical cost control." },
    { icon: Headphones, t: "Expert Support", d: "Our team helps resolve extrusion process problems with direct technical guidance." },
    { icon: Factory, t: "Complete Line View", d: "Support covers extrusion and post-extrusion areas, from extruder to tank sections." },
  ];
  return (
    <section className="py-12 md:py-16">
      <div className="container-x">
        <SectionHeader eyebrow="Why Vighnaharta" title="A reliable partner in extrusion." />
        <div className="mt-8 grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {items.map((i) => (
            <div key={i.t} className="border-t-4 border-safety bg-card rounded-b-xl p-6 shadow-sm hover:shadow-xl transition">
              <i.icon className="h-8 w-8 text-brand" />
              <h3 className="mt-4 font-bold text-brand">{i.t}</h3>
              <p className="mt-2 text-sm text-muted-foreground">{i.d}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function AwardIcon(props: ComponentProps<typeof CheckCircle2>) {
  return <CheckCircle2 {...props} />;
}

function ContactCTA() {
  return (
    <section className="relative py-12 md:py-16 bg-brand text-brand-foreground overflow-hidden">
      <div className="container-x relative grid lg:grid-cols-[2fr_1fr] gap-10 items-center">
        <div>
          <h2 className="text-2xl font-bold leading-tight sm:text-3xl md:text-5xl">Need extrusion machine spares or die-head support?</h2>
          <p className="mt-4 max-w-2xl text-base leading-relaxed opacity-85 sm:text-lg">Talk to our team about your machine model, pipe range, output target and process problem.</p>
        </div>
        <div className="flex flex-col gap-3 min-[420px]:flex-row min-[420px]:flex-wrap lg:justify-end">
          <Link to="/contact" className="inline-flex items-center justify-center gap-2 rounded-md bg-safety px-5 py-3.5 font-semibold text-safety-foreground transition hover:brightness-110 sm:px-6">Send Inquiry <ArrowRight className="h-4 w-4" /></Link>
        </div>
      </div>
    </section>
  );
}
