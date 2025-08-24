import Image from "next/image";
import React from "react";

const Experience: React.FC<{}> = () => {
    const skills = [
        "React Native", "Flutter", "React", "JavaScript", "TypeScript", 
        "Node.js", "MongoDB", "Git", "UI/UX Design"
    ];

    return (
        <section id="experience" className="section-padding relative overflow-hidden">
            <div className="container mx-auto">
                <div className="max-w-4xl mx-auto text-center mb-16 animate-fade-in">
                    <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
                        Experience
                    </h2>
                    <div className="w-24 h-1 bg-gradient-to-r from-primary-500 to-accent-500 mx-auto mb-8 rounded-full"></div>
                    <p className="text-gray-400 uppercase tracking-widest text-sm font-medium">
                        My Professional Journey
                    </p>
                </div>

                <div className="max-w-4xl mx-auto">
                    <div className="relative">
                        <div className="absolute left-8 top-0 bottom-0 w-px bg-gradient-to-b from-primary-500 to-accent-500"></div>
                        
                        <div className="relative animate-slide-up">
                            <div className="flex items-start gap-8 pb-8">
                                <div className="flex-shrink-0">
                                    <div className="w-16 h-16 bg-gradient-to-r from-primary-500 to-accent-500 rounded-full flex items-center justify-center">
                                        <Image
                                            src="/Koompi-white.png"
                                            height={24}
                                            width={24}
                                            alt="KOOMPI"
                                            className="rounded"
                                        />
                                    </div>
                                </div>

                                <div className="flex-1 min-w-0">
                                    <div className="liquid-glass liquid-distortion rounded-3xl p-10">
                                        <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between mb-6">
                                            <div>
                                                <h3 className="text-2xl font-bold text-white mb-2">
                                                    Software Engineer
                                                </h3>
                                                <p className="text-primary-400 font-semibold text-lg">
                                                    KOOMPI
                                                </p>
                                            </div>
                                            <div className="text-gray-400 lg:text-right mt-2 lg:mt-0">
                                                <p className="font-medium">Jan 2020 - Present</p>
                                                <p className="text-sm">Cambodia</p>
                                            </div>
                                        </div>

                                        <div className="space-y-6">
                                            <p className="text-gray-300 leading-relaxed">
                                                Leading development of innovative SaaS solutions at KOOMPI, focusing on 
                                                scalable architecture and user-centric design. My role spans from initial 
                                                concept through deployment, ensuring each product meets both technical 
                                                excellence and business objectives.
                                            </p>

                                            <p className="text-gray-300 leading-relaxed">
                                                Over <strong className="text-white">3+ years</strong>, I&apos;ve evolved from Flutter 
                                                to React Native, building expertise in cross-platform development. I specialize 
                                                in creating performant, maintainable applications that deliver exceptional 
                                                user experiences across iOS and Android platforms.
                                            </p>

                                            <div className="grid grid-cols-2 gap-6 pt-4">
                                                <div>
                                                    <h4 className="text-white font-semibold mb-3">Key Projects</h4>
                                                    <ul className="space-y-2 text-gray-300 text-sm">
                                                        <li>• StadiumX Sports Platform</li>
                                                        <li>• Bitriel Crypto Wallet</li>
                                                        <li>• KOOMPI Mobile App</li>
                                                        <li>• Enterprise SaaS Solutions</li>
                                                    </ul>
                                                </div>
                                                <div>
                                                    <h4 className="text-white font-semibold mb-3">Expertise</h4>
                                                    <ul className="space-y-2 text-gray-300 text-sm">
                                                        <li>• Cross-platform Development</li>
                                                        <li>• Component Architecture</li>
                                                        <li>• State Management</li>
                                                        <li>• UI/UX Implementation</li>
                                                    </ul>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="mt-16 animate-fade-in">
                        <h3 className="text-2xl font-bold text-white text-center mb-8">
                            Technologies & Skills
                        </h3>
                        <div className="flex flex-wrap justify-center gap-4">
                            {skills.map((skill, index) => (
                                <span
                                    key={skill}
                                    className="px-6 py-3 liquid-glass text-white rounded-full hover:border-primary-500/50 transition-all duration-500 hover:scale-105 liquid-distortion"
                                    style={{ animationDelay: `${index * 0.1}s` }}
                                >
                                    {skill}
                                </span>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Experience;
