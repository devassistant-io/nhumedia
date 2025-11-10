'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { Search, Target, Share2, TrendingUp, Globe, ArrowRight } from 'lucide-react';

const allServices = [
  {
    id: 'google-ads',
    icon: Search,
    title: 'Google Ads',
    description: 'Harness the Power of Google Ads. With Google Ad campaigns that put your business in front of the right audience at the right time.',
    link: '/services/google-ads',
  },
  {
    id: 'bing-ads',
    icon: Target,
    title: 'Bing Ads',
    description: 'Expand your reach with Bing advertising. Tap into a different demographic and maximize your PPC investment across multiple platforms.',
    link: '/services/bing-ads',
  },
  {
    id: 'meta-ads',
    icon: Share2,
    title: 'Meta Ads (Facebook & Instagram)',
    description: 'Leverage Facebook and Instagram Ads. No need to spend a fortune to run ads that boost business and achieve outstanding results.',
    link: '/services/meta-ads',
  },
  {
    id: 'social-media-marketing',
    icon: TrendingUp,
    title: 'Social Media Marketing',
    description: 'Elevate your Online Presence. Specializing in evergreen content creation boosting organic reach that keeps your business relevant and engaging.',
    link: '/services/social-media-marketing',
  },
  {
    id: 'seo',
    icon: Globe,
    title: 'Website Search Optimization',
    description: 'Be at the Top of Search Results. We add keyword copy to your web pages so that clicks turn into customers.',
    link: '/services/seo',
  },
];

interface OtherServicesProps {
  currentService: 'google-ads' | 'bing-ads' | 'meta-ads' | 'social-media-marketing' | 'seo';
}

export default function OtherServices({ currentService }: OtherServicesProps) {
  const otherServices = allServices.filter(service => service.id !== currentService);

  return (
    <section className="py-20 md:py-32 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-extrabold mb-4">
            Explore Our <span className="text-primary">Other Services</span>
          </h2>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto">
            Discover how we can help your business grow with our full range of digital marketing services
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {otherServices.map((service, index) => (
            <motion.div
              key={service.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
            >
              <Link 
                href={service.link}
                className="group block bg-slate-50 rounded-2xl p-8 hover:bg-white hover:shadow-xl transition-all duration-300 border-2 border-transparent hover:border-primary"
              >
                <div className="flex items-start gap-6">
                  <div className="flex-shrink-0 w-14 h-14 bg-primary/10 rounded-xl flex items-center justify-center group-hover:bg-primary group-hover:scale-110 transition-all duration-300">
                    <service.icon className="w-7 h-7 text-primary group-hover:text-white transition-colors" />
                  </div>
                  
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center justify-between mb-3">
                      <h3 className="text-xl font-bold text-slate-900 group-hover:text-primary transition-colors">
                        {service.title}
                      </h3>
                      <ArrowRight className="w-5 h-5 text-slate-400 group-hover:text-primary group-hover:translate-x-1 transition-all flex-shrink-0" />
                    </div>
                    <p className="text-slate-600 leading-relaxed">
                      {service.description}
                    </p>
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mt-12"
        >
          <Link
            href="/#services"
            className="inline-flex items-center gap-2 text-primary hover:text-secondary font-semibold text-lg transition-colors"
          >
            View All Services
            <ArrowRight className="w-5 h-5" />
          </Link>
        </motion.div>
      </div>
    </section>
  );
}

