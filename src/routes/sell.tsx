import { SiteHeader } from "@/components/SiteHeader";
import { SiteFooter } from "@/components/SiteFooter";
import { Seo } from "@/lib/seo";
import { Mail, Camera, FileText, DollarSign } from "lucide-react";

export default function SellPage() {
  const items = [
    { icon: Camera, title: "Equipment photos", text: "Clear photos of the unit, the data plate and any visible damage." },
    { icon: FileText, title: "Condition details", text: "Make, model, serial number, year and current operating condition." },
    { icon: DollarSign, title: "Your asking price", text: "Target price per unit and quantity available." },
  ];
  return (
    <div className="min-h-screen bg-background">
      <Seo
        title="Sell Your Equipment — Nexus Equipment"
        description="Sell surplus or unused industrial equipment to Nexus Equipment. Send photos, condition details and asking price to Sales@Nexusequipment.co.uk."
        ogDescription="Turn surplus and unused equipment into value with Nexus Equipment."
      />
      <SiteHeader />
      <section className="border-b bg-gradient-to-b from-secondary to-background">
        <div className="container mx-auto px-6 py-20">
          <div className="max-w-3xl">
            <div className="text-xs font-semibold uppercase tracking-[0.2em] text-primary-deep">Sell Your Equipment</div>
            <h1 className="mt-3 text-4xl font-bold text-primary-deep md:text-5xl">Turn surplus equipment into value.</h1>
            <p className="mt-5 text-lg text-muted-foreground">
              Looking to sell surplus or unused equipment? Send equipment photos, condition details and your asking price to{" "}
              <a href="mailto:Sales@Nexusequipment.co.uk" className="font-semibold text-primary-deep hover:text-primary">Sales@Nexusequipment.co.uk</a>{" "}
              — our team reviews every offer and responds promptly.
            </p>
          </div>
        </div>
      </section>

      <section className="container mx-auto px-6 py-20">
        <div className="grid gap-6 md:grid-cols-3">
          {items.map((i) => (
            <div key={i.title} className="rounded-xl border bg-card p-8 shadow-card">
              <div className="flex h-12 w-12 items-center justify-center rounded-md bg-primary-deep/10 text-primary-deep">
                <i.icon className="h-6 w-6" />
              </div>
              <h2 className="mt-6 text-lg font-bold text-primary-deep">{i.title}</h2>
              <p className="mt-2 text-sm text-muted-foreground">{i.text}</p>
            </div>
          ))}
        </div>

        <div className="mt-14 rounded-2xl border bg-card p-10 text-center shadow-card">
          <h2 className="text-2xl font-bold text-primary-deep">Send your offer</h2>
          <p className="mx-auto mt-3 max-w-xl text-muted-foreground">Email your equipment list with the details above and we'll respond with our interest and indicative pricing.</p>
          <a href="mailto:Sales@Nexusequipment.co.uk" className="mt-6 inline-flex items-center gap-2 rounded-md bg-primary-deep px-6 py-3 text-sm font-semibold text-primary-foreground transition hover:bg-primary">
            <Mail className="h-4 w-4" /> Sales@Nexusequipment.co.uk
          </a>
        </div>
      </section>

      <SiteFooter />
    </div>
  );
}
