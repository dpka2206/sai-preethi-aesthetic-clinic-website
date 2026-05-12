import { createFileRoute, Link } from "@tanstack/react-router";
import { useEffect, useRef, useState } from "react";
import {
  Menu, X, Microscope, Syringe, Baby, MapPin, Phone, Mail,
  Star, Instagram, Facebook, MessageCircle, ArrowRight, ChevronDown, Sparkles,
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
            "Expert dermatology and aesthetic treatments in Hyderabad — acne, hair loss, pigmentation, anti-ageing, paediatric dermatology, biologics, and advanced lasers.",
          medicalSpecialty: "Dermatology",
          address: {
            "@type": "PostalAddress",
            addressLocality: "Hyderabad",
            addressRegion: "Telangana",
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
      (entries) => entries.forEach((e) => e.isIntersecting && e.target.classList.add("in-view")),
      { threshold: 0.12 },
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
  return (
    <section id="top" className="relative pt-32 pb-20 lg:pt-40">
      <div className="mx-auto grid max-w-7xl gap-14 px-6 lg:grid-cols-12 lg:gap-16 lg:px-10">
        <div className="lg:col-span-7">
          <span className="inline-flex items-center gap-2 rounded-full border border-border bg-card px-4 py-1.5 text-xs uppercase tracking-[0.18em] text-muted-foreground">
            <span className="h-1.5 w-1.5 rounded-full bg-sage" /> Hyderabad, India
          </span>
          <h1 className="mt-6 font-serif text-5xl leading-[1.05] text-foreground text-balance md:text-7xl">
            Your skin deserves <em className="text-primary not-italic">expert</em> care.
          </h1>
          <p className="mt-6 max-w-xl text-lg leading-relaxed text-muted-foreground">
            Board-certified dermatologist in Hyderabad specialising in medical &amp; aesthetic
            dermatology — for every skin, every age, every concern.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <a
              href="#contact"
              className="rounded-md bg-primary px-6 py-3.5 text-sm font-medium text-primary-foreground transition hover:opacity-90"
            >
              Book Consultation
            </a>
            <a
              href="#services"
              className="rounded-md border border-foreground/20 px-6 py-3.5 text-sm font-medium text-foreground transition hover:border-foreground"
            >
              Explore Treatments
            </a>
          </div>
          <dl className="mt-12 grid grid-cols-3 gap-6 border-t border-border pt-8">
            {[
              ["15+", "Years Experience"],
              ["Advanced", "Biologics & Lasers"],
              ["Personalised", "Treatment Plans"],
            ].map(([k, v]) => (
              <div key={v}>
                <dt className="font-serif text-2xl text-foreground">{k}</dt>
                <dd className="mt-1 text-xs uppercase tracking-wider text-muted-foreground">{v}</dd>
              </div>
            ))}
          </dl>
        </div>

        <div className="relative lg:col-span-5">
          <div className="overflow-hidden rounded-2xl bg-muted editorial-shadow">
            <img
              src={heroImg}
              alt="Dr. Sai Preethi, dermatologist in Hyderabad"
              width={1024}
              height={1280}
              className="aspect-[4/5] w-full object-cover"
            />
          </div>
          <div className="absolute -bottom-6 -left-6 hidden max-w-[260px] rounded-xl border border-border bg-card p-5 soft-shadow md:block">
            <div className="flex items-center gap-1 text-primary">
              {[0, 1, 2, 3, 4].map((i) => (
                <Star key={i} size={14} fill="currentColor" strokeWidth={0} />
              ))}
            </div>
            <p className="mt-2 font-serif text-lg text-foreground">500+ Happy Patients</p>
            <p className="text-xs text-muted-foreground">Hyderabad's trusted dermatologist</p>
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

/* ---------- Why (4 cards arranged around centered title) ---------- */
function Why() {
  const ref = useReveal();
  const items = [
    { n: "01", Icon: Microscope, t: "Diagnosis-First Approach", d: "Every treatment plan starts with accurate diagnosis using dermoscopy, biopsy, and genetic testing." },
    { n: "02", Icon: Syringe, t: "Advanced Treatment Access", d: "Biologics, exosome therapy, HIFU, fractional CO₂ lasers, JAK inhibitors, and more." },
    { n: "03", Icon: Baby, t: "All Ages Welcome", d: "From newborns with skin conditions to adults seeking rejuvenation — specialised care at every life stage." },
    { n: "04", Icon: MapPin, t: "Hyderabad-Based, Globally Trained", d: "Advanced dermatological care calibrated for Indian skin tones (Fitzpatrick IV–VI)." },
  ];
  const Card = ({ item }: { item: typeof items[number] }) => {
    const { Icon, t, d, n } = item;
    return (
      <div className="reveal w-full max-w-sm rounded-xl border border-border bg-card p-6 soft-shadow transition hover:-translate-y-1">
        <div className="flex items-start justify-between">
          <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-accent text-primary">
            <Icon size={18} />
          </div>
          <span className="text-xs tracking-widest text-muted-foreground">{n} <span className="opacity-50">/ 04</span></span>
        </div>
        <h3 className="mt-5 font-serif text-lg text-foreground">{t}</h3>
        <p className="mt-2.5 text-sm leading-relaxed text-muted-foreground">{d}</p>
      </div>
    );
  };
  return (
    <section ref={ref} className="px-6 py-24 lg:px-10 lg:py-32">
      <div className="mx-auto max-w-7xl">
        <p className="text-center text-xs uppercase tracking-[0.25em] text-primary reveal">Why patients trust us</p>
        {/* Desktop: circular layout with center title */}
        <div className="relative mt-12 hidden lg:block">
          <div className="grid grid-cols-3 items-center gap-8">
            <div className="flex justify-end"><Card item={items[0]} /></div>
            <div className="text-center reveal">
              <div className="relative mx-auto flex h-72 w-72 items-center justify-center rounded-full border border-dashed border-primary/40">
                <div className="absolute inset-6 rounded-full border border-dashed border-sage/50" />
                <div className="relative">
                  <h2 className="font-serif text-5xl leading-tight text-foreground">Why<br/>us?</h2>
                </div>
              </div>
            </div>
            <div><Card item={items[2]} /></div>
            <div className="flex justify-end"><Card item={items[1]} /></div>
            <div />
            <div><Card item={items[3]} /></div>
          </div>
        </div>
        {/* Mobile / tablet stack */}
        <div className="mt-10 grid gap-5 md:grid-cols-2 lg:hidden">
          <h2 className="col-span-full text-center font-serif text-4xl text-foreground reveal">Why us?</h2>
          {items.map((it) => <Card key={it.n} item={it} />)}
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
          {featured.map(([name, , img], i) => (
            <Link
              to="/services"
              key={name}
              className="reveal group relative overflow-hidden rounded-xl bg-muted soft-shadow"
              style={{ animationDelay: `${(i % 6) * 60}ms` }}
            >
              <div className={`${heights[i]} w-full overflow-hidden`}>
                <img
                  src={img}
                  alt={name}
                  loading="lazy"
                  className="h-full w-full object-cover transition duration-700 group-hover:scale-105"
                />
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-black/45 via-black/0 to-black/0" />
              <div className="absolute left-5 top-5 rounded-md bg-card/90 px-3 py-1.5 text-xs font-medium text-foreground backdrop-blur">
                {name}
              </div>
              <div className="absolute bottom-5 right-5 flex h-9 w-9 items-center justify-center rounded-full bg-card text-primary transition group-hover:bg-primary group-hover:text-primary-foreground">
                <ArrowRight size={15} />
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
            <img src={aboutImg} alt="Dr. Sai Preethi in clinic" loading="lazy" className="aspect-[4/5] w-full object-cover" />
          </div>
          <div className="absolute -right-4 -top-4 hidden rounded-xl bg-sage px-4 py-3 text-sage-foreground md:block">
            <Sparkles size={18} />
          </div>
        </div>
        <div className="reveal">
          <p className="text-xs uppercase tracking-[0.25em] text-primary">About</p>
          <h2 className="mt-4 font-serif text-4xl text-foreground md:text-5xl">Meet Dr. Sai Preethi</h2>
          <p className="mt-3 text-base text-muted-foreground italic">
            Consultant Dermatologist & Aesthetic Physician, Hyderabad
          </p>
          <p className="mt-6 text-base leading-relaxed text-foreground/80">
            With over a decade of clinical excellence, Dr. Sai Preethi brings together deep
            diagnostic expertise and access to the most advanced treatments available in
            dermatology today — including biologics, regenerative therapies, and cutting-edge
            laser technologies. Her practice is built on one belief: that accurate diagnosis is
            the foundation of every great outcome.
          </p>
          <div className="mt-7 flex flex-wrap gap-2">
            {["MBBS", "MD Dermatology", "Fellowship in Aesthetic Medicine"].map((c) => (
              <span key={c} className="rounded-full border border-border bg-card px-4 py-1.5 text-xs text-foreground">
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
  ["Where is the clinic located in Hyderabad?", "Our clinic is located in Hyderabad, Telangana. Consultations are available in-clinic. Contact us to book your appointment."],
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
                  className={`grid overflow-hidden transition-all duration-300 ${
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
          Book a consultation with Dr. Sai Preethi today — available for in-clinic appointments in Hyderabad.
        </p>
        <div className="mt-8 flex flex-wrap justify-center gap-3">
          <a href="#" className="rounded-md bg-white px-7 py-3.5 text-sm font-medium text-foreground transition hover:opacity-90">
            Book Consultation
          </a>
          <a href="tel:+910000000000" className="rounded-md border border-white/70 px-7 py-3.5 text-sm font-medium text-white transition hover:bg-white/10">
            Call Us
          </a>
        </div>
        <div className="mt-10 flex flex-wrap justify-center gap-3 text-sm text-white">
          <span className="flex items-center gap-2 rounded-full bg-white/15 px-4 py-2 backdrop-blur"><MapPin size={14}/> Hyderabad, Telangana</span>
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
            Expert dermatology & aesthetic care in Hyderabad. Diagnosis-first, evidence-based, beautifully delivered.
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
            {services.map(([n]) => <li key={n}><a href="#services" className="hover:text-primary">{n}</a></li>)}
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
            <li className="flex items-start gap-2"><MapPin size={14} className="mt-0.5"/> Hyderabad, Telangana, India</li>
            <li className="flex items-start gap-2"><Phone size={14} className="mt-0.5"/> +91 00000 00000</li>
            <li className="flex items-start gap-2"><Mail size={14} className="mt-0.5"/> hello@drsaipreethi.com</li>
          </ul>
          <div className="mt-4 aspect-[16/10] w-full rounded-lg bg-muted" aria-hidden />
          <a href="#contact" className="mt-4 inline-flex w-full items-center justify-center rounded-md bg-primary px-5 py-2.5 text-sm font-medium text-primary-foreground hover:opacity-90">
            Book Now
          </a>
        </div>
      </div>
      <div className="mx-auto mt-12 flex max-w-7xl flex-wrap items-center justify-between gap-3 border-t border-border pt-6 text-xs text-muted-foreground">
        <p>© 2025 Dr. Sai Preethi's Skin & Aesthetic Clinic</p>
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
