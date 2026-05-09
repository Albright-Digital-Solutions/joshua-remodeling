import { Paintbrush } from "lucide-react";
import { ServicePageLayout } from "./ServicePageLayout";

export function DrywallPainting() {
  return (
    <ServicePageLayout
      title="Drywall & Painting"
      description="Expert patching of holes, cracks, and damage, plus comprehensive interior touch-up painting to breathe new life into your spaces."
      heroImage="https://images.unsplash.com/photo-1589939705384-5185137a7f0f?q=80&w=2670&auto=format&fit=crop"
      icon={<Paintbrush className="w-8 h-8 text-white" />}
      benefits={[
        "Seamless patching that blends perfectly",
        "High-quality, durable paint finishes",
        "Clean workspace throughout the project",
        "Meticulous attention to detail on edges and trim"
      ]}
      content={
        <>
          <h2 className="text-3xl font-bold text-gray-900 mb-6 font-display">Flawless Walls for a Fresh Start</h2>
          <p className="mb-6">
            Whether you have minor dings, large holes, or water damage, our experts provide seamless drywall repairs. We understand that a perfect paint job starts with a perfect surface, which is why we take the time to properly prep, patch, and sand before applying a single drop of paint.
          </p>
          <h3 className="text-2xl font-bold text-gray-900 mt-10 mb-4 font-display">Our Process</h3>
          <p className="mb-4">
            We don't just cover up problems; we fix them at the source. Our multi-step approach ensures your walls look brand new:
          </p>
          <ul className="list-disc pl-6 space-y-2 mb-8">
            <li>Damage assessment and removal of compromised materials</li>
            <li>Precise application of joint compound and tape</li>
            <li>Expert sanding for an undetectable blend</li>
            <li>Application of premium primer and paint</li>
          </ul>
          <p>
            Experience the difference of a professional finish. Your walls are the canvas of your home—make sure they're flawless.
          </p>
        </>
      }
    />
  );
}
