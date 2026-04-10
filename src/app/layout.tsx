import type { Metadata } from "next";
import { Courier_Prime, Inter } from "next/font/google";
import "./globals.css";

const courierPrime = Courier_Prime({
  variable: "--font-courier-prime",
  subsets: ["latin"],
  weight: ["400", "700"],
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Carthage Markets",
  description: "One screen for Kalshi and Polymarket. Compare prices, get data-backed recommendations, trade sharper.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`dark ${courierPrime.variable} ${inter.variable} h-full antialiased`}
    >
      <body className={`${courierPrime.className} min-h-full flex flex-col`}>{children}</body>
    </html>
  );
}
