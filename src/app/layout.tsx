import type { Metadata } from "next";
import { Playfair_Display, Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";
import { Analytics } from "@vercel/analytics/next";

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
  weight: ["400", "600", "700"],
});

const jakarta = Plus_Jakarta_Sans({
  variable: "--font-jakarta",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "Nyaya | Sri Lankan AI-Powered Legal Learning Companion",
  description: "Empowering Sri Lankans by providing a modern and accessible platform to learn and engage with law.",
  keywords: ["Sri Lanka law", "legal education Sri Lanka", "learn Sri Lankan law", "AI legal assistant", "law companion Sri Lanka", "Sinhala law", "legal rights Sri Lanka"],
  authors: [{ name: "Nyaya" }],
  creator: "Nyaya",
  metadataBase: new URL("https://nyaya.site"),
  openGraph: {
    title: "Nyaya | Sri Lankan Legal Learning Platform",
    description: "Your AI-powered companion for understanding Sri Lankan law — accessible, modern, and built for everyone.",
    url: "https://nyaya.site",
    siteName: "Nyaya",
    images: [
      {
        url: "/images/og-image.png",
        width: 1200,
        height: 630,
        alt: "Nyaya – AI-Powered Legal Learning Companion",
      },
    ],
    locale: "en_LK",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Nyaya | Sri Lankan AI-Powered Legal Learning Companion",
    description: "Your AI-powered companion for understanding Sri Lankan law.",
    images: ["/images/og-image.png"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true },
  },
  alternates: {
    canonical: "https://nyaya.site",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en-LK" className={`${playfair.variable} ${jakarta.variable} scroll-smooth`}>
      <body className="font-sans antialiased">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "EducationalOrganization",
              "name": "Nyaya",
              "description": "AI-powered Sri Lankan legal learning platform",
              "url": "https://nyaya.lk",
              "sameAs": ["https://twitter.com/nyayalk"],
              "knowsAbout": ["Sri Lankan Law", "Legal Education", "Constitutional Law of Sri Lanka"],
            }),
          }}
        />
        {children}
        <Analytics />
      </body>
    </html>
  );
}

export const viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#0A1128",
};

