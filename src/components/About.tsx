import { CheckCircle2 } from "lucide-react";

export function About() {
  return (
    <section id="about" className="py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          
          <div className="relative">
            {/* Image Composition */}
            <div className="rounded-3xl overflow-hidden shadow-2xl relative z-10">
              <img 
                src="https://images.unsplash.com/photo-1503387762-592deb58ef4e?q=80&w=2671&auto=format&fit=crop" 
                alt="Contractor working" 
                className="w-full h-[600px] object-cover"
              />
            </div>
            
            {/* Decorative element */}
            <div className="absolute -bottom-8 -right-8 w-64 h-64 bg-orange-100 rounded-3xl -z-0"></div>
            
            {/* Floating badge */}
            <div className="absolute top-8 -left-8 bg-white p-6 rounded-2xl shadow-xl z-20 hidden md:block">
              <div className="text-4xl font-black text-orange-600 mb-1">10+</div>
              <div className="text-sm font-bold text-gray-900 uppercase tracking-wider">Years of<br/>Experience</div>
            </div>
          </div>

          <div className="max-w-xl">
            <p className="text-orange-600 font-bold uppercase tracking-wider text-sm mb-3">About Us</p>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 leading-tight">
              Proudly Serving the <br/>San Antonio Area
            </h2>
            <p className="text-lg text-gray-600 mb-8 leading-relaxed">
              Welcome to Joshua's Remodeling & Repairs, your trusted, licensed, and insured remodeling service in San Antonio, TX. We are dedicated to providing prompt, high-quality solutions for homeowners and businesses throughout Bexar County.
            </p>
            
            <div className="space-y-4 mb-10">
              {[
                "Fully Licensed and Insured Professionals",
                "Prompt, Reliable Service Every Time",
                "Commitment to High-Quality Workmanship",
                "Clear Communication from Start to Finish"
              ].map((item, i) => (
                <div key={i} className="flex items-start gap-3">
                  <CheckCircle2 className="w-6 h-6 text-orange-600 flex-shrink-0 mt-0.5" />
                  <span className="text-gray-800 font-medium">{item}</span>
                </div>
              ))}
            </div>

            <div className="pt-8 border-t border-gray-200">
              <h3 className="text-2xl font-bold text-gray-900 mb-2">Need a reliable handyman?</h3>
              <p className="text-gray-600 mb-6">Let us take the stress out of your home repairs.</p>
              <button className="bg-gray-900 hover:bg-gray-800 text-white px-8 py-4 rounded-lg font-bold text-lg transition-colors inline-flex items-center gap-2">
                Get Your Estimate today
              </button>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
