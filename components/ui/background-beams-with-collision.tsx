"use client";
import { cn } from "@/lib/utils";
import { motion, AnimatePresence } from "framer-motion";
import React, { useRef, useState, useEffect } from "react";
import { TextGenerateEffect } from "./text-generate-effect";
import { FloatingDock } from "./floating-dock";

import {
    IconBrandGithub,
    IconBrandLinkedin,
    IconCertificate,
    IconHome,
    IconMail,
    IconTimeline,
} from "@tabler/icons-react";
import { NavbarDemo } from "../Navbar";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { CiMail } from "react-icons/ci";
import { FaScrewdriverWrench } from "react-icons/fa6";
import Image from "next/image";

export function BackgroundBeamsWithCollisionDemo() {
    const links = [
        {
            title: "Home",
            icon: (
                <IconHome className="h-full w-full text-neutral-300" />
            ),
            href: "#hero",
        },
        {
            title: "Skills",
            icon: (
                <IconCertificate className="h-full w-full text-neutral-300" />
            ),
            href: "#skills",
        },

        {
            title: "Projects",
            icon: (
                <FaScrewdriverWrench className="h-full w-full text-neutral-300" />
            ),
            href: "#projects",
        },
        {
            title: "Timeline",
            icon: (
                <IconTimeline className="h-full w-full text-neutral-300" />
            ),
            href: "#timeline",
        },
        {
            title: "Contact Me",
            icon: (
                <IconMail className="h-full w-full text-neutral-300" />
            ),
            href: "#contact",
        },

        {
            title: "LinkedIn",
            icon: (
                <IconBrandLinkedin className="h-full w-full text-neutral-300" />
            ),
            href: "https://www.linkedin.com/in/mannatpreet-singh-khurana",
        },
        {
            title: "GitHub",
            icon: (
                <IconBrandGithub className="h-full w-full text-neutral-300" />
            ),
            href: "https://github.com/Mannatpreet22",
        },
    ];
    return (
        <div id="hero">
            <NavbarDemo />
            <BackgroundBeamsWithCollision className="flex flex-col min-h-full">
                <div
                    className="
                    relative z-20
                    flex flex-col md:flex-row
                    items-center
                    justify-center
                    px-8 md:px-16 lg:px-24
                    max-w-7xl
                    mx-auto
                    gap-16 md:gap-32
                "
                >
                    {/* Image Wrapper - Update the styling */}
                    <div className="shrink-0 flex items-center justify-center">
                    {/* Gradient ring wrapper */}
                    <div
                        className="
                        bg-gradient-to-r from-purple-500 via-violet-500 to-pink-500
                        rounded-full p-1
                        shadow-[0_0_25px_rgba(236,72,153,0.6)]
                        "
                    >
                        {/* Container that defines the final size (48x48 -> 72x72 for larger screens) */}
                        <div className="relative w-48 h-48 md:w-72 md:h-72 bg-slate-800 rounded-full">
                        <Image
                            src="/Mannatpreet.png"
                            alt="Profile picture of Mannatpreet Singh Khurana"
                            fill
                            className="object-cover rounded-full shadow-lg"
                            priority
                        />
                        </div>
                    </div>
                    </div>

                    
                <div className="flex">
                <div className="flex flex-col items-center md:items-start space-y-6">
                <h2 className="text-4xl md:text-5xl lg:text-7xl font-bold text-center md:text-left text-white font-sans tracking-tight">
                    Mannatpreet Singh{' '}
                    <div className="relative mx-auto inline-block w-max [filter:drop-shadow(0px_1px_3px_rgba(27,_37,_80,_0.14))]">
                        <div className="absolute left-0 top-[1px] bg-clip-text bg-no-repeat text-transparent bg-gradient-to-r py-4 from-purple-500 via-violet-500 to-pink-500 [text-shadow:0_0_rgba(0,0,0,0.1)]">
                            <span className=""> Khurana</span>
                        </div>
                        <div className="relative bg-clip-text text-transparent bg-no-repeat bg-gradient-to-r from-purple-500 via-violet-500 to-pink-500 py-4">
                            <span className=""> Khurana</span>
                        </div>
                    </div>
                </h2>
                {/* {para} */}
                <div className="max-w-2xl text-center md:text-left">
                    <TextGenerateEffect words={'Aspiring Software Developer | Crafting Innovative Solutions with Precision and Passion'} />
                </div>
                {/* Icons row below the generated text */}

                <div className="flex flex-col sm:flex-row justify-center items-center gap-4 sm:gap-6 mt-8">
                    {/* Download CV Button */}
                    <button className="relative inline-flex group">
                        <div className="relative inline-flex items-center justify-center px-8 py-3 text-white transition-all duration-300 bg-transparent border-2 border-purple-500 rounded-full ease hover:bg-purple-500 hover:scale-105 transform">
                            <span className="relative flex items-center gap-2">
                                <svg className="w-5 h-5 transition-transform duration-300 ease group-hover:translate-y-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M9 19l3 3m0 0l3-3m-3 3V10"></path>
                                </svg>
                                Download CV
                            </span>
                            <a href="https://drive.google.com/file/d/1ZbCfqIbg5kTzJ5X9aSNgjqoZW4vjXVDF/view?usp=share_link" className="absolute inset-0"></a>
                        </div>
                    </button>

                    <span className="text-white font-light">|</span>

                    {/* Show Projects Button */}
                    <button className="relative group">
                        <div className="relative inline-flex items-center justify-center px-8 py-3 text-white transition-all duration-500 bg-transparent border-2 border-pink-500 rounded-full ease hover:bg-gradient-to-r from-pink-500 via-purple-500 to-violet-500 hover:border-transparent">
                            <span className="relative flex items-center gap-2">
                                <svg className="w-5 h-5 transition-transform duration-500 ease group-hover:rotate-45" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 15l-2 5L9 9l11 4-5 2zm0 0l5 5M7.188 2.239l.777 2.897M5.136 7.965l-2.898-.777M13.95 4.05l-2.122 2.122m-5.657 5.656l-2.12 2.122"></path>
                                </svg>
                                Show Projects
                            </span>
                            <a href="#projects" className="absolute inset-0"></a>
                        </div>
                    </button>
                </div>
                
                </div>
                <div className="flex flex-col justify-center items-center gap-8 mt-4">
                    {/* LinkedIn Icon */}
                    <a
                        href="https://www.linkedin.com/in/mannatpreet-singh-khurana"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-white"
                    >
                        <FaLinkedin size={30} />
                    </a>

                    {/* GitHub Icon */}
                    <a
                        href="https://github.com/Mannatpreet22"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-white"
                    >
                        <FaGithub size={30} />
                    </a>

                    {/* Gmail Icon */}
                    <a
                        href="mailto:khurana.mannat22@gmail.com"
                        className="text-white"
                    >
                        <CiMail size={32} />
                    </a>
                </div>
                </div>
                
                </div>
            </BackgroundBeamsWithCollision>

            <div className="z-50 flex justify-center fixed w-full bottom-4 pointer-events-none">
                <FloatingDock
                    mobileClassName="translate-y-20" // only for demo, remove for production
                    items={links}
                    desktopClassName='pointer-events-auto'
                />
            </div>
        </div>
    );
}

export const BackgroundBeamsWithCollision = ({
    children,
    className,
}: {
    children: React.ReactNode;
    className?: string;
}) => {
    const containerRef = useRef<HTMLDivElement>(null) as React.RefObject<HTMLDivElement>;
    const parentRef = useRef<HTMLDivElement>(null) as React.RefObject<HTMLDivElement>;

    const beams = [
        {
            initialX: 10,
            translateX: 10,
            duration: 7,
            repeatDelay: 3,
            delay: 2,
        },
        {
            initialX: 600,
            translateX: 600,
            duration: 3,
            repeatDelay: 3,
            delay: 4,
        },
        {
            initialX: 100,
            translateX: 100,
            duration: 7,
            repeatDelay: 7,
            className: "h-6",
        },
        {
            initialX: 400,
            translateX: 400,
            duration: 5,
            repeatDelay: 14,
            delay: 4,
        },
        {
            initialX: 800,
            translateX: 800,
            duration: 11,
            repeatDelay: 2,
            className: "h-20",
        },
        {
            initialX: 1000,
            translateX: 1000,
            duration: 4,
            repeatDelay: 2,
            className: "h-12",
        },
        {
            initialX: 1200,
            translateX: 1200,
            duration: 6,
            repeatDelay: 4,
            delay: 2,
            className: "h-6",
        },
    ];

    return (
        <div
            ref={parentRef}
            className={cn(
                "h-90 md:h-screen bg-gradient-to-b from-neutral-950 to-neutral-900 relative flex items-center w-full justify-center overflow-hidden",
                // h-screen if you want bigger
                className
            )}
        >

            {beams.map((beam) => (
                <CollisionMechanism
                    key={beam.initialX + "beam-idx"}
                    beamOptions={beam}
                    containerRef={containerRef}
                    parentRef={parentRef}
                />
            ))}

            {children}
            <div
                ref={containerRef}
                className="absolute bottom-0 bg-neutral-100 w-full inset-x-0 pointer-events-none"
                style={{
                    boxShadow:
                        "0 0 24px rgba(34, 42, 53, 0.06), 0 1px 1px rgba(0, 0, 0, 0.05), 0 0 0 1px rgba(34, 42, 53, 0.04), 0 0 4px rgba(34, 42, 53, 0.08), 0 16px 68px rgba(47, 48, 55, 0.05), 0 1px 0 rgba(255, 255, 255, 0.1) inset",
                }}
            ></div>
        </div>
    );
};

const CollisionMechanism = React.forwardRef<
    HTMLDivElement,
    {
        containerRef: React.RefObject<HTMLDivElement>;
        parentRef: React.RefObject<HTMLDivElement>;
        beamOptions?: {
            initialX?: number;
            translateX?: number;
            initialY?: number;
            translateY?: number;
            rotate?: number;
            className?: string;
            duration?: number;
            delay?: number;
            repeatDelay?: number;
        };
    }
>(({ parentRef, containerRef, beamOptions = {} }) => {
    const beamRef = useRef<HTMLDivElement>(null);
    const [collision, setCollision] = useState<{
        detected: boolean;
        coordinates: { x: number; y: number } | null;
    }>({
        detected: false,
        coordinates: null,
    });
    const [beamKey, setBeamKey] = useState(0);
    const [cycleCollisionDetected, setCycleCollisionDetected] = useState(false);

    useEffect(() => {
        const checkCollision = () => {
            if (
                beamRef.current &&
                containerRef.current &&
                parentRef.current &&
                !cycleCollisionDetected
            ) {
                const beamRect = beamRef.current.getBoundingClientRect();
                const containerRect = containerRef.current.getBoundingClientRect();
                const parentRect = parentRef.current.getBoundingClientRect();

                if (beamRect.bottom >= containerRect.top) {
                    const relativeX =
                        beamRect.left - parentRect.left + beamRect.width / 2;
                    const relativeY = beamRect.bottom - parentRect.top;

                    setCollision({
                        detected: true,
                        coordinates: {
                            x: relativeX,
                            y: relativeY,
                        },
                    });
                    setCycleCollisionDetected(true);
                }
            }
        };

        const animationInterval = setInterval(checkCollision, 50);

        return () => clearInterval(animationInterval);
    }, [cycleCollisionDetected, containerRef, parentRef]);

    useEffect(() => {
        if (collision.detected && collision.coordinates) {
            setTimeout(() => {
                setCollision({ detected: false, coordinates: null });
                setCycleCollisionDetected(false);
            }, 2000);

            setTimeout(() => {
                setBeamKey((prevKey) => prevKey + 1);
            }, 2000);
        }
    }, [collision])

    return (
        <>
            <motion.div
                key={beamKey}
                ref={beamRef}
                animate="animate"
                initial={{
                    translateY: beamOptions.initialY || "-200px",
                    translateX: beamOptions.initialX || "0px",
                    rotate: beamOptions.rotate || 0,
                }}
                variants={{
                    animate: {
                        translateY: beamOptions.translateY || "1800px",
                        translateX: beamOptions.translateX || "0px",
                        rotate: beamOptions.rotate || 0,
                    },
                }}
                transition={{
                    duration: beamOptions.duration || 8,
                    repeat: Infinity,
                    repeatType: "loop",
                    ease: "linear",
                    delay: beamOptions.delay || 0,
                    repeatDelay: beamOptions.repeatDelay || 0,
                }}
                className={cn(
                    "absolute left-0 top-20 m-auto h-14 w-px rounded-full bg-gradient-to-t from-indigo-500 via-purple-500 to-transparent",
                    beamOptions.className
                )}
            />
            <AnimatePresence>
                {collision.detected && collision.coordinates && (
                    <Explosion
                        key={`${collision.coordinates.x}-${collision.coordinates.y}`}
                        className=""
                        style={{
                            left: `${collision.coordinates.x}px`,
                            top: `${collision.coordinates.y}px`,
                            transform: "translate(-50%, -50%)",
                        }}
                    />
                )}
            </AnimatePresence>
        </>
    );
});

CollisionMechanism.displayName = "CollisionMechanism";

const Explosion = ({ ...props }: React.HTMLProps<HTMLDivElement>) => {
    const spans = Array.from({ length: 20 }, (_, index) => ({
        id: index,
        initialX: 0,
        initialY: 0,
        directionX: Math.floor(Math.random() * 80 - 40),
        directionY: Math.floor(Math.random() * -50 - 10),
    }));

    return (
        <div {...props} className={cn("absolute z-50 h-2 w-2", props.className)}>
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 1.5, ease: "easeOut" }}
                className="absolute -inset-x-10 top-0 m-auto h-2 w-10 rounded-full bg-gradient-to-r from-transparent via-indigo-500 to-transparent blur-sm"
            ></motion.div>
            {spans.map((span) => (
                <motion.span
                    key={span.id}
                    initial={{ x: span.initialX, y: span.initialY, opacity: 1 }}
                    animate={{
                        x: span.directionX,
                        y: span.directionY,
                        opacity: 0,
                    }}
                    transition={{ duration: Math.random() * 1.5 + 0.5, ease: "easeOut" }}
                    className="absolute h-1 w-1 rounded-full bg-gradient-to-b from-indigo-500 to-purple-500"
                />
            ))}
        </div>
    );
};
