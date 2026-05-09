import { Home } from "lucide-react";
import { ServicePageLayout } from "./ServicePageLayout";

const relatedServices = [
  { name: "Drywall & Painting", path: "/services/drywall-painting" },
  { name: "Plumbing Repairs & Fixtures", path: "/services/minor-plumbing" },
  { name: "Fixture Installation", path: "/services/fixture-installation" },
  { name: "Carpentry & Woodwork", path: "/services/carpentry-woodwork" },
];

const faqs = [
  {
    question: "What is included in a rental make-ready service in San Antonio?",
    answer: "Our rental make-ready service covers the full punch list: drywall repair and painting, fixture replacement, hardware refresh, minor plumbing fixes (running toilets, dripping faucets), door and lock checks, blind replacement, cleaning prep, and safety checks. We handle everything in one visit so your unit is market-ready faster.",
  },
  {
    question: "How quickly can you turn over a rental property in San Antonio?",
    answer: "Most standard rental make-readys are completed in 1–3 days depending on the size of the unit and scope of work. We prioritize turnaround speed because we understand every vacant day is lost rental income. Call (210) 992-5170 to schedule and we'll give you a realistic timeline upfront.",
  },
  {
    question: "Do you work with property management companies in Bexar County?",
    answer: "Yes — we work with individual landlords and property management companies across San Antonio and Bexar County. We can coordinate directly with property managers, work around tenant move-out schedules, and accommodate multiple units at the same complex.",
  },
  {
    question: "Can you handle the full make-ready without multiple contractors?",
    answer: "That's exactly the point of our service. Instead of coordinating a separate painter, plumber, and carpenter, you make one call to Joshua's Remodeling & Repairs and we handle the full punch list. This saves time, reduces scheduling headaches, and keeps costs predictable.",
  },
  {
    question: "Do you do make-readys for single-family homes and apartments in San Antonio?",
    answer: "Yes — we handle make-readys for single-family homes, duplexes, condos, and apartment units throughout San Antonio. Whether it's a 500 sq ft studio or a 2,500 sq ft house, we bring the same thorough, efficient approach to every property.",
  },
];

export function RentalMakeReady() {
  return (
    <ServicePageLayout
      title="Rental Make-Ready & Maintenance"
      city="San Antonio, TX"
      metaDescription="Rental make-ready services in San Antonio TX for landlords and property managers. Fast turnaround, full punch-list completion. One call handles it all. (210) 992-5170."
      description="San Antonio's go-to rental make-ready service for landlords and property managers. Minimize vacancy with fast, comprehensive unit turnovers across Bexar County."
      heroImage="/rental-floor-replacement.jpg"
      icon={<Home className="w-8 h-8 text-white" />}
      schemaServiceType="Rental Property Make-Ready and Maintenance"
      benefits={[
        "Fast turnaround to minimize vacancy days",
        "Full punch-list completion in one visit",
        "One call replaces multiple contractors",
        "Trusted by San Antonio landlords & property managers",
        "Cost-effective repairs that hold up long-term",
      ]}
      relatedServices={relatedServices}
      faqs={faqs}
      content={
        <>
          <h2 className="text-3xl font-bold text-gray-900 mb-6">
            Rental Make-Ready Services in San Antonio, TX
          </h2>
          <p className="mb-6">
            For landlords and property managers in San Antonio, every vacant day is lost revenue. Joshua's Remodeling
            & Repairs is your single-source solution for rental make-ready and unit turnover services across San
            Antonio and Bexar County. We complete the full punch list — painting, repairs, plumbing, hardware — so
            your property is clean, safe, and market-ready as fast as possible.
          </p>

          <h3 className="text-2xl font-bold text-gray-900 mt-10 mb-4">The Complete Make-Ready Checklist</h3>
          <p className="mb-4">
            Instead of coordinating a separate painter, plumber, and carpenter, one call to Joshua's gets it all done:
          </p>
          <ul className="list-disc pl-6 space-y-2 mb-8">
            <li><strong>Drywall Repair & Paint:</strong> Patch holes from previous tenants, fresh neutral paint throughout</li>
            <li><strong>Hardware Refresh:</strong> Replace worn blinds, broken door knobs, outdated light fixtures</li>
            <li><strong>Plumbing Fixes:</strong> Running toilets, dripping faucets, slow drains — all addressed</li>
            <li><strong>Carpentry:</strong> Door adjustments, cabinet repairs, baseboard touch-ups</li>
            <li><strong>Safety Checks:</strong> Door locks, window latches, smoke detector batteries</li>
            <li><strong>Cleaning Prep:</strong> We leave the unit in condition for your cleaning crew to finish</li>
          </ul>

          <h3 className="text-2xl font-bold text-gray-900 mt-10 mb-4">Why San Antonio Landlords Choose Joshua's</h3>
          <p className="mb-6">
            Real customer review from a property manager: <em>"We use them for all our rental property make-readys.
            Reliable, thorough, and reasonably priced. A lifesaver for property managers in Bexar County."</em>
          </p>
          <p className="mb-6">
            We understand the rental market. Our work is priced to be cost-effective while still durable enough to
            withstand tenant turnover. We use neutral paint colors, contractor-grade hardware, and practical
            solutions that protect your investment without over-spending.
          </p>

          <h3 className="text-2xl font-bold text-gray-900 mt-10 mb-4">Service Areas for Rental Make-Ready</h3>
          <p className="mb-6">
            We provide rental make-ready services for single-family homes, duplexes, condos, and apartment units
            throughout San Antonio including Stone Oak, Alamo Heights, The Rim, Helotes, Boerne, Shavano Park,
            and all of Bexar County. Call <strong>(210) 992-5170</strong> to schedule a walkthrough and get an
            upfront estimate — we move fast so you can list faster.
          </p>
        </>
      }
    />
  );
}
