"use client";

import Link from "next/link";
import { ArrowRight } from "lucide-react";

export default function CtaBanner() {
  return (
    <section className="relative overflow-hidden bg-[#03111F] py-12">
      
      {/* Glow Effects */}
      <div className="absolute left-[-120px] top-0 h-[260px] w-[260px] rounded-full bg-[#086ED0]/10 blur-3xl" />

      <div className="absolute bottom-0 right-[-120px] h-[260px] w-[260px] rounded-full bg-[#FF6D00]/10 blur-3xl" />

      <div className="relative mx-auto max-w-[1400px] px-6">
        
        {/* Main Banner */}
        <div className="relative overflow-hidden rounded-[40px] border border-white/10 bg-white/[0.03] px-8 py-16 text-center backdrop-blur-2xl md:px-16">
          
          {/* Background Gradient */}
          <div className="absolute inset-0 bg-gradient-to-r from-[#086ED0]/20 via-[#091827] to-[#FF6D00]/10" />

          {/* Extra Glow */}
          <div className="absolute left-[-80px] top-[-80px] h-[220px] w-[220px] rounded-full bg-[#086ED0]/20 blur-3xl" />

          <div className="absolute bottom-[-80px] right-[-80px] h-[220px] w-[220px] rounded-full bg-[#FF6D00]/20 blur-3xl" />

          {/* Content */}
          <div className="relative">
            
            {/* Small Label */}
            <p className="text-xs font-medium uppercase tracking-[5px] text-[#FF6D00] sm:text-sm">
              Let’s Work Together
            </p>

            {/* Heading */}
            <h2 className="mx-auto mt-6 max-w-[850px] text-3xl font-black leading-[1.1] text-white sm:text-4xl lg:text-5xl">
              
              Ready To Build
              <span className="text-[#086ED0]"> Something Amazing </span>

              For Your Brand?
            </h2>

            {/* Description */}
            <p className="mx-auto mt-6 max-w-[700px] text-sm leading-7 text-white/60 sm:text-base">
              Let’s create premium branding, modern websites,
              and powerful digital experiences that help your
              business stand out online.
            </p>

            {/* Buttons */}
            <div className="mt-10 flex flex-col items-center justify-center gap-5 sm:flex-row">
              
              <Link
                href="/contact"
                className="group inline-flex items-center gap-3 rounded-full bg-[#FF6D00] px-8 py-4 text-sm font-semibold text-white transition duration-300 hover:scale-105 hover:bg-[#e65f00]"
              >
                Start Your Project

                <ArrowRight
                  size={18}
                  className="transition group-hover:translate-x-1"
                />
              </Link>

              <Link
                href="/portfolio"
                className="inline-flex items-center gap-3 rounded-full border border-white/10 bg-white/5 px-8 py-4 text-sm font-semibold text-white transition duration-300 hover:border-white/20 hover:bg-white/10"
              >
                View Portfolio
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}