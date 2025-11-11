'use client';

import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import { motion } from 'framer-motion';

export default function PrivacyPolicyPage() {
  return (
    <main className="min-h-screen bg-gray-50">
      <Navigation />

      <section className="pt-32 pb-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
          >
            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              Privacy <span className="text-primary">Policy</span>
            </h1>
            <p className="text-gray-600 mb-8">Last updated: November 11, 2025</p>

            <div className="bg-white rounded-2xl p-8 md:p-12 shadow-lg space-y-8">
              <section>
                <h2 className="text-3xl font-bold mb-4">Introduction</h2>
                <p className="text-gray-700 leading-relaxed">
                  At Nhu Media Studio, we take your privacy seriously. This Privacy Policy explains how we collect, 
                  use, disclose, and safeguard your information when you visit our website or use our services.
                </p>
              </section>

              <section>
                <h2 className="text-3xl font-bold mb-4">Information We Collect</h2>
                <p className="text-gray-700 leading-relaxed mb-4">
                  We collect information that you provide directly to us, including:
                </p>
                <ul className="list-disc pl-6 space-y-2 text-gray-700">
                  <li>Name and contact information (email address, phone number)</li>
                  <li>Business information</li>
                  <li>Communications you send to us</li>
                  <li>Information about your preferences and interests</li>
                </ul>
              </section>

              <section>
                <h2 className="text-3xl font-bold mb-4">How We Use Your Information</h2>
                <p className="text-gray-700 leading-relaxed mb-4">
                  We use the information we collect to:
                </p>
                <ul className="list-disc pl-6 space-y-2 text-gray-700">
                  <li>Provide, maintain, and improve our services</li>
                  <li>Respond to your inquiries and requests</li>
                  <li>Send you marketing communications (with your consent)</li>
                  <li>Analyze usage trends and preferences</li>
                  <li>Protect against fraudulent or illegal activity</li>
                </ul>
              </section>

              <section>
                <h2 className="text-3xl font-bold mb-4">Information Sharing</h2>
                <p className="text-gray-700 leading-relaxed">
                  We do not sell, trade, or rent your personal information to third parties. We may share your 
                  information with trusted service providers who assist us in operating our website and conducting 
                  our business, as long as they agree to keep this information confidential.
                </p>
              </section>

              <section>
                <h2 className="text-3xl font-bold mb-4">Data Security</h2>
                <p className="text-gray-700 leading-relaxed">
                  We implement appropriate technical and organizational measures to protect your personal information 
                  against unauthorized access, alteration, disclosure, or destruction.
                </p>
              </section>

              <section>
                <h2 className="text-3xl font-bold mb-4">Your Rights</h2>
                <p className="text-gray-700 leading-relaxed mb-4">
                  You have the right to:
                </p>
                <ul className="list-disc pl-6 space-y-2 text-gray-700">
                  <li>Access the personal information we hold about you</li>
                  <li>Request correction of inaccurate information</li>
                  <li>Request deletion of your information</li>
                  <li>Opt-out of marketing communications</li>
                </ul>
              </section>

              <section>
                <h2 className="text-3xl font-bold mb-4">Cookies</h2>
                <p className="text-gray-700 leading-relaxed">
                  Our website may use cookies to enhance your browsing experience. You can choose to disable cookies 
                  through your browser settings, but this may affect your ability to use certain features of our website.
                </p>
              </section>

              <section>
                <h2 className="text-3xl font-bold mb-4">Changes to This Policy</h2>
                <p className="text-gray-700 leading-relaxed">
                  We may update this Privacy Policy from time to time. We will notify you of any changes by posting 
                  the new Privacy Policy on this page and updating the "Last updated" date.
                </p>
              </section>

              <section>
                <h2 className="text-3xl font-bold mb-4">Contact Us</h2>
                <p className="text-gray-700 leading-relaxed">
                  If you have any questions about this Privacy Policy, please contact us at:{' '}
                  <a href="mailto:nhumediastudio@gmail.com" className="text-primary hover:text-secondary underline">
                    nhumediastudio@gmail.com
                  </a>
                </p>
              </section>
            </div>
          </motion.div>
        </div>
      </section>

      <Footer />
    </main>
  );
}

