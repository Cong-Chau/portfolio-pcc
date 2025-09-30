import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
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
  keywords: [
    "Phan Công Châu",
    "Frontend Developer",
    "React",
    "Next.js",
    "TailwindCSS",
    "Portfolio",
  ],
  authors: [{ name: "Phan Công Châu" }],
  icons: { icon: "/images/favicon.png" },
  openGraph: {
    title: "Phan Công Châu - Frontend Developer",
    description: "Portfolio cá nhân của Phan Công Châu - Frontend Developer...",
    url: "https://phancongchau.vercel.app/",
    siteName: "Phan Công Châu Portfolio",
    images: [
      {
        url: "/images/preview.png",
        width: 1200,
        height: 630,
        alt: "Portfolio Preview",
      },
    ],
    locale: "vi_VN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Phan Công Châu - Frontend Developer",
    description: "Portfolio cá nhân của Phan Công Châu - Frontend Developer...",
    images: ["/images/preview.png"],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="vi">
      <head>
        <link
          rel="stylesheet"
          href="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/devicon.min.css"
        />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased relative w-full h-full bg-black`}
      >
        <TargetCursor spinDuration={2} hideDefaultCursor={true} />
        <Background />
        <Preloader>
          <main className="relative z-10 pt-20">{children}</main>
        </Preloader>
      </body>
    </html>
  );
}
