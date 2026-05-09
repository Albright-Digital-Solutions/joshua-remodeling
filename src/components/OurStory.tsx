import { motion } from "motion/react";
import { CheckCircle2, ArrowRight } from "lucide-react";
import { Link } from "react-router";
import { TexturedSection } from "./TexturedSection";

const values = [
  "Trust, Transparency & Respect",
  "Licensed & Insured Professionals",
  "Lasting Solutions — Not Temporary Fixes",
  "Clear Communication from Start to Finish",
];

export function OurStory() {
  return (
    <TexturedSection id="our-story" className="py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <p className="text-orange-600 font-bold uppercase tracking-wider text-sm mb-3">Our Story</p>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 leading-tight">
            Family-Built. Community-Driven.
          </h2>
          <p className="text-lg text-gray-600 leading-relaxed">
            Joshua's Remodeling &amp; Repair was built on values passed down through generations — quality craftsmanship,
            honest relationships, and a genuine commitment to making your house a home.
          </p>
        </div>

        {/* Core Values Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-16">
          {values.map((value, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.1 }}
              className="flex items-start gap-3 bg-white rounded-2xl p-5 shadow-sm border border-gray-100"
            >
              <CheckCircle2 className="w-5 h-5 text-orange-600 flex-shrink-0 mt-0.5" />
              <span className="text-gray-800 font-medium text-sm">{value}</span>
            </motion.div>
          ))}
        </div>

        {/* Meet the Team Teaser */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="flex flex-col sm:flex-row items-center justify-between gap-6 bg-white rounded-3xl border border-gray-100 shadow-sm px-10 py-8"
        >
          <div>
            <p className="text-xs font-bold uppercase tracking-widest text-orange-500 mb-1">The People Behind the Work</p>
            <h3 className="text-2xl font-bold text-gray-900">Meet Josh &amp; Julia</h3>
            <p className="text-gray-500 mt-1">
              Get to know the owners and the values that drive every project we take on.
            </p>
          </div>
          <Link
            to="/about"
            className="flex-shrink-0 flex items-center gap-2 bg-gray-900 hover:bg-gray-800 text-white px-7 py-3.5 rounded-xl font-semibold transition-all transform hover:-translate-y-0.5 group"
          >
            Our Story
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </Link>
        </motion.div>

      </div>
    </TexturedSection>
  );
}
