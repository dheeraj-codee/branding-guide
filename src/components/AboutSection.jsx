"use client";

import Link from "next/link";
import { ArrowRight } from "lucide-react";

export default function AboutSection() {
  return (
    <section className="relative overflow-hidden bg-[#03111F] py-24">
      
      {/* Glow Effects */}
      <div className="absolute left-[-120px] top-0 h-[320px] w-[320px] rounded-full bg-[#086ED0]/10 blur-3xl" />

      <div className="absolute bottom-0 right-[-120px] h-[320px] w-[320px] rounded-full bg-[#FF6D00]/10 blur-3xl" />

      <div className="relative mx-auto max-w-[1400px] px-6">
        
        <div className="grid items-center gap-16 lg:grid-cols-2">
          
          {/* Left Content */}
          <div>
            
            {/* Small Label */}
            <p className="text-xs font-medium uppercase tracking-[5px] text-[#FF6D00] sm:text-sm">
              About Branding Guide
            </p>

            {/* Heading */}
            <h2 className="mt-5 max-w-[650px] text-3xl font-black leading-[1.1] text-white sm:text-4xl lg:text-5xl">
              
              We Create
              <span className="text-[#086ED0]"> Premium Digital </span>

              Experiences For
              <span className="text-[#FF6D00]"> Modern Brands </span>
            </h2>

            {/* Description */}
            <p className="mt-8 max-w-[650px] text-sm leading-7 text-white/60 sm:text-base">
              Branding Guide helps businesses grow through modern
              branding, website development, logo design, packaging
              design, and creative digital solutions crafted for
              long-term success.
            </p>

            <p className="mt-6 max-w-[650px] text-sm leading-7 text-white/60 sm:text-base">
              We focus on creating premium visuals and high-performance
              digital experiences that improve trust, engagement,
              and business growth in today’s competitive market.
            </p>

            {/* Features */}
            <div className="mt-10 grid gap-5 sm:grid-cols-2">
              
              <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-5 backdrop-blur-xl">
                
                <h3 className="text-lg font-bold text-white">
                  Modern Design
                </h3>

                <p className="mt-2 text-sm leading-6 text-white/60">
                  Clean and premium UI crafted for modern brands.
                </p>
              </div>

              <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-5 backdrop-blur-xl">
                
                <h3 className="text-lg font-bold text-white">
                  Fast Development
                </h3>

                <p className="mt-2 text-sm leading-6 text-white/60">
                  Responsive and scalable websites with performance focus.
                </p>
              </div>
            </div>

            {/* Button */}
            <Link
              href="/about"
              className="group mt-10 inline-flex items-center gap-3 rounded-full bg-[#FF6D00] px-8 py-4 text-sm font-semibold text-white transition duration-300 hover:scale-105 hover:bg-[#e65f00]"
            >
              Learn More

              <ArrowRight
                size={18}
                className="transition group-hover:translate-x-1"
              />
            </Link>
          </div>

          {/* Right Side */}
          <div className="relative">
            
            {/* Background Border */}
            <div className="absolute -left-5 -top-5 h-full w-full rounded-[40px] border border-white/10" />

            {/* Main Card */}
            <div className="relative overflow-hidden rounded-[40px] border border-white/10 bg-white/[0.03] p-8 backdrop-blur-xl">
              
              {/* Gradient */}
              <div className="absolute inset-0 bg-gradient-to-br from-[#086ED0]/20 to-[#FF6D00]/10" />

              {/* Fake Image Area */}
              <div className="relative h-[500px] overflow-hidden rounded-[30px] bg-[#091827]">
                
                {/* Glow */}
                <div className="absolute left-[-50px] top-[-50px] h-[220px] w-[220px] rounded-full bg-[#086ED0]/20 blur-3xl" />

                <div className="absolute bottom-[-50px] right-[-50px] h-[220px] w-[220px] rounded-full bg-[#FF6D00]/20 blur-3xl" />

                {/* Content */}
                <div className="relative flex h-full flex-col justify-between p-8">
                  
                  <div className="flex items-center justify-between">
                    
                    <div className="rounded-full border border-white/10 bg-white/5 px-4 py-2 text-xs text-white/70">
                      Creative Agency
                    </div>

                    <div className="rounded-full border border-white/10 bg-white/5 px-4 py-2 text-xs text-white/70">
                      Since 2025
                    </div>
                  </div>

                  {/* Bottom Card */}
                  <div className="rounded-[28px] border border-white/10 bg-white/[0.05] p-6 backdrop-blur-xl">
                    
                    <h3 className="text-2xl font-black text-white">
                      Building Brands With Creativity
                    </h3>

                    <p className="mt-4 text-sm leading-7 text-white/60">
                      We combine strategy, design, and development to
                      create premium digital experiences that help
                      businesses grow online.
                    </p>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}