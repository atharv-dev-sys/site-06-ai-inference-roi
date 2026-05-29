
import Link from 'next/link';
import { Linkedin, Mail } from 'lucide-react';

export function Footer() {
  const currentYear = new Date().getFullYear();
  return (
    <footer className="border-t border-border/40 bg-background py-8">
      <div className="container mx-auto px-4 text-center text-sm text-muted-foreground">
        <div className="mb-4 flex justify-center space-x-4 md:space-x-6 items-center">
          <Link href="/legal/disclaimer" className="hover:text-primary transition-colors">
            Disclaimer
          </Link>
          <Link href="/legal/privacy-policy" className="hover:text-primary transition-colors">
            Privacy Policy
          </Link>
          <Link href="/articles" className="hover:text-primary transition-colors">
            Articles
          </Link>
          <Link href="/about" className="hover:text-primary transition-colors">
            About
          </Link>
          <Link href="/contact" className="hover:text-primary transition-colors">
            Contact
          </Link>
          <Link href="mailto:architect@inferenceroi.com" className="flex items-center gap-1 hover:text-primary transition-colors">
            <Mail className="h-4 w-4" />
            Email
          </Link>
        </div>
        <p>&copy; {currentYear} InferenceROI. All rights reserved.</p>
        <p className="mt-1">Cloud Cost Architect: Optimizing generative AI infrastructure for the modern enterprise.</p>
      </div>
    </footer>
  );
}
