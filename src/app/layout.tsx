import type { Metadata } from 'next';
import './globals.css';
import { Navbar } from '@/components/layout/navbar';
import { Footer } from '@/components/layout/footer';
import { Toaster } from "@/components/ui/toaster";

export const metadata: Metadata = {
  title: 'InferenceROI - AI TCO & Projections',
  description: 'Real-time projection model for local vs. cloud AI inference TCO. Calculate ROI for GPU hardware vs. API providers.',
  icons: {
    icon: '/favicon.ico',
  },
  keywords: [
    'AI ROI',
    'Local Inference TCO',
    'GPU vs Cloud API',
    'Inference Efficiency',
    'AI Infrastructure',
    'RTX 5090 ROI'
  ],
  openGraph: {
    title: 'InferenceROI - AI TCO & Projections',
    description: 'Stop renting tokens. Start owning silicon. Calculate your AI infrastructure ROI.',
    url: 'https://www.inferenceroi.com',
    siteName: 'InferenceROI',
    type: 'website',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap" rel="stylesheet" />
        <script
          async
          src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-5015165884772367"
          crossOrigin="anonymous"
        ></script>
        <meta name="theme-color" content="#ffffff" />
      </head>
      <body className="font-body antialiased flex flex-col min-h-screen">
        <Navbar />
        <main className="flex-grow container mx-auto px-4 py-8">
          {children}
        </main>
        <Footer />
        <Toaster />
      </body>
    </html>
  );
}