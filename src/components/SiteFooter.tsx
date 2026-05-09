import { Link } from "@tanstack/react-router";
import { Factory, Mail, Phone, MapPin } from "lucide-react";

export function SiteFooter() {
  return (
    <footer className="border-t bg-[oklch(0.20_0.08_258)] text-[oklch(0.92_0.02_250)]">
      <div className="container mx-auto px-6 py-14">
        <div className="grid gap-10 md:grid-cols-4">
          <div className="md:col-span-2">
            <div className="flex items-center gap-2">
              <div className="flex h-9 w-9 items-center justify-center rounded-md bg-primary-glow text-primary-deep">
                <Factory className="h-5 w-5" />
              </div>
              <span className="font-display text-lg font-bold text-white">AXION Industrial</span>
            </div>
            <p className="mt-4 max-w-md text-sm text-[oklch(0.78_0.03_250)]">
              Engineering reliable B2B automation systems for manufacturers worldwide. ISO 9001 certified. Trusted by 400+ industrial partners.
            </p>
          </div>
          <div>
            <h4 className="text-sm font-semibold text-white">Navigate</h4>
            <ul className="mt-4 space-y-2 text-sm">
              <li><Link to="/" className="hover:text-white">Home</Link></li>
              <li><Link to="/equipment" className="hover:text-white">Equipment</Link></li>
              <li><Link to="/contact" className="hover:text-white">Contact</Link></li>
            </ul>
          </div>
          <div>
            <h4 className="text-sm font-semibold text-white">Contact</h4>
            <ul className="mt-4 space-y-3 text-sm">
              <li className="flex items-center gap-2"><Phone className="h-4 w-4" /> +1 (800) 555-0142</li>
              <li className="flex items-center gap-2"><Mail className="h-4 w-4" /> sales@axion-ind.com</li>
              <li className="flex items-center gap-2"><MapPin className="h-4 w-4" /> Houston, TX · USA</li>
            </ul>
          </div>
        </div>
        <div className="mt-12 border-t border-white/10 pt-6 text-xs text-[oklch(0.70_0.03_250)]">
          © {new Date().getFullYear()} Axion Industrial Automation. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
