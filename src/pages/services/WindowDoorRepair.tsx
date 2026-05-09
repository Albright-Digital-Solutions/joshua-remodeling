import { Frame } from "lucide-react";
import { ServicePageLayout } from "./ServicePageLayout";

const relatedServices = [
  { name: "Drywall & Painting", path: "/services/drywall-painting" },
  { name: "Carpentry & Woodwork", path: "/services/carpentry-woodwork" },
  { name: "Fixture Installation", path: "/services/fixture-installation" },
  { name: "Rental Make-Ready", path: "/services/rental-make-ready" },
];

const faqs = [
  {
    question: "What window and door repair services do you offer in San Antonio?",
    answer: "We repair and replace broken window panes, fix foggy double-pane windows (seal failure), repair screen frames and mesh, adjust sticking or misaligned doors, replace door weatherstripping and thresholds, fix door hinges and strikes, and install new exterior and interior doors. We serve San Antonio and all of Bexar County.",
  },
  {
    question: "How much does window repair cost in San Antonio TX?",
    answer: "Window repair costs vary based on pane size, frame type, and damage type. A simple screen repair or sash cord fix is far less expensive than a full window replacement. We provide transparent free estimates before any work begins. Call (210) 992-5170 for a quote.",
  },
  {
    question: "Can you fix a door that won't close properly in San Antonio?",
    answer: "Yes — sticking or misaligned doors are one of our most common service calls in San Antonio. In our climate, wood doors swell with humidity and frame shifts from foundation movement cause misalignment. We plane, adjust, and re-hang doors so they open, close, and latch correctly.",
  },
  {
    question: "Do you replace broken window panes?",
    answer: "Yes — we replace single pane glass and the sash units of double-pane insulated glass windows. Broken or foggy windows are both a security and energy-efficiency issue. We source replacement glass or sash units and complete the repair cleanly.",
  },
  {
    question: "Can you improve the energy efficiency of my windows and doors in San Antonio?",
    answer: "Yes — we install new weatherstripping, door sweeps, and thresholds to eliminate drafts and reduce your AC bills. San Antonio summers make energy efficiency especially important, and improving the seal on windows and doors is one of the most cost-effective upgrades you can make.",
  },
];

export function WindowDoorRepair() {
  return (
    <ServicePageLayout
      title="Window & Door Repair"
      city="San Antonio, TX"
      metaDescription="Window and door repair services in San Antonio TX — broken panes, sticking doors, screen repair, weatherstripping, and door installation. Licensed & insured. Call (210) 992-5170."
      description="Professional window and door repair services for San Antonio homeowners. Broken panes, sticking doors, screen replacement, weatherstripping, and full door installation."
      heroImage="/window-door-installation.jpg"
      icon={<Frame className="w-8 h-8 text-white" />}
      schemaServiceType="Window and Door Repair"
      benefits={[
        "Broken pane replacement — all window types",
        "Sticking door adjustment and re-hanging",
        "Weatherstripping to cut energy costs",
        "Screen repair and full frame replacement",
        "Security improvements with new hardware",
      ]}
      relatedServices={relatedServices}
      faqs={faqs}
      content={
        <>
          <h2 className="text-3xl font-bold text-gray-900 mb-6">
            Window & Door Repair Services in San Antonio, TX
          </h2>
          <p className="mb-6">
            Broken windows, sticking doors, and damaged screens aren't just inconvenient — they're a security risk
            and an energy-efficiency problem. Joshua's Remodeling & Repairs provides professional window and door
            repair and replacement services throughout San Antonio, TX and Bexar County, helping homeowners maintain
            safe, comfortable, and energy-efficient properties.
          </p>

          <h3 className="text-2xl font-bold text-gray-900 mt-10 mb-4">Window Repair Services in San Antonio</h3>
          <ul className="list-disc pl-6 space-y-2 mb-8">
            <li><strong>Broken Pane Replacement:</strong> Single-pane and double-pane insulated glass replacement</li>
            <li><strong>Foggy Window Repair:</strong> Seal failure causes interior fogging — we replace the affected sash unit</li>
            <li><strong>Screen Repair & Replacement:</strong> Frame straightening, mesh replacement, or full new screen installation</li>
            <li><strong>Window Hardware:</strong> Locks, latches, cranks, and balance replacement for proper operation</li>
            <li><strong>Weatherstripping:</strong> Stop air and water infiltration around window frames</li>
          </ul>

          <h3 className="text-2xl font-bold text-gray-900 mt-10 mb-4">Door Repair & Installation in San Antonio</h3>
          <ul className="list-disc pl-6 space-y-2 mb-8">
            <li><strong>Sticking Door Adjustment:</strong> Planning, shimming, and re-hanging doors that swell or shift</li>
            <li><strong>Door Hardware Replacement:</strong> Handles, deadbolts, hinges, and strike plates</li>
            <li><strong>Weatherstripping & Threshold:</strong> Eliminate drafts and insect entry points</li>
            <li><strong>Exterior Door Installation:</strong> New front, back, and side doors properly hung and sealed</li>
            <li><strong>Interior Door Hanging:</strong> New construction and replacement in existing frames</li>
          </ul>

          <h3 className="text-2xl font-bold text-gray-900 mt-10 mb-4">Common Causes of Door & Window Problems in San Antonio</h3>
          <p className="mb-6">
            San Antonio's climate creates unique challenges. The clay soil causes foundation movement that
            shifts door frames out of square. High summer heat expands wood doors and window frames. Humidity
            causes swelling. Our team understands these local conditions and addresses the root cause — not
            just the symptom.
          </p>

          <h3 className="text-2xl font-bold text-gray-900 mt-10 mb-4">Service Areas</h3>
          <p className="mb-6">
            We provide window and door repair services throughout San Antonio, Stone Oak, Alamo Heights, Boerne,
            Helotes, Shavano Park, The Rim, and all of Bexar County. Call <strong>(210) 992-5170</strong> for a
            free estimate — we respond quickly and work efficiently to restore your home's security and comfort.
          </p>
        </>
      }
    />
  );
}
