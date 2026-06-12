import { useEffect, useState } from "react";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import {
  Outlet,
  Link,
  createRootRouteWithContext,
  useRouter,
  HeadContent,
  Scripts,
} from "@tanstack/react-router";

import appCss from "../styles.css?url";
import { CAL_EMBED_SCRIPT } from "@/lib/cal-booking";

function NotFoundComponent() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-background px-4">
      <div className="max-w-md text-center">
        <h1 className="text-7xl font-bold text-foreground">404</h1>
        <h2 className="mt-4 text-xl font-semibold text-foreground">Page not found</h2>
        <p className="mt-2 text-sm text-muted-foreground">
          The page you're looking for doesn't exist or has been moved.
        </p>
        <div className="mt-6">
          <Link
            to="/"
            className="inline-flex items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90"
          >
            Go home
          </Link>
        </div>
      </div>
    </div>
  );
}

function ErrorComponent({ error, reset }: { error: Error; reset: () => void }) {
  console.error(error);
  const router = useRouter();

  return (
    <div className="flex min-h-screen items-center justify-center bg-background px-4">
      <div className="max-w-md text-center">
        <h1 className="text-xl font-semibold tracking-tight text-foreground">
          This page didn't load
        </h1>
        <p className="mt-2 text-sm text-muted-foreground">
          Something went wrong on our end. You can try refreshing or head back home.
        </p>
        <div className="mt-6 flex flex-wrap justify-center gap-2">
          <button
            onClick={() => {
              router.invalidate();
              reset();
            }}
            className="inline-flex items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90"
          >
            Try again
          </button>
          <a
            href="/"
            className="inline-flex items-center justify-center rounded-md border border-input bg-background px-4 py-2 text-sm font-medium text-foreground transition-colors hover:bg-accent"
          >
            Go home
          </a>
        </div>
      </div>
    </div>
  );
}

export const Route = createRootRouteWithContext<{ queryClient: QueryClient }>()({
  head: () => ({
    meta: [
      { charSet: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { title: "Dr. Sai Preethi | Best Dermatologist in Chennai" },
      { name: "description", content: "Expert dermatology and aesthetic treatments in Chennai. Specialising in acne, hair loss, pigmentation, anti-ageing, paediatric dermatology, biologics, and advanced lasers. Book your consultation today." },
      { name: "keywords", content: "best dermatologist in Chennai, skin clinic Chennai, acne treatment Chennai, hair loss treatment Chennai, laser skin treatment Chennai, aesthetic clinic Chennai, paediatric dermatologist Chennai, vitiligo treatment Chennai, psoriasis treatment Chennai, melasma treatment Chennai" },
      { name: "author", content: "Dr. Sai Preethi" },
      { property: "og:title", content: "Dr. Sai Preethi | Best Dermatologist in Chennai" },
      { property: "og:description", content: "Expert dermatology and aesthetic treatments in Chennai. Specialising in acne, hair loss, pigmentation, anti-ageing, paediatric dermatology, biologics, and advanced lasers. Book your consultation today." },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "https://saipreethiclinic.com/" },
      { name: "twitter:card", content: "summary" },
      { name: "twitter:title", content: "Dr. Sai Preethi | Best Dermatologist in Chennai" },
      { name: "twitter:description", content: "Expert dermatology and aesthetic treatments in Chennai. Specialising in acne, hair loss, pigmentation, anti-ageing, paediatric dermatology, biologics, and advanced lasers. Book your consultation today." },
      { property: "og:image", content: "https://pub-bb2e103a32db4e198524a2e9ed8f35b4.r2.dev/18e0a0be-fd60-4c13-8bd5-6a92970e783c/id-preview-1a5cd4f8--cb556556-cc9c-4cf5-b9b5-4b3c2c9ddd25.lovable.app-1778602690642.png" },
      { name: "twitter:image", content: "https://pub-bb2e103a32db4e198524a2e9ed8f35b4.r2.dev/18e0a0be-fd60-4c13-8bd5-6a92970e783c/id-preview-1a5cd4f8--cb556556-cc9c-4cf5-b9b5-4b3c2c9ddd25.lovable.app-1778602690642.png" },
    ],
    links: [
      { rel: "icon", type: "image/png", href: "/favicon.png" },
      { rel: "stylesheet", href: appCss },
      { rel: "preconnect", href: "https://fonts.googleapis.com" },
      { rel: "preconnect", href: "https://fonts.gstatic.com", crossOrigin: "" },
      { rel: "stylesheet", href: "https://fonts.googleapis.com/css2?family=Playfair+Display:wght@400;500;600;700&family=Inter:wght@300;400;500;600;700&display=swap" },
    ],
    scripts: [
      {
        type: "text/javascript",
        children: CAL_EMBED_SCRIPT,
      },
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": ["MedicalClinic", "LocalBusiness"],
          "name": "Dr. Sai Preethi's Skin & Aesthetic Clinic",
          "url": "https://saipreethiclinic.com/",
          "image": "https://saipreethiclinic.com/images/about/doctor.jpg",
          "telephone": "+919094040018",
          "address": {
            "@type": "PostalAddress",
            "streetAddress": "Chennai",
            "addressLocality": "Chennai",
            "addressRegion": "Tamil Nadu",
            "addressCountry": "IN"
          },
          "geo": {
            "@type": "GeoCoordinates",
            "latitude": "13.0827",
            "longitude": "80.2707"
          },
          "openingHours": "Mo,Tu,We,Th,Fr,Sa 10:00-20:00",
          "medicalSpecialty": [
            "Dermatology",
            "Cosmetic Dermatology",
            "Pediatric Dermatology"
          ],
          "description": "Expert dermatology and aesthetic treatments in Chennai. Specialising in acne, hair loss, pigmentation, anti-ageing, paediatric dermatology, biologics, and advanced lasers.",
          "priceRange": "$$",
          "aggregateRating": {
            "@type": "AggregateRating",
            "ratingValue": "5.0",
            "reviewCount": "6"
          }
        })
      }
    ],
  }),
  shellComponent: RootShell,
  component: RootComponent,
  notFoundComponent: NotFoundComponent,
  errorComponent: ErrorComponent,
});

function RootShell({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <HeadContent />
      </head>
      <body>
        <a href="#top" className="sr-only focus:not-sr-only focus:absolute focus:z-[100] focus:p-4 focus:bg-primary focus:text-primary-foreground focus:top-0 focus:left-0">
          Skip to main content
        </a>
        {children}
        <Scripts />
      </body>
    </html>
  );
}

function RootComponent() {
  const { queryClient } = Route.useRouteContext();

  useEffect(() => {
    let isModalOpen = false;

    // 1. Handle outside click/touch to close modal
    const handleOutsideClick = (e: MouseEvent | TouchEvent) => {
      const iframe = document.querySelector('iframe[name^="cal-embed-"]');
      if (!iframe) return;

      // Don't close if clicking the trigger button itself
      const isTrigger = (e.target as HTMLElement).closest('[data-cal-link]');
      if (isTrigger) return;

      // Call Cal.com namespace close instruction
      const Cal = (window as any).Cal;
      if (Cal && Cal.ns && Cal.ns.book) {
        Cal.ns.book("closeModal");
      }
    };

    window.addEventListener("click", handleOutsideClick, true);
    window.addEventListener("touchstart", handleOutsideClick, true);

    // 2. Handle back button / history state to close modal
    const handlePopState = () => {
      if (isModalOpen) {
        isModalOpen = false;
        const Cal = (window as any).Cal;
        if (Cal && Cal.ns && Cal.ns.book) {
          Cal.ns.book("closeModal");
        }
      }
    };

    window.addEventListener("popstate", handlePopState);

    // 3. Observe DOM for the Cal.com iframe mount/dismount
    const observer = new MutationObserver(() => {
      const iframe = document.querySelector('iframe[name^="cal-embed-"]');
      if (iframe && !isModalOpen) {
        isModalOpen = true;
        window.history.pushState({ bookingOpen: true }, "");
      } else if (!iframe && isModalOpen) {
        isModalOpen = false;
        if (window.history.state?.bookingOpen) {
          window.history.back();
        }
      }
    });

    observer.observe(document.body, { childList: true, subtree: true });

    return () => {
      window.removeEventListener("click", handleOutsideClick, true);
      window.removeEventListener("touchstart", handleOutsideClick, true);
      window.removeEventListener("popstate", handlePopState);
      observer.disconnect();
    };
  }, []);

  return (
    <QueryClientProvider client={queryClient}>
      <Outlet />
      <CookieConsent />
    </QueryClientProvider>
  );
}

function CookieConsent() {
  const [show, setShow] = useState(false);

  useEffect(() => {
    const consent = localStorage.getItem("cookie_consent");
    if (!consent) {
      setShow(true);
    }
  }, []);

  if (!show) return null;

  return (
    <div className="fixed bottom-0 inset-x-0 z-50 p-4 pb-24 md:pb-4 pointer-events-none flex justify-center">
      <div className="bg-background/95 backdrop-blur border border-border shadow-2xl rounded-xl p-5 max-w-2xl w-full pointer-events-auto flex flex-col sm:flex-row gap-4 items-center justify-between">
        <div className="text-sm text-muted-foreground flex-1">
          <p className="font-medium text-foreground mb-1">We value your privacy</p>
          We use cookies to enhance your browsing experience and analyze our traffic. 
          By clicking "Accept All", you consent to our use of cookies.
        </div>
        <div className="flex gap-2 shrink-0 w-full sm:w-auto">
          <button 
            onClick={() => {
              localStorage.setItem("cookie_consent", "declined");
              setShow(false);
            }}
            className="flex-1 sm:flex-none px-4 py-2 text-sm font-medium border border-border rounded-md hover:bg-muted transition-colors"
          >
            Decline
          </button>
          <button 
            onClick={() => {
              localStorage.setItem("cookie_consent", "accepted");
              setShow(false);
            }}
            className="flex-1 sm:flex-none px-4 py-2 text-sm font-medium bg-primary text-primary-foreground rounded-md hover:bg-primary/90 transition-colors"
          >
            Accept All
          </button>
        </div>
      </div>
    </div>
  );
}

