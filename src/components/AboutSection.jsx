"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

export default function AboutSection() {
  return (
    <section className="relative overflow-hidden bg-[#03111F] py-12">

      {/* Ambient glows */}
      <div className="absolute left-[-120px] top-0 h-[320px] w-[320px] rounded-full bg-[#086ED0]/10 blur-3xl" />
      <div className="absolute bottom-0 right-[-120px] h-[320px] w-[320px] rounded-full bg-[#FF6D00]/10 blur-3xl" />

      <div className="relative mx-auto max-w-[1400px] px-6">
        <div className="grid items-center gap-16 lg:grid-cols-2">

          {/* ---------------- Left Content ---------------- */}
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
              <span className="text-[#FF6D00]"> Modern Brands</span>
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
              and business growth in today&apos;s competitive market.
            </p>


            {/* Stat row */}
            <div className="mt-8 grid grid-cols-3 gap-6">
              <div>
                <p className="text-2xl font-black text-white">2025</p>
                <p className="mt-1 text-xs uppercase tracking-wide text-white/40">
                  Founded
                </p>
              </div>
              <div>
                <p className="text-2xl font-black text-white">07</p>
                <p className="mt-1 text-xs uppercase tracking-wide text-white/40">
                  Core Services
                </p>
              </div>
              <div>
                <p className="text-2xl font-black text-white">100%</p>
                <p className="mt-1 text-xs uppercase tracking-wide text-white/40">
                  Custom Builds
                </p>
              </div>
            </div>

            {/* Button — back to original clean pill style */}
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

          {/* ---------------- Right Side ---------------- */}
          <div className="relative">


            {/* Main Card */}
            <div className="relative overflow-hidden rounded-[40px] border border-white/10 bg-white/[0.03] p-8 backdrop-blur-xl">

              {/* Gradient */}
              <div className="absolute inset-0 bg-gradient-to-br from-[#086ED0]/20 to-[#FF6D00]/10" />

              {/* Image Area */}
              <div className="relative h-[500px] overflow-hidden rounded-[30px] bg-[#091827]">

                {/* Glow */}
                <div className="absolute left-[-50px] top-[-50px] h-[220px] w-[220px] rounded-full bg-[#086ED0]/20 blur-3xl" />
                <div className="absolute bottom-[-50px] right-[-50px] h-[220px] w-[220px] rounded-full bg-[#FF6D00]/20 blur-3xl" />

                {/* Content */}
                <div className="relative flex h-full flex-col justify-between p-8">

                 

                  {/* Monogram — sharp render, no pixelation */}
                  <div className="flex flex-1 items-center justify-center">
  <Image
    src="/logo/branding_guide-removebg-preview.png"
    alt="Branding Guide Logo"
    width={320}
    height={320}
    className="h-auto w-[220px] object-contain transition-all duration-500 hover:scale-105 sm:w-[260px] lg:w-[300px]"
    priority
  />
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