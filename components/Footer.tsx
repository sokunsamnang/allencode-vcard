"use client";
import React, { useEffect } from "react";
import { Social_Icons } from "@/constant";
import Image from "next/image";
import Link from "next/link";

// Custom hook to load Tawk script
const useTawkScript = () => {
    useEffect(() => {
        const tawkId = process.env.NEXT_PUBLIC_TAWK_TO_ID;
        if (!tawkId) {
            console.warn("Tawk.to ID is not defined");
            return;
        }

        const script = document.createElement("script");
        script.async = true;
        script.src = tawkId;
        // Note: charset attribute is deprecated for script elements
        script.setAttribute("crossorigin", "*");
        document.head.appendChild(script);

        return () => {
            try {
                document.head.removeChild(script);
            } catch (e) {
                // Script might already be removed
            }
        };
    }, []);
};

const Footer: React.FC = () => {
    useTawkScript();

    const scrollToTop = () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    return (
        <footer className="relative overflow-hidden border-t border-white/5">
            <div className="absolute inset-0 bg-gradient-to-t from-gray-950/80 to-transparent"></div>
            
            <div className="relative container mx-auto section-padding">
                <div className="max-w-4xl mx-auto text-center">
                    <div className="mb-12 animate-fade-in">
                        <h3 className="text-3xl md:text-4xl font-bold text-white mb-6">
                            Let&apos;s Connect
                        </h3>
                        <p className="text-gray-400 text-lg max-w-2xl mx-auto mb-8">
                            Ready to bring your ideas to life? I&apos;m always interested in 
                            discussing new opportunities and innovative projects.
                        </p>
                        <button
                            onClick={() => window.open("mailto:sokunsamnang45@gmail.com")}
                            className="btn-primary text-lg px-10 py-4"
                        >
                            Start a Conversation
                        </button>
                    </div>

                    <div className="mb-12 animate-slide-up">
                        <div className="flex justify-center items-center space-x-6">
                            {Social_Icons.map((social, index) => (
                                <Link
                                    href={social.link}
                                    rel="noopener noreferrer"
                                    target="_blank"
                                    key={social.alt}
                                    className="group p-4 liquid-glass liquid-distortion rounded-full transition-all duration-500 hover:scale-110"
                                    style={{ animationDelay: `${index * 0.1}s` }}
                                >
                                    <Image
                                        src={social.image}
                                        height={24}
                                        width={24}
                                        alt={social.alt}
                                        className="filter invert group-hover:invert-0 transition-all duration-300"
                                    />
                                </Link>
                            ))}
                        </div>
                    </div>

                    <div className="border-t border-white/5 pt-8">
                        <div className="flex flex-col md:flex-row justify-between items-center gap-4">
                            <p className="text-gray-400 text-sm">
                                © 2025 Sam Allen. Crafted with passion and precision.
                            </p>
                            
                            <div className="flex items-center gap-6 text-sm text-gray-400">
                                <span className="flex items-center gap-2">
                                    Built with 
                                    <span className="text-primary-400 font-medium">Next.js</span>
                                    & 
                                    <span className="text-accent-400 font-medium">Tailwind</span>
                                </span>
                                <button
                                    onClick={scrollToTop}
                                    className="flex items-center gap-1 text-gray-400 hover:text-white transition-colors duration-300 group"
                                >
                                    Back to top
                                    <svg 
                                        className="w-4 h-4 group-hover:-translate-y-1 transition-transform duration-300" 
                                        fill="none" 
                                        stroke="currentColor" 
                                        viewBox="0 0 24 24"
                                    >
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 15l7-7 7 7" />
                                    </svg>
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
