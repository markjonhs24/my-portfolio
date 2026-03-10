import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
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
  title: "Mark John Pecson | Full Stack & Mobile Developer",
  description:
    "Passionate software engineer specializing in Flutter, React, Next.js, and cloud services. Building scalable applications from concept to production.",
  keywords: [
    "Full Stack Developer",
    "Mobile Developer",
    "Flutter Developer",
    "React Developer",
    "Next.js",
    "AWS",
    "Software Engineer",
    "Philippines",
  ],
  authors: [{ name: "Mark John Pecson" }],
  openGraph: {
    title: "Mark John Pecson | Full Stack & Mobile Developer",
    description:
      "Passionate software engineer specializing in Flutter, React, Next.js, and cloud services.",
    type: "website",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "Mark John Pecson | Full Stack & Mobile Developer",
    description:
      "Passionate software engineer specializing in Flutter, React, Next.js, and cloud services.",
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
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
