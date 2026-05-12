import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { SiteNav, SiteFooter, WhatsAppFab } from "@/components/site-shell";

export const Route = createFileRoute("/articles")({
  head: () => ({
    meta: [
      { title: "Articles — Dr. Sai Preethi's Skin & Aesthetic Clinic" },
      { name: "description", content: "Evidence-based dermatology articles from Dr. Sai Preethi — pigmentation, lightening creams, melanin, and safe skin care." },
      { property: "og:title", content: "Articles — Dr. Sai Preethi" },
      { property: "og:description", content: "Reading on skin science, pigmentation, lightening creams, and dermatology in India." },
    ],
  }),
  component: ArticlesPage,
});

const Section = ({ heading, children }: { heading: string; children: React.ReactNode }) => (
  <section className="mt-14">
    <h2 className="font-serif text-3xl text-foreground md:text-4xl">{heading}</h2>
    <div className="mt-5 space-y-5 text-[1.0625rem] leading-[1.85] text-foreground/85">
      {children}
    </div>
  </section>
);

function ArticlesPage() {
  return (
    <div className="bg-background text-foreground">
      <SiteNav />
      <main className="px-6 pb-24 pt-32 lg:px-10 lg:pt-40">
        <article className="mx-auto max-w-3xl">
          <Link to="/" className="inline-flex items-center gap-1.5 text-sm text-muted-foreground hover:text-primary">
            <ArrowLeft size={14} /> Back to home
          </Link>

          <p className="mt-8 text-xs uppercase tracking-[0.25em] text-primary">Article · Pigmentation</p>
          <h1 className="mt-4 font-serif text-4xl leading-[1.1] text-foreground text-balance md:text-6xl">
            Why Melanin Is Your Skin's Best Friend
          </h1>
          <p className="mt-4 font-serif text-xl text-muted-foreground italic md:text-2xl">
            And why lightening creams may be doing more harm than good.
          </p>

          <div className="mt-10 aspect-[16/9] overflow-hidden rounded-2xl bg-muted soft-shadow">
            <img
              src="https://images.unsplash.com/photo-1556228720-195a672e8a03?w=1400&q=80"
              alt="Skincare"
              className="h-full w-full object-cover"
            />
          </div>

          <Section heading="Melanin is not your enemy — it's your secret protector">
            <p>
              Melanin is your skin's built-in shield. It blocks UV radiation, protects your DNA from sun damage, and reduces the long-term risk of skin cancer. For darker skin tones, especially across South India, it is a natural defence against year-round intense sun. Biology designed it that way for a reason.
            </p>
            <p>
              Wanting to address uneven pigmentation or dark spots is completely valid. But how you go about it matters — and this is where millions of people unknowingly put their skin at serious risk.
            </p>
          </Section>

          <Section heading="The science behind that dark patch on your face">
            <p>
              Pigmentation is controlled by specialised cells called melanocytes, which produce melanin and distribute it across the skin. When this process is disrupted — by sun exposure, hormonal changes, inflammation, or injury — melanin production becomes uneven, resulting in dark patches, spots, or discolouration.
            </p>
            <p>
              Treating it effectively requires understanding the underlying cause — not simply suppressing melanin production with a cream bought off a shelf.
            </p>
          </Section>

          <Section heading="That cream you just bought — have you read what's inside?">
            <p>
              Over-the-counter pigmentation and fairness creams are everywhere — pharmacies, supermarkets, and online platforms. Many carry compelling promises. But before you apply anything to your skin, the ingredient list deserves careful attention.
            </p>
            <p>These are the names you need to watch out for:</p>

            {[
              ["\"It works fast!\" — the problem with hydroquinone", "A commonly used skin lightening agent that, without medical supervision, can cause a condition called exogenous ochronosis — a paradoxical, permanent darkening of the skin that is extremely difficult to reverse."],
              ["\"Instant fairness\" — the truth about steroids", "Steroids temporarily lighten skin, but prolonged use creates dependency. When you stop, the pigmentation comes back darker than before — a condition dermatologists call Topical Steroid Dependent Face (TSDF)."],
              ["The fast results you didn't bargain for — mercury", "Mercury suppresses melanin aggressively, producing quick visible results. It is also toxic — accumulating in the body and causing kidney damage, neurological harm, and immune disruption. It is banned in regulated markets globally yet continues to appear in products sold openly."],
              ["The ingredient nobody talks about — lead and arsenic", "Studies testing commonly sold fairness creams in India have found trace amounts of lead and arsenic. No level of lead exposure is considered safe."],
            ].map(([t, d]) => (
              <div key={t} className="rounded-xl border-l-4 border-primary/70 bg-card p-5 soft-shadow">
                <p className="font-serif text-lg text-foreground">{t}</p>
                <p className="mt-2 text-base text-foreground/80">{d}</p>
              </div>
            ))}

            <p>If you see any of these on a label — or if there is no label at all — that is your signal to stop.</p>
          </Section>

          <Section heading="What happens when you keep using these creams">
            <p>The damage builds quietly. By the time it shows, it is much harder to undo.</p>
            <ul className="space-y-3 pl-0">
              {[
                "Your dark spots come back darker — once you stop, pigmentation rebounds worse than where you started.",
                "Your skin gets paper thin — fragile, easily bruised, and permanently sensitised.",
                "You can't stop even if you want to — your skin becomes dependent on the cream to feel normal.",
                "Your face starts changing colour permanently — a blue-black discolouration sets in that even dermatologists struggle to treat.",
                "The sun becomes your worst enemy — sensitivity spikes, making every hour outdoors accelerate the damage.",
                "Unexpected changes appear — acne flare-ups, facial hair growth, and a constant burning sensation.",
                "The damage goes deeper than your skin — mercury and heavy metals are silently absorbed into your bloodstream; kidneys, nerves, and immune system pay the price too.",
              ].map((p) => (
                <li key={p} className="flex gap-3">
                  <span className="mt-2 inline-block h-1.5 w-1.5 shrink-0 rounded-full bg-primary" />
                  <span>{p}</span>
                </li>
              ))}
            </ul>
          </Section>

          <Section heading="When a doctor prescribes it — that is a different story">
            <p>
              Some of these ingredients, including hydroquinone and certain steroids, do have a legitimate role in dermatological treatment. A qualified dermatologist may prescribe them for specific conditions, at carefully calibrated concentrations, for a defined and limited period, with regular monitoring.
            </p>
            <p>
              The danger is self-use — applying prescription-strength or unregulated formulations without a diagnosis, without the right concentration, and without a time limit. What works safely for six weeks under supervision can cause irreversible damage when used for six months on your own.
            </p>
            <p>
              When in doubt, consult a dermatologist before starting any pigmentation cream — not after the damage is done.
            </p>
          </Section>

          <Section heading="Ditch the creams — there is a smarter way">
            <p>
              The money spent on cream after cream, serum after serum, adds up faster than most people realise — often with little to show for it, and sometimes with damage that costs far more to fix.
            </p>
            <p>
              A single consultation with a dermatologist can do what years of over-the-counter products cannot — identify exactly what is causing your pigmentation, and treat it at the root. The right diagnosis leads to the right treatment. And the right treatment, delivered professionally, is not only safer — it is more effective and more economical in the long run.
            </p>
            <p className="font-serif text-xl italic text-foreground">
              Your skin deserves better than a gamble. Consult a dermatologist, understand your skin, and invest in solutions that actually work.
            </p>
          </Section>

          <Section heading="Frequently asked questions">
            {[
              ["Are all skin lightening creams harmful?", "Not all brightening products are dangerous. Many well-formulated options use safe ingredients such as niacinamide, kojic acid, azelaic acid, and tranexamic acid. The concern is specifically with unregulated products that contain steroids, mercury, or high concentrations of hydroquinone — often without disclosing these on the label."],
              ["How do I know if my cream contains steroids or mercury?", "Check the ingredient list carefully. Mercury may appear as mercurous chloride, calomel, mercuric, or Hg. Steroids may be listed as betamethasone, clobetasol, or fluocinolone. No label, an incomplete label, or no manufacturer details — treat it as unsafe."],
              ["Can I stop my fairness cream suddenly?", "If you have used a steroid-based cream for an extended period, stopping abruptly can trigger a severe rebound reaction. A dermatologist can guide a safe, gradual withdrawal and manage any skin reactions that follow."],
              ["Is it safe to use these creams during pregnancy?", "No. Most active depigmenting agents are contraindicated during pregnancy. Any pigmentation concerns during pregnancy should be discussed exclusively with a qualified dermatologist."],
              ["What is the right way to treat pigmentation?", "Effective treatment begins with identifying the underlying cause — sun damage, hormonal changes, post-inflammatory marks, or a specific skin condition. A dermatologist can recommend targeted, safe, and evidence-based treatments that address the root cause rather than temporarily masking symptoms."],
            ].map(([q, a]) => (
              <details key={q} className="group rounded-xl border border-border bg-card p-5">
                <summary className="cursor-pointer list-none font-serif text-lg text-foreground marker:hidden">
                  <span className="flex items-start justify-between gap-4">
                    <span>{q}</span>
                    <span className="text-primary transition group-open:rotate-45">+</span>
                  </span>
                </summary>
                <p className="mt-3 text-base text-foreground/80">{a}</p>
              </details>
            ))}
          </Section>

          <p className="mt-14 border-l-4 border-sage pl-5 font-serif text-xl italic text-foreground">
            Pigmentation is a medical concern, not a cosmetic shortcoming. Approaching it with the right information — and the right professional — is always the safer and more effective path.
          </p>

          <div className="mt-12 rounded-2xl gradient-warm p-8 text-center text-white md:p-12">
            <h3 className="font-serif text-3xl">Concerned about pigmentation?</h3>
            <p className="mx-auto mt-3 max-w-md text-white/85">Book a consultation with Dr. Sai Preethi for a diagnosis-first treatment plan.</p>
            <a href="/#contact" className="mt-6 inline-flex items-center gap-2 rounded-md bg-white px-6 py-3 text-sm font-medium text-foreground hover:opacity-90">
              Book Consultation <ArrowRight size={15} />
            </a>
          </div>
        </article>
      </main>
      <SiteFooter />
      <WhatsAppFab />
    </div>
  );
}
