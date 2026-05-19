export interface ServiceSection {
  title?: string;
  paragraphs?: string[];
  list?: { title?: string; text: string }[];
  bulletPoints?: string[];
}

export interface ServiceData {
  id: string;
  name: string;
  shortDescription: string;
  image: string;
  pageHeadline: string;
  subheading: string;
  intro?: string[];
  sections: ServiceSection[];
}

export const services: ServiceData[] = [
  {
    id: "paediatric-dermatology",
    name: "Paediatric Dermatology",
    shortDescription: "Expert skin care for children, from newborns to teens. We manage conditions like Eczema and birthmark with thorough diagnostic approach",
    image: "/images/services/paediatric_dermatology_care.png",
    pageHeadline: "Expert Skin Care for Children — From Newborns to Teens",
    subheading: "Because young skin deserves specialised attention",
    intro: [
      "Children's skin is thinner, more sensitive, and far more reactive than adult skin. Diagnosing and treating skin conditions in children requires a distinct clinical approach — one that is thorough, gentle, and informed by the latest advances in dermatological science. At Dr. Sai Preethi's Clinic, our paediatric dermatology practice is built around exactly that."
    ],
    sections: [
      {
        title: "What We Treat",
        paragraphs: [
          "We evaluate and manage the full spectrum of skin, hair, and nail conditions in children, including eczema and allergic skin reactions, birthmarks and pigmentation disorders, fungal, bacterial, and viral skin infections, alopecia, white patches, rashes, and rare inherited skin disorders."
        ]
      },
      {
        title: "Our Diagnostic Approach",
        paragraphs: [
          "Accurate diagnosis is the foundation of effective treatment. For complex or unclear presentations, we go beyond clinical examination with:"
        ],
        list: [
          { title: "Skin biopsy", text: "Tissue analysis to confirm diagnoses in inflammatory, infectious, or tumour-related conditions" },
          { title: "Genetic testing and molecular studies", text: "For inherited or rare genodermatoses, identifying the underlying mutation to guide targeted management" },
          { title: "Patch testing and allergy panels", text: "To identify contact allergens and environmental triggers" },
          { title: "Dermoscopy", text: "Non-invasive, high-magnification imaging for detailed skin analysis without discomfort" }
        ]
      },
      {
        paragraphs: [
          "Treatment plans are designed with the child's age, skin sensitivity, and long-term wellbeing in mind. We take the time to speak with both the child and their parents, ensuring every family understands the condition and what to expect at each stage of care."
        ]
      }
    ]
  },
  {
    id: "hair-restoration",
    name: "Hair Regrowth & Restoration",
    shortDescription: "Reclaim your hair with advanced solutions. We use a diagnosis-first approach combined with next-generation treatments like PRP, GFC, and Exosomes.",
    image: "/images/services/hair_restoration_1778608442679.png",
    pageHeadline: "Reclaim Your Hair — Advanced Solutions for Hair Loss & Thinning",
    subheading: "From diagnosis to restoration, a complete approach to hair health",
    intro: [
      "Effective hair restoration begins not at the treatment chair, but at the diagnostic table. At Dr. Sai Preethi's Clinic, we evaluate the root cause of your hair loss before recommending any treatment — because the right diagnosis makes all the difference."
    ],
    sections: [
      {
        title: "Our Diagnostic Evaluation",
        paragraphs: [
          "We conduct a thorough workup that includes trichoscopy, blood investigations, scalp biopsy where indicated, and an assessment of genetic predisposition, nutritional status, hormonal profile, and lifestyle factors."
        ]
      },
      {
        title: "Advanced Hair Restoration Treatments",
        list: [
          { title: "PRP (Platelet-Rich Plasma)", text: "Growth factors derived from your own blood, delivered into the scalp to stimulate dormant follicles" },
          { title: "GFC (Growth Factor Concentrate)", text: "A refined, next-generation evolution of PRP with a higher concentration of targeted growth factors" },
          { title: "Exosome Therapy", text: "One of the most advanced regenerative treatments available, triggering follicle repair and regeneration at a cellular level" },
          { title: "PDRN (Polydeoxyribonucleotide)", text: "A regenerative agent that promotes tissue repair and reduces scalp inflammation to support follicle recovery" },
          { title: "Scalp Threads", text: "Dissolvable threads that improve scalp circulation, stimulate collagen, and create a more favourable environment for hair growth" }
        ]
      },
      {
        paragraphs: [
          "Most patients notice reduced shedding within the first few sessions and visible regrowth over 3–6 months. Progress is monitored at every stage and the treatment plan adjusted based on your response."
        ]
      }
    ]
  },
  {
    id: "hyperhidrosis",
    name: "Hyperhidrosis Treatment",
    shortDescription: "Advanced treatment for excessive sweating. Utilizing targeted Botulinum Toxin injections, we provide significant reduction in sweating.",
    image: "/images/services/hyperhidrosis_1778608464584.png",
    pageHeadline: "Living with Excessive Sweating? There Is an Effective Solution.",
    subheading: "Advanced treatment for hyperhidrosis — so you can live without limits",
    intro: [
      "If you find yourself drenching through clothes, avoiding handshakes, or planning your day around sweat, you are not alone. Hyperhidrosis is a medical condition — and at Dr. Sai Preethi's Clinic, it is one we treat with precision."
    ],
    sections: [
      {
        title: "Our Diagnostic Evaluation",
        paragraphs: [
          "We begin with a thorough clinical assessment to determine the type, severity, and impact of your hyperhidrosis using the Hyperhidrosis Disease Severity Scale (HDSS), alongside investigations where needed to rule out underlying causes."
        ]
      },
      {
        title: "Treatment: Botulinum Toxin (Botox) Injections",
        paragraphs: [
          "For moderate to severe hyperhidrosis, Botulinum Toxin (Botox) is one of the most effective and clinically validated treatments available. Small, precise injections are administered into the affected area — underarms, palms, or soles — temporarily blocking the nerve signals that trigger the sweat glands."
        ],
        bulletPoints: [
          "Results typically last 6–12 months",
          "Significant reduction in sweating noticed within 1–2 weeks",
          "Quick, minimally invasive, and requires no downtime",
          "Well-tolerated, including for patients who have not responded to other treatments"
        ]
      },
      {
        paragraphs: [
          "A single consultation can be the turning point."
        ]
      }
    ]
  },
  {
    id: "acne-scars",
    name: "Acne & Acne Scar Treatment",
    shortDescription: "From the first breakout to the last scar, we tailor treatments like chemical peels, RF microneedling, and fractional lasers to restore your skin.",
    image: "/images/services/acne_clinical_treatment.png",
    pageHeadline: "Clearer Skin Is Possible — Comprehensive Acne & Scar Care",
    subheading: "From the first breakout to the last scar — we treat acne at every stage",
    intro: [
      "At Dr. Sai Preethi's Clinic, we take acne seriously — because it affects not just your skin, but your confidence and quality of life. Our approach begins with understanding your acne: its type, severity, hormonal contributors, and any existing scarring — before building a treatment plan that is entirely tailored to you."
    ],
    sections: [
      {
        title: "Acne Treatments",
        bulletPoints: [
          "Chemical peels (salicylic acid, glycolic acid, TCA)",
          "LED light therapy",
          "Comedone extraction and acne surgery for cysts",
          "Intralesional injections for rapid resolution of painful cysts"
        ]
      },
      {
        title: "Acne Scar Treatment",
        paragraphs: [
          "Scars are the lasting aftermath of acne — but they are not permanent. We offer a spectrum of treatments to resurface, remodel, and restore skin texture:"
        ],
        list: [
          { title: "Microneedling with RF", text: "Deep collagen remodelling for atrophic (depressed) scars" },
          { title: "Fractional CO₂ Laser", text: "Precise resurfacing that dramatically improves ice-pick, boxcar, and rolling scars" },
          { title: "CROSS Technique", text: "Targeted TCA application for deep ice-pick scars" },
          { title: "Dermal Fillers", text: "Immediate volumisation of depressed scars" },
          { title: "Subcision", text: "Releases fibrous bands that tether scars to deeper tissue" }
        ]
      },
      {
        paragraphs: [
          "Results build over multiple sessions, and our team will design a realistic, progressive plan based on your scar type and skin tone."
        ]
      }
    ]
  },
  {
    id: "pigmentation",
    name: "Facial & Body Pigmentation",
    shortDescription: "Targeted solutions for melasma, dark spots, and uneven tone. Using advanced lasers, we deliver precise care for luminous skin.",
    image: "/images/services/pigmentation_1778608494703.png",
    pageHeadline: "Even, Luminous Skin — Advanced Pigmentation Treatment for Face & Body",
    subheading: "Targeted solutions for dark spots, melasma, uneven skin tone, and more",
    intro: [
      "At Dr. Sai Preethi's Clinic, we take a precise, science-led approach to pigmentation — identifying the type, depth, and cause of discolouration before recommending any treatment. We use dermoscopy and Wood's lamp examination to map pigmentation accurately before designing a treatment plan."
    ],
    sections: [
      {
        title: "Types of Pigmentation We Treat",
        paragraphs: [
          "Melasma, post-inflammatory hyperpigmentation, sun damage, periorbital darkening, neck and underarm darkening, uneven body tone, and acquired pigmentary conditions such as lichen planus pigmentosus."
        ]
      },
      {
        title: "Treatments",
        list: [
          { title: "Chemical peels", text: "To accelerate cell turnover and fade pigmentation" },
          { title: "Q-switched Nd:YAG laser", text: "Targets melanin deposits precisely with minimal surrounding tissue damage" },
          { title: "Picosecond laser", text: "Faster pulse delivery for stubborn or deep pigmentation with reduced downtime" },
          { title: "Glutathione IV therapy", text: "For full-body radiance and pigmentation correction" }
        ]
      },
      {
        paragraphs: [
          "Every treatment plan includes a personalised photoprotection protocol — because preventing recurrence is as important as the treatment itself."
        ]
      }
    ]
  },
  {
    id: "clinical-dermatology",
    name: "Clinical Dermatology",
    shortDescription: "In-depth, evidence-based treatment for complex conditions. We manage chronic diseases like psoriasis and vitiligo using advanced therapies.",
    image: "/images/services/clinical_derm_exam.png",
    pageHeadline: "Advanced Clinical Dermatology for Chronic & Complex Skin Conditions",
    subheading: "In-depth evaluation and evidence-based treatment including biologics",
    intro: [
      "At Dr. Sai Preethi's Clinic, we practise clinical dermatology with the rigour it demands — thorough evaluation, accurate diagnosis, and access to the most advanced treatments available, including biologics."
    ],
    sections: [
      {
        title: "Psoriasis",
        paragraphs: [
          "We offer phototherapy (Narrowband UVB) and biologic therapy — including IL-17 inhibitors, IL-23 inhibitors, and TNF-alpha blockers — the gold standard in contemporary management of moderate to severe psoriasis."
        ]
      },
      {
        title: "Vitiligo",
        paragraphs: [
          "We offer Narrowband UVB phototherapy, excimer laser for localised patches, and JAK inhibitors — a new class of treatments that have shown remarkable results in vitiligo repigmentation."
        ]
      },
      {
        title: "Skin Infections",
        paragraphs: [
          "We diagnose and treat the full range of dermatological infections — bacterial, fungal, viral, and parasitic. Infections in immunocompromised patients or with atypical features receive specialist-level workup and management."
        ]
      }
    ]
  },
  {
    id: "autoimmune",
    name: "Autoimmune Skin Conditions",
    shortDescription: "Specialist care for immune-mediated disorders like lupus and pemphigus. Our expert management includes comprehensive diagnosis and biologic therapies.",
    image: "/images/services/autoimmune_derm_1778608630401.png",
    pageHeadline: "Specialist Care for Autoimmune Skin Disorders",
    subheading: "Expert diagnosis and management for complex immune-mediated skin diseases",
    intro: [
      "At Dr. Sai Preethi's Clinic, we have the clinical expertise and access to advanced therapies — including biologics and immunosuppressants — to manage autoimmune skin conditions effectively and with the nuance they require."
    ],
    sections: [
      {
        title: "Conditions We Manage",
        paragraphs: [
          "Lupus erythematosus, dermatomyositis, pemphigus vulgaris, bullous pemphigoid, morphea, scleroderma, lichen planus, alopecia areata, and chronic urticaria and angioedema."
        ]
      },
      {
        title: "Our Approach",
        paragraphs: [
          "Diagnosis is supported by relevant investigations including ANA panels, skin biopsy, and immunofluorescence studies. Treatment is calibrated to severity and extent, using immunosuppressants, biologics, and IVIG where appropriate.",
          "Where conditions have multisystem involvement, we coordinate with rheumatologists, ophthalmologists, and internal medicine specialists — because the best outcomes come from care that sees the whole patient, not just the skin."
        ]
      }
    ]
  },
  {
    id: "laser-hair",
    name: "Laser Hair Reduction",
    shortDescription: "Permanent hair reduction safely calibrated for Indian skin tones. Enjoy long-lasting smoothness with advanced laser technology.",
    image: "/images/services/laser_hair_1778608645893.png",
    pageHeadline: "Permanent Hair Reduction — Safe, Effective, and Built for Indian Skin",
    subheading: "Long-lasting smoothness with advanced laser technology",
    intro: [
      "At Dr. Sai Preethi's Clinic, we use advanced laser systems calibrated specifically for Indian skin tones — ensuring both efficacy and safety for Fitzpatrick skin types IV–VI, which are most prevalent across South India."
    ],
    sections: [
      {
        title: "What to Expect",
        paragraphs: [
          "A thorough pre-treatment consultation is followed by a series of 6–8 sessions, spaced 4–6 weeks apart. Each session progressively reduces hair density and thickness. Cooling systems are used throughout to protect the surrounding skin and minimise discomfort.",
          "Most patients achieve an 80–90% reduction in hair growth, with occasional maintenance sessions as needed. Treatment is available for all body areas including the face, underarms, arms, legs, bikini area, chest, and back."
        ]
      }
    ]
  },
  {
    id: "anti-ageing",
    name: "Anti-Ageing & Rejuvenation",
    shortDescription: "Science-backed treatments to restore youthful vitality. We combine regenerative medicine with injectables like Botox, Profhilo, and HIFU.",
    image: "/images/services/aesthetic_treatment_laser.png",
    pageHeadline: "Age on Your Own Terms — Advanced Anti-Ageing & Skin Rejuvenation",
    subheading: "Science-backed treatments to restore radiance, firmness, and youthful vitality",
    intro: [
      "At Dr. Sai Preethi's Clinic, our approach to anti-ageing is grounded in skin science. We combine regenerative medicine, advanced aesthetic technology, and a thorough understanding of how your skin ages to build a plan that is realistic, progressive, and entirely personal."
    ],
    sections: [
      {
        title: "Injectables & Volumisers",
        list: [
          { title: "Botulinum Toxin (Botox)", text: "Relaxes dynamic wrinkles to restore a refreshed, natural appearance" },
          { title: "Dermal Fillers (Hyaluronic Acid)", text: "Restores lost facial volume and defines contours" },
          { title: "Profhilo", text: "Injectable skin remodelling that hydrates deeply and stimulates collagen and elastin production" }
        ]
      },
      {
        title: "Regenerative Treatments",
        list: [
          { title: "PRP for Face (Platelet-Rich Plasma)", text: "Growth factors derived from your own blood are delivered into the skin to stimulate cell renewal, improve texture, reduce fine lines, and restore a natural glow. Often called the \"vampire facial,\" PRP is a powerful regenerative treatment that works with your skin's own biology" },
          { title: "Skin Boosters", text: "Injectable hyaluronic acid formulations that hydrate the skin deeply and evenly across the face, neck, and décolletage. Unlike fillers, skin boosters work to improve overall skin quality, suppleness, and radiance from within" }
        ]
      },
      {
        title: "Energy-Based & Resurfacing Treatments",
        list: [
          { title: "Microneedling with RF", text: "Tightens lax skin and improves overall texture through deep collagen remodelling" },
          { title: "HIFU (High-Intensity Focused Ultrasound)", text: "Non-invasive lifting and tightening at the foundational layers of the skin" },
          { title: "Fractional Laser Resurfacing", text: "For deeper texture concerns, enlarged pores, and sun damage" },
          { title: "Chemical Peels", text: "Resurfaces dull, uneven skin and improves radiance" },
          { title: "Mesotherapy", text: "Micro-injections of vitamins and antioxidants to restore luminosity from within" }
        ]
      },
      {
        paragraphs: [
          "Every consultation begins with an in-depth analysis of your skin, its structure, lifestyle influences, and your personal goals. We do not offer off-the-shelf packages — because no two faces age in exactly the same way."
        ]
      }
    ]
  },
  {
    id: "contouring",
    name: "Contouring Procedures",
    shortDescription: "Define your features with non-surgical body contouring. Sculpt and lift areas like double chins using Fat Dissolving Injections and HIFU.",
    image: "/images/services/contouring_1778608680934.png",
    pageHeadline: "Define Your Features — Non-Surgical Face & Body Contouring",
    subheading: "Sculpt, lift, and contour without surgery",
    intro: [
      "At Dr. Sai Preethi's Clinic, our contouring procedures offer precise, non-surgical solutions for patients who want to reshape and define specific areas of the face and body — with no incisions, no general anaesthesia, and minimal downtime."
    ],
    sections: [
      {
        title: "Double Chin Reduction",
        paragraphs: [
          "A double chin — clinically known as submental fullness — can persist regardless of diet or exercise, often due to genetic fat distribution. We offer two highly effective non-surgical approaches:"
        ],
        list: [
          { title: "Fat Dissolving Injections (Deoxycholic Acid)", text: "A series of micro-injections that break down and permanently destroy fat cells beneath the chin. Results develop gradually over several weeks, with most patients achieving a noticeably defined jawline over 2–4 sessions" },
          { title: "HIFU (High-Intensity Focused Ultrasound)", text: "Delivers focused ultrasound energy to the submental area to simultaneously tighten the overlying skin and reduce localised fat — ideal for patients with both laxity and fullness in the chin and jawline area" }
        ]
      },
      {
        paragraphs: [
          "Both treatments are performed in-clinic with no downtime, and can be combined for enhanced contouring results."
        ]
      }
    ]
  },
  {
    id: "derm-procedures",
    name: "Dermatological Procedures",
    shortDescription: "Safe, expert removal of unwanted skin lesions. We perform precise minor procedures including mole removal, skin tags, and biopsies.",
    image: "/images/services/derm_procedures_1778608697511.png",
    pageHeadline: "Precise Minor Procedures — Mole Removal, Skin Tags & More",
    subheading: "Safe, expert removal of unwanted skin lesions in a clinical setting",
    intro: [
      "Many common skin lesions — while harmless — can cause cosmetic concern, discomfort, or occasionally warrant clinical evaluation. At Dr. Sai Preethi's Clinic, minor dermatological procedures are performed with precision and care, ensuring both safety and the best possible cosmetic outcome."
    ],
    sections: [
      {
        title: "Skin Tag Removal",
        paragraphs: [
          "Skin tags (acrochordons) are soft, benign growths that commonly appear on the neck, underarms, eyelids, and groin. We remove them cleanly using radiofrequency, laser, or surgical excision depending on their size and location — with minimal discomfort and no scarring."
        ]
      },
      {
        title: "Mole Removal",
        paragraphs: [
          "Moles may be removed for cosmetic reasons or where clinical evaluation warrants investigation. All removed moles are sent for histopathological examination as a standard protocol, ensuring nothing is missed. We use excision techniques that are designed to minimise scarring and preserve the surrounding skin."
        ]
      },
      {
        title: "Small Incisions & Minor Surgical Procedures",
        paragraphs: [
          "We perform a range of minor dermatological surgeries in a sterile, clinical setting, including:"
        ],
        bulletPoints: [
          "Excision of epidermal and sebaceous cysts",
          "Removal of lipomas (benign fatty lumps)",
          "Incision and drainage of abscesses",
          "Punch biopsy and shave biopsy for diagnostic purposes",
          "Excision of benign skin tumours and suspicious lesions"
        ]
      },
      {
        paragraphs: [
          "Every procedure is performed under local anaesthesia. Patients are advised on wound care and reviewed as needed to ensure complete healing."
        ]
      }
    ]
  }
];

export const conditions = [
  "Acne","Acne Scars","Eczema","Psoriasis","Vitiligo","Melasma","Hair Loss","Alopecia Areata",
  "Fungal Infections","Warts","Hyperhidrosis","Rosacea","Seborrheic Dermatitis","Pigmentation",
  "Birthmarks","Skin Tags","Moles","Cysts","Lupus","Pemphigus","Lichen Planus","Paediatric Eczema",
  "Urticaria","Periorbital Darkening","Underarm Darkening","Body Pigmentation","Genetic Skin Disorders",
  "Scalp Disorders","PCOS-related Skin Issues","Ageing Skin","Sun Damage","Post-inflammatory Hyperpigmentation",
  "Atopic Dermatitis","Face conturing","Pregnancy related skin conditions",
];
