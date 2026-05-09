import { createFileRoute, Link } from "@tanstack/react-router";
import { SiteHeader } from "@/components/SiteHeader";
import { SiteFooter } from "@/components/SiteFooter";
import { ShieldCheck, Cog, Award, Headset, ArrowRight, CheckCircle2 } from "lucide-react";
import heroImg from "@/assets/hero-industrial.jpg";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "AXION — Aircraft Parts, Industrial & Automation Equipment" },
      { name: "description", content: "Trusted B2B trader of aircraft parts, industrial equipment and automation systems. We buy and sell certified, traceable hardware worldwide." },
      { property: "og:title", content: "AXION — Aircraft, Industrial & Automation Equipment" },
      { property: "og:description", content: "B2B buyer and seller of aircraft parts, industrial machinery and automation equipment." },
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
              <ShieldCheck className="h-3.5 w-3.5" /> AS9120 · ISO 9001 · Traceable Hardware
            </div>
            <h1 className="mt-6 text-4xl font-extrabold leading-tight text-white md:text-6xl">
              Aircraft, Industrial &<br />Automation Equipment.
            </h1>
            <p className="mt-6 max-w-xl text-lg text-[oklch(0.92_0.02_250)]">
              We buy and sell certified aircraft parts, industrial machinery and automation systems — sourcing globally and supplying operators, MROs and manufacturers with documented, mission-ready hardware.
            </p>
            <div className="mt-3 flex flex-wrap gap-2 text-xs text-[oklch(0.85_0.02_250)]">
              <span className="rounded-full border border-white/20 bg-white/5 px-3 py-1">Aircraft Parts</span>
              <span className="rounded-full border border-white/20 bg-white/5 px-3 py-1">Industrial Equipment</span>
              <span className="rounded-full border border-white/20 bg-white/5 px-3 py-1">Automation Systems</span>
            </div>
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
          { k: "25+", v: "Years in the Trade" },
            { k: "400+", v: "B2B Clients Worldwide" },
            { k: "60", v: "Countries Served" },
            { k: "100%", v: "Traceable Documentation" },
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
          <div className="text-xs font-semibold uppercase tracking-[0.2em] text-primary">What we trade</div>
          <h2 className="mt-3 text-3xl font-bold text-primary-deep md:text-4xl">Three portfolios. One trusted source.</h2>
          <p className="mt-4 text-muted-foreground">From aircraft rotables to factory-floor automation — we source, inspect, document and resell the equipment our clients depend on.</p>
        </div>
        <div className="mt-14 grid gap-6 md:grid-cols-3">
          {[
            { icon: Award, title: "Aircraft Parts", text: "Rotables, consumables, avionics and engine components for commercial and general aviation. Every unit traceable with full 8130-3 / EASA Form 1 documentation." },
            { icon: Cog, title: "Industrial Equipment", text: "CNC machines, motors, gearboxes, pumps and process equipment — surplus and refurbished hardware for manufacturers, MROs and resellers." },
            { icon: Headset, title: "Automation Systems", text: "PLCs, HMIs, servo drives and robotic systems from leading OEMs. Tested, configured and ready for integration on the production floor." },
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
            <h2 className="mt-3 text-3xl font-bold text-primary-deep md:text-4xl">Built on technical rigor and trader reliability.</h2>
            <p className="mt-5 text-muted-foreground">
              Airlines, MROs, manufacturers and OEMs work with AXION as a long-term sourcing partner. Our procurement is audited, our inspections documented, and every part is traceable from purchase to delivery.
            </p>
            <ul className="mt-8 space-y-4">
              {[
                "Buy and sell — we move your surplus and source what you need",
                "Full traceability: 8130-3, EASA Form 1, CoC and serial records",
                "In-house inspection before every shipment",
                "Global logistics with AOG response capability",
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
              "AXION sourced an out-of-production landing gear actuator in 48 hours, fully certified. They've since become our default trading partner."
            </blockquote>
            <div className="mt-6 border-t pt-6">
              <div className="text-sm font-semibold text-foreground">M. Andersson</div>
              <div className="text-xs text-muted-foreground">Procurement Lead, Nordic MRO Group</div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="container mx-auto px-6 py-24">
        <div className="rounded-2xl px-10 py-16 text-center text-white shadow-elegant" style={{ background: "var(--gradient-hero)" }}>
          <h2 className="text-3xl font-bold md:text-4xl">Buying or selling? Let's talk.</h2>
          <p className="mx-auto mt-4 max-w-xl text-[oklch(0.92_0.02_250)]">Send us your part number, RFQ or surplus list — we'll respond within one business day with availability, pricing or a purchase offer.</p>
          <Link to="/contact" className="mt-8 inline-flex items-center gap-2 rounded-md bg-white px-7 py-3 text-sm font-semibold text-primary-deep transition hover:bg-[oklch(0.95_0.02_250)]">
            Submit RFQ / Offer <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </section>

      <SiteFooter />
    </div>
  );
}
