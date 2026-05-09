import { Paintbrush } from "lucide-react";
import { ServicePageLayout } from "./ServicePageLayout";

const relatedServices = [
  { name: "Carpentry & Woodwork", path: "/services/carpentry-woodwork" },
  { name: "Fixture Installation", path: "/services/fixture-installation" },
  { name: "Rental Make-Ready", path: "/services/rental-make-ready" },
  { name: "Minor Plumbing", path: "/services/minor-plumbing" },
];

const faqs = [
  {
    question: "How much does drywall repair cost in San Antonio?",
    answer: "Drywall repair costs in San Antonio vary by damage size and location. Small nail holes or hairline cracks start at a minimal cost, while larger patches from water damage or impact can range more. We always provide a free, transparent estimate before any work begins. Call (210) 992-5170 for an accurate quote.",
  },
  {
    question: "Can you match existing wall texture and paint color?",
    answer: "Yes — texture matching is one of our specialties. Whether your walls have knockdown, orange peel, smooth, or custom texture, we take the time to blend the repaired area so it's virtually undetectable. For paint, we recommend letting us bring a small sample from your wall to the hardware store for an exact match.",
  },
  {
    question: "How long does drywall repair and painting take?",
    answer: "Most standard drywall repairs take 1–2 days, including drying time between coats of compound, sanding, priming, and painting. Larger jobs like full-room patches or water-damaged ceilings may take 2–3 days. We work efficiently and keep disruption to your home to a minimum.",
  },
  {
    question: "Do you repair water-damaged drywall in San Antonio?",
    answer: "Absolutely. Water damage is one of the most common drywall issues we handle across San Antonio and Bexar County. We assess the source of moisture, remove compromised material, dry the area, install new drywall, retexture, and repaint — leaving the wall looking like the damage never happened.",
  },
  {
    question: "Are you licensed and insured for drywall and painting work in Texas?",
    answer: "Yes. Joshua's Remodeling & Repairs is fully licensed and insured in Texas. We carry liability insurance on every job so your property and our team are always protected. We're proud to be a trustworthy, professional service provider in the San Antonio community.",
  },
];

export function DrywallPainting() {
  return (
    <ServicePageLayout
      title="Drywall Repair & Painting"
      city="San Antonio, TX"
      metaDescription="Professional drywall repair and painting services in San Antonio, TX. Expert patching of holes, water damage, cracks, and texture matching. Licensed & insured. Call (210) 992-5170 for a free estimate."
      description="Expert drywall patching, texture matching, and interior painting from San Antonio's trusted, licensed, and insured remodeling professionals at Joshua's Remodeling & Repairs."
      heroImage="https://images.unsplash.com/photo-1589939705384-5185137a7f0f?q=80&w=2670&auto=format&fit=crop"
      icon={<Paintbrush className="w-8 h-8 text-white" />}
      schemaServiceType="Drywall Repair and Painting"
      benefits={[
        "Seamless patching that blends perfectly with existing texture",
        "High-quality, durable paint finishes",
        "Clean, respectful workspace throughout the project",
        "Water damage and mold assessment included",
        "Exact texture and color matching guaranteed",
      ]}
      relatedServices={relatedServices}
      faqs={faqs}
      content={
        <>
          <h2 className="text-3xl font-bold text-gray-900 mb-6">
            Drywall Repair & Painting Services in San Antonio, TX
          </h2>
          <p className="mb-6">
            Whether you have minor dings, large holes, ceiling damage, or water-stained walls, Joshua's Remodeling &
            Repairs provides expert drywall repair and painting services across San Antonio, Alamo Heights, Stone Oak,
            Boerne, Helotes, and the surrounding Bexar County area. We understand that a perfect paint job starts with
            a perfect surface — which is why we invest time in proper prep, patching, and sanding before a single drop
            of paint is applied.
          </p>

          <h3 className="text-2xl font-bold text-gray-900 mt-10 mb-4">Common Drywall Problems We Fix</h3>
          <p className="mb-4">
            Drywall damage is one of the most common home repair issues in San Antonio, where humidity, foundation
            movement, and everyday wear all take a toll on interior walls. Our team handles:
          </p>
          <ul className="list-disc pl-6 space-y-2 mb-8">
            <li><strong>Nail pops and screw holes</strong> — quick fixes that dramatically improve how a room looks</li>
            <li><strong>Water damage and staining</strong> — we identify the moisture source, remove compromised material, and restore</li>
            <li><strong>Impact holes and large cracks</strong> — full patch, retexture, and repaint</li>
            <li><strong>Popcorn ceiling removal</strong> — a popular upgrade before selling or renting a home</li>
            <li><strong>Settlement cracks</strong> — common in San Antonio's clay soil, properly repaired so they don't return</li>
          </ul>

          <h3 className="text-2xl font-bold text-gray-900 mt-10 mb-4">Our Drywall Repair Process</h3>
          <p className="mb-4">
            We don't just cover up problems — we fix them at the source. Our multi-step approach ensures your walls
            look brand new and stay that way:
          </p>
          <ul className="list-disc pl-6 space-y-2 mb-8">
            <li>Damage assessment and removal of compromised materials</li>
            <li>Precise application of joint compound and tape</li>
            <li>Multiple coats with proper drying time between each</li>
            <li>Expert sanding for an undetectable blend</li>
            <li>Texture matching to existing wall finish</li>
            <li>Application of premium primer and paint for a lasting finish</li>
          </ul>

          <h3 className="text-2xl font-bold text-gray-900 mt-10 mb-4">Interior Painting Services in San Antonio</h3>
          <p className="mb-6">
            Beyond repairs, Joshua's Remodeling & Repairs offers full interior painting services for rooms, homes,
            and rental properties throughout San Antonio. Real customer Matt Wilkinson noted: <em>"He painted the
            entire interior of my house and replaced the carpets and linoleum with laminate flooring... He is very
            hard working and did a great job!"</em>
          </p>
          <p className="mb-6">
            We use professional-grade paints and tools to deliver smooth, even coverage that looks exceptional and
            stands up to everyday life. Our painting crew is respectful of your home, protects your floors and
            furniture, and cleans up completely when the job is done.
          </p>

          <h3 className="text-2xl font-bold text-gray-900 mt-10 mb-4">Serving All of San Antonio & Bexar County</h3>
          <p className="mb-6">
            We provide drywall repair and painting services across all of San Antonio's neighborhoods and suburbs,
            including Stone Oak, Alamo Heights, The Rim, Shavano Park, Boerne, Helotes, and all of Bexar County.
            Same prompt, professional service — wherever you are in the metro area.
          </p>
          <p>
            Ready to get started? Call us at <strong>(210) 992-5170</strong> or use the contact form to schedule
            your free, no-obligation estimate. We respond quickly and show up on time — every time.
          </p>
        </>
      }
    />
  );
}
