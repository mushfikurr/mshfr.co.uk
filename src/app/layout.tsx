import type { Metadata } from "next";
import { Geist_Mono, Inter } from "next/font/google";
import "./globals.css";
import { Navbar } from "@/components/Navbar";
import { PageContainer } from "@/components/ui/PageContainer";
import Script from "next/script";
import Image from "next/image";
import BackgroundImage from "@/components/BackgroundImage";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL(
    process.env.NEXT_PUBLIC_SITE_URL || "https://mshfr.co.uk/"
  ),
  title: "mshfr.co.uk",
  description: "My corner of the internet.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${inter.variable} ${geistMono.variable} antialiased bg-background bg-gradient-to-br from-background/15 via-secondary/15 to-background/15 animate-background bg-cover bg-scroll transform-gpu flex flex-col min-h-dvh`}
      >
        <BackgroundImage />
        <Navbar />
        <PageContainer>{children}</PageContainer>
      </body>
      <Script src="https://scripts.simpleanalyticscdn.com/latest.js"></Script>
    </html>
  );
}
