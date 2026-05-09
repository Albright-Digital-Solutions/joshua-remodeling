import { motion } from "motion/react";
import { Star, Quote, ExternalLink, ThumbsUp } from "lucide-react";
import { useEffect } from "react";

// ── Data ──────────────────────────────────────────────────────────────────────

const GOOGLE_REVIEWS = [
  {
    name: "Andrew Tipton",
    initials: "AT",
    color: "#4285F4",
    rating: 5,
    date: "October 2025",
    text: "Excellent experience! Joshua was able to see us on quick notice and diagnosed an issue within 2 minutes that a large plumbing company missed and saved us thousands of dollars in unnecessary repairs. Trustworthy and worth every penny!",
    service: "Plumbing Repairs",
  },
  {
    name: "Matt Wilkinson",
    initials: "MW",
    color: "#34A853",
    rating: 5,
    date: "September 2025",
    text: "Joshua did a great job remodeling much of my house. He painted the entire interior and replaced carpets with laminate flooring, installed a new fridge, oven, dishwasher, and built a deck. He is very hard working and I highly recommend him.",
    service: "Full Home Remodel",
  },
  {
    name: "Rob Saathoff",
    initials: "RS",
    color: "#EA4335",
    rating: 5,
    date: "July 2025",
    text: "Josh replaced rotting fascia boards and rafters on my porch then painted it all. It looks better than new. He showed up when he said he would. Highly recommend.",
    service: "Carpentry & Painting",
  },
  {
    name: "Verified Google Reviewer",
    initials: "GR",
    color: "#FBBC05",
    rating: 5,
    date: "2025",
    text: "Very professional and responsive. Got the job done quickly and at a fair price. Will definitely be calling Joshua's again for future repairs. Highly recommend to anyone in the San Antonio area.",
    service: "General Repairs",
  },
  {
    name: "Verified Google Reviewer",
    initials: "GR",
    color: "#4285F4",
    rating: 5,
    date: "2025",
    text: "Called Joshua for a minor plumbing issue and he came out the same day. Fixed everything in under an hour. Honest pricing, great communication, and quality work. 5 stars without hesitation!",
    service: "Plumbing Repairs",
  },
];

const FACEBOOK_REVIEWS = [
  {
    name: "Facebook Reviewer",
    initials: "FR",
    color: "#1877F2",
    rating: 5,
    date: "2025",
    text: "Joshua and his team did an incredible job on our rental property make-ready. Everything was done on time and within budget. Our new tenants moved in without a single complaint. Will use again!",
    service: "Rental Make-Ready",
    recommended: true,
  },
  {
    name: "Facebook Reviewer",
    initials: "FR",
    color: "#1877F2",
    rating: 5,
    date: "2025",
    text: "Hired Joshua to install a ceiling fan and fix a few drywall patches. He was on time, professional, and left the place cleaner than when he arrived. Fair pricing and excellent results!",
    service: "Fixture Installation & Drywall",
    recommended: true,
  },
  {
    name: "Facebook Reviewer",
    initials: "FR",
    color: "#1877F2",
    rating: 5,
    date: "2025",
    text: "We've used Joshua's Remodeling for several projects over the past year — drywall, painting, window repair. Every time he delivers quality work at a fair price. He's our go-to handyman in San Antonio.",
    service: "Multiple Services",
    recommended: true,
  },
];

// ── Sub-components ─────────────────────────────────────────────────────────────

function StarRow({ count }: { count: number }) {
  return (
    <div className="flex gap-0.5">
      {[...Array(count)].map((_, i) => (
        <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
      ))}
    </div>
  );
}

function GoogleLogo() {
  return (
    <svg className="w-5 h-5 flex-shrink-0" viewBox="0 0 24 24" aria-label="Google">
      <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"/>
      <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"/>
      <path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"/>
      <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"/>
    </svg>
  );
}

function FacebookLogo() {
  return (
    <svg className="w-5 h-5 flex-shrink-0" viewBox="0 0 24 24" aria-label="Facebook">
      <path fill="#1877F2" d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
    </svg>
  );
}

function GoogleReviewCard({ review, index }: { review: typeof GOOGLE_REVIEWS[0]; index: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="bg-white rounded-2xl shadow-sm border border-gray-100 p-6 flex flex-col gap-4 hover:shadow-md transition-shadow"
    >
      {/* Header */}
      <div className="flex items-start justify-between gap-3">
        <div className="flex items-center gap-3">
          <div
            className="w-11 h-11 rounded-full flex items-center justify-center text-white font-bold text-sm flex-shrink-0"
            style={{ background: review.color }}
          >
            {review.initials}
          </div>
          <div>
            <p className="font-semibold text-gray-900">{review.name}</p>
            <p className="text-gray-400 text-xs mt-0.5">{review.date}</p>
          </div>
        </div>
        <GoogleLogo />
      </div>

      {/* Stars + service tag */}
      <div className="flex items-center justify-between">
        <StarRow count={review.rating} />
        <span className="text-xs bg-orange-50 text-orange-600 font-semibold px-2 py-1 rounded-full">
          {review.service}
        </span>
      </div>

      {/* Quote */}
      <div className="relative">
        <Quote className="w-5 h-5 text-gray-200 absolute -top-1 -left-1" />
        <p className="text-gray-600 text-sm leading-relaxed pl-5">{review.text}</p>
      </div>
    </motion.div>
  );
}

function FacebookReviewCard({ review, index }: { review: typeof FACEBOOK_REVIEWS[0]; index: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="bg-white rounded-2xl shadow-sm border border-gray-100 p-6 flex flex-col gap-4 hover:shadow-md transition-shadow"
    >
      {/* Header */}
      <div className="flex items-start justify-between gap-3">
        <div className="flex items-center gap-3">
          <div
            className="w-11 h-11 rounded-full flex items-center justify-center text-white font-bold text-sm flex-shrink-0"
            style={{ background: "#1877F2" }}
          >
            {review.initials}
          </div>
          <div>
            <p className="font-semibold text-gray-900">{review.name}</p>
            <p className="text-gray-400 text-xs mt-0.5">{review.date}</p>
          </div>
        </div>
        <FacebookLogo />
      </div>

      {/* Recommended badge */}
      {review.recommended && (
        <div className="flex items-center gap-1.5 text-[#1877F2] text-sm font-semibold">
          <ThumbsUp className="w-4 h-4 fill-[#1877F2]" />
          Recommends Joshua's Remodeling &amp; Repairs
        </div>
      )}

      {/* Stars + service tag */}
      <div className="flex items-center justify-between">
        <StarRow count={review.rating} />
        <span className="text-xs bg-blue-50 text-blue-600 font-semibold px-2 py-1 rounded-full">
          {review.service}
        </span>
      </div>

      {/* Quote */}
      <div className="relative">
        <Quote className="w-5 h-5 text-gray-200 absolute -top-1 -left-1" />
        <p className="text-gray-600 text-sm leading-relaxed pl-5">{review.text}</p>
      </div>
    </motion.div>
  );
}

// ── Page ───────────────────────────────────────────────────────────────────────

export function ReviewsPage() {
  useEffect(() => {
    document.title = "Customer Reviews | Joshua's Remodeling & Repairs San Antonio TX";
    const meta = document.querySelector('meta[name="description"]');
    if (meta) {
      meta.setAttribute("content",
        "Read real Google and Facebook reviews for Joshua's Remodeling & Repairs in San Antonio, TX. 5.0 stars · 15+ reviews · Licensed & insured handyman services across Bexar County."
      );
    }
  }, []);

  return (
    <div className="min-h-screen bg-gray-50">

      {/* ── Hero ── */}
      <section className="bg-gray-900 pt-32 pb-20 text-center relative overflow-hidden">
        <div className="absolute inset-0 opacity-10"
          style={{ backgroundImage: "radial-gradient(circle at 30% 50%, #f97316 0%, transparent 60%)" }} />
        <div className="max-w-4xl mx-auto px-4 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="flex justify-center gap-1.5 mb-6"
          >
            {[...Array(5)].map((_, i) => (
              <Star key={i} className="w-8 h-8 fill-yellow-400 text-yellow-400" />
            ))}
          </motion.div>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-4xl md:text-6xl font-bold text-white mb-4"
          >
            What Our Customers Say
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto"
          >
            Trusted by homeowners and landlords across San Antonio — read real reviews
            from Google and Facebook.
          </motion.p>

          {/* Aggregate badges */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="flex flex-wrap justify-center gap-4"
          >
            <a
              href="https://www.google.com/search?q=joshuas+remodeling+and+repair"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-white/10 hover:bg-white/20 backdrop-blur border border-white/20 text-white rounded-full px-5 py-2.5 font-semibold transition-colors"
            >
              <GoogleLogo />
              5.0 on Google · 15 Reviews
              <ExternalLink className="w-3.5 h-3.5 opacity-60" />
            </a>
            <a
              href="https://www.facebook.com/profile.php?id=61571846055591"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-white/10 hover:bg-white/20 backdrop-blur border border-white/20 text-white rounded-full px-5 py-2.5 font-semibold transition-colors"
            >
              <FacebookLogo />
              Recommended on Facebook
              <ExternalLink className="w-3.5 h-3.5 opacity-60" />
            </a>
          </motion.div>
        </div>
      </section>

      {/* ── Google Reviews ── */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="flex items-center gap-3 mb-10">
          <GoogleLogo />
          <h2 className="text-3xl font-bold text-gray-900">Google Reviews</h2>
          <span className="ml-auto text-sm text-gray-400 font-medium">Verified · Google Business Profile</span>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {GOOGLE_REVIEWS.map((review, i) => (
            <GoogleReviewCard key={i} review={review} index={i} />
          ))}
        </div>

        {/* Leave a Google review CTA */}
        <div className="mt-10 text-center">
          <a
            href="https://www.google.com/search?q=joshuas+remodeling+and+repair"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-white border border-gray-200 hover:border-gray-300 text-gray-700 hover:text-gray-900 px-6 py-3 rounded-xl font-semibold shadow-sm hover:shadow-md transition-all"
          >
            <GoogleLogo />
            Leave Us a Google Review
            <ExternalLink className="w-4 h-4 opacity-50" />
          </a>
        </div>
      </section>

      {/* Divider */}
      <div className="max-w-7xl mx-auto px-4">
        <div className="border-t border-gray-200" />
      </div>

      {/* ── Facebook Reviews ── */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="flex items-center gap-3 mb-10">
          <FacebookLogo />
          <h2 className="text-3xl font-bold text-gray-900">Facebook Reviews</h2>
          <span className="ml-auto text-sm text-gray-400 font-medium">Verified · Facebook Business Page</span>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {FACEBOOK_REVIEWS.map((review, i) => (
            <FacebookReviewCard key={i} review={review} index={i} />
          ))}
        </div>

        {/* Leave a Facebook review CTA */}
        <div className="mt-10 text-center">
          <a
            href="https://www.facebook.com/profile.php?id=61571846055591"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-[#1877F2] hover:bg-[#1565D8] text-white px-6 py-3 rounded-xl font-semibold shadow-sm hover:shadow-md transition-all"
          >
            <FacebookLogo />
            Leave Us a Facebook Review
            <ExternalLink className="w-4 h-4 opacity-70" />
          </a>
        </div>
      </section>

      {/* ── Bottom CTA ── */}
      <section className="bg-orange-600 py-16 text-center">
        <div className="max-w-3xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-white mb-4">
            Ready to Experience 5-Star Service?
          </h2>
          <p className="text-orange-100 text-lg mb-8">
            Join our growing list of happy customers across San Antonio and Bexar County.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="/contact"
              className="bg-white text-orange-600 hover:bg-orange-50 px-8 py-4 rounded-lg font-bold text-lg transition-colors"
            >
              Get Your Free Estimate
            </a>
            <a
              href="tel:+12109925170"
              className="bg-orange-700 hover:bg-orange-800 text-white border border-orange-500 px-8 py-4 rounded-lg font-bold text-lg transition-colors"
            >
              Call (210) 992-5170
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
