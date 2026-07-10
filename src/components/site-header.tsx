import { AppLink as Link } from "@/components/app-link";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import quoteImg from "@/assets/popup-img.jpg";
import { useEffect, useState, type FormEvent } from "react";
import { ArrowRight, Cog, Mail, Menu, Phone, Send, X } from "lucide-react";
import { company } from "@/content/extrusion";

const contactPhones = [company.phone, company.secondaryPhone];
const limitPhoneInput = (event: FormEvent<HTMLInputElement>) => {
  event.currentTarget.value = event.currentTarget.value.replace(/\D/g, "").slice(0, 10);
};

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
    <Dialog>
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
          <DialogTrigger
            className="hidden md:inline-flex items-center justify-center rounded-md bg-safety px-4 py-2 text-sm font-semibold text-safety-foreground shadow-sm transition hover:brightness-110"
          >
            Request Quote
          </DialogTrigger>
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
            <DialogTrigger
              onClick={() => setOpen(false)}
              className="mt-2 inline-flex items-center justify-center rounded-md bg-safety px-4 py-2.5 text-sm font-semibold text-safety-foreground"
            >
              Request Quote
            </DialogTrigger>
          </nav>
        </div>
      )}
    </header>
    <QuoteDialogContent />
    </Dialog>
  );
}

function QuoteDialogContent() {
  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    const formData = new FormData(event.currentTarget);
    const name = formData.get("name")?.toString() || "";
    const phone = formData.get("phone")?.toString() || "";
    const email = formData.get("email")?.toString() || "";
    const product = formData.get("product")?.toString() || "";
    const message = formData.get("message")?.toString() || "";
    const body = [
      `Name: ${name}`,
      `Phone: ${phone}`,
      `Email: ${email}`,
      `Requirement: ${product}`,
      "",
      message,
    ].join("\n");

    window.location.href = `mailto:${company.email}?subject=${encodeURIComponent("Website quote request")}&body=${encodeURIComponent(body)}`;
  }

  return (
    <DialogContent className="max-h-[92vh] overflow-y-auto border-0 bg-transparent p-0 shadow-2xl sm:max-w-3xl">
      <div className="grid overflow-hidden rounded-lg border border-brand bg-background shadow-2xl md:grid-cols-[0.95fr_1.05fr]">
        <div className="grid overflow-hidden border-b border-brand bg-brand text-brand-foreground md:border-b-0 md:border-r">
          <img
            src={quoteImg}
            alt="Engineers reviewing extrusion project requirements"
            className="h-48 w-full border-b border-brand object-cover md:h-full md:min-h-56"
          />
          <div className="p-6 sm:p-7">
            <div className="grid h-12 w-12 place-items-center rounded-md bg-safety text-safety-foreground shadow-lg shadow-black/15">
              <Send className="h-5 w-5" />
            </div>
            <DialogHeader className="mt-5 text-left">
              <DialogTitle className="font-display text-2xl font-bold leading-tight text-white">
                Request a Quote
              </DialogTitle>
              <DialogDescription className="text-white/75">
                Share your extrusion machinery or spare requirement and our team will connect with you.
              </DialogDescription>
            </DialogHeader>
            <div className="mt-6 space-y-3 text-sm text-white/82">
              <a href={`tel:${company.phone.replace(/\s/g, "")}`} className="flex items-center gap-3 hover:text-safety">
                <Phone className="h-4 w-4 text-safety" />
                {company.phone}
              </a>
              <a href={`mailto:${company.email}`} className="flex items-start gap-3 text-[13px] leading-relaxed hover:text-safety">
                <Mail className="h-4 w-4 shrink-0 text-safety" />
                {company.email}
              </a>
            </div>
          </div>
        </div>
        <form onSubmit={handleSubmit} className="grid gap-4 bg-background p-6 sm:p-7">
          <div className="grid gap-4 sm:grid-cols-2 sm:gap-5">
            <label className="grid gap-1.5 text-sm font-semibold text-brand">
              Name
              <input required name="name" maxLength={80} className="min-w-0 rounded-md border border-border bg-background px-3 py-2.5 text-sm font-normal text-foreground outline-none transition focus:border-safety focus:ring-2 focus:ring-safety/20" />
            </label>
            <label className="grid gap-1.5 text-sm font-semibold text-brand">
              Phone
              <input required type="tel" name="phone" inputMode="numeric" pattern="[0-9]{10}" maxLength={10} onInput={limitPhoneInput} className="min-w-0 rounded-md border border-border bg-background px-3 py-2.5 text-sm font-normal text-foreground outline-none transition focus:border-safety focus:ring-2 focus:ring-safety/20" />
            </label>
          </div>
          <label className="grid gap-1.5 text-sm font-semibold text-brand">
            Email
            <input required type="email" name="email" maxLength={120} className="rounded-md border border-border bg-background px-3 py-2.5 text-sm font-normal text-foreground outline-none transition focus:border-safety focus:ring-2 focus:ring-safety/20" />
          </label>
          <label className="grid gap-1.5 text-sm font-semibold text-brand">
            Requirement
            <select name="product" className="rounded-md border border-border bg-background px-3 py-2.5 text-sm font-normal text-foreground outline-none transition focus:border-safety focus:ring-2 focus:ring-safety/20">
              <option>3-layer pipe machine setup</option>
              <option>Die head</option>
              <option>Extrusion machine spare</option>
              <option>Screw barrel set</option>
              <option>Panel modification</option>
              <option>Other requirement</option>
            </select>
          </label>
          <label className="grid gap-1.5 text-sm font-semibold text-brand">
            Message
            <textarea name="message" rows={4} maxLength={600} className="resize-none rounded-md border border-border bg-background px-3 py-2.5 text-sm font-normal text-foreground outline-none transition focus:border-safety focus:ring-2 focus:ring-safety/20" placeholder="Tell us pipe size, machine type, spare details or project requirement." />
          </label>
          <button type="submit" className="inline-flex items-center justify-center gap-2 rounded-md bg-safety px-5 py-3 text-sm font-bold text-safety-foreground shadow-sm transition hover:brightness-110">
            Send Request <ArrowRight className="h-4 w-4" />
          </button>
        </form>
      </div>
    </DialogContent>
  );
}
