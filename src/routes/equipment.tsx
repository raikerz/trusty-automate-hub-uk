import { createFileRoute, Link } from "@tanstack/react-router";
import { SiteHeader } from "@/components/SiteHeader";
import { SiteFooter } from "@/components/SiteFooter";
import { ArrowRight, CheckCircle2 } from "lucide-react";
import plc from "@/assets/equipment-plc.jpg";
import robot from "@/assets/equipment-robot.jpg";
import servo from "@/assets/equipment-servo.jpg";
import hmi from "@/assets/equipment-hmi.jpg";

export const Route = createFileRoute("/equipment")({
  head: () => ({
    meta: [
      { title: "Industrial Automation Equipment | AXION" },
      { name: "description", content: "Browse our catalog of PLCs, robotic arms, servo drives and HMI panels for industrial B2B automation." },
      { property: "og:title", content: "Equipment Catalog — AXION Industrial" },
      { property: "og:description", content: "PLCs, robotics, servo drives and HMI panels for industrial automation." },
    ],
  }),
  component: EquipmentPage,
});

const products = [
  {
    img: plc,
    name: "Industrial PLCs",
    code: "Series AX-7000",
    desc: "Modular programmable logic controllers for high-availability process control. Hot-swap I/O, redundant CPU options, and EtherCAT/Profinet support.",
    specs: ["32–4096 I/O channels", "−25°C to +70°C operation", "IEC 61131-3 programming", "MTBF > 200,000 hrs"],
  },
  {
    img: robot,
    name: "6-Axis Robotic Arms",
    code: "Series AX-R Robotics",
    desc: "Industrial robotic manipulators for assembly, pick-and-place, welding and palletizing. Payloads from 5 to 210 kg with sub-millimeter repeatability.",
    specs: ["Payload 5–210 kg", "Reach up to 3,200 mm", "Repeatability ±0.03 mm", "IP67 wrist protection"],
  },
  {
    img: servo,
    name: "Servo Drives & Motors",
    code: "Series AX-SV Drive",
    desc: "High-dynamic AC servo systems for precision motion control. Integrated safety functions and full feedback loop tuning.",
    specs: ["0.05 – 55 kW range", "STO / SS1 safety integrated", "Multi-axis synchronization", "EtherCAT / CANopen"],
  },
  {
    img: hmi,
    name: "HMI Touch Panels",
    code: "Series AX-HMI",
    desc: "Ruggedized touch interface panels engineered for harsh production environments. Multi-protocol gateway built in.",
    specs: ["7\" – 22\" displays", "IP66 front panel", "−20°C to +60°C", "OPC UA / MQTT native"],
  },
];

function EquipmentPage() {
  return (
    <div className="min-h-screen bg-background">
      <SiteHeader />

      <section className="border-b bg-gradient-to-b from-secondary to-background">
        <div className="container mx-auto px-6 py-20 md:py-24">
          <div className="max-w-3xl">
            <div className="text-xs font-semibold uppercase tracking-[0.2em] text-primary">Equipment Catalog</div>
            <h1 className="mt-3 text-4xl font-bold text-primary-deep md:text-5xl">Sell-Sheet Quality. Plant-Floor Reliability.</h1>
            <p className="mt-5 text-lg text-muted-foreground">
              Every product in our catalog is selected for industrial duty: certified, documented, stocked, and supported by our engineering team.
            </p>
          </div>
        </div>
      </section>

      <section className="container mx-auto px-6 py-20">
        <div className="space-y-16">
          {products.map((p, i) => (
            <article key={p.name} className="grid gap-10 rounded-xl border bg-card p-6 shadow-card md:grid-cols-2 md:p-10 md:gap-14">
              <div className={`overflow-hidden rounded-lg bg-secondary ${i % 2 === 1 ? "md:order-2" : ""}`}>
                <img src={p.img} alt={p.name} loading="lazy" width={800} height={800} className="h-full w-full object-cover" />
              </div>
              <div className="flex flex-col justify-center">
                <div className="text-xs font-semibold uppercase tracking-[0.18em] text-primary">{p.code}</div>
                <h2 className="mt-2 text-2xl font-bold text-primary-deep md:text-3xl">{p.name}</h2>
                <p className="mt-4 text-muted-foreground">{p.desc}</p>
                <ul className="mt-6 grid gap-3 sm:grid-cols-2">
                  {p.specs.map((s) => (
                    <li key={s} className="flex items-start gap-2 text-sm text-foreground">
                      <CheckCircle2 className="mt-0.5 h-4 w-4 flex-shrink-0 text-primary" />
                      <span>{s}</span>
                    </li>
                  ))}
                </ul>
                <div className="mt-8">
                  <Link to="/contact" className="inline-flex items-center gap-2 rounded-md bg-primary px-5 py-2.5 text-sm font-semibold text-primary-foreground transition hover:bg-primary-deep">
                    Request datasheet & quote <ArrowRight className="h-4 w-4" />
                  </Link>
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>

      <SiteFooter />
    </div>
  );
}
