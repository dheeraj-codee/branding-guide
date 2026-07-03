"use client";

import { Search, ClipboardList, PenTool, Rocket, ArrowRight } from "lucide-react";

export default function Process() {
  const process = [
    {
      title: "Discovery",
      desc: "Understanding your business goals and project requirements.",
      color: "#086ED0",
      icon: Search,
    },
    {
      title: "Planning",
      desc: "Creating strategy and creative direction for the project.",
      color: "#FF6D00",
      icon: ClipboardList,
    },
    {
      title: "Design",
      desc: "Crafting premium UI/UX and modern visual experiences.",
      color: "#086ED0",
      icon: PenTool,
    },
    {
      title: "Launch",
      desc: "Delivering and launching a high-performance final product.",
      color: "#FF6D00",
      icon: Rocket,
    },
  ];

  return (
    <section className="relative overflow-hidden bg-[#03111F] py-12">

      {/* Glow Effects */}
      <div className="absolute left-[-120px] top-0 h-[280px] w-[280px] rounded-full bg-[#086ED0]/10 blur-3xl" />
      <div className="absolute bottom-0 right-[-120px] h-[280px] w-[280px] rounded-full bg-[#FF6D00]/10 blur-3xl" />

      <div className="relative mx-auto max-w-[1400px] px-6">

        {/* Heading */}
        <div className="text-center">
          <p className="text-xs font-medium uppercase tracking-[5px] text-[#FF6D00] sm:text-sm">
            Our Process
          </p>

          <h2 className="mt-5 text-3xl font-black leading-[1.1] text-white sm:text-4xl lg:text-5xl">
            Simple Process
            <span className="text-[#086ED0]"> Powerful Results </span>
          </h2>

          <p className="mx-auto mt-6 max-w-[650px] text-sm leading-7 text-white/60 sm:text-base">
            We follow a structured workflow to deliver premium
            branding and digital experiences.
          </p>
        </div>

        {/* Process Cards */}
        <div className="relative mt-16">

          {/* Connecting line behind cards (desktop only) */}
          <div className="pointer-events-none absolute left-0 right-0 top-[76px] hidden h-px lg:block">
            <div className="h-full w-full bg-gradient-to-r from-transparent via-white/15 to-transparent" />
            <div className="absolute inset-0 animate-[flow_3s_linear_infinite] bg-gradient-to-r from-transparent via-[#FF6D00]/70 to-transparent bg-[length:40%_100%] bg-no-repeat" />
          </div>

<div className="no-scrollbar flex gap-6 overflow-x-auto pb-4 snap-x snap-mandatory md:grid md:grid-cols-2 md:overflow-visible lg:grid-cols-4">
              {process.map((item, index) => {
              const Icon = item.icon;
              return (
                <div
                  key={index}
className="group relative min-w-[280px] snap-center overflow-hidden rounded-[30px] border border-white/10 bg-white/[0.03] p-8 text-center backdrop-blur-xl transition-all duration-500 hover:-translate-y-3 hover:border-[#086ED0]/40 md:min-w-0"                >

                  {/* Hover Gradient */}
                  <div className="absolute inset-0 bg-gradient-to-br from-[#086ED0]/10 to-[#FF6D00]/10 opacity-0 transition duration-500 group-hover:opacity-100" />

                  {/* Step number badge */}
                  <div className="relative flex items-center justify-center gap-3">
                    <span
                      className="text-xs font-bold tracking-wider text-white/30"
                      style={{ color: `${item.color}88` }}
                    >
                      0{index + 1}
                    </span>
                  </div>

                  {/* Icon */}
                  <div
                    className="relative mx-auto mt-4 flex h-16 w-16 items-center justify-center rounded-full border border-white/10 bg-white/5 transition-all duration-500 group-hover:scale-110"
                    style={{
                      boxShadow: `0 0 0 rgba(0,0,0,0)`,
                    }}
                  >
                    <div
                      className="absolute inset-0 rounded-full opacity-0 blur-xl transition-opacity duration-500 group-hover:opacity-40"
                      style={{ backgroundColor: item.color }}
                    />
                    <Icon
                      size={26}
                      className="relative"
                      style={{ color: item.color }}
                      strokeWidth={2}
                    />
                  </div>

                  {/* Content */}
                  <div className="relative mt-8">
                    <h3 className="text-2xl font-black text-white">
                      {item.title}
                    </h3>

                    <p className="mt-4 text-sm leading-7 text-white/60">
                      {item.desc}
                    </p>
                  </div>

                  {/* Animated Arrow to next step */}
                  {index !== process.length - 1 && (
                    <div className="absolute -right-5 top-[76px] z-10 hidden -translate-y-1/2 lg:flex">
                      <div className="flex h-8 w-8 items-center justify-center rounded-full border border-white/10 bg-[#03111F]">
                        <ArrowRight
                          size={16}
                          className="text-[#FF6D00] opacity-70 transition-all duration-700 group-hover:translate-x-1 group-hover:opacity-100"
                        />
                      </div>
                    </div>
                  )}

                  {/* Bottom Glow */}
                  <div
                    className="absolute bottom-[-70px] left-1/2 h-[140px] w-[140px] -translate-x-1/2 rounded-full opacity-0 blur-3xl transition-all duration-500 group-hover:opacity-20"
                    style={{ backgroundColor: item.color }}
                  />
                </div>
              );
            })}
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes flow {
          0% {
            background-position: -40% 0;
          }
          100% {
            background-position: 140% 0;
          }
        }
      `}</style>
    </section>
  );
}