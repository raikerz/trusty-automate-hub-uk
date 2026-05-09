import { Link } from "@tanstack/react-router";
import { Factory } from "lucide-react";

export function SiteHeader() {
  const linkCls = "text-sm font-medium text-muted-foreground hover:text-primary transition-colors";
  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/85 backdrop-blur supports-[backdrop-filter]:bg-background/70">
      <div className="container mx-auto flex h-16 items-center justify-between px-6">
        <Link to="/" className="flex items-center gap-2">
          <div className="flex h-9 w-9 items-center justify-center rounded-md bg-primary text-primary-foreground">
            <Factory className="h-5 w-5" />
          </div>
          <div className="leading-tight">
            <div className="font-display text-base font-bold text-primary-deep">AXION</div>
            <div className="text-[10px] uppercase tracking-[0.18em] text-muted-foreground">Aircraft · Industrial · Automation</div>
          </div>
        </Link>
        <nav className="hidden items-center gap-8 md:flex">
          <Link to="/" className={linkCls} activeOptions={{ exact: true }} activeProps={{ className: "text-primary font-semibold" }}>Home</Link>
          <Link to="/equipment" className={linkCls} activeProps={{ className: "text-primary font-semibold" }}>Equipment</Link>
          <Link to="/contact" className={linkCls} activeProps={{ className: "text-primary font-semibold" }}>Contact</Link>
        </nav>
        <Link to="/contact" className="hidden md:inline-flex items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-semibold text-primary-foreground shadow-sm transition-colors hover:bg-primary-deep">
          Request a Quote
        </Link>
      </div>
    </header>
  );
}
