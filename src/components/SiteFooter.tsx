import { Link } from "react-router-dom";

export function SiteFooter() {
  return (
    <footer className="border-t bg-[oklch(0.18_0.06_258)] text-[oklch(0.92_0.02_250)]">
      <div className="container mx-auto px-6 py-14">
        <div className="grid gap-10 md:grid-cols-4">
          <div className="md:col-span-2">
            <div className="flex items-center gap-2.5">
              <img
                src="/logo.png"
                  alt="Nexus Equipment"
                    className="h-10 w-10 rounded-md"
                         />
              <span className="font-display text-lg font-bold text-white">Nexus Equipment</span>
            </div>
            <p className="mt-4 max-w-md text-sm text-[oklch(0.78_0.03_250)]">
              Industrial sourcing and supply company specialized in worldwide procurement of technical and surplus equipment — competitive pricing, fast communication.
            </p>
          </div>
          <div>
            <h4 className="text-sm font-semibold text-white">Navigate</h4>
            <ul className="mt-4 space-y-2 text-sm">
              <li><Link to="/" className="hover:text-white">Home</Link></li>
              <li><Link to="/about" className="hover:text-white">About</Link></li>
              <li><Link to="/industries" className="hover:text-white">Industries</Link></li>
              <li><Link to="/sell" className="hover:text-white">Sell Equipment</Link></li>
              <li><Link to="/contact" className="hover:text-white">Contact</Link></li>
            </ul>
          </div>
          <div>
            <h4 className="text-sm font-semibold text-white">Contact</h4>
            <ul className="mt-4 space-y-3 text-sm">
              <li className="flex items-center gap-2"><Phone className="h-4 w-4" /> +1 (917) 735-7990</li>
              <li className="flex items-center gap-2"><Mail className="h-4 w-4" /> Sales@Nexusequipment.us</li>
            </ul>
          </div>
        </div>
        <div className="mt-12 border-t border-white/10 pt-6 text-xs text-[oklch(0.70_0.03_250)]">
          © {new Date().getFullYear()} Nexus Equipment. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
