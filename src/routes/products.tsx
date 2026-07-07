import { AppLink as Link } from "@/components/app-link";
import type { ReactNode } from "react";
import { SiteLayout } from "@/components/site-layout";
import productBreadcrumbImg from "@/assets/breadcrumb/product.png";
import machineImg from "@/assets/extrusion-machine.jpeg";
import { dieHeadModels, machineModels, motto, productHighlights, screwBarrelSet, supportPromise } from "@/content/extrusion";
import { ArrowRight, CheckCircle2, Download } from "lucide-react";

const docImageModules = import.meta.glob("../assets/doc2026/*.{jpeg,png}", {
  eager: true,
  query: "?url",
  import: "default",
}) as Record<string, string>;

const docImage = (name: string) => docImageModules[`../assets/doc2026/${name}`];

const productCategories = [
  {
    id: "pipe-machine-setup",
    title: "3-Layer Pipe Automatic Machine Setup",
    eyebrow: "Complete Project",
    description:
      "Full project support for a 3-layer pipe automatic machine setup with material guidance, extrusion machine selection and practical process support.",
    details: productHighlights,
    images: [machineImg],
  },
  {
    id: "die-heads",
    title: "High-Endurance Die Heads",
    eyebrow: "Die Head",
    description:
      "Updated metallurgy is used to triple the production run time for CPVC, drastically cutting downtime. The earlier VTD die-head models remain included with pipe range and output details.",
    details: [
      "New 3-layer die head design focused on lower cost and higher efficiency.",
      "Special calibration dimensions can be provided for process stability.",
      "Expert support is available for die-head and pipe quality issues.",
    ],
    images: ["image1.jpeg", "image2.png", "image3.jpeg", "image4.jpeg", "image5.png", "image6.jpeg", "image7.jpeg"].map(docImage).filter(Boolean),
    table: "dieHeads",
  },
  {
    id: "extruders-downstream",
    title: "Next-Gen Extruders & Downstream",
    eyebrow: "Extruder and Downstream",
    description:
      "Redesigned for lower entry costs and lower power consumption without sacrificing the high-performance standards expected from top-tier brands.",
    details: [
      "Supports extrusion and post-extrusion production requirements.",
      "Designed for pipe manufacturers looking for cost-effective machinery upgrades.",
      "Useful for plant modification, line improvement and new production setups.",
    ],
    images: ["image8.jpeg", "image9.jpeg", "image10.jpeg", "image11.jpeg", "image12.jpeg", "image13.jpeg", "image14.jpeg", "image15.jpeg", "image16.jpeg"].map(docImage).filter(Boolean),
    table: "machines",
  },
  {
    id: "heavy-duty-spares",
    title: "Heavy-Duty Spare Parts",
    eyebrow: "Spares",
    description:
      "New traction chains and rubber pads are designed to last 3x longer than standard industry parts.",
    details: [
      "Spare parts supplied as per customer requirement.",
      "Support covers extrusion and post-extrusion machines.",
      "Focused on reducing replacement frequency and maintenance cost.",
    ],
    images: ["image17.jpeg", "image18.jpeg", "image19.jpeg", "image20.jpeg", "image21.jpeg", "image22.jpeg"].map(docImage).filter(Boolean),
  },
  {
    id: "smart-automation",
    title: "Smart Automation & Remote Support",
    eyebrow: "Automation",
    description:
      "New PLC programming allows instant online troubleshooting via Wi-Fi, removing the need for on-site laptop connections and helping protect hardware from surges.",
    details: [
      "Online troubleshooting support via Wi-Fi.",
      "Reduced dependency on on-site laptop connections.",
      "Helpful for fast diagnosis and plant support.",
    ],
    images: ["image23.jpeg", "image24.jpeg"].map(docImage).filter(Boolean),
  },
  {
    id: "screw-barrel-set",
    title: "Screw Barrel Set",
    eyebrow: "Screw Barrel",
    description:
      "Screw barrel sets are available with dual sourcing, special alloy material science and options for conical twin, parallel twin and single screw applications.",
    details: screwBarrelSet.map((item) => `${item.label}: ${item.detail}`),
    images: ["image25.jpeg", "image26.jpeg", "image27.jpeg", "image28.jpeg", "image30.jpeg", "image31.jpeg", "image32.jpeg"].map(docImage).filter(Boolean),
  },
  {
    id: "efficiency-tools",
    title: "Efficiency Tools",
    eyebrow: "STU Pumps and Hopper Loaders",
    description:
      "Improved STU pumps and automated hopper loaders are designed to minimize material wastage and breakage.",
    details: [
      "Improved STU pump support.",
      "Automated hopper loader options.",
      "Focused on reducing material wastage and breakage.",
    ],
    images: ["image33.jpeg", "image34.png"].map(docImage).filter(Boolean),
  },
  {
    id: "panel-modification",
    title: "Panel Modification",
    eyebrow: "Electrical Panel",
    description: "We modify any type of panel according to plant and process requirements.",
    details: [
      "Panel modification support for existing plants.",
      "Useful when upgrading process control or adding automation support.",
      "Can be discussed along with machinery or troubleshooting requirements.",
    ],
    images: ["image35.jpeg"].map(docImage).filter(Boolean),
  },
  {
    id: "raw-materials",
    title: "Advanced Raw Materials",
    eyebrow: "PVC, CPVC and Foam Core",
    description:
      "Over 250 trials have resulted in new chemical compositions for PVC, CPVC and foam core, plus specialized waxes that help products pass testing parameters even in high-PHR processes.",
    details: [
      "PVC, CPVC and foam core composition support.",
      "Specialized waxes for demanding process conditions.",
      "Designed to help end-products pass testing parameters in high-PHR processes.",
    ],
    images: [],
  },
];

export default function ProductsPage() {
  return (
    <SiteLayout>
      <section className="bg-background">
        <img
          src={productBreadcrumbImg}
          alt="Vighnaharta Enterprise products"
          className="block w-full object-cover"
          width={1920}
          height={500}
        />
      </section>

      <section className="border-b border-border bg-secondary/50 py-8 sm:py-10 md:py-12">
        <div className="container-x flex flex-wrap gap-2">
          {productCategories.map((category) => (
            <a key={category.id} href={`#${category.id}`} className="inline-flex max-w-full rounded-md border border-border bg-card px-3 py-2 text-sm font-semibold text-brand transition hover:border-safety hover:text-safety">
              {category.title}
            </a>
          ))}
        </div>
      </section>

      <section className="py-20">
        <div className="container-x space-y-14">
          {productCategories.map((category, index) => (
            <ProductCategory key={category.id} category={category} muted={index % 2 === 1} />
          ))}
        </div>
      </section>

      <section className="py-20 bg-brand text-brand-foreground">
        <div className="container-x grid lg:grid-cols-[1.2fr_0.8fr] gap-8 items-center">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.25em] text-safety">Our Motto</p>
            <blockquote className="mt-4 text-2xl font-bold leading-tight sm:text-3xl md:text-4xl">"{motto}"</blockquote>
            <p className="mt-4 max-w-2xl opacity-85">{supportPromise}</p>
          </div>
          <div className="flex flex-col gap-3 min-[420px]:flex-row min-[420px]:flex-wrap lg:justify-end">
            <Link to="/contact" className="inline-flex items-center justify-center gap-2 rounded-md bg-safety px-5 py-3.5 font-semibold text-safety-foreground transition hover:brightness-110 sm:px-6">Request quote <ArrowRight className="h-4 w-4" /></Link>
            <button className="inline-flex items-center justify-center gap-2 rounded-md border border-white/25 px-5 py-3.5 font-semibold transition hover:bg-white/10 sm:px-6">
              <Download className="h-4 w-4" /> Brochure details
            </button>
          </div>
        </div>
      </section>

    </SiteLayout>
  );
}

type ProductCategoryData = (typeof productCategories)[number];

function ProductCategory({ category, muted }: { category: ProductCategoryData; muted: boolean }) {
  return (
    <article id={category.id} className={`scroll-mt-28 rounded-xl border border-border ${muted ? "bg-secondary" : "bg-card"} overflow-hidden shadow-sm`}>
      <div className="grid lg:grid-cols-[0.95fr_1.05fr] gap-0">
        <div className="p-6 md:p-8">
          <p className="text-xs font-semibold uppercase tracking-[0.25em] text-safety">{category.eyebrow}</p>
          <h2 className="mt-3 text-2xl md:text-3xl font-bold text-brand">{category.title}</h2>
          <p className="mt-4 text-muted-foreground leading-relaxed">{category.description}</p>
          <ul className="mt-5 space-y-2">
            {category.details.map((detail) => (
              <li key={detail} className="flex gap-3 text-sm text-foreground/85"><CheckCircle2 className="h-5 w-5 text-safety shrink-0" />{detail}</li>
            ))}
          </ul>
        </div>
        <CategoryImages title={category.title} images={category.images} />
      </div>
      {category.table === "machines" && (
        <div className="border-t border-border p-6 md:p-8">
          <TableCard title="Extrusion Machine Models">
            <thead><tr><th>Model</th><th>Screw Type</th><th>Output</th><th>Pipe Type</th></tr></thead>
            <tbody>{machineModels.map((m) => <tr key={m.model}><td>{m.model}</td><td>{m.screwType}</td><td>{m.output}</td><td>{m.pipeType}</td></tr>)}</tbody>
          </TableCard>
        </div>
      )}
      {category.table === "dieHeads" && (
        <div className="border-t border-border p-6 md:p-8">
          <TableCard title="VTD Die Head Models">
            <thead><tr><th>Model</th><th>Output</th><th>Pipe Range</th></tr></thead>
            <tbody>{dieHeadModels.map((m) => <tr key={m.model}><td>{m.model}</td><td>{m.output}</td><td>{m.pipeRange}</td></tr>)}</tbody>
          </TableCard>
        </div>
      )}
    </article>
  );
}

function CategoryImages({ title, images }: { title: string; images: string[] }) {
  if (!images.length) {
    return (
      <div className="flex min-h-[220px] items-center bg-brand p-6 text-brand-foreground sm:min-h-[260px] sm:p-8">
        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.25em] text-safety">Details Only</p>
          <p className="mt-4 max-w-sm text-lg font-semibold">This uploaded document category is text-based, so its full details are listed here without a separate image group.</p>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-background p-4 md:p-5">
      <div className={`grid gap-3 ${images.length === 1 ? "grid-cols-1" : "grid-cols-1 min-[520px]:grid-cols-2"}`}>
        {images.map((src, index) => (
          <div key={src} className="aspect-[4/3] overflow-hidden rounded-lg border border-border bg-card">
            <img src={src} alt={`${title} document visual ${index + 1}`} loading="lazy" className="h-full w-full object-cover" />
          </div>
        ))}
      </div>
    </div>
  );
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
