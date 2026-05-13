import type { Metadata } from "next";
import { Geist } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "Digital Clan — Africa's Digital Consultancy",
  description:
    "We help businesses across Africa grow through digital marketing, software development, and data analytics. Strategy-led. Results-driven.",
  keywords: [
    "digital consultancy Africa",
    "digital marketing",
    "software development",
    "data analytics",
    "Digital Clan",
  ],
  openGraph: {
    title: "Digital Clan — Africa's Digital Consultancy",
    description:
      "Strategy-led digital consultancy helping African businesses grow.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${geistSans.variable} h-full`}>
      <body className="min-h-full flex flex-col antialiased">{children}</body>
    </html>
  );
}
