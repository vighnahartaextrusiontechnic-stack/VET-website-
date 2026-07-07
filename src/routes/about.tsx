import { AppLink as Link } from "@/components/app-link";
import { SiteLayout } from "@/components/site-layout";
import aboutBreadcrumbImg from "@/assets/breadcrumb/about us.png";
import machineImg from "@/assets/extrusion-machine.jpeg";
import { aboutCopy, aboutValues, partnerMessage, productHighlights, supportPromise } from "@/content/extrusion";
import { ArrowRight, CheckCircle2, Lightbulb, Target, Users, Wrench } from "lucide-react";

export default function AboutPage() {
  return (
    <SiteLayout>
      <section className="bg-background">
        <img
          src={aboutBreadcrumbImg}
          alt="About Vighnaharta Enterprise"
          className="block w-full object-cover"
          width={1920}
          height={500}
        />
      </section>
      <section className="py-20">
        <div className="container-x grid lg:grid-cols-2 gap-12 items-center">
          <div className="overflow-hidden rounded-xl border border-border bg-white p-1 shadow-2xl sm:p-2">
            <img
              src={machineImg}
              alt="Extrusion machinery"
              loading="lazy"
              width={1200}
              height={800}
              className="aspect-[2/1] w-full scale-x-[-1] scale-115 object-contain"
            />
          </div>
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.25em] text-safety">Our Story</p>
            <h2 className="mt-3 text-2xl font-bold text-brand sm:text-3xl md:text-4xl">Committed to best quality and professional service.</h2>
            <p className="mt-5 text-justify text-muted-foreground leading-relaxed">{aboutCopy}</p>
            <p className="mt-4 text-justify text-muted-foreground leading-relaxed">{aboutValues}</p>
          </div>
        </div>
      </section>

      <section className="py-20 bg-secondary">
        <div className="container-x grid lg:grid-cols-[0.8fr_1.2fr] gap-10 items-start">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.25em] text-safety">Dear Valued Partner</p>
            <h2 className="mt-3 text-2xl font-bold text-brand sm:text-3xl md:text-4xl">A message for pipe industry partners.</h2>
          </div>
          <div className="space-y-4 text-justify text-muted-foreground leading-relaxed">
            {partnerMessage.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}
            <p className="font-semibold text-brand">{supportPromise}</p>
          </div>
        </div>
      </section>

      <section className="py-20">
        <div className="container-x grid md:grid-cols-2 gap-6">
          {[
            { i: Target, t: "Our Commitment", d: "To provide quality extrusion machine spares and project support according to each customer's requirement." },
            { i: Lightbulb, t: "Our Approach", d: "To combine responsibility, innovation and teamwork so clients receive timely, practical and cost-aware solutions." },
          ].map((x) => (
            <div key={x.t} className="bg-card border border-border rounded-xl p-6 sm:p-8">
              <x.i className="h-10 w-10 text-safety" />
              <h3 className="mt-4 text-2xl font-bold text-brand">{x.t}</h3>
              <p className="mt-3 text-muted-foreground">{x.d}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="py-20 bg-secondary">
        <div className="container-x">
          <p className="text-xs font-semibold uppercase tracking-[0.25em] text-safety">Core Competence</p>
          <h2 className="mt-3 text-2xl font-bold text-brand sm:text-3xl md:text-4xl">What the documents define for the company</h2>
          <div className="mt-12 grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {productHighlights.map((item) => (
              <div key={item} className="rounded-xl bg-card border border-border p-6">
                <CheckCircle2 className="h-8 w-8 text-safety" />
                <p className="mt-4 text-sm text-muted-foreground">{item}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20">
        <div className="container-x grid md:grid-cols-3 gap-6">
          {[
            { i: Wrench, t: "Spares", d: "Extrusion and post-extrusion machine spares supplied as per requirement." },
            { i: Users, t: "Customer Focus", d: "A team culture built to respond to client needs one step ahead." },
            { i: CheckCircle2, t: "Reliable Partner", d: "Support for machine selection, die heads, calibration, automation and process problems." },
          ].map((x) => (
            <div key={x.t} className="rounded-xl bg-card border border-border p-6">
              <x.i className="h-8 w-8 text-safety" />
              <h3 className="mt-4 font-bold text-brand">{x.t}</h3>
              <p className="mt-2 text-sm text-muted-foreground">{x.d}</p>
            </div>
          ))}
        </div>
      </section>

      <CTAStrip />
    </SiteLayout>
  );
}

export function Breadcrumb({ items }: { items: Array<{ to?: string; label: string }> }) {
  return (
    <nav className="border-b border-border bg-secondary/50">
      <div className="container-x py-3 text-sm text-muted-foreground flex flex-wrap gap-2">
        {items.map((b, i) => (
          <span key={i} className="flex items-center gap-2">
            {b.to ? <Link to={b.to} className="hover:text-brand">{b.label}</Link> : <span className="text-brand font-medium">{b.label}</span>}
            {i < items.length - 1 && <span>/</span>}
          </span>
        ))}
      </div>
    </nav>
  );
}

export function CTAStrip() {
  return (
    <section className="bg-brand text-brand-foreground">
      <div className="container-x flex flex-col items-start justify-between gap-6 py-10 sm:py-12 md:flex-row md:items-center md:py-14">
        <div className="min-w-0">
          <h3 className="text-xl font-bold sm:text-2xl md:text-3xl">Talk to us about your extrusion process</h3>
          <p className="opacity-80 mt-1">Share your machine model, output target, pipe range, plant modification or spare requirement.</p>
        </div>
        <Link to="/contact" className="inline-flex w-full items-center justify-center gap-2 rounded-md bg-safety px-5 py-3 font-semibold text-safety-foreground min-[420px]:w-auto sm:px-6">
          Get in touch <ArrowRight className="h-4 w-4" />
        </Link>
      </div>
    </section>
  );
}
