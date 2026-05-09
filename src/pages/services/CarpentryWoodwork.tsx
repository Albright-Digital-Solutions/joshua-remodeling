import { Hammer } from "lucide-react";
import { ServicePageLayout } from "./ServicePageLayout";

const relatedServices = [
  { name: "Drywall & Painting", path: "/services/drywall-painting" },
  { name: "Window & Door Repair", path: "/services/window-door-repair" },
  { name: "Rental Make-Ready", path: "/services/rental-make-ready" },
  { name: "Fixture Installation", path: "/services/fixture-installation" },
];

const faqs = [
  {
    question: "What carpentry and woodwork services do you offer in San Antonio?",
    answer: "We offer fence repair and replacement, deck building and repair, trim and baseboard installation, custom shelving, door hanging, wood rot repair, and minor framing work. Whether it's a rotting porch post or a new backyard deck, we handle residential carpentry throughout San Antonio and Bexar County.",
  },
  {
    question: "Can you build or repair a deck in San Antonio TX?",
    answer: "Yes — deck building and repair is one of our most popular services in San Antonio. We've built ground-level decks, replaced rotting boards, repaired fascia and rafters, and refinished existing decks. Real customer Rob Saathoff shared: 'Josh replaced rotting fascia boards and rafters on my porch then painted it all. It looks better than new.'",
  },
  {
    question: "Do you repair or replace wood fences in San Antonio?",
    answer: "We repair damaged fence sections, replace rotted posts, rehang sagging gates, and install new fence sections as needed. San Antonio's weather is tough on wood fences, and we use pressure-treated lumber and proper post-setting techniques to ensure your fence lasts.",
  },
  {
    question: "Can you install custom shelving or built-ins?",
    answer: "Yes — we build and install custom shelving for closets, garages, living rooms, and offices. We work with standard lumber, plywood, and MDF to create functional shelving that fits your space and budget.",
  },
  {
    question: "Do you repair wood rot on porches and exterior trim?",
    answer: "Wood rot repair is a common service in San Antonio's humid climate. We remove compromised wood, treat the area, install new lumber, and paint or seal the surface for lasting protection. It's far less expensive to repair early than to replace entire structural elements later.",
  },
];

export function CarpentryWoodwork() {
  return (
    <ServicePageLayout
      title="Carpentry & Woodwork"
      city="San Antonio, TX"
      metaDescription="Carpentry and woodwork services in San Antonio TX — fence repair, deck building, trim installation, custom shelving, and wood rot repair. Licensed & insured. Call (210) 992-5170."
      description="From fence and deck repair to custom shelving and trim installation, Joshua's Remodeling & Repairs delivers quality carpentry and woodwork throughout San Antonio and Bexar County."
      heroImage="https://images.unsplash.com/photo-1533036667954-469b6db9de5d?q=80&w=2670&auto=format&fit=crop"
      icon={<Hammer className="w-8 h-8 text-white" />}
      schemaServiceType="Carpentry and Woodwork"
      benefits={[
        "Deck building, repair & refinishing",
        "Fence repair using pressure-treated lumber",
        "Custom shelving built to fit your space",
        "Wood rot repair before it spreads",
        "Trim, baseboard & door installation",
      ]}
      relatedServices={relatedServices}
      faqs={faqs}
      content={
        <>
          <h2 className="text-3xl font-bold text-gray-900 mb-6">
            Carpentry & Woodwork Services in San Antonio, TX
          </h2>
          <p className="mb-6">
            Joshua's Remodeling & Repairs provides skilled carpentry and woodwork services throughout San Antonio,
            TX and Bexar County. Whether you need a rotting fence post replaced, a new backyard deck built, custom
            shelving installed in a closet, or interior trim refreshed, our team delivers quality craftsmanship that
            lasts.
          </p>
          <p className="mb-6">
            San Antonio's climate — hot summers, humidity, and occasional freezes — is tough on wood. We use
            quality materials and proper construction techniques so your repairs and builds hold up year after year.
          </p>

          <h3 className="text-2xl font-bold text-gray-900 mt-10 mb-4">Carpentry Services We Offer</h3>
          <ul className="list-disc pl-6 space-y-2 mb-8">
            <li><strong>Deck Building & Repair:</strong> New ground-level decks, board replacement, railing repair, fascia and rafter work</li>
            <li><strong>Fence Repair & Replacement:</strong> Rotted posts, broken pickets, sagging gates, full section replacement</li>
            <li><strong>Trim & Baseboard Installation:</strong> Interior door casing, crown molding, baseboard, and window trim</li>
            <li><strong>Custom Shelving:</strong> Closet systems, garage shelving, built-in bookcases, pantry organization</li>
            <li><strong>Door Hanging & Repair:</strong> Interior and exterior door installation, adjustment of sticking or misaligned doors</li>
            <li><strong>Wood Rot Repair:</strong> Porch posts, exterior trim, window sills, and siding</li>
          </ul>

          <h3 className="text-2xl font-bold text-gray-900 mt-10 mb-4">Real Results from San Antonio Homeowners</h3>
          <p className="mb-6">
            Our carpentry work speaks for itself. Rob Saathoff shared: <em>"Josh replaced rotting fascia boards and
            rafters on my porch then painted it all. It looks better than new. He showed up when he said he would.
            He did what he said he would do. I was impressed with his competency. Highly recommend."</em>
          </p>
          <p className="mb-6">
            And Matt Wilkinson noted: <em>"He also built a deck for me to replace my old patio. He is very hard
            working and did a great job! He's a talented handyman and I highly recommend him to others."</em>
          </p>

          <h3 className="text-2xl font-bold text-gray-900 mt-10 mb-4">Serving San Antonio & All of Bexar County</h3>
          <p className="mb-6">
            We provide carpentry services across San Antonio, including Stone Oak, Alamo Heights, Boerne, Helotes,
            The Rim, and Shavano Park. For a free estimate on your carpentry project, call <strong>(210) 992-5170</strong>
            or send us a message online. We respond quickly and show up ready to work.
          </p>
        </>
      }
    />
  );
}
