"use client";
import {
  useScroll,
  useTransform,
  motion,
} from "framer-motion";
import React, { useEffect, useRef, useState } from "react";
import Image from "next/image";
import { LinkPreview } from "./link-preview";

interface TimelineEntry {
  title: string;
  content: React.ReactNode;
}

export const Timeline = ({ data }: { data: TimelineEntry[] }) => {
  const ref = useRef<HTMLDivElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const [height, setHeight] = useState(0);

  useEffect(() => {
    if (ref.current) {
      const rect = ref.current.getBoundingClientRect();
      setHeight(rect.height);
    }
  }, [ref]);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start 10%", "end 50%"],
  });

  const heightTransform = useTransform(scrollYProgress, [0, 1], [0, height]);
  const opacityTransform = useTransform(scrollYProgress, [0, 0.1], [0, 1]);

  return (
    <div
      className="w-full bg-inherit font-sans md:px-10"
      ref={containerRef}
    >
      <div className="max-w-7xl mx-auto py-20 px-4 md:px-8 lg:px-10 flex justify-between items-center">
        <div>
        <h2 className="text-lg md:text-4xl mb-4 text-white max-w-4xl">
          My journey so far.
        </h2>
        <p className="text-neutral-300 text-sm md:text-base max-w-2xl">
        I am an aspiring software developer passionate about creating impactful solutions and driving innovation in the software industry, leveraging skills in C++, Python, and full-stack development to build efficient and scalable projects.
        </p>
        </div>
        <Image
                src="/timeline_start_image.avif"
                alt="startup template"
                width={400}
                height={300}
                className="rounded-xl"
              />
      </div>

      <div ref={ref} className="relative max-w-7xl mx-auto pb-20">
        {data.map((item, index) => (
          <div
            key={index}
            className="flex justify-start pt-10 md:pt-40 md:gap-10"
          >
            <div className="sticky flex flex-col md:flex-row z-40 items-center top-40 self-start max-w-xs lg:max-w-sm md:w-full">
              <div className="h-10 absolute left-3 md:left-3 w-10 rounded-full bg-black flex items-center justify-center">
                <div className="h-4 w-4 rounded-full bg-neutral-800 border border-neutral-700 p-2" />
              </div>
              <h3 className="hidden md:block text-xl md:pl-20 md:text-5xl font-bold text-slate-400 ">
                {item.title}
              </h3>
            </div>

            <div className="relative pl-20 pr-4 md:pl-4 w-full">
              <h3 className="md:hidden block text-2xl mb-4 text-left font-bold text-slate-400">
                {item.title}
              </h3>
              {item.content}{" "}
            </div>
          </div>
        ))}
        <div
          style={{
            height: height + "px",
          }}
          className="absolute md:left-8 left-8 top-0 overflow-hidden w-[2px] bg-[linear-gradient(to_bottom,var(--tw-gradient-stops))] from-transparent from-[0%] via-neutral-700 to-transparent to-[99%]  [mask-image:linear-gradient(to_bottom,transparent_0%,black_10%,black_90%,transparent_100%)] "
        >
          <motion.div
            style={{
              height: heightTransform,
              opacity: opacityTransform,
            }}
            className="absolute inset-x-0 top-0  w-[2px] bg-gradient-to-t from-purple-500 via-blue-500 to-transparent from-[0%] via-[10%] rounded-full"
          />
        </div>
      </div>
    </div>
  );
};


export function TimelineDemo() {
    const data = [
    //   {
    //     title: "2024",
    //     content: (
    //       <div>
    //         <p className="text-neutral-200 text-xs md:text-sm font-normal mb-8">
    //           Built and launched Aceternity UI and Aceternity UI Pro from scratch
    //         </p>
    //         <div className="grid grid-cols-2 gap-4">
    //           <Image
    //             src="https://assets.aceternity.com/templates/startup-1.webp"
    //             alt="startup template"
    //             width={500}
    //             height={500}
    //             className="rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]"
    //           />
    //           <Image
    //             src="https://assets.aceternity.com/templates/startup-2.webp"
    //             alt="startup template"
    //             width={500}
    //             height={500}
    //             className="rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]"
    //           />
    //           <Image
    //             src="https://assets.aceternity.com/templates/startup-3.webp"
    //             alt="startup template"
    //             width={500}
    //             height={500}
    //             className="rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]"
    //           />
    //           <Image
    //             src="https://assets.aceternity.com/templates/startup-4.webp"
    //             alt="startup template"
    //             width={500}
    //             height={500}
    //             className="rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]"
    //           />
    //         </div>
    //       </div>
    //     ),
    //   },
      {
        title: "Work Experience",
        content: (
            <div>
                <h1 className="text-neutral-200 font-semibold text-3xl mb-4">
                    <div className="flex justify-between items-center">
                    <div className="relative inline-block w-max [filter:drop-shadow(0px_1px_3px_rgba(27,_37,_80,_0.14))]">
                        <div className="absolute left-0 top-[1px] bg-clip-text bg-no-repeat text-transparent bg-gradient-to-r py-4 from-purple-500 via-violet-500 to-pink-500 [text-shadow:0_0_rgba(0,0,0,0.1)]">
                            <span className="">Value Village</span>
                        </div>
                        <div className="relative bg-clip-text text-transparent bg-no-repeat bg-gradient-to-r from-purple-500 via-violet-500 to-pink-500 py-4">
                            <span className="">Value Village</span>
                        </div>
                    </div>
                    <div className="font-normal text-sm text-white pl-2">2023-current</div>
                    </div>
                </h1>
                <div className="mb-8">
                    <div className="gap-2 items-center text-neutral-300 text-xs md:text-lg md:max-w-2xl">
                        {/* <div className="mb-2">
                            Focuses on web development, distributed programming, database administration, security, and various operating systems.
                        </div> */}
                        <div>
                            <ul>
                                <li>&#8226; Delivered customer-focused service, assisting with sales, inventory tracking, and</li>
                                <li className="pl-3 pb-3">operational tasks, showcasing problem-solving and teamwork.</li>
                                <li>&#8226; Maintained store displays and optimized inventory organization to improve</li>
                                <li className="pl-3">efficiency and customer satisfaction in a fast-paced environment.</li>
                            </ul>
                        </div>
                    </div>

                </div>
            </div>
        ),
      },
      {
        title: "Education",
        content: (
            <div>
                <h1 className="text-neutral-200 font-semibold text-3xl mb-4">
                    <div className="flex justify-between items-center">
                    <div className="relative inline-block w-max [filter:drop-shadow(0px_1px_3px_rgba(27,_37,_80,_0.14))]">
                        <div className="absolute left-0 top-[1px] bg-clip-text bg-no-repeat text-transparent bg-gradient-to-r py-4 from-purple-500 via-violet-500 to-pink-500 [text-shadow:0_0_rgba(0,0,0,0.1)]">
                            <span className="">Seneca Polytechnic</span>
                        </div>
                        <div className="relative bg-clip-text text-transparent bg-no-repeat bg-gradient-to-r from-purple-500 via-violet-500 to-pink-500 py-4">
                            <span className="">Seneca Polytechnic</span>
                        </div>
                    </div>
                    <div className="font-normal text-sm text-white pl-2">2023-2026</div>
                    </div>
                </h1>
                <div className="mb-8">
                    <div className="gap-2 items-center text-neutral-300 text-xs md:text-lg md:max-w-2xl">
                        <div className="mb-2">
                            Focuses on web development, distributed programming, database administration, security, and various operating systems.
                        </div>
                        <div>
                            <ul>
                                <li>&#8226; Earned
                                    {' '}<LinkPreview url="https://drive.google.com/file/d/1HuVhkY7SatDC38IEUpfrzJMX2pVo5RfK/view?usp=share_link" className="font-bold">
                                    President's Honour List
                                    </LinkPreview>{' '}
                                    in the 2nd & 3rd semester</li>
                                <li>&#8226; Participated in Seneca's Housing Hackathon</li>
                            </ul>
                        </div>
                    </div>

                </div>
            {/* <div className="grid grid-cols-2 gap-4">
              <Image
                src="https://assets.aceternity.com/pro/hero-sections.png"
                alt="hero template"
                width={500}
                height={500}
                className="rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]"
              />
              <Image
                src="https://assets.aceternity.com/features-section.png"
                alt="feature template"
                width={500}
                height={500}
                className="rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]"
              />
              <Image
                src="https://assets.aceternity.com/pro/bento-grids.png"
                alt="bento template"
                width={500}
                height={500}
                className="rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]"
              />
              <Image
                src="https://assets.aceternity.com/cards.png"
                alt="cards template"
                width={500}
                height={500}
                className="rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]"
              />
            </div> */}
          </div>
        ),
      },
    ];
    return (
      <div className="w-full">
        <Timeline data={data} />
      </div>
    );
  }