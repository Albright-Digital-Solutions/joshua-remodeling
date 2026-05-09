import { Frame } from "lucide-react";
import { ServicePageLayout } from "./ServicePageLayout";

export function WindowDoorRepair() {
  return (
    <ServicePageLayout
      title="Window & Door Repair"
      description="Replacing broken panes, adjusting sticking doors, and hardware replacements to ensure your home is secure and energy-efficient."
      heroImage="https://images.unsplash.com/photo-1513694203232-719a280e022f?q=80&w=2670&auto=format&fit=crop"
      icon={<Frame className="w-8 h-8 text-white" />}
      benefits={[
        "Improve home security with functional locks and hinges",
        "Increase energy efficiency by fixing drafts",
        "Smooth operation of all entryways",
        "Cost-effective repairs before considering full replacements"
      ]}
      content={
        <>
          <h2 className="text-3xl font-bold text-gray-900 mb-6 font-display">Secure, Efficient, and Functional</h2>
          <p className="mb-6">
            Windows and doors are the most heavily used components of your home's exterior and interior. When a door sticks, a lock doesn't latch, or a window lets in a draft, it's not just an annoyance; it's a security and efficiency issue.
          </p>
          <h3 className="text-2xl font-bold text-gray-900 mt-10 mb-4 font-display">Common Issues We Resolve:</h3>
          <ul className="list-disc pl-6 space-y-2 mb-8">
            <li><strong>Sticking Doors:</strong> Planing, hinge adjustments, and frame realignment so doors close smoothly.</li>
            <li><strong>Hardware Replacement:</strong> Installing new deadbolts, handles, and smart locks for added security.</li>
            <li><strong>Window Repairs:</strong> Replacing cracked panes, fixing broken latches, and replacing worn screens.</li>
            <li><strong>Weatherstripping:</strong> Sealing gaps around doors and windows to keep the A/C inside and the Texas heat out.</li>
          </ul>
          <p>
            Often, a simple repair can save you thousands over a full replacement. Let our experts assess your doors and windows to restore their function.
          </p>
        </>
      }
    />
  );
}
