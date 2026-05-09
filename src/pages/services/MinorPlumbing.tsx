import { Droplets } from "lucide-react";
import { ServicePageLayout } from "./ServicePageLayout";

export function MinorPlumbing() {
  return (
    <ServicePageLayout
      title="Minor Plumbing"
      description="Faucet replacement, toilet repair, fixing leaks, and clearing simple clogs. We handle the dripping so you don't have to."
      heroImage="https://images.unsplash.com/photo-1584622650111-993a426fbf0a?q=80&w=2670&auto=format&fit=crop"
      icon={<Droplets className="w-8 h-8 text-white" />}
      benefits={[
        "Quick resolution of annoying leaks",
        "Fixture installation to update your look",
        "Preventative maintenance to avoid disasters",
        "Respectful of your home and property"
      ]}
      content={
        <>
          <h2 className="text-3xl font-bold text-gray-900 mb-6 font-display">Stop the Drop. Fix the Flow.</h2>
          <p className="mb-6">
            Plumbing issues, even minor ones like a leaky faucet or a running toilet, can cost you a significant amount on your water bill and cause unnecessary frustration. Our team is equipped to handle those pesky plumbing problems quickly and efficiently.
          </p>
          <h3 className="text-2xl font-bold text-gray-900 mt-10 mb-4 font-display">What we handle:</h3>
          <ul className="list-disc pl-6 space-y-2 mb-8">
            <li><strong>Faucet & Fixture Replacement:</strong> Update your bathroom or kitchen aesthetics.</li>
            <li><strong>Toilet Repair:</strong> Fixing constant running, weak flushing, or leaks.</li>
            <li><strong>Under-Sink Leaks:</strong> Tightening connections and replacing worn P-traps.</li>
            <li><strong>Drain Clearing:</strong> Unclogging minor blockages in sinks and tubs.</li>
          </ul>
          <p>
            Don't let a small leak turn into major water damage. Contact us today for reliable plumbing fixes.
          </p>
        </>
      }
    />
  );
}
