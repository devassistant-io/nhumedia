'use client';

import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import { motion } from 'framer-motion';
import { Calendar, User, ArrowLeft, Share2 } from 'lucide-react';
import Link from 'next/link';

export default function BlogPostPage() {
  return (
    <main className="min-h-screen bg-gray-50">
      <Navigation />

      <article className="pt-32 pb-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Back Button */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="mb-8"
          >
            <Link
              href="/blog"
              className="inline-flex items-center space-x-2 text-primary hover:text-secondary transition-colors"
            >
              <ArrowLeft className="w-5 h-5" />
              <span className="font-semibold">Back to Blog</span>
            </Link>
          </motion.div>

          {/* Header */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="mb-12"
          >
            <div className="mb-6">
              <span className="bg-primary text-white px-4 py-2 rounded-full text-sm font-semibold">
                Content Marketing
              </span>
            </div>

            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
              Setting Your Brand Apart: The Power of High-Quality Content
            </h1>

            <div className="flex flex-wrap items-center gap-6 text-gray-600">
              <div className="flex items-center space-x-2">
                <User className="w-5 h-5" />
                <span>Nhu Media Team</span>
              </div>
              <div className="flex items-center space-x-2">
                <Calendar className="w-5 h-5" />
                <span>October 15, 2024</span>
              </div>
              <button className="flex items-center space-x-2 hover:text-primary transition-colors">
                <Share2 className="w-5 h-5" />
                <span>Share</span>
              </button>
            </div>
          </motion.div>

          {/* Featured Image */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="mb-12 rounded-2xl overflow-hidden"
          >
            <img
              src="https://images.unsplash.com/photo-1542435503-956c469947f6?w=1200&q=80"
              alt="Blog post featured image"
              className="w-full h-auto"
            />
          </motion.div>

          {/* Content */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="prose prose-lg max-w-none"
          >
            <div className="bg-white rounded-2xl p-8 md:p-12 shadow-lg">
              <p className="text-xl text-gray-700 leading-relaxed mb-6">
                In today's crowded digital marketplace, standing out from the
                competition requires more than just a great product or service.
                High-quality content has become the cornerstone of successful
                digital marketing strategies, helping brands build trust,
                establish authority, and create lasting relationships with their
                audience.
              </p>

              <h2 className="text-3xl font-bold mt-12 mb-6">
                Why Content Quality Matters
              </h2>

              <p className="text-gray-700 leading-relaxed mb-6">
                Quality content does more than fill space on your website or
                social media feeds. It serves multiple critical functions:
              </p>

              <ul className="space-y-3 mb-6">
                <li className="text-gray-700">
                  <strong>Builds Trust:</strong> Well-researched, accurate
                  content positions your brand as a reliable source of
                  information.
                </li>
                <li className="text-gray-700">
                  <strong>Improves SEO:</strong> Search engines reward
                  high-quality, relevant content with better rankings.
                </li>
                <li className="text-gray-700">
                  <strong>Engages Your Audience:</strong> Compelling content
                  keeps visitors on your site longer and encourages sharing.
                </li>
                <li className="text-gray-700">
                  <strong>Drives Conversions:</strong> Quality content guides
                  potential customers through the buyer's journey.
                </li>
              </ul>

              <h2 className="text-3xl font-bold mt-12 mb-6">
                Elements of High-Quality Content
              </h2>

              <h3 className="text-2xl font-bold mt-8 mb-4">1. Relevance</h3>
              <p className="text-gray-700 leading-relaxed mb-6">
                Your content must address the needs, questions, and pain points of
                your target audience. Understanding your audience deeply is the
                first step to creating content that resonates.
              </p>

              <h3 className="text-2xl font-bold mt-8 mb-4">2. Originality</h3>
              <p className="text-gray-700 leading-relaxed mb-6">
                Original content sets you apart from competitors and provides
                unique value to your audience. Avoid rehashing what everyone else
                is saying—bring your unique perspective and insights.
              </p>

              <h3 className="text-2xl font-bold mt-8 mb-4">3. Accuracy</h3>
              <p className="text-gray-700 leading-relaxed mb-6">
                Fact-check your content thoroughly. Inaccurate information damages
                your credibility and can harm your reputation. Always cite
                reliable sources and stay up-to-date with industry developments.
              </p>

              <h2 className="text-3xl font-bold mt-12 mb-6">
                Implementing a Content Strategy
              </h2>

              <p className="text-gray-700 leading-relaxed mb-6">
                Creating high-quality content consistently requires a strategic
                approach:
              </p>

              <ol className="space-y-3 mb-6">
                <li className="text-gray-700">
                  <strong>Develop a content calendar</strong> to maintain
                  consistency
                </li>
                <li className="text-gray-700">
                  <strong>Invest in professional writers</strong> or train your
                  team
                </li>
                <li className="text-gray-700">
                  <strong>Use analytics</strong> to measure what works
                </li>
                <li className="text-gray-700">
                  <strong>Update and refresh</strong> existing content regularly
                </li>
                <li className="text-gray-700">
                  <strong>Engage with your audience</strong> and respond to
                  feedback
                </li>
              </ol>

              <div className="bg-primary/10 border-l-4 border-primary p-6 my-8 rounded">
                <p className="text-lg italic text-gray-800">
                  "Quality content is not just about what you say, but how you say
                  it. It's about creating value, solving problems, and building
                  relationships with your audience."
                </p>
              </div>

              <h2 className="text-3xl font-bold mt-12 mb-6">Conclusion</h2>

              <p className="text-gray-700 leading-relaxed mb-6">
                In an era where consumers are bombarded with information,
                high-quality content is your opportunity to stand out, provide
                real value, and build lasting relationships with your audience.
                Invest in quality, stay consistent, and watch your brand grow.
              </p>

              <p className="text-gray-700 leading-relaxed">
                Need help creating a content strategy that works? Our team at Nhu
                Media Studio specializes in developing and executing content
                marketing strategies that drive results. Contact us today to learn
                more.
              </p>
            </div>
          </motion.div>

          {/* CTA */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mt-16 bg-dark text-white rounded-2xl p-8 md:p-12 text-center"
          >
            <h3 className="text-3xl font-bold mb-4">
              Ready to Transform Your Content Strategy?
            </h3>
            <p className="text-xl text-gray-300 mb-8">
              Let's create content that drives real results for your business
            </p>
            <Link
              href="/#contact"
              className="inline-block bg-primary text-white px-8 py-4 rounded-lg font-semibold hover:bg-secondary transition-colors"
            >
              Book a Free Consultation
            </Link>
          </motion.div>
        </div>
      </article>

      <Footer />
    </main>
  );
}


