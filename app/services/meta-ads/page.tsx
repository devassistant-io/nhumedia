'use client';

import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import MultiStepForm from '@/components/MultiStepForm';
import OtherServices from '@/components/OtherServices';
import { motion } from 'framer-motion';
import { 
  Share2, 
  Target, 
  TrendingUp, 
  Users, 
  Eye,
  BarChart3,
  CheckCircle,
  ArrowRight,
  Heart,
  Image as ImageIcon
} from 'lucide-react';
import Link from 'next/link';

const benefits = [
  {
    icon: Users,
    title: 'Massive Audience',
    description: 'Access billions of active users across Facebook and Instagram platforms worldwide.',
  },
  {
    icon: Target,
    title: 'Advanced Targeting',
    description: 'Target users by demographics, interests, behaviors, and custom audiences with precision.',
  },
  {
    icon: ImageIcon,
    title: 'Visual Storytelling',
    description: 'Engage audiences with eye-catching images, videos, and carousel ads that drive action.',
  },
  {
    icon: Heart,
    title: 'Social Engagement',
    description: 'Build brand awareness and drive engagement through likes, shares, and comments.',
  },
];

const process = [
  {
    number: '01',
    title: 'Audience Research',
    description: 'Identifying your ideal customers and understanding their behaviors on social platforms.',
  },
  {
    number: '02',
    title: 'Creative Development',
    description: 'Designing compelling ad visuals and copy that resonate with your target audience.',
  },
  {
    number: '03',
    title: 'Campaign Launch',
    description: 'Setting up targeted campaigns across Facebook and Instagram with optimized settings.',
  },
  {
    number: '04',
    title: 'Test & Refine',
    description: 'Continuously testing ad variations and refining targeting for better performance.',
  },
];

const features = [
  'Audience research and targeting',
  'Ad creative design guidance',
  'Campaign structure setup',
  'Budget allocation strategy',
  'A/B testing implementation',
  'Performance tracking',
  'Monthly reporting',
  'Ongoing optimization',
];

export default function MetaAdsPage() {
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
              <Share2 className="w-4 h-4 text-primary" />
              <span className="text-sm font-semibold text-primary">Meta Ads Management</span>
            </div>
            
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-extrabold mb-6 tracking-tight">
              Leverage{' '}
              <span className="bg-gradient-to-r from-primary via-secondary to-primary bg-clip-text text-transparent">
                Facebook & Instagram Ads
              </span>
            </h1>
            
            <p className="text-xl md:text-2xl text-slate-600 leading-relaxed mb-8 max-w-3xl mx-auto">
              No need to spend a fortune to run ads that boost business and achieve outstanding results.
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
          href="#what-is-meta-ads"
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

      {/* What is Meta Ads */}
      <section id="what-is-meta-ads" className="py-20 md:py-32">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-extrabold mb-6">
              What are <span className="text-primary">Meta Ads?</span>
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
              Meta Ads (formerly Facebook Ads) is the advertising platform for Facebook, Instagram, Messenger, and the Audience Network. It allows businesses to create and display ads to highly targeted audiences across Meta's family of apps and services.
            </p>
            <p className="text-xl text-slate-700 leading-relaxed mb-6">
              With over 3 billion monthly active users across Facebook and Instagram combined, Meta Ads provides unparalleled reach and targeting capabilities. The platform uses detailed user data to help advertisers reach specific demographics, interests, behaviors, and custom audiences.
            </p>
            <p className="text-xl text-slate-700 leading-relaxed">
              Meta Ads excels at visual storytelling with formats including image ads, video ads, carousel ads, stories ads, and more. Whether you're looking to build brand awareness, drive website traffic, or generate sales, Meta's advertising platform offers flexible solutions to meet your goals.
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
              Why Choose <span className="text-primary">Meta Ads?</span>
            </h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              Connect with your audience where they spend their time
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
              A strategic approach to Meta Ads success
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
              Comprehensive Meta Ads management services
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
      <OtherServices currentService="meta-ads" />

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
                Ready to Boost Your Business with{' '}
                <span className="text-primary">Meta Ads?</span>
              </h2>
              <p className="text-xl text-slate-600 leading-relaxed mb-8">
                Let's discuss how Facebook and Instagram advertising can help you reach your ideal customers. Fill out the form and we'll get back to you within 24 hours.
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
                    <p className="font-semibold text-slate-900">Visual Strategy</p>
                    <p className="text-slate-600">Eye-catching ads that drive engagement</p>
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
                serviceType="Meta Ads"
                preselectedService="Meta Ad Campaigns (Facebook/Instagram)"
              />
            </motion.div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}

