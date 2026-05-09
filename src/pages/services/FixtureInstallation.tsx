import { Wrench } from "lucide-react";
import { ServicePageLayout } from "./ServicePageLayout";

export function FixtureInstallation() {
  return (
    <ServicePageLayout
      title="Fixture Installation"
      description="Professional installation of ceiling fans, light fixtures, cabinet hardware, and safe, secure TV mounts."
      heroImage="https://images.unsplash.com/photo-1540932239986-30128078f3c5?q=80&w=2670&auto=format&fit=crop"
      icon={<Wrench className="w-8 h-8 text-white" />}
      benefits={[
        "Secure and level mounting guaranteed",
        "Proper wiring and electrical safety checks",
        "Modernize your space with ease",
        "Clean up of all packaging and debris"
      ]}
      content={
        <>
          <h2 className="text-3xl font-bold text-gray-900 mb-6 font-display">Upgrade Your Home's Hardware</h2>
          <p className="mb-6">
            Sometimes it's the little details that make the biggest impact. Swapping out outdated light fixtures, adding a new ceiling fan, or updating cabinet pulls can instantly modernize a room. Our fixture installation service ensures it's done safely, securely, and level.
          </p>
          <h3 className="text-2xl font-bold text-gray-900 mt-10 mb-4 font-display">Expertise you can trust:</h3>
          <p className="mb-4">
            We take the guesswork out of installation. Finding the right stud for a heavy TV, or dealing with confusing ceiling fan wiring can be overwhelming. We handle:
          </p>
          <ul className="list-disc pl-6 space-y-2 mb-8">
            <li><strong>Lighting:</strong> Chandeliers, pendants, sconces, and exterior lights.</li>
            <li><strong>Ceiling Fans:</strong> Installation, balancing, and remote setup.</li>
            <li><strong>TV Mounting:</strong> Secure wall mounting with cable management options.</li>
            <li><strong>Cabinet Hardware:</strong> Precision drilling and alignment for knobs and pulls.</li>
          </ul>
          <p>
            Save your weekend and leave the heavy lifting and precise measuring to the professionals.
          </p>
        </>
      }
    />
  );
}
