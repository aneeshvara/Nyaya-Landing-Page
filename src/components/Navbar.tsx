"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { Menu } from "lucide-react";

export default function Navbar() {
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 50);
        };
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <nav
            className={`fixed w-full z-50 transition-all duration-300 bg-primary/80 backdrop-blur-md border-b border-white/5 ${scrolled ? "shadow-lg" : ""
                }`}
        >
            <div className="container mx-auto px-6 py-4 flex justify-between items-center">
                <a href="#" className="flex items-center gap-2 group">
                    <Image
                        src="/images/logo.png"
                        alt="Nyaya Logo"
                        width={40}
                        height={40}
                        loading="eager"
                        style={{ width: 'auto', height: '40px' }}
                        className="object-contain group-hover:scale-110 transition-transform drop-shadow-[0_0_8px_rgba(46,139,159,0.5)]"
                    />
                    <span className="text-2xl font-serif font-bold text-white tracking-wide">
                        Nyaya
                    </span>
                </a>

                <div className="hidden md:flex items-center gap-8">
                    <a
                        href="#hero"
                        className="text-neutral hover:text-teal transition-colors text-sm font-medium tracking-wide"
                    >
                        HOME
                    </a>
                    <a
                        href="#features"
                        className="text-neutral hover:text-teal transition-colors text-sm font-medium tracking-wide"
                    >
                        FEATURES
                    </a>
                    <a
                        href="#team"
                        className="text-neutral hover:text-teal transition-colors text-sm font-medium tracking-wide"
                    >
                        TEAM
                    </a>
                    <a
                        href="#contact"
                        className="text-neutral hover:text-teal transition-colors text-sm font-medium tracking-wide"
                    >
                        CONTACT
                    </a>
                    <a
                        href="https://app.nyaya.site"
                        className="px-6 py-2 border border-teal text-teal font-bold rounded-full hover:bg-teal hover:text-white transition-all transform hover:-translate-y-1 shadow-[0_0_10px_rgba(46,139,159,0.2)] hover:shadow-[0_0_20px_rgba(46,139,159,0.5)]"
                    >
                        Get Started
                    </a>
                </div>

                <button
                    className="md:hidden text-white hover:text-teal transition-colors"
                    onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                >
                    <Menu className="w-8 h-8" />
                </button>
            </div>

            {/* Mobile Menu */}
            {mobileMenuOpen && (
                <div className="md:hidden bg-primary absolute w-full border-t border-white/10">
                    <div className="flex flex-col p-6 space-y-4">
                        <a
                            href="#hero"
                            className="text-neutral hover:text-teal"
                            onClick={() => setMobileMenuOpen(false)}
                        >
                            Home
                        </a>
                        <a
                            href="#features"
                            className="text-neutral hover:text-teal"
                            onClick={() => setMobileMenuOpen(false)}
                        >
                            Features
                        </a>
                        <a
                            href="#team"
                            className="text-neutral hover:text-teal"
                            onClick={() => setMobileMenuOpen(false)}
                        >
                            Team
                        </a>
                        <a
                            href="#contact"
                            className="text-neutral hover:text-teal"
                            onClick={() => setMobileMenuOpen(false)}
                        >
                            Contact
                        </a>
                        <a href="https://app.nyaya.site" className="text-teal font-bold">
                            Get Started
                        </a>
                    </div>
                </div>
            )}
        </nav>
    );
}
