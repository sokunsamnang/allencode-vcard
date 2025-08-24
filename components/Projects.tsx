import Image from "next/image";
import Link from "next/link";
import React from "react";

const Projects: React.FC<{}> = () => {
    const projects = [
        {
            id: 1,
            title: "StadiumX",
            description: "Comprehensive sports management platform featuring ticketing systems, merchandise integration, and real-time analytics for professional sports organizations.",
            image: "/StadiumX.png",
            url: "https://stadiumx.org",
            tags: ["SaaS", "Sports", "Analytics", "React Native"],
            featured: true
        },
        {
            id: 2,
            title: "Bitriel Wallet",
            description: "Self-custody digital wallet supporting multi-chain assets and NFTs with enterprise-grade security and intuitive user experience.",
            image: "/BITRIEL.svg",
            url: "https://bitriel.com",
            tags: ["Crypto", "Wallet", "Blockchain", "Mobile"],
            featured: true
        }
    ];

    return (
        <section id="projects" className="section-padding relative overflow-hidden bg-gray-950/50">
            <div className="container mx-auto">
                <div className="max-w-4xl mx-auto text-center mb-16 animate-fade-in">
                    <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
                        Featured Projects
                    </h2>
                    <div className="w-24 h-1 bg-gradient-to-r from-primary-500 to-accent-500 mx-auto mb-8 rounded-full"></div>
                    <p className="text-gray-400 uppercase tracking-widest text-sm font-medium mb-4">
                        My Recent Work
                    </p>
                    <p className="text-gray-300 text-lg max-w-2xl mx-auto">
                        Real-world applications solving complex problems across sports management 
                        and blockchain technology.
                    </p>
                </div>

                <div className="grid lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
                    {projects.map((project, index) => (
                        <Link
                            key={project.id}
                            href={project.url}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="group animate-slide-up"
                            style={{ animationDelay: `${index * 0.2}s` }}
                        >
                            <div className="card-modern h-full">
                                <div className="relative mb-6 overflow-hidden rounded-xl">
                                    <div className="aspect-video bg-gradient-to-br from-gray-800 to-gray-900 flex items-center justify-center p-8">
                                        <Image
                                            src={project.image}
                                            height={120}
                                            width={120}
                                            alt={project.title}
                                            className="object-contain max-h-24 group-hover:scale-110 transition-transform duration-300"
                                        />
                                    </div>
                                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                                </div>

                                <div className="space-y-4">
                                    <div className="flex items-start justify-between">
                                        <h3 className="text-2xl font-bold text-white group-hover:text-gradient-brand transition-colors duration-300">
                                            {project.title}
                                        </h3>
                                        <div className="text-gray-400 group-hover:text-white transition-colors duration-300">
                                            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                                            </svg>
                                        </div>
                                    </div>

                                    <p className="text-gray-300 leading-relaxed">
                                        {project.description}
                                    </p>

                                    <div className="flex flex-wrap gap-2">
                                        {project.tags.map((tag) => (
                                            <span
                                                key={tag}
                                                className="px-3 py-1 bg-white/5 text-gray-300 text-sm rounded-full border border-white/10 group-hover:border-primary-500/30 transition-colors duration-300"
                                            >
                                                {tag}
                                            </span>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        </Link>
                    ))}
                </div>

                <div className="text-center mt-16 animate-fade-in">
                    <p className="text-gray-400 mb-8 text-lg">
                        Interested in seeing more of my work?
                    </p>
                    <Link
                        href="https://github.com/sokunsamnang"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-3 liquid-glass text-white px-10 py-4 rounded-full font-medium transition-all duration-300 hover:scale-105 group border-0"
                    >
                        <svg className="w-5 h-5 transition-transform duration-300 group-hover:rotate-12" fill="currentColor" viewBox="0 0 24 24">
                            <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                        </svg>
                        View GitHub Profile
                        <svg className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                        </svg>
                    </Link>
                </div>
            </div>
        </section>
    );
};

export default Projects;
