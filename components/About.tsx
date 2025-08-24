import React from "react";

const About: React.FC<{}> = () => {
    return (
        <section
            id="about"
            className="section-padding relative overflow-hidden"
        >
            <div className="container mx-auto">
                <div className="max-w-4xl mx-auto text-center animate-fade-in">
                    <div className="mb-16">
                        <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
                            About Me
                        </h2>
                        <div className="w-24 h-1 bg-gradient-to-r from-primary-500 to-accent-500 mx-auto mb-8 rounded-full"></div>
                        <p className="text-gray-400 uppercase tracking-widest text-sm font-medium">
                            Getting to know me
                        </p>
                    </div>

                    <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
                        <div className="text-left space-y-6 animate-slide-up">
                            <h3 className="text-2xl md:text-3xl font-semibold text-white mb-4">
                                Transforming ideas into{" "}
                                <span className="text-gradient-brand">
                                    digital reality
                                </span>
                            </h3>
                            <p className="text-gray-300 text-lg leading-relaxed">
                                I thrive on the balance between technical
                                precision and creative problem-solving. My
                                approach combines deep technical knowledge with
                                user-centered design thinking to build
                                applications that truly serve their purpose.
                            </p>
                            <p className="text-gray-300 text-lg leading-relaxed">
                                From concept to deployment, I focus on creating
                                solutions that are not just functional, but
                                delightful to use. Every line of code is an
                                opportunity to improve someone&apos;s experience with
                                technology.
                            </p>
                        </div>

                        <div className="space-y-6 animate-slide-up">
                            <div className="liquid-glass liquid-distortion rounded-3xl p-8">
                                <h4 className="text-xl font-semibold text-white mb-4">
                                    What I Do
                                </h4>
                                <div className="space-y-4">
                                    <div className="flex items-start gap-4">
                                        <div className="w-2 h-2 bg-primary-500 rounded-full mt-2 flex-shrink-0"></div>
                                        <div>
                                            <h5 className="text-white font-medium">
                                                Mobile Development
                                            </h5>
                                            <p className="text-gray-400 text-sm">
                                                Cross-platform apps with React
                                                Native
                                            </p>
                                        </div>
                                    </div>
                                    <div className="flex items-start gap-4">
                                        <div className="w-2 h-2 bg-accent-500 rounded-full mt-2 flex-shrink-0"></div>
                                        <div>
                                            <h5 className="text-white font-medium">
                                                UI/UX Design
                                            </h5>
                                            <p className="text-gray-400 text-sm">
                                                User-centered design solutions
                                            </p>
                                        </div>
                                    </div>
                                    <div className="flex items-start gap-4">
                                        <div className="w-2 h-2 bg-primary-400 rounded-full mt-2 flex-shrink-0"></div>
                                        <div>
                                            <h5 className="text-white font-medium">
                                                Web Development
                                            </h5>
                                            <p className="text-gray-400 text-sm">
                                                Modern web applications with
                                                React
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="grid grid-cols-2 md:grid-cols-4 gap-8 animate-fade-in">
                        <div className="text-center">
                            <div className="text-3xl md:text-4xl font-bold text-gradient-brand mb-2">
                                3+
                            </div>
                            <div className="text-gray-400 font-medium">
                                Years Experience
                            </div>
                        </div>
                        <div className="text-center">
                            <div className="text-3xl md:text-4xl font-bold text-gradient-brand mb-2">
                                15+
                            </div>
                            <div className="text-gray-400 font-medium">
                                Projects Completed
                            </div>
                        </div>
                        <div className="text-center">
                            <div className="text-3xl md:text-4xl font-bold text-gradient-brand mb-2">
                                5+
                            </div>
                            <div className="text-gray-400 font-medium">
                                Technologies
                            </div>
                        </div>
                        <div className="text-center">
                            <div className="text-3xl md:text-4xl font-bold text-gradient-brand mb-2">
                                100%
                            </div>
                            <div className="text-gray-400 font-medium">
                                Satisfaction
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default About;
