import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Webora — Professional Websites for Entrepreneurs",
  description: "We help entrepreneurs and small businesses turn their ideas into professional, fast, and modern websites that build trust and attract customers.",
  authors: [{ name: "Webora" }],
  openGraph: {
    title: "Webora — Professional Websites for Entrepreneurs",
    description: "We help entrepreneurs and small businesses turn their ideas into professional, fast, and modern websites.",
    type: "website",
    locale: "en_US",
    siteName: "Webora",
  },
};

// app/layout.tsx
// ... existing code ...
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" data-scroll-behavior="smooth">
      <body>
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}

