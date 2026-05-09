import { ReactNode } from "react";
import { Link } from "react-router";
import { ArrowLeft, CheckCircle2 } from "lucide-react";

interface ServicePageLayoutProps {
  title: string;
  description: string;
  heroImage: string;
  icon: ReactNode;
  benefits: string[];
  content: ReactNode;
}

export function ServicePageLayout({ title, description, heroImage, icon, benefits, content }: ServicePageLayoutProps) {
  return (
    <div className="bg-white">
      {/* Service Hero */}
      <section className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img 
            src={heroImage} 
            alt={title} 
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
            <h1 className="text-4xl md:text-6xl font-bold text-white font-display">
              {title}
            </h1>
          </div>
          <p className="text-xl md:text-2xl text-gray-200 max-w-3xl leading-relaxed">
            {description}
          </p>
        </div>
      </section>

      {/* Content Section */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-16">
            <div className="lg:col-span-2">
              <div className="prose prose-lg max-w-none text-gray-600">
                {content}
              </div>
            </div>
            <div className="lg:col-span-1">
              <div className="bg-gray-50 rounded-2xl p-8 border border-gray-100 sticky top-32">
                <h3 className="text-2xl font-bold text-gray-900 mb-6 font-display">Why Choose Our {title} Services?</h3>
                <ul className="space-y-4 mb-8">
                  {benefits.map((benefit, i) => (
                    <li key={i} className="flex items-start gap-3">
                      <CheckCircle2 className="w-6 h-6 text-orange-600 flex-shrink-0" />
                      <span className="text-gray-700 font-medium">{benefit}</span>
                    </li>
                  ))}
                </ul>
                <div className="bg-gray-900 rounded-xl p-6 text-center">
                  <h4 className="text-white font-bold text-xl mb-2">Ready to get started?</h4>
                  <p className="text-gray-400 text-sm mb-6">Contact us today for a free estimate.</p>
                  <button className="w-full bg-orange-600 hover:bg-orange-700 text-white px-6 py-3 rounded-lg font-bold transition-colors">
                    Get Free Estimate
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
