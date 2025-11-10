import type { Metadata } from "next";
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
  return (
    <html lang="en">
      <head>
        <StructuredData />
      </head>
      <body>{children}</body>
    </html>
  );
}
