'use client';

import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import { motion } from 'framer-motion';
import { Calendar, User, ArrowRight, Search } from 'lucide-react';
import Link from 'next/link';
import { useState } from 'react';

const blogPosts = [
  {
    id: 1,
    title: 'Setting Your Brand Apart: The Power of High-Quality Content',
    excerpt:
      'Discover how high-quality content can differentiate your brand in a crowded digital marketplace and build lasting customer relationships.',
    author: 'Nhu Media Team',
    date: 'October 15, 2024',
    category: 'Content Marketing',
    image: 'https://images.unsplash.com/photo-1542435503-956c469947f6?w=800&q=80',
    slug: 'power-of-high-quality-content',
  },
  {
    id: 2,
    title: 'Reasons Why Businesses Advertise Online (And Why You Should Too)',
    excerpt:
      'Explore the compelling reasons why online advertising is essential for business growth in today\'s digital-first world.',
    author: 'Nhu Media Team',
    date: 'October 8, 2024',
    category: 'Digital Marketing',
    image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&q=80',
    slug: 'why-businesses-advertise-online',
  },
  {
    id: 3,
    title: 'SEO Can Transform Your Google Ads Performance: A Real-World Success Story',
    excerpt:
      'Learn how combining SEO with Google Ads can dramatically improve your campaign performance and ROI through a case study.',
    author: 'Nhu Media Team',
    date: 'September 22, 2024',
    category: 'Google Ads',
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&q=80',
    slug: 'seo-google-ads-success-story',
  },
  {
    id: 4,
    title: 'The Complete Guide to Facebook Advertising in 2024',
    excerpt:
      'Master Facebook and Instagram advertising with our comprehensive guide covering targeting, creative best practices, and optimization strategies.',
    author: 'Nhu Media Team',
    date: 'September 10, 2024',
    category: 'Social Media',
    image: 'https://images.unsplash.com/photo-1611162617474-5b21e879e113?w=800&q=80',
    slug: 'facebook-advertising-guide-2024',
  },
  {
    id: 5,
    title: 'How to Maximize Your PPC Budget: 10 Expert Tips',
    excerpt:
      'Get the most out of every advertising dollar with these proven strategies for optimizing your pay-per-click campaigns.',
    author: 'Nhu Media Team',
    date: 'August 28, 2024',
    category: 'PPC',
    image: 'https://images.unsplash.com/photo-1553729459-efe14ef6055d?w=800&q=80',
    slug: 'maximize-ppc-budget-tips',
  },
  {
    id: 6,
    title: 'Local SEO Strategies That Actually Work',
    excerpt:
      'Boost your local presence and attract more customers with these proven local SEO tactics that deliver measurable results.',
    author: 'Nhu Media Team',
    date: 'August 15, 2024',
    category: 'SEO',
    image: 'https://images.unsplash.com/photo-1557804506-669a67965ba0?w=800&q=80',
    slug: 'local-seo-strategies',
  },
];

const categories = ['All', 'Digital Marketing', 'Google Ads', 'Social Media', 'Content Marketing', 'PPC', 'SEO'];

export default function BlogPage() {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [searchQuery, setSearchQuery] = useState('');

  const filteredPosts = blogPosts.filter((post) => {
    const matchesCategory =
      selectedCategory === 'All' || post.category === selectedCategory;
    const matchesSearch =
      post.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      post.excerpt.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <main className="min-h-screen bg-gray-50">
      <Navigation />
      
      {/* Hero Section */}
      <section className="pt-32 pb-16 bg-gradient-to-br from-dark via-gray-800 to-dark text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center"
          >
            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              Our <span className="text-primary">Blog</span>
            </h1>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              Expert insights, strategies, and success stories to help you grow
              your business online
            </p>
          </motion.div>
        </div>
      </section>

      {/* Search and Filter */}
      <section className="py-12 bg-white border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row gap-6 items-center justify-between">
            {/* Search */}
            <div className="relative w-full md:w-96">
              <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
              <input
                type="text"
                placeholder="Search articles..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-12 pr-4 py-3 border-2 border-gray-300 rounded-lg focus:border-primary focus:outline-none"
              />
            </div>

            {/* Categories */}
            <div className="flex flex-wrap gap-2 justify-center">
              {categories.map((category) => (
                <button
                  key={category}
                  onClick={() => setSelectedCategory(category)}
                  className={`px-4 py-2 rounded-lg font-semibold transition-colors ${
                    selectedCategory === category
                      ? 'bg-primary text-white'
                      : 'bg-gray-200 text-dark hover:bg-gray-300'
                  }`}
                >
                  {category}
                </button>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Blog Posts Grid */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {filteredPosts.length === 0 ? (
            <div className="text-center py-20">
              <p className="text-xl text-gray-600">
                No articles found. Try adjusting your search or filters.
              </p>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredPosts.map((post, index) => (
                <motion.article
                  key={post.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-shadow duration-300"
                >
                  <div className="relative h-48 overflow-hidden">
                    <img
                      src={post.image}
                      alt={post.title}
                      className="w-full h-full object-cover transition-transform duration-300 hover:scale-110"
                    />
                    <div className="absolute top-4 left-4">
                      <span className="bg-primary text-white px-3 py-1 rounded-full text-sm font-semibold">
                        {post.category}
                      </span>
                    </div>
                  </div>

                  <div className="p-6">
                    <div className="flex items-center text-sm text-gray-500 mb-3 space-x-4">
                      <div className="flex items-center space-x-1">
                        <Calendar className="w-4 h-4" />
                        <span>{post.date}</span>
                      </div>
                      <div className="flex items-center space-x-1">
                        <User className="w-4 h-4" />
                        <span>{post.author}</span>
                      </div>
                    </div>

                    <h3 className="text-xl font-bold mb-3 line-clamp-2">
                      {post.title}
                    </h3>
                    <p className="text-gray-600 mb-4 line-clamp-3">
                      {post.excerpt}
                    </p>

                    <Link
                      href={`/blog/${post.slug}`}
                      className="inline-flex items-center space-x-2 text-primary hover:text-secondary font-semibold transition-colors"
                    >
                      <span>Read More</span>
                      <ArrowRight className="w-4 h-4" />
                    </Link>
                  </div>
                </motion.article>
              ))}
            </div>
          )}
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-dark text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold mb-6">
            Ready to Transform Your <span className="text-primary">Digital Marketing?</span>
          </h2>
          <p className="text-xl text-gray-300 mb-8">
            Let's discuss how we can help you achieve your business goals
          </p>
          <Link
            href="/#contact"
            className="inline-block bg-primary text-white px-8 py-4 rounded-lg font-semibold hover:bg-secondary transition-colors"
          >
            Book a Free Consultation
          </Link>
        </div>
      </section>

      <Footer />
    </main>
  );
}


