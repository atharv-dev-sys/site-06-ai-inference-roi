"use client";

import React from "react";
import { ShieldCheck } from "lucide-react";

export default function PrivacyPolicyPage() {
  return (
    <div className="container mx-auto py-8 px-4 md:px-6">
      <header className="text-center mb-12">
        <ShieldCheck className="h-16 w-16 text-primary mx-auto mb-4" />
        <h1 className="text-4xl font-bold tracking-tight sm:text-5xl font-headline text-primary">
          Privacy Policy
        </h1>
        <p className="mt-4 text-xl text-foreground/80 max-w-3xl mx-auto text-balance">
          Data Sovereignty & Local Processing
        </p>
      </header>

      <div className="max-w-3xl mx-auto space-y-8 bg-card p-6 sm:p-8 rounded-xl shadow-lg text-foreground/80">
        <section>
          <h2 className="text-2xl font-semibold text-foreground mb-3">1. Local Processing Only</h2>
          <p className="leading-relaxed text-balance">
            InferenceROI is designed with a "privacy-first" architecture. All calculations performed in our ROI Projection Model are executed locally within your web browser. Your input data (such as token volumes, hardware costs, and utility rates) never leaves your device.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold text-foreground mb-3">2. No Billing Data Collection</h2>
          <p className="leading-relaxed text-balance">
            We do not collect, store, or transmit any corporate billing data, API keys, or sensitive financial records. Our tool is a simulator and does not require integration with your cloud provider accounts.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold text-foreground mb-3">3. Advertising and Cookies</h2>
          <p className="leading-relaxed text-balance">
            We use Google AdSense to serve advertisements on our site. Google, as a third-party vendor, uses cookies to serve ads based on your visit to this and other sites on the Internet.
          </p>
          <ul className="list-disc pl-5 mt-2 space-y-1">
            <li>Google's use of advertising cookies enables it and its partners to serve ads based on your visit to our sites and/or other sites on the Internet.</li>
            <li>You may opt out of personalized advertising by visiting <a href="https://www.google.com/settings/ads" className="text-primary underline" target="_blank" rel="noopener noreferrer">Ads Settings</a>.</li>
          </ul>
          <p className="mt-2 text-balance">
            Additionally, we may use cookies to understand site traffic patterns and improve our user interface. This data is anonymous and does not identify individual users or their specific calculation inputs.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold text-foreground mb-3">4. Third-Party Links</h2>
          <p className="leading-relaxed text-balance">
            Our articles may link to external hardware vendors or cloud documentation. We are not responsible for the privacy practices of these external sites.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold text-foreground mb-3">5. Data Retention</h2>
          <p className="leading-relaxed text-balance">
            Since we do not store your calculation data on our servers, there is no data to retain. Your session data is cleared when you close your browser tab or refresh the page.
          </p>
        </section>

        <p className="text-center font-semibold text-foreground/90 pt-4 border-t border-foreground/20">
          Last updated: {new Date().toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}
        </p>
      </div>
    </div>
  );
}
