import { Star, Quote } from "lucide-react";

const REVIEWS = [
  {
    name: "Andrew Tipton",
    rating: 5,
    text: "Excellent experience! Joshua was able to see us on quick notice and diagnosed an issue within 2 minutes that a large plumbing company missed and saved us thousands of dollars in unnecessary repairs. Trustworthy and worth every penny!",
    date: "Oct 2025",
  },
  {
    name: "Matt Wilkinson",
    rating: 5,
    text: "Joshua did a great job remodeling much of my house. He painted the entire interior and replaced carpets with laminate flooring, installed a new fridge, oven, dishwasher, and built a deck. He is very hard working and I highly recommend him.",
    date: "Sep 2025",
  },
  {
    name: "Rob Saathoff",
    rating: 5,
    text: "Josh replaced rotting fascia boards and rafters on my porch then painted it all. It looks better than new. He showed up when he said he would. Highly recommend.",
    date: "Jul 2025",
  },
  {
    name: "Google Reviewer",
    rating: 5,
    text: "Very professional and responsive. Got the job done quickly and at a fair price. Will definitely be calling Joshua's again for future repairs.",
    date: "2025",
  },
  {
    name: "Google Reviewer",
    rating: 5,
    text: "Called Joshua for a minor plumbing issue and he came out the same day. Fixed everything in under an hour. Honest pricing, great work. 5 stars!",
    date: "2025",
  },
];

function StarRating({ count }: { count: number }) {
  return (
    <div className="flex gap-0.5">
      {[...Array(count)].map((_, i) => (
        <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
      ))}
    </div>
  );
}

function ReviewCard({ review }: { review: typeof REVIEWS[0] }) {
  return (
    <div className="flex-shrink-0 w-80 mx-4 bg-white rounded-2xl px-6 py-5 shadow-md border border-gray-100 flex flex-col gap-3">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-3">
          {/* Google avatar circle */}
          <div
            className="w-9 h-9 rounded-full flex items-center justify-center text-white font-bold text-sm flex-shrink-0"
            style={{ background: "linear-gradient(135deg, #4285F4, #34A853)" }}
          >
            {review.name[0]}
          </div>
          <div>
            <p className="font-semibold text-gray-900 text-sm leading-tight">{review.name}</p>
            <p className="text-gray-400 text-xs">{review.date}</p>
          </div>
        </div>
        {/* Google G logo */}
        <svg className="w-5 h-5 flex-shrink-0" viewBox="0 0 24 24" aria-label="Google">
          <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"/>
          <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"/>
          <path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"/>
          <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"/>
        </svg>
      </div>

      {/* Stars */}
      <StarRating count={review.rating} />

      {/* Quote */}
      <div className="relative">
        <Quote className="w-4 h-4 text-orange-200 absolute -top-1 -left-1" />
        <p className="text-gray-600 text-sm leading-relaxed pl-4 line-clamp-3">
          {review.text}
        </p>
      </div>
    </div>
  );
}

export function ReviewBanner() {
  // Duplicate reviews for seamless infinite loop
  const doubled = [...REVIEWS, ...REVIEWS];

  return (
    <section className="bg-gray-50 border-y border-gray-100 py-10 overflow-hidden">
      {/* Section label */}
      <div className="text-center mb-6">
        <div className="inline-flex items-center gap-2 text-sm font-semibold text-gray-500 uppercase tracking-widest">
          <div className="flex gap-0.5">
            {[...Array(5)].map((_, i) => (
              <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
            ))}
          </div>
          <span>5.0 on Google · 15 Reviews</span>
          <svg className="w-5 h-5" viewBox="0 0 24 24" aria-label="Google">
            <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"/>
            <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"/>
            <path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"/>
            <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"/>
          </svg>
        </div>
      </div>

      {/* Infinite scroll track */}
      <div className="relative">
        {/* Left fade */}
        <div className="absolute left-0 top-0 bottom-0 w-24 z-10 pointer-events-none"
          style={{ background: "linear-gradient(to right, #f9fafb, transparent)" }} />
        {/* Right fade */}
        <div className="absolute right-0 top-0 bottom-0 w-24 z-10 pointer-events-none"
          style={{ background: "linear-gradient(to left, #f9fafb, transparent)" }} />

        <div
          className="flex"
          style={{
            animation: "reviewScroll 40s linear infinite",
            width: "max-content",
          }}
        >
          {doubled.map((review, i) => (
            <ReviewCard key={i} review={review} />
          ))}
        </div>
      </div>

      <style>{`
        @keyframes reviewScroll {
          0%   { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        .flex:hover {
          animation-play-state: paused;
        }
      `}</style>
    </section>
  );
}
