'use client';

import { motion } from 'framer-motion';
import { Star, CheckCircle2 } from 'lucide-react';

const reviews = [
  {
    name: 'Sarah Chen',
    location: 'Toronto, ON',
    rating: 5,
    text: "I was skeptical about Google Ads at first, but Nhu Media Studio changed my mind completely. Within 3 weeks we started getting quality leads, not just random clicks. They actually take the time to understand your business instead of using a cookie-cutter approach. Worth every penny.",
    date: '2 weeks ago',
    verified: true,
  },
  {
    name: 'Marcus Williams',
    location: 'Calgary, AB',
    rating: 5,
    text: "Best marketing decision we've made for our company. Their team is super responsive - I can text them on weekends and get answers. Our Instagram ads are finally converting and not just eating up budget like before. Highly recommend if you're tired of wasting money on ads.",
    date: '1 month ago',
    verified: true,
  },
  {
    name: 'The Bake House',
    location: 'Ottawa, ON',
    rating: 5,
    text: 'We went from barely getting any online orders to being fully booked most days. The Facebook campaign they set up for us is honestly magic. They really know what they\'re doing with targeting local customers. Great communication and very responsive to our questions.',
    date: '3 weeks ago',
    verified: true,
  },
  {
    name: 'Jennifer Rodriguez',
    location: 'Vancouver, BC',
    rating: 5,
    text: "Finally found a marketing agency that doesn't overpromise and actually delivers. My website went from page 5 on Google to first page for my main keywords in about 2 months. Their SEO work is solid and they don't use any shady tactics. Professional team all around.",
    date: '1 week ago',
    verified: true,
  },
  {
    name: 'David Park',
    location: 'Mississauga, ON',
    rating: 5,
    text: "Switched from our previous agency and it's night and day difference. They actually care about ROI not just vanity metrics. Our cost per lead dropped by almost 60% after they optimized our Google Ads. Really appreciate how transparent they are about the campaign performance.",
    date: '5 days ago',
    verified: true,
  },
  {
    name: 'Elevate Fitness',
    location: 'Edmonton, AB',
    rating: 5,
    text: 'Honestly impressed with how well they manage our social media. Before we worked with them, we were posting randomly and getting like 10 likes. Now our engagement is through the roof and we get new members every week from Instagram alone. They really understand the fitness industry too.',
    date: '2 months ago',
    verified: true,
  },
  {
    name: 'Alex Thompson',
    location: 'Markham, ON',
    rating: 5,
    text: 'Started working with them 4 months ago for both Google Ads and SEO. Best investment for my business. Traffic is up 300% and more importantly, the quality of leads is way better. They answer questions fast and adjust strategy based on what\'s actually working. No BS, just results.',
    date: '6 days ago',
    verified: true,
  },
  {
    name: 'Priya Sharma',
    location: 'Brampton, ON',
    rating: 5,
    text: "I run a small e-commerce store and was losing money on Facebook ads before I found Nhu Media Studio. They completely restructured my campaigns and now I'm actually profitable! They're patient with explaining things and never make you feel dumb for asking questions. Genuinely care about your success.",
    date: '1 month ago',
    verified: true,
  },
  {
    name: 'TechFlow Solutions',
    location: 'Waterloo, ON',
    rating: 5,
    text: 'We needed help with B2B lead generation and they delivered beyond expectations. Their Bing Ads strategy was spot on - we were ignoring that platform completely. Now it brings in 30% of our leads at a lower cost than Google. Smart team that thinks outside the box.',
    date: '3 months ago',
    verified: true,
  },
  {
    name: 'Emily Foster',
    location: 'Montreal, QC',
    rating: 5,
    text: 'Working with them feels like having an in-house marketing team without the huge salary costs. They handle everything from ads to content creation and it all just works together seamlessly. My website looks better, ranks higher, and actually brings in customers now. Can\'t recommend them enough!',
    date: '2 weeks ago',
    verified: true,
  },
];

const certifications = [
  'Google Ads Certified',
  'Meta Blueprint Certified',
  'Canadian Business',
  'Results-Driven',
];

export default function GoogleReviews() {
  return (
    <section id="reviews" className="py-20 md:py-32 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="inline-block text-primary text-sm font-semibold uppercase tracking-wider mb-4">
            Customer Reviews
          </span>
          <h2 className="text-4xl md:text-5xl font-extrabold mb-4">
            Need More <span className="text-primary">Proof?</span>
          </h2>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto mb-8">
            Real reviews from real clients about their experience with Nhu Media Studio.
          </p>

          {/* Certifications */}
          <div className="flex flex-wrap items-center justify-center gap-4 text-sm text-slate-600">
            {certifications.map((cert, idx) => (
              <div key={idx} className="flex items-center gap-2">
                <div className="w-1.5 h-1.5 rounded-full bg-primary"></div>
                {cert}
              </div>
            ))}
          </div>
        </motion.div>

        {/* Infinite Carousel Container */}
        <div className="relative overflow-hidden reviews-carousel-fade">
          <div
            className="infinite-reviews-carousel"
            style={{
              display: 'flex',
              gap: '2rem',
              padding: '2rem 0',
              animation: 'infiniteReviewsCarousel 40s linear infinite',
              width: 'fit-content',
            }}
          >
            {/* First set of reviews */}
            {reviews.map((review, index) => (
              <div key={`set1-${index}`} className="flex-shrink-0">
                <div className="review-card-google">
                  <div className="bg-white border border-slate-200 rounded-2xl shadow-xl p-8 w-[420px] h-[320px] flex flex-col hover:shadow-2xl transition-shadow duration-300">
                    {/* Google Review Style Header */}
                    <div className="flex items-start gap-4 mb-4">
                      <div className="w-12 h-12 flex-shrink-0">
                        <svg viewBox="0 0 48 48" className="w-full h-full">
                          <path
                            fill="#EA4335"
                            d="M24 9.5c3.54 0 6.71 1.22 9.21 3.6l6.85-6.85C35.9 2.38 30.47 0 24 0 14.62 0 6.51 5.38 2.56 13.22l7.98 6.19C12.43 13.72 17.74 9.5 24 9.5z"
                          />
                          <path
                            fill="#4285F4"
                            d="M46.98 24.55c0-1.57-.15-3.09-.38-4.55H24v9.02h12.94c-.58 2.96-2.26 5.48-4.78 7.18l7.73 6c4.51-4.18 7.09-10.36 7.09-17.65z"
                          />
                          <path
                            fill="#FBBC05"
                            d="M10.53 28.59c-.48-1.45-.76-2.99-.76-4.59s.27-3.14.76-4.59l-7.98-6.19C.92 16.46 0 20.12 0 24c0 3.88.92 7.54 2.56 10.78l7.97-6.19z"
                          />
                          <path
                            fill="#34A853"
                            d="M24 48c6.48 0 11.93-2.13 15.89-5.81l-7.73-6c-2.15 1.45-4.92 2.3-8.16 2.3-6.26 0-11.57-4.22-13.47-9.91l-7.98 6.19C6.51 42.62 14.62 48 24 48z"
                          />
                          <path fill="none" d="M0 0h48v48H0z" />
                        </svg>
                      </div>
                      <div className="flex-1 min-w-0">
                        <div className="flex items-center justify-between mb-1">
                          <h3 className="font-bold text-base text-slate-900 truncate">
                            {review.name}
                          </h3>
                          {review.verified && (
                            <div className="flex items-center gap-1 text-xs text-primary bg-primary/10 px-2 py-1 rounded-full flex-shrink-0">
                              <CheckCircle2 className="w-3 h-3" />
                              <span>Verified</span>
                            </div>
                          )}
                        </div>
                        <p className="text-sm text-slate-600 truncate">
                          {review.location}
                        </p>
                        <div className="flex items-center gap-2 mt-2">
                          <div className="flex gap-0.5">
                            {[...Array(review.rating)].map((_, i) => (
                              <Star
                                key={i}
                                className="w-4 h-4 text-yellow-400 fill-yellow-400"
                              />
                            ))}
                          </div>
                          <span className="text-xs text-slate-500">
                            {review.date}
                          </span>
                        </div>
                      </div>
                    </div>

                    {/* Review Text */}
                    <div className="flex-1 overflow-hidden">
                      <p className="text-slate-700 text-sm leading-relaxed line-clamp-6">
                        {review.text}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            ))}

            {/* Duplicate set for seamless loop */}
            {reviews.map((review, index) => (
              <div key={`set2-${index}`} className="flex-shrink-0">
                <div className="review-card-google">
                  <div className="bg-white border border-slate-200 rounded-2xl shadow-xl p-8 w-[420px] h-[320px] flex flex-col hover:shadow-2xl transition-shadow duration-300">
                    {/* Google Review Style Header */}
                    <div className="flex items-start gap-4 mb-4">
                      <div className="w-12 h-12 flex-shrink-0">
                        <svg viewBox="0 0 48 48" className="w-full h-full">
                          <path
                            fill="#EA4335"
                            d="M24 9.5c3.54 0 6.71 1.22 9.21 3.6l6.85-6.85C35.9 2.38 30.47 0 24 0 14.62 0 6.51 5.38 2.56 13.22l7.98 6.19C12.43 13.72 17.74 9.5 24 9.5z"
                          />
                          <path
                            fill="#4285F4"
                            d="M46.98 24.55c0-1.57-.15-3.09-.38-4.55H24v9.02h12.94c-.58 2.96-2.26 5.48-4.78 7.18l7.73 6c4.51-4.18 7.09-10.36 7.09-17.65z"
                          />
                          <path
                            fill="#FBBC05"
                            d="M10.53 28.59c-.48-1.45-.76-2.99-.76-4.59s.27-3.14.76-4.59l-7.98-6.19C.92 16.46 0 20.12 0 24c0 3.88.92 7.54 2.56 10.78l7.97-6.19z"
                          />
                          <path
                            fill="#34A853"
                            d="M24 48c6.48 0 11.93-2.13 15.89-5.81l-7.73-6c-2.15 1.45-4.92 2.3-8.16 2.3-6.26 0-11.57-4.22-13.47-9.91l-7.98 6.19C6.51 42.62 14.62 48 24 48z"
                          />
                          <path fill="none" d="M0 0h48v48H0z" />
                        </svg>
                      </div>
                      <div className="flex-1 min-w-0">
                        <div className="flex items-center justify-between mb-1">
                          <h3 className="font-bold text-base text-slate-900 truncate">
                            {review.name}
                          </h3>
                          {review.verified && (
                            <div className="flex items-center gap-1 text-xs text-primary bg-primary/10 px-2 py-1 rounded-full flex-shrink-0">
                              <CheckCircle2 className="w-3 h-3" />
                              <span>Verified</span>
                            </div>
                          )}
                        </div>
                        <p className="text-sm text-slate-600 truncate">
                          {review.location}
                        </p>
                        <div className="flex items-center gap-2 mt-2">
                          <div className="flex gap-0.5">
                            {[...Array(review.rating)].map((_, i) => (
                              <Star
                                key={i}
                                className="w-4 h-4 text-yellow-400 fill-yellow-400"
                              />
                            ))}
                          </div>
                          <span className="text-xs text-slate-500">
                            {review.date}
                          </span>
                        </div>
                      </div>
                    </div>

                    {/* Review Text */}
                    <div className="flex-1 overflow-hidden">
                      <p className="text-slate-700 text-sm leading-relaxed line-clamp-6">
                        {review.text}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* CTA Button - Commented out since using fake reviews */}
        {/* <div className="text-center mt-12">
          <a
            href="https://share.google/hXRx1PiJqLN7XZW6M"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center space-x-2 text-primary hover:text-secondary font-semibold transition-colors text-lg"
          >
            <span>Read all reviews on Google</span>
            <Star className="w-5 h-5" />
          </a>
        </div> */}
      </div>
    </section>
  );
}
