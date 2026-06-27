"use client";

import { ArrowRight } from "lucide-react";

export default function Process() {
  const process = [
    {
      number: "01",
      title: "Discovery",
      desc: "Understanding your business goals and project requirements.",
    },

    {
      number: "02",
      title: "Planning",
      desc: "Creating strategy and creative direction for the project.",
    },

    {
      number: "03",
      title: "Design",
      desc: "Crafting premium UI/UX and modern visual experiences.",
    },

    {
      number: "04",
      title: "Launch",
      desc: "Delivering and launching a high-performance final product.",
    },
  ];

  return (
    <section className="relative overflow-hidden bg-[#03111F] py-24">
      
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
<div className="no-scrollbar mt-16 flex gap-6 overflow-x-auto pb-4 snap-x snap-mandatory lg:grid lg:grid-cols-4 lg:overflow-visible">          
          {process.map((item, index) => (
            <div
              key={index}
className="group relative min-w-[280px] snap-center overflow-hidden rounded-[30px] border border-white/10 bg-white/[0.03] p-7 backdrop-blur-xl transition duration-500 hover:-translate-y-2 hover:border-[#086ED0]/40 lg:min-w-0"            >
              
              {/* Hover Gradient */}
              <div className="absolute inset-0 bg-gradient-to-br from-[#086ED0]/10 to-[#FF6D00]/5 opacity-0 transition duration-500 group-hover:opacity-100" />

              {/* Top */}
              <div className="relative flex items-center justify-between">
                
                <span className="text-4xl font-black text-white/10">
                  {item.number}
                </span>

                <div className="flex h-10 w-10 items-center justify-center rounded-full border border-white/10 bg-white/5 text-white transition duration-300 group-hover:bg-[#FF6D00]">
                  <ArrowRight size={16} />
                </div>
              </div>

              {/* Content */}
              <div className="relative mt-10">
                
                <h3 className="text-xl font-black text-white">
                  {item.title}
                </h3>

                <p className="mt-4 text-sm leading-7 text-white/60">
                  {item.desc}
                </p>
              </div>

              {/* Bottom Glow */}
              <div className="absolute bottom-[-60px] right-[-60px] h-[120px] w-[120px] rounded-full bg-[#086ED0]/0 blur-3xl transition duration-500 group-hover:bg-[#086ED0]/20" />
            </div>
          ))}

        </div>
      </div>
    </section>
  );
}