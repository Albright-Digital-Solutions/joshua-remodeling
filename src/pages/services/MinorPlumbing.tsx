import { Droplets } from "lucide-react";
import { ServicePageLayout } from "./ServicePageLayout";

const relatedServices = [
  { name: "Fixture Installation", path: "/services/fixture-installation" },
  { name: "Drywall & Painting", path: "/services/drywall-painting" },
  { name: "Rental Make-Ready", path: "/services/rental-make-ready" },
  { name: "Window & Door Repair", path: "/services/window-door-repair" },
];

const faqs = [
  {
    question: "What minor plumbing services do you offer in San Antonio?",
    answer: "We handle a wide range of minor plumbing tasks including faucet replacement, toilet repair (running, weak flush, leaks), under-sink leak fixes, P-trap replacement, drain clearing for sinks and tubs, shut-off valve replacement, and basic fixture installation. For major plumbing issues like sewer lines or water heaters, we'll connect you with a licensed plumber.",
  },
  {
    question: "How much does faucet replacement cost in San Antonio TX?",
    answer: "Faucet replacement typically takes 1–2 hours and the cost depends on the fixture type and accessibility. We provide transparent, upfront pricing with a free estimate before any work begins. Call (210) 992-5170 and we'll give you an accurate quote based on your specific situation.",
  },
  {
    question: "Can you fix a running toilet in San Antonio?",
    answer: "Yes — a running toilet is one of the most common calls we get. It's usually caused by a faulty flapper, fill valve, or float. We diagnose the issue quickly and replace the necessary parts. A running toilet can waste thousands of gallons of water per month, so we encourage you to get it fixed right away.",
  },
  {
    question: "Do you clear clogged drains?",
    answer: "We handle minor drain clogs in sinks and tubs — the type caused by hair, soap buildup, or debris. We use professional-grade tools to clear the blockage safely without damaging your pipes. For severe sewer-line clogs, we recommend a licensed plumber with hydro-jetting equipment.",
  },
  {
    question: "Are you available for plumbing repairs in Stone Oak and Alamo Heights?",
    answer: "Yes! Joshua's Remodeling & Repairs serves all of San Antonio including Stone Oak, Alamo Heights, Boerne, Helotes, Shavano Park, The Rim, and all of Bexar County. Call (210) 992-5170 and we'll schedule your appointment promptly.",
  },
];

export function MinorPlumbing() {
  return (
    <ServicePageLayout
      title="Minor Plumbing"
      city="San Antonio, TX"
      metaDescription="Minor plumbing repair services in San Antonio TX — faucet replacement, toilet repair, leak fixes, and drain clearing. Licensed & insured. Call Joshua's Remodeling at (210) 992-5170."
      description="Fast, reliable minor plumbing repairs for San Antonio homeowners and landlords. Faucet replacement, toilet repair, leak fixes, and drain clearing — handled by licensed, insured professionals."
      heroImage="https://images.unsplash.com/photo-1584622650111-993a426fbf0a?q=80&w=2670&auto=format&fit=crop"
      icon={<Droplets className="w-8 h-8 text-white" />}
      schemaServiceType="Minor Plumbing Repair"
      benefits={[
        "Quick resolution of leaks, clogs, and running toilets",
        "Faucet & fixture upgrades to modernize your space",
        "Transparent upfront pricing — no surprises",
        "Respectful of your home and property",
        "Serving all of San Antonio & Bexar County",
      ]}
      relatedServices={relatedServices}
      faqs={faqs}
      content={
        <>
          <h2 className="text-3xl font-bold text-gray-900 mb-6">
            Minor Plumbing Repair Services in San Antonio, TX
          </h2>
          <p className="mb-6">
            Plumbing problems don't wait for a convenient time. A dripping faucet, running toilet, or slow drain can
            waste hundreds of gallons of water and cost you significantly on your monthly bill. Joshua's Remodeling &
            Repairs provides fast, professional minor plumbing repair services for homeowners and property managers
            throughout San Antonio, Texas and the greater Bexar County area.
          </p>
          <p className="mb-6">
            Our team is experienced, reliable, and shows up on time — exactly what Andrew Tipton experienced:
            <em>"Joshua was able to see us on quick notice and diagnosed an issue within 2 minutes that a large
            plumbing company 'missed' and saved us thousands of dollars in unnecessary repairs. Trustworthy and
            worth every penny!"</em>
          </p>

          <h3 className="text-2xl font-bold text-gray-900 mt-10 mb-4">Plumbing Services We Handle in San Antonio</h3>
          <ul className="list-disc pl-6 space-y-2 mb-8">
            <li><strong>Faucet Replacement:</strong> Kitchen, bathroom, and utility faucets — any brand, any style</li>
            <li><strong>Toilet Repair:</strong> Running toilets, weak flushing, phantom flushing, base leaks</li>
            <li><strong>Under-Sink Leaks:</strong> Supply line tightening, P-trap replacement, drain basket sealing</li>
            <li><strong>Drain Clearing:</strong> Minor clogs in bathroom sinks, kitchen sinks, and tubs</li>
            <li><strong>Shut-Off Valve Replacement:</strong> Old, corroded, or stuck valves that no longer seal</li>
            <li><strong>Fixture Installation:</strong> New sinks, faucets, and accessories as part of a bathroom or kitchen update</li>
          </ul>

          <h3 className="text-2xl font-bold text-gray-900 mt-10 mb-4">Why Act Fast on Plumbing Issues</h3>
          <p className="mb-4">
            In San Antonio's climate, even minor plumbing leaks can create significant secondary problems. Moisture
            under sinks and behind walls leads to mold growth, wood rot, and drywall damage — turning a $100 repair
            into a $1,000+ remediation project. Patricia Cortinas knows the value of prompt service: <em>"Joshua
            came right on time and fixed my leaking toilet — was in and out, was pretty fast, did awesome job."</em>
          </p>
          <p className="mb-6">
            Don't let a small plumbing issue snowball. Call us at <strong>(210) 992-5170</strong> and we'll schedule
            your repair promptly, often within the same week.
          </p>

          <h3 className="text-2xl font-bold text-gray-900 mt-10 mb-4">Service Areas Across San Antonio</h3>
          <p className="mb-6">
            We provide minor plumbing services throughout San Antonio and Bexar County including Stone Oak, Alamo
            Heights, Boerne, Helotes, Shavano Park, The Rim, and surrounding communities. Whether you're a homeowner
            needing a quick faucet fix or a property manager preparing a rental unit between tenants, we're the
            reliable local team you can count on.
          </p>
          <p>
            Contact us for a free estimate today. We're a local, family-owned business that treats your home with
            the same care we'd give our own.
          </p>
        </>
      }
    />
  );
}
