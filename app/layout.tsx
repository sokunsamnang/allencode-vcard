import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Analytics } from "@vercel/analytics/react";
import { SpeedInsights } from "@vercel/speed-insights/next";
import StarsCanvas from "@/components/main/StarsBackground";
import Navbar from "@/components/Navbar";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
    metadataBase: new URL("https://allencode.dev/"),
    title: "Sam Allen - SWE | IXD | UX - Developer Portfolio",
    description:
        "Developer Portfolio of Frontend & Mobile App Developer from Cambodia with 3+ years of expertise. Senior Software Engineer. Specializing mobile apps, UX, and JavaScript technologies.",
    keywords: [
        "Developer",
        "Portfolio",
        "Developer Portflio",
        "Sam Allen",
        "Allen",
        "SamAllen",
        "Sokunsamnang",
        "Sam An Sokunsamnang",
        "Sokunsamnang Sam An",
        "AllenCode.dev",
        "allencode.dev",
        "Next.js",
        "ReactNative",
        "Android",
        "Flutter",
        "Cambodia",
    ],
    openGraph: {
        title: "Sam Allen - SWE | IXD | UX",
        description:
            "Frontend & Mobile App Developer from Cambodia with 3+ years of expertise. Senior Software Engineer. Specializing mobile apps, UX, and JavaScript technologies.",
        images: "/OpenGraph.png",
    },
    alternates: {
        canonical: "https://allencode.dev/",
    },
};
export default function RootLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <html lang="en">
            <head>
                <script
                    type="application/ld+json"
                    dangerouslySetInnerHTML={{
                        __html: JSON.stringify({
                            "@context": "http://schema.org",
                            "@type": "Person",
                            name: "Sam Allen",
                            jobTitle: "Software Engineer",
                            url: "https://allencode.dev",
                            sameAs: [
                                "https://www.linkedin.com/in/sokunsamnang-sam-an/",
                                "https://github.com/sokunsamnang",
                            ],
                        }),
                    }}
                />
                <script
                    async
                    src={`https://www.googletagmanager.com/gtag/js?id=G-${process.env.NEXT_PRIVATE_GTID}`}
                ></script>
                <script
                    dangerouslySetInnerHTML={{
                        __html: `
                          window.dataLayer = window.dataLayer || [];
                          function gtag(){dataLayer.push(arguments);}
                          gtag('js', new Date());

                          gtag('config', 'G-${process.env.NEXT_PRIVATE_GTID}');
                        `,
                    }}
                />
            </head>
            <body
                className={`${inter.className} bg-gray-950 overflow-x-hidden antialiased`}
            >
                <SpeedInsights />
                <Analytics />
                <StarsCanvas />
                <Navbar />
                {children}
            </body>
        </html>
    );
}
