import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { Analytics } from "@vercel/analytics/react";
import { SpeedInsights } from "@vercel/speed-insights/next";

import "./globals.css";
import { ThemeProvider } from "./provider";

const inter = Inter({ subsets: ["latin"] });

const SITE_URL = "https://mohamedaliebaid.com";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: "Mohamed Ali Ebaid | Senior Mobile Engineer",
    template: "%s | Mohamed Ali Ebaid",
  },
  description:
    "Senior Mobile Engineer with 6+ years of experience building high-performance Android, iOS, and cross-platform (Flutter) mobile applications. 25+ production apps on Play Store & App Store.",
  keywords: [
    "Mobile Engineer",
    "Flutter Developer",
    "Android Developer",
    "iOS Developer",
    "Kotlin Developer",
    "Swift Developer",
    "Mobile App Developer",
    "Cross Platform Developer",
    "Senior Mobile Engineer",
    "Mohamed Ali Ebaid",
    "React Native",
    "Dart",
    "Jetpack Compose",
    "SwiftUI",
  ],
  authors: [{ name: "Mohamed Ali Ebaid" }],
  creator: "Mohamed Ali Ebaid",
  openGraph: {
    type: "website",
    locale: "en_US",
    title: "Mohamed Ali Ebaid | Senior Mobile Engineer",
    description:
      "Senior Mobile Engineer with 6+ years of experience building high-performance Android, iOS, and cross-platform (Flutter) mobile applications. 25+ production apps on Play Store & App Store.",
    siteName: "Mohamed Ali Ebaid Portfolio",
    url: SITE_URL,
  },
  twitter: {
    card: "summary_large_image",
    title: "Mohamed Ali Ebaid | Senior Mobile Engineer",
    description:
      "Senior Mobile Engineer | Flutter \u2022 Android (Kotlin) \u2022 iOS (Swift) | 25+ Production Apps",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
    },
  },
  alternates: {
    canonical: SITE_URL,
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: "Mohamed Ali Ebaid",
  jobTitle: "Senior Mobile Engineer",
  url: SITE_URL,
  email: "mo7amedaliebaid@gmail.com",
  sameAs: [
    "https://github.com/mo7amedaliEbaid",
    "https://www.linkedin.com/in/mo7amedebaid/",
    "https://www.youtube.com/channel/UCcaLYqe9DJGdqexSQSIgs7w",
    "https://leetcode.com/mo7amedaliebaid",
    "https://medium.com/@mo7amedaliebaid",
  ],
  knowsAbout: [
    "Flutter",
    "Dart",
    "Android Development",
    "Kotlin",
    "iOS Development",
    "Swift",
    "Mobile App Development",
    "Clean Architecture",
    "Cross-Platform Development",
  ],
  alumniOf: {
    "@type": "CollegeOrUniversity",
    name: "Kafr ElSheikh University",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link rel="icon" href="/portfolio.png" sizes="any" />
      </head>
      <body className={inter.className}>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem
          disableTransitionOnChange
        >
          {children}
        </ThemeProvider>
        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  );
}
