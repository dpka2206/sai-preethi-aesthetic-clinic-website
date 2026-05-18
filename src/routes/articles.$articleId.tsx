import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { BookConsultation } from "@/components/book-consultation";
import { SiteNav, SiteFooter, WhatsAppFab } from "@/components/site-shell";
import { articles } from "@/lib/articles-data";

export const Route = createFileRoute("/articles/$articleId")({
  component: ArticleContentPage,
});

function ArticleContentPage() {
  const { articleId } = Route.useParams();
  
  const article = articles.find((a) => a.id === articleId);

  if (!article) {
    return (
      <div className="flex min-h-screen flex-col bg-background text-foreground">
        <SiteNav />
        <main className="flex-1 px-6 flex items-center justify-center">
          <div className="max-w-md text-center">
            <h1 className="font-serif text-4xl text-foreground">Article not found</h1>
            <p className="mt-4 text-muted-foreground">The article you are looking for does not exist or has been moved.</p>
            <Link to="/articles" className="mt-8 inline-flex items-center justify-center rounded-md bg-primary px-6 py-3 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90">
              Return to Articles
            </Link>
          </div>
        </main>
        <SiteFooter />
      </div>
    );
  }

  return (
    <div className="bg-background text-foreground">
      <SiteNav />
      <main className="px-6 pb-24 pt-32 lg:px-10 lg:pt-40">
        <article className="mx-auto max-w-3xl">
          <Link to="/articles" className="inline-flex items-center gap-1.5 text-sm text-muted-foreground hover:text-primary transition-colors">
            <ArrowLeft size={14} /> Back to all articles
          </Link>

          <p className="mt-8 text-xs uppercase tracking-[0.25em] text-primary">
            Article · {article.category}
          </p>
          <h1 className="mt-4 font-serif text-4xl leading-[1.1] text-foreground text-balance md:text-6xl">
            {article.title}
          </h1>
          <p className="mt-4 font-serif text-xl text-muted-foreground italic md:text-2xl">
            {article.subtitle}
          </p>

          <div className="mt-10 aspect-[16/9] overflow-hidden rounded-2xl bg-muted soft-shadow">
            <img
              src={article.image}
              alt={article.title}
              className="h-full w-full object-cover"
            />
          </div>

          <div className="mt-10 content-body">
            {article.content}
          </div>

          <div className="mt-16 rounded-2xl gradient-warm p-8 text-center text-white md:p-12">
            <h3 className="font-serif text-3xl">Have a specific skin concern?</h3>
            <p className="mx-auto mt-3 max-w-md text-white/85">Book a consultation with Dr. Sai Preethi for a diagnosis-first treatment plan.</p>
            <BookConsultation className="mt-6 inline-flex items-center gap-2 rounded-md bg-white px-6 py-3 text-sm font-medium text-foreground hover:opacity-90">
              Book Consultation <ArrowRight size={15} />
            </BookConsultation>
          </div>
        </article>
      </main>
      <SiteFooter />
      <WhatsAppFab />
    </div>
  );
}
