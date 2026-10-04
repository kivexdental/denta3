import type { Metadata, Viewport } from "next";
import "./globals.css";

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1.0,
  themeColor: "#0a0a0a",
};

export const metadata: Metadata = {
  title: "Denta – Advanced Dental Care | Healthy Smiles, Brighter Lives",
  description: "Personalized dental treatment with modern technology. Expert dentists, advanced equipment, and compassionate care for your entire family.",
  keywords: [
    "dental care",
    "dental clinic",
    "dental implants",
    "cosmetic dentistry",
    "porcelain veneers",
    "teeth whitening",
    "clear aligners",
    "orthodontist",
    "dentist",
  ],
  authors: [{ name: "Denta Clinic" }],
  creator: "Denta Clinic",
  publisher: "Denta Clinic",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  openGraph: {
    title: "Denta – Advanced Dental Care | Healthy Smiles, Brighter Lives",
    description: "Personalized dental treatment with modern technology. Comprehensive services, patient-first care, and guaranteed excellence.",
    type: "website",
    locale: "en_US",
    siteName: "Denta Clinic",
    images: [
      {
        url: "https://images.unsplash.com/photo-1629909615957-be38d48fbbe4?w=1200&auto=format&fit=crop&q=80",
        width: 1200,
        height: 630,
        alt: "Denta Clinic Modern Operatory and Dental Equipment",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Denta – Advanced Dental Care",
    description: "Personalized dental treatment with modern technology. Expert dentists and compassionate care.",
    images: ["https://images.unsplash.com/photo-1629909615957-be38d48fbbe4?w=1200&auto=format&fit=crop&q=80"],
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
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
      </head>
      <body>
        {children}
      </body>
    </html>
  );
}
