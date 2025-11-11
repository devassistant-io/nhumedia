'use client';

import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import { motion } from 'framer-motion';

export default function TermsOfServicePage() {
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
              Terms of <span className="text-primary">Service</span>
            </h1>
            <p className="text-gray-600 mb-8">Last updated: November 11, 2025</p>

            <div className="bg-white rounded-2xl p-8 md:p-12 shadow-lg space-y-8">
              <section>
                <h2 className="text-3xl font-bold mb-4">Agreement to Terms</h2>
                <p className="text-gray-700 leading-relaxed">
                  By accessing or using Nhu Media Studio's services, you agree to be bound by these Terms of Service. 
                  If you disagree with any part of these terms, you may not access our services.
                </p>
              </section>

              <section>
                <h2 className="text-3xl font-bold mb-4">Services</h2>
                <p className="text-gray-700 leading-relaxed">
                  Nhu Media Studio provides digital marketing services including but not limited to Google Ads management, 
                  social media marketing, content creation, and SEO optimization. The specific services provided will be 
                  outlined in individual service agreements.
                </p>
              </section>

              <section>
                <h2 className="text-3xl font-bold mb-4">User Responsibilities</h2>
                <p className="text-gray-700 leading-relaxed mb-4">
                  When using our services, you agree to:
                </p>
                <ul className="list-disc pl-6 space-y-2 text-gray-700">
                  <li>Provide accurate and complete information</li>
                  <li>Maintain the security of your account credentials</li>
                  <li>Comply with all applicable laws and regulations</li>
                  <li>Not use our services for any unlawful or fraudulent purposes</li>
                  <li>Not interfere with or disrupt our services</li>
                </ul>
              </section>

              <section>
                <h2 className="text-3xl font-bold mb-4">Payment Terms</h2>
                <p className="text-gray-700 leading-relaxed">
                  Payment terms will be specified in individual service agreements. Generally, payments are due as 
                  outlined in your contract. Late payments may result in service suspension and additional fees.
                </p>
              </section>

              <section>
                <h2 className="text-3xl font-bold mb-4">Intellectual Property</h2>
                <p className="text-gray-700 leading-relaxed">
                  All content, materials, and deliverables created by Nhu Media Studio remain our intellectual property 
                  until full payment is received. Upon full payment, agreed-upon rights will be transferred as specified 
                  in the service agreement.
                </p>
              </section>

              <section>
                <h2 className="text-3xl font-bold mb-4">Limitation of Liability</h2>
                <p className="text-gray-700 leading-relaxed">
                  While we strive to deliver excellent results, we cannot guarantee specific outcomes from marketing 
                  campaigns. Our liability is limited to the amount paid for services. We are not liable for indirect, 
                  incidental, or consequential damages.
                </p>
              </section>

              <section>
                <h2 className="text-3xl font-bold mb-4">Service Modifications</h2>
                <p className="text-gray-700 leading-relaxed">
                  We reserve the right to modify or discontinue our services at any time. We will provide reasonable 
                  notice of significant changes that may affect your service agreement.
                </p>
              </section>

              <section>
                <h2 className="text-3xl font-bold mb-4">Termination</h2>
                <p className="text-gray-700 leading-relaxed">
                  Either party may terminate services as outlined in the service agreement. We reserve the right to 
                  terminate services immediately if terms are violated.
                </p>
              </section>

              <section>
                <h2 className="text-3xl font-bold mb-4">Dispute Resolution</h2>
                <p className="text-gray-700 leading-relaxed">
                  Any disputes arising from these terms or our services will be resolved through good faith negotiation. 
                  If negotiation fails, disputes will be handled according to the laws of the jurisdiction where 
                  Nhu Media Studio operates.
                </p>
              </section>

              <section>
                <h2 className="text-3xl font-bold mb-4">Changes to Terms</h2>
                <p className="text-gray-700 leading-relaxed">
                  We may update these Terms of Service from time to time. Continued use of our services after changes 
                  constitutes acceptance of the new terms.
                </p>
              </section>

              <section>
                <h2 className="text-3xl font-bold mb-4">Contact Us</h2>
                <p className="text-gray-700 leading-relaxed">
                  If you have any questions about these Terms of Service, please contact us at:{' '}
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

