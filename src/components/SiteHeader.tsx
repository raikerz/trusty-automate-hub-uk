import { Link } from "@tanstack/react-router";
import { Hexagon } from "lucide-react";

export function SiteHeader() {
  const linkCls = "text-sm font-medium text-muted-foreground hover:text-primary transition-colors";
  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/90 backdrop-blur supports-[backdrop-filter]:bg-background/75">
      <div className="container mx-auto flex h-16 items-center justify-between px-6">
        <Link to="/" className="flex items-center gap-2.5">
          <div className="flex h-9 w-9 items-center justify-center rounded-md bg-primary-deep text-primary-foreground">
            <Hexagon className="h-5 w-5" />
          </div>
          <div className="leading-tight">
            <div className="font-display text-base font-bold text-primary-deep">NEXUS EQUIPMENT</div>
            <div className="text-[10px] uppercase tracking-[0.18em] text-muted-foreground">Industrial Sourcing & Supply</div>
          </div>
        </Link>
        <nav className="hidden items-center gap-7 md:flex">
          <Link to="/" className={linkCls} activeOptions={{ exact: true }} activeProps={{ className: "text-primary-deep font-semibold" }}>Home</Link>
          <Link to="/about" className={linkCls} activeProps={{ className: "text-primary-deep font-semibold" }}>About</Link>
          <Link to="/industries" className={linkCls} activeProps={{ className: "text-primary-deep font-semibold" }}>Industries</Link>
          <Link to="/sell" className={linkCls} activeProps={{ className: "text-primary-deep font-semibold" }}>Sell Equipment</Link>
          <Link to="/contact" className={linkCls} activeProps={{ className: "text-primary-deep font-semibold" }}>Contact</Link>
        </nav>
        <Link to="/contact" className="hidden md:inline-flex items-center justify-center rounded-md bg-primary-deep px-4 py-2 text-sm font-semibold text-primary-foreground shadow-sm transition-colors hover:bg-primary">
          Request a Quote
        </Link>
      </div>
    </header>
  );
}
