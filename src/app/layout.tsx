import type { Metadata } from "next";
import { Bricolage_Grotesque, Figtree, JetBrains_Mono } from "next/font/google";
import "./globals.css";

const bricolage = Bricolage_Grotesque({
  variable: "--font-bricolage",
  subsets: ["latin"],
  weight: ["500", "700", "800"],
  display: "swap",
});

const figtree = Figtree({
  variable: "--font-figtree",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  display: "swap",
});

const jetbrainsMono = JetBrains_Mono({
  variable: "--font-jetbrains-mono",
  subsets: ["latin"],
  weight: ["400", "500"],
  display: "swap",
});

const description =
  "Yumii is a free, open-source voice companion for Windows. She lives in a thin island at the top of your screen, talks with you out loud, remembers your life, and asks before she acts. Her mind is NVIDIA Nemotron on Nebius Token Factory; her memories stay on your machine.";

export const metadata: Metadata = {
  metadataBase: new URL("https://yumii.me"),
  title: "Yumii · a voice companion for your desktop",
  description,
  openGraph: {
    title: "Yumii · a voice companion for your desktop",
    description,
    url: "https://yumii.me",
    siteName: "Yumii",
    images: [{ url: "/yumii-mascot.png", width: 500, height: 500, alt: "Yumii" }],
  },
  icons: {
    icon: [{ url: "/icon.png", type: "image/png" }],
    apple: [{ url: "/apple-icon.png", type: "image/png" }],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body
        className={`${bricolage.variable} ${figtree.variable} ${jetbrainsMono.variable} font-body bg-cream text-ink min-h-screen antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
