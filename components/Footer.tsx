'use client';

import Link from 'next/link';
import Image from 'next/image';
import { Facebook, Instagram, Linkedin, Mail } from 'lucide-react';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-dark text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Company Info */}
          <div>
            <div className="flex items-center gap-3 mb-4">
              <Image
                src="/logo.png"
                alt="Nhu Media Studio Logo"
                width={48}
                height={48}
                className="w-12 h-12"
              />
              <div className="flex items-center whitespace-nowrap">
                <span className="text-xl md:text-2xl font-extrabold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent tracking-tight">
                  NHU MEDIA
                </span>
                <span className="text-xl md:text-2xl font-extrabold text-slate-900 ml-2">
                  STUDIO
                </span>
              </div>
            </div>
            <p className="text-gray-400 mb-6">
              Canadian digital marketing agency specializing in Google Ads that
              deliver results.
            </p>
            <div className="flex space-x-4">
              <a
                href="https://www.facebook.com/nhumediastudio"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-primary transition-colors"
              >
                <Facebook className="w-5 h-5" />
              </a>
              <a
                href="https://www.instagram.com/nhumediastudio/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-primary transition-colors"
              >
                <Instagram className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-lg font-bold mb-4 text-slate-900">Services</h4>
            <ul className="space-y-2">
              <li>
                <Link
                  href="/services/google-ads"
                  className="text-gray-400 hover:text-primary transition-colors"
                >
                  Google Ads
                </Link>
              </li>
              <li>
                <Link
                  href="/services/bing-ads"
                  className="text-gray-400 hover:text-primary transition-colors"
                >
                  Bing Ads
                </Link>
              </li>
              <li>
                <Link
                  href="/services/meta-ads"
                  className="text-gray-400 hover:text-primary transition-colors"
                >
                  Meta Ads
                </Link>
              </li>
              <li>
                <Link
                  href="/services/social-media-marketing"
                  className="text-gray-400 hover:text-primary transition-colors"
                >
                  Social Media Marketing
                </Link>
              </li>
              <li>
                <Link
                  href="/services/seo"
                  className="text-gray-400 hover:text-primary transition-colors"
                >
                  Website SEO
                </Link>
              </li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="text-lg font-bold mb-4 text-slate-900">Company</h4>
            <ul className="space-y-2">
              <li>
                <Link
                  href="/#approach"
                  className="text-gray-400 hover:text-primary transition-colors"
                >
                  Our Approach
                </Link>
              </li>
              <li>
                <Link
                  href="/about"
                  className="text-gray-400 hover:text-primary transition-colors"
                >
                  About Us
                </Link>
              </li>
              <li>
                <Link
                  href="/blog"
                  className="text-gray-400 hover:text-primary transition-colors"
                >
                  Blog
                </Link>
              </li>
              <li>
                <Link
                  href="/#contact"
                  className="text-gray-400 hover:text-primary transition-colors"
                >
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-lg font-bold mb-4 text-slate-900">Get In Touch</h4>
            <ul className="space-y-4">
              <li className="flex items-start space-x-3">
                <Mail className="w-5 h-5 text-primary flex-shrink-0 mt-1" />
                <a
                  href="mailto:nhumediastudio@gmail.com"
                  className="text-gray-400 hover:text-primary transition-colors"
                >
                  nhumediastudio@gmail.com
                </a>
              </li>
            </ul>
            <div className="mt-6">
              <Link
                href="/#contact"
                className="inline-block bg-primary text-white px-6 py-3 rounded-lg font-semibold hover:bg-secondary transition-colors"
              >
                Work With Us
              </Link>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-sm">
            <div className="flex flex-wrap items-center justify-center md:justify-start gap-4">
              <p className="text-gray-400">
                © {currentYear} Nhu Media Studio. All rights reserved.
              </p>
              <div className="flex items-center gap-4">
                <Link
                  href="/privacy-policy"
                  className="text-gray-400 hover:text-primary transition-colors"
                >
                  Privacy Policy
                </Link>
                <span className="text-gray-600">|</span>
                <Link
                  href="/terms-of-service"
                  className="text-gray-400 hover:text-primary transition-colors"
                >
                  Terms of Service
                </Link>
                <span className="text-gray-600">|</span>
                <span className="text-gray-500">
                  Powered by{' '}
                  <a 
                    href="https://zerasoftwarestudio.com" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="hover:text-primary transition-colors"
                  >
                    Zera Software Studio
                  </a>
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}


