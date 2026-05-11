import type { Metadata } from "next";
import { Outfit, Inter, Space_Grotesk } from "next/font/google";
import "./globals.css";

const outfit = Outfit({
  variable: "--font-outfit",
  subsets: ["latin"],
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const spaceGrotesk = Space_Grotesk({
  variable: "--font-space-grotesk",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Yumi AI - Your Local AI Companion",
  description: "Meet Yumi - A real-time voice AI companion with 6 personalities, Live2D animation, and complete privacy. Runs entirely on your machine.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark scroll-smooth">
      <head>
         <link href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:wght,FILL@100..700,0..1&display=swap" rel="stylesheet" />
      </head>
      <body
        className={`${outfit.variable} ${inter.variable} ${spaceGrotesk.variable} font-body bg-[#121221] text-[#e3e0f7] min-h-[100dvh] antialiased selection:bg-[#ff79c6]/30 selection:text-white relative overflow-x-hidden`}
      >
        {children}
      </body>
    </html>
  );
}