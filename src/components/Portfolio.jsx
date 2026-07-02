"use client";

import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

export default function Portfolio() {
  const projects = [
    {
      title: "Real Estate Website",
      category: "Website Development",
    },

    {
      title: "Restaurant Branding",
      category: "Branding Design",
    },

    {
      title: "Coffee Packaging",
      category: "Packaging Design",
    },
  ];

  return (
    <section className="relative overflow-hidden bg-[#03111F] py-12">
      
      {/* Glow Effects */}
      <div className="absolute left-[-100px] top-0 h-[250px] w-[250px] rounded-full bg-[#086ED0]/10 blur-3xl" />

      <div className="absolute bottom-0 right-[-100px] h-[250px] w-[250px] rounded-full bg-[#FF6D00]/10 blur-3xl" />

      <div className="relative mx-auto max-w-[1400px] px-6">
        
        {/* Heading */}
        <div className="text-center">
          
          <p className="text-xs font-medium uppercase tracking-[5px] text-[#FF6D00] sm:text-sm">
            Our Portfolio
          </p>

          <h2 className="mt-5 text-3xl font-black leading-[1.1] text-white sm:text-4xl lg:text-5xl">
            
            Featured
            <span className="text-[#086ED0]"> Creative Work </span>
          </h2>

          <p className="mx-auto mt-6 max-w-[650px] text-sm leading-7 text-white/60 sm:text-base">
            Explore some of our premium projects crafted for
            modern businesses and growing brands.
          </p>
        </div>

        {/* Portfolio Cards */}
<div className="no-scrollbar mt-16 flex gap-6 overflow-x-auto pb-4 snap-x snap-mandatory lg:grid lg:grid-cols-3 lg:overflow-visible">          
          {projects.map((project, index) => (
  <Link
    key={index}
    href="/portfolio"
    className="group relative block min-w-[320px] snap-center overflow-hidden rounded-[36px] border border-white/10 bg-white/[0.03] backdrop-blur-xl transition duration-500 hover:-translate-y-3 hover:border-[#086ED0]/40 lg:min-w-0"
  >
    {/* Image Area */}
    <div className="relative h-[320px] overflow-hidden">
      {/* Gradient Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#086ED0]/20 via-[#091827] to-[#FF6D00]/10 transition duration-500 group-hover:scale-110" />

      {/* Glow */}
      <div className="absolute left-[-60px] top-[-60px] h-[180px] w-[180px] rounded-full bg-[#086ED0]/20 blur-3xl" />
      <div className="absolute bottom-[-60px] right-[-60px] h-[180px] w-[180px] rounded-full bg-[#FF6D00]/20 blur-3xl" />

      {/* Top Badge */}
      <div className="absolute left-6 top-6 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-xs font-medium text-white/70 backdrop-blur-xl">
        0{index + 1}
      </div>

      {/* Arrow */}
      <div className="absolute right-6 top-6 flex h-11 w-11 items-center justify-center rounded-full border border-white/10 bg-white/5 text-white opacity-0 backdrop-blur-xl transition duration-300 group-hover:opacity-100 group-hover:bg-[#FF6D00]">
        <ArrowUpRight size={18} />
      </div>

      {/* Bottom Content */}
      <div className="absolute bottom-6 left-6 right-6 rounded-[24px] border border-white/10 bg-white/[0.05] p-6 backdrop-blur-xl">
        <p className="text-xs uppercase tracking-[4px] text-[#FF6D00]">
          {project.category}
        </p>

        <h3 className="mt-3 text-xl font-black text-white md:text-2xl">
          {project.title}
        </h3>

        <p className="mt-3 text-sm leading-7 text-white/60">
          Premium creative solution designed for modern brands and businesses.
        </p>
      </div>
    </div>
  </Link>
))}

        </div>

        {/* Button */}
        <div className="mt-16 flex justify-center">
          
          <Link
            href="/portfolio"
            className="group inline-flex items-center gap-3 rounded-full bg-[#FF6D00] px-8 py-4 text-sm font-semibold text-white transition duration-300 hover:scale-105 hover:bg-[#e65f00]"
          >
            View Full Portfolio

            <ArrowUpRight
              size={18}
              className="transition group-hover:translate-x-1 group-hover:-translate-y-1"
            />
          </Link>
        </div>
      </div>
    </section>
  );
}