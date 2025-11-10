'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { Search, Target, Share2, TrendingUp, Globe } from 'lucide-react';

const services = [
  {
    icon: Search,
    title: 'Google Ads',
    description: 'Harness the Power of Google Ads. With Google Ad campaigns that put your business in front of the right audience at the right time.',
    color: 'bg-blue-100',
    iconColor: 'text-blue-600',
    link: '/services/google-ads',
  },
  {
    icon: Target,
    title: 'Bing Ads',
    description: 'Expand your reach with Bing advertising. Tap into a different demographic and maximize your PPC investment across multiple platforms.',
    color: 'bg-green-100',
    iconColor: 'text-green-600',
    link: '/services/bing-ads',
  },
  {
    icon: Share2,
    title: 'Meta Ads (Facebook & Instagram)',
    description: 'Leverage Facebook and Instagram Ads. No need to spend a fortune to run dark ads that boost business and achieve outstanding results.',
    color: 'bg-purple-100',
    iconColor: 'text-purple-600',
    link: '/services/meta-ads',
  },
  {
    icon: TrendingUp,
    title: 'Social Media Marketing',
    description: 'Elevate your Online Presence. Specializing in evergreen content creation boosting organic reach that keeps your business relevant and engaging.',
    color: 'bg-pink-100',
    iconColor: 'text-pink-600',
    link: '/services/social-media-marketing',
  },
  {
    icon: Globe,
    title: 'Website Search Optimization',
    description: 'Be at the Top of Search Results. We add keyword copy to your web pages so that clicks turn into customers.',
    color: 'bg-yellow-100',
    iconColor: 'text-yellow-600',
    link: '/services/seo',
  },
];

export default function ServicesSection() {
  return (
    <section id="services" className="py-32 md:py-40 relative overflow-hidden bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Minimal Header */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="mb-24"
        >
          <span className="text-primary/60 text-sm font-medium tracking-wide uppercase mb-4 block">What We Do</span>
          <h2 className="text-5xl md:text-6xl font-extrabold tracking-tight max-w-4xl">
            We get your business <span className="italic text-primary">seen</span>.
          </h2>
        </motion.div>

        {/* Clean List Layout */}
        <div className="space-y-px border-t border-slate-200">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.05 }}
              className="group relative border-b border-slate-200 py-12 hover:bg-slate-50/50 transition-all duration-300"
            >
              <div className="grid md:grid-cols-12 gap-8 items-center">
                {/* Number */}
                <div className="md:col-span-1">
                  <span className="text-6xl font-bold text-slate-200 group-hover:text-primary/20 transition-colors">
                    0{index + 1}
                  </span>
                </div>

                {/* Service Name */}
                <div className="md:col-span-4">
                  <h3 className="text-2xl md:text-3xl font-bold text-slate-900 group-hover:text-primary transition-colors">
                    {service.title}
                  </h3>
                </div>

                {/* Description */}
                <div className="md:col-span-6">
                  <p className="text-slate-600 leading-relaxed">
                    {service.description}
                  </p>
                </div>

                {/* Arrow */}
                <div className="md:col-span-1 flex justify-end">
                  {service.link ? (
                    <Link href={service.link}>
                      <div className="w-12 h-12 rounded-full border-2 border-slate-200 group-hover:border-primary group-hover:bg-primary flex items-center justify-center transition-all duration-300 group-hover:scale-110 cursor-pointer">
                        <svg className="w-5 h-5 text-slate-400 group-hover:text-white transition-colors" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                        </svg>
                      </div>
                    </Link>
                  ) : (
                    <div className="w-12 h-12 rounded-full border-2 border-slate-200 group-hover:border-primary group-hover:bg-primary flex items-center justify-center transition-all duration-300 group-hover:scale-110">
                      <svg className="w-5 h-5 text-slate-400 group-hover:text-white transition-colors" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                      </svg>
                    </div>
                  )}
                </div>
              </div>

              {/* Hover Line */}
              <div className="absolute bottom-0 left-0 h-0.5 bg-primary w-0 group-hover:w-full transition-all duration-500"></div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

