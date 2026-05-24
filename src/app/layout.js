import "./globals.css";

import { Analytics } from "@vercel/analytics/react";

import { SpeedInsights } from "@vercel/speed-insights/next";

export const metadata = {
  title:
    "Sandeep Sharma | Full Stack Developer",

  description:
    "Modern futuristic full stack developer portfolio built with Next.js, React, Three.js and Tailwind CSS.",

  keywords: [
    "Sandeep Sharma",
    "Full Stack Developer",
    "Frontend Developer",
    "Backend Developer",
    "React Developer",
    "Next.js Portfolio",
    "Three.js Developer",
    "Software Engineer",
  ],

  authors: [
    {
      name: "Sandeep Sharma",
    },
  ],

  creator: "Sandeep Sharma",

  metadataBase: new URL(
    "https://sandeep-tech.vercel.app"
  ),

  openGraph: {
    title:
      "Sandeep Sharma | Portfolio",

    description:
      "Modern futuristic full stack developer portfolio.",

    url:
      "https://sandeep-tech.vercel.app",

    siteName:
      "Sandeep Sharma Portfolio",

    locale: "en_US",

    type: "website",
  },

  twitter: {
    card: "summary_large_image",

    title:
      "Sandeep Sharma | Portfolio",

    description:
      "Modern futuristic full stack developer portfolio.",
  },

  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}) {
  return (
    <html lang="en">

      <body suppressHydrationWarning>

        {children}

        {/* VERCEL ANALYTICS */}
        <Analytics />

        {/* SPEED INSIGHTS */}
        <SpeedInsights />

      </body>

    </html>
  );
}