import type { Metadata } from "next";
import { Space_Grotesk, JetBrains_Mono } from "next/font/google";
import "./globals.css";

const spaceGrotesk = Space_Grotesk({
  variable: "--font-space",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});

const jetbrainsMono = JetBrains_Mono({
  variable: "--font-mono",
  subsets: ["latin"],
  weight: ["400", "500"],
});

export const metadata: Metadata = {
  title: "KOUA ETTIEN YANN-AXEL | AI & ML Developer",
  description:
    "Portfolio de KOUA ETTIEN YANN-AXEL — Développeur spécialisé en Intelligence Artificielle, Computer Vision et Systèmes Multi-Agents.",
  keywords: ["AI", "Machine Learning", "Computer Vision", "Python", "Django", "FaceNet", "LangGraph", "CrewAI"],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr" className={`${spaceGrotesk.variable} ${jetbrainsMono.variable}`}>
      <body style={{ fontFamily: "var(--font-space), sans-serif" }}>{children}</body>
    </html>
  );
}
