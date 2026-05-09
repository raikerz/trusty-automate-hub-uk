import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { SiteHeader } from "@/components/SiteHeader";
import { SiteFooter } from "@/components/SiteFooter";
import { Phone, Mail, MapPin, Clock, Send } from "lucide-react";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact AXION Industrial Automation" },
      { name: "description", content: "Reach out for quotes, technical consultation or service. Our engineering team responds within one business day." },
      { property: "og:title", content: "Contact — AXION Industrial Automation" },
      { property: "og:description", content: "Get in touch with our automation engineering team." },
    ],
  }),
  component: ContactPage,
});

function ContactPage() {
  const [sent, setSent] = useState(false);

  return (
    <div className="min-h-screen bg-background">
      <SiteHeader />

      <section className="border-b bg-gradient-to-b from-secondary to-background">
        <div className="container mx-auto px-6 py-20">
          <div className="max-w-3xl">
            <div className="text-xs font-semibold uppercase tracking-[0.2em] text-primary">Contact</div>
            <h1 className="mt-3 text-4xl font-bold text-primary-deep md:text-5xl">Talk to our engineering team.</h1>
            <p className="mt-5 text-lg text-muted-foreground">
              Send us your specification or RFQ. An application engineer will respond within one business day.
            </p>
          </div>
        </div>
      </section>

      <section className="container mx-auto grid gap-12 px-6 py-20 lg:grid-cols-5">
        {/* Info */}
        <aside className="space-y-8 lg:col-span-2">
          {[
            { icon: Phone, title: "Sales & Quotations", lines: ["+1 (800) 555-0142", "Mon–Fri, 7am – 7pm CT"] },
            { icon: Mail, title: "Email", lines: ["sales@axion-ind.com", "support@axion-ind.com"] },
            { icon: MapPin, title: "Headquarters", lines: ["2400 Industrial Pkwy", "Houston, TX 77032 · USA"] },
            { icon: Clock, title: "Service Desk", lines: ["24 / 7 emergency response", "Global on-site network"] },
          ].map((c) => (
            <div key={c.title} className="flex gap-4 rounded-lg border bg-card p-6 shadow-card">
              <div className="flex h-11 w-11 flex-shrink-0 items-center justify-center rounded-md bg-primary/10 text-primary">
                <c.icon className="h-5 w-5" />
              </div>
              <div>
                <h3 className="font-semibold text-primary-deep">{c.title}</h3>
                {c.lines.map((l) => (
                  <p key={l} className="text-sm text-muted-foreground">{l}</p>
                ))}
              </div>
            </div>
          ))}
        </aside>

        {/* Form */}
        <div className="lg:col-span-3">
          <form
            onSubmit={(e) => { e.preventDefault(); setSent(true); }}
            className="rounded-xl border bg-card p-8 shadow-elegant"
          >
            <h2 className="text-2xl font-bold text-primary-deep">Request a quotation</h2>
            <p className="mt-1 text-sm text-muted-foreground">Fields marked * are required.</p>

            <div className="mt-8 grid gap-5 md:grid-cols-2">
              <Field label="Full name *" name="name" required />
              <Field label="Company *" name="company" required />
              <Field label="Business email *" name="email" type="email" required />
              <Field label="Phone" name="phone" />
              <Field label="Country" name="country" />
              <Field label="Industry" name="industry" placeholder="Automotive, F&B…" />
            </div>

            <div className="mt-5">
              <label className="text-sm font-medium text-foreground">Project details *</label>
              <textarea
                required
                rows={5}
                placeholder="Equipment needed, quantities, target delivery date…"
                className="mt-2 w-full rounded-md border border-input bg-background px-4 py-3 text-sm outline-none transition focus:border-primary focus:ring-2 focus:ring-primary/20"
              />
            </div>

            <button
              type="submit"
              disabled={sent}
              className="mt-8 inline-flex w-full items-center justify-center gap-2 rounded-md bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground shadow-sm transition hover:bg-primary-deep md:w-auto"
            >
              {sent ? "Message received — we'll be in touch" : <>Send Inquiry <Send className="h-4 w-4" /></>}
            </button>
            <p className="mt-4 text-xs text-muted-foreground">By submitting, you agree to be contacted by AXION regarding your inquiry. We never share business data with third parties.</p>
          </form>
        </div>
      </section>

      <SiteFooter />
    </div>
  );
}

function Field({ label, name, type = "text", required, placeholder }: {
  label: string; name: string; type?: string; required?: boolean; placeholder?: string;
}) {
  return (
    <div>
      <label htmlFor={name} className="text-sm font-medium text-foreground">{label}</label>
      <input
        id={name}
        name={name}
        type={type}
        required={required}
        placeholder={placeholder}
        className="mt-2 w-full rounded-md border border-input bg-background px-4 py-2.5 text-sm outline-none transition focus:border-primary focus:ring-2 focus:ring-primary/20"
      />
    </div>
  );
}
