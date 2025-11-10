'use client';

export function StructuredData() {
  // Local Business / Digital Marketing Agency Schema
  const localBusinessSchema = {
    '@context': 'https://schema.org',
    '@type': 'ProfessionalService',
    '@id': 'https://nhumediastudio.com/#organization',
    name: 'Nhu Media Studio',
    legalName: 'Nhu Media Studio',
    url: 'https://nhumediastudio.com',
    logo: {
      '@type': 'ImageObject',
      url: 'https://nhumediastudio.com/logo.png',
      width: '500',
      height: '500',
    },
    description:
      'Canadian digital marketing agency specializing in Google Ads that deliver results. We drive online growth for businesses through PPC, SEO, and social media marketing.',
    image: 'https://nhumediastudio.com/logo.png',
    email: 'nhumediastudio@gmail.com',
    priceRange: '$$',
    paymentAccepted: ['Credit Card', 'Debit Card', 'Bank Transfer'],
    currenciesAccepted: 'CAD',
    address: {
      '@type': 'PostalAddress',
      addressLocality: 'Ontario',
      addressRegion: 'ON',
      addressCountry: 'CA',
    },
    areaServed: {
      '@type': 'Country',
      name: 'Canada',
    },
    sameAs: [
      'https://www.facebook.com/nhumediastudio',
      'https://www.instagram.com/nhumediastudio/',
    ],
    aggregateRating: {
      '@type': 'AggregateRating',
      ratingValue: '5.0',
      reviewCount: '10',
      bestRating: '5',
      worstRating: '1',
    },
    hasOfferCatalog: {
      '@type': 'OfferCatalog',
      name: 'Digital Marketing Services',
      itemListElement: [
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: 'Google Ads Management',
            description:
              'Professional Google Ads campaign management that puts your business in front of the right audience',
          },
        },
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: 'Bing Ads Management',
            description: 'Expand your reach with Bing advertising and maximize your PPC investment',
          },
        },
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: 'Meta Ads (Facebook & Instagram)',
            description: 'Facebook and Instagram advertising campaigns that boost business and achieve results',
          },
        },
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: 'Social Media Marketing',
            description: 'Evergreen content creation boosting organic reach and online presence',
          },
        },
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: 'Website Search Optimization (SEO)',
            description: 'SEO services that get you to the top of search results and turn clicks into customers',
          },
        },
      ],
    },
  };

  // Organization Schema
  const organizationSchema = {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    '@id': 'https://nhumediastudio.com/#organization',
    name: 'Nhu Media Studio',
    url: 'https://nhumediastudio.com',
    logo: {
      '@type': 'ImageObject',
      url: 'https://nhumediastudio.com/logo.png',
      width: '400',
      height: '400',
    },
    contactPoint: [
      {
        '@type': 'ContactPoint',
        email: 'nhumediastudio@gmail.com',
        contactType: 'customer service',
        availableLanguage: ['English'],
        areaServed: 'CA',
      },
    ],
  };

  // Service Schema
  const serviceSchema = {
    '@context': 'https://schema.org',
    '@type': 'Service',
    serviceType: 'Digital Marketing Services',
    provider: {
      '@type': 'Organization',
      name: 'Nhu Media Studio',
      url: 'https://nhumediastudio.com',
    },
    areaServed: {
      '@type': 'Country',
      name: 'Canada',
    },
    hasOfferCatalog: {
      '@type': 'OfferCatalog',
      name: 'Digital Marketing Services',
      itemListElement: [
        {
          '@type': 'OfferCatalog',
          name: 'PPC Advertising Services',
          itemListElement: [
            {
              '@type': 'Offer',
              itemOffered: {
                '@type': 'Service',
                name: 'Google Ads Management',
              },
            },
            {
              '@type': 'Offer',
              itemOffered: {
                '@type': 'Service',
                name: 'Bing Ads Management',
              },
            },
            {
              '@type': 'Offer',
              itemOffered: {
                '@type': 'Service',
                name: 'Meta Ads Management',
              },
            },
          ],
        },
        {
          '@type': 'OfferCatalog',
          name: 'Organic Marketing Services',
          itemListElement: [
            {
              '@type': 'Offer',
              itemOffered: {
                '@type': 'Service',
                name: 'SEO Optimization',
              },
            },
            {
              '@type': 'Offer',
              itemOffered: {
                '@type': 'Service',
                name: 'Social Media Marketing',
              },
            },
          ],
        },
      ],
    },
  };

  // FAQ Schema
  const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: [
      {
        '@type': 'Question',
        name: 'What Digital Marketing services do you offer?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'We offer Search Engine Optimization, Facebook Advertising, Instagram Advertising, Google Ads, Bing Ads, Content Strategy, Content Creation, Copywriting, Social Media Content Creation and Social Media Community Management.',
        },
      },
      {
        '@type': 'Question',
        name: 'What is Digital Growth Marketing?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: "Growth marketing involves failing fast. With growth marketing, we experiment with techniques and strategies, identify what is working and ditch the tactics that are eating up your time and budget. We're constantly adjusting your strategy to maximize results.",
        },
      },
      {
        '@type': 'Question',
        name: 'Do you have minimum terms?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'We do not have minimum terms, but we do recommend a minimum period of 3 months so that our strategies have time to be thoroughly tested and optimized for maximum performance.',
        },
      },
      {
        '@type': 'Question',
        name: 'Can you take over my existing campaigns?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: "Yes! We will conduct an audit of your current campaigns and identify what has already been done, what is working and what is not. We'll share a plan of updates and changes needed to achieve your goals.",
        },
      },
    ],
  };

  // Breadcrumb Schema
  const breadcrumbSchema = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      {
        '@type': 'ListItem',
        position: 1,
        name: 'Home',
        item: 'https://nhumediastudio.com',
      },
    ],
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
    </>
  );
}

