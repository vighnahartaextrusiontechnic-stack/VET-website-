import { AppLink as Link } from "@/components/app-link";
import { Cog, Facebook, Linkedin, Mail, MapPin, Phone } from "lucide-react";
import { company } from "@/content/extrusion";

const contactPhones = [company.phone, company.secondaryPhone];

export function SiteFooter() {
  return (
    <footer className="bg-brand-deep text-brand-foreground">
      <div className="container-x grid gap-8 py-12 sm:py-14 md:grid-cols-2 md:gap-10 lg:grid-cols-4 lg:py-16">
        <div>
          <div className="flex items-center gap-2">
            <div className="grid h-10 w-10 place-items-center rounded-md bg-safety text-safety-foreground">
              <Cog className="h-5 w-5" />
            </div>
            <div>
              <div className="font-display font-bold text-lg">{company.shortName}</div>
              <div className="text-[10px] uppercase tracking-widest opacity-70">Enterprise</div>
            </div>
          </div>
          <p className="mt-4 text-sm opacity-80 leading-relaxed">
            {company.tagline} We provide extrusion machine spares, die heads and project support as per customer requirements.
          </p>
          <div className="mt-5 flex gap-3">
            <a
              href="https://www.facebook.com/share/1HjayX9igV/"
              target="_blank"
              rel="noopener noreferrer"
              className="grid h-9 w-9 place-items-center rounded-md bg-white/10 transition hover:bg-safety hover:text-safety-foreground"
              aria-label="Facebook profile"
            >
              <Facebook className="h-4 w-4" />
            </a>
            <a
              href={company.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="grid h-9 w-9 place-items-center rounded-md bg-white/10 transition hover:bg-safety hover:text-safety-foreground"
              aria-label="LinkedIn profile"
            >
              <Linkedin className="h-4 w-4" />
            </a>
          </div>
        </div>
        <div>
          <h4 className="text-sm font-semibold uppercase tracking-wider text-safety">Quick Links</h4>
          <ul className="mt-4 space-y-2 text-sm opacity-90">
            {[["/about","About Us"],["/products","Products"],["/services","Services"],["/industries","Applications"],["/contact","Contact"]].map(([to,l]) => (
              <li key={to}><Link to={to} className="hover:text-safety transition">{l}</Link></li>
            ))}
          </ul>
        </div>
        <div>
          <h4 className="text-sm font-semibold uppercase tracking-wider text-safety">Products</h4>
          <ul className="mt-4 space-y-2 text-sm opacity-90">
            <li>3-layer pipe automatic machine setup</li>
            <li>Conical screw extruders</li>
            <li>Parallel screw extruders</li>
            <li>3-layer die heads</li>
            <li>Extrusion machine spares</li>
            <li>Post-extrusion machine spares</li>
            <li>Calibration support</li>
          </ul>
        </div>
        <div>
          <h4 className="text-sm font-semibold uppercase tracking-wider text-safety">Get In Touch</h4>
          <ul className="mt-4 space-y-3 text-sm opacity-90">
            <li className="flex gap-3"><MapPin className="h-4 w-4 shrink-0 mt-0.5 text-safety" /><span>{company.address}</span></li>
            <li className="flex gap-3">
              <Phone className="h-4 w-4 shrink-0 mt-0.5 text-safety" />
              <span className="space-y-1">
                {contactPhones.map((phone) => (
                  <a key={phone} href={`tel:${phone.replace(/\s/g, "")}`} className="block hover:text-safety">{phone}</a>
                ))}
              </span>
            </li>
            <li className="flex gap-3"><Mail className="h-4 w-4 shrink-0 mt-0.5 text-safety" /><a href={`mailto:${company.email}`} className="hover:text-safety">{company.email}</a></li>
          </ul>
        </div>
      </div>
      <div className="border-t border-white/10">
        <div className="container-x py-5 text-center text-xs opacity-75">
          <p>
            Copyright {new Date().getFullYear()} {company.name}. All rights reserved. Website designed by{" "}
            <a href="https://webakoof.com" target="_blank" rel="noopener" className="font-semibold hover:text-safety">
              Webakoof
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
}
