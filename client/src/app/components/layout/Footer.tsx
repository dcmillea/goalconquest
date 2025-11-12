import Link from "next/link";
import { Github, Linkedin } from "lucide-react";

export default function Footer() {
  return (
    <footer className="w-full bg-midnight text-gray-300 py-8 border-t border-steel/50">
      <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-6">
        {/* Left side - Brand */}
        <div className="text-center md:text-left">
          <h3 className="text-lg font-semibold text-gold">Goal Conquest ⚔️</h3>
          <p className="text-sm text-gray-400">
            Conquer your goals, one battle at a time.
          </p>
        </div>

        {/* Center - Navigation links */}
        <div className="flex flex-wrap justify-center gap-4 text-sm">
          <Link href="/contact" className="hover:text-gold transition-colors">
            Contact Us
          </Link>
          <Link href="/privacy" className="hover:text-gold transition-colors">
            Privacy Policy
          </Link>
          <Link href="/terms" className="hover:text-gold transition-colors">
            Terms of Service
          </Link>
          <Link href="/faq" className="hover:text-gold transition-colors">
            FAQ
          </Link>
          <Link href="/blog" className="hover:text-gold transition-colors">
            Blog
          </Link>
        </div>

        {/* Right side - Socials */}
        <div className="flex gap-4">
          <a
            href="https://github.com/dcmillea"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-gold transition-colors"
          >
            <Github className="h-5 w-5" />
          </a>
          <a
            href="https://www.linkedin.com/in/daniel-millea-3666b138a/"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-gold transition-colors"
          >
            <Linkedin className="h-5 w-5" />
          </a>
        </div>
      </div>

      {/* Bottom line */}
      <div className="mt-6 text-center text-xs text-gray-500">
        © {new Date().getFullYear()} Goal Conquest. All rights reserved.
      </div>
    </footer>
  );
}
