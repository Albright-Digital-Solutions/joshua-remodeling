import { ReactNode, useEffect } from "react";
import { Link } from "react-router";
import { ArrowLeft, CheckCircle2, Phone, MapPin, Clock, ArrowRight } from "lucide-react";

export interface FAQ {
  question: string;
  answer: string;
}

interface ServicePageLayoutProps {
  title: string;
  city?: string;
  metaDescription: string;
  description: string;
  heroImage: string;
  icon: ReactNode;
  benefits: string[];
  content: ReactNode;
  faqs: FAQ[];
  schemaServiceType: string;
  relatedServices: { name: string; path: string }[];
}

const NAP = {
  name: "Joshua's Remodeling & Repairs",
  phone: "(210) 992-5170",
  phoneHref: "tel:+12109925170",
  address: "2947 Ash Field Dr, San Antonio, TX",
  mapsUrl: "https://www.google.com/maps/search/?api=1&query=29.3989566,-98.696355",
  email: "Joshsanguineti@gmail.com",
  hours: "Mon–Fri 8am–6pm, Sat 9am–2pm",
};

export function ServicePageLayout({
  title,
  city = "San Antonio, TX",
  metaDescription,
  description,
  heroImage,
  icon,
  benefits,
  content,
  faqs,
  schemaServiceType,
  relatedServices,
}: ServicePageLayoutProps) {

  const fullTitle = `${title} in ${city} | ${NAP.name}`;

  // Inject per-page meta + schema
  useEffect(() => {
    document.title = fullTitle;
    let desc = document.querySelector('meta[name="description"]');
    if (!desc) {
      desc = document.createElement("meta");
      (desc as HTMLMetaElement).name = "description";
      document.head.appendChild(desc);
    }
    (desc as HTMLMetaElement).content = metaDescription;

    // Service + FAQ Schema
    const schema = {
      "@context": "https://schema.org",
      "@graph": [
        {
          "@type": "Service",
          "name": `${title} in ${city}`,
          "serviceType": schemaServiceType,
          "description": metaDescription,
          "provider": {
            "@type": "LocalBusiness",
            "name": NAP.name,
            "telephone": "+12109925170",
            "address": {
              "@type": "PostalAddress",
              "streetAddress": "2947 Ash Field Dr",
              "addressLocality": "San Antonio",
              "addressRegion": "TX",
              "addressCountry": "US"
            }
          },
          "areaServed": {
            "@type": "City",
            "name": "San Antonio"
          }
        },
        {
          "@type": "FAQPage",
          "mainEntity": faqs.map(faq => ({
            "@type": "Question",
            "name": faq.question,
            "acceptedAnswer": {
              "@type": "Answer",
              "text": faq.answer
            }
          }))
        }
      ]
    };

    let scriptEl = document.getElementById("service-schema") as HTMLScriptElement | null;
    if (!scriptEl) {
      scriptEl = document.createElement("script");
      scriptEl.id = "service-schema";
      scriptEl.type = "application/ld+json";
      document.head.appendChild(scriptEl);
    }
    scriptEl.textContent = JSON.stringify(schema);

    return () => {
      if (scriptEl) scriptEl.remove();
    };
  }, [title, city, metaDescription, schemaServiceType, faqs, fullTitle]);

  return (
    <div className="bg-white">
      {/* Service Hero */}
      <section className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img
            src={heroImage}
            alt={`${title} services in ${city}`}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gray-900/80"></div>
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <Link to="/" className="inline-flex items-center text-orange-400 hover:text-orange-300 font-medium mb-8 transition-colors">
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back to Home
          </Link>
          <div className="flex items-center gap-4 mb-6">
            <div className="bg-orange-600 p-3 rounded-xl shadow-lg">
              {icon}
            </div>
            <h1 className="text-4xl md:text-6xl font-bold text-white">
              {title} in {city}
            </h1>
          </div>
          <p className="text-xl md:text-2xl text-gray-200 max-w-3xl leading-relaxed">
            {description}
          </p>
          <div className="mt-8 flex flex-col sm:flex-row gap-4">
            <a
              href={NAP.phoneHref}
              className="inline-flex items-center gap-2 bg-orange-600 hover:bg-orange-700 text-white px-7 py-3.5 rounded-xl font-bold transition-colors"
            >
              <Phone className="w-5 h-5" />
              Call {NAP.phone}
            </a>
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 bg-white/10 hover:bg-white/20 border border-white/30 text-white px-7 py-3.5 rounded-xl font-bold transition-colors"
            >
              Get Free Estimate
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-16">

            {/* Article */}
            <div className="lg:col-span-2">
              <div className="prose prose-lg max-w-none text-gray-600">
                {content}
              </div>

              {/* FAQ Section */}
              {faqs.length > 0 && (
                <div className="mt-16">
                  <h2 className="text-3xl font-bold text-gray-900 mb-8">
                    Frequently Asked Questions — {title} in San Antonio
                  </h2>
                  <div className="space-y-5">
                    {faqs.map((faq, i) => (
                      <details
                        key={i}
                        className="group bg-gray-50 rounded-2xl border border-gray-100 p-6 cursor-pointer"
                      >
                        <summary className="font-bold text-gray-900 text-lg list-none flex items-center justify-between gap-4">
                          {faq.question}
                          <span className="text-orange-600 text-2xl font-light group-open:rotate-45 transition-transform flex-shrink-0">+</span>
                        </summary>
                        <p className="mt-4 text-gray-600 leading-relaxed">{faq.answer}</p>
                      </details>
                    ))}
                  </div>
                </div>
              )}

              {/* Related Services */}
              {relatedServices.length > 0 && (
                <div className="mt-16 pt-10 border-t border-gray-100">
                  <h3 className="text-xl font-bold text-gray-900 mb-5">Related Services in San Antonio</h3>
                  <div className="flex flex-wrap gap-3">
                    {relatedServices.map((s, i) => (
                      <Link
                        key={i}
                        to={s.path}
                        className="inline-flex items-center gap-2 bg-orange-50 hover:bg-orange-100 text-orange-700 font-semibold px-4 py-2 rounded-full text-sm transition-colors"
                      >
                        {s.name} <ArrowRight className="w-3.5 h-3.5" />
                      </Link>
                    ))}
                  </div>
                </div>
              )}
            </div>

            {/* Sidebar */}
            <div className="lg:col-span-1 space-y-8">
              {/* Benefits */}
              <div className="bg-gray-50 rounded-2xl p-8 border border-gray-100 sticky top-32">
                <h3 className="text-2xl font-bold text-gray-900 mb-6">Why Choose Us for {title}?</h3>
                <ul className="space-y-4 mb-8">
                  {benefits.map((benefit, i) => (
                    <li key={i} className="flex items-start gap-3">
                      <CheckCircle2 className="w-6 h-6 text-orange-600 flex-shrink-0" />
                      <span className="text-gray-700 font-medium">{benefit}</span>
                    </li>
                  ))}
                </ul>
                <a
                  href={NAP.phoneHref}
                  className="w-full bg-orange-600 hover:bg-orange-700 text-white px-6 py-3.5 rounded-xl font-bold transition-colors flex items-center justify-center gap-2 mb-3"
                >
                  <Phone className="w-4 h-4" />
                  {NAP.phone}
                </a>
                <Link
                  to="/contact"
                  className="w-full bg-gray-900 hover:bg-gray-800 text-white px-6 py-3.5 rounded-xl font-bold transition-colors flex items-center justify-center gap-2"
                >
                  Get Free Estimate
                </Link>
              </div>

              {/* NAP Card */}
              <div className="bg-white rounded-2xl border border-gray-100 shadow-sm p-6 space-y-4">
                <h4 className="font-bold text-gray-900 text-lg">{NAP.name}</h4>
                <div className="flex items-start gap-3 text-sm text-gray-600">
                  <Phone className="w-4 h-4 text-orange-500 flex-shrink-0 mt-0.5" />
                  <a href={NAP.phoneHref} className="hover:text-orange-600 transition-colors font-medium">{NAP.phone}</a>
                </div>
                <div className="flex items-start gap-3 text-sm text-gray-600">
                  <MapPin className="w-4 h-4 text-orange-500 flex-shrink-0 mt-0.5" />
                  <a href={NAP.mapsUrl} target="_blank" rel="noopener noreferrer" className="hover:text-orange-600 transition-colors">{NAP.address}</a>
                </div>
                <div className="flex items-start gap-3 text-sm text-gray-600">
                  <Clock className="w-4 h-4 text-orange-500 flex-shrink-0 mt-0.5" />
                  <span>{NAP.hours}</span>
                </div>
                <div className="pt-3 border-t border-gray-100">
                  <p className="text-xs text-gray-400">Licensed &amp; Insured · Serving San Antonio &amp; Bexar County</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
