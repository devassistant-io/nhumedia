'use client';

import { motion } from 'framer-motion';
import { Calendar, Clock, Video } from 'lucide-react';
import MultiStepForm from './MultiStepForm';

export default function CalendlySection() {
  return (
    <section id="contact" className="py-20 md:py-32 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Ready to <span className="text-primary">Level Up</span> Your
            Marketing?
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Book a free 30-minute marketing consultation and discover how we can
            help you achieve your business goals.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Column - Benefits */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <div className="flex items-start space-x-4">
              <div className="flex-shrink-0 w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                <Calendar className="w-6 h-6 text-primary" />
              </div>
              <div>
                <h3 className="text-xl font-bold mb-2">Free Strategy Session</h3>
                <p className="text-gray-600">
                  Get expert insights tailored to your business without any
                  commitment.
                </p>
              </div>
            </div>

            <div className="flex items-start space-x-4">
              <div className="flex-shrink-0 w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                <Clock className="w-6 h-6 text-primary" />
              </div>
              <div>
                <h3 className="text-xl font-bold mb-2">Just 30 Minutes</h3>
                <p className="text-gray-600">
                  A quick call to understand your needs and explore opportunities
                  for growth.
                </p>
              </div>
            </div>

            <div className="flex items-start space-x-4">
              <div className="flex-shrink-0 w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                <Video className="w-6 h-6 text-primary" />
              </div>
              <div>
                <h3 className="text-xl font-bold mb-2">Virtual Meetings</h3>
                <p className="text-gray-600">
                  Convenient online meetings via Zoom or your preferred video platform.
                </p>
              </div>
            </div>

            <div className="pt-6">
              <p className="text-gray-600 leading-relaxed">
                <span className="font-bold text-dark">What to expect:</span> We'll
                discuss your current marketing efforts, identify gaps and
                opportunities, and provide actionable recommendations to improve
                your results.
              </p>
            </div>
          </motion.div>

          {/* Right Column - Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <MultiStepForm />
          </motion.div>
        </div>
      </div>
    </section>
  );
}


