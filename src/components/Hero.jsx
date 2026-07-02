"use client";

import Link from "next/link";
import { ArrowRight, Play } from "lucide-react";

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-[#03111F] pb-12 pt-10">
      
      {/* Glow Effects */}
      <div className="absolute left-[-120px] top-10 h-[320px] w-[320px] rounded-full bg-[#086ED0]/20 blur-3xl" />

      <div className="absolute bottom-[-100px] right-[-100px] h-[320px] w-[320px] rounded-full bg-[#FF6D00]/20 blur-3xl" />

      {/* Grid Effect */}
      <div className="absolute inset-0 opacity-[0.03]">
        <div className="h-full w-full bg-[linear-gradient(to_right,#ffffff_1px,transparent_1px),linear-gradient(to_bottom,#ffffff_1px,transparent_1px)] bg-[size:80px_80px]" />
      </div>

      <div className="relative mx-auto flex max-w-[1400px] flex-col items-center px-6 text-center">
        
        {/* Badge */}
        <div className="mb-8 inline-flex items-center gap-3 rounded-full border border-white/10 bg-white/5 px-5 py-2 text-xs font-medium text-white/70 backdrop-blur-xl sm:text-sm">
          
          <span className="h-2.5 w-2.5 rounded-full bg-[#FF6D00]" />

          Creative Branding & Web Agency
        </div>

        {/* Heading */}
        <h1 className="max-w-[950px] text-4xl font-black leading-[1.1] text-white sm:text-5xl lg:text-6xl">
          
          Building
          <span className="text-[#086ED0]"> Premium Brands </span>

          Through Creative
          <span className="text-[#FF6D00]"> Digital Experiences </span>
        </h1>

        {/* Description */}
        <p className="mt-8 max-w-[700px] text-sm leading-7 text-white/60 sm:text-base">
          Branding Guide helps businesses grow with modern branding,
          high-converting websites, logo design, packaging design,
          video editing, and premium creative solutions.
        </p>

        {/* Buttons */}
        <div className="mt-12 flex flex-col items-center gap-5 sm:flex-row">
          
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
            className="group inline-flex items-center gap-3 rounded-full border border-white/10 bg-white/5 px-8 py-4 text-sm font-semibold text-white backdrop-blur-xl transition duration-300 hover:border-white/20 hover:bg-white/10"
          >
            <Play
              size={16}
              className="transition group-hover:scale-110"
            />

            View Portfolio
          </Link>
        </div>

        {/* Bottom Cards */}
        <div className="mt-20 grid w-full max-w-[1100px] gap-6 md:grid-cols-3">
          
          <div className="rounded-[32px] border border-white/10 bg-white/[0.03] p-8 text-left backdrop-blur-xl">
            
            <p className="text-xs uppercase tracking-[4px] text-[#086ED0] sm:text-sm">
              Branding
            </p>

            <h3 className="mt-4 text-xl font-black text-white md:text-2xl">
              Modern Identity
            </h3>

            <p className="mt-4 text-sm leading-7 text-white/60">
              Premium branding solutions that create trust and
              recognition for your business.
            </p>
          </div>

          <div className="rounded-[32px] border border-white/10 bg-white/[0.03] p-8 text-left backdrop-blur-xl">
            
            <p className="text-xs uppercase tracking-[4px] text-[#FF6D00] sm:text-sm">
              Development
            </p>

            <h3 className="mt-4 text-xl font-black text-white md:text-2xl">
              High Performance
            </h3>

            <p className="mt-4 text-sm leading-7 text-white/60">
              Fast, responsive, and scalable websites built for
              modern businesses.
            </p>
          </div>

          <div className="rounded-[32px] border border-white/10 bg-white/[0.03] p-8 text-left backdrop-blur-xl">
            
            <p className="text-xs uppercase tracking-[4px] text-white/50 sm:text-sm">
              Creative
            </p>

            <h3 className="mt-4 text-xl font-black text-white md:text-2xl">
              Digital Growth
            </h3>

            <p className="mt-4 text-sm leading-7 text-white/60">
              Creative visuals and premium experiences designed
              to grow your online presence.
            </p>
          </div>

        </div>
      </div>
    </section>
  );
}