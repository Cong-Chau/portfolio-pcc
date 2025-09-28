// app/layout.tsx
import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import StickyCursor from "@/components/cards/StickyCursor";
import Background from "@/components/sessions/Background";
import Preloader from "@/components/common/Preloader";
import TargetCursor from "@/components/cards/TargetCursor";
const geistSans = Geist({ variable: "--font-geist-sans", subsets: ["latin"] });
const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Phan Công Châu - Frontend Developer",
  description: "Portfolio cá nhân của Phan Công Châu - Frontend Developer...",
  icons: { icon: "/images/favicon.png" },
  keywords: [
    "Phan Công Châu",
    "Frontend Developer",
    "React",
    "Next.js",
    "TailwindCSS",
    "Portfolio",
  ],
  authors: [{ name: "Phan Công Châu" }],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased relative w-full h-full bg-black`}
      >
        {/* <StickyCursor /> */}
        <TargetCursor spinDuration={2} hideDefaultCursor={true} />
        <Background />
        <Preloader>
          <main className="relative z-10 pt-20">{children}</main>
        </Preloader>
      </body>
    </html>
  );
}
