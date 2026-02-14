"use client";

import AnimatedSection from "./AnimatedSection";

interface SectionTitleProps {
    label: string;
    title: string;
    subtitle?: string;
    align?: "left" | "center";
}

export default function SectionTitle({
    label,
    title,
    subtitle,
    align = "center",
}: SectionTitleProps) {
    const alignClass = align === "center" ? "text-center items-center" : "text-left items-start";

    return (
        <AnimatedSection className={`flex flex-col ${alignClass} mb-16`}>
            <span className="text-accent font-semibold text-sm tracking-[0.2em] uppercase mb-4">
                {label}
            </span>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-text-primary leading-tight mb-4">
                {title}
            </h2>
            <div className="w-20 h-[2px] bg-gradient-to-r from-accent to-accent-light mb-6 animate-line" />
            {subtitle && (
                <p className="text-text-secondary text-base md:text-lg max-w-2xl leading-relaxed">
                    {subtitle}
                </p>
            )}
        </AnimatedSection>
    );
}
