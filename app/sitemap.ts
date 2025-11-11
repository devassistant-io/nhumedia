import { MetadataRoute } from 'next';

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://nhumediastudio.com';
  
  // Main pages
  const routes = [
    '',
    '/about',
    '/blog',
    '/services/google-ads',
    '/services/bing-ads',
    '/services/meta-ads',
    '/services/social-media-marketing',
    '/services/seo',
    '/privacy-policy',
    '/terms-of-service',
  ].map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: 'weekly' as const,
    priority: route === '' ? 1 : 0.8,
  }));

  // Blog posts (these would be dynamically generated from your CMS)
  const blogPosts = [
    '/blog/power-of-high-quality-content',
    '/blog/why-businesses-advertise-online',
    '/blog/seo-google-ads-success-story',
    '/blog/facebook-advertising-guide-2024',
    '/blog/maximize-ppc-budget-tips',
    '/blog/local-seo-strategies',
  ].map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: 'monthly' as const,
    priority: 0.6,
  }));

  return [...routes, ...blogPosts];
}

