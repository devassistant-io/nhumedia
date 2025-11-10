'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown } from 'lucide-react';

const faqs = [
  {
    question: 'What Digital Marketing services do you offer?',
    answer:
      'We offer Search Engine Optimization, Facebook Advertising, Instagram Advertising, Google Ads, Bing Ads, Content Strategy, Content Creation, Copywriting, Social Media Content Creation and Social Media Community Management.',
  },
  {
    question: 'What is Digital Growth Marketing?',
    answer:
      'Growth marketing involves failing fast. With growth marketing, we experiment with techniques and strategies, identify what is working and ditch the tactics that are eating up your time and budget. We are constantly adjusting your strategy to maximize results.',
  },
  {
    question: 'What type of clients do you work with?',
    answer:
      'We work with businesses of all sizes from start-ups to well established brands. We are an agency for most but not all. We look for clients that are servicing an established market with known demand and are ready to scale their digital presence.',
  },
  {
    question: 'Can I get a quote for my project?',
    answer:
      'Of course! We would love nothing more than to earn your business and have the opportunity to help you achieve your goals. To provide you with a proper quote, we will need to discuss your goals and which service(s) you\'re interested in. We encourage you to shop around and get estimates from other agencies as well.',
  },
  {
    question: 'Can you take over my existing campaigns?',
    answer:
      'Yes! We will conduct an audit of your current campaigns and identify what has already been done, what is working and what is not. We will share a plan of updates and changes that need to be done to achieve your goals. We\'re happy to work with you no matter what service you\'re looking for!',
  },
  {
    question: 'Do you have minimum terms?',
    answer:
      'We do not have minimum terms, but we do recommend a minimum period of 3 months so that our strategies have time to be thoroughly tested and optimized for maximum performance.',
  },
  {
    question: 'Do you guarantee results?',
    answer:
      'We cannot guarantee specific rankings or outcomes. Digital marketing success is influenced by many factors, including your online activity, customer service process, and competitor actions, which we have no control over. We are committed to transparency and will always be straightforward with you about how our strategies are performing.',
  },
  {
    question: 'How long does it take to see results?',
    answer:
      'With paid advertising (Google Ads, Facebook Ads), you can start seeing traffic within days. However, optimizing for the best ROI typically takes 2-3 months as algorithms learn and we refine targeting. For SEO, meaningful results usually take 3-6 months as we build authority and rankings.',
  },
];

export default function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="py-20 md:py-32 bg-gray-50">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Have More <span className="text-primary">Questions?</span>
          </h2>
          <p className="text-xl text-gray-600">We Have the Answers</p>
        </motion.div>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.05 }}
            >
              <button
                onClick={() => toggleFAQ(index)}
                className="w-full bg-white rounded-2xl p-6 shadow-md hover:shadow-lg transition-shadow duration-300 text-left"
              >
                <div className="flex justify-between items-center">
                  <h3 className="text-lg md:text-xl font-bold pr-8">
                    {faq.question}
                  </h3>
                  <motion.div
                    animate={{ rotate: openIndex === index ? 180 : 0 }}
                    transition={{ duration: 0.3 }}
                    className="flex-shrink-0"
                  >
                    <ChevronDown className="w-6 h-6 text-primary" />
                  </motion.div>
                </div>

                <AnimatePresence>
                  {openIndex === index && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3 }}
                      className="overflow-hidden"
                    >
                      <p className="text-gray-600 mt-4 leading-relaxed">
                        {faq.answer}
                      </p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </button>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mt-12"
        >
          <p className="text-gray-600 mb-6">Still have questions?</p>
          <a
            href="#contact"
            className="inline-block bg-primary text-white px-8 py-4 rounded-lg font-semibold hover:bg-secondary transition-colors"
          >
            Get in Touch
          </a>
        </motion.div>
      </div>
    </section>
  );
}


