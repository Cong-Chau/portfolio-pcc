import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import StickyCursor from "@/components/sessions/StickyCursor";
import Background from "@/components/sessions/Background";
import { DarkModeProvider } from "@/contexts/DarkModeContext";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Phan Công Châu - Frontend Developer",
  description:
    "Portfolio cá nhân của Phan Công Châu - Frontend Developer. Kinh nghiệm React, Next.js, TailwindCSS và xây dựng ứng dụng web hiện đại.",
  icons: {
    icon: "/images/favicon.png", // hoặc "/favicon.png"
  },
  keywords: [
    "Phan Công Châu",
    "Frontend Developer",
    "React",
    "Next.js",
    "TailwindCSS",
    "Portfolio",
  ],
  authors: [{ name: "Phan Công Châu" }],
  openGraph: {
    title: "Phan Công Châu - Frontend Developer",
    description:
      "Xem portfolio của Phan Công Châu với các dự án React, Next.js, TailwindCSS.",
    url: "https://your-domain.com", // đổi thành domain thật
    siteName: "Portfolio - Phan Công Châu",
    images: [
      {
        url: "/preview.png", // ảnh preview khi share (đặt trong /public)
        width: 1200,
        height: 630,
        alt: "Preview Portfolio Phan Công Châu",
      },
    ],
    locale: "vi_VN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Phan Công Châu - Frontend Developer",
    description:
      "Portfolio cá nhân về React, Next.js, TailwindCSS và các dự án web.",
    images: ["/preview.png"],
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
        className={`${geistSans.variable} ${geistMono.variable} antialiased relative`}
      >
        <DarkModeProvider>
          <StickyCursor />
          <div className="absolute inset-0 z-10">
            <Background />
          </div>
          <main className="relative z-12 pt-20">{children}</main>
        </DarkModeProvider>
      </body>
    </html>
  );
}
