import { Calculator, Cpu, TrendingUp, ShieldCheck } from "lucide-react";

export default function AboutPage() {
  return (
    <main className="max-w-5xl mx-auto px-6 py-12 font-sans">
      <section className="text-center mb-16 bg-gradient-to-r from-primary/20 via-primary/10 to-primary/20 text-foreground shadow-md rounded-xl p-10">
        <h2 className="text-5xl font-extrabold mb-6">🌟 Our Mission</h2>
        <p className="text-lg max-w-3xl mx-auto leading-relaxed">
          At InferenceROI, we are dedicated to providing the definitive financial roadmap for the AI transition. 
          Our mission is to help engineers and enterprises stop overpaying for cloud tokens and start building sustainable, local AI infrastructure.
        </p>
      </section>

      <section className="mb-16 bg-card border border-border text-foreground shadow-md rounded-xl p-10 text-center">
        <h2 className="text-4xl font-bold mb-6">🔬 Precision TCO Modeling</h2>
        <p className="text-lg leading-relaxed mb-4 max-w-3xl mx-auto">
          We bridge the gap between technical specs and financial reality. Our platform provides high-fidelity simulations that factor in electricity rates, hardware depreciation, and the hidden costs of cloud lock-in.
        </p>
      </section>

      <section className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="bg-secondary/30 shadow-sm rounded-xl p-6 border-l-4 border-primary">
          <div className="flex items-center gap-3 mb-3">
            <Cpu className="h-6 w-6 text-primary" />
            <h3 className="text-2xl font-bold text-foreground">Hardware Profiling</h3>
          </div>
          <p className="text-muted-foreground leading-relaxed">
            From consumer RTX cards to enterprise H100s, we map the "Joules per Token" efficiency of every major silicon architecture.
          </p>
        </div>

        <div className="bg-secondary/30 shadow-sm rounded-xl p-6 border-l-4 border-primary">
          <div className="flex items-center gap-3 mb-3">
            <TrendingUp className="h-6 w-6 text-primary" />
            <h3 className="text-2xl font-bold text-foreground">ROI Projections</h3>
          </div>
          <p className="text-muted-foreground leading-relaxed">
            Interactive models that show exactly when your hardware CapEx will break even against variable cloud API OpEx.
          </p>
        </div>

        <div className="bg-secondary/30 shadow-sm rounded-xl p-6 border-l-4 border-primary">
          <div className="flex items-center gap-3 mb-3">
            <ShieldCheck className="h-6 w-6 text-primary" />
            <h3 className="text-2xl font-bold text-foreground">Privacy Strategy</h3>
          </div>
          <p className="text-muted-foreground leading-relaxed">
            Guidance on fulfilling data sovereignty and compliance requirements by moving inference behind your corporate firewall.
          </p>
        </div>

        <div className="bg-secondary/30 shadow-sm rounded-xl p-6 border-l-4 border-primary">
          <div className="flex items-center gap-3 mb-3">
            <Calculator className="h-6 w-6 text-primary" />
            <h3 className="text-2xl font-bold text-foreground">Open-Weights Value</h3>
          </div>
          <p className="text-muted-foreground leading-relaxed">
            Analyzing the strategic and economic benefits of decoupling your IP from proprietary black-box AI providers.
          </p>
        </div>
      </section>

      <section className="text-center mt-16 bg-primary/5 text-foreground border border-primary/20 shadow-md rounded-xl p-10">
        <h2 className="text-4xl font-bold mb-6">Why InferenceROI?</h2>
        <p className="text-lg leading-relaxed max-w-3xl mx-auto mb-4">
          The "rented brain" era is coming to a close. As AI becomes a core utility, owning the means of inference is the only way to maintain margins and technical sovereignty. We provide the tools to make that transition with confidence.
        </p>
      </section>
    </main>
  );
}