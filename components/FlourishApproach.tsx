'use client';

import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';

const timeline = [
  {
    month: 1,
    phases: [
      'Research & Discover',
      'Campaign Build',
      'Campaign Pre-Launch Review',
    ],
    description: 'We dive deep into your business, competitors, and target audience to build a solid foundation.',
  },
  {
    month: 2,
    phases: [
      'Algorithm Learning',
      'Ad Optimization',
    ],
    description: 'Your campaigns go live and we let the algorithms learn while making strategic optimizations.',
  },
  {
    month: 3,
    phases: [
      'Performance & Growth Opportunities',
    ],
    description: 'We analyze performance data and identify opportunities to scale your success.',
  },
];

export default function FlourishApproach() {
  return (
    <section id="approach" className="py-32 md:py-40 bg-slate-900 text-white relative overflow-hidden">
      {/* Subtle grid background */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:64px_64px]"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-center mb-24"
        >
          <span className="text-primary text-sm font-medium tracking-wide uppercase mb-4 block">Our Process</span>
          <h2 className="text-5xl md:text-6xl font-extrabold tracking-tight mb-6">
            The <span className="text-primary italic">FLOURISH</span> Approach
          </h2>
          <p className="text-xl text-slate-400 max-w-2xl mx-auto">
            A proven 3-month roadmap to success in pay-per-click advertising.
          </p>
        </motion.div>

        {/* Zigzag Timeline */}
        <div className="relative max-w-6xl mx-auto">
          {/* Connecting Line (Desktop) */}
          <div className="hidden lg:block absolute top-1/2 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary/30 to-transparent"></div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 lg:gap-8">
            {timeline.map((item, index) => (
              <motion.div
                key={item.month}
                initial={{ opacity: 0, y: index % 2 === 0 ? -30 : 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.15, duration: 0.6 }}
                className={`relative ${
                  index % 2 === 0 ? 'lg:mt-0' : 'lg:mt-32'
                }`}
              >
                {/* Month Circle */}
                <div className="flex justify-center mb-6">
                  <div className="relative">
                    <div className="w-20 h-20 rounded-full bg-gradient-to-br from-primary to-secondary flex items-center justify-center shadow-2xl shadow-primary/40 relative z-10">
                      <span className="text-3xl font-extrabold">
                        {item.month}
                      </span>
                    </div>
                    {/* Pulse ring */}
                    <div className="absolute inset-0 rounded-full bg-primary/30 animate-ping"></div>
                    {/* Connection dot */}
                    <div className="hidden lg:block absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-3 h-3 bg-primary rounded-full"></div>
                  </div>
                </div>

                {/* Card */}
                <div className="bg-slate-800/50 backdrop-blur-sm border border-slate-700/50 rounded-2xl p-8 hover:border-primary/50 transition-all duration-500 group hover:transform hover:-translate-y-2 hover:shadow-2xl hover:shadow-primary/10">
                  <h3 className="text-2xl font-bold mb-3 text-white">
                    Month {item.month}
                  </h3>
                  
                  <p className="text-slate-400 text-sm mb-6 leading-relaxed">
                    {item.description}
                  </p>

                  {/* Phases */}
                  <div className="space-y-2.5">
                    {item.phases.map((phase, phaseIndex) => (
                      <div
                        key={phaseIndex}
                        className="flex items-start gap-3"
                      >
                        <div className="w-1.5 h-1.5 rounded-full bg-primary mt-2 flex-shrink-0"></div>
                        <span className="text-sm text-slate-300 leading-tight">
                          <span className="font-semibold text-primary">
                            Phase {index === 0 ? phaseIndex + 1 : index === 1 ? phaseIndex + 4 : 6}:
                          </span>{' '}
                          {phase}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Arrow to next (Desktop only) */}
                {index < timeline.length - 1 && (
                  <div className="hidden lg:block absolute top-1/2 -right-12 transform -translate-y-1/2 z-0">
                    <ArrowRight className="w-6 h-6 text-primary/30" />
                  </div>
                )}
              </motion.div>
            ))}
          </div>
        </div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-24 text-center"
        >
          <div className="inline-block bg-slate-800/50 border border-slate-700 rounded-2xl p-8 backdrop-blur-sm max-w-2xl">
            <p className="text-slate-300 mb-6">
              We recommend a minimum period of 3 months so that our strategies have time to be thoroughly tested and optimized.
            </p>
            <a
              href="#contact"
              className="inline-flex items-center gap-3 bg-gradient-to-r from-primary to-secondary text-white px-8 py-4 rounded-xl font-semibold hover:shadow-xl hover:shadow-primary/30 transition-all duration-300 hover:scale-105"
            >
              <span>Start Your Journey</span>
              <ArrowRight className="w-5 h-5" />
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
