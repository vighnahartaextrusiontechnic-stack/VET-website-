import { SiteLayout } from "@/components/site-layout";
import contactBreadcrumbImg from "@/assets/breadcrumb/contact.png";
import { AlertTriangle, Clock, Linkedin, Mail, MapPin, Phone } from "lucide-react";
import { useState, type FormEvent } from "react";
import { company } from "@/content/extrusion";

const contactPhones = [company.phone, company.secondaryPhone];
const WEB3FORMS_ACCESS_KEY = "2cf966b8-f4d7-405b-b886-7925c5a71340";

const limitPhoneInput = (event: FormEvent<HTMLInputElement>) => {
  event.currentTarget.value = event.currentTarget.value.replace(/\D/g, "").slice(0, 10);
};

export default function ContactPage() {
  const [sent, setSent] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState("");

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setError("");
    setIsSubmitting(true);

    const form = event.currentTarget;
    const formData = new FormData(form);

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData,
      });
      const result = (await response.json()) as { success?: boolean; message?: string };

      if (!response.ok || !result.success) {
        throw new Error(result.message || "Unable to send inquiry right now.");
      }

      form.reset();
      setSent(true);
    } catch (submitError) {
      setError(submitError instanceof Error ? submitError.message : "Unable to send inquiry right now.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <SiteLayout>
      <section className="bg-background">
        <img
          src={contactBreadcrumbImg}
          alt="Contact Vighnaharta Enterprise"
          className="block w-full object-cover"
          width={1920}
          height={500}
        />
      </section>

      <section className="py-12 md:py-16">
        <div className="container-x grid lg:grid-cols-[1.3fr_1fr] gap-10">
          <div className="bg-card border border-border rounded-xl p-5 shadow-sm sm:p-7">
            <h2 className="text-2xl font-bold text-brand">Send us an inquiry</h2>
            {sent ? (
              <div className="mt-6 rounded-lg bg-safety/10 border border-safety/30 p-6">
                <h3 className="font-bold text-brand">Thank you, message received.</h3>
                <p className="mt-1 text-sm text-muted-foreground">Our team will review your extrusion requirement and contact you soon.</p>
              </div>
            ) : (
              <form className="mt-5 grid grid-cols-1 gap-3 sm:grid-cols-2" onSubmit={handleSubmit}>
                <input type="hidden" name="access_key" value={WEB3FORMS_ACCESS_KEY} />
                <input type="hidden" name="subject" value="New website inquiry from Vighnaharta Enterprise" />
                <input type="hidden" name="from_name" value="Vighnaharta Enterprise Website" />
                <input type="checkbox" name="botcheck" className="hidden" tabIndex={-1} autoComplete="off" />
                <input name="name" required maxLength={100} placeholder="Full name *" className="rounded-md border border-border bg-background px-4 py-2.5 text-sm outline-none focus:border-safety" />
                <input name="company" maxLength={150} placeholder="Company" className="rounded-md border border-border bg-background px-4 py-2.5 text-sm outline-none focus:border-safety" />
                <input name="email" required type="email" maxLength={255} placeholder="Email *" className="rounded-md border border-border bg-background px-4 py-2.5 text-sm outline-none focus:border-safety" />
                <input name="phone" required type="tel" inputMode="numeric" pattern="[0-9]{10}" maxLength={10} onInput={limitPhoneInput} placeholder="Phone *" className="rounded-md border border-border bg-background px-4 py-2.5 text-sm outline-none focus:border-safety" />
                <select name="interest" className="sm:col-span-2 rounded-md border border-border bg-background px-4 py-2.5 text-sm" defaultValue="">
                  <option value="">I am interested in (select)</option>
                  <option>3-layer pipe automatic machine setup</option>
                  <option>Extrusion machine spares</option>
                  <option>Post-extrusion machine spares</option>
                  <option>VTD die head</option>
                  <option>Calibration support</option>
                  <option>Process troubleshooting</option>
                  <option>High-endurance die heads</option>
                  <option>Screw barrel set</option>
                  <option>Heavy-duty traction chains and rubber pads</option>
                  <option>Smart PLC automation and remote support</option>
                  <option>Panel modification</option>
                  <option>Raw material and wax composition support</option>
                </select>
                <textarea name="message" required maxLength={1000} rows={4} placeholder="Tell us your model, pipe type, output target or process problem *" className="sm:col-span-2 rounded-md border border-border bg-background px-4 py-2.5 text-sm outline-none focus:border-safety" />
                {error ? <p className="sm:col-span-2 rounded-md border border-destructive/30 bg-destructive/10 px-4 py-2 text-sm text-destructive">{error}</p> : null}
                <button disabled={isSubmitting} className="sm:col-span-2 rounded-md bg-safety px-4 py-3 text-sm font-semibold text-safety-foreground hover:brightness-110 disabled:cursor-not-allowed disabled:opacity-70">
                  {isSubmitting ? "Sending..." : "Send inquiry"}
                </button>
              </form>
            )}
          </div>

          <div className="space-y-4">
            <div className="bg-card border border-border rounded-xl p-6">
              <h3 className="font-bold text-brand">Office</h3>
              <ul className="mt-3 space-y-3 text-sm text-muted-foreground">
                <li className="flex gap-3"><MapPin className="h-4 w-4 text-safety mt-0.5 shrink-0" />{company.address}</li>
                <li className="flex gap-3">
                  <Phone className="h-4 w-4 text-safety mt-0.5 shrink-0" />
                  <span className="space-y-1">
                    {contactPhones.map((phone) => (
                      <a key={phone} href={`tel:${phone.replace(/\s/g, "")}`} className="block hover:text-brand">{phone}</a>
                    ))}
                  </span>
                </li>
                <li className="flex gap-3"><Mail className="h-4 w-4 text-safety mt-0.5 shrink-0" /><a href={`mailto:${company.email}`} className="hover:text-brand">{company.email}</a></li>
                <li className="flex gap-3"><Linkedin className="h-4 w-4 text-safety mt-0.5 shrink-0" /><a href={company.linkedin} target="_blank" rel="noopener noreferrer" className="hover:text-brand">LinkedIn profile</a></li>
                <li className="flex gap-3"><Clock className="h-4 w-4 text-safety mt-0.5 shrink-0" />Mon-Sat, 9:30 AM - 6:30 PM</li>
              </ul>
            </div>
            <div className="rounded-xl border border-safety/40 bg-safety/10 p-5 sm:p-6">
              <div className="flex items-center gap-2 text-brand font-bold"><AlertTriangle className="h-5 w-5 text-safety" /> Process Support</div>
              <p className="mt-2 text-sm text-muted-foreground">Any problem in your extrusion process? Talk to us and our expert team will suggest the best solution for you.</p>
              <div className="mt-3 flex flex-col gap-1">
                {contactPhones.map((phone) => (
                  <a key={phone} href={`tel:${phone.replace(/\s/g, "")}`} className="font-display text-xl font-bold text-brand sm:text-2xl">{phone}</a>
                ))}
              </div>
            </div>
            <div className="bg-card border border-border rounded-xl p-6">
              <h3 className="font-bold text-brand">Useful details to share</h3>
              <ul className="mt-3 space-y-2 text-sm text-muted-foreground">
                <li>Machine model and screw type</li>
                <li>Pipe type, pipe range and output target</li>
                <li>Spare part, die-head, screw barrel, automation or panel modification requirement</li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    </SiteLayout>
  );
}
