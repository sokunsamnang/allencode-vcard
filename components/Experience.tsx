import Image from "next/image";
import React from "react";

const Experience: React.FC<{}> = () => {
    return (
        <section id="experience">
            <h2 className="text-white font-semibold text-center text-6xl   pt-[35px]">
                EXPERIENCE
            </h2>
            <p className=" tracking-[0.5em] text-center text-transparent font-light pb-5  bg-clip-text bg-gradient-to-r from-purple-700 to-orange-500  text-1xl ">
                EXPLORE NOW
            </p>
            <div className=" container mx-auto 2xl ">
                <div className="md:flex md:flex-row md:justify-between pt-5">
                    <div className="flex items-center gap-3">
                        <Image
                            src={"/Koompi-white.png"}
                            height={30}
                            width={30}
                            alt={"Ibrahim Memon - UX Experience"}
                        />
                        <p className="text-gray-300 ">
                            <span className="font-semibold">KOOMPI /</span>{" "}
                            Software Engineer
                        </p>
                    </div>
                    <p className="text-gray-300 md:pt-0 pt-3">
                        Jan 2020 - Present, Cambodia
                    </p>
                </div>

                <p className="text-gray-300 pt-5">
                    I`m currently working at KOOMPI, where I focus on creating
                    SaaS solutions like StadiumX for sports ticketing and a
                    crypto wallet for Selendra. I`m also involved in developing
                    the KOOMPI Mobile Application to enhance business efficiency
                    and streamline user experience.
                    <br />
                    <br />
                    With 3 years of experience as a Flutter developer, I have a
                    solid foundation in building dynamic, responsive mobile and
                    web applications. I transitioned to React Native, where I
                    now specialize in developing cross-platform apps that work
                    seamlessly on both iOS and Android. My expertise allows me
                    to create fast, scalable mobile applications with
                    exceptional user experiences. I am well-versed in
                    component-based architecture, state management, and
                    consistently stay updated with the latest trends and
                    technologies in mobile development.
                </p>

                <div className="flex-col flex sm:flex-row ">
                    <div className="bg-transparent  mt-5 mr-2 cursor-pointer  rounded-3xl  text-white py-2 px-5  border border-[#2E2E2E] w-max">
                        Flutter
                    </div>
                    <div className="bg-transparent  mt-5 mr-2 cursor-pointer  rounded-3xl  text-white py-2 px-5  border border-[#2E2E2E] w-max">
                        React Native
                    </div>
                    <div className="bg-transparent  mt-5  mr-2 cursor-pointer  rounded-3xl  text-white py-2 px-5  border border-[#2E2E2E] w-max">
                        React
                    </div>
                    <div className="bg-transparent  mt-5  mr-2 cursor-pointer  rounded-3xl  text-white py-2 px-5  border border-[#2E2E2E] w-max">
                        JavaScript
                    </div>
                    <div className="bg-transparent  mt-5 cursor-pointer  rounded-3xl  text-white py-2 px-5  border border-[#2E2E2E] w-max">
                        Typescript
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Experience;
