import type { Metadata } from "next";
import { Inter, Outfit } from "next/font/google";
import "./globals.css";

import localFont from "next/font/local";
import { Header } from "./components/header";

const outfit = Outfit({
  subsets: ["latin"],
  variable: "--font-inter",
});

const myfont = localFont({ src: "../public/font/Satoshi.ttf" });

export const metadata: Metadata = {
  title: "Joscript | Find Your Peace Through Meditation",
  description:
    "Short, simple meditations to help you reset, unwind, and feel present—whenever you need a break.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${outfit.variable} ${myfont.className}  antialiased text-gray-900`}
      >
        <Header />
        {children}
      </body>
    </html>
  );
}
