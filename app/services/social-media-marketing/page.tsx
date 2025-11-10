'use client';

import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import MultiStepForm from '@/components/MultiStepForm';
import OtherServices from '@/components/OtherServices';
import { motion } from 'framer-motion';
import { 
  TrendingUp, 
  Target, 
  Users, 
  Calendar,
  MessageSquare,
  BarChart3,
  CheckCircle,
  ArrowRight,
  Sparkles,
  Heart
} from 'lucide-react';
import Link from 'next/link';

const benefits = [
  {
    icon: Users,
    title: 'Build Community',
    description: 'Foster meaningful connections with your audience and create a loyal following.',
  },
  {
    icon: Sparkles,
    title: 'Evergreen Content',
    description: 'Create timeless content that continues to deliver value and engagement long-term.',
  },
  {
    icon: TrendingUp,
    title: 'Organic Growth',
    description: 'Grow your reach naturally without relying solely on paid advertising.',
  },
  {
    icon: Heart,
    title: 'Brand Personality',
    description: 'Showcase your brand\'s unique voice and connect authentically with your audience.',
  },
];

const process = [
  {
    number: '01',
    title: 'Brand Analysis',
    description: 'Understanding your brand voice, values, and target audience to create aligned content.',
  },
  {
    number: '02',
    title: 'Content Strategy',
    description: 'Developing a content calendar with evergreen posts that resonate with your audience.',
  },
  {
    number: '03',
    title: 'Creation & Publishing',
    description: 'Crafting and scheduling high-quality content across your social media platforms.',
  },
  {
    number: '04',
    title: 'Engage & Optimize',
    description: 'Monitoring engagement, responding to your community, and refining strategy.',
  },
];

const features = [
  'Content calendar planning',
  'Evergreen post creation',
  'Hashtag research and strategy',
  'Visual content design',
  'Caption and copy writing',
  'Community engagement',
  'Performance analytics',
  'Monthly strategy reviews',
];

export default function SocialMediaMarketingPage() {
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
              <TrendingUp className="w-4 h-4 text-primary" />
              <span className="text-sm font-semibold text-primary">Social Media Marketing</span>
            </div>
            
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-extrabold mb-6 tracking-tight">
              Elevate Your{' '}
              <span className="bg-gradient-to-r from-primary via-secondary to-primary bg-clip-text text-transparent">
                Online Presence
              </span>
            </h1>
            
            <p className="text-xl md:text-2xl text-slate-600 leading-relaxed mb-8 max-w-3xl mx-auto">
              Specializing in evergreen content creation boosting organic reach that keeps your business relevant and engaging.
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
          href="#what-is-social-media-marketing"
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

      {/* What is Social Media Marketing */}
      <section id="what-is-social-media-marketing" className="py-20 md:py-32">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-extrabold mb-6">
              What is <span className="text-primary">Social Media Marketing?</span>
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
              Social Media Marketing is the practice of using social media platforms to connect with your audience, build your brand, and drive business growth through organic content. Unlike paid advertising, it focuses on creating valuable content that resonates with your followers and encourages genuine engagement.
            </p>
            <p className="text-xl text-slate-700 leading-relaxed mb-6">
              Effective social media marketing involves consistent posting, community engagement, and creating content that your audience wants to share. Evergreen content—posts that remain relevant and valuable over time—forms the backbone of a successful social media strategy, continuing to attract and engage new followers long after publication.
            </p>
            <p className="text-xl text-slate-700 leading-relaxed">
              By maintaining an active and authentic presence on social platforms like Facebook, Instagram, LinkedIn, and Twitter, businesses can humanize their brand, establish thought leadership, and build lasting relationships with customers. The key is consistency, quality, and genuine interaction with your community.
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
              Why Invest in <span className="text-primary">Social Media Marketing?</span>
            </h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              Build lasting connections and grow your brand organically
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
              A thoughtful approach to social media success
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
              Comprehensive social media management services
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
      <OtherServices currentService="social-media-marketing" />

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
                Ready to Elevate Your{' '}
                <span className="text-primary">Social Media Presence?</span>
              </h2>
              <p className="text-xl text-slate-600 leading-relaxed mb-8">
                Let's discuss how strategic social media marketing can help you build a loyal community and grow organically. Fill out the form and we'll get back to you within 24 hours.
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
                    <p className="font-semibold text-slate-900">Evergreen Strategy</p>
                    <p className="text-slate-600">Content that keeps working for you</p>
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
                serviceType="Social Media Marketing"
                preselectedService="Social Media Content Creation & Management"
              />
            </motion.div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}

