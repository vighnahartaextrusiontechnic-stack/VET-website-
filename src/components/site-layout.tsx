import { type ReactNode } from "react";
import { SiteHeader } from "./site-header";
import { SiteFooter } from "./site-footer";
import { FloatingActions } from "./floating-actions";

export function SiteLayout({ children }: { children: ReactNode }) {
  return (
    <div className="flex min-h-screen min-w-0 flex-col overflow-x-clip">
      <SiteHeader />
      <main className="min-w-0 flex-1">{children}</main>
      <SiteFooter />
      <FloatingActions />
    </div>
  );
}

export function PageHero({ eyebrow, title, subtitle }: { eyebrow?: string; title: string; subtitle?: string }) {
  return (
    <section className="relative bg-brand text-brand-foreground overflow-hidden">
      <div className="absolute inset-0 opacity-30 [background:radial-gradient(circle_at_20%_20%,oklch(0.72_0.19_48/.5),transparent_45%),radial-gradient(circle_at_80%_60%,oklch(0.5_0.2_260/.6),transparent_50%)]" />
      <div className="container-x relative py-10 sm:py-12 md:py-16">
        {eyebrow && <p className="text-xs font-semibold uppercase tracking-[0.25em] text-safety">{eyebrow}</p>}
        <h1 className="mt-3 max-w-3xl text-3xl font-bold leading-tight sm:text-4xl md:text-5xl lg:text-6xl">{title}</h1>
        {subtitle && <p className="mt-5 max-w-2xl text-base leading-relaxed opacity-85 sm:text-lg">{subtitle}</p>}
      </div>
    </section>
  );
}
