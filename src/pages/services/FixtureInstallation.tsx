import { Wrench } from "lucide-react";
import { ServicePageLayout } from "./ServicePageLayout";

const relatedServices = [
  { name: "Drywall & Painting", path: "/services/drywall-painting" },
  { name: "Carpentry & Woodwork", path: "/services/carpentry-woodwork" },
  { name: "Plumbing Repairs & Fixtures", path: "/services/minor-plumbing" },
  { name: "Rental Make-Ready", path: "/services/rental-make-ready" },
];

const faqs = [
  {
    question: "What types of fixtures do you install in San Antonio homes?",
    answer: "We install ceiling fans, light fixtures, TV wall mounts, cabinet hardware, door handles, bathroom accessories, dimmer switches, and smart switches. If it needs to be mounted or connected, we can handle it.",
  },
  {
    question: "How much does ceiling fan installation cost in San Antonio TX?",
    answer: "Cost depends on whether an existing electrical box is present, whether it needs a fan-rated box upgrade, and ceiling height. We always provide a free estimate before any work begins. Call (210) 992-5170 for a specific quote.",
  },
  {
    question: "Can you install a TV mount on any wall type?",
    answer: "Yes — we install TV mounts on drywall (into studs), concrete, brick, and tile using proper anchors. We also manage cable routing for a clean finished look.",
  },
  {
    question: "Do you install smart home devices and switches?",
    answer: "We install smart switches, smart dimmers, and smart doorbells that replace standard fixtures — a great way to add home automation without a full electrical project.",
  },
  {
    question: "How quickly can you schedule fixture installation in San Antonio?",
    answer: "We're typically able to schedule within a few days. Call (210) 992-5170 to check availability and we'll get you on the calendar fast.",
  },
];

export function FixtureInstallation() {
  return (
    <ServicePageLayout
      title="Fixture Installation"
      city="San Antonio, TX"
      metaDescription="Professional fixture installation in San Antonio TX — ceiling fans, light fixtures, TV mounts, cabinet hardware, and more. Licensed & insured. Free estimate: (210) 992-5170."
      description="Expert installation of ceiling fans, light fixtures, TV mounts, cabinet hardware, and more for San Antonio homeowners. Fast scheduling, professional results, every time."
      heroImage="https://images.unsplash.com/photo-1540932239986-30128078f3c5?q=80&w=2670&auto=format&fit=crop"
      icon={<Wrench className="w-8 h-8 text-white" />}
      schemaServiceType="Fixture Installation"
      benefits={[
        "Ceiling fans, lighting & TV mounts done right",
        "Proper hardware for every wall type",
        "Clean work with no mess left behind",
        "Fast scheduling across San Antonio",
        "Licensed & insured — your home is protected",
      ]}
      relatedServices={relatedServices}
      faqs={faqs}
      content={
        <>
          <h2 className="text-3xl font-bold text-gray-900 mb-6">
            Fixture Installation Services in San Antonio, TX
          </h2>
          <p className="mb-6">
            Whether you've just moved into a new home, completed a remodel, or are simply upgrading fixtures, Joshua's
            Remodeling & Repairs provides professional installation services across San Antonio and Bexar County. We
            handle ceiling fans, light fixtures, TV mounts, cabinet hardware, bathroom accessories, door hardware, and
            smart switches — often completing multiple installs in a single visit.
          </p>

          <h3 className="text-2xl font-bold text-gray-900 mt-10 mb-4">What We Install</h3>
          <ul className="list-disc pl-6 space-y-2 mb-8">
            <li><strong>Ceiling Fans:</strong> New installations and replacements, including fan-rated box upgrades</li>
            <li><strong>Light Fixtures:</strong> Flush-mount, pendant, chandeliers, and recessed lighting</li>
            <li><strong>TV Wall Mounts:</strong> All wall types, cable management, tilt/swivel mounts</li>
            <li><strong>Cabinet Hardware:</strong> Knobs, pulls, soft-close hinges for kitchens and bathrooms</li>
            <li><strong>Door Hardware:</strong> Lever handles, deadbolts, smart locks, and door stops</li>
            <li><strong>Bathroom Accessories:</strong> Towel bars, toilet paper holders, shower rods, grab bars, mirrors</li>
            <li><strong>Smart Switches & Dimmers:</strong> Replace standard switches with smart home-compatible devices</li>
          </ul>

          <h3 className="text-2xl font-bold text-gray-900 mt-10 mb-4">Why Proper Installation Matters</h3>
          <p className="mb-6">
            Improperly installed ceiling fans wobble and create noise. TV mounts without proper stud or anchor
            support can fail. Cabinet hardware installed without alignment looks crooked and loosens over time.
            Our team uses professional tools and proven techniques to get it right the first time.
          </p>

          <h3 className="text-2xl font-bold text-gray-900 mt-10 mb-4">Serving All of San Antonio</h3>
          <p className="mb-6">
            We serve homeowners and property managers across San Antonio, Stone Oak, Alamo Heights, The Rim,
            Shavano Park, Boerne, Helotes, and Bexar County. One visit, multiple tasks handled — efficiently.
          </p>
          <p>
            Call <strong>(210) 992-5170</strong> or request a free estimate online. We show up on time, every time.
          </p>
        </>
      }
    />
  );
}
