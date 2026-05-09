import { Star, Quote } from "lucide-react";

export function Testimonials() {
  const testimonials = [
    {
      name: "Andrew Tipton",
      text: "Excellent experience! Joshua was able to see us on quick notice and diagnosed an issue within 2 minutes that a large plumbing company 'missed' and saved us thousands of dollars in unnecessary repairs. Trustworthy and worth every penny!",
      rating: 5,
      location: "San Antonio",
      date: "Oct 31, 2025"
    },
    {
      name: "Matt Wilkinson",
      text: "Joshua did a great job remodeling much of my house. He painted the entire interior, replaced carpets with laminate flooring, installed new appliances, replaced the kitchen faucet, and built a deck. He is very hard working and did a great job!",
      rating: 5,
      location: "San Antonio",
      date: "Sep 30, 2025"
    },
    {
      name: "Rob Saathoff",
      text: "Josh replaced rotting fascia boards and rafters on my porch and then painted it all. It looks better than new. He showed up when he said he would, did what he said he would do. I was impressed with his competency. Highly recommend.",
      rating: 5,
      location: "San Antonio",
      date: "Jul 29, 2025"
    },
    {
      name: "Andrew Alderete",
      text: "Joshua was phenomenal! He came on time and knocked out a long list of repairs I've been wanting to get done. He did a great job on each item and went above and beyond. I would highly recommend him for any home improvements or repairs needed.",
      rating: 5,
      location: "San Antonio",
      date: "Oct 10, 2025"
    },
    {
      name: "Linda Torres",
      text: "I called around and was quoted outrageous prices. I was given a fair price by this company and he did a fantastic job. Thank you for going above and beyond. I would definitely recommend to family and friends.",
      rating: 5,
      location: "San Antonio",
      date: "Aug 6, 2025"
    },
    {
      name: "Pamela Jaeger",
      text: "My husband and I were so pleased with the job Josh and his wife did painting the entire interior of our home! They were quick, careful, and very affordable! I highly recommend this hardworking young man for all of your handyman/painting needs!",
      rating: 5,
      location: "San Antonio",
      date: "Jul 28, 2025"
    }
  ];

  return (
    <section className="py-24 bg-orange-600 text-white relative overflow-hidden">
      {/* Background pattern */}
      <div className="absolute inset-0 opacity-10" style={{ backgroundImage: "radial-gradient(#fff 2px, transparent 2px)", backgroundSize: "30px 30px" }}></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <Quote className="w-12 h-12 mx-auto mb-6 opacity-50" />
          <h2 className="text-4xl md:text-5xl font-bold mb-6 font-display">
            Trusted by San Antonio Homeowners
          </h2>
          <p className="text-xl text-orange-100">
            Don't just take our word for it—see what our neighbors say.
          </p>
        </div>

        <div className="text-center max-w-3xl mx-auto mb-6">
          <p className="text-orange-100 text-sm font-semibold uppercase tracking-wider">
            ⭐ Based on 15+ Google Reviews
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, i) => (
            <div key={i} className="bg-white/10 backdrop-blur-lg rounded-2xl p-8 border border-white/20 flex flex-col">
              <div className="flex text-yellow-400 mb-6">
                {[...Array(testimonial.rating)].map((_, j) => (
                  <Star key={j} className="w-5 h-5 fill-current" />
                ))}
              </div>
              <p className="text-lg leading-relaxed mb-8 flex-1">"{testimonial.text}"</p>
              <div className="flex items-end justify-between">
                <div>
                  <p className="font-bold text-lg">{testimonial.name}</p>
                  <p className="text-orange-200 text-sm">{testimonial.location}</p>
                </div>
                <p className="text-orange-200 text-xs">{testimonial.date}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
