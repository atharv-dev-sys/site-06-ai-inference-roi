import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Calculator, Zap, TrendingUp, ArrowRight, ShieldCheck, Cpu } from "lucide-react";
import Link from "next/link";
import { AdPlaceholder } from "@/components/ad-placeholder";
import { RoiCalculator } from "@/components/roi-calculator";

export default function Home() {
  return (
    <div className="flex flex-col items-center">
      <section className="w-full py-12 md:py-24 lg:py-32 bg-background border-b">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center space-y-4 text-center">
            <div className="space-y-2">
              <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl">
                InferenceROI
              </h1>
              <p className="mx-auto max-w-[800px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                Cloud Cost Architect: Real-time projection model for local vs. cloud AI inference TCO.
              </p>
            </div>
          </div>
        </div>
      </section>

      <div className="container px-4 py-12 md:px-6">
        <AdPlaceholder variant="leaderboard" label="Billboard Ad" className="mb-12" />
        
        <RoiCalculator />

        <section className="mt-24 grid gap-6 md:grid-cols-3">
          <Card>
            <CardHeader>
              <Cpu className="h-8 w-8 text-primary mb-2" />
              <CardTitle>Hardware Profiling</CardTitle>
              <CardDescription>
                Presets for consumer GPUs like the RTX 4060, factoring in mobile vs. desktop power envelopes.
              </CardDescription>
            </CardHeader>
          </Card>
          <Card>
            <CardHeader>
              <TrendingUp className="h-8 w-8 text-primary mb-2" />
              <CardTitle>TCO Analysis</CardTitle>
              <CardDescription>
                Calculations including electricity, hardware depreciation, and traffic scaling velocities.
              </CardDescription>
            </CardHeader>
          </Card>
          <Card>
            <CardHeader>
              <ShieldCheck className="h-8 w-8 text-primary mb-2" />
              <CardTitle>Privacy First</CardTitle>
              <CardDescription>
                Simulate financial projections entirely in-browser. No corporate billing data is ever collected.
              </CardDescription>
            </CardHeader>
          </Card>
        </section>

        <AdPlaceholder variant="banner" label="Bottom Banner Ad" className="mt-12" />
      </div>
    </div>
  );
}
