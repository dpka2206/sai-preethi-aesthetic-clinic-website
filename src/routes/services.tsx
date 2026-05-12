import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, ArrowLeft } from "lucide-react";
import { services } from "@/lib/clinic-data";
import { SiteNav, SiteFooter, WhatsAppFab } from "@/components/site-shell";

export const Route = createFileRoute("/services")({
  head: () => ({
    meta: [
      { title: "Services — Dr. Sai Preethi's Skin & Aesthetic Clinic" },
      { name: "description", content: "Full list of dermatology and aesthetic services in Hyderabad — paediatric, hair restoration, lasers, biologics, anti-ageing and more." },
      { property: "og:title", content: "Services — Dr. Sai Preethi" },
      { property: "og:description", content: "Comprehensive dermatology & aesthetic services in Hyderabad." },
    ],
  }),
  component: ServicesPage,
});

function ServicesPage() {
  return (
    <div className="bg-background text-foreground">
      <SiteNav />
      <main className="px-6 pb-24 pt-32 lg:px-10 lg:pt-40">
        <div className="mx-auto max-w-7xl">
          <Link to="/" className="inline-flex items-center gap-1.5 text-sm text-muted-foreground hover:text-primary">
            <ArrowLeft size={14} /> Back to home
          </Link>
          <header className="mt-6 max-w-3xl">
            <p className="text-xs uppercase tracking-[0.25em] text-primary">Our specialisations</p>
            <h1 className="mt-4 font-serif text-5xl text-foreground text-balance md:text-6xl">All services & treatments</h1>
            <p className="mt-5 text-base text-muted-foreground md:text-lg">
              Evidence-based dermatology across the full spectrum — from paediatric skin care to advanced biologics, regenerative therapies, and laser dermatology.
            </p>
          </header>

          <div className="mt-14 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {services.map(([name, desc, img]) => (
              <article key={name} className="group overflow-hidden rounded-xl border border-border bg-card transition hover:-translate-y-1 hover:soft-shadow">
                <div className="aspect-[4/3] overflow-hidden bg-muted">
                  <img src={img} alt={name} loading="lazy" className="h-full w-full object-cover transition duration-700 group-hover:scale-105" />
                </div>
                <div className="p-6">
                  <h2 className="font-serif text-xl text-foreground">{name}</h2>
                  <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{desc}</p>
                  <a href="/#contact" className="mt-4 inline-flex items-center gap-1.5 text-sm font-medium text-primary">
                    Book a consultation <ArrowRight size={14} />
                  </a>
                </div>
              </article>
            ))}
          </div>
        </div>
      </main>
      <SiteFooter />
      <WhatsAppFab />
    </div>
  );
}
