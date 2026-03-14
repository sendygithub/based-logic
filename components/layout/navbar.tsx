"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, TerminalSquare } from "lucide-react";
import { Magnetic } from "@/components/animations/magnetic";
import { Button } from "@/components/ui/button";

const navLinks = [
    { name: "Home", href: "/" },
    { name: "Algorithms", href: "/dashboard" },
];

export function Navbar() {
    const [isScrolled, setIsScrolled] = useState(false);
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
    const pathname = usePathname();

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 50);
        };
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <motion.header
            initial={{ y: -100 }}
            animate={{ y: 0 }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? "py-4" : "py-6"}`}
        >
            <div className="container mx-auto px-4 md:px-6">
                <div className={`flex items-center justify-between rounded-full px-6 py-3 transition-all duration-500 ${isScrolled ? "glass shadow-lg" : "bg-transparent"}`}>

                    <Link href="/" className="flex items-center gap-2 group z-50 interactive">
                        <Magnetic>
                            <div className="bg-primary text-primary-foreground p-2 rounded-xl group-hover:rotate-12 transition-transform duration-300">
                                <TerminalSquare size={20} strokeWidth={2.5} />
                            </div>
                        </Magnetic>
                        <span className="font-bold text-lg tracking-tight">Logika.js</span>
                    </Link>

                    {/* Desktop Nav */}
                    <nav className="hidden md:flex items-center gap-8">
                        {navLinks.map((link) => (
                            <Magnetic key={link.name}>
                                <Link
                                    href={link.href}
                                    className={`text-sm font-medium transition-colors hover:text-primary relative py-2 interactive ${pathname === link.href ? "text-foreground" : "text-muted-foreground"}`}
                                >
                                    {link.name}
                                    {pathname === link.href && (
                                        <motion.div
                                            layoutId="active-nav-indicator"
                                            className="absolute bottom-0 left-0 right-0 h-0.5 bg-primary rounded-t-full"
                                            transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                                        />
                                    )}
                                </Link>
                            </Magnetic>
                        ))}
                    </nav>

                    <div className="hidden md:flex items-center gap-4">
                        <Magnetic>
                            <Button variant="default" className="rounded-full px-6 shadow-lg shadow-primary/20 transition-all hover:shadow-primary/40 interactive">
                                <Link href="/dashboard">Get Started</Link>
                            </Button>
                        </Magnetic>
                    </div>

                    {/* Mobile Menu Toggle */}
                    <button
                        className="md:hidden z-50 p-2 text-foreground interactive"
                        onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                    >
                        {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
                    </button>
                </div>
            </div>

            {/* Mobile Menu */}
            <AnimatePresence>
                {mobileMenuOpen && (
                    <motion.div
                        initial={{ opacity: 0, y: -20, scale: 0.95 }}
                        animate={{ opacity: 1, y: 0, scale: 1 }}
                        exit={{ opacity: 0, y: -20, scale: 0.95 }}
                        transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
                        className="absolute top-full left-4 right-4 mt-2 p-6 glass rounded-3xl md:hidden overflow-hidden origin-top"
                    >
                        <div className="flex flex-col gap-6">
                            {navLinks.map((link, i) => (
                                <motion.div
                                    key={link.name}
                                    initial={{ opacity: 0, x: -20 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    transition={{ delay: i * 0.1 }}
                                >
                                    <Link
                                        href={link.href}
                                        onClick={() => setMobileMenuOpen(false)}
                                        className={`text-xl font-semibold transition-colors block interactive ${pathname === link.href ? "text-primary" : "text-foreground"}`}
                                    >
                                        {link.name}
                                    </Link>
                                </motion.div>
                            ))}
                            <motion.div
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                transition={{ delay: 0.3 }}
                                className="pt-4 border-t border-border"
                            >
                                <Button className="w-full rounded-full interactive" size="lg">
                                    <Link href="/dashboard">Get Started</Link>
                                </Button>
                            </motion.div>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </motion.header>
    );
}
