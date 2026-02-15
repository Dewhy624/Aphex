import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "아펙스파트너스 | 중소기업 경영컨설팅",
  description:
    "(주)아펙스파트너스 - 중소기업 경영컨설팅. 기업재무관리, 기업인증, 투자유치, 경정청구, IP전략, 정부지원사업 등 기업 맞춤 자문을 제공합니다.",
  keywords: ["아펙스파트너스", "APHEX", "경영컨설팅", "기업재무관리", "기업인증", "투자유치", "경정청구", "IP전략", "정부지원사업", "PCM", "창업전략", "M&A"],
  openGraph: {
    title: "아펙스파트너스 | 중소기업 경영컨설팅",
    description:
      "(주)아펙스파트너스 - 기업재무관리, 기업인증, 투자유치, 경정청구 등 기업 맞춤 자문을 제공합니다.",
    type: "website",
    locale: "ko_KR",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko">
      <body className="antialiased">{children}</body>
    </html>
  );
}
