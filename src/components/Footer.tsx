import Image from "next/image";

export default function Footer() {
    return (
        <footer className="bg-black/40 border-t border-white/5 py-12">
            <div className="container mx-auto px-6">
                <div className="flex flex-col md:flex-row justify-between items-center">
                    <div className="flex items-center gap-3 mb-4 md:mb-0">
                        <Image
                            src="/images/logo.png"
                            alt="Nyaya Logo"
                            width={32}
                            height={32}
                            className="object-contain"
                        />
                        <span className="text-xl font-serif font-bold">Nyaya</span>
                    </div>
                    <div className="text-neutral text-sm">
                        &copy; 2026 Nyaya. All rights reserved.
                    </div>
                </div>
                {/* Disclaimer */}
                <div className="mt-8 border-t border-white/5 pt-8 text-center">
                    <p className="text-neutral/50 text-xs leading-relaxed">
                        Information provided is for educational purposes only and does not
                        constitute legal advice. Please consult a qualified attorney for
                        legal matters.
                    </p>
                </div>
            </div>
        </footer>
    );
}
