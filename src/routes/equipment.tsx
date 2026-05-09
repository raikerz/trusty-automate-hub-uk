import { createFileRoute, Link } from "@tanstack/react-router";
import { SiteHeader } from "@/components/SiteHeader";
import { SiteFooter } from "@/components/SiteFooter";
import { ArrowRight, CheckCircle2, Plane, Factory, Cpu } from "lucide-react";
import aircraft from "@/assets/equipment-aircraft.jpg";
import plc from "@/assets/equipment-plc.jpg";
import robot from "@/assets/equipment-robot.jpg";
import servo from "@/assets/equipment-servo.jpg";
import hmi from "@/assets/equipment-hmi.jpg";

export const Route = createFileRoute("/equipment")({
  head: () => ({
    meta: [
      { title: "Aircraft Parts, Industrial & Automation Equipment | AXION" },
      { name: "description", content: "Browse aircraft parts, industrial machinery and automation systems. Certified, traceable hardware for B2B buyers." },
      { property: "og:title", content: "Equipment Catalog — AXION" },
      { property: "og:description", content: "Aircraft parts, industrial equipment and automation systems for sale." },
    ],
  }),
  component: EquipmentPage,
});

const categories = [
  {
    icon: Plane,
    title: "Aircraft Parts",
    items: [
      {
        img: aircraft,
        name: "Engine & Rotable Components",
        code: "Aviation · 8130-3 / EASA Form 1",
        desc: "Turbine sections, APUs, landing gear actuators, avionics LRUs and consumables for commercial and general aviation. Sourced from approved channels with full traceability.",
        specs: ["8130-3 / EASA Form 1 tags", "Serialized & ATA-100 documented", "Tear-down reports available", "AOG response sourcing"],
      },
    ],
  },
  {
    icon: Factory,
    title: "Industrial Equipment",
    items: [
      {
        img: servo,
        name: "Motors, Drives & Power",
        code: "Industrial · Refurbished & Surplus",
        desc: "AC/DC motors, gearboxes, VFDs, transformers and process equipment. Inspected, tested and supplied with certificate of conformity.",
        specs: ["0.05 – 250 kW range", "Bench-tested before shipment", "Surplus & refurbished options", "Certificate of Conformity"],
      },
      {
        img: robot,
        name: "Machinery & Robotics",
        code: "Industrial · Heavy Equipment",
        desc: "CNC machines, industrial robots, conveyors and material-handling systems. Buy-back program for surplus production equipment.",
        specs: ["6-axis robotic arms", "CNC mills, lathes & presses", "Decommissioning support", "Logistics & rigging included"],
      },
    ],
  },
  {
    icon: Cpu,
    title: "Automation Systems",
    items: [
      {
        img: plc,
        name: "PLCs & Control Systems",
        code: "Automation · OEM Hardware",
        desc: "Programmable logic controllers, safety relays and remote I/O from leading OEMs. Tested, configured and stocked for immediate dispatch.",
        specs: ["Multi-OEM compatible", "Hot-swap I/O modules", "EtherCAT / Profinet ready", "Bench-validated firmware"],
      },
      {
        img: hmi,
        name: "HMIs & Industrial IoT",
        code: "Automation · Operator Interface",
        desc: "Touch panels, industrial PCs and gateways for SCADA and IIoT deployments. Multi-protocol support out of the box.",
        specs: ["7\" – 22\" displays", "IP66 front panel", "OPC UA / MQTT native", "−20°C to +60°C operation"],
      },
    ],
  },
];

function EquipmentPage() {
  return (
    <div className="min-h-screen bg-background">
      <SiteHeader />

      <section className="border-b bg-gradient-to-b from-secondary to-background">
        <div className="container mx-auto px-6 py-20 md:py-24">
          <div className="max-w-3xl">
            <div className="text-xs font-semibold uppercase tracking-[0.2em] text-primary">Equipment We Buy & Sell</div>
            <h1 className="mt-3 text-4xl font-bold text-primary-deep md:text-5xl">Aircraft Parts, Industrial & Automation Equipment.</h1>
            <p className="mt-5 text-lg text-muted-foreground">
              Three portfolios, one trusted source. Every item is documented, inspected and supported by our trading desk.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              {categories.map((c) => (
                <a key={c.title} href={`#${c.title.replace(/\s+/g, "-").toLowerCase()}`} className="inline-flex items-center gap-2 rounded-full border bg-card px-4 py-2 text-sm font-medium text-primary-deep shadow-sm transition hover:border-primary hover:text-primary">
                  <c.icon className="h-4 w-4" /> {c.title}
                </a>
              ))}
            </div>
          </div>
        </div>
      </section>

      {categories.map((cat) => (
        <section key={cat.title} id={cat.title.replace(/\s+/g, "-").toLowerCase()} className="container mx-auto px-6 py-16 md:py-20">
          <div className="mb-10 flex items-center gap-4">
            <div className="flex h-12 w-12 items-center justify-center rounded-md bg-primary/10 text-primary">
              <cat.icon className="h-6 w-6" />
            </div>
            <h2 className="text-2xl font-bold text-primary-deep md:text-3xl">{cat.title}</h2>
          </div>

          <div className="space-y-12">
            {cat.items.map((p, i) => (
              <article key={p.name} className="grid gap-10 rounded-xl border bg-card p-6 shadow-card md:grid-cols-2 md:p-10 md:gap-14">
                <div className={`overflow-hidden rounded-lg bg-secondary ${i % 2 === 1 ? "md:order-2" : ""}`}>
                  <img src={p.img} alt={p.name} loading="lazy" width={800} height={800} className="h-full w-full object-cover" />
                </div>
                <div className="flex flex-col justify-center">
                  <div className="text-xs font-semibold uppercase tracking-[0.18em] text-primary">{p.code}</div>
                  <h3 className="mt-2 text-2xl font-bold text-primary-deep md:text-3xl">{p.name}</h3>
                  <p className="mt-4 text-muted-foreground">{p.desc}</p>
                  <ul className="mt-6 grid gap-3 sm:grid-cols-2">
                    {p.specs.map((s) => (
                      <li key={s} className="flex items-start gap-2 text-sm text-foreground">
                        <CheckCircle2 className="mt-0.5 h-4 w-4 flex-shrink-0 text-primary" />
                        <span>{s}</span>
                      </li>
                    ))}
                  </ul>
                  <div className="mt-8 flex flex-wrap gap-3">
                    <Link to="/contact" className="inline-flex items-center gap-2 rounded-md bg-primary px-5 py-2.5 text-sm font-semibold text-primary-foreground transition hover:bg-primary-deep">
                      Request quote <ArrowRight className="h-4 w-4" />
                    </Link>
                    <Link to="/contact" className="inline-flex items-center gap-2 rounded-md border border-input bg-background px-5 py-2.5 text-sm font-semibold text-primary-deep transition hover:border-primary hover:text-primary">
                      Sell to us
                    </Link>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </section>
      ))}

      <SiteFooter />
    </div>
  );
}
