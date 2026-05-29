"use client";

import React, { useState, useMemo } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { Slider } from "@/components/ui/slider";
import { ResultsDisplay } from "@/components/results-display";
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer, ReferenceLine } from 'recharts';
import { Cpu, Cloud, Zap, TrendingUp, DollarSign } from 'lucide-react';

export function RoiCalculator() {
  // Cloud API Inputs
  const [cloudInputCost, setCloudInputCost] = useState(0.50); // per 1M tokens
  const [cloudOutputCost, setCloudOutputCost] = useState(1.50); // per 1M tokens
  const [monthlyTokens, setMonthlyTokens] = useState(500); // in millions
  
  // Local Hardware Inputs
  const [hardwareCost, setHardwareCost] = useState(1200); // USD
  const [electricityRate, setElectricityRate] = useState(0.12); // $/kWh
  const [avgWattage, setAvgWattage] = useState(150); // Watts
  const [inferenceHours, setInferenceHours] = useState(8); // hours per day
  
  // Local Dev Node Preset: NVIDIA RTX 4060 mobile GPU + 26GB RAM + Ubuntu
  const applyPreset = () => {
    setHardwareCost(1100);
    setAvgWattage(140);
    setElectricityRate(0.12);
    setInferenceHours(12);
  };

  const calculations = useMemo(() => {
    const cloudMonthly = (cloudInputCost + cloudOutputCost) * monthlyTokens;
    const electricityMonthly = (avgWattage / 1000) * inferenceHours * 30 * electricityRate;
    const depreciationMonthly = hardwareCost / 36; // 3 year depreciation
    const localMonthly = electricityMonthly + depreciationMonthly;
    
    // Crossover calculation
    // cloudCostPerMillion * X = localMonthly
    // X = localMonthly / cloudCostPerMillion
    const cloudCostPerMillion = cloudInputCost + cloudOutputCost;
    const crossoverTokens = cloudCostPerMillion > 0 ? localMonthly / cloudCostPerMillion : 0;

    // Data for chart (6 months comparison)
    const chartData = [];
    let cumulativeCloud = 0;
    let cumulativeLocal = hardwareCost;

    for (let month = 0; month <= 12; month++) {
      chartData.push({
        month: month,
        cloud: Math.round(cumulativeCloud),
        local: Math.round(cumulativeLocal),
      });
      cumulativeCloud += cloudMonthly;
      cumulativeLocal += localMonthly;
    }

    return {
      cloudMonthly,
      localMonthly,
      electricityMonthly,
      depreciationMonthly,
      crossoverTokens,
      chartData
    };
  }, [cloudInputCost, cloudOutputCost, monthlyTokens, hardwareCost, electricityRate, avgWattage, inferenceHours]);

  const results = [
    { label: "Cloud Monthly OpEx", value: calculations.cloudMonthly, currencyCode: "USD" as const, isEmphasized: true },
    { label: "Local Monthly OpEx (Inc. Depr.)", value: calculations.localMonthly, currencyCode: "USD" as const },
    { label: "Monthly Electricity Cost", value: calculations.electricityMonthly, currencyCode: "USD" as const },
    { label: "Monthly Hardware Depreciation", value: calculations.depreciationMonthly, currencyCode: "USD" as const },
    { label: "Break-even Token Volume", value: `${calculations.crossoverTokens.toFixed(2)}M tokens/month`, isEmphasized: true },
  ];

  return (
    <div className="grid gap-6 lg:grid-cols-2">
      <div className="space-y-6">
        <Card>
          <CardHeader>
            <div className="flex items-center gap-2">
              <Cloud className="h-5 w-5 text-primary" />
              <CardTitle>Cloud API Parameters</CardTitle>
            </div>
            <CardDescription>Configure your current cloud provider costs</CardDescription>
          </CardHeader>
          <CardContent className="space-y-6">
            <div className="space-y-2">
              <div className="flex justify-between">
                <Label>Input Cost ($ / 1M tokens)</Label>
                <span className="text-sm font-medium">${cloudInputCost.toFixed(2)}</span>
              </div>
              <Slider 
                value={[cloudInputCost]} 
                min={0.01} max={5} step={0.01} 
                onValueChange={([v]) => setCloudInputCost(v)} 
              />
            </div>
            <div className="space-y-2">
              <div className="flex justify-between">
                <Label>Output Cost ($ / 1M tokens)</Label>
                <span className="text-sm font-medium">${cloudOutputCost.toFixed(2)}</span>
              </div>
              <Slider 
                value={[cloudOutputCost]} 
                min={0.01} max={15} step={0.01} 
                onValueChange={([v]) => setCloudOutputCost(v)} 
              />
            </div>
            <div className="space-y-2">
              <div className="flex justify-between">
                <Label>Monthly Volume (Millions of Tokens)</Label>
                <span className="text-sm font-medium">{monthlyTokens}M</span>
              </div>
              <Slider 
                value={[monthlyTokens]} 
                min={1} max={5000} step={10} 
                onValueChange={([v]) => setMonthlyTokens(v)} 
              />
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <Zap className="h-5 w-5 text-primary" />
                <CardTitle>Local Infrastructure</CardTitle>
              </div>
              <button 
                onClick={applyPreset}
                className="text-xs bg-primary/10 text-primary px-2 py-1 rounded hover:bg-primary/20 transition-colors"
              >
                Load "Local Dev Node" Preset
              </button>
            </div>
            <CardDescription>NVIDIA RTX 4060 (Mobile) • 26GB RAM • Ubuntu</CardDescription>
          </CardHeader>
          <CardContent className="space-y-6">
            <div className="space-y-2">
              <div className="flex justify-between">
                <Label>Hardware Upfront Cost ($)</Label>
                <span className="text-sm font-medium">${hardwareCost}</span>
              </div>
              <Slider 
                value={[hardwareCost]} 
                min={200} max={10000} step={50} 
                onValueChange={([v]) => setHardwareCost(v)} 
              />
            </div>
            <div className="space-y-2">
              <div className="flex justify-between">
                <Label>Average Inference Wattage (W)</Label>
                <span className="text-sm font-medium">{avgWattage}W</span>
              </div>
              <Slider 
                value={[avgWattage]} 
                min={20} max={1000} step={5} 
                onValueChange={([v]) => setAvgWattage(v)} 
              />
            </div>
            <div className="space-y-2">
              <div className="flex justify-between">
                <Label>Electricity Rate ($/kWh)</Label>
                <span className="text-sm font-medium">${electricityRate.toFixed(2)}</span>
              </div>
              <Slider 
                value={[electricityRate]} 
                min={0.01} max={0.80} step={0.01} 
                onValueChange={([v]) => setElectricityRate(v)} 
              />
            </div>
          </CardContent>
        </Card>
      </div>

      <div className="space-y-6">
        <Card className="h-full flex flex-col">
          <CardHeader>
            <div className="flex items-center gap-2">
              <TrendingUp className="h-5 w-5 text-primary" />
              <CardTitle>TCO Projection (12 Months)</CardTitle>
            </div>
          </CardHeader>
          <CardContent className="flex-1">
            <div className="h-[300px] w-full mt-4">
              <ResponsiveContainer width="100%" height="100%">
                <LineChart data={calculations.chartData}>
                  <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#333" />
                  <XAxis 
                    dataKey="month" 
                    label={{ value: 'Months', position: 'insideBottomRight', offset: -5 }} 
                  />
                  <YAxis 
                    tickFormatter={(value) => `$${value}`}
                  />
                  <Tooltip 
                    contentStyle={{ backgroundColor: '#111', borderColor: '#333', color: '#fff' }}
                    formatter={(value) => [`$${value}`, '']}
                  />
                  <Legend />
                  <Line type="monotone" dataKey="cloud" stroke="#3b82f6" name="Cloud Cumulative" strokeWidth={2} dot={false} />
                  <Line type="monotone" dataKey="local" stroke="#10b981" name="Local Cumulative" strokeWidth={2} dot={false} />
                </LineChart>
              </ResponsiveContainer>
            </div>
            <ResultsDisplay results={results} className="mt-8" />
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
