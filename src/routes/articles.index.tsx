import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight } from "lucide-react";
import { SiteNav, SiteFooter, WhatsAppFab } from "@/components/site-shell";
import { articles } from "@/lib/articles-data";

export const Route = createFileRoute("/articles/")({
  head: () => ({
    meta: [
      { title: "Articles — Dr. Sai Preethi's Skin & Aesthetic Clinic" },
      { name: "description", content: "Evidence-based dermatology articles from Dr. Sai Preethi — pigmentation, lightening creams, melanin, and safe skin care." },
      { property: "og:title", content: "Articles — Dr. Sai Preethi" },
      { property: "og:description", content: "Reading on skin science, pigmentation, lightening creams, and dermatology in India." },
    ],
  }),
  component: ArticlesIndexPage,
});

function ArticlesIndexPage() {
  return (
    <div className="bg-background text-foreground">
      <SiteNav />
      <main className="px-6 pb-24 pt-32 lg:px-10 lg:pt-40">
        <div className="mx-auto max-w-7xl">
          <div className="max-w-2xl">
            <h1 className="font-serif text-4xl text-foreground md:text-5xl lg:text-6xl">
              Dermatology Insights
            </h1>
            <p className="mt-6 text-lg text-foreground/80">
              Evidence-based reading on skin science, advanced treatments, and how to properly care for your skin, directly from Dr. Sai Preethi.
            </p>
          </div>

          <div className="mt-16 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {articles.map((article) => (
              <Link 
                key={article.id} 
                to="/articles/$articleId" 
                params={{ articleId: article.id }}
                className="group flex flex-col overflow-hidden rounded-2xl border border-border bg-card soft-shadow transition-all hover:-translate-y-1 hover:shadow-lg"
              >
                <div className="aspect-[16/10] overflow-hidden bg-muted">
                  <img
                    src={article.image}
                    alt={article.title}
                    className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                </div>
                <div className="flex flex-1 flex-col p-6 lg:p-8">
                  <div className="flex items-center gap-3 text-xs font-medium text-muted-foreground uppercase tracking-wider">
                    <span className="text-primary">{article.category}</span>
                    <span>•</span>
                    <span>{article.readTime}</span>
                  </div>
                  <h3 className="mt-4 font-serif text-2xl leading-tight text-foreground group-hover:text-primary transition-colors">
                    {article.title}
                  </h3>
                  <p className="mt-3 text-sm text-foreground/70 line-clamp-2">
                    {article.subtitle}
                  </p>
                  <div className="mt-auto pt-6 flex items-center gap-2 text-sm font-medium text-primary">
                    Read Article <ArrowRight size={16} className="transition-transform group-hover:translate-x-1" />
                  </div>
                </div>
              </Link>
            ))}
          </div>

          <div className="mt-20 rounded-2xl gradient-warm p-8 text-center text-white md:p-12">
            <h3 className="font-serif text-3xl">Have a specific skin concern?</h3>
            <p className="mx-auto mt-3 max-w-md text-white/85">Book a consultation with Dr. Sai Preethi for an accurate diagnosis and treatment plan.</p>
            <a href="/#contact" className="mt-6 inline-flex items-center gap-2 rounded-md bg-white px-6 py-3 text-sm font-medium text-foreground hover:opacity-90">
              Book Consultation <ArrowRight size={15} />
            </a>
          </div>
        </div>
      </main>
      <SiteFooter />
      <WhatsAppFab />
    </div>
  );
}
