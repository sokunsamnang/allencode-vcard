import Image from "next/image";
import Link from "next/link";
import React from "react";

const Projects: React.FC<{}> = () => {
    return (
        <section id="projects">
            <h2 className="text-white font-semibold text-center text-6xl pt-[35px]">
                PROJECTS
            </h2>
            <p className="tracking-[0.5em] text-center text-transparent font-light pb-5 bg-clip-text bg-gradient-to-r from-purple-700 to-orange-500 text-1xl">
                EXPLORE NOW
            </p>
            <div className="container mx-auto 2xl">
                {/* Flex Container for the Projects */}
                <div className="flex flex-wrap justify-center gap-6 mt-7">
                    {/* Project 1 */}
                    <Link
                        href="https://stadiumx.org"
                        rel="noopener noreferrer"
                        target="_blank"
                        className="z-[1] w-full sm:w-[48%] md:w-[23%] lg:w-[22%]"
                    >
                        <div className="flex flex-col items-center mb-5">
                            <Image
                                src="/StadiumX.png"
                                height={150}
                                width={150}
                                alt="Sam Allen - StadiumX"
                                className="object-contain h-28 bg-white rounded-lg p-2"
                            />
                            <div className="text-center p-3">
                                <p className="text-white font-semibold text-xl">
                                    StadiumX
                                </p>
                                <p className="text-gray-500 text-xs">
                                    StadiumX, by KOOMPI, is a SaaS for sports
                                    management, offering ticketing, merchandise,
                                    and analytics to optimize club operations
                                    and fan engagement.
                                </p>
                            </div>
                        </div>
                    </Link>
                    {/* Project 2 */}
                    <Link
                        href="https://bitriel.com"
                        rel="noopener noreferrer"
                        target="_blank"
                        className="z-[1] w-full sm:w-[48%] md:w-[23%] lg:w-[22%]"
                    >
                        <div className="flex flex-col items-center mb-5">
                            <Image
                                src="/BITRIEL.svg"
                                height={150}
                                width={150}
                                alt="Sam Allen - Bitriel"
                                className="object-contain h-28 bg-black rounded-lg p-2"
                            />
                            <div className="text-center p-3">
                                <p className="text-white font-semibold text-xl">
                                    Bitriel Wallet
                                </p>
                                <p className="text-gray-500 text-xs">
                                    Bitriel is a self-custody digital wallet
                                    that supports cross-chain multi-assets,
                                    including crypto assets and NFTs
                                </p>
                            </div>
                        </div>
                    </Link>
                </div>
            </div>
        </section>
    );
};

export default Projects;
