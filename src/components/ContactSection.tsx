"use client";

import { useRef } from "react";
import { MapPin, Mail } from "lucide-react";

export default function ContactSection() {
    const cardRef = useRef<HTMLDivElement>(null);

    const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
        if (!cardRef.current) return;
        const rect = cardRef.current.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;
        cardRef.current.style.setProperty("--x", `${x}px`);
        cardRef.current.style.setProperty("--y", `${y}px`);
    };

    return (
        <section id="contact" className="py-24 relative overflow-hidden">
            <div className="absolute right-0 top-0 w-1/2 h-full bg-teal/5 skew-x-12 pointer-events-none" />

            <div className="container mx-auto px-6 relative z-10">
                <div className="grid lg:grid-cols-2 gap-16">
                    {/* CTA Text */}
                    <div className="animate-on-scroll fade-in-up">
                        <h2 className="text-4xl lg:text-5xl font-serif font-bold mb-6">
                            Ready to Start Learning <br />
                            <span className="text-brand-gradient">Sri Lankan Law?</span>
                        </h2>
                        <p className="text-neutral mb-8 text-lg">
                            Join thousands of legal professionals and students mastering the
                            law with Nyaya&apos;s advanced platform.
                        </p>

                        <div className="space-y-6 mb-12">
                            <div className="flex items-start gap-4 group">
                                <div className="w-10 h-10 rounded-full bg-teal/10 flex items-center justify-center text-teal mt-1 group-hover:bg-teal group-hover:text-white transition-colors">
                                    <MapPin className="w-5 h-5" />
                                </div>
                                <div>
                                    <h4 className="font-bold text-white">Visit Us</h4>
                                    <p className="text-neutral text-sm">Colombo, Sri Lanka</p>
                                </div>
                            </div>
                            <div className="flex items-start gap-4 group">
                                <div className="w-10 h-10 rounded-full bg-teal/10 flex items-center justify-center text-teal mt-1 group-hover:bg-teal group-hover:text-white transition-colors">
                                    <Mail className="w-5 h-5" />
                                </div>
                                <div>
                                    <h4 className="font-bold text-white">Email Us</h4>
                                    <p className="text-neutral text-sm">info@nyaya.lk</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Contact Form with Spotlight Effect */}
                    <div className="animate-on-scroll fade-in-up delay-200">
                        <div
                            ref={cardRef}
                            className="spotlight-card"
                            onMouseMove={handleMouseMove}
                        >
                            <div className="spotlight-bg" />
                            <form className="spotlight-content p-8" onSubmit={(e) => e.preventDefault()}>
                                <h3 className="text-2xl font-bold mb-6">Get in Touch</h3>
                                <div className="grid grid-cols-2 gap-4 mb-4">
                                    <div className="col-span-2 md:col-span-1">
                                        <label className="block text-sm text-neutral mb-2">
                                            Name
                                        </label>
                                        <input
                                            type="text"
                                            className="w-full bg-primary/50 border border-white/10 rounded-lg px-4 py-3 focus:border-teal focus:outline-none focus:ring-1 focus:ring-teal transition-colors"
                                            placeholder="John Doe"
                                        />
                                    </div>
                                    <div className="col-span-2 md:col-span-1">
                                        <label className="block text-sm text-neutral mb-2">
                                            Email
                                        </label>
                                        <input
                                            type="email"
                                            className="w-full bg-primary/50 border border-white/10 rounded-lg px-4 py-3 focus:border-teal focus:outline-none focus:ring-1 focus:ring-teal transition-colors"
                                            placeholder="john@example.com"
                                        />
                                    </div>
                                </div>
                                <div className="mb-4">
                                    <label className="block text-sm text-neutral mb-2">
                                        Message
                                    </label>
                                    <textarea
                                        rows={4}
                                        className="w-full bg-primary/50 border border-white/10 rounded-lg px-4 py-3 focus:border-teal focus:outline-none focus:ring-1 focus:ring-teal transition-colors"
                                        placeholder="How can we help you?"
                                    />
                                </div>
                                <button
                                    type="submit"
                                    className="w-full bg-gradient-to-r from-secondary to-teal hover:from-white hover:to-white hover:text-primary text-primary font-bold py-4 rounded-lg transition-all transform hover:-translate-y-1 shadow-lg shadow-teal/20"
                                >
                                    Send Message
                                </button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
