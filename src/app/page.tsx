"use client";

import { useRef, useEffect, useState } from "react";
import { motion, useInView, useMotionValue, useSpring } from "framer-motion";
import {
  ChevronDown,
  Send,
  User,
  Mail,
  MessageSquare,
  MapPin,
  Phone,
  Clock,
  Building2,
  TrendingUp,
  Briefcase,
  Shield,
  DollarSign,
  Landmark,
  Scale,
  Rocket,
  GitMerge,
  FileCheck,
  Lightbulb,
  BarChart3,
  Users,
  FlaskConical,
  BookOpen,
  Headphones,
  ArrowRight,
} from "lucide-react";

import Header from "@/components/Header";
import Footer from "@/components/Footer";
import AnimatedSection from "@/components/AnimatedSection";
import SectionTitle from "@/components/SectionTitle";

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

/* ─── Services Data (11개 – 원본 aphex.co.kr 동일) ─── */
const services = [
  {
    icon: TrendingUp,
    title: "기업 스케일업 프로그램",
    description: "정책기관 융자금, 무상지원금, 금융기관 대출, 투자유치, PCM, 기업인증, 지식재산권, 법인설립, 신용등급관리 등 기업 성장 전 분야를 통합 지원합니다.",
  },
  {
    icon: BarChart3,
    title: "기업재무관리",
    description: "자금 조달부터 투자, 수익 재투자까지 기업 활동의 순환과정에서 효율적인 자금의 흐름을 관리하여 기업 가치 극대화를 지원합니다.",
  },
  {
    icon: Building2,
    title: "PCM 개념 및 업무 Flow",
    description: "기획부터 설계, 시공, 준공, 임대까지 건축 프로젝트 전 과정을 통합 관리하는 프로젝트 건설관리(PCM) 서비스를 제공합니다.",
  },
  {
    icon: Scale,
    title: "상속 · 증여 전략",
    description: "가업승계 컨설팅, 상속·증여세 절세 전략, 지분 구조 재편, 가업상속공제·특례 적용, 가족·주주 간 분쟁 예방을 지원합니다.",
  },
  {
    icon: Landmark,
    title: "정부지원사업",
    description: "중소기업 R&D 사업, 기술개발 정책, 창업지원사업 등 정부 지원 사업 선정을 위한 전략 수립 및 신청을 대행합니다.",
  },
  {
    icon: DollarSign,
    title: "투자 유치",
    description: "투자유치 의사결정부터 IR Pitch Deck 작성, 투자자 미팅, 투자심의, 재무실사, 투자계약까지 7단계 프로세스를 지원합니다.",
  },
  {
    icon: Shield,
    title: "기업인증 전략",
    description: "기업부설연구소, 벤처기업 인증, 메인비즈, 이노비즈, ISO 인증 등 기업 신뢰도를 높이는 인증 취득 로드맵을 제공합니다.",
  },
  {
    icon: Rocket,
    title: "창업 전략",
    description: "개인사업자와 법인사업자의 차이점 분석, 법인전환 혜택(공신력 확보, 조세부담 감소, 가업승계) 등 창업 전략을 수립합니다.",
  },
  {
    icon: GitMerge,
    title: "스타트업 M&A 전략",
    description: "시장 진입과 확장, 기술 및 혁신 획득, 비용 절감, 인재 확보, 경쟁 우위 확보를 위한 M&A 전략을 수립합니다.",
  },
  {
    icon: FileCheck,
    title: "경정청구",
    description: "과다 납부된 세금 환급을 위해 국내 최고 세무사 인프라를 통한 세무 리스크 최소화 및 실무 중심의 전문 서비스를 제공합니다.",
  },
  {
    icon: Lightbulb,
    title: "IP 전략",
    description: "BM에 따른 기술/상표 보호, 지식재산권 확보, 가치평가, 특허권·상표권·디자인권 등 IP 포트폴리오 구축 및 사업화 전략을 수행합니다.",
  },
];

/* ─── Process Steps (원본 서비스 절차) ─── */
const processSteps = [
  {
    step: 1,
    title: "상담 요청 접수",
    description: "고객님의 문의 사항을 접수하고, 기본 정보를 확인합니다.",
  },
  {
    step: 2,
    title: "사전 상담 진행",
    description: "기업의 현황 및 필요 사항에 대해 1:1 맞춤 상담을 진행합니다.",
  },
  {
    step: 3,
    title: "자료 검토 및 분석",
    description: "제출받은 자료를 바탕으로 정밀 진단 및 검토를 실시합니다.",
  },
  {
    step: 4,
    title: "컨설팅 제안서 제공",
    description: "분석 결과에 따라 최적화된 컨설팅 방향과 실행안을 제안드립니다.",
  },
  {
    step: 5,
    title: "계약 및 업무 개시",
    description: "제안서 승인 및 입금 확인 후, 컨설팅 업무가 본격적으로 착수됩니다.",
  },
];

/* ─── 경영지도사 업무 범위 ─── */
const cmcAreas = [
  { num: "01", title: "재무관리", desc: "재무관리와 회계의 진단·지도" },
  { num: "02", title: "인적자원관리", desc: "인사, 조직, 노무, 사무관리의 진단·지도" },
  { num: "03", title: "생산관리", desc: "생산, 품질관리의 진단·지도" },
  { num: "04", title: "마케팅 관리", desc: "유통·판매관리 및 수출입 업무의 진단·지도" },
  { num: "05", title: "상담·자문", desc: "제1호부터 제4호까지와 관련된 상담, 자문, 조사, 분석, 평가, 확인" },
  { num: "06", title: "업무 대행", desc: "중소기업 관계 법령에 따라 기관에 하는 신고, 신청, 진술, 보고 등의 대행" },
  { num: "07", title: "관련 법령", desc: "중소벤처기업부 소관 법령 등 중소기업의 경영 또는 기술과 관련된 법령" },
];

/* ─── 조직도 ─── */
const departments = [
  { icon: Briefcase, name: "경영컨설팅부" },
  { icon: FlaskConical, name: "R&D사업부" },
  { icon: BookOpen, name: "경영연구부" },
  { icon: Headphones, name: "경영지원부" },
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
                중소기업 경영컨설팅
              </span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.15, ease: [0.25, 0.4, 0.25, 1] }}
              className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black leading-[1.1] mb-8"
            >
              중소기업의 <span className="gradient-text text-glow">성장</span> 파트너
              <br />
              <span className="text-3xl sm:text-4xl md:text-5xl lg:text-5xl">맞춤형 경영 컨설팅</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3, ease: [0.25, 0.4, 0.25, 1] }}
              className="text-text-secondary text-base md:text-lg max-w-2xl mx-auto mb-12 leading-relaxed"
            >
              기업재무관리, 기업인증, 투자유치, 경정청구, IP전략 등
              <br className="hidden sm:block" />
              기업 맞춤 자문으로 목표 달성을 함께합니다.
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
                서비스 안내
              </a>
              <a
                href="#contact"
                className="px-8 py-4 text-sm font-semibold text-text-secondary border border-border-subtle
                         rounded-xl hover:border-accent/50 hover:text-accent-light transition-all duration-300
                         hover:-translate-y-0.5"
              >
                상담 요청
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
              title="경영지도사(CMC)의 업무 소개"
              subtitle="(주)아펙스파트너스는 중소기업의 지속 가능한 성장을 위해 경영지도사의 전문 역량을 바탕으로 최적화된 솔루션을 제공합니다."
            />

            {/* 경영지도사 업무 범위 */}
            <AnimatedSection>
              <h3 className="text-xl font-bold text-text-primary mb-8 text-center">경영지도사의 업무 범위</h3>
            </AnimatedSection>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 mb-20">
              {cmcAreas.map((item, i) => (
                <AnimatedSection key={item.num} delay={i * 0.08}>
                  <div className="group p-5 rounded-2xl border border-border-subtle bg-bg-card
                                hover:bg-bg-card-hover hover:border-border-glow transition-all duration-500 h-full">
                    <div className="w-10 h-10 rounded-lg bg-accent/10 flex items-center justify-center mb-4
                                  group-hover:bg-accent/20 transition-all duration-300">
                      <span className="text-accent font-bold text-sm">{item.num}</span>
                    </div>
                    <h4 className="text-base font-bold text-text-primary mb-2">{item.title}</h4>
                    <p className="text-text-secondary text-sm leading-relaxed">{item.desc}</p>
                  </div>
                </AnimatedSection>
              ))}
            </div>

            {/* 조직도 */}
            <AnimatedSection>
              <h3 className="text-xl font-bold text-text-primary mb-8 text-center">조직도</h3>
            </AnimatedSection>
            <div className="flex justify-center mb-16">
              <div className="text-center">
                {/* CEO */}
                <AnimatedSection>
                  <div className="inline-block px-8 py-4 rounded-2xl border-2 border-accent/40 bg-accent/10 mb-6">
                    <p className="text-accent font-bold text-lg">CEO</p>
                    <p className="text-text-primary font-semibold">송민정</p>
                  </div>
                </AnimatedSection>
                {/* connector */}
                <div className="w-px h-8 bg-border-subtle mx-auto mb-6" />
                {/* departments */}
                <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
                  {departments.map((dept, i) => (
                    <AnimatedSection key={dept.name} delay={i * 0.1}>
                      <div className="group p-5 rounded-2xl border border-border-subtle bg-bg-card
                                    hover:bg-bg-card-hover hover:border-border-glow transition-all duration-500 text-center">
                        <div className="w-12 h-12 mx-auto rounded-xl bg-accent/10 flex items-center justify-center mb-3
                                      group-hover:bg-accent/20 transition-all duration-300">
                          <dept.icon className="w-6 h-6 text-accent" />
                        </div>
                        <p className="text-text-primary font-semibold text-sm">{dept.name}</p>
                      </div>
                    </AnimatedSection>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ═══════════════ SERVICES (11개) ═══════════════ */}
        <section id="services" className="relative py-28 md:py-36 overflow-hidden bg-bg-dark bg-grid-pattern">
          <div className="max-w-7xl mx-auto px-6 lg:px-8">
            <SectionTitle
              label="Services"
              title="주요 서비스"
              subtitle="기업의 다양한 니즈에 맞춘 11가지 전문 컨설팅 서비스를 제공합니다."
            />
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {services.map((service, i) => (
                <AnimatedSection key={service.title} delay={i * 0.08}>
                  <div className="group p-6 rounded-2xl border border-border-subtle bg-bg-card
                                hover:bg-bg-card-hover hover:border-border-glow transition-all duration-500 h-full
                                flex flex-col">
                    <div className="w-12 h-12 rounded-xl bg-accent/10 flex items-center justify-center mb-5
                                  group-hover:bg-accent/20 transition-all duration-300 shrink-0">
                      <service.icon className="w-6 h-6 text-accent" />
                    </div>
                    <h3 className="text-lg font-bold text-text-primary mb-3">{service.title}</h3>
                    <p className="text-text-secondary text-sm leading-relaxed flex-1">{service.description}</p>
                    <div className="mt-4 flex items-center gap-1 text-accent text-sm font-medium opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <span>자세히 보기</span>
                      <ArrowRight size={14} />
                    </div>
                  </div>
                </AnimatedSection>
              ))}
            </div>
          </div>
        </section>

        {/* ═══════════════ PROCESS (서비스 절차 5단계) ═══════════════ */}
        <section id="process" className="relative py-28 md:py-36 overflow-hidden"
          style={{ background: "var(--gradient-section)" }}>
          <div className="max-w-7xl mx-auto px-6 lg:px-8">
            <SectionTitle
              label="Process"
              title="서비스 절차"
              subtitle="상담부터 실행까지, 맞춤형 컨설팅으로 성공적인 비즈니스를 완성해 드립니다."
            />

            <div className="grid grid-cols-1 md:grid-cols-5 gap-6">
              {processSteps.map((item, i) => (
                <AnimatedSection key={item.step} delay={i * 0.12}>
                  <div className="group relative p-6 rounded-2xl border border-border-subtle bg-bg-card
                                hover:bg-bg-card-hover hover:border-border-glow transition-all duration-500 h-full text-center">
                    {/* Step number  */}
                    <div className="w-14 h-14 mx-auto rounded-full bg-gradient-to-br from-accent to-accent-light
                                  flex items-center justify-center mb-5 shadow-lg shadow-accent/20
                                  group-hover:shadow-accent/40 transition-shadow duration-300">
                      <span className="text-primary font-black text-lg">{item.step}</span>
                    </div>
                    <h3 className="text-base font-bold text-text-primary mb-2">{item.title}</h3>
                    <p className="text-text-secondary text-sm leading-relaxed">{item.description}</p>

                    {/* Arrow connector (hidden on last item) */}
                    {i < processSteps.length - 1 && (
                      <div className="hidden md:flex absolute -right-3 top-1/2 -translate-y-1/2 z-10">
                        <ArrowRight size={20} className="text-accent/40" />
                      </div>
                    )}
                  </div>
                </AnimatedSection>
              ))}
            </div>
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
                <div className="space-y-5">
                  {[
                    { icon: MapPin, title: "역삼 사무소", content: "서울특별시 강남구 테헤란로 39길 57, 3층 (역삼동)" },
                    { icon: MapPin, title: "청담 사무소", content: "서울특별시 강남구 도산대로 544, 3층 (청담동)" },
                    { icon: Mail, title: "이메일", content: "aphex_official@daum.net" },
                    { icon: Users, title: "대표", content: "CEO 송민정" },
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
