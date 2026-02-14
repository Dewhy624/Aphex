import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "APEX | 기업 성장을 위한 전문 컨설팅 파트너",
  description:
    "APEX는 경정청구, IP 전략, 기업 인증, 정부 과제 등 기업의 성장과 혁신을 돕는 전문 컨설팅 서비스를 제공합니다.",
  keywords: ["APEX", "경정청구", "IP전략", "기업인증", "정부과제", "기업컨설팅"],
  openGraph: {
    title: "APEX | 기업 성장을 위한 전문 컨설팅 파트너",
    description:
      "경정청구, IP 전략, 기업 인증 등 기업 성장을 위한 전문 컨설팅.",
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
