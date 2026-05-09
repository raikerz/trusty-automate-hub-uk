import { SiteHeader } from "@/components/SiteHeader";
import { SiteFooter } from "@/components/SiteFooter";
import { Seo } from "@/lib/seo";
import { Phone, Mail, Send } from "lucide-react";

export default function ContactPage() {


  return (
    <div className="min-h-screen bg-background">
      <Seo
        title="Contact — Nexus Equipment"
        description="Contact Nexus Equipment for industrial sourcing inquiries. Email Sales@Nexusequipment.us or call +1 (917) 735-7990."
        ogTitle="Contact Nexus Equipment"
        ogDescription="Get in touch for quotes, sourcing requests or to sell surplus equipment."
      />
      <SiteHeader />

      <section className="border-b bg-gradient-to-b from-secondary to-background">
        <div className="container mx-auto px-6 py-20">
          <div className="max-w-3xl">
            <div className="text-xs font-semibold uppercase tracking-[0.2em] text-primary-deep">Contact</div>
            <h1 className="mt-3 text-4xl font-bold text-primary-deep md:text-5xl">Let's discuss your requirement.</h1>
            <p className="mt-5 text-lg text-muted-foreground">
              Send us your inquiry — part numbers, specifications or a description of what you need. We respond promptly.
            </p>
          </div>
        </div>
      </section>

      <section className="container mx-auto grid gap-12 px-6 py-20 lg:grid-cols-5">
        <aside className="space-y-6 lg:col-span-2">
          <div className="rounded-lg border bg-card p-6 shadow-card">
            <div className="flex items-center gap-3">
              <div className="flex h-11 w-11 items-center justify-center rounded-md bg-primary-deep/10 text-primary-deep">
                <Mail className="h-5 w-5" />
              </div>
              <h2 className="font-semibold text-primary-deep">Email</h2>
            </div>
            <a href="mailto:Sales@Nexusequipment.us" className="mt-4 block text-sm font-medium text-foreground hover:text-primary-deep">
              Sales@Nexusequipment.us
            </a>
          </div>
          <div className="rounded-lg border bg-card p-6 shadow-card">
            <div className="flex items-center gap-3">
              <div className="flex h-11 w-11 items-center justify-center rounded-md bg-primary-deep/10 text-primary-deep">
                <Phone className="h-5 w-5" />
              </div>
              <h2 className="font-semibold text-primary-deep">Phone</h2>
            </div>
            <a href="tel:+19177357990" className="mt-4 block text-sm font-medium text-foreground hover:text-primary-deep">
              +1 (917) 735-7990
            </a>
          </div>
          <div className="rounded-lg border bg-secondary/60 p-6 text-sm text-muted-foreground">
            For surplus equipment offers, please email photos, condition details and your asking price.
          </div>
        </aside>

        <div className="lg:col-span-3">
          <form
                action="https://formsubmit.co/Sales@Nexusequipment.us"
                  method="POST"
                  encType="multipart/form-data"
                  className="rounded-xl border bg-card p-8 shadow-elegant"
                >
                  <input type="hidden" name="_captcha" value="false" />
                  <input type="hidden" name="_template" value="table" />
                  <input type="hidden" name="_subject" value="New Nexus Equipment Inquiry" />

                  <h2 className="text-2xl font-bold text-primary-deep">
                    Send an inquiry
                  </h2>

                  <p className="mt-1 text-sm text-muted-foreground">
                    Fields marked * are required.
                  </p>

                  <div className="mt-8 grid gap-5 md:grid-cols-2">

                    <div>
                      <label className="text-sm font-medium text-foreground">
                        Full name *
                      </label>

                      <input
                        type="text"
                        name="name"
                        required
                        className="mt-2 w-full rounded-md border border-input bg-background px-4 py-3 text-sm outline-none transition focus:border-primary-deep focus:ring-2 focus:ring-primary-deep/20"
                      />
                    </div>

                    <div>
                      <label className="text-sm font-medium text-foreground">
                        Company *
                      </label>

                      <input
                        type="text"
                        name="company"
                        required
                        className="mt-2 w-full rounded-md border border-input bg-background px-4 py-3 text-sm outline-none transition focus:border-primary-deep focus:ring-2 focus:ring-primary-deep/20"
                      />
                    </div>

                    <div>
                      <label className="text-sm font-medium text-foreground">
                        Business email *
                      </label>

                      <input
                        type="email"
                        name="email"
                        required
                        className="mt-2 w-full rounded-md border border-input bg-background px-4 py-3 text-sm outline-none transition focus:border-primary-deep focus:ring-2 focus:ring-primary-deep/20"
                      />
                    </div>

                    <div>
                      <label className="text-sm font-medium text-foreground">
                        Phone
                      </label>
                
                      <input
                        type="text"
                        name="phone"
                        className="mt-2 w-full rounded-md border border-input bg-background px-4 py-3 text-sm outline-none transition focus:border-primary-deep focus:ring-2 focus:ring-primary-deep/20"
                      />
                    </div>

                    <div>
                      <label className="text-sm font-medium text-foreground">
                        Country
                      </label>

                      <input
                        type="text"
                        name="country"
                        className="mt-2 w-full rounded-md border border-input bg-background px-4 py-3 text-sm outline-none transition focus:border-primary-deep focus:ring-2 focus:ring-primary-deep/20"
                      />
                    </div>

                    <div>
                      <label className="text-sm font-medium text-foreground">
                        Industry
                      </label>

                      <input
                        type="text"
                        name="industry"
                        className="mt-2 w-full rounded-md border border-input bg-background px-4 py-3 text-sm outline-none transition focus:border-primary-deep focus:ring-2 focus:ring-primary-deep/20"
                      />
                    </div>
                
                  </div>

                  <div className="mt-5">
                    <label className="text-sm font-medium text-foreground">
                      Equipment details *
                    </label>

                    <textarea
                      name="message"
                      required
                      rows={5}
                      placeholder="Part numbers, specifications, quantities, target delivery date..."
                      className="mt-2 w-full rounded-md border border-input bg-background px-4 py-3 text-sm outline-none transition focus:border-primary-deep focus:ring-2 focus:ring-primary-deep/20"
                    />
                  </div>

                  <div className="mt-5">
                    <label className="text-sm font-medium text-foreground">
                      Upload files / photos
                    </label>

                    <input
                      type="file"
                      name="attachment"
                      multiple
                      className="mt-2 block w-full rounded-md border border-input bg-background px-4 py-3 text-sm"
                    />
                  </div>

                  <button
                    type="submit"
                    className="mt-8 inline-flex w-full items-center justify-center gap-2 rounded-md bg-primary-deep px-6 py-3 text-sm font-semibold text-primary-foreground shadow-sm transition hover:bg-primary md:w-auto"
                  >
                    Send Inquiry
                  </button>

                  <p className="mt-4 text-xs text-muted-foreground">
                    By submitting, you agree to be contacted by Nexus Equipment regarding your inquiry.
                  </p>
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
        className="mt-2 w-full rounded-md border border-input bg-background px-4 py-2.5 text-sm outline-none transition focus:border-primary-deep focus:ring-2 focus:ring-primary-deep/20"
      />
    </div>
  );
}
