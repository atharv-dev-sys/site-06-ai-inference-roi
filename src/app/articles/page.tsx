import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Cpu, Zap, Shield, TrendingUp, Server, Activity, Globe, Scale, ZapOff, Package, Lock, BarChart3, CloudOff, Info } from "lucide-react";
import Link from "next/link";
import { AdPlaceholder } from "@/components/ad-placeholder";

const articles = [
  {
    title: "The 'Zero Cloud Cost' Engineering Philosophy: Why Local Inference is the Future",
    description: "The initial era of 'AI-as-a-Service' is being replaced by a more decentralized, sustainable paradigm: Zero Cloud Cost.",
    href: "/articles/zero-cloud-cost-philosophy",
    icon: <CloudOff className="h-8 w-8 text-primary" />,
  },
  {
    title: "Deploying Local LLMs behind FastAPI Endpoints: A Step-by-Step Architecture Guide",
    description: "Learn how to build a robust, scalable API for your local models using FastAPI and Redis.",
    href: "/articles/local-llm-fastapi-guide",
    icon: <Server className="h-8 w-8 text-primary" />,
  },
  {
    title: "Orchestrating LangChain Workflows Entirely on Local Hardware",
    description: "A deep dive into running complex LangChain agents without touching a third-party cloud provider.",
    href: "/articles/langchain-local-hardware",
    icon: <Package className="h-8 w-8 text-primary" />,
  },
  {
    title: "Avoiding Commercial Cloud Lock-in: The Strategic Value of Open-Weights Models",
    description: "Why ownership of the silicon and the weights is the ultimate competitive advantage for modern startups.",
    href: "/articles/avoiding-cloud-lock-in",
    icon: <Lock className="h-8 w-8 text-primary" />,
  },
  {
    title: "Calculating the Power-to-Token Ratio for Consumer GPUs (RTX 4090 vs 4060)",
    description: "Performance is measured in Joules per Token. Compare the efficiency of the latest consumer-grade silicon.",
    href: "/articles/power-to-token-ratio-gpus",
    icon: <Zap className="h-8 w-8 text-primary" />,
  },
  {
    title: "TCO Analysis: Amortizing GPU CapEx vs. Variable API OpEx",
    description: "A financial framework for understanding when to stop renting tokens and start owning hardware.",
    href: "/articles/tco-analysis-gpu-vs-api",
    icon: <TrendingUp className="h-8 w-8 text-primary" />,
  },
  {
    title: "Privacy as a Business Value: Fulfilling Data Sovereignty via Local Inference",
    description: "How to use local AI to satisfy the most stringent data protection regulations (GDPR, DPDP).",
    href: "/articles/privacy-data-sovereignty",
    icon: <Shield className="h-8 w-8 text-primary" />,
  },
  {
    title: "Benchmarking Local Inference Engines: vLLM, llama.cpp, and MLC LLM",
    description: "Which inference engine provides the best throughput for your specific hardware configuration?",
    href: "/articles/benchmarking-inference-engines",
    icon: <BarChart3 className="h-8 w-8 text-primary" />,
  },
  {
    title: "Vercel Deployments and Local Model Architectures: A Hybrid Approach",
    description: "Leverage the power of the cloud for UI/UX and local hardware for the heavy lifting of AI inference.",
    href: "/articles/vercel-local-hybrid-baner",
    icon: <Globe className="h-8 w-8 text-primary" />,
  },
  {
    title: "Enterprise Generative AI Operations: Scaling Private LLM Nodes",
    description: "Scaling private AI nodes across a distributed enterprise network: Lessons from Pune's tech hubs.",
    href: "/articles/enterprise-ai-scaling-pune",
    icon: <Activity className="h-8 w-8 text-primary" />,
  },
  {
    title: "Optimizing Throughput for Multi-User Local Inference Environments",
    description: "Techniques for serving hundreds of concurrent users without crashing your GPU VRAM.",
    href: "/articles/optimizing-multi-user-throughput",
    icon: <Cpu className="h-8 w-8 text-primary" />,
  },
  {
    title: "The Environmental Impact of AI: Comparing Cloud vs. Local GPU Efficiency",
    description: "A granular look at the carbon footprint of AI, and how local optimization can reduce energy waste.",
    href: "/articles/environmental-impact-ai",
    icon: <ZapOff className="h-8 w-8 text-primary" />,
  },
  {
    title: "Hardware Procurement for AI Startups: Finding the Break-Even Point",
    description: "When exactly does buying a GPU cluster become cheaper than a cloud subscription? We do the math.",
    href: "/articles/hardware-procurement-break-even",
    icon: <Scale className="h-8 w-8 text-primary" />,
  },
  {
    title: "Security Auditing Local LLMs: Zero-Trust Patterns for Inference",
    description: "Applying zero-trust security principles to the deployment and management of local AI models.",
    href: "/articles/security-auditing-local-llms",
    icon: <Lock className="h-8 w-8 text-primary" />,
  },
  {
    title: "Future-Proofing AI Infrastructure: Modular Hardware for Evolving Models",
    description: "How to build hardware that won't be obsolete when the next generation of transformer models arrives.",
    href: "/articles/future-proofing-ai-infrastructure",
    icon: <Info className="h-8 w-8 text-primary" />,
  },
];

export default function ArticlesPage() {
  return (
    <div className="container py-12 px-4 md:px-6">
      <header className="mb-12">
        <h1 className="text-4xl font-bold tracking-tight sm:text-5xl font-headline text-primary mb-4">
          TCO & Efficiency Insights
        </h1>
        <p className="text-xl text-foreground/80 max-w-3xl text-balance">
          Deep-dive technical guides on optimizing local AI inference, calculating ROI, and maintaining silicon sovereignty.
        </p>
      </header>

      <AdPlaceholder variant="leaderboard" className="mb-12" />

      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {articles.map((article) => (
          <Link key={article.href} href={article.href} className="group">
            <Card className="h-full transition-all hover:shadow-md hover:border-primary/50">
              <CardHeader>
                <div className="mb-4">{article.icon}</div>
                <CardTitle className="group-hover:text-primary transition-colors">
                  {article.title}
                </CardTitle>
                <CardDescription className="line-clamp-3">
                  {article.description}
                </CardDescription>
              </CardHeader>
            </Card>
          </Link>
        ))}
      </div>

      <AdPlaceholder variant="banner" className="mt-12" />
    </div>
  );
}
