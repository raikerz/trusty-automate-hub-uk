import { Link } from "react-router-dom";
import { SiteHeader } from "@/components/SiteHeader";
import { SiteFooter } from "@/components/SiteFooter";
import { Seo } from "@/lib/seo";
import { ArrowRight, Globe2, Clock, ShieldCheck, Plane, Cog, Zap, FlaskConical, HeartPulse, Cpu, Mail, Phone } from "lucide-react";
import heroImg from "@/assets/hero-warehouse.jpg";

const industries = [
  { icon: Plane, name: "Aviation" },
  { icon: Cog, name: "Industrial Automation" },
  { icon: Zap, name: "Electrical Systems" },
  { icon: FlaskConical, name: "Laboratory Equipment" },
  { icon: HeartPulse, name: "Medical Equipment" },
  { icon: Cpu, name: "Smart Systems" },
];

export default function HomePage() {
  return (
    <div className="min-h-screen bg-background">
      <Seo
        title="Nexus Equipment — Industrial Sourcing & Worldwide Supply"
        description="Nexus Equipment is a B2B industrial sourcing and supply company. We supply technical and surplus equipment worldwide with competitive pricing and fast communication."
        ogDescription="Worldwide supply of industrial, technical and surplus equipment."
      />
      <SiteHeader />

      {/* Hero */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0">
          <img src={heroImg} alt="Industrial equipment warehouse" width={1920} height={1088} className="h-full w-full object-cover" />
          <div className="absolute inset-0" style={{ background: "linear-gradient(110deg, oklch(0.16 0.08 258 / 0.96) 0%, oklch(0.22 0.10 258 / 0.88) 55%, oklch(0.26 0.12 258 / 0.55) 100%)" }} />
        </div>
        <div className="relative container mx-auto px-6 py-28 md:py-40">
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-3 py-1 text-xs font-medium uppercase tracking-wider text-white backdrop-blur">
              <ShieldCheck className="h-3.5 w-3.5" /> Trusted B2B Sourcing Partner
            </div>
            <h1 className="mt-6 text-4xl font-extrabold leading-[1.05] text-white md:text-6xl">
              Industrial Equipment.<br />Sourced Worldwide.
            </h1>
            <p className="mt-6 max-w-xl text-lg text-[oklch(0.92_0.02_250)]">
              Nexus Equipment supplies industrial and technical equipment to businesses across the globe — combining a deep supplier network with competitive pricing and fast, professional communication.
            </p>
            <div className="mt-10 flex flex-wrap gap-4">
              <Link to="/contact" className="inline-flex items-center gap-2 rounded-md bg-white px-6 py-3 text-sm font-semibold text-primary-deep shadow-elegant transition hover:bg-[oklch(0.95_0.02_250)]">
                Request a Quote <ArrowRight className="h-4 w-4" />
              </Link>
              <Link to="/industries" className="inline-flex items-center gap-2 rounded-md border border-white/30 bg-white/5 px-6 py-3 text-sm font-semibold text-white backdrop-blur transition hover:bg-white/15">
                Industries We Serve
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Value strip */}
      <section className="border-y bg-secondary">
        <div className="container mx-auto grid grid-cols-1 gap-8 px-6 py-10 md:grid-cols-3">
          {[
            { icon: Globe2, title: "Worldwide Supply", text: "Procurement and delivery to clients across multiple continents." },
            { icon: Clock, title: "Fast Communication", text: "Quotes and updates handled promptly by a dedicated sales team." },
            { icon: ShieldCheck, title: "Competitive Pricing", text: "Direct supplier relationships and surplus channels keep costs low." },
          ].map((v) => (
            <div key={v.title} className="flex gap-4">
              <div className="flex h-11 w-11 flex-shrink-0 items-center justify-center rounded-md bg-primary-deep/10 text-primary-deep">
                <v.icon className="h-5 w-5" />
              </div>
              <div>
                <div className="font-semibold text-primary-deep">{v.title}</div>
                <div className="mt-1 text-sm text-muted-foreground">{v.text}</div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* About */}
      <section id="about" className="container mx-auto px-6 py-24">
        <div className="mx-auto max-w-3xl text-center">
          <div className="text-xs font-semibold uppercase tracking-[0.2em] text-primary-deep">About Nexus Equipment</div>
          <h2 className="mt-3 text-3xl font-bold text-primary-deep md:text-4xl">A sourcing partner built for industry.</h2>
          <p className="mt-6 text-muted-foreground">
            Nexus Equipment is an industrial sourcing and supply company specialized in connecting buyers with the technical equipment they need — new, surplus and hard-to-find. We work directly with manufacturers, distributors and asset owners to source components, machinery and instrumentation across a wide range of sectors.
          </p>
          <p className="mt-4 text-muted-foreground">
            Our team focuses on what matters most to industrial buyers: accurate part identification, transparent pricing, dependable lead times and clear communication from quote to delivery — anywhere in the world.
          </p>
        </div>
      </section>

      {/* Industries */}
      <section className="bg-gradient-to-b from-secondary to-background py-24">
        <div className="container mx-auto px-6">
          <div className="mx-auto max-w-2xl text-center">
            <div className="text-xs font-semibold uppercase tracking-[0.2em] text-primary-deep">Industries We Serve</div>
            <h2 className="mt-3 text-3xl font-bold text-primary-deep md:text-4xl">Equipment for the sectors that build the world.</h2>
          </div>
          <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {industries.map((i) => (
              <div key={i.name} className="group flex items-center gap-4 rounded-lg border bg-card p-6 shadow-card transition hover:-translate-y-0.5 hover:shadow-elegant">
                <div className="flex h-12 w-12 items-center justify-center rounded-md bg-primary-deep/10 text-primary-deep">
                  <i.icon className="h-6 w-6" />
                </div>
                <div className="font-semibold text-primary-deep">{i.name}</div>
              </div>
            ))}
          </div>
          <div className="mt-12 text-center">
            <Link to="/industries" className="inline-flex items-center gap-2 text-sm font-semibold text-primary-deep hover:text-primary">
              See how we support each sector <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* Sell */}
      <section className="container mx-auto px-6 py-24">
        <div className="grid gap-10 rounded-2xl border bg-card p-10 shadow-card md:grid-cols-2 md:items-center md:p-14">
          <div>
            <div className="text-xs font-semibold uppercase tracking-[0.2em] text-primary-deep">Sell Your Equipment</div>
            <h2 className="mt-3 text-3xl font-bold text-primary-deep md:text-4xl">Turn surplus equipment into value.</h2>
            <p className="mt-5 text-muted-foreground">
              Looking to sell surplus or unused equipment? Send equipment photos, condition details and your asking price to our sales team — we review every offer and respond promptly.
            </p>
          </div>
          <div className="rounded-xl border bg-secondary/60 p-8">
            <div className="text-sm font-semibold text-primary-deep">Send your offer to</div>
            <a href="mailto:Sales@Nexusequipment.us" className="mt-2 flex items-center gap-2 text-lg font-bold text-primary-deep hover:text-primary">
              <Mail className="h-5 w-5" /> Sales@Nexusequipment.us
            </a>
            <Link to="/sell" className="mt-6 inline-flex items-center gap-2 rounded-md bg-primary-deep px-5 py-2.5 text-sm font-semibold text-primary-foreground transition hover:bg-primary">
              Learn more <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* Contact CTA */}
      <section className="container mx-auto px-6 pb-24">
        <div className="rounded-2xl px-10 py-16 text-center text-white shadow-elegant" style={{ background: "var(--gradient-hero)" }}>
          <h2 className="text-3xl font-bold md:text-4xl">Let's discuss your sourcing requirement.</h2>
          <p className="mx-auto mt-4 max-w-xl text-[oklch(0.92_0.02_250)]">Reach out with part numbers, specifications or a description of what you need — our team will get back to you with a quote.</p>
          <div className="mt-8 flex flex-wrap items-center justify-center gap-4 text-sm font-medium">
            <a href="mailto:Sales@Nexusequipment.us" className="inline-flex items-center gap-2 rounded-md bg-white px-5 py-2.5 font-semibold text-primary-deep transition hover:bg-[oklch(0.95_0.02_250)]">
              <Mail className="h-4 w-4" /> Sales@Nexusequipment.us
            </a>
            <a href="tel:+19177357990" className="inline-flex items-center gap-2 rounded-md border border-white/30 bg-white/10 px-5 py-2.5 font-semibold text-white transition hover:bg-white/20">
              <Phone className="h-4 w-4" /> +1 (917) 735-7990
            </a>
          </div>
        </div>
      </section>

      <SiteFooter />
    </div>
  );
}
