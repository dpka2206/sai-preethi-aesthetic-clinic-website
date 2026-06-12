import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/privacy")({
  component: PrivacyPage,
});

function PrivacyPage() {
  return (
    <div className="pt-32 pb-24 px-6 md:px-10 max-w-4xl mx-auto min-h-screen">
      <h1 className="text-4xl font-serif text-foreground mb-6">Privacy Policy</h1>
      <p className="text-muted-foreground">
        This Privacy Policy outlines how Dr. Sai Preethi's Skin & Aesthetic Clinic collects, uses, and protects your personal information. 
        Content will be updated shortly.
      </p>
    </div>
  );
}
