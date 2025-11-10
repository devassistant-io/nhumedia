'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';

const trustedBrands = [
  { name: 'Absolut', logo: '/logos/absolut.webp' },
  { name: 'Adecco', logo: '/logos/adecco.webp' },
  { name: 'AWS', logo: '/logos/aws.webp' },
  { name: 'Bell', logo: '/logos/bell.webp' },
  { name: 'Bitbuy', logo: '/logos/bitbuy.webp' },
  { name: 'Discovery Channel', logo: '/logos/discovery_channel.webp' },
  { name: 'GSK', logo: '/logos/gsk.webp' },
  { name: 'Marriott', logo: '/logos/marriott.webp' },
  { name: 'Panasonic', logo: '/logos/panasonic.webp' },
  { name: 'PwC', logo: '/logos/pwc_pricewaterhousecoopers_symbol.webp' },
  { name: 'RE/MAX', logo: '/logos/remax_logo.webp' },
  { name: 'Rogers', logo: '/logos/rogers.webp' },
  { name: 'Salvation Army', logo: '/logos/salvation_army.webp' },
  { name: 'Scene', logo: '/logos/scene.webp' },
  { name: 'Scotiabank', logo: '/logos/scotiabank_logo.webp' },
  { name: 'SickKids', logo: '/logos/sickkids.webp' },
  { name: 'Subaru', logo: '/logos/subaru.webp' },
  { name: 'Valvoline', logo: '/logos/valvoline.webp' },
];

export default function TrustBar() {
  return (
    <section className="py-8 bg-white border-y border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-center mb-6"
        >
          <p className="text-sm font-semibold text-slate-500 uppercase tracking-wider">
            Trusted by Leading Brands
          </p>
        </motion.div>

        {/* Infinite Carousel */}
        <div className="relative overflow-hidden">
          <div className="trust-bar-fade">
            <div
              className="infinite-trust-bar"
              style={{
                display: 'flex',
                gap: '4rem',
                alignItems: 'center',
                animation: 'infiniteTrustBar 60s linear infinite',
                width: 'fit-content',
              }}
            >
              {/* First set of logos */}
              {trustedBrands.map((brand, index) => (
                <div
                  key={`set1-${index}`}
                  className="flex-shrink-0 grayscale hover:grayscale-0 transition-all duration-300 opacity-60 hover:opacity-100"
                  style={{ width: '160px', height: '70px' }}
                >
                  <div className="w-full h-full flex items-center justify-center px-4">
                    <Image
                      src={brand.logo}
                      alt={`${brand.name} logo`}
                      width={160}
                      height={70}
                      className="object-contain w-full h-full"
                    />
                  </div>
                </div>
              ))}

              {/* Duplicate set for seamless loop */}
              {trustedBrands.map((brand, index) => (
                <div
                  key={`set2-${index}`}
                  className="flex-shrink-0 grayscale hover:grayscale-0 transition-all duration-300 opacity-60 hover:opacity-100"
                  style={{ width: '160px', height: '70px' }}
                >
                  <div className="w-full h-full flex items-center justify-center px-4">
                    <Image
                      src={brand.logo}
                      alt={`${brand.name} logo`}
                      width={160}
                      height={70}
                      className="object-contain w-full h-full"
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

