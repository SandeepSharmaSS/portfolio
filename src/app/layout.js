import "./globals.css";

import { Analytics } from "@vercel/analytics/react";

export const metadata = {
  title:
    "Sandeep Sharma | Full Stack Developer",

  description:
    "Modern futuristic full stack developer portfolio built with Next.js, React, Three.js and Tailwind CSS.",
};

export default function RootLayout({
  children,
}) {
  return (
    <html lang="en">

      <body suppressHydrationWarning>

        {children}

        <Analytics />

      </body>

    </html>
  );
}