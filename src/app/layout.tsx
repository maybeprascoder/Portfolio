import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import BackToTop from "@/components/BackToTop";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const siteUrl = "https://prasoonkumar.dev";

export const metadata: Metadata = {
  title: {
    default: "Prasoon Kumar | Software Engineer and AI/ML Engineer",
    template: "%s | Prasoon Kumar",
  },
  description:
    "Portfolio of Prasoon Kumar, a software engineer and AI/ML professional specializing in intelligent applications, generative AI, machine learning, and responsive web development.",
  metadataBase: new URL(siteUrl),
  openGraph: {
    title: "Prasoon Kumar | Software Engineer and AI/ML Engineer",
    description:
      "Portfolio of Prasoon Kumar, a software engineer and AI/ML professional specializing in intelligent applications, generative AI, machine learning, and responsive web development.",
    url: siteUrl,
    siteName: "Prasoon Kumar Portfolio",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Prasoon Kumar | Software Engineer and AI/ML Engineer",
    description:
      "Portfolio of Prasoon Kumar, a software engineer and AI/ML professional specializing in intelligent applications, generative AI, machine learning, and responsive web development.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="flex min-h-full flex-col">
        <a
          href="#main-content"
          className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[100] focus:rounded-lg focus:bg-cyan-500 focus:px-4 focus:py-2 focus:text-sm focus:font-semibold focus:text-navy-900 focus:outline-none"
        >
          Skip to main content
        </a>
        <Navbar />
        <main id="main-content" className="flex-1">
          {children}
        </main>
        <Footer />
        <BackToTop />
      </body>
    </html>
  );
}
