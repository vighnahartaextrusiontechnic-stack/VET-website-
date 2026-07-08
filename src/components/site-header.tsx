import { AppLink as Link } from "@/components/app-link";
import { useEffect, useState } from "react";
import { Cog, Menu, Phone, X } from "lucide-react";
import { company } from "@/content/extrusion";

const contactPhones = [company.phone, company.secondaryPhone];

const nav = [
  { to: "/", label: "Home" },
  { to: "/about", label: "About" },
  { to: "/products", label: "Products" },
  { to: "/services", label: "Services" },
  { to: "/industries", label: "Industries" },
  { to: "/contact", label: "Contact" },
] as const;

export function SiteHeader() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`sticky top-0 z-50 transition-all ${
        scrolled
          ? "bg-background/95 backdrop-blur border-b border-border shadow-sm"
          : "bg-background/70 backdrop-blur"
      }`}
    >
      <div className="bg-brand text-brand-foreground text-xs">
        <div className="container-x flex min-h-9 flex-wrap items-center justify-center gap-x-4 gap-y-1 py-1 text-center sm:justify-between">
          <span className="hidden max-w-[60ch] sm:inline opacity-80">Extrusion machine spares, die heads and complete pipe line project support</span>
          <div className="flex flex-wrap items-center justify-center gap-x-3 gap-y-1 sm:justify-end">
            {contactPhones.map((phone) => (
              <a key={phone} href={`tel:${phone.replace(/\s/g, "")}`} className="flex items-center gap-2 font-medium hover:text-safety">
                <Phone className="h-3.5 w-3.5" /> {phone}
              </a>
            ))}
          </div>
        </div>
      </div>
      <div className="container-x flex min-h-16 items-center justify-between gap-3 py-2 sm:gap-4">
        <Link to="/" className="flex items-center gap-2 min-w-0">
          <div className="grid h-10 w-10 shrink-0 place-items-center rounded-md bg-brand text-brand-foreground">
            <Cog className="h-5 w-5" />
          </div>
          <div className="min-w-0 leading-tight">
            <div className="max-w-[11rem] truncate font-display font-bold text-brand sm:max-w-none">{company.shortName}</div>
            <div className="text-[10px] uppercase tracking-widest text-muted-foreground">Enterprise</div>
          </div>
        </Link>
        <nav className="hidden lg:flex items-center gap-1">
          {nav.map((n) => (
            <Link
              key={n.to}
              to={n.to}
              activeOptions={{ exact: n.to === "/" }}
              activeProps={{ className: "text-brand bg-secondary" }}
              className="px-3 py-2 text-sm font-medium text-foreground/80 rounded-md hover:text-brand hover:bg-secondary transition"
            >
              {n.label}
            </Link>
          ))}
        </nav>
        <div className="flex items-center gap-2">
          <Link
            to="/contact"
            className="hidden md:inline-flex items-center justify-center rounded-md bg-safety px-4 py-2 text-sm font-semibold text-safety-foreground hover:brightness-110 transition shadow-sm"
          >
            Request Quote
          </Link>
          <button
            onClick={() => setOpen((v) => !v)}
            className="lg:hidden inline-flex items-center justify-center rounded-md p-2 text-brand hover:bg-secondary"
            aria-label="Toggle menu"
          >
            {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </div>
      {open && (
        <div className="lg:hidden border-t border-border bg-background animate-fade-in">
          <nav className="container-x flex flex-col py-3">
            {nav.map((n) => (
              <Link
                key={n.to}
                to={n.to}
                onClick={() => setOpen(false)}
                activeOptions={{ exact: n.to === "/" }}
                activeProps={{ className: "text-brand" }}
                className="py-2.5 text-sm font-medium text-foreground/80"
              >
                {n.label}
              </Link>
            ))}
            <Link
              to="/contact"
              onClick={() => setOpen(false)}
              className="mt-2 inline-flex items-center justify-center rounded-md bg-safety px-4 py-2.5 text-sm font-semibold text-safety-foreground"
            >
              Request Quote
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
}
