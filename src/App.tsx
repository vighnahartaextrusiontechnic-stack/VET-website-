import { SiteLayout } from "@/components/site-layout";
import Home from "@/routes/index";
import About from "@/routes/about";
import Products from "@/routes/products";
import Services from "@/routes/services";
import Industries from "@/routes/industries";
import Contact from "@/routes/contact";
import Blog from "@/routes/blog";
import CaseStudies from "@/routes/case-studies";
import Careers from "@/routes/careers";

const routes: Record<string, () => JSX.Element> = {
  "/": Home,
  "/about": About,
  "/products": Products,
  "/services": Services,
  "/industries": Industries,
  "/contact": Contact,
  "/blog": Blog,
  "/case-studies": CaseStudies,
  "/careers": Careers,
};

function NotFound() {
  return (
    <SiteLayout>
      <section className="py-24">
        <div className="container-x text-center">
          <h1 className="text-5xl font-bold text-brand">Page not found</h1>
          <p className="mt-3 text-muted-foreground">The page you are looking for does not exist.</p>
          <a href="/" className="mt-6 inline-flex rounded-md bg-safety px-5 py-3 font-semibold text-safety-foreground">Go home</a>
        </div>
      </section>
    </SiteLayout>
  );
}

export default function App() {
  const path = window.location.pathname.replace(/\/$/, "") || "/";
  const Page = routes[path] ?? NotFound;
  return <Page />;
}
