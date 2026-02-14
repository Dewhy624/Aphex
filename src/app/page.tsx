"use client";

import { useRef, useEffect, useState } from "react";
import { motion, useInView, useMotionValue, useSpring } from "framer-motion";
import {
  FileSearch,
  Lightbulb,
  ShieldCheck,
  Landmark,
  PieChart,
  Briefcase,
  ChevronDown,
  Send,
  User,
  Mail,
  MessageSquare,
  MapPin,
  Phone,
  Clock,
  Target,
  TrendingUp,
  Users,
  Award,
  Building2,
  Globe,
  Zap,
  BarChart3,
  CheckCircle2,
} from "lucide-react";

import Header from "@/components/Header";
import Footer from "@/components/Footer";
import AnimatedSection from "@/components/AnimatedSection";
import SectionTitle from "@/components/SectionTitle";
import ServiceCard from "@/components/ServiceCard";

/* ─── Counter Animation ─── */
function AnimatedCounter({ target, suffix = "" }: { target: number; suffix?: string }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  const motionVal = useMotionValue(0);
  const spring = useSpring(motionVal, { duration: 2000, bounce: 0 });
  const [display, setDisplay] = useState(0);

  useEffect(() => {
    if (isInView) motionVal.set(target);
  }, [isInView, motionVal, target]);

  useEffect(() => {
    const unsubscribe = spring.on("change", (v: number) => setDisplay(Math.round(v)));
    return unsubscribe;
  }, [spring]);

  return (
    <span ref={ref} className="text-4xl md:text-5xl font-black gradient-text">
      {display.toLocaleString()}{suffix}
    </span>
  );
}

/* ─── Services Data ─── */
const services = [
  { icon: FileSearch, title: "경정청구", description: "과세 오류를 정밀 분석하여 납부한 세금을 합법적으로 환급받을 수 있도록 지원합니다." },
  { icon: Lightbulb, title: "IP 전략", description: "지식재산권 포트폴리오 구축부터 특허 분쟁 대응까지 체계적인 IP 전략을 제공합니다." },
  { icon: ShieldCheck, title: "기업 인증", description: "ISO, 벤처 인증 등 기업 신뢰도를 높이는 각종 인증 취득을 돕습니다." },
  { icon: Landmark, title: "정부 과제", description: "R&D, 기술 개발 등 정부 지원 사업 선정을 위한 전략 수립 및 신청을 대행합니다." },
  { icon: PieChart, title: "세무 컨설팅", description: "기업 절세 전략 수립부터 세무 조사 대응까지 전문 세무 서비스를 제공합니다." },
  { icon: Briefcase, title: "기업 분석", description: "재무, 경영, 시장 데이터를 종합 분석하여 기업 가치를 정확히 진단합니다." },
];

/* ─── Stats Data ─── */
const stats = [
  { value: 1500, suffix: "+", label: "누적 고객사", icon: Building2 },
  { value: 98, suffix: "%", label: "고객 만족도", icon: Award },
  { value: 15, suffix: "년+", label: "업계 경력", icon: TrendingUp },
  { value: 320, suffix: "억+", label: "누적 환급액", icon: BarChart3 },
];

/* ─── Partners ─── */
const partners = [
  "삼성전자", "현대자동차", "SK하이닉스", "LG전자", "네이버",
  "카카오", "포스코", "한화", "두산", "CJ그룹",
  "KT", "롯데", "GS건설", "아모레퍼시픽", "셀트리온",
];

/* ─── Values ─── */
const values = [
  { icon: Target, title: "정확한 분석", desc: "데이터 기반 정밀 진단으로 최적의 솔루션을 제시합니다." },
  { icon: Users, title: "고객 중심", desc: "고객의 비즈니스 목표에 맞춘 맞춤형 전략을 수립합니다." },
  { icon: Globe, title: "글로벌 네트워크", desc: "국내외 전문가 네트워크를 통해 글로벌 경쟁력을 확보합니다." },
  { icon: Zap, title: "신속한 실행", desc: "체계적인 프로세스로 빠르고 정확한 결과를 도출합니다." },
];

export default function Home() {
  return (
    <>
      <Header />
      <main>
        {/* ═══════════════ HERO ═══════════════ */}
        <section
          id="hero"
          className="relative min-h-screen flex items-center justify-center overflow-hidden bg-grid-pattern"
        >
          {/* Background orbs */}
          <div className="absolute top-1/4 -left-32 w-96 h-96 rounded-full bg-accent/5 blur-3xl animate-float" />
          <div className="absolute bottom-1/4 -right-32 w-80 h-80 rounded-full bg-accent/3 blur-3xl animate-float" style={{ animationDelay: "3s" }} />
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full
                          bg-[radial-gradient(circle,rgba(201,168,76,0.04),transparent_70%)]" />

          <div className="relative z-10 max-w-5xl mx-auto px-6 text-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: [0.25, 0.4, 0.25, 1] }}
            >
              <span className="inline-block px-5 py-2 mb-8 text-xs font-semibold tracking-[0.2em] uppercase
                             text-accent border border-accent/30 rounded-full bg-accent/5">
                Enterprise Consulting Partner
              </span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.15, ease: [0.25, 0.4, 0.25, 1] }}
              className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black leading-[1.1] mb-8"
            >
              기업의 <span className="gradient-text text-glow">성장</span>을
              <br />
              함께 만들어 갑니다
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3, ease: [0.25, 0.4, 0.25, 1] }}
              className="text-text-secondary text-base md:text-lg max-w-2xl mx-auto mb-12 leading-relaxed"
            >
              경정청구, IP 전략, 기업 인증 등 15년 이상의 전문 경험으로
              <br className="hidden sm:block" />
              기업의 가치를 극대화하는 최적의 솔루션을 제공합니다.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.45, ease: [0.25, 0.4, 0.25, 1] }}
              className="flex flex-col sm:flex-row gap-4 justify-center"
            >
              <a
                href="#services"
                className="group px-8 py-4 text-sm font-semibold text-primary bg-gradient-to-r from-accent to-accent-light
                         rounded-xl hover:shadow-xl hover:shadow-accent/25 transition-all duration-300
                         hover:-translate-y-0.5 active:translate-y-0"
              >
                서비스 알아보기
              </a>
              <a
                href="#about"
                className="px-8 py-4 text-sm font-semibold text-text-secondary border border-border-subtle
                         rounded-xl hover:border-accent/50 hover:text-accent-light transition-all duration-300
                         hover:-translate-y-0.5"
              >
                회사 소개
              </a>
            </motion.div>
          </div>

          {/* Scroll indicator */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.5 }}
            className="absolute bottom-10 left-1/2 -translate-x-1/2"
          >
            <a href="#about" className="flex flex-col items-center gap-2 text-text-secondary/50 hover:text-accent transition-colors">
              <span className="text-xs tracking-widest uppercase">Scroll</span>
              <motion.div animate={{ y: [0, 8, 0] }} transition={{ duration: 1.5, repeat: Infinity }}>
                <ChevronDown size={20} />
              </motion.div>
            </a>
          </motion.div>
        </section>

        {/* ═══════════════ ABOUT ═══════════════ */}
        <section id="about" className="relative py-28 md:py-36 overflow-hidden"
          style={{ background: "var(--gradient-section)" }}>
          <div className="max-w-7xl mx-auto px-6 lg:px-8">
            <SectionTitle
              label="About Us"
              title="신뢰를 바탕으로 한 전문 파트너"
              subtitle="APEX는 2010년 설립 이래, 기업의 지속 가능한 성장을 위해 최적화된 솔루션을 제공해 왔습니다."
            />

            {/* Values Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-24">
              {values.map((item, i) => (
                <AnimatedSection key={item.title} delay={i * 0.1}>
                  <div className="group p-6 rounded-2xl border border-border-subtle bg-bg-card
                                hover:bg-bg-card-hover hover:border-border-glow transition-all duration-500 h-full">
                    <div className="w-12 h-12 rounded-xl bg-accent/10 flex items-center justify-center mb-5
                                  group-hover:bg-accent/20 transition-all duration-300">
                      <item.icon className="w-6 h-6 text-accent" />
                    </div>
                    <h3 className="text-lg font-bold text-text-primary mb-2">{item.title}</h3>
                    <p className="text-text-secondary text-sm leading-relaxed">{item.desc}</p>
                  </div>
                </AnimatedSection>
              ))}
            </div>

            {/* Stats */}
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
              {stats.map((stat, i) => (
                <AnimatedSection key={stat.label} delay={i * 0.1}>
                  <div className="text-center p-6">
                    <div className="w-14 h-14 mx-auto rounded-xl bg-accent/10 flex items-center justify-center mb-4">
                      <stat.icon className="w-7 h-7 text-accent" />
                    </div>
                    <AnimatedCounter target={stat.value} suffix={stat.suffix} />
                    <p className="text-text-secondary text-sm mt-2">{stat.label}</p>
                  </div>
                </AnimatedSection>
              ))}
            </div>
          </div>
        </section>

        {/* ═══════════════ SERVICES ═══════════════ */}
        <section id="services" className="relative py-28 md:py-36 overflow-hidden bg-bg-dark bg-grid-pattern">
          <div className="max-w-7xl mx-auto px-6 lg:px-8">
            <SectionTitle
              label="Services"
              title="전문 컨설팅 서비스"
              subtitle="기업의 다양한 니즈에 맞춘 종합 컨설팅 서비스를 제공합니다."
            />
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {services.map((service, i) => (
                <ServiceCard
                  key={service.title}
                  icon={service.icon}
                  title={service.title}
                  description={service.description}
                  index={i}
                />
              ))}
            </div>
          </div>
        </section>

        {/* ═══════════════ PORTFOLIO / PARTNERS ═══════════════ */}
        <section id="portfolio" className="relative py-28 md:py-36 overflow-hidden"
          style={{ background: "var(--gradient-section)" }}>
          <div className="max-w-7xl mx-auto px-6 lg:px-8">
            <SectionTitle
              label="Partners"
              title="신뢰할 수 있는 파트너사"
              subtitle="국내 주요 기업들과 함께 성장하고 있습니다."
            />

            {/* Achievement cards */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-20">
              {[
                { icon: CheckCircle2, stat: "500+", label: "성공적인 프로젝트", desc: "정부 과제, 인증 취득 등 다양한 분야에서 높은 성공률을 기록하고 있습니다." },
                { icon: TrendingUp, stat: "320억+", label: "누적 환급 금액", desc: "정밀한 세무 분석을 통해 고객사들에게 상당한 금액의 세금을 환급받아 드렸습니다." },
                { icon: Award, stat: "98%", label: "고객 재계약률", desc: "높은 서비스 만족도를 바탕으로 대부분의 고객사와 지속적인 파트너십을 유지합니다." },
              ].map((item, i) => (
                <AnimatedSection key={item.label} delay={i * 0.15}>
                  <div className="group p-8 rounded-2xl border border-border-subtle bg-bg-card
                                hover:bg-bg-card-hover hover:border-border-glow transition-all duration-500">
                    <div className="flex items-center gap-4 mb-4">
                      <div className="w-12 h-12 rounded-xl bg-accent/10 flex items-center justify-center
                                    group-hover:bg-accent/20 transition-all">
                        <item.icon className="w-6 h-6 text-accent" />
                      </div>
                      <div>
                        <span className="text-2xl font-black gradient-text">{item.stat}</span>
                        <p className="text-text-secondary text-xs">{item.label}</p>
                      </div>
                    </div>
                    <p className="text-text-secondary text-sm leading-relaxed">{item.desc}</p>
                  </div>
                </AnimatedSection>
              ))}
            </div>

            {/* Partner logo slider */}
            <AnimatedSection>
              <div className="overflow-hidden rounded-2xl border border-border-subtle bg-bg-card p-8">
                <p className="text-center text-text-secondary text-sm mb-8 tracking-wide uppercase font-medium">
                  Trusted by leading companies
                </p>
                <div className="relative">
                  <div className="absolute left-0 top-0 w-20 h-full bg-gradient-to-r from-bg-card to-transparent z-10" />
                  <div className="absolute right-0 top-0 w-20 h-full bg-gradient-to-l from-bg-card to-transparent z-10" />
                  <div className="flex animate-slide-left whitespace-nowrap">
                    {[...partners, ...partners].map((name, i) => (
                      <div
                        key={i}
                        className="inline-flex items-center justify-center mx-8 px-6 py-3 rounded-lg
                                 border border-border-subtle bg-primary/30 text-text-secondary
                                 text-sm font-medium shrink-0 hover:border-border-glow hover:text-accent-light
                                 transition-all duration-300"
                      >
                        {name}
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </AnimatedSection>
          </div>
        </section>

        {/* ═══════════════ CONTACT ═══════════════ */}
        <section id="contact" className="relative py-28 md:py-36 overflow-hidden bg-bg-dark bg-grid-pattern">
          <div className="max-w-7xl mx-auto px-6 lg:px-8">
            <SectionTitle
              label="Contact"
              title="문의하기"
              subtitle="비즈니스 성장에 대해 상담받아 보세요. 전문 컨설턴트가 신속하게 답변드립니다."
            />

            <div className="grid grid-cols-1 lg:grid-cols-5 gap-8">
              {/* Contact Info */}
              <AnimatedSection className="lg:col-span-2" direction="left">
                <div className="space-y-6">
                  {[
                    { icon: MapPin, title: "주소", content: "서울특별시 강남구 테헤란로 123\nAPEX타워 15층" },
                    { icon: Phone, title: "전화", content: "02-1234-5678" },
                    { icon: Mail, title: "이메일", content: "contact@apex.co.kr" },
                    { icon: Clock, title: "운영시간", content: "평일 09:00 - 18:00\n(주말/공휴일 휴무)" },
                  ].map((item) => (
                    <div
                      key={item.title}
                      className="group flex items-start gap-4 p-5 rounded-xl border border-border-subtle
                               bg-bg-card hover:bg-bg-card-hover hover:border-border-glow transition-all duration-300"
                    >
                      <div className="w-11 h-11 shrink-0 rounded-lg bg-accent/10 flex items-center justify-center
                                    group-hover:bg-accent/20 transition-all">
                        <item.icon className="w-5 h-5 text-accent" />
                      </div>
                      <div>
                        <h4 className="text-text-primary font-semibold text-sm mb-1">{item.title}</h4>
                        <p className="text-text-secondary text-sm whitespace-pre-line leading-relaxed">{item.content}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </AnimatedSection>

              {/* Contact Form */}
              <AnimatedSection className="lg:col-span-3" direction="right" delay={0.2}>
                <form
                  onSubmit={(e) => e.preventDefault()}
                  className="p-8 rounded-2xl border border-border-subtle bg-bg-card"
                >
                  <h3 className="text-xl font-bold text-text-primary mb-6">상담 문의</h3>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 mb-5">
                    <div className="relative">
                      <User size={16} className="absolute left-4 top-1/2 -translate-y-1/2 text-text-secondary" />
                      <input
                        type="text"
                        placeholder="이름"
                        className="w-full pl-11 pr-4 py-3.5 rounded-xl bg-primary/50 border border-border-subtle
                                 text-text-primary text-sm placeholder:text-text-secondary/50
                                 focus:outline-none focus:border-accent/50 focus:ring-1 focus:ring-accent/20
                                 transition-all duration-200"
                      />
                    </div>
                    <div className="relative">
                      <Mail size={16} className="absolute left-4 top-1/2 -translate-y-1/2 text-text-secondary" />
                      <input
                        type="email"
                        placeholder="이메일"
                        className="w-full pl-11 pr-4 py-3.5 rounded-xl bg-primary/50 border border-border-subtle
                                 text-text-primary text-sm placeholder:text-text-secondary/50
                                 focus:outline-none focus:border-accent/50 focus:ring-1 focus:ring-accent/20
                                 transition-all duration-200"
                      />
                    </div>
                  </div>
                  <div className="relative mb-5">
                    <Phone size={16} className="absolute left-4 top-4 text-text-secondary" />
                    <input
                      type="tel"
                      placeholder="연락처"
                      className="w-full pl-11 pr-4 py-3.5 rounded-xl bg-primary/50 border border-border-subtle
                               text-text-primary text-sm placeholder:text-text-secondary/50
                               focus:outline-none focus:border-accent/50 focus:ring-1 focus:ring-accent/20
                               transition-all duration-200"
                    />
                  </div>
                  <div className="relative mb-6">
                    <MessageSquare size={16} className="absolute left-4 top-4 text-text-secondary" />
                    <textarea
                      rows={5}
                      placeholder="문의 내용을 입력해주세요"
                      className="w-full pl-11 pr-4 py-3.5 rounded-xl bg-primary/50 border border-border-subtle
                               text-text-primary text-sm placeholder:text-text-secondary/50 resize-none
                               focus:outline-none focus:border-accent/50 focus:ring-1 focus:ring-accent/20
                               transition-all duration-200"
                    />
                  </div>
                  <button
                    type="submit"
                    className="w-full flex items-center justify-center gap-2 px-8 py-4 text-sm font-semibold
                             text-primary bg-gradient-to-r from-accent to-accent-light rounded-xl
                             hover:shadow-xl hover:shadow-accent/25 hover:-translate-y-0.5
                             active:translate-y-0 transition-all duration-300"
                  >
                    <Send size={16} />
                    문의 보내기
                  </button>
                </form>
              </AnimatedSection>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
