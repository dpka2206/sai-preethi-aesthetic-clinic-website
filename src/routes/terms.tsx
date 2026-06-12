import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/terms")({
  component: TermsPage,
});

function TermsPage() {
  return (
    <div className="pt-32 pb-24 px-6 md:px-10 max-w-4xl mx-auto min-h-screen">
      <h1 className="text-4xl font-serif text-foreground mb-6">Terms of Service</h1>
      <p className="text-muted-foreground">
        These Terms of Service govern your use of our website and services.
        Content will be updated shortly.
      </p>
    </div>
  );
}
