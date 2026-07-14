import previewImage from "@/assets/favicon.png";
import logoImage from "@/assets/logo (1).png";
import { company } from "@/content/extrusion";

const SITE_NAME = "Vighnaharta Enterprise";
const DEFAULT_SITE_URL = "https://www.vighnahartaextrusion.com";

type SeoPage = {
  title: string;
  description: string;
  keywords: string;
  schemaType?: "WebPage" | "AboutPage" | "CollectionPage" | "ContactPage";
};

export const seoPages: Record<string, SeoPage> = {
  "/": {
    title: "Extrusion Machines, Die Heads and Pipe Machine Spares | Vighnaharta Enterprise",
    description:
      "Vighnaharta Enterprise supplies 3-layer pipe extrusion machines, die heads, screw barrel sets, extrusion machine spares, calibration and process support for PVC and CPVC pipe manufacturers.",
    keywords:
      "extrusion machine manufacturer, pipe extrusion machine, 3 layer pipe machine, extrusion machine spares, die head manufacturer, screw barrel set, PVC pipe machinery, CPVC pipe machine, extrusion support Pune",
  },
  "/about": {
    title: "About Vighnaharta Enterprise | Pipe Extrusion Machinery Experts",
    description:
      "Learn about Vighnaharta Enterprise, a Pune-based extrusion machinery support company serving pipe manufacturers with spares, die heads, project setup and practical process solutions.",
    keywords:
      "about Vighnaharta Enterprise, extrusion machinery company Pune, pipe industry support, extrusion project support, Pankaj Kolhe, Priya Kolhe",
    schemaType: "AboutPage",
  },
  "/products": {
    title: "3-Layer Pipe Machines, Die Heads, Screw Barrels and Extrusion Spares",
    description:
      "Explore 3-layer pipe automatic machine setups, conical and parallel screw extruders, high-endurance die heads, screw barrel sets, heavy-duty spares and automation support.",
    keywords:
      "3 layer pipe machine, PVC pipe machine, CPVC pipe machine, conical screw extruder, parallel screw extruder, extrusion die head, screw barrel, extrusion spare parts",
    schemaType: "CollectionPage",
  },
  "/services": {
    title: "Extrusion Machine Services | Setup, Spares, Die Heads and Troubleshooting",
    description:
      "Get extrusion machinery services for pipe machine project setup, die head design, calibration support, panel modification, spare supply, automation and process troubleshooting.",
    keywords:
      "extrusion machine service, pipe machine setup, die head design, extrusion troubleshooting, calibration support, panel modification, machine spares",
    schemaType: "CollectionPage",
  },
  "/industries": {
    title: "Industries Served | PVC, CPVC and Plastic Pipe Extrusion Support",
    description:
      "Vighnaharta Enterprise supports PVC, CPVC, conduit and plastic pipe manufacturing industries with extrusion line spares, machine guidance and process improvement.",
    keywords:
      "pipe manufacturing support, PVC pipe industry, CPVC pipe industry, conduit pipe extrusion, extrusion line support, plastic pipe machinery",
  },
  "/contact": {
    title: "Contact Vighnaharta Enterprise | Extrusion Machine and Spare Inquiry",
    description:
      "Contact Vighnaharta Enterprise for extrusion machine spares, die heads, 3-layer pipe machine setup, screw barrel sets, calibration support and pipe plant modification inquiries.",
    keywords:
      "contact Vighnaharta Enterprise, extrusion machine inquiry, pipe machine spares Pune, die head inquiry, extrusion support contact",
    schemaType: "ContactPage",
  },
  "/blog": {
    title: "Blog | Extrusion Machine, Spares and Process Insights",
    description:
      "Read practical insights from Vighnaharta Enterprise on extrusion machine selection, spares, die heads, calibration and pipe production stability.",
    keywords:
      "extrusion blog, pipe machine tips, die head insights, extrusion process, PVC pipe manufacturing, CPVC machine guidance",
  },
  "/case-studies": {
    title: "Case Studies | Extrusion Project and Process Support",
    description:
      "Review extrusion support areas handled by Vighnaharta Enterprise, including machine setup, die heads, spares and process improvement for pipe manufacturers.",
    keywords:
      "extrusion case studies, machine setup support, pipe plant support, die head support, extrusion process improvement",
  },
  "/careers": {
    title: "Careers | Vighnaharta Enterprise",
    description:
      "Explore career opportunities with Vighnaharta Enterprise, an extrusion-focused team working on machine support, spares and customer service.",
    keywords:
      "Vighnaharta careers, extrusion machinery jobs, pipe industry jobs, technical service careers Pune",
  },
};

export function applyRouteSeo(pathname: string, found = true) {
  const normalizedPath = normalizePath(pathname);
  const page = seoPages[normalizedPath] ?? {
    title: "Page Not Found | Vighnaharta Enterprise",
    description: "The requested Vighnaharta Enterprise page could not be found.",
    keywords: "Vighnaharta Enterprise",
  };
  const canonicalUrl = `${getSiteUrl()}${normalizedPath === "/" ? "/" : normalizedPath}`;
  const imageUrl = absoluteUrl(previewImage);

  document.documentElement.lang = "en-IN";
  document.title = page.title;

  setMeta("description", page.description);
  setMeta("keywords", page.keywords);
  setMeta("robots", found ? "index, follow, max-image-preview:large" : "noindex, follow");
  setMeta(
    "googlebot",
    found
      ? "index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1"
      : "noindex, follow",
  );
  setMeta("author", SITE_NAME);
  setMeta("geo.region", "IN-MH");
  setMeta("geo.placename", "Pune, Maharashtra");
  setMeta("theme-color", "#062b63");
  setLink("canonical", canonicalUrl);

  setProperty("og:type", "website");
  setProperty("og:site_name", SITE_NAME);
  setProperty("og:locale", "en_IN");
  setProperty("og:title", page.title);
  setProperty("og:description", page.description);
  setProperty("og:url", canonicalUrl);
  setProperty("og:image", imageUrl);
  setProperty("og:image:type", "image/png");
  setProperty("og:image:alt", `${company.name} extrusion machinery and spares`);

  setMeta("twitter:card", "summary_large_image");
  setMeta("twitter:title", page.title);
  setMeta("twitter:description", page.description);
  setMeta("twitter:image", imageUrl);

  setJsonLd("organization-schema", organizationSchema());
  setJsonLd("website-schema", websiteSchema());
  setJsonLd("breadcrumb-schema", breadcrumbSchema(normalizedPath, canonicalUrl, page));
  setJsonLd("webpage-schema", webPageSchema(page, canonicalUrl));
  setJsonLd("offer-catalog-schema", offerCatalogSchema());
  setJsonLd("faq-schema", faqSchema());
}

function normalizePath(pathname: string) {
  return pathname.replace(/\/$/, "") || "/";
}

function getSiteUrl() {
  const origin = window.location.origin;
  if (!origin || origin.includes("localhost") || origin.includes("127.0.0.1")) {
    return DEFAULT_SITE_URL;
  }
  return origin;
}

function absoluteUrl(url: string) {
  if (/^https?:\/\//.test(url)) return url;
  return `${getSiteUrl()}${url.startsWith("/") ? url : `/${url}`}`;
}

function setMeta(name: string, content: string) {
  const selector = `meta[name="${name}"]`;
  const meta =
    document.head.querySelector<HTMLMetaElement>(selector) ?? document.createElement("meta");
  meta.setAttribute("name", name);
  meta.setAttribute("content", content);
  if (!meta.parentElement) document.head.appendChild(meta);
}

function setProperty(property: string, content: string) {
  const selector = `meta[property="${property}"]`;
  const meta =
    document.head.querySelector<HTMLMetaElement>(selector) ?? document.createElement("meta");
  meta.setAttribute("property", property);
  meta.setAttribute("content", content);
  if (!meta.parentElement) document.head.appendChild(meta);
}

function setLink(rel: string, href: string) {
  const link =
    document.head.querySelector<HTMLLinkElement>(`link[rel="${rel}"]`) ??
    document.createElement("link");
  link.setAttribute("rel", rel);
  link.setAttribute("href", href);
  if (!link.parentElement) document.head.appendChild(link);
}

function setJsonLd(id: string, schema: unknown) {
  const script = document.getElementById(id) ?? document.createElement("script");
  script.id = id;
  script.setAttribute("type", "application/ld+json");
  script.textContent = JSON.stringify(schema);
  if (!script.parentElement) document.head.appendChild(script);
}

function organizationSchema() {
  return {
    "@context": "https://schema.org",
    "@type": ["LocalBusiness", "Organization"],
    "@id": `${getSiteUrl()}/#organization`,
    name: company.name,
    alternateName: "Vighnaharta Extrusion Technic",
    url: `${getSiteUrl()}/`,
    logo: absoluteUrl(logoImage),
    image: absoluteUrl(previewImage),
    description: company.tagline,
    email: company.email,
    telephone: company.phone,
    address: {
      "@type": "PostalAddress",
      addressLocality: "Pune",
      addressRegion: "Maharashtra",
      addressCountry: "IN",
    },
    areaServed: ["India", "United Arab Emirates"],
    sameAs: [company.linkedin],
    foundingDate: "2023",
    makesOffer: [
      "Extrusion machine spares",
      "3-layer pipe machine setup",
      "Die heads",
      "Screw barrel sets",
      "Calibration support",
      "Panel modification",
    ],
  };
}

function websiteSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "@id": `${getSiteUrl()}/#website`,
    url: `${getSiteUrl()}/`,
    name: SITE_NAME,
    publisher: {
      "@id": `${getSiteUrl()}/#organization`,
    },
  };
}

function webPageSchema(page: SeoPage, url: string) {
  return {
    "@context": "https://schema.org",
    "@type": page.schemaType ?? "WebPage",
    "@id": `${url}#webpage`,
    url,
    name: page.title,
    description: page.description,
    isPartOf: {
      "@id": `${getSiteUrl()}/#website`,
    },
    about: {
      "@id": `${getSiteUrl()}/#organization`,
    },
  };
}

function breadcrumbSchema(pathname: string, url: string, page: SeoPage) {
  const items = [
    {
      "@type": "ListItem",
      position: 1,
      name: "Home",
      item: `${getSiteUrl()}/`,
    },
  ];

  if (pathname !== "/") {
    items.push({
      "@type": "ListItem",
      position: 2,
      name: page.title.split("|")[0].trim(),
      item: url,
    });
  }

  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items,
  };
}

function offerCatalogSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "OfferCatalog",
    "@id": `${getSiteUrl()}/#products-services`,
    name: "Extrusion Machinery Products and Services",
    url: `${getSiteUrl()}/products`,
    provider: {
      "@id": `${getSiteUrl()}/#organization`,
    },
    itemListElement: [
      productSchema(
        "3-Layer Pipe Automatic Machine Setup",
        "Complete project support for PVC and CPVC 3-layer pipe extrusion machine setup with material guidance.",
      ),
      productSchema(
        "High-Endurance Die Heads",
        "3-layer extrusion die heads designed for efficient pipe production and lower downtime.",
      ),
      productSchema(
        "Screw Barrel Sets",
        "Conical twin, parallel twin and single screw barrel sets for extrusion lines.",
      ),
      serviceSchema(
        "Extrusion Machine Spares",
        "Custom extrusion and post-extrusion machine spare support as per customer requirement.",
      ),
      serviceSchema(
        "Calibration and Process Troubleshooting",
        "Pipe extrusion calibration guidance, machine discussion and process problem support.",
      ),
      serviceSchema(
        "Panel Modification and Automation",
        "Electrical panel modification and PLC-based remote support for extrusion plants.",
      ),
    ],
  };
}

function productSchema(name: string, description: string) {
  return {
    "@type": "Product",
    name,
    description,
    brand: {
      "@type": "Brand",
      name: SITE_NAME,
    },
    manufacturer: {
      "@id": `${getSiteUrl()}/#organization`,
    },
    category: "Plastic Pipe Extrusion Machinery",
    offers: {
      "@type": "Offer",
      availability: "https://schema.org/InStock",
      priceCurrency: "INR",
      url: `${getSiteUrl()}/contact`,
    },
  };
}

function serviceSchema(name: string, description: string) {
  return {
    "@type": "Service",
    name,
    description,
    provider: {
      "@id": `${getSiteUrl()}/#organization`,
    },
    areaServed: ["India", "United Arab Emirates"],
    serviceType: "Extrusion machinery support",
  };
}

function faqSchema() {
  const questions = [
    {
      question: "What extrusion products does Vighnaharta Enterprise supply?",
      answer:
        "Vighnaharta Enterprise supplies 3-layer pipe automatic machine setups, extrusion die heads, screw barrel sets, conical and parallel screw extruder support, heavy-duty spare parts, calibration support and plant modification solutions.",
    },
    {
      question: "Do you support PVC and CPVC pipe manufacturers?",
      answer:
        "Yes. The company supports PVC, CPVC, conduit and plastic pipe manufacturing lines with machine setup, die-head selection, spares and troubleshooting.",
    },
    {
      question: "Can you help with extrusion machine spares as per requirement?",
      answer:
        "Yes. Extrusion and post-extrusion machine spares are supplied based on the customer's machine, pipe range, output target and maintenance requirement.",
    },
    {
      question: "Do you provide die-head and calibration support?",
      answer:
        "Yes. Vighnaharta Enterprise provides 3-layer die-head design support, VTD die-head model guidance, special calibration dimensions and practical troubleshooting for pipe quality and output stability.",
    },
  ];

  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: questions.map((item) => ({
      "@type": "Question",
      name: item.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: item.answer,
      },
    })),
  };
}
