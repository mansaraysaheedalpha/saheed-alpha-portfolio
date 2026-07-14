import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";

import { Footer } from "@/components/layout/footer";
import { Header } from "@/components/layout/header";

import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    default: "Saheed Alpha Mansaray | Full-Stack Developer",
    template: "%s | Saheed Alpha Mansaray",
  },
  description:
    "Independent full-stack developer building websites, MVPs, dashboards and AI-powered web applications for founders and small businesses.",
  openGraph: {
    title: "Saheed Alpha Mansaray | Full-Stack Developer",
    description:
      "Independent full-stack developer building websites, MVPs, dashboards and AI-powered web applications for founders and small businesses.",
    siteName: "Saheed Alpha Mansaray",
    type: "website",
  },
};

type RootLayoutProps = Readonly<{
  children: React.ReactNode;
}>;

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable}`}>
        <Header />

        {children}

        <Footer />
      </body>
    </html>
  );
}
