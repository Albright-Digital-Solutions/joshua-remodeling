import { useEffect } from "react";
import { Link } from "react-router";
import { TexturedSection } from "../components/TexturedSection";

export function TermsPage() {
  useEffect(() => {
    document.title = "Terms & Conditions | Joshua's Remodeling & Repairs San Antonio TX";
  }, []);

  const UPDATED = "May 9, 2025";
  const COMPANY = "Joshua's Remodeling & Repairs";
  const PHONE   = "(210) 992-5170";
  const EMAIL   = "Joshsanguineti@gmail.com";
  const ADDR    = "2947 Ash Field Dr, San Antonio, TX 78245";

  return (
    <TexturedSection className="min-h-screen">
      {/* Hero */}
      <section className="bg-gray-900 pt-32 pb-16 text-center">
        <div className="max-w-3xl mx-auto px-4">
          <p className="text-orange-400 text-sm font-bold uppercase tracking-widest mb-3">Legal</p>
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">Terms &amp; Conditions</h1>
          <p className="text-gray-400">Last updated: {UPDATED}</p>
        </div>
      </section>

      {/* Content */}
      <section className="max-w-3xl mx-auto px-4 sm:px-6 py-16">
        <div className="bg-white rounded-3xl shadow-sm border border-gray-100 p-8 md:p-12 prose prose-gray max-w-none">

          <p className="text-gray-600">
            Please read these Terms &amp; Conditions ("Terms") carefully before using the website at{" "}
            <strong>joshua-remodeling.com</strong> or requesting services from{" "}
            <strong>{COMPANY}</strong> ("Company," "we," "us," or "our"). By accessing our website or
            submitting a service request, you agree to be bound by these Terms.
          </p>

          <h2 className="text-xl font-bold text-gray-900 mt-8 mb-3">1. Services</h2>
          <p className="text-gray-600">
            {COMPANY} provides residential and light-commercial remodeling, repair, and handyman services in
            San Antonio, TX and the surrounding Bexar County area. All services are subject to availability
            and a separate written or verbal service agreement. Submitting a contact form or requesting an
            estimate does not constitute a binding contract for services.
          </p>

          <h2 className="text-xl font-bold text-gray-900 mt-8 mb-3">2. Estimates & Pricing</h2>
          <p className="text-gray-600">
            All estimates are free and provided in good faith. Final pricing may vary based on site
            conditions, materials, and scope changes discovered during the project. Any changes to the
            agreed scope will be communicated before work proceeds.
          </p>

          <h2 className="text-xl font-bold text-gray-900 mt-8 mb-3">3. SMS / Text Message Communications</h2>
          <p className="text-gray-600">
            By opting in to SMS communications on our contact form, you expressly consent to receive
            text messages from {COMPANY} at the phone number you provided. These messages may include:
          </p>
          <ul className="list-disc pl-6 text-gray-600 space-y-1 mt-2 mb-4">
            <li>Estimate confirmations and updates</li>
            <li>Appointment reminders and scheduling notifications</li>
            <li>Project status updates</li>
            <li>Promotional offers and service announcements</li>
          </ul>
          <p className="text-gray-600">
            <strong>Message frequency:</strong> Varies based on your project and communication preferences.
            <br />
            <strong>Message &amp; data rates may apply.</strong> Standard carrier rates may apply depending
            on your mobile plan.
            <br />
            <strong>To opt out:</strong> Reply <strong>STOP</strong> at any time to unsubscribe from all SMS messages.
            <br />
            <strong>For help:</strong> Reply <strong>HELP</strong> or contact us at {PHONE} or {EMAIL}.
            <br />
            SMS opt-in data and consent are never sold or shared with third parties for marketing purposes.
          </p>

          <h2 className="text-xl font-bold text-gray-900 mt-8 mb-3">4. Intellectual Property</h2>
          <p className="text-gray-600">
            All content on this website — including text, images, logos, and design — is the property of
            {COMPANY} and may not be reproduced without written permission.
          </p>

          <h2 className="text-xl font-bold text-gray-900 mt-8 mb-3">5. Limitation of Liability</h2>
          <p className="text-gray-600">
            To the maximum extent permitted by law, {COMPANY} shall not be liable for any indirect,
            incidental, or consequential damages arising from the use of our website or services. Our
            total liability for any claim shall not exceed the amount paid by you for the specific service
            giving rise to the claim.
          </p>

          <h2 className="text-xl font-bold text-gray-900 mt-8 mb-3">6. Governing Law</h2>
          <p className="text-gray-600">
            These Terms are governed by the laws of the State of Texas. Any disputes shall be resolved in
            the courts of Bexar County, Texas.
          </p>

          <h2 className="text-xl font-bold text-gray-900 mt-8 mb-3">7. Changes to These Terms</h2>
          <p className="text-gray-600">
            We reserve the right to update these Terms at any time. Continued use of our website or
            services after changes constitutes acceptance of the revised Terms.
          </p>

          <h2 className="text-xl font-bold text-gray-900 mt-8 mb-3">8. Contact Us</h2>
          <p className="text-gray-600">
            If you have questions about these Terms, please contact us:
          </p>
          <address className="not-italic mt-3 text-gray-700 bg-orange-50 border border-orange-100 rounded-xl p-5">
            <strong>{COMPANY}</strong><br />
            {ADDR}<br />
            Phone: <a href="tel:+12109925170" className="text-orange-600">{PHONE}</a><br />
            Email: <a href={`mailto:${EMAIL}`} className="text-orange-600">{EMAIL}</a>
          </address>

          <div className="mt-10 pt-6 border-t border-gray-100 flex flex-wrap gap-4">
            <Link to="/privacy" className="text-orange-600 font-semibold hover:underline">Privacy Policy →</Link>
            <Link to="/contact" className="text-orange-600 font-semibold hover:underline">Contact Us →</Link>
          </div>
        </div>
      </section>
    </TexturedSection>
  );
}
