import { createFileRoute, Link } from "@tanstack/react-router";
import { SiteHeader } from "@/components/SiteHeader";
import { SiteFooter } from "@/components/SiteFooter";
import { ShieldCheck, Cog, Award, Headset, ArrowRight, CheckCircle2 } from "lucide-react";
import heroImg from "@/assets/hero-industrial.jpg";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "AXION — B2B Industrial Automation Equipment" },
      { name: "description", content: "Trusted supplier of industrial automation equipment for manufacturers: PLCs, robotics, servo drives and HMI panels. ISO 9001 certified." },
      { property: "og:title", content: "AXION Industrial Automation" },
      { property: "og:description", content: "Reliable industrial automation equipment for B2B manufacturers worldwide." },
    ],
  }),
  component: HomePage,
});

function HomePage() {
  return (
    <div className="min-h-screen bg-background">
      <SiteHeader />

      {/* Hero */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0">
          <img src={heroImg} alt="Industrial automation factory" width={1920} height={1088} className="h-full w-full object-cover" />
          <div className="absolute inset-0" style={{ background: "linear-gradient(110deg, oklch(0.20 0.10 258 / 0.95) 0%, oklch(0.30 0.14 256 / 0.85) 50%, oklch(0.30 0.14 256 / 0.4) 100%)" }} />
        </div>
        <div className="relative container mx-auto px-6 py-28 md:py-40">
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-3 py-1 text-xs font-medium uppercase tracking-wider text-white backdrop-blur">
              <ShieldCheck className="h-3.5 w-3.5" /> ISO 9001 · CE · UL Certified
            </div>
            <h1 className="mt-6 text-4xl font-extrabold leading-tight text-white md:text-6xl">
              Industrial Automation,<br />Engineered for Uptime.
            </h1>
            <p className="mt-6 max-w-xl text-lg text-[oklch(0.92_0.02_250)]">
              We supply factories, plants, and OEMs with mission-critical automation equipment — backed by 25+ years of engineering expertise and a global service network.
            </p>
            <div className="mt-10 flex flex-wrap gap-4">
              <Link to="/equipment" className="inline-flex items-center gap-2 rounded-md bg-white px-6 py-3 text-sm font-semibold text-primary-deep shadow-elegant transition hover:bg-[oklch(0.95_0.02_250)]">
                Browse Equipment <ArrowRight className="h-4 w-4" />
              </Link>
              <Link to="/contact" className="inline-flex items-center gap-2 rounded-md border border-white/30 bg-white/5 px-6 py-3 text-sm font-semibold text-white backdrop-blur transition hover:bg-white/15">
                Talk to an Engineer
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Trust strip */}
      <section className="border-y bg-secondary">
        <div className="container mx-auto grid grid-cols-2 gap-8 px-6 py-10 md:grid-cols-4">
          {[
            { k: "25+", v: "Years of Engineering" },
            { k: "400+", v: "Industrial Clients" },
            { k: "60", v: "Countries Served" },
            { k: "24/7", v: "Technical Support" },
          ].map((s) => (
            <div key={s.v} className="text-center">
              <div className="font-display text-3xl font-bold text-primary-deep md:text-4xl">{s.k}</div>
              <div className="mt-1 text-xs uppercase tracking-wider text-muted-foreground">{s.v}</div>
            </div>
          ))}
        </div>
      </section>

      {/* Capabilities */}
      <section className="container mx-auto px-6 py-24">
        <div className="mx-auto max-w-2xl text-center">
          <div className="text-xs font-semibold uppercase tracking-[0.2em] text-primary">What we deliver</div>
          <h2 className="mt-3 text-3xl font-bold text-primary-deep md:text-4xl">A complete automation portfolio</h2>
          <p className="mt-4 text-muted-foreground">From component-level supply to full integration — we equip industrial operations with the systems that keep production lines moving.</p>
        </div>
        <div className="mt-14 grid gap-6 md:grid-cols-3">
          {[
            { icon: Cog, title: "Engineered Equipment", text: "PLCs, servo drives, robotic arms, and HMI panels from leading manufacturers — qualified for industrial duty cycles." },
            { icon: Award, title: "Certified Quality", text: "Every shipment is inspected and traceable. ISO 9001 quality management with CE and UL listed components." },
            { icon: Headset, title: "Engineering Support", text: "Application engineers available 24/7. Commissioning, integration consulting, and on-site service worldwide." },
          ].map((c) => (
            <div key={c.title} className="group rounded-lg border bg-card p-8 shadow-card transition hover:-translate-y-1 hover:shadow-elegant">
              <div className="flex h-12 w-12 items-center justify-center rounded-md bg-primary/10 text-primary">
                <c.icon className="h-6 w-6" />
              </div>
              <h3 className="mt-6 text-lg font-bold text-primary-deep">{c.title}</h3>
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{c.text}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Why choose */}
      <section className="bg-gradient-to-b from-secondary to-background py-24">
        <div className="container mx-auto grid gap-16 px-6 md:grid-cols-2 md:items-center">
          <div>
            <div className="text-xs font-semibold uppercase tracking-[0.2em] text-primary">Why AXION</div>
            <h2 className="mt-3 text-3xl font-bold text-primary-deep md:text-4xl">Built on engineering rigor and industrial trust.</h2>
            <p className="mt-5 text-muted-foreground">
              Manufacturers across automotive, food & beverage, pharmaceuticals and energy rely on AXION as their long-term automation partner. Our process is documented, our supply chain audited, and our equipment validated before it ever reaches your floor.
            </p>
            <ul className="mt-8 space-y-4">
              {[
                "Vendor-neutral selection — the right equipment for your spec",
                "Pre-shipment factory acceptance testing (FAT)",
                "Lifetime documentation and serial-level traceability",
                "Local stock for critical spare parts",
              ].map((p) => (
                <li key={p} className="flex items-start gap-3 text-sm text-foreground">
                  <CheckCircle2 className="mt-0.5 h-5 w-5 flex-shrink-0 text-primary" />
                  <span>{p}</span>
                </li>
              ))}
            </ul>
          </div>
          <div className="rounded-2xl border bg-card p-8 shadow-elegant">
            <blockquote className="text-lg font-medium leading-relaxed text-primary-deep">
              "AXION rebuilt our packaging line PLC architecture in under three weeks. Their engineers understood our process — not just the hardware."
            </blockquote>
            <div className="mt-6 border-t pt-6">
              <div className="text-sm font-semibold text-foreground">M. Andersson</div>
              <div className="text-xs text-muted-foreground">Plant Manager, Nordic Foods AB</div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="container mx-auto px-6 py-24">
        <div className="rounded-2xl px-10 py-16 text-center text-white shadow-elegant" style={{ background: "var(--gradient-hero)" }}>
          <h2 className="text-3xl font-bold md:text-4xl">Specifying your next automation project?</h2>
          <p className="mx-auto mt-4 max-w-xl text-[oklch(0.92_0.02_250)]">Send us your requirements — we'll respond within one business day with a quotation and engineering review.</p>
          <Link to="/contact" className="mt-8 inline-flex items-center gap-2 rounded-md bg-white px-7 py-3 text-sm font-semibold text-primary-deep transition hover:bg-[oklch(0.95_0.02_250)]">
            Request a Quote <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </section>

      <SiteFooter />
    </div>
  );
}
