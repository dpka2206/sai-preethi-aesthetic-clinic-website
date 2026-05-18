import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, ArrowLeft, CheckCircle2 } from "lucide-react";
import { services } from "@/lib/clinic-data";
import { BookConsultation } from "@/components/book-consultation";
import { SiteNav, SiteFooter, WhatsAppFab } from "@/components/site-shell";

export const Route = createFileRoute("/services")({
  head: () => ({
    meta: [
      { title: "Services & Treatments — Dr. Sai Preethi's Skin & Aesthetic Clinic" },
      { name: "description", content: "Comprehensive dermatology and aesthetic services in Chennai. Advanced treatments for acne, pigmentation, hair loss, anti-ageing, and clinical dermatology." },
      { property: "og:title", content: "Services & Treatments — Dr. Sai Preethi" },
      { property: "og:description", content: "Comprehensive dermatology & aesthetic services in Chennai." },
    ],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "FAQPage",
          "mainEntity": services.map((s) => ({
            "@type": "Question",
            "name": `What is your approach to ${s.name}?`,
            "acceptedAnswer": {
              "@type": "Answer",
              "text": `${s.pageHeadline}: ${s.shortDescription}`
            }
          }))
        })
      }
    ],
  }),
  component: ServicesPage,
});

function ServicesPage() {
  return (
    <div className="bg-background text-foreground scroll-smooth">
      <SiteNav />
      
      {/* Header */}
      <header className="bg-cream px-6 pb-16 pt-32 lg:px-10 lg:pt-40">
        <div className="mx-auto max-w-7xl">
          <Link to="/" className="inline-flex items-center gap-1.5 text-sm font-medium text-muted-foreground transition hover:text-primary">
            <ArrowLeft size={16} /> Back to home
          </Link>
          <div className="mt-8 max-w-3xl">
            <p className="text-sm uppercase tracking-[0.25em] text-primary font-medium">Our specialisations</p>
            <h1 className="mt-4 font-serif text-5xl text-foreground text-balance md:text-6xl lg:text-7xl">
              All services <span className="font-light italic text-primary">&</span> treatments
            </h1>
            <p className="mt-6 text-lg leading-relaxed text-muted-foreground md:text-xl">
              Evidence-based dermatology across the full spectrum — from paediatric skin care to advanced biologics, regenerative therapies, and aesthetic dermatology.
            </p>
          </div>
        </div>
      </header>

      {/* Main Content & Sidebar Layout */}
      <main className="px-6 py-16 lg:px-10 lg:py-24">
        <div className="mx-auto max-w-7xl flex flex-col gap-16 lg:flex-row lg:gap-24">
          
          {/* Sticky Sidebar / Table of Contents */}
          <aside className="lg:w-[320px] shrink-0">
            <div className="sticky top-32 rounded-2xl border border-border bg-card p-6 soft-shadow">
              <h3 className="font-serif text-xl text-foreground mb-4">Jump to Treatment</h3>
              <nav className="flex flex-col space-y-2.5">
                {services.map((service) => (
                  <a 
                    key={service.id} 
                    href={`#${service.id}`}
                    className="group flex items-center justify-between rounded-lg px-3 py-2 text-sm text-muted-foreground transition hover:bg-muted hover:text-foreground"
                  >
                    <span>{service.name}</span>
                    <ArrowRight size={14} className="opacity-0 transition-opacity group-hover:opacity-100 text-primary" />
                  </a>
                ))}
              </nav>
              <div className="mt-8 border-t border-border pt-6">
                <BookConsultation className="flex w-full items-center justify-center gap-2 rounded-full bg-primary px-6 py-3 text-sm font-medium text-primary-foreground transition hover:bg-primary/90">
                  Book Consultation
                </BookConsultation>
              </div>
            </div>
          </aside>

          {/* Long-Form Medical Content (AEO Optimized) */}
          <div className="flex-1 space-y-24">
            {services.map((service) => (
              <article key={service.id} id={service.id} className="scroll-mt-32">
                
                {/* Hero Image for Service */}
                <div className="overflow-hidden rounded-2xl mb-10 editorial-shadow">
                  <img 
                    src={service.image} 
                    alt={service.name} 
                    loading="lazy" 
                    className="w-full aspect-[21/9] object-cover md:aspect-[3/1]" 
                  />
                </div>

                {/* Service Header */}
                <header className="mb-8">
                  <div className="inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary/5 px-3 py-1 text-xs font-medium text-primary mb-4">
                    {service.name}
                  </div>
                  <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl text-foreground text-balance leading-tight">
                    {service.pageHeadline}
                  </h2>
                  <p className="mt-4 text-xl font-serif italic text-muted-foreground">
                    {service.subheading}
                  </p>
                </header>

                {/* Intro Paragraphs */}
                {service.intro && (
                  <div className="mb-10 space-y-4 text-lg leading-relaxed text-foreground/80">
                    {service.intro.map((p, idx) => (
                      <p key={idx}>{p}</p>
                    ))}
                  </div>
                )}

                {/* Detailed Sections */}
                <div className="space-y-10">
                  {service.sections.map((section, idx) => (
                    <section key={idx} className="rounded-2xl border border-border bg-card/50 p-8 md:p-10">
                      {section.title && (
                        <h3 className="font-serif text-2xl text-foreground mb-5 pb-4 border-b border-border/50">
                          {section.title}
                        </h3>
                      )}
                      
                      {section.paragraphs && (
                        <div className="space-y-4 text-base leading-relaxed text-muted-foreground mb-6 last:mb-0">
                          {section.paragraphs.map((p, pIdx) => (
                            <p key={pIdx}>{p}</p>
                          ))}
                        </div>
                      )}

                      {section.bulletPoints && (
                        <ul className="grid gap-3 sm:grid-cols-2 mt-2">
                          {section.bulletPoints.map((bp, bpIdx) => (
                            <li key={bpIdx} className="flex items-start gap-3 text-sm text-foreground/90">
                              <CheckCircle2 size={18} className="shrink-0 text-primary mt-0.5" />
                              <span className="leading-snug">{bp}</span>
                            </li>
                          ))}
                        </ul>
                      )}

                      {section.list && (
                        <ul className="space-y-5 mt-2">
                          {section.list.map((item, itemIdx) => (
                            <li key={itemIdx} className="flex items-start gap-4">
                              <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-primary/10 text-primary font-serif">
                                {itemIdx + 1}
                              </div>
                              <div>
                                {item.title && <h4 className="font-medium text-foreground text-base mb-1">{item.title}</h4>}
                                <p className="text-sm leading-relaxed text-muted-foreground">{item.text}</p>
                              </div>
                            </li>
                          ))}
                        </ul>
                      )}
                    </section>
                  ))}
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
