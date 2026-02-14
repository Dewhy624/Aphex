"use client";

import { motion } from "framer-motion";
import { type LucideIcon } from "lucide-react";

interface ServiceCardProps {
    icon: LucideIcon;
    title: string;
    description: string;
    index: number;
}

export default function ServiceCard({
    icon: Icon,
    title,
    description,
    index,
}: ServiceCardProps) {
    return (
        <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            whileHover={{ y: -8, transition: { duration: 0.3 } }}
            className="group relative p-8 rounded-2xl border border-border-subtle bg-bg-card
                 hover:bg-bg-card-hover hover:border-border-glow
                 transition-all duration-500 cursor-pointer overflow-hidden"
        >
            {/* Glow effect */}
            <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500
                      bg-[radial-gradient(circle_at_50%_0%,rgba(201,168,76,0.08),transparent_70%)]" />

            {/* Icon */}
            <div className="relative w-14 h-14 rounded-xl bg-gradient-to-br from-accent/20 to-accent/5
                      flex items-center justify-center mb-6 group-hover:from-accent/30 group-hover:to-accent/10
                      transition-all duration-500">
                <Icon className="w-7 h-7 text-accent group-hover:text-accent-light transition-colors duration-300" />
            </div>

            {/* Content */}
            <h3 className="relative text-xl font-bold text-text-primary mb-3 group-hover:text-accent-light transition-colors duration-300">
                {title}
            </h3>
            <p className="relative text-text-secondary text-sm leading-relaxed">
                {description}
            </p>

            {/* Bottom accent line on hover */}
            <div className="absolute bottom-0 left-0 w-0 h-[2px] bg-gradient-to-r from-accent to-accent-light
                      group-hover:w-full transition-all duration-500" />
        </motion.div>
    );
}
