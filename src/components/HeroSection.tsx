"use client";

import { useEffect, useRef, useCallback } from "react";
import Image from "next/image";

export default function HeroSection() {
    const containerRef = useRef<HTMLDivElement>(null);
    const isHoveringRef = useRef(false);
    const rafRef = useRef<number | null>(null);

    const autoRotateGlow = useCallback(() => {
        if (!isHoveringRef.current && containerRef.current) {
            const rect = containerRef.current.getBoundingClientRect();
            const width = rect.width || 300;
            const height = rect.height || 300;

            const time = Date.now() / 1500;
            const radius = width / 2.8;

            const centerX = width / 2;
            const centerY = height / 2;

            const x = centerX + Math.cos(time) * radius;
            const y = centerY + Math.sin(time) * radius;

            containerRef.current.style.setProperty("--x", `${x}px`);
            containerRef.current.style.setProperty("--y", `${y}px`);
        }
        rafRef.current = requestAnimationFrame(autoRotateGlow);
    }, []);

    useEffect(() => {
        rafRef.current = requestAnimationFrame(autoRotateGlow);
        return () => {
            if (rafRef.current) cancelAnimationFrame(rafRef.current);
        };
    }, [autoRotateGlow]);

    const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
        isHoveringRef.current = true;
        if (!containerRef.current) return;
        const rect = containerRef.current.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;
        containerRef.current.style.setProperty("--x", `${x}px`);
        containerRef.current.style.setProperty("--y", `${y}px`);
    };

    return (
        <section
            id="hero"
            className="min-h-screen relative flex items-center justify-center overflow-hidden pt-20"
        >
            {/* Background Elements */}
            <div className="absolute inset-0 grid-bg opacity-20 pointer-events-none" />
            <div className="absolute inset-0 bg-hero-pattern" />

            {/* Decorative Orbs */}
            <div className="absolute top-1/4 left-1/4 w-[500px] h-[500px] bg-secondary/10 rounded-full blur-[100px] pointer-events-none animate-pulse" />
            <div
                className="absolute bottom-1/4 right-1/4 w-[400px] h-[400px] bg-teal/10 rounded-full blur-[100px] pointer-events-none animate-pulse"
                style={{ animationDelay: "2s" }}
            />

            <div className="container mx-auto px-6 relative z-10">
                <div className="grid lg:grid-cols-2 gap-12 items-center">
                    {/* Text Content */}
                    <div className="text-center lg:text-left animate-on-scroll fade-in-up relative z-20">
                        <h1 className="text-4xl md:text-5xl lg:text-7xl font-serif font-bold leading-tight mb-6">
                            Master the Lankan Law with{" "}
                            <span className="text-brand-gradient">Nyaya</span>
                        </h1>
                        <p className="text-neutral/80 text-base md:text-lg mb-8 leading-relaxed max-w-xl mx-auto lg:mx-0">
                            Empowering Sri Lankans by providing a modern and accessible
                            platform to learn and engage with law.
                        </p>

                        <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                            <a
                                href="https://app.nyaya.site"
                                className="px-6 py-3 text-sm md:px-8 md:py-4 md:text-base bg-secondary text-primary font-bold rounded-lg hover:bg-white hover:scale-105 transition-all shadow-[0_0_20px_rgba(184,159,107,0.3)]"
                            >
                                Get Started
                            </a>
                            <a
                                href="#features"
                                className="px-6 py-3 text-sm md:px-8 md:py-4 md:text-base border border-teal/50 text-teal-glow font-medium rounded-lg hover:bg-teal hover:text-white transition-all shadow-[0_0_15px_rgba(46,139,159,0.1)] hover:shadow-[0_0_25px_rgba(46,139,159,0.4)]"
                            >
                                Learn More
                            </a>
                        </div>
                    </div>

                    {/* Hero Visual */}
                    <div className="relative flex justify-center lg:justify-end animate-on-scroll fade-in-up delay-200">
                        <div
                            ref={containerRef}
                            className="hero-image-container relative w-full max-w-4xl aspect-square flex items-center justify-center group cursor-crosshair"
                            onMouseMove={handleMouseMove}
                            onMouseEnter={() => (isHoveringRef.current = true)}
                            onMouseLeave={() => (isHoveringRef.current = false)}
                        >
                            {/* Base Layer */}
                            <Image
                                src="/images/hero.png"
                                alt="Sri Lanka Silhouette"
                                fill
                                sizes="(max-width: 768px) 100vw, 50vw"
                                className="hero-base-img"
                                priority
                            />
                            {/* Reveal Layer */}
                            <Image
                                src="/images/hero.png"
                                alt="Sri Lanka Glow"
                                fill
                                sizes="(max-width: 768px) 100vw, 50vw"
                                className="hero-reveal-img"
                                priority
                            />
                            {/* Background Outline */}
                            <div className="absolute inset-0 bg-gradient-to-tr from-teal/10 to-secondary/5 rounded-full blur-3xl -z-10 opacity-30" />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
