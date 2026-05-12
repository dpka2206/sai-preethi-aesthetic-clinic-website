import { Link } from "@tanstack/react-router";
import { Menu, X, MessageCircle, Instagram, Facebook, MapPin, Phone, Mail } from "lucide-react";
import { useEffect, useState } from "react";
import { services, conditions } from "@/lib/clinic-data";

export function SiteNav() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 30);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);
  const links: [string, string][] = [
    ["Services", "/services"],
    ["About", "/#about"],
    ["Treatments", "/#treatments"],
    ["Articles", "/articles"],
    ["FAQs", "/#faq"],
    ["Contact", "/#contact"],
  ];
  return (
    <header className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${scrolled ? "bg-background/85 backdrop-blur-md soft-shadow" : "bg-background/70 backdrop-blur-sm"}`}>
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4 lg:px-10">
        <Link to="/" className="flex flex-col leading-tight">
          <span className="font-serif text-xl text-foreground">Dr. Sai Preethi</span>
          <span className="text-[10px] uppercase tracking-[0.22em] text-muted-foreground">Skin & Aesthetic Clinic</span>
        </Link>
        <nav className="hidden items-center gap-9 md:flex">
          {links.map(([l, h]) =>
            h.includes("#") ? (
              <a key={l} href={h} className="text-sm text-foreground/80 transition hover:text-primary">{l}</a>
            ) : (
              <Link key={l} to={h} className="text-sm text-foreground/80 transition hover:text-primary">{l}</Link>
            )
          )}
        </nav>
        <a href="/#contact" className="btn-glow-transition hidden rounded-md bg-primary px-5 py-2.5 text-sm font-medium text-primary-foreground md:inline-flex">Book Consultation</a>
        <button aria-label="menu" className="rounded-md p-2 md:hidden" onClick={() => setOpen((o) => !o)}>
          {open ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>
      {open && (
        <div className="border-t border-border bg-background md:hidden">
          <div className="flex flex-col gap-1 px-6 py-4">
            {links.map(([l, h]) =>
              h.includes("#") ? (
                <a key={l} href={h} onClick={() => setOpen(false)} className="rounded px-2 py-3 text-sm text-foreground hover:bg-muted">{l}</a>
              ) : (
                <Link key={l} to={h} onClick={() => setOpen(false)} className="rounded px-2 py-3 text-sm text-foreground hover:bg-muted">{l}</Link>
              )
            )}
            <a href="/#contact" onClick={() => setOpen(false)} className="mt-2 rounded-md bg-primary px-5 py-3 text-center text-sm font-medium text-primary-foreground">Book Consultation</a>
          </div>
        </div>
      )}
    </header>
  );
}

export function SiteFooter() {
  return (
    <footer className="border-t border-border bg-cream px-6 py-16 lg:px-10">
      <div className="mx-auto grid max-w-7xl gap-12 md:grid-cols-2 lg:grid-cols-4">
        <div>
          <p className="font-serif text-2xl text-foreground">Dr. Sai Preethi</p>
          <p className="mt-1 text-xs uppercase tracking-[0.22em] text-muted-foreground">Skin & Aesthetic Clinic</p>
          <p className="mt-5 max-w-xs text-sm text-muted-foreground">Expert dermatology & aesthetic care. Diagnosis-first, evidence-based, beautifully delivered.</p>
          <div className="mt-6 flex gap-3">
            {[Instagram, Facebook, MessageCircle].map((I, i) => (
              <a key={i} href="#" aria-label="social" className="flex h-9 w-9 items-center justify-center rounded-full border border-border text-foreground hover:bg-primary hover:text-primary-foreground"><I size={15} /></a>
            ))}
          </div>
        </div>
        <div>
          <p className="font-serif text-sm uppercase tracking-wider text-foreground">Services</p>
          <ul className="mt-5 space-y-2.5 text-sm text-muted-foreground">
            {services.map((s) => <li key={s.id}><Link to="/services" className="hover:text-primary">{s.name}</Link></li>)}
          </ul>
        </div>
        <div>
          <p className="font-serif text-sm uppercase tracking-wider text-foreground">Conditions Treated</p>
          <ul className="mt-5 space-y-2.5 text-sm text-muted-foreground">
            {conditions.slice(0, 8).map((c) => <li key={c}>{c}</li>)}
          </ul>
        </div>
        <div>
          <p className="font-serif text-sm uppercase tracking-wider text-foreground">Contact</p>
          <ul className="mt-5 space-y-2.5 text-sm text-muted-foreground">
            <li className="flex items-start gap-2"><MapPin size={14} className="mt-0.5"/> Chennai, Tamil Nadu, India</li>
            <li className="flex items-start gap-2"><Phone size={14} className="mt-0.5"/> +91 00000 00000</li>
            <li className="flex items-start gap-2"><Mail size={14} className="mt-0.5"/> hello@drsaipreethi.com</li>
          </ul>
          <div className="mt-4 aspect-[16/10] w-full overflow-hidden rounded-xl border border-border/40 bg-white p-3 flex items-center justify-center soft-shadow" aria-hidden>
            <img src="/images/logo.png" alt="Dr. Sai Preethi's Skin and Aesthetic Clinic Logo" className="h-full w-full object-contain" />
          </div>
          <a href="/#contact" className="btn-glow-transition mt-4 inline-flex w-full items-center justify-center rounded-md bg-primary px-5 py-2.5 text-sm font-medium text-primary-foreground">
            Book Consultation
          </a>
        </div>
      </div>
      <div className="mx-auto mt-12 flex max-w-7xl flex-wrap items-center justify-between gap-3 border-t border-border pt-6 text-xs text-muted-foreground">
        <p>© Dr. Sai Preethi's Skin & Aesthetic Clinic | Powered by <a href="https://editcomedia.com" target="_blank" rel="noopener noreferrer" className="hover:text-primary transition-colors">Editcomedia</a></p>
        <div className="flex gap-5"><a href="#" className="hover:text-primary">Privacy</a><a href="#" className="hover:text-primary">Terms</a></div>
      </div>
    </footer>
  );
}

export function WhatsAppFab() {
  return (
    <a href="https://wa.me/910000000000" aria-label="WhatsApp" target="_blank" rel="noopener" className="whatsapp-pulse fixed bottom-6 right-6 z-40 flex h-14 w-14 items-center justify-center rounded-full bg-[#25D366] text-white shadow-lg transition hover:scale-105">
      <MessageCircle size={24} />
    </a>
  );
}
