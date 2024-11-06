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

        const Tawk_LoadStart = new Date();
        const script = document.createElement("script");
        script.async = true;
        script.src = tawkId;
        script.charset = "UTF-8";
        script.setAttribute("crossorigin", "*");
        document.head.appendChild(script);

        return () => {
            document.head.removeChild(script); // Clean up the script when component unmounts
        };
    }, []);
};

const Footer: React.FC = () => {
    useTawkScript();

    return (
        <div className="container mx-auto pt-[50px] pb-8">
            <div className="pb-10 flex justify-center">
                {Social_Icons.map((social) => (
                    <Link
                        href={social.link}
                        rel="noopener noreferrer"
                        target="_blank"
                        key={social.alt}
                        className="z-[1]"
                    >
                        <Image
                            src={social.image}
                            height={30}
                            width={30}
                            alt={social.alt}
                            className="mx-5"
                        />
                    </Link>
                ))}
            </div>
            <p className="text-gray-300 text-center text-sm">
                Created with ❤️ using Next.js
            </p>
        </div>
    );
};

export default Footer;
