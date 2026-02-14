"use client";

import { Mail, Phone, MapPin, ArrowUp, Linkedin, Instagram, Youtube } from "lucide-react";

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
                            <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-accent to-accent-light flex items-center justify-center">
                                <span className="text-primary font-black text-lg">A</span>
                            </div>
                            <span className="text-xl font-bold text-text-primary">
                                APE<span className="gradient-text">X</span>
                            </span>
                        </div>
                        <p className="text-text-secondary text-sm leading-relaxed mb-6">
                            기업의 성장과 혁신을 함께하는 전문 컨설팅 파트너.
                            최적의 전략으로 비즈니스 가치를 극대화합니다.
                        </p>
                        <div className="flex gap-3">
                            {[Linkedin, Instagram, Youtube].map((Icon, i) => (
                                <a
                                    key={i}
                                    href="#"
                                    className="w-10 h-10 rounded-lg border border-border-subtle flex items-center justify-center
                           text-text-secondary hover:text-accent hover:border-border-glow
                           transition-all duration-300"
                                >
                                    <Icon size={18} />
                                </a>
                            ))}
                        </div>
                    </div>

                    {/* Quick Links */}
                    <div>
                        <h4 className="text-text-primary font-semibold mb-6">바로가기</h4>
                        <ul className="space-y-3">
                            {["회사소개", "서비스", "포트폴리오", "문의하기"].map((item) => (
                                <li key={item}>
                                    <a href="#" className="text-text-secondary text-sm hover:text-accent-light
                                       transition-colors duration-200 flex items-center gap-2">
                                        <span className="w-1 h-1 rounded-full bg-accent/50" />
                                        {item}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Services */}
                    <div>
                        <h4 className="text-text-primary font-semibold mb-6">서비스</h4>
                        <ul className="space-y-3">
                            {["경정청구", "IP 전략", "기업 인증", "정부 과제", "세무 컨설팅", "기업 분석"].map((item) => (
                                <li key={item}>
                                    <a href="#" className="text-text-secondary text-sm hover:text-accent-light
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
                                    서울특별시 강남구 테헤란로 123<br />APEX타워 15층
                                </span>
                            </li>
                            <li className="flex items-center gap-3">
                                <Phone size={18} className="text-accent shrink-0" />
                                <span className="text-text-secondary text-sm">02-1234-5678</span>
                            </li>
                            <li className="flex items-center gap-3">
                                <Mail size={18} className="text-accent shrink-0" />
                                <span className="text-text-secondary text-sm">contact@apex.co.kr</span>
                            </li>
                        </ul>
                    </div>
                </div>

                {/* Divider */}
                <div className="border-t border-border-subtle pt-8">
                    <div className="flex flex-col md:flex-row justify-between items-center gap-4">
                        <p className="text-text-secondary text-xs">
                            © 2026 APEX Corporation. All rights reserved.
                        </p>
                        <div className="flex gap-6 text-xs text-text-secondary">
                            <a href="#" className="hover:text-accent-light transition-colors">개인정보처리방침</a>
                            <a href="#" className="hover:text-accent-light transition-colors">이용약관</a>
                            <a href="#" className="hover:text-accent-light transition-colors">사이트맵</a>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
}
