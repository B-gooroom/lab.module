import type { Metadata } from "next";
import "./globals.css";
import Header from "./components/Header";
import Footer from "./components/Footer";

export const metadata: Metadata = {
  title: "lab.MODULE",
  description: "디자인 전문 랩 모듈입니다.",
  keywords: [
    "UI 디자인",
    "UX 디자인",
    "UX/UI 디자인",
    "브랜딩",
    "APP/WEB 제작",
    "APP/WEB 디자인",
    "프로덕트 디자인",
    "그래픽 디자인",
    "디자인 전문 랩 모듈",
    "디자인 에이전시",
    "디자인 전문가",
    "lab.MODULE",
    "labmodule",
    "labmodule.kr",
  ],
  authors: [{ name: "lab.MODULE" }],
  creator: "lab.MODULE",
  publisher: "lab.MODULE",
  metadataBase: new URL("https://labmodule.kr"),
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    locale: "ko_KR",
    url: "https://labmodule.kr",
    title: "lab.MODULE",
    description: "디자인 전문 에이전시 랩 모듈입니다.",
    siteName: "lab.MODULE",
    images: [{ url: "/Meta.jpg", width: 1200, height: 630, alt: "lab.MODULE" }],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko">
      <head>
        <link
          rel="stylesheet"
          href="https://cdn.jsdelivr.net/gh/orioncactus/pretendard@v1.3.9/dist/web/static/pretendard.min.css"
        />
      </head>
      <body className="antialiased">
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
