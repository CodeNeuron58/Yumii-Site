import type { Metadata } from "next";
import { Inter, JetBrains_Mono } from "next/font/google";
import LiveBackground from "@/components/LiveBackground";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  weight: ["400", "600", "700"],
});

const jetbrainsMono = JetBrains_Mono({
  variable: "--font-jetbrains-mono",
  subsets: ["latin"],
  weight: ["400", "600"],
});

export const metadata: Metadata = {
  title: "Yumii AI - Your Local AI Companion",
  description: "A real-time voice AI with 6 personalities, live expressions, and a Live2D avatar. Everything runs locally for maximum privacy and performance.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark scroll-smooth">
      <body
        className={`${inter.variable} ${jetbrainsMono.variable} font-body-md bg-background text-on-surface min-h-[100dvh] antialiased relative overflow-x-hidden`}
      >
        <LiveBackground />
        {children}
      </body>
    </html>
  );
}