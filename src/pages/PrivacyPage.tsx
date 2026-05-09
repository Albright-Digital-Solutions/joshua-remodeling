import { useEffect } from "react";
import { Link } from "react-router";
import { TexturedSection } from "../components/TexturedSection";

export function PrivacyPage() {
  useEffect(() => {
    document.title = "Privacy Policy | Joshua's Remodeling & Repairs San Antonio TX";
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
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">Privacy Policy</h1>
          <p className="text-gray-400">Last updated: {UPDATED}</p>
        </div>
      </section>

      {/* Content */}
      <section className="max-w-3xl mx-auto px-4 sm:px-6 py-16">
        <div className="bg-white rounded-3xl shadow-sm border border-gray-100 p-8 md:p-12 prose prose-gray max-w-none">

          <p className="text-gray-600">
            {COMPANY} ("we," "us," or "our") is committed to protecting your personal information.
            This Privacy Policy explains how we collect, use, and safeguard information you provide
            when visiting <strong>joshua-remodeling.com</strong> or contacting us for services.
          </p>

          <h2 className="text-xl font-bold text-gray-900 mt-8 mb-3">1. Information We Collect</h2>
          <p className="text-gray-600">We may collect the following types of personal information:</p>
          <ul className="list-disc pl-6 text-gray-600 space-y-1 mt-2">
            <li><strong>Contact information:</strong> name, email address, phone number, and property address</li>
            <li><strong>Service information:</strong> type of service requested and project details you provide</li>
            <li><strong>Communication preferences:</strong> whether you opt in to SMS/text message communications</li>
            <li><strong>Usage data:</strong> pages visited, time spent on site, browser type (via analytics tools)</li>
          </ul>

          <h2 className="text-xl font-bold text-gray-900 mt-8 mb-3">2. How We Use Your Information</h2>
          <p className="text-gray-600">We use the information we collect to:</p>
          <ul className="list-disc pl-6 text-gray-600 space-y-1 mt-2">
            <li>Respond to your service requests and provide free estimates</li>
            <li>Schedule and confirm appointments</li>
            <li>Send you project updates and communications you have requested</li>
            <li>Send SMS/text messages if you have opted in to receive them</li>
            <li>Improve our website and services</li>
            <li>Comply with applicable laws and regulations</li>
          </ul>

          <h2 className="text-xl font-bold text-gray-900 mt-8 mb-3">3. SMS / Text Message Policy</h2>
          <p className="text-gray-600">
            If you opt in to SMS communications through our contact form, you consent to receive text
            messages from {COMPANY}. We will only send SMS messages for the purposes described in our{" "}
            <Link to="/terms" className="text-orange-600 hover:underline">Terms &amp; Conditions</Link>.
          </p>
          <p className="text-gray-600 mt-3">
            <strong>We do not sell, rent, share, or disclose your phone number or SMS opt-in data
            to any third party for marketing purposes.</strong> Your mobile number and consent
            information are used exclusively by {COMPANY} to communicate with you about your
            service requests and appointments.
          </p>
          <p className="text-gray-600 mt-3">
            To opt out of SMS messages at any time, reply <strong>STOP</strong> to any message
            we send. For assistance, reply <strong>HELP</strong> or contact us directly.
          </p>

          <h2 className="text-xl font-bold text-gray-900 mt-8 mb-3">4. Information Sharing</h2>
          <p className="text-gray-600">
            We do not sell, trade, or otherwise transfer your personal information to third parties
            except in the following circumstances:
          </p>
          <ul className="list-disc pl-6 text-gray-600 space-y-1 mt-2">
            <li>
              <strong>Service providers:</strong> We may use trusted third-party tools (such as form
              processing services) that help us operate our website and communicate with you. These
              providers are contractually bound to keep your information confidential.
            </li>
            <li>
              <strong>Legal compliance:</strong> We may disclose information if required by law or
              to protect our rights and safety.
            </li>
          </ul>

          <h2 className="text-xl font-bold text-gray-900 mt-8 mb-3">5. Cookies & Analytics</h2>
          <p className="text-gray-600">
            Our website may use cookies and similar tracking technologies to improve your browsing
            experience and analyze site traffic. You can control cookie settings through your
            browser preferences. Disabling cookies may affect some site functionality.
          </p>

          <h2 className="text-xl font-bold text-gray-900 mt-8 mb-3">6. Data Security</h2>
          <p className="text-gray-600">
            We implement reasonable technical and organizational measures to protect your personal
            information from unauthorized access, disclosure, or misuse. However, no method of
            internet transmission or storage is 100% secure, and we cannot guarantee absolute security.
          </p>

          <h2 className="text-xl font-bold text-gray-900 mt-8 mb-3">7. Your Rights</h2>
          <p className="text-gray-600">You have the right to:</p>
          <ul className="list-disc pl-6 text-gray-600 space-y-1 mt-2">
            <li>Request access to the personal data we hold about you</li>
            <li>Request correction or deletion of your personal data</li>
            <li>Opt out of SMS communications at any time (reply STOP)</li>
            <li>Contact us with any privacy-related concerns or questions</li>
          </ul>

          <h2 className="text-xl font-bold text-gray-900 mt-8 mb-3">8. Children's Privacy</h2>
          <p className="text-gray-600">
            Our website is not directed at children under 13. We do not knowingly collect personal
            information from children. If you believe a child has provided us with personal information,
            please contact us immediately.
          </p>

          <h2 className="text-xl font-bold text-gray-900 mt-8 mb-3">9. Changes to This Policy</h2>
          <p className="text-gray-600">
            We may update this Privacy Policy from time to time. We will post the updated policy on
            this page with a revised "Last updated" date. Continued use of our website or services
            after changes constitutes acceptance of the revised policy.
          </p>

          <h2 className="text-xl font-bold text-gray-900 mt-8 mb-3">10. Contact Us</h2>
          <p className="text-gray-600">
            If you have any questions or concerns about this Privacy Policy, please contact us:
          </p>
          <address className="not-italic mt-3 text-gray-700 bg-orange-50 border border-orange-100 rounded-xl p-5">
            <strong>{COMPANY}</strong><br />
            {ADDR}<br />
            Phone: <a href="tel:+12109925170" className="text-orange-600">{PHONE}</a><br />
            Email: <a href={`mailto:${EMAIL}`} className="text-orange-600">{EMAIL}</a>
          </address>

          <div className="mt-10 pt-6 border-t border-gray-100 flex flex-wrap gap-4">
            <Link to="/terms" className="text-orange-600 font-semibold hover:underline">Terms &amp; Conditions →</Link>
            <Link to="/contact" className="text-orange-600 font-semibold hover:underline">Contact Us →</Link>
          </div>
        </div>
      </section>
    </TexturedSection>
  );
}
