import { Hammer } from "lucide-react";
import { ServicePageLayout } from "./ServicePageLayout";

export function CarpentryWoodwork() {
  return (
    <ServicePageLayout
      title="Carpentry & Woodwork"
      description="From minor door adjustments to custom shelving and deck repairs, our carpentry services add structural integrity and beauty to your home."
      heroImage="https://images.unsplash.com/photo-1533036667954-469b6db9de5d?q=80&w=2670&auto=format&fit=crop"
      icon={<Hammer className="w-8 h-8 text-white" />}
      benefits={[
        "Custom solutions tailored to your space",
        "High-quality materials and craftsmanship",
        "Restoring functionality to doors and fences",
        "Attention to detail in trim and finishing"
      ]}
      content={
        <>
          <h2 className="text-3xl font-bold text-gray-900 mb-6 font-display">Craftsmanship That Lasts</h2>
          <p className="mb-6">
            Woodwork is the backbone of a home's aesthetics and function. Whether you have a sagging fence gate, a door that won't shut properly, or you want to add custom built-in shelving, our carpentry expertise covers a wide array of needs.
          </p>
          <h3 className="text-2xl font-bold text-gray-900 mt-10 mb-4 font-display">Our Carpentry Solutions Include:</h3>
          <ul className="list-disc pl-6 space-y-2 mb-8">
            <li><strong>Trim & Molding:</strong> Installation or repair of baseboards, crown molding, and window casings.</li>
            <li><strong>Doors:</strong> Adjusting hinges, fixing sticking issues, or installing new interior/exterior doors.</li>
            <li><strong>Outdoor Structures:</strong> Replacing rotted deck boards, fixing railing, and repairing wooden fences.</li>
            <li><strong>Custom Shelving:</strong> Maximizing storage with built-in or floating shelves.</li>
          </ul>
          <p>
            We take pride in tight joints, straight lines, and finishes that enhance the natural beauty of the wood or prepare it perfectly for painting.
          </p>
        </>
      }
    />
  );
}
