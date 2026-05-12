import { createFileRoute, Link } from "@tanstack/react-router";
import { useEffect, useRef, useState } from "react";
import {
  Menu, X, Microscope, Syringe, Baby, MapPin, Phone, Mail,
  Star, Instagram, Facebook, MessageCircle, ArrowRight, ChevronDown, Sparkles, ArrowUpRight,
} from "lucide-react";
import heroImg from "@/assets/hero-doctor.jpg";
import aboutImg from "@/assets/about-doctor.jpg";
import { services, conditions } from "@/lib/clinic-data";

export const Route = createFileRoute("/")({
  head: () => ({
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": ["LocalBusiness", "MedicalBusiness"],
          name: "Dr. Sai Preethi's Skin & Aesthetic Clinic",
          description:
            "Expert dermatology and aesthetic treatments in Chennai — acne, hair loss, pigmentation, anti-ageing, paediatric dermatology, biologics, and advanced lasers.",
          medicalSpecialty: "Dermatology",
          address: {
            "@type": "PostalAddress",
            addressLocality: "Chennai",
            addressRegion: "Tamil Nadu",
            addressCountry: "IN",
          },
          priceRange: "$$",
        }),
      },
    ],
  }),
  component: HomePage,
});

/* ---------- Reveal hook ---------- */
function useReveal() {
  const ref = useRef<HTMLDivElement | null>(null);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            e.target.setAttribute("data-in-view", "true");
            io.unobserve(e.target);
          }
        });
      },
      { threshold: 0.1 }
    );
    el.querySelectorAll(".reveal").forEach((n) => io.observe(n));
    return () => io.disconnect();
  }, []);
  return ref;
}

/* ---------- Nav ---------- */
function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 30);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);
  const links = [
    ["Services", "#services"],
    ["About", "#about"],
    ["Treatments", "#treatments"],
    ["Articles", "/articles"],
    ["FAQs", "#faq"],
    ["Contact", "#contact"],
  ];
  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        scrolled ? "bg-background/85 backdrop-blur-md soft-shadow" : "bg-transparent"
      }`}
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4 lg:px-10">
        <a href="#top" className="flex flex-col leading-tight" aria-label="Home">
          <span className="font-serif text-xl text-foreground">Dr. Sai Preethi</span>
          <span className="text-[10px] uppercase tracking-[0.22em] text-muted-foreground">
            Skin & Aesthetic Clinic
          </span>
        </a>
        <nav className="hidden items-center gap-9 md:flex" aria-label="Main">
          {links.map(([l, h]) => (
            h.startsWith("/") ? (
              <Link key={l} to={h} className="text-sm text-foreground/80 transition hover:text-primary">{l}</Link>
            ) : (
              <a key={l} href={h} className="text-sm text-foreground/80 transition hover:text-primary">{l}</a>
            )
          ))}
        </nav>
        <a
          href="#contact"
          className="hidden rounded-md bg-primary px-5 py-2.5 text-sm font-medium text-primary-foreground transition hover:opacity-90 md:inline-flex"
        >
          Book Consultation
        </a>
        <button
          aria-label="Open menu"
          className="rounded-md p-2 md:hidden"
          onClick={() => setOpen((o) => !o)}
        >
          {open ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>
      {open && (
        <div className="border-t border-border bg-background md:hidden">
          <div className="flex flex-col gap-1 px-6 py-4">
            {links.map(([l, h]) => (
              h.startsWith("/") ? (
                <Link key={l} to={h} onClick={() => setOpen(false)} className="rounded px-2 py-3 text-sm text-foreground hover:bg-muted">{l}</Link>
              ) : (
                <a key={l} href={h} onClick={() => setOpen(false)} className="rounded px-2 py-3 text-sm text-foreground hover:bg-muted">{l}</a>
              )
            ))}
            <a
              href="#contact"
              onClick={() => setOpen(false)}
              className="mt-2 rounded-md bg-primary px-5 py-3 text-center text-sm font-medium text-primary-foreground"
            >
              Book Consultation
            </a>
          </div>
        </div>
      )}
    </header>
  );
}

/* ---------- Hero ---------- */
function Hero() {
  const ref = useReveal();
  return (
    <section id="top" ref={ref} className="relative pt-24 pb-16 lg:pt-32 lg:pb-24 overflow-hidden bg-background">
      {/* Curvy background lines */}
      <svg className="absolute top-0 left-0 w-full h-full text-primary/15 pointer-events-none" viewBox="0 0 100 100" preserveAspectRatio="none">
        <path d="M-10,60 Q30,90 50,40 T110,70" fill="none" stroke="currentColor" strokeWidth="0.4" />
        <path d="M-10,20 Q40,-10 70,40 T110,20" fill="none" stroke="currentColor" strokeWidth="0.2" />
        <path d="M80,-10 Q90,30 110,50" fill="none" stroke="currentColor" strokeWidth="0.3" />
      </svg>

      <div className="mx-auto grid max-w-7xl gap-14 px-6 lg:grid-cols-12 lg:gap-16 lg:px-10 items-center">
        {/* Text Column */}
        <div className="lg:col-span-6 reveal z-10">
          <span className="inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary/5 px-3 py-1 text-[10px] uppercase tracking-[0.18em] text-primary font-medium">
            <span className="h-1.5 w-1.5 rounded-full bg-primary animate-pulse" /> Chennai, India
          </span>
          <h1 className="mt-6 font-serif text-4xl leading-[1.15] text-foreground md:text-5xl lg:text-6xl text-balance">
            Your skin deserves <br />
            <em className="text-primary italic font-light">expert</em> care.
          </h1>
          <p className="mt-6 max-w-lg text-base leading-relaxed text-muted-foreground">
            Board-certified dermatologist specialising in medical &amp; aesthetic
            dermatology — precision care for every skin, every age, every concern.
          </p>
          <div className="mt-8 flex flex-wrap items-center gap-5">
            <a
              href="#contact"
              className="btn-glow-transition rounded-full bg-primary px-7 py-3.5 text-sm font-medium text-primary-foreground shadow-lg shadow-primary/25"
            >
              Book Consultation
            </a>
            <a
              href="#services"
              className="group inline-flex items-center gap-2 text-sm font-medium text-foreground transition hover:text-primary"
            >
              <span className="relative">
                Explore Treatments
                <span className="absolute -bottom-1 left-0 h-[1px] w-0 bg-primary transition-all duration-300 group-hover:w-full" />
              </span>
              <ArrowRight size={16} className="transition-transform group-hover:translate-x-1" />
            </a>
          </div>
          <dl className="mt-12 grid grid-cols-3 gap-6 border-t border-border pt-8">
            {[
              ["10+", "Years Experience"],
              ["Advanced", "Biologics & Lasers"],
              ["Personalised", "Treatment Plans"],
            ].map(([k, v]) => (
              <div key={v}>
                <dt className="font-serif text-xl text-foreground">{k}</dt>
                <dd className="mt-1 text-[10px] uppercase tracking-wider text-muted-foreground">{v}</dd>
              </div>
            ))}
          </dl>
        </div>

        {/* Sliced Image Grid Column */}
        <div className="relative mt-12 lg:col-span-6 lg:ml-auto reveal z-10 w-full max-w-md mx-auto lg:max-w-none">
          <div className="relative mx-auto w-full aspect-[4/5] lg:h-[500px] lg:w-[420px]">
            
            {/* The images masked via clip-path for perfectly aligned blocks */}
            {/* Added drop-shadow to make the sliced blocks pop beautifully */}
            <div className="absolute inset-0 w-full h-full pointer-events-none drop-shadow-2xl">
              {/* Left Column Blocks - Floating Drift Group 1 */}
              <img src={heroImg} className="absolute inset-0 w-full h-full object-cover animate-float-1" style={{ clipPath: "inset(25.75% 68.67% 51.5% 0% round 16px)" }} />
              <img src={heroImg} className="absolute inset-0 w-full h-full object-cover animate-float-1" style={{ clipPath: "inset(51.5% 68.67% 25.75% 0% round 16px)" }} />

              {/* Center Column Blocks - Floating Drift Group 2 */}
              <img src={heroImg} className="absolute inset-0 w-full h-full object-cover animate-float-2" style={{ clipPath: "inset(0% 34.34% 51.5% 34.33% round 16px)" }} />
              <img src={heroImg} className="absolute inset-0 w-full h-full object-cover animate-float-2" style={{ clipPath: "inset(51.5% 34.34% 25.75% 34.33% round 16px)" }} />
              <img src={heroImg} className="absolute inset-0 w-full h-full object-cover animate-float-2" style={{ clipPath: "inset(77.25% 34.34% 0% 34.33% round 16px)" }} />

              {/* Right Column Blocks - Floating Drift Group 3 */}
              <img src={heroImg} className="absolute inset-0 w-full h-full object-cover animate-float-3" style={{ clipPath: "inset(25.75% 0% 25.75% 68.66% round 16px)" }} />
              <img src={heroImg} className="absolute inset-0 w-full h-full object-cover animate-float-3" style={{ clipPath: "inset(77.25% 0% 0% 68.66% round 16px)" }} />
            </div>
            
          </div>
        </div>
      </div>
    </section>
  );
}

/* ---------- Marquee ---------- */
const marqueeItems = [
  "Paediatric Dermatology", "Hair Restoration", "Acne & Scar Treatment",
  "Laser Hair Reduction", "Anti-Ageing", "Hyperhidrosis", "Pigmentation",
  "Psoriasis & Vitiligo", "Autoimmune Skin Disorders", "Contouring",
];
function Marquee() {
  return (
    <section aria-label="Specialisations" className="border-y border-border bg-cream py-6">
      <div className="flex overflow-hidden">
        <div className="flex shrink-0 animate-marquee gap-12 pr-12">
          {[...marqueeItems, ...marqueeItems].map((it, i) => (
            <span
              key={i}
              className="flex items-center gap-12 font-serif text-2xl text-foreground/80 italic"
            >
              {it}
              <span className="text-primary">✦</span>
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ---------- Section header ---------- */
function SectionHead({ label, title, sub }: { label: string; title: string; sub?: string }) {
  return (
    <div className="mx-auto max-w-3xl text-center reveal">
      <p className="text-xs uppercase tracking-[0.25em] text-primary">{label}</p>
      <h2 className="mt-4 font-serif text-4xl text-foreground text-balance md:text-5xl">{title}</h2>
      {sub && <p className="mt-5 text-base text-muted-foreground md:text-lg">{sub}</p>}
    </div>
  );
}

/* ---------- Why (Modern Staggered Layout) ---------- */
function Why() {
  const ref = useReveal();
  const items = [
    { n: "01", Icon: Microscope, t: "Diagnosis-First Approach", d: "Every treatment plan starts with accurate diagnosis using dermoscopy, biopsy, and genetic testing." },
    { n: "02", Icon: Syringe, t: "Advanced Treatment Access", d: "Biologics, exosome therapy, HIFU, fractional CO₂ lasers, JAK inhibitors, and more." },
    { n: "03", Icon: Baby, t: "All Ages Welcome", d: "From newborns with skin conditions to adults seeking rejuvenation — specialised care at every life stage." },
    { n: "04", Icon: MapPin, t: "Globally Trained", d: "Advanced dermatological care calibrated for Indian skin tones (Fitzpatrick IV–VI)." },
  ];

  const Card = ({ item }: { item: typeof items[number] }) => {
    const { Icon, t, d, n } = item;
    return (
      <div className="flex h-full flex-col rounded-3xl border border-border bg-card p-8 soft-shadow transition duration-500 hover:-translate-y-2 hover:shadow-lg">
        <div className="mb-8 flex items-start justify-between">
          <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-accent text-primary">
            <Icon size={24} />
          </div>
          <span className="font-serif text-lg text-muted-foreground/60">{n}</span>
        </div>
        <h3 className="font-serif text-2xl leading-tight text-foreground">{t}</h3>
        <p className="mt-4 text-sm leading-relaxed text-muted-foreground">{d}</p>
      </div>
    );
  };

  return (
    <section ref={ref} className="px-6 py-24 lg:px-10 lg:py-32">
      <div className="mx-auto max-w-7xl">
        <div className="grid items-start gap-12 lg:grid-cols-12 lg:gap-16">
          {/* Left: Sticky Title */}
          <div className="lg:sticky lg:top-32 lg:col-span-5">
            <div className="reveal">
              <p className="text-xs uppercase tracking-[0.25em] text-primary">Why patients trust us</p>
              <h2 className="mt-5 font-serif text-5xl leading-tight text-foreground md:text-7xl">
                Why<br />choose us?
              </h2>
              <p className="mt-6 max-w-md text-lg text-muted-foreground">
                We combine advanced medical expertise with a deeply personalised, diagnosis-first approach to provide you with the finest dermatological care.
              </p>
              <div className="mt-10 hidden lg:block">
                <a
                  href="#contact"
                  className="inline-flex items-center gap-2 rounded-full bg-primary px-7 py-3.5 text-sm font-medium text-primary-foreground transition hover:opacity-90"
                >
                  Book your visit <ArrowRight size={16} />
                </a>
              </div>
            </div>
          </div>

          {/* Right: Staggered Cards */}
          <div className="grid gap-6 sm:grid-cols-2 lg:col-span-7 lg:pb-16">
            {items.map((it, i) => (
              <div key={it.n} className={`h-full ${i % 2 === 1 ? 'lg:translate-y-16' : ''}`}>
                <div className="reveal h-full">
                  <Card item={it} />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

/* ---------- Services preview (6 only, masonry, overlay labels) ---------- */
function Services() {
  const ref = useReveal();
  const featured = services.slice(0, 6);
  // alternating tall/short heights for a masonry feel
  const heights = ["aspect-[4/5]", "aspect-[4/3]", "aspect-[4/3]", "aspect-[4/3]", "aspect-[4/5]", "aspect-[4/3]"];
  return (
    <section id="services" ref={ref} className="bg-cream px-6 py-24 lg:px-10 lg:py-32">
      <div className="mx-auto max-w-7xl">
        <SectionHead
          label="Our specialisations"
          title="Comprehensive Dermatology & Aesthetic Services"
          sub="From your child's first rash to advanced skin rejuvenation — we provide evidence-based care across the full spectrum of dermatology."
        />
        <div className="mt-16 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {featured.map((service, i) => (
            <Link
              to={`/services#${service.id}`}
              key={service.id}
              className="reveal group relative flex flex-col overflow-hidden rounded-[2rem] bg-card border border-border/60 soft-shadow transition-all duration-500 hover:-translate-y-1 hover:editorial-shadow"
              style={{ animationDelay: `${(i % 6) * 60}ms` }}
            >
              <div className="aspect-[4/3] w-full overflow-hidden p-2 pb-0">
                <div className="h-full w-full overflow-hidden rounded-[1.5rem]">
                  <img
                    src={service.image}
                    alt={service.name}
                    loading="lazy"
                    className="h-full w-full object-cover transition duration-1000 group-hover:scale-105"
                  />
                </div>
              </div>
              <div className="flex flex-1 flex-col p-6 pt-5">
                <div className="flex items-start justify-between gap-4">
                  <h3 className="font-serif text-xl text-foreground leading-snug">{service.name}</h3>
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-primary/5 text-primary transition-all duration-300 group-hover:bg-primary group-hover:text-primary-foreground group-hover:shadow-md">
                    <ArrowRight size={16} className="-rotate-45 transition-transform duration-300 group-hover:rotate-0" />
                  </div>
                </div>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground line-clamp-3">
                  {service.shortDescription}
                </p>
              </div>
            </Link>
          ))}
        </div>
        <div className="mt-12 flex justify-center reveal">
          <Link
            to="/services"
            className="inline-flex items-center gap-2 rounded-md border border-foreground/20 px-7 py-3.5 text-sm font-medium text-foreground transition hover:border-foreground hover:bg-foreground hover:text-background"
          >
            Explore More Services <ArrowRight size={15} />
          </Link>
        </div>
      </div>
    </section>
  );
}

/* ---------- About ---------- */
function About() {
  const ref = useReveal();
  return (
    <section id="about" ref={ref} className="px-6 py-24 lg:px-10 lg:py-32">
      <div className="mx-auto grid max-w-7xl items-center gap-14 lg:grid-cols-2 lg:gap-20">
        <div className="reveal relative">
          <div className="overflow-hidden rounded-2xl editorial-shadow">
            <img src="/images/about/doctor.jpg" alt="Dr. Sai Preethi in clinic" loading="lazy" className="aspect-[4/5] w-full object-cover" />
          </div>
        </div>
        <div className="reveal">
          <p className="text-xs uppercase tracking-[0.25em] text-primary">About</p>
          <h2 className="mt-4 font-serif text-4xl text-foreground md:text-5xl">Meet Dr. Sai Preethi</h2>
          <p className="mt-3 text-base text-muted-foreground italic">
            Dermatologist, Aesthetic Dermatologist, Paediatric Dermatologist, & Dermato Surgeon
          </p>
          <p className="mt-6 text-base leading-relaxed text-foreground/80">
            Dr. Sai Preethi is a highly qualified dermatologist and a consultant at the prestigious Sri Ramachandra University. Her confident approach is the result of comprehensive exposure to complex dermatological medicine, a deep commitment to excellent patient care, and a strong orientation towards research — values she has imbibed from this renowned centre.
          </p>
          <div className="mt-7 flex flex-wrap gap-2">
            {["MBBS", "MD (DVL)", "Dermatologist"].map((c) => (
              <span key={c} className="rounded-full border border-border bg-card px-4 py-1.5 text-xs font-medium text-foreground">
                {c}
              </span>
            ))}
          </div>
          <a href="#contact" className="mt-8 inline-flex items-center gap-2 rounded-md bg-primary px-6 py-3 text-sm font-medium text-primary-foreground transition hover:opacity-90">
            Book a Consultation <ArrowRight size={16} />
          </a>
        </div>
      </div>
    </section>
  );
}

/* ---------- Treatments tabs ---------- */
const treatmentTabs: Record<string, [string, string][]> = {
  Regenerative: [
    ["PRP", "Platelet-rich plasma for hair & skin"],
    ["GFC", "Growth factor concentrate, next-gen PRP"],
    ["Exosome Therapy", "Cellular signalling for regeneration"],
    ["PDRN", "Salmon DNA polynucleotide repair"],
    ["Skin Boosters", "Deep hydration & glow"],
    ["Profhilo", "Bio-remodelling hyaluronic acid"],
  ],
  "Lasers & Energy": [
    ["Fractional CO₂ Laser", "Resurfacing for scars & texture"],
    ["Q-switched Nd:YAG", "Pigmentation & tattoo removal"],
    ["Picosecond Laser", "Stubborn pigment, melasma-safe"],
    ["Excimer Laser", "Targeted vitiligo & psoriasis"],
    ["Narrowband UVB", "Phototherapy for chronic conditions"],
    ["HIFU", "Non-surgical lifting & contouring"],
    ["Microneedling RF", "Collagen induction with radiofrequency"],
  ],
  Injectables: [
    ["Botulinum Toxin", "Wrinkles, sweating, masseter slimming"],
    ["Dermal Fillers", "Hyaluronic acid volumising"],
    ["Intralesional Injections", "Keloids & alopecia areata"],
    ["Fat Dissolving", "Double chin & body contouring"],
  ],
  "Biologics & Clinical": [
    ["IL-17 / IL-23 Inhibitors", "Severe psoriasis & autoimmune"],
    ["TNF-alpha Blockers", "Targeted immunomodulation"],
    ["JAK Inhibitors", "Vitiligo, alopecia areata, eczema"],
    ["IVIG", "Severe autoimmune dermatoses"],
    ["Immunosuppressants", "Chronic skin disease management"],
  ],
};
function Treatments() {
  const tabs = Object.keys(treatmentTabs);
  const [active, setActive] = useState(tabs[0]);
  const ref = useReveal();
  return (
    <section id="treatments" ref={ref} className="bg-cream px-6 py-24 lg:px-10 lg:py-32">
      <div className="mx-auto max-w-7xl">
        <SectionHead label="Modalities" title="Advanced Treatments Available at Our Clinic" />
        <div className="mt-12 flex flex-wrap justify-center gap-2 reveal">
          {tabs.map((t) => (
            <button
              key={t}
              onClick={() => setActive(t)}
              className={`rounded-full px-5 py-2.5 text-sm transition ${
                active === t
                  ? "bg-primary text-primary-foreground"
                  : "border border-border bg-card text-foreground hover:border-primary/40"
              }`}
            >
              {t}
            </button>
          ))}
        </div>
        <div className="mt-10 grid gap-4 reveal md:grid-cols-2 lg:grid-cols-3">
          {treatmentTabs[active].map(([n, d]) => (
            <div key={n} className="rounded-lg border border-border bg-card p-5 transition hover:-translate-y-0.5 hover:soft-shadow">
              <h4 className="font-serif text-lg text-foreground">{n}</h4>
              <p className="mt-1.5 text-sm text-muted-foreground">{d}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ---------- Conditions ---------- */
function Conditions() {
  const ref = useReveal();
  return (
    <section ref={ref} className="px-6 py-24 lg:px-10 lg:py-32">
      <div className="mx-auto max-w-6xl">
        <SectionHead
          label="Conditions"
          title="Skin Conditions We Diagnose & Treat"
          sub="If you're searching for treatment for any of the following — you're in the right place."
        />
        <div className="mt-12 flex flex-wrap justify-center gap-2.5 reveal">
          {conditions.map((c) => (
            <span
              key={c}
              className="rounded-full border border-border bg-card px-4 py-2 text-sm text-foreground transition hover:border-primary hover:text-primary"
            >
              {c}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ---------- Testimonials ---------- */
const testimonials = [
  ["After years of struggling with melasma, I finally saw real results. Dr. Sai Preethi's approach was methodical and the laser treatments transformed my skin.", "Ananya R.", "Melasma Treatment"],
  ["My daughter has had eczema since infancy. The paediatric dermatology care here was thorough, gentle, and actually worked.", "Priya S.", "Paediatric Eczema"],
  ["The hair restoration treatments — GFC combined with scalp threads — gave me visible results by the 3rd session. Highly recommend.", "Karan M.", "Hair Restoration"],
];
function Testimonials() {
  const ref = useReveal();
  return (
    <section ref={ref} className="bg-cream px-6 py-24 lg:px-10 lg:py-32">
      <div className="mx-auto max-w-7xl">
        <SectionHead label="Testimonials" title="What Our Patients Say" />
        <div className="mt-14 grid gap-6 md:grid-cols-3">
          {testimonials.map(([q, n, c], i) => (
            <figure
              key={n}
              className="reveal rounded-xl border border-border bg-card p-7 soft-shadow"
              style={{ animationDelay: `${i * 100}ms` }}
            >
              <div className="flex gap-1 text-primary">
                {[0,1,2,3,4].map((s) => <Star key={s} size={14} fill="currentColor" strokeWidth={0} />)}
              </div>
              <blockquote className="mt-4 font-serif text-lg leading-relaxed text-foreground">
                "{q}"
              </blockquote>
              <figcaption className="mt-5 border-t border-border pt-4 text-sm">
                <span className="text-foreground font-medium">{n}</span>
                <span className="text-muted-foreground"> — {c}</span>
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ---------- FAQ ---------- */
const faqs: [string, string][] = [
  ["What conditions does Dr. Sai Preethi treat?", "Full-spectrum dermatology including medical, paediatric, and aesthetic conditions. From acne, pigmentation, hair loss, and infections to autoimmune disorders, psoriasis, vitiligo, and advanced anti-ageing treatments."],
  ["How is the first consultation structured?", "The first visit involves a detailed clinical history, skin examination using dermoscopy where required, and a personalised diagnosis. Investigations like biopsy, blood tests, or patch testing may be recommended before a treatment plan is finalised."],
  ["Is laser hair reduction safe for Indian skin?", "Yes. We use advanced laser systems specifically calibrated for Fitzpatrick skin types IV–VI, which are most common in South India. Safety and efficacy are ensured with appropriate wavelengths and cooling systems."],
  ["What is the difference between PRP and GFC for hair loss?", "PRP (Platelet-Rich Plasma) uses growth factors from your own blood. GFC (Growth Factor Concentrate) is a refined, next-generation evolution with a higher concentration of targeted growth factors, offering enhanced results. Both are effective; your doctor will recommend the right option based on your assessment."],
  ["How many sessions are needed for acne scar treatment?", "Most patients see significant improvement over 3–6 sessions depending on scar type (ice-pick, boxcar, rolling), skin tone, and the treatments used. A personalised plan is created after your consultation."],
  ["Do you treat children with skin conditions?", "Yes. Our paediatric dermatology practice is specifically designed for children from newborns to teens. We manage eczema, birthmarks, fungal infections, alopecia, pigmentation disorders, and rare inherited skin conditions."],
  ["What are biologics and do you offer them?", "Biologics are advanced, targeted therapies used for conditions like moderate-to-severe psoriasis and autoimmune skin disorders. We offer IL-17 inhibitors, IL-23 inhibitors, TNF-alpha blockers, and JAK inhibitors — the gold standard in contemporary dermatological care."],
  ["How long do Botox results last for hyperhidrosis?", "Results typically last 6–12 months. Most patients notice a significant reduction in sweating within 1–2 weeks of treatment."],
  ["What pigmentation treatments do you offer?", "We use chemical peels, Q-switched Nd:YAG laser, picosecond laser, and glutathione IV therapy. Every plan includes a photoprotection protocol to prevent recurrence."],
  ["Where is the clinic located?", "Our clinic is located in Chennai, Tamil Nadu. Consultations are available in-clinic. Contact us to book your appointment."],
];
function FAQ() {
  const [open, setOpen] = useState<number | null>(0);
  const ref = useReveal();
  return (
    <section id="faq" ref={ref} className="px-6 py-24 lg:px-10 lg:py-32">
      <div className="mx-auto max-w-3xl">
        <SectionHead label="FAQ" title="Frequently Asked Questions" sub="Everything you need to know before your visit." />
        <div className="mt-12 divide-y divide-border border-y border-border reveal">
          {faqs.map(([q, a], i) => {
            const isOpen = open === i;
            return (
              <div key={q}>
                <button
                  aria-expanded={isOpen}
                  aria-controls={`faq-${i}`}
                  onClick={() => setOpen(isOpen ? null : i)}
                  className="flex w-full items-center justify-between gap-6 py-5 text-left transition hover:text-primary"
                >
                  <span className="font-serif text-lg text-foreground md:text-xl">{q}</span>
                  <ChevronDown
                    size={20}
                    className={`shrink-0 text-muted-foreground transition ${isOpen ? "rotate-180" : ""}`}
                  />
                </button>
                <div
                  id={`faq-${i}`}
                  className={`grid overflow-hidden transition-all duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] ${
                    isOpen ? "grid-rows-[1fr] pb-6" : "grid-rows-[0fr]"
                  }`}
                >
                  <div className="overflow-hidden text-sm leading-relaxed text-muted-foreground md:text-base">
                    {a}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

/* ---------- Contact CTA ---------- */
function ContactCTA() {
  return (
    <section id="contact" className="px-6 py-16 lg:px-10 lg:py-24">
      <div className="mx-auto max-w-7xl rounded-3xl gradient-warm px-8 py-16 text-center md:px-16 md:py-24">
        <h2 className="mx-auto max-w-3xl font-serif text-4xl leading-tight text-white text-balance md:text-6xl">
          Ready to transform your skin?
        </h2>
        <p className="mx-auto mt-5 max-w-xl text-base text-white/85 md:text-lg">
          Book a consultation with Dr. Sai Preethi today — available for in-clinic appointments in Chennai.
        </p>
        <div className="mt-8 flex flex-wrap justify-center gap-3">
          <a href="#" className="btn-glow-transition rounded-md bg-white px-7 py-3.5 text-sm font-medium text-foreground">
            Book Consultation
          </a>
          <a href="tel:+910000000000" className="rounded-md border border-white/70 px-7 py-3.5 text-sm font-medium text-white transition hover:bg-white/10">
            Call Us
          </a>
        </div>
        <div className="mt-10 flex flex-wrap justify-center gap-3 text-sm text-white">
          <span className="flex items-center gap-2 rounded-full bg-white/15 px-4 py-2 backdrop-blur"><MapPin size={14}/> Chennai, Tamil Nadu</span>
          <span className="flex items-center gap-2 rounded-full bg-white/15 px-4 py-2 backdrop-blur"><Phone size={14}/> +91 00000 00000</span>
          <span className="flex items-center gap-2 rounded-full bg-white/15 px-4 py-2 backdrop-blur"><Mail size={14}/> hello@drsaipreethi.com</span>
        </div>
      </div>
    </section>
  );
}

/* ---------- Footer ---------- */
function Footer() {
  return (
    <footer className="border-t border-border bg-cream px-6 py-16 lg:px-10">
      <div className="mx-auto grid max-w-7xl gap-12 md:grid-cols-2 lg:grid-cols-4">
        <div>
          <p className="font-serif text-2xl text-foreground">Dr. Sai Preethi</p>
          <p className="mt-1 text-xs uppercase tracking-[0.22em] text-muted-foreground">Skin & Aesthetic Clinic</p>
          <p className="mt-5 max-w-xs text-sm text-muted-foreground">
            Expert dermatology & aesthetic care. Diagnosis-first, evidence-based, beautifully delivered.
          </p>
          <div className="mt-6 flex gap-3">
            {[Instagram, Facebook, MessageCircle].map((I, i) => (
              <a key={i} href="#" aria-label="social" className="flex h-9 w-9 items-center justify-center rounded-full border border-border text-foreground transition hover:bg-primary hover:text-primary-foreground">
                <I size={15} />
              </a>
            ))}
          </div>
        </div>
        <div>
          <p className="font-serif text-sm uppercase tracking-wider text-foreground">Services</p>
          <ul className="mt-5 space-y-2.5 text-sm text-muted-foreground">
            {services.map((s) => <li key={s.id}><a href="#services" className="hover:text-primary">{s.name}</a></li>)}
          </ul>
        </div>
        <div>
          <p className="font-serif text-sm uppercase tracking-wider text-foreground">Conditions Treated</p>
          <ul className="mt-5 space-y-2.5 text-sm text-muted-foreground">
            {conditions.slice(0, 8).map((c) => <li key={c}><a href="#" className="hover:text-primary">{c}</a></li>)}
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
          <a href="#contact" className="btn-glow-transition mt-4 inline-flex w-full items-center justify-center rounded-md bg-primary px-5 py-2.5 text-sm font-medium text-primary-foreground">
            Book Now
          </a>
        </div>
      </div>
      <div className="mx-auto mt-12 flex max-w-7xl flex-wrap items-center justify-between gap-3 border-t border-border pt-6 text-xs text-muted-foreground">
        <p>© Dr. Sai Preethi's Skin & Aesthetic Clinic | Powered by <a href="https://editcomedia.com" target="_blank" rel="noopener noreferrer" className="hover:text-primary transition-colors">Editcomedia</a></p>
        <div className="flex gap-5">
          <a href="#" className="hover:text-primary">Privacy Policy</a>
          <a href="#" className="hover:text-primary">Terms</a>
        </div>
      </div>
    </footer>
  );
}

/* ---------- WhatsApp FAB ---------- */
function WhatsAppFab() {
  return (
    <a
      href="https://wa.me/910000000000"
      aria-label="Chat on WhatsApp"
      className="fixed bottom-6 right-6 z-40 flex h-14 w-14 items-center justify-center rounded-full bg-[#25D366] text-white shadow-lg transition hover:scale-105"
      target="_blank"
      rel="noopener"
    >
      <MessageCircle size={24} />
    </a>
  );
}

function HomePage() {
  return (
    <div className="bg-background text-foreground">
      <Nav />
      <main>
        <Hero />
        <Marquee />
        <Why />
        <Services />
        <About />
        <Treatments />
        <Conditions />
        <Testimonials />
        <FAQ />
        <ContactCTA />
      </main>
      <Footer />
      <WhatsAppFab />
    </div>
  );
}
