'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import MultiStepForm from './MultiStepForm';

export default function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-24 pb-16 bg-gradient-to-br from-slate-50 via-white to-blue-50">
      {/* Premium Background Elements */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(112,155,163,0.08),transparent_50%)]"></div>
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_80%,rgba(90,128,137,0.06),transparent_50%)]"></div>
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-primary/20 to-transparent"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Left Column - Text Content */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="space-y-8"
          >
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-extrabold leading-[1.1] tracking-tight">
              Marketing Services,{' '}
              <span className="bg-gradient-to-r from-primary via-secondary to-primary bg-clip-text text-transparent">
                Custom To Your Business
              </span>
            </h1>

            <p className="text-xl md:text-2xl text-slate-600 leading-relaxed font-light">
              We don't run just ads, we get your business{' '}
              <span className="font-semibold text-slate-900 relative inline-block">
                seen
                <span className="absolute bottom-0 left-0 w-full h-1 bg-primary/20"></span>
              </span>. Be at the top of search results and everywhere on social media.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <a
                href="#services"
                className="group relative bg-gradient-to-r from-primary to-secondary text-white px-8 py-4 rounded-xl font-semibold text-center text-lg shadow-lg shadow-primary/25 hover:shadow-xl hover:shadow-primary/30 transition-all duration-300 overflow-hidden"
              >
                <span className="relative z-10">Explore Our Services</span>
                <div className="absolute inset-0 bg-gradient-to-r from-secondary to-primary opacity-0 group-hover:opacity-100 transition-opacity"></div>
              </a>
              <a
                href="#approach"
                className="group bg-white text-slate-900 border-2 border-slate-200 px-8 py-4 rounded-xl font-semibold hover:border-primary hover:text-primary transition-all duration-300 text-center text-lg shadow-sm hover:shadow-md"
              >
                Our Process
              </a>
            </div>
          </motion.div>

          {/* Right Column - Form */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
          >
            <MultiStepForm />
          </motion.div>
        </div>
      </div>

      {/* Premium Decorative Grid */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(112,155,163,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(112,155,163,0.03)_1px,transparent_1px)] bg-[size:100px_100px] [mask-image:radial-gradient(ellipse_80%_50%_at_50%_50%,black,transparent)] -z-10"></div>
    </section>
  );
}

