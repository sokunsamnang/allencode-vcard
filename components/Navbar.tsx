"use client";

import Image from "next/image";
import React, { useState, useEffect } from "react";

const Navbar: React.FC<{}> = () => {
    const [isScrolled, setIsScrolled] = useState(false);
    const [activeSection, setActiveSection] = useState('');
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 30);
            
            if (isMobileMenuOpen) {
                setIsMobileMenuOpen(false);
            }
            
            const sections = ['about', 'experience', 'projects'];
            const current = sections.find(section => {
                const element = document.getElementById(section);
                if (element) {
                    const rect = element.getBoundingClientRect();
                    return rect.top <= 120 && rect.bottom >= 120;
                }
                return false;
            });
            setActiveSection(current || '');
        };
        
        const handleClickOutside = (event: MouseEvent) => {
            const navbar = document.querySelector('nav');
            if (navbar && !navbar.contains(event.target as Node) && isMobileMenuOpen) {
                setIsMobileMenuOpen(false);
            }
        };
        
        window.addEventListener('scroll', handleScroll, { passive: true });
        document.addEventListener('click', handleClickOutside, { passive: true });
        
        return () => {
            window.removeEventListener('scroll', handleScroll);
            document.removeEventListener('click', handleClickOutside);
        };
    }, [isMobileMenuOpen]);

    const scrollToSection = (sectionId: string) => {
        const element = document.getElementById(sectionId);
        if (element) {
            const offsetTop = element.offsetTop - 100;
            window.scrollTo({ top: offsetTop, behavior: 'smooth' });
        }
        setIsMobileMenuOpen(false);
    };

    const navItems = [
        { id: 'about', label: 'About' },
        { id: 'experience', label: 'Experience' },
        { id: 'projects', label: 'Projects' }
    ];

    return (
        <>
            {/* Navbar */}
            <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
                isScrolled || isMobileMenuOpen ? 'navbar-glass' : 'bg-transparent'
            }`}>
                <div className="w-full px-4 sm:px-6 lg:px-8">
                    <div className="flex items-center justify-between h-16 md:h-18">
                        {/* Logo */}
                        <div className="flex-shrink-0">
                            <a
                                href="/"
                                className="inline-flex items-center group"
                                aria-label="Sam Allen Portfolio Home"
                            >
                                <div className="liquid-glass rounded-lg px-3 py-2 group-hover:bg-white/10 transition-all duration-300">
                                    <Image
                                        src="/Logo.svg"
                                        alt="Sam Allen"
                                        width={100}
                                        height={32}
                                        className="h-6 md:h-7 w-auto"
                                        priority
                                    />
                                </div>
                            </a>
                        </div>

                        {/* Desktop Navigation */}
                        <nav className="hidden md:flex items-center space-x-1" aria-label="Main navigation">
                            {navItems.map((item) => (
                                <button
                                    key={item.id}
                                    onClick={() => scrollToSection(item.id)}
                                    className={`px-4 py-2 rounded-lg text-sm font-medium transition-all duration-300 ${
                                        activeSection === item.id
                                            ? 'text-white bg-white/10 shadow-sm'
                                            : 'text-gray-300 hover:text-white hover:bg-white/5'
                                    }`}
                                    aria-label={`Go to ${item.label} section`}
                                >
                                    {item.label}
                                </button>
                            ))}
                            
                            <div className="ml-3">
                                <a
                                    href="mailto:sokunsamnang45@gmail.com"
                                    className="btn-primary text-sm px-5 py-2 inline-flex items-center"
                                    aria-label="Send email to Sam Allen"
                                >
                                    Contact
                                </a>
                            </div>
                        </nav>

                        {/* Mobile Menu Button */}
                        <div className="md:hidden">
                            <button
                                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                                className="liquid-glass p-2 rounded-lg transition-all duration-300 hover:bg-white/10"
                                aria-label="Toggle mobile menu"
                                aria-expanded={isMobileMenuOpen}
                            >
                                <div className="w-5 h-5 flex flex-col justify-center space-y-1">
                                    <span className={`block w-5 h-0.5 bg-white transition-all duration-300 ${
                                        isMobileMenuOpen ? 'rotate-45 translate-y-1' : ''
                                    }`}></span>
                                    <span className={`block w-5 h-0.5 bg-white transition-all duration-300 ${
                                        isMobileMenuOpen ? 'opacity-0' : ''
                                    }`}></span>
                                    <span className={`block w-5 h-0.5 bg-white transition-all duration-300 ${
                                        isMobileMenuOpen ? '-rotate-45 -translate-y-1' : ''
                                    }`}></span>
                                </div>
                            </button>
                        </div>
                    </div>
                </div>

                {/* Mobile Menu */}
                {isMobileMenuOpen && (
                    <div className="md:hidden border-t border-white/10">
                        <div className="px-4 py-3 space-y-1">
                            {navItems.map((item) => (
                                <button
                                    key={item.id}
                                    onClick={() => scrollToSection(item.id)}
                                    className={`block w-full text-left px-4 py-3 rounded-lg text-sm font-medium transition-all duration-300 ${
                                        activeSection === item.id
                                            ? 'text-white bg-white/10'
                                            : 'text-gray-300 hover:text-white hover:bg-white/5'
                                    }`}
                                >
                                    {item.label}
                                </button>
                            ))}
                            <div className="pt-2">
                                <a
                                    href="mailto:sokunsamnang45@gmail.com"
                                    className="btn-primary text-sm py-3 w-full text-center inline-block"
                                    onClick={() => setIsMobileMenuOpen(false)}
                                >
                                    Contact
                                </a>
                            </div>
                        </div>
                    </div>
                )}
            </header>

            {/* Spacer to prevent content from hiding behind fixed navbar */}
            <div className="h-16 md:h-18" aria-hidden="true"></div>
        </>
    );
};

export default Navbar;
