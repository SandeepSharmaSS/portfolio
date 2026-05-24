import "./globals.css";

export const metadata = {
  title: "Sandeep Sharma | Portfolio",
  description: "Modern futuristic developer portfolio",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body suppressHydrationWarning>
        {children}
      </body>
    </html>
  );
}