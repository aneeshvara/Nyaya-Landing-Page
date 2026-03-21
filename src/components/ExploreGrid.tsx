"use client";

import { useRef } from "react";
import { MessageSquare, BookOpen, Award } from "lucide-react";

interface SpotlightCardProps {
    icon: React.ReactNode;
    iconBg: string;
    iconHoverBg: string;
    title: string;
    description: string;
    barColor: string;
    delayClass?: string;
}

function SpotlightCard({
    icon,
    iconBg,
    iconHoverBg,
    title,
    description,
    barColor,
    delayClass = "",
}: SpotlightCardProps) {
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
        <div
            ref={cardRef}
            className={`spotlight-card group animate-on-scroll fade-in-up cursor-pointer ${delayClass}`}
            onMouseMove={handleMouseMove}
        >
            <div className="spotlight-bg" />
            <div className="spotlight-content p-8">
                <div
                    className={`w-12 h-12 ${iconBg} rounded-lg flex items-center justify-center mb-6 ${iconHoverBg} transition-colors shadow-lg`}
                >
                    {icon}
                </div>
                <h3 className="text-xl font-bold mb-3">{title}</h3>
                <p className="text-sm text-neutral mb-6 leading-relaxed">
                    {description}
                </p>
                <div className="w-full h-1 bg-white/10 rounded-full overflow-hidden">
                    <div
                        className={`w-0 h-full ${barColor} group-hover:w-full transition-all duration-500 ease-out`}
                    />
                </div>
            </div>
        </div>
    );
}

export default function ExploreGrid() {
    return (
        <section id="explore" className="py-24 relative">
            <div className="container mx-auto px-6">
                <div className="grid md:grid-cols-3 gap-8">
                    <SpotlightCard
                        icon={<MessageSquare className="w-5 h-5" />}
                        iconBg="bg-teal/10 text-teal"
                        iconHoverBg="group-hover:bg-teal group-hover:text-white shadow-teal/5"
                        title="Instant Clear Explanations"
                        description="Get clear, reliable explanations to your questions through our AI-powered chatbot trained on Sri Lankan law, available anytime you need it."
                        barColor="bg-teal"
                    />

                    <SpotlightCard
                        icon={<BookOpen className="w-5 h-5" />}
                        iconBg="bg-white/5 text-white"
                        iconHoverBg="group-hover:bg-white group-hover:text-primary"
                        title="Effortless Case & Section Referencing"
                        description="Stay organised with automatic citation management that helps you keep track of legal sections, notes, and references without the hassle."
                        barColor="bg-white"
                        delayClass="delay-100"
                    />

                    <SpotlightCard
                        icon={<Award className="w-5 h-5" />}
                        iconBg="bg-secondary/10 text-secondary"
                        iconHoverBg="group-hover:bg-secondary group-hover:text-primary shadow-secondary/5"
                        title="Master Law With Smart Revision"
                        description="Reinforce your learning through targeted quizzes designed to test your understanding and track your improvement across every topic."
                        barColor="bg-secondary"
                        delayClass="delay-200"
                    />
                </div>
            </div>
        </section>
    );
}
