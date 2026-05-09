import { motion } from "motion/react";
import { Heart, Globe, ArrowRight } from "lucide-react";

export function About() {
  return (
    <section id="about" className="py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-20">
          <p className="text-orange-600 font-bold uppercase tracking-wider text-sm mb-3">Meet the Team</p>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 leading-tight">
            The People Behind Every Project
          </h2>
          <p className="text-lg text-gray-600 leading-relaxed">
            Joshua's Remodeling &amp; Repair is a family business built on trust, craftsmanship, and a genuine
            passion for serving the San Antonio community.
          </p>
        </div>

        {/* Owner Profiles */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-20">

          {/* Joshua */}
          <motion.div
            initial={{ opacity: 0, x: -24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="bg-white rounded-3xl shadow-lg border border-gray-100 overflow-hidden"
          >
            <div className="h-[480px] overflow-hidden relative">
              <img
                src="/joshua-sanguineti.jpg"
                alt="Joshua Sanguineti — Owner of Joshua's Remodeling & Repairs San Antonio TX"
                className="w-full h-full object-cover object-center"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-gray-900/70 via-transparent to-transparent" />
              <div className="absolute bottom-6 left-6 text-white">
                <p className="text-xs font-bold uppercase tracking-widest text-orange-400 mb-1">Owner</p>
                <h3 className="text-2xl font-bold">Joshua Sanguineti</h3>
              </div>
            </div>
            <div className="p-8">
              <p className="text-gray-600 leading-relaxed mb-5">
                Welcome to Joshua's Remodeling &amp; Repairs! My name is Josh, and I'm thrilled to introduce you to our
                dedicated team. At Joshua's Remodeling &amp; Repair, our core mission is to simplify your life by
                providing a service that is not only reliable but also efficient and genuinely friendly.
              </p>
              <p className="text-gray-600 leading-relaxed mb-5">
                The inspiration for this journey began eight years ago when I worked alongside my grandfather in his
                painting and remodeling business. During that time, I learned invaluable lessons about delivering
                outstanding quality and nurturing strong relationships with clients. Trust, transparency, and respect
                are the cornerstones of our approach, and these values remain at the heart of everything we do.
              </p>
              <p className="text-gray-600 leading-relaxed mb-5">
                As I now run my own business, I feel a profound sense of responsibility to instill these principles in
                future generations — particularly my sons and their sons. Our unwavering commitment to excellence drives
                us to utilize only the finest materials and most effective techniques, ensuring that results are not
                temporary fixes, but lasting solutions.
              </p>
              <p className="text-gray-600 leading-relaxed">
                Let us partner with you in transforming your house into a warm and inviting home that reflects your
                unique style and needs. Our services range from minor repairs to extensive renovations, so regardless
                of the project size, we bring the same level of dedication and craftsmanship.
              </p>
            </div>
          </motion.div>

          {/* Julia */}
          <motion.div
            initial={{ opacity: 0, x: 24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.15 }}
            className="bg-white rounded-3xl shadow-lg border border-gray-100 overflow-hidden"
          >
            <div className="h-[480px] overflow-hidden relative">
              <img
                src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=1200&auto=format&fit=crop"
                alt="Julia Wilkinson — Co-Owner"
                className="w-full h-full object-cover object-center"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-gray-900/70 via-transparent to-transparent" />
              <div className="absolute bottom-6 left-6 text-white">
                <p className="text-xs font-bold uppercase tracking-widest text-orange-400 mb-1">Co-Owner</p>
                <h3 className="text-2xl font-bold">Julia Wilkinson</h3>
              </div>
            </div>
            <div className="p-8">
              <div className="flex items-center gap-2 mb-4">
                <Globe className="w-4 h-4 text-orange-500" />
                <span className="text-sm text-orange-600 font-semibold">Raised across 6 countries</span>
              </div>
              <p className="text-gray-600 leading-relaxed mb-5">
                Julia Wilkinson brings a world of experience, compassion, and commitment to excellence to her role as
                co-owner. Raised as a missionary child across six different countries, Julia learned early the value of
                adaptability, hard work, and serving others — qualities that are now at the heart of everything she does.
              </p>
              <p className="text-gray-600 leading-relaxed mb-5">
                Her international upbringing gave her a deep appreciation for different cultures and a strong sense of
                responsibility, which naturally shaped her hands-on, people-first approach to home repair services.
                Whether working directly with clients or managing behind-the-scenes operations, Julia ensures every
                project is handled with care, integrity, and attention to detail.
              </p>
              <p className="text-gray-600 leading-relaxed">
                With a passion for helping people feel safe and comfortable in their homes, Julia sees Joshua's
                Remodeling &amp; Repair not just as a business — but as a way to build trust, solve problems, and make
                life a little easier for families in her community. When she's not coordinating projects or
                brainstorming better ways to serve clients, Julia enjoys spending time with her family.
              </p>
            </div>
          </motion.div>

        </div>

        {/* CTA Banner */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="bg-gray-900 rounded-3xl p-10 md:p-14 flex flex-col md:flex-row items-center justify-between gap-8"
        >
          <div className="flex items-start gap-5">
            <Heart className="w-10 h-10 text-orange-500 flex-shrink-0 mt-1" />
            <div>
              <h3 className="text-2xl font-bold text-white mb-2">Ready to work with a team that cares?</h3>
              <p className="text-gray-400 max-w-lg">
                Every project starts with an in-depth consultation where we discuss your ideas and requirements while
                providing expert guidance tailored to your vision.
              </p>
            </div>
          </div>
          <a
            href="/contact"
            className="flex-shrink-0 bg-orange-600 hover:bg-orange-700 text-white px-8 py-4 rounded-xl font-bold text-lg transition-all transform hover:-translate-y-1 flex items-center gap-2 group whitespace-nowrap"
          >
            Contact Josh
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </a>
        </motion.div>

      </div>
    </section>
  );
}
