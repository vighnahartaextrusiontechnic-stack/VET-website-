import previewImage from "@/assets/favicon.png";
import logoImage from "@/assets/logo (1).png";
import { company } from "@/content/extrusion";

const SITE_NAME = "Vighnaharta Enterprise";
const DEFAULT_SITE_URL = "https://vighnahartaenterprise.com";

type SeoPage = {
  title: string;
  description: string;
  keywords: string;
};

export const seoPages: Record<string, SeoPage> = {
  "/": {
    title: "Vighnaharta Enterprise | Extrusion Machines, Spares and Die Heads",
    description:
      "Vighnaharta Enterprise supplies extrusion machine spares, 3-layer pipe machine setup, die heads, screw barrel sets, calibration and process support for pipe manufacturers.",
    keywords:
      "extrusion machine spares, pipe extrusion machine, 3 layer pipe machine, die head manufacturer, screw barrel set, PVC pipe machinery, CPVC pipe machine, extrusion support Pune",
  },
  "/about": {
    title: "About Vighnaharta Enterprise | Extrusion Machinery Support",
    description:
      "Learn about Vighnaharta Enterprise, a Pune-based extrusion machinery and spares support company serving pipe manufacturers with practical project and process solutions.",
    keywords:
      "about Vighnaharta Enterprise, extrusion machinery company Pune, pipe industry support, extrusion project support, Pankaj Kolhe, Priya Kolhe",
  },
  "/products": {
    title: "Products | 3-Layer Pipe Machines, Die Heads and Extrusion Spares",
    description:
      "Explore Vighnaharta Enterprise products including 3-layer pipe automatic machine setups, conical and parallel screw extruders, die heads, screw barrel sets and heavy-duty spares.",
    keywords:
      "3 layer pipe machine, conical screw extruder, parallel screw extruder, extrusion die head, screw barrel, extrusion spare parts, PVC CPVC pipe machinery",
  },
  "/services": {
    title: "Services | Extrusion Machine Setup, Spares and Troubleshooting",
    description:
      "Get extrusion machinery services for machine project setup, die head design, calibration support, panel modification, spares supply and process troubleshooting.",
    keywords:
      "extrusion machine service, pipe machine setup, die head design, extrusion troubleshooting, calibration support, panel modification, machine spares",
  },
  "/industries": {
    title: "Industries | Pipe Manufacturing and Extrusion Line Support",
    description:
      "Vighnaharta Enterprise supports PVC, CPVC, conduit and pipe manufacturing industries with extrusion line spares, machine guidance and process improvement.",
    keywords:
      "pipe manufacturing support, PVC pipe industry, CPVC pipe industry, conduit pipe extrusion, extrusion line support, plastic pipe machinery",
  },
  "/contact": {
    title: "Contact Vighnaharta Enterprise | Extrusion Machinery Inquiry",
    description:
      "Contact Vighnaharta Enterprise for extrusion machine spares, die heads, machine setup, screw barrel sets, calibration support and pipe plant modification inquiries.",
    keywords:
      "contact Vighnaharta Enterprise, extrusion machine inquiry, pipe machine spares Pune, die head inquiry, extrusion support contact",
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
  setJsonLd("webpage-schema", webPageSchema(page, canonicalUrl));
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
  const meta = document.head.querySelector<HTMLMetaElement>(selector) ?? document.createElement("meta");
  meta.setAttribute("name", name);
  meta.setAttribute("content", content);
  if (!meta.parentElement) document.head.appendChild(meta);
}

function setProperty(property: string, content: string) {
  const selector = `meta[property="${property}"]`;
  const meta = document.head.querySelector<HTMLMetaElement>(selector) ?? document.createElement("meta");
  meta.setAttribute("property", property);
  meta.setAttribute("content", content);
  if (!meta.parentElement) document.head.appendChild(meta);
}

function setLink(rel: string, href: string) {
  const link = document.head.querySelector<HTMLLinkElement>(`link[rel="${rel}"]`) ?? document.createElement("link");
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
    "@type": "LocalBusiness",
    "@id": `${getSiteUrl()}/#organization`,
    name: company.name,
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
    "@type": "WebPage",
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
