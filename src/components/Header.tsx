"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";

const navLinks = [
    { label: "Home", href: "#hero" },
    { label: "About", href: "#about" },
    { label: "Services", href: "#services" },
    { label: "Portfolio", href: "#portfolio" },
    { label: "Contact", href: "#contact" },
];

export default function Header() {
    const [scrolled, setScrolled] = useState(false);
    const [mobileOpen, setMobileOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => setScrolled(window.scrollY > 50);
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
        e.preventDefault();
        setMobileOpen(false);
        const target = document.querySelector(href);
        if (target) {
            target.scrollIntoView({ behavior: "smooth" });
        }
    };

    return (
        <motion.header
            initial={{ y: -100 }}
            animate={{ y: 0 }}
            transition={{ duration: 0.6, ease: [0.25, 0.4, 0.25, 1] }}
            className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${scrolled
                    ? "glass shadow-lg shadow-black/20"
                    : "bg-transparent"
                }`}
        >
            <div className="max-w-7xl mx-auto px-6 lg:px-8">
                <div className="flex items-center justify-between h-20">
                    {/* Logo */}
                    <a
                        href="#hero"
                        onClick={(e) => handleNavClick(e, "#hero")}
                        className="flex items-center gap-3 group"
                    >
                        <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-accent to-accent-light flex items-center justify-center
                            shadow-lg shadow-accent/20 group-hover:shadow-accent/40 transition-shadow duration-300">
                            <span className="text-primary font-black text-lg">A</span>
                        </div>
                        <span className="text-xl font-bold tracking-tight text-text-primary">
                            APE<span className="gradient-text">X</span>
                        </span>
                    </a>

                    {/* Desktop Nav */}
                    <nav className="hidden md:flex items-center gap-1">
                        {navLinks.map((link) => (
                            <a
                                key={link.href}
                                href={link.href}
                                onClick={(e) => handleNavClick(e, link.href)}
                                className="relative px-4 py-2 text-sm font-medium text-text-secondary
                         hover:text-accent-light transition-colors duration-300 group"
                            >
                                {link.label}
                                <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-0
                               h-[2px] bg-accent group-hover:w-4/5 transition-all duration-300" />
                            </a>
                        ))}
                        <a
                            href="#contact"
                            onClick={(e) => handleNavClick(e, "#contact")}
                            className="ml-4 px-6 py-2.5 text-sm font-semibold text-primary bg-gradient-to-r from-accent to-accent-light
                       rounded-lg hover:shadow-lg hover:shadow-accent/25 transition-all duration-300
                       hover:-translate-y-0.5 active:translate-y-0"
                        >
                            문의하기
                        </a>
                    </nav>

                    {/* Mobile Toggle */}
                    <button
                        onClick={() => setMobileOpen(!mobileOpen)}
                        className="md:hidden p-2 text-text-secondary hover:text-accent transition-colors"
                        aria-label="Toggle menu"
                    >
                        {mobileOpen ? <X size={24} /> : <Menu size={24} />}
                    </button>
                </div>
            </div>

            {/* Mobile Menu */}
            <AnimatePresence>
                {mobileOpen && (
                    <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: "auto" }}
                        exit={{ opacity: 0, height: 0 }}
                        transition={{ duration: 0.3 }}
                        className="md:hidden glass border-t border-border-subtle overflow-hidden"
                    >
                        <nav className="flex flex-col p-6 gap-2">
                            {navLinks.map((link, i) => (
                                <motion.a
                                    key={link.href}
                                    href={link.href}
                                    onClick={(e) => handleNavClick(e, link.href)}
                                    initial={{ opacity: 0, x: -20 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    transition={{ delay: i * 0.05 }}
                                    className="px-4 py-3 text-text-secondary hover:text-accent-light
                           hover:bg-primary-light/30 rounded-lg transition-all duration-200"
                                >
                                    {link.label}
                                </motion.a>
                            ))}
                            <a
                                href="#contact"
                                onClick={(e) => handleNavClick(e, "#contact")}
                                className="mt-2 px-6 py-3 text-center text-sm font-semibold text-primary
                         bg-gradient-to-r from-accent to-accent-light rounded-lg"
                            >
                                문의하기
                            </a>
                        </nav>
                    </motion.div>
                )}
            </AnimatePresence>
        </motion.header>
    );
}
