"use client";

import React from "react";
import Image from "next/image";

const Banner: React.FC<{}> = () => {
    return (
        <section className="min-h-screen flex items-center justify-center relative overflow-hidden">
            <div className="container mx-auto section-padding">
                <div className="max-w-4xl mx-auto text-center animate-fade-in">
                    <div className="relative mb-12 animate-scale-in">
                        <div className="relative w-64 h-64 mx-auto mb-8 group">
                            <div className="liquid-glass rounded-full p-2">
                                <Image
                                    priority
                                    src="/Me.png"
                                    height={256}
                                    width={256}
                                    alt="Sam Allen"
                                    className="rounded-full transition-transform duration-300 group-hover:scale-105"
                                />
                            </div>
                        </div>
                    </div>

                    <div className="mb-8 animate-slide-up">
                        <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold mb-4 bg-gradient-to-r from-white via-gray-200 to-gray-400 bg-clip-text text-transparent tracking-tight">
                            Sam Allen
                        </h1>
                        <div className="flex items-center justify-center gap-3 text-2xl md:text-3xl font-medium text-gray-300 mb-6">
                            <span>I create</span>
                            <span className="text-gradient-brand font-semibold">
                                digital experiences
                            </span>
                            <Image
                                src="/popcorn.gif"
                                height={40}
                                width={40}
                                alt="Animated emoji"
                                className="animate-bounce-gentle"
                            />
                        </div>
                    </div>

                    <p className="text-lg md:text-xl text-gray-400 max-w-3xl mx-auto mb-12 leading-relaxed animate-slide-up">
                        Software Engineer focused on{" "}
                        <span className="text-white font-medium">
                            mobile applications
                        </span>{" "}
                        and
                        <span className="text-white font-medium">
                            {" "}
                            user experience
                        </span>
                        . Building innovative solutions that connect technology
                        with human needs.
                    </p>

                    <div className="flex flex-col sm:flex-row gap-6 justify-center items-center animate-slide-up">
                        <button
                            onClick={() =>
                                window.open("mailto:sokunsamnang45@gmail.com")
                            }
                            className="btn-primary text-lg px-10 py-4"
                        >
                            Get In Touch
                        </button>
                        <button
                            onClick={() => {
                                const element =
                                    document.getElementById("projects");
                                if (element) {
                                    element.scrollIntoView({
                                        behavior: "smooth",
                                        block: "start",
                                    });
                                }
                            }}
                            className="btn-secondary text-lg px-10 py-4"
                        >
                            View My Work
                        </button>
                    </div>
                </div>
            </div>

            {/* Mouse scroll indicator positioned between sections */}
            <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-full flex justify-center">
                <div
                    onClick={() => {
                        const element = document.getElementById("about");
                        if (element) {
                            element.scrollIntoView({
                                behavior: "smooth",
                                block: "start",
                            });
                        }
                    }}
                    className="cursor-pointer group animate-bounce"
                >
                    <div className="w-6 h-10 border-2 border-white/30 rounded-full relative group-hover:border-white/50 transition-colors duration-300">
                        <div className="absolute top-2 left-1/2 transform -translate-x-1/2 w-1 h-3 bg-white/60 rounded-full animate-bounce group-hover:bg-white/80 transition-colors duration-300"></div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Banner;
