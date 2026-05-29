import { ShieldCheck } from 'lucide-react';

export default function TermsPage() {
  return (
    <div className="container mx-auto py-8 px-4 md:px-6">
      <header className="text-center mb-12">
        <ShieldCheck className="h-16 w-16 text-primary mx-auto mb-4" />
        <h1 className="text-4xl font-bold tracking-tight sm:text-5xl font-headline text-primary">
          Terms of Service & Usage
        </h1>
        <p className="mt-4 text-xl text-foreground/80 max-w-3xl mx-auto text-balance">
          Guidelines for using InferenceROI simulations and content
        </p>
      </header>

      <div className="max-w-3xl mx-auto space-y-8 bg-card p-6 sm:p-8 rounded-xl shadow-lg text-foreground/80">
        <section>
          <h2 className="text-2xl font-semibold text-foreground mb-3">1. Use of Simulations</h2>
          <p className="leading-relaxed text-balance">
            InferenceROI provides mathematical models and simulations for estimating the ROI of AI hardware. These tools are intended for planning and educational purposes. While we aim for precision, the actual financial outcome of any hardware deployment depends on numerous variables outside our control.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold text-foreground mb-3">2. Intellectual Property</h2>
          <p className="leading-relaxed text-balance">
            The algorithms, calculator logic, and original articles found on InferenceROI are the intellectual property of the site owners. You are granted a limited license to use the calculator for personal or internal business evaluation.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold text-foreground mb-3">3. Data Integrity</h2>
          <p className="leading-relaxed text-balance">
            Users are responsible for the accuracy of the data they input into the ROI models. InferenceROI does not store your input data, and therefore cannot verify or audit the results of your specific simulations.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold text-foreground mb-3">4. Permitted Sharing</h2>
          <p className="leading-relaxed text-balance">
            We encourage you to:
            <ul className="list-disc pl-5 mt-2 space-y-1">
              <li>Share links to our calculators and articles</li>
              <li>Use screenshots of results in internal business presentations</li>
              <li>Reference our TCO (Total Cost of Ownership) studies with proper attribution</li>
            </ul>
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold text-foreground mb-3">5. Prohibited Actions</h2>
          <p className="leading-relaxed text-balance">
            To protect our service, you may not:
            <ul className="list-disc pl-5 mt-2 space-y-1">
              <li>Reverse engineer or scrape the calculator logic</li>
              <li>Redistribute our ROI models as a paid service</li>
              <li>Use automated scripts to overload our infrastructure</li>
            </ul>
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold text-foreground mb-3">6. Updates to Terms</h2>
          <p className="leading-relaxed text-balance">
            We may update these terms as the AI infrastructure landscape evolves. Continued use of the site after such changes constitutes acceptance of the new terms.
          </p>
        </section>

        <p className="text-center font-semibold text-foreground/90 pt-4 border-t border-foreground/20">
          Last updated: {new Date().toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}
        </p>
      </div>
    </div>
  );
}