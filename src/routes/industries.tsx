import { createFileRoute, Link } from "@tanstack/react-router";
import { SiteHeader } from "@/components/SiteHeader";
import { SiteFooter } from "@/components/SiteFooter";
import { Plane, Cog, Zap, FlaskConical, HeartPulse, Cpu, ArrowRight } from "lucide-react";

export const Route = createFileRoute("/industries")({
  head: () => ({
    meta: [
      { title: "Industries We Serve — Nexus Equipment" },
      { name: "description", content: "Nexus Equipment supplies aviation, industrial automation, electrical, laboratory, medical and smart systems sectors worldwide." },
      { property: "og:title", content: "Industries We Serve — Nexus Equipment" },
      { property: "og:description", content: "Sectors supported by Nexus Equipment's worldwide sourcing." },
    ],
  }),
  component: IndustriesPage,
});

const industries = [
  { icon: Plane, name: "Aviation", text: "Components, ground support equipment and technical supplies for operators, MROs and aviation service providers." },
  { icon: Cog, name: "Industrial Automation", text: "PLCs, HMIs, drives, sensors and motion components from leading OEMs — new and surplus stock for production environments." },
  { icon: Zap, name: "Electrical Systems", text: "Switchgear, transformers, breakers, cabling and power distribution equipment for industrial and infrastructure projects." },
  { icon: FlaskConical, name: "Laboratory Equipment", text: "Analytical instruments, measurement devices and lab apparatus for research, quality control and academic facilities." },
  { icon: HeartPulse, name: "Medical Equipment", text: "Medical and diagnostic equipment sourced for hospitals, clinics and healthcare distributors with full documentation." },
  { icon: Cpu, name: "Smart Systems", text: "Embedded controllers, IoT hardware, networking and intelligent building components for connected industrial systems." },
];

function IndustriesPage() {
  return (
    <div className="min-h-screen bg-background">
      <SiteHeader />
      <section className="border-b bg-gradient-to-b from-secondary to-background">
        <div className="container mx-auto px-6 py-20">
          <div className="max-w-3xl">
            <div className="text-xs font-semibold uppercase tracking-[0.2em] text-primary-deep">Industries We Serve</div>
            <h1 className="mt-3 text-4xl font-bold text-primary-deep md:text-5xl">Equipment expertise across critical sectors.</h1>
            <p className="mt-5 text-lg text-muted-foreground">
              We source and supply equipment for industries where reliability, traceability and lead time decide outcomes.
            </p>
          </div>
        </div>
      </section>

      <section className="container mx-auto px-6 py-20">
        <div className="grid gap-6 md:grid-cols-2">
          {industries.map((i) => (
            <article key={i.name} className="rounded-xl border bg-card p-8 shadow-card transition hover:-translate-y-0.5 hover:shadow-elegant">
              <div className="flex h-12 w-12 items-center justify-center rounded-md bg-primary-deep/10 text-primary-deep">
                <i.icon className="h-6 w-6" />
              </div>
              <h2 className="mt-6 text-xl font-bold text-primary-deep">{i.name}</h2>
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{i.text}</p>
            </article>
          ))}
        </div>

        <div className="mt-16 rounded-2xl px-10 py-14 text-center text-white shadow-elegant" style={{ background: "var(--gradient-hero)" }}>
          <h2 className="text-2xl font-bold md:text-3xl">Don't see your sector? We likely supply it.</h2>
          <p className="mx-auto mt-3 max-w-xl text-[oklch(0.92_0.02_250)]">Tell us what you need — our sourcing network extends well beyond the categories listed above.</p>
          <Link to="/contact" className="mt-6 inline-flex items-center gap-2 rounded-md bg-white px-6 py-3 text-sm font-semibold text-primary-deep transition hover:bg-[oklch(0.95_0.02_250)]">
            Submit a Request <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </section>

      <SiteFooter />
    </div>
  );
}
