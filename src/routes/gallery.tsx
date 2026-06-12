import { createFileRoute } from "@tanstack/react-router";
import { SiteNav, SiteFooter, WhatsAppFab } from "@/components/site-shell";

export const Route = createFileRoute("/gallery")({
  component: GalleryPage,
});

function GalleryPage() {
  // We have 17 clinic images
  const images = Array.from({ length: 17 }, (_, i) => `/images/clinic/facility_${i + 1}.jpg`);

  return (
    <div className="bg-background text-foreground min-h-screen flex flex-col">
      <SiteNav />
      <main className="flex-1 pt-32 pb-24 px-6 md:px-10 max-w-7xl mx-auto w-full">
        <div className="text-center max-w-3xl mx-auto mb-16 reveal" data-in-view="true">
          <p className="text-xs uppercase tracking-[0.25em] text-primary mb-4">Gallery</p>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif text-foreground mb-6">Our Clinic</h1>
          <p className="text-muted-foreground text-lg mb-8">
            Take a look inside our state-of-the-art facility designed to provide you with the highest standard of dermatological and aesthetic care. Our clinic features modern consultation rooms, advanced laser procedure suites, and a welcoming waiting area designed to make your visit as comfortable as possible.
          </p>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-sm font-medium">
            <div className="p-4 rounded-xl bg-card border border-border">Advanced Laser Rooms</div>
            <div className="p-4 rounded-xl bg-card border border-border">Sterile Procedure Suites</div>
            <div className="p-4 rounded-xl bg-card border border-border">Private Consultation</div>
            <div className="p-4 rounded-xl bg-card border border-border">Comfortable Lounge</div>
          </div>
        </div>
        
        <div className="columns-1 sm:columns-2 lg:columns-3 gap-6 space-y-6">
          {images.map((src, i) => (
            <div key={i} className="break-inside-avoid relative overflow-hidden rounded-2xl bg-muted group border border-border/50 reveal" style={{ animationDelay: `${(i % 5) * 100}ms` }} data-in-view="true">
              <img 
                src={src} 
                alt={`Clinic facility ${i + 1}`} 
                loading="lazy" 
                decoding="async"
                className="w-full object-cover transition-transform duration-700 group-hover:scale-105" 
              />
            </div>
          ))}
        </div>
      </main>
      <SiteFooter />
      <WhatsAppFab />
    </div>
  );
}
