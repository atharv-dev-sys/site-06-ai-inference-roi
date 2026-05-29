# TechHub - Programmatic AdSense Boilerplate

This is a clean, neutral architectural primitive designed for high-performance, AdSense-compliant site deployments across technical domains.

## 🛡️ Core Mandates
- **CLS Prevention**: Strict structural ID hooks (`#slot-lead-billboard`, `#slot-sidebar-skyscraper`) enforce layout stability.
- **Hydration Safety**: Ad unit initialization is wrapped in safe client-side lifecycle checks.
- **Semantic SEO**: Standard HTML5 hierarchy for maximum crawlability.

## 🚀 Getting Started
1. Install dependencies: `npm install`
2. Run development server: `npm run dev`
3. Update `adsbygoogle` pub-id in `src/app/layout.tsx`.

## 📂 Architecture
- `/src/app`: Standard Next.js routing with cleaned legal and contact pages.
- `/src/components`: Refactored `AdPlaceholder` with automated CLS ID mapping.
- `/src/lib`: Shared utilities and type-safe helpers.
