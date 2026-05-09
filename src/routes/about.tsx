import { createFileRoute } from "@tanstack/react-router";
import { SiteHeader } from "@/components/SiteHeader";
import { SiteFooter } from "@/components/SiteFooter";
import { CheckCircle2 } from "lucide-react";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About — Nexus Equipment" },
      { name: "description", content: "Nexus Equipment is an industrial sourcing and supply company providing surplus and technical equipment to clients worldwide." },
      { property: "og:title", content: "About Nexus Equipment" },
      { property: "og:description", content: "Industrial sourcing, surplus equipment and worldwide supply." },
    ],
  }),
  component: AboutPage,
});

function AboutPage() {
  const points = [
    "Direct sourcing from manufacturers, authorized distributors and asset owners",
    "Specialists in surplus, hard-to-find and obsolete equipment",
    "Worldwide logistics with export documentation handled in-house",
    "Single point of contact from RFQ through delivery",
  ];
  return (
    <div className="min-h-screen bg-background">
      <SiteHeader />
      <section className="border-b bg-gradient-to-b from-secondary to-background">
        <div className="container mx-auto px-6 py-20">
          <div className="max-w-3xl">
            <div className="text-xs font-semibold uppercase tracking-[0.2em] text-primary-deep">About</div>
            <h1 className="mt-3 text-4xl font-bold text-primary-deep md:text-5xl">An industrial sourcing partner you can rely on.</h1>
          </div>
        </div>
      </section>

      <section className="container mx-auto grid gap-16 px-6 py-20 lg:grid-cols-5">
        <div className="space-y-6 lg:col-span-3">
          <p className="text-lg text-foreground">
            Nexus Equipment is a B2B industrial sourcing and supply company. We specialize in supplying technical and surplus equipment worldwide — combining a wide supplier network with competitive pricing and fast, professional communication.
          </p>
          <p className="text-muted-foreground">
            Our work centers on solving the practical problems industrial buyers face every day: identifying the right part number, locating equipment that is no longer in production, comparing offers across suppliers, and coordinating shipment to sites in different countries. We act as an extension of our clients' procurement teams, handling the legwork so they can focus on running their operations.
          </p>
          <p className="text-muted-foreground">
            From single replacement components to large equipment packages, every inquiry is treated with the same attention to detail. We are equally comfortable supporting an MRO that needs a critical spare on short notice, a manufacturer planning a capacity expansion, or a project integrator assembling a complete equipment list.
          </p>
        </div>
        <aside className="lg:col-span-2">
          <div className="rounded-xl border bg-card p-8 shadow-card">
            <h2 className="text-lg font-bold text-primary-deep">How we work</h2>
            <ul className="mt-6 space-y-4">
              {points.map((p) => (
                <li key={p} className="flex items-start gap-3 text-sm text-foreground">
                  <CheckCircle2 className="mt-0.5 h-5 w-5 flex-shrink-0 text-primary-deep" />
                  <span>{p}</span>
                </li>
              ))}
            </ul>
          </div>
        </aside>
      </section>

      <SiteFooter />
    </div>
  );
}
