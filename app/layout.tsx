import type { Metadata } from "next";
import Script from "next/script";
import "./globals.css";
import { StructuredData } from "@/components/StructuredData";

export const metadata: Metadata = {
  metadataBase: new URL('https://nhumediastudio.com'),
  title: {
    default: "Nhu Media Studio | Canadian Digital Marketing Agency",
    template: "%s | Nhu Media Studio"
  },
  description: "Canadian digital marketing agency specializing in Google Ads that deliver results. We drive online growth for businesses through PPC, SEO, and social media marketing.",
  keywords: [
    "digital marketing",
    "Google Ads",
    "PPC management",
    "Facebook Ads",
    "Instagram Ads",
    "SEO",
    "social media marketing",
    "Canadian marketing agency",
    "Google Ads specialist",
    "paid advertising",
    "Meta Ads",
    "Bing Ads",
    "search engine marketing",
    "content marketing",
    "digital growth marketing",
  ],
  authors: [{ name: "Nhu Media Studio" }],
  creator: "Nhu Media Studio",
  publisher: "Nhu Media Studio",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  openGraph: {
    type: "website",
    locale: "en_CA",
    url: "https://nhumediastudio.com",
    siteName: "Nhu Media Studio",
    title: "Nhu Media Studio | Digital Marketing That Delivers Results",
    description: "We don't run just ads, we get your business seen. Be at the top of search results and everywhere on social media.",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Nhu Media Studio - Digital Marketing Agency",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Nhu Media Studio | Digital Marketing Agency",
    description: "Canadian digital marketing agency specializing in Google Ads, PPC, and social media marketing.",
    images: ["/og-image.png"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  verification: {
    google: 'your-google-verification-code',
    // yandex: 'your-yandex-verification-code',
    // bing: 'your-bing-verification-code',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const gtmId = process.env.NEXT_PUBLIC_GTM_ID;
  const metaPixelId = process.env.NEXT_PUBLIC_META_PIXEL_ID;

  return (
    <html lang="en">
      <head>
        <StructuredData />
        
        {/* Google Tag Manager */}
        {gtmId && (
          <>
            <Script
              id="gtm-script"
              strategy="afterInteractive"
              dangerouslySetInnerHTML={{
                __html: `
                  (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
                  new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
                  j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
                  'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
                  })(window,document,'script','dataLayer','${gtmId}');
                `,
              }}
            />
          </>
        )}

        {/* Meta Pixel */}
        {metaPixelId && (
          <Script
            id="meta-pixel"
            strategy="afterInteractive"
            dangerouslySetInnerHTML={{
              __html: `
                !function(f,b,e,v,n,t,s)
                {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
                n.callMethod.apply(n,arguments):n.queue.push(arguments)};
                if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
                n.queue=[];t=b.createElement(e);t.async=!0;
                t.src=v;s=b.getElementsByTagName(e)[0];
                s.parentNode.insertBefore(t,s)}(window, document,'script',
                'https://connect.facebook.net/en_US/fbevents.js');
                fbq('init', '${metaPixelId}');
                fbq('track', 'PageView');
              `,
            }}
          />
        )}
      </head>
      <body>
        {/* Google Tag Manager (noscript) */}
        {gtmId && (
          <noscript>
            <iframe
              src={`https://www.googletagmanager.com/ns.html?id=${gtmId}`}
              height="0"
              width="0"
              style={{ display: 'none', visibility: 'hidden' }}
            />
          </noscript>
        )}
        
        {/* Meta Pixel (noscript) */}
        {metaPixelId && (
          <noscript>
            <img
              height="1"
              width="1"
              style={{ display: 'none' }}
              src={`https://www.facebook.com/tr?id=${metaPixelId}&ev=PageView&noscript=1`}
            />
          </noscript>
        )}
        
        {children}
      </body>
    </html>
  );
}
