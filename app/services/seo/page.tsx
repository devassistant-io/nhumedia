'use client';

import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import MultiStepForm from '@/components/MultiStepForm';
import OtherServices from '@/components/OtherServices';
import { motion } from 'framer-motion';
import { 
  Globe, 
  Target, 
  TrendingUp, 
  Search, 
  FileText,
  BarChart3,
  CheckCircle,
  ArrowRight,
  Zap,
  Link as LinkIcon
} from 'lucide-react';
import Link from 'next/link';

const benefits = [
  {
    icon: Search,
    title: 'Higher Rankings',
    description: 'Improve your position in search engine results pages for relevant keywords.',
  },
  {
    icon: Target,
    title: 'Qualified Traffic',
    description: 'Attract visitors who are actively searching for your products or services.',
  },
  {
    icon: Zap,
    title: 'Long-Term Results',
    description: 'Build sustainable organic visibility that continues to drive traffic over time.',
  },
  {
    icon: TrendingUp,
    title: 'Better Conversions',
    description: 'Turn website visitors into customers with optimized content and user experience.',
  },
];

const process = [
  {
    number: '01',
    title: 'Website Audit',
    description: 'Analyzing your current website structure, content, and technical SEO elements.',
  },
  {
    number: '02',
    title: 'Keyword Research',
    description: 'Identifying the most valuable keywords your target audience is searching for.',
  },
  {
    number: '03',
    title: 'Content Optimization',
    description: 'Adding strategic keyword copy to your web pages while maintaining quality and readability.',
  },
  {
    number: '04',
    title: 'Monitor & Improve',
    description: 'Tracking rankings and performance, making ongoing improvements to maintain visibility.',
  },
];

const features = [
  'Comprehensive website audit',
  'Keyword research and analysis',
  'On-page SEO optimization',
  'Meta tags and descriptions',
  'Content optimization',
  'Internal linking strategy',
  'Performance monitoring',
  'Monthly SEO reports',
];

export default function SEOPage() {
  return (
    <main className="min-h-screen bg-white">
      <Navigation />

      {/* Hero Section */}
      <section className="relative min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-slate-50 via-white to-blue-50 overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(112,155,163,0.08),transparent_50%)]"></div>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_80%,rgba(90,128,137,0.06),transparent_50%)]"></div>
        
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 flex-1 flex items-center">
          {/* Centered Content */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center w-full"
          >
            <div className="inline-flex items-center gap-2 bg-primary/10 px-4 py-2 rounded-full mb-6">
              <Globe className="w-4 h-4 text-primary" />
              <span className="text-sm font-semibold text-primary">Website Search Optimization</span>
            </div>
            
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-extrabold mb-6 tracking-tight">
              Be at the Top of{' '}
              <span className="bg-gradient-to-r from-primary via-secondary to-primary bg-clip-text text-transparent">
                Search Results
              </span>
            </h1>
            
            <p className="text-xl md:text-2xl text-slate-600 leading-relaxed mb-8 max-w-3xl mx-auto">
              We add keyword copy to your web pages so that clicks turn into customers.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="#contact"
                className="inline-flex items-center justify-center gap-2 bg-gradient-to-r from-primary to-secondary text-white px-8 py-4 rounded-xl font-semibold text-lg hover:shadow-lg hover:shadow-primary/25 transition-all duration-300"
              >
                Get Started
                <ArrowRight className="w-5 h-5" />
              </a>
              <Link
                href="/#approach"
                className="inline-flex items-center justify-center gap-2 bg-white text-slate-900 border-2 border-slate-200 px-8 py-4 rounded-xl font-semibold text-lg hover:border-primary hover:text-primary transition-all duration-300"
              >
                Our Process
              </Link>
            </div>
          </motion.div>
        </div>

        {/* Learn More - Animated Arrow */}
        <motion.a
          href="#what-is-seo"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 1 }}
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex flex-col items-center gap-2 text-slate-600 hover:text-primary transition-colors cursor-pointer z-10"
        >
          <span className="text-sm font-medium">Learn More</span>
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
          >
            <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
            </svg>
          </motion.div>
        </motion.a>
      </section>

      {/* What is SEO */}
      <section id="what-is-seo" className="py-20 md:py-32">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-extrabold mb-6">
              What is <span className="text-primary">SEO?</span>
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-primary to-secondary mx-auto mb-8"></div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="prose prose-lg max-w-none"
          >
            <p className="text-xl text-slate-700 leading-relaxed mb-6">
              Search Engine Optimization (SEO) is the practice of optimizing your website to improve its visibility in search engine results pages. When potential customers search for products or services related to your business, SEO helps ensure your website appears prominently in those results.
            </p>
            <p className="text-xl text-slate-700 leading-relaxed mb-6">
              SEO involves strategically incorporating relevant keywords into your website's content, improving site structure, and ensuring technical elements are optimized for search engines. This includes optimizing page titles, meta descriptions, headings, and body content to align with what your target audience is searching for.
            </p>
            <p className="text-xl text-slate-700 leading-relaxed">
              Unlike paid advertising, SEO builds long-term organic visibility. By creating high-quality, keyword-optimized content that provides value to visitors, you attract qualified traffic that's more likely to convert into customers. The result is sustainable growth in website traffic and business leads over time.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Benefits */}
      <section className="py-20 md:py-32 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-extrabold mb-6">
              Why Invest in <span className="text-primary">SEO?</span>
            </h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              Build sustainable organic visibility for your business
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {benefits.map((benefit, index) => (
              <motion.div
                key={benefit.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300"
              >
                <div className="w-14 h-14 bg-primary/10 rounded-xl flex items-center justify-center mb-4">
                  <benefit.icon className="w-7 h-7 text-primary" />
                </div>
                <h3 className="text-xl font-bold mb-3 text-slate-900">{benefit.title}</h3>
                <p className="text-slate-600 leading-relaxed">{benefit.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Our Process */}
      <section className="py-20 md:py-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-extrabold mb-6">
              Our <span className="text-primary">Process</span>
            </h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              A systematic approach to improving your search rankings
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {process.map((step, index) => (
              <motion.div
                key={step.number}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="relative"
              >
                <div className="text-7xl font-extrabold text-slate-100 mb-4">
                  {step.number}
                </div>
                <h3 className="text-2xl font-bold mb-3 text-slate-900">{step.title}</h3>
                <p className="text-slate-600 leading-relaxed">{step.description}</p>
                
                {index < process.length - 1 && (
                  <div className="hidden lg:block absolute top-12 -right-4 w-8 h-0.5 bg-gradient-to-r from-primary to-transparent"></div>
                )}
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mt-16 text-center"
          >
            <Link
              href="/#approach"
              className="inline-flex items-center gap-2 text-primary hover:text-secondary font-semibold text-lg transition-colors"
            >
              Learn more about the FLOURISH Approach
              <ArrowRight className="w-5 h-5" />
            </Link>
          </motion.div>
        </div>
      </section>

      {/* What's Included */}
      <section className="py-20 md:py-32 bg-slate-900 text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.05)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.05)_1px,transparent_1px)] bg-[size:50px_50px] [mask-image:radial-gradient(ellipse_80%_50%_at_50%_50%,black,transparent)]"></div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-extrabold mb-6">
              What's <span className="text-primary">Included</span>
            </h2>
            <p className="text-xl text-slate-300 max-w-3xl mx-auto">
              Comprehensive SEO services to boost your rankings
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {features.map((feature, index) => (
              <motion.div
                key={feature}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.05 }}
                className="flex items-center gap-3"
              >
                <CheckCircle className="w-6 h-6 text-primary flex-shrink-0" />
                <span className="text-slate-200 text-lg">{feature}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Other Services */}
      <OtherServices currentService="seo" />

      {/* CTA + Contact Form */}
      <section id="contact" className="py-20 md:py-32 bg-gradient-to-br from-slate-50 via-white to-blue-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Left Column - CTA */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-4xl md:text-5xl font-extrabold mb-6 tracking-tight">
                Ready to Climb to the Top of{' '}
                <span className="text-primary">Search Results?</span>
              </h2>
              <p className="text-xl text-slate-600 leading-relaxed mb-8">
                Let's discuss how SEO can drive qualified traffic to your website and turn visitors into customers. Fill out the form and we'll get back to you within 24 hours.
              </p>
              
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <CheckCircle className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
                  <div>
                    <p className="font-semibold text-slate-900">Free Consultation</p>
                    <p className="text-slate-600">No obligation, just expert advice</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
                  <div>
                    <p className="font-semibold text-slate-900">Keyword-Optimized Content</p>
                    <p className="text-slate-600">Strategic copy that drives rankings</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
                  <div>
                    <p className="font-semibold text-slate-900">Transparent Pricing</p>
                    <p className="text-slate-600">No hidden fees or surprises</p>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Right Column - Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <MultiStepForm 
                serviceType="Website Search Optimization"
                preselectedService="Website Search Engine Optimization"
              />
            </motion.div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}

