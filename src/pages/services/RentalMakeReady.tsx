import { Home } from "lucide-react";
import { ServicePageLayout } from "./ServicePageLayout";

export function RentalMakeReady() {
  return (
    <ServicePageLayout
      title="Rental Make-Ready"
      description="Comprehensive and efficient maintenance services to turn over your rental properties quickly and attract quality tenants."
      heroImage="https://images.unsplash.com/photo-1628192203649-65cf8fa32bda?q=80&w=2670&auto=format&fit=crop"
      icon={<Home className="w-8 h-8 text-white" />}
      benefits={[
        "Fast turnaround times to minimize vacancy",
        "Comprehensive punch-list completion",
        "Reliable partner for property managers and landlords",
        "Cost-effective repairs that don't cut corners"
      ]}
      content={
        <>
          <h2 className="text-3xl font-bold text-gray-900 mb-6 font-display">Minimize Vacancy. Maximize Value.</h2>
          <p className="mb-6">
            For property managers and landlords in San Antonio, turnaround time between tenants is critical. Every day an apartment or house sits empty is lost revenue. Our Rental Make-Ready service acts as your one-stop solution to getting a property back on the market.
          </p>
          <h3 className="text-2xl font-bold text-gray-900 mt-10 mb-4 font-display">The Make-Ready Checklist:</h3>
          <p className="mb-4">
            Instead of hiring a separate painter, plumber, and carpenter, we handle the entire punch list:
          </p>
          <ul className="list-disc pl-6 space-y-2 mb-8">
            <li><strong>Wall Repair & Paint:</strong> Fixing holes from previous tenants and providing a fresh coat of neutral paint.</li>
            <li><strong>Hardware Refresh:</strong> Replacing old blinds, broken door knobs, and swapping out outdated fixtures.</li>
            <li><strong>Basic Plumbing & Maintenance:</strong> Fixing running toilets, dripping faucets, and checking smoke detectors.</li>
            <li><strong>Safety Checks:</strong> Ensuring doors and windows lock securely.</li>
          </ul>
          <p>
            We understand the rental market and focus on durable, cost-effective solutions that withstand tenant turnover.
          </p>
        </>
      }
    />
  );
}
