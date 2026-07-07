import whatsappIcon from "@/assets/whatsapp icon.png";
import { company } from "@/content/extrusion";
import { Download } from "lucide-react";

export function FloatingActions() {
  const phone = company.phone.replace(/\s/g, "");
  const brochureHref = "/vighnaharta-enterprise-profile.pdf";

  return (
    <div className="fixed bottom-4 right-4 z-40 flex flex-col gap-2 sm:bottom-5 sm:right-5 sm:gap-3">
      <a
        href={`https://wa.me/${phone.replace("+", "")}`}
        target="_blank"
        rel="noopener"
        aria-label="Chat on WhatsApp"
        className="grid h-11 w-11 place-items-center overflow-hidden rounded-full transition hover:scale-110 sm:h-12 sm:w-12"
      >
        <img src={whatsappIcon} alt="" className="h-11 w-11 object-contain sm:h-12 sm:w-12" />
      </a>
      <a
        href={brochureHref}
        download="vighnaharta-enterprise-profile.pdf"
        aria-label="Download brochure"
        title="Download brochure"
        className="grid h-11 w-11 place-items-center rounded-full bg-safety text-safety-foreground shadow-lg transition hover:scale-110 sm:h-12 sm:w-12"
      >
        <Download className="h-5 w-5" />
      </a>
    </div>
  );
}
