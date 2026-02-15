"use client";

import { Mail, MapPin, ArrowUp } from "lucide-react";
import Image from "next/image";

export default function Footer() {
    const scrollToTop = () => {
        window.scrollTo({ top: 0, behavior: "smooth" });
    };

    return (
        <footer className="relative bg-bg-dark border-t border-border-subtle">
            {/* Back to top */}
            <div className="absolute -top-6 left-1/2 -translate-x-1/2">
                <button
                    onClick={scrollToTop}
                    className="w-12 h-12 rounded-full bg-gradient-to-br from-accent to-accent-light
                   flex items-center justify-center shadow-lg shadow-accent/20
                   hover:shadow-accent/40 hover:-translate-y-1 transition-all duration-300"
                    aria-label="Back to top"
                >
                    <ArrowUp size={20} className="text-primary" />
                </button>
            </div>

            <div className="max-w-7xl mx-auto px-6 lg:px-8 pt-20 pb-8">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
                    {/* Company */}
                    <div className="lg:col-span-1">
                        <div className="flex items-center gap-3 mb-6">
                            <Image
                                src="/logo.svg"
                                alt="APHEX"
                                width={139}
                                height={42}
                                className="h-8 w-auto brightness-0 invert"
                            />
                        </div>
                        <p className="text-text-secondary text-sm leading-relaxed mb-4">
                            (주)아펙스파트너스
                            <br />
                            중소기업의 성장 파트너, 맞춤형 경영 컨설팅으로 목표 달성을 함께합니다.
                        </p>
                        <div className="text-text-secondary text-xs space-y-1">
                            <p>CEO. 송민정</p>
                            <p>사업자번호. 672-86-03693</p>
                        </div>
                    </div>

                    {/* Quick Links */}
                    <div>
                        <h4 className="text-text-primary font-semibold mb-6">바로가기</h4>
                        <ul className="space-y-3">
                            {[
                                { label: "회사소개", href: "#about" },
                                { label: "서비스", href: "#services" },
                                { label: "서비스 절차", href: "#process" },
                                { label: "문의하기", href: "#contact" },
                            ].map((item) => (
                                <li key={item.label}>
                                    <a href={item.href} className="text-text-secondary text-sm hover:text-accent-light
                                       transition-colors duration-200 flex items-center gap-2">
                                        <span className="w-1 h-1 rounded-full bg-accent/50" />
                                        {item.label}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Services */}
                    <div>
                        <h4 className="text-text-primary font-semibold mb-6">서비스</h4>
                        <ul className="space-y-3">
                            {["기업 스케일업", "기업재무관리", "PCM", "경정청구", "IP 전략", "기업인증"].map((item) => (
                                <li key={item}>
                                    <a href="#services" className="text-text-secondary text-sm hover:text-accent-light
                                       transition-colors duration-200 flex items-center gap-2">
                                        <span className="w-1 h-1 rounded-full bg-accent/50" />
                                        {item}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Contact Info */}
                    <div>
                        <h4 className="text-text-primary font-semibold mb-6">연락처</h4>
                        <ul className="space-y-4">
                            <li className="flex items-start gap-3">
                                <MapPin size={18} className="text-accent mt-0.5 shrink-0" />
                                <span className="text-text-secondary text-sm">
                                    서울특별시 강남구 테헤란로 39길 57, 3층 (역삼동)
                                </span>
                            </li>
                            <li className="flex items-start gap-3">
                                <MapPin size={18} className="text-accent mt-0.5 shrink-0" />
                                <span className="text-text-secondary text-sm">
                                    서울특별시 강남구 도산대로 544, 3층 (청담동)
                                </span>
                            </li>
                            <li className="flex items-center gap-3">
                                <Mail size={18} className="text-accent shrink-0" />
                                <span className="text-text-secondary text-sm">aphex_official@daum.net</span>
                            </li>
                        </ul>
                    </div>
                </div>

                {/* Divider */}
                <div className="border-t border-border-subtle pt-8">
                    <div className="flex flex-col md:flex-row justify-between items-center gap-4">
                        <p className="text-text-secondary text-xs">
                            © 2026 (주)아펙스파트너스. All rights reserved.
                        </p>
                        <div className="flex gap-6 text-xs text-text-secondary">
                            <a href="#" className="hover:text-accent-light transition-colors">개인정보처리방침</a>
                            <a href="#" className="hover:text-accent-light transition-colors">이용약관</a>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
}
