import Image from "next/image";
import { Bot, Library, FileQuestion, ArrowRight } from "lucide-react";

interface FeaturePillProps {
  direction: "right" | "left";
  icon: React.ReactNode;
  title: string;
  description: string;
  buttonText?: string;
  buttonColor?: string;
  buttonHref?: string;
  imageSrc: string;
  imageAlt: string;
  className?: string;
  comingSoon?: boolean;
}

function FeaturePill({
  direction,
  icon,
  title,
  description,
  buttonText,
  buttonColor = "text-teal",
  buttonHref = "#",
  imageSrc,
  imageAlt,
  className = "",
  comingSoon = false,
}: FeaturePillProps) {
  const isRight = direction === "right";

  return (
    <div className={`feature-pill-section pill-${direction} ${className}`}>
      <div className="pill-bg shadow-2xl shadow-black/50" />
      <div className="container mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Content */}
          <div
            className={`animate-on-scroll ${isRight ? "slide-in-left" : "slide-in-right"} ${!isRight ? "order-1 lg:order-2 lg:pl-12" : ""
              }`}
          >
            <div
              className={`w-16 h-16 ${isRight ? "bg-teal/10 border-teal/30" : "bg-secondary/10 border-secondary/30"
                } rounded-2xl flex items-center justify-center mb-6 border`}
            >
              {icon}
            </div>
            <div className="flex items-center gap-3 mb-6">
              <h3 className="text-4xl font-serif font-bold text-white">
                {title}
              </h3>
              {comingSoon && (
                <span className="px-3 py-1 text-xs font-bold uppercase tracking-wider bg-secondary/20 text-secondary border border-secondary/30 rounded-full">
                  Coming Soon
                </span>
              )}
            </div>
            <p className="text-neutral/80 text-lg leading-relaxed mb-8">
              {description}
            </p>
            {buttonText && (
              <a
                href={buttonHref}
                className={`${buttonColor} font-bold hover:text-white transition-colors flex items-center gap-2 group`}
              >
                {buttonText}{" "}
                <ArrowRight className="group-hover:translate-x-1 transition-transform w-5 h-5" />
              </a>
            )}
          </div>

          {/* Visual — plain image */}
          <div
            className={`animate-on-scroll ${isRight ? "slide-in-right" : "slide-in-left"
              } delay-100 ${!isRight ? "order-2 lg:order-1" : ""}`}
          >
            <Image
              src={imageSrc}
              alt={imageAlt}
              width={700}
              height={500}
              className="w-full h-auto rounded-2xl"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default function FeaturesSection() {
  return (
    <section id="features" className="bg-primary relative overflow-hidden">
      <div className="container mx-auto px-6 py-20 relative z-10">
        <div className="text-center mb-24 animate-on-scroll fade-in-up">
          <h2 className="text-3xl lg:text-5xl font-serif font-bold mb-4">
            Empowering{" "}
            <span className="text-brand-gradient">Legal Knowledge</span>
          </h2>
          <p className="text-neutral max-w-2xl mx-auto">
            Discover comprehensive tools and resources designed for legal
            professionals and learners in Sri Lanka.
          </p>
        </div>
      </div>

      {/* Feature 1: Citation Manager */}
      <FeaturePill
        direction="right"
        icon={<Library className="text-teal w-8 h-8" />}
        title="Citation Manager"
        description="Automatically store and organise every legal reference you encounter. View past citations by category, section number, or keyword to quickly retrieve the information you need."
        buttonText="Try the Citation Manager"
        buttonColor="text-teal"
        imageSrc="/images/citation v2.png"
        imageAlt="Citation Manager"
        className="mb-12"
        buttonHref="https://app.nyaya.site"
      />

      {/* Feature 2: AI Legal Assistant — Coming Soon */}
      <FeaturePill
        direction="left"
        icon={<Bot className="text-secondary w-8 h-8" />}
        title="AI Legal Assistant"
        description="Get instant answers to your legal questions. Our intelligent AI assistant is specifically trained on Sri Lankan law, acts, and constitution to provide accurate guidance."
        imageSrc="/images/chatbot v2.png"
        imageAlt="AI Legal Assistant"
        comingSoon
      />

      {/* Feature 3: Revision Quizzes */}
      <FeaturePill
        direction="right"
        icon={<FileQuestion className="text-teal w-8 h-8" />}
        title="Revision Quizzes"
        description="Get instant answers to your legal questions. Our intelligent AI assistant is specifically trained on Sri Lankan law, acts, and constitution to provide accurate guidance."
        buttonText="Try the Quizzes"
        buttonColor="text-teal"
        imageSrc="/images/quizzes v2.png"
        imageAlt="Revision Quizzes"
        className="mb-12"
        buttonHref="https://app.nyaya.site/quizzes"
      />
    </section>
  );
}
