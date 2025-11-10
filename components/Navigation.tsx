'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Menu, X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { href: '/#services', label: 'Services' },
    { href: '/#approach', label: 'Our Approach' },
    { href: '/about', label: 'About' },
    { href: '/blog', label: 'Blog' },
    { href: '/#contact', label: 'Contact' },
  ];

  return (
    <nav
      className={`fixed w-full z-50 transition-all duration-500 ${
        isScrolled
          ? 'bg-white/80 backdrop-blur-xl shadow-lg shadow-slate-900/5 py-4 border-b border-slate-200/50'
          : 'bg-transparent py-6'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-3 group">
            <Image
              src="/logo.png"
              alt="Nhu Media Studio Logo"
              width={50}
              height={50}
              className="w-10 h-10 md:w-12 md:h-12"
            />
            <div className="flex items-center">
              <span className="text-2xl md:text-3xl font-extrabold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent tracking-tight">
                NHU MEDIA
              </span>
              <span className="text-2xl md:text-3xl font-extrabold text-slate-900 ml-2">
                STUDIO
              </span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-1">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-slate-700 hover:text-primary transition-all duration-300 font-medium px-4 py-2 rounded-lg hover:bg-primary/5"
              >
                {link.label}
              </Link>
            ))}
            <Link
              href="/#contact"
              className="ml-4 bg-gradient-to-r from-primary to-secondary text-white px-6 py-2.5 rounded-xl font-semibold hover:shadow-lg hover:shadow-primary/25 transition-all duration-300 hover:scale-105"
            >
              Work With Us
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden text-dark hover:text-primary transition-colors"
            aria-label="Toggle menu"
          >
            {isOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              className="md:hidden mt-4 pb-4"
            >
              <div className="flex flex-col space-y-4">
                {navLinks.map((link) => (
                  <Link
                    key={link.href}
                    href={link.href}
                    onClick={() => setIsOpen(false)}
                    className="text-dark hover:text-primary transition-colors font-medium py-2"
                  >
                    {link.label}
                  </Link>
                ))}
                <Link
                  href="/#contact"
                  onClick={() => setIsOpen(false)}
                  className="bg-primary text-white px-6 py-3 rounded-lg font-semibold hover:bg-secondary transition-colors text-center"
                >
                  Work With Us
                </Link>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </nav>
  );
}

