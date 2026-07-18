import Image from "next/image";
import Link from "next/link";
import {
  Lightbulb,
  Target,
  Handshake,
  TrendingUp,
  ArrowRight,
  Sparkles,
  Compass,
  Flag,
} from "lucide-react";
import CtaBanner from "@/components/CtaBanner";
import Services from "@/components/Services";

export default function AboutPage() {
  const values = [
    {
      icon: Lightbulb,
      title: "Creativity First",
      desc: "Every project starts with fresh thinking — not recycled templates or copy-paste designs.",
    },
    {
      icon: Target,
      title: "Quality Driven",
      desc: "We review, refine, and test every detail before it reaches you — no shortcuts on execution.",
    },
    {
      icon: Handshake,
      title: "Honest Partnership",
      desc: "Clear communication, transparent pricing, and no surprises throughout the project.",
    },
    {
      icon: TrendingUp,
      title: "Growth Focused",
      desc: "We build for long-term results — websites and brands that keep working after launch day.",
    },
  ];

  return (
    <main className="bg-[#03111F] text-white">

      {/* ---------------- Hero Section ---------------- */}
      <section className="relative overflow-hidden py-24 lg:py-28">

        <div className="absolute left-[-120px] top-10 h-[300px] w-[300px] rounded-full bg-[#086ED0]/20 blur-3xl" />
        <div className="absolute bottom-0 right-[-100px] h-[300px] w-[300px] rounded-full bg-[#FF6D00]/20 blur-3xl" />

        <div className="relative mx-auto grid max-w-[1400px] gap-16 px-6 lg:grid-cols-[1.05fr_0.95fr] lg:items-center">

          {/* Left — copy */}
          <div className="text-center lg:text-left">
            <p className="text-xs font-medium uppercase tracking-[5px] text-[#FF6D00] sm:text-sm">
              About Branding Guide
            </p>

            <h1 className="mx-auto mt-6 max-w-[650px] text-4xl font-black leading-[1.1] text-white sm:text-5xl lg:mx-0 lg:text-6xl">
              We Build Powerful Brands &
              <span className="text-[#086ED0]"> Modern Digital </span>
              Experiences
            </h1>

            <p className="mx-auto mt-8 max-w-[550px] text-sm leading-7 text-white/60 sm:text-base lg:mx-0">
              Branding Guide is a creative digital agency focused on
              helping businesses grow through premium branding,
              website development, packaging design, video editing,
              and modern visual experiences.
            </p>

            <div className="mt-10 flex flex-col items-center gap-4 sm:flex-row sm:justify-center lg:justify-start">
              <Link
                href="/portfolio"
                className="group inline-flex items-center gap-2 rounded-full bg-[#FF6D00] px-7 py-3.5 text-sm font-semibold text-white transition hover:bg-[#FF6D00]/90"
              >
                View Our Work
                <ArrowRight
                  size={16}
                  className="transition group-hover:translate-x-1"
                />
              </Link>
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-7 py-3.5 text-sm font-semibold text-white/80 backdrop-blur-xl transition hover:border-white/30 hover:text-white"
              >
                Start a Project
              </Link>
            </div>

            <p className="mt-8 text-[11px] uppercase tracking-[3px] text-white/30">
              Branding · Web Design · Packaging · Motion
            </p>
          </div>

          {/* Right — layered services showcase */}
          <div className="relative mx-auto hidden h-[420px] max-w-[440px] lg:mx-0 lg:block">

            {/* Website mockup card */}
            <div className="absolute left-0 top-6 w-[300px] rotate-[-6deg] rounded-2xl border border-white/10 bg-[#0A1B2E] p-5 shadow-2xl shadow-black/50 backdrop-blur-xl">
              <div className="flex items-center gap-1.5">
                <span className="h-2.5 w-2.5 rounded-full bg-white/15" />
                <span className="h-2.5 w-2.5 rounded-full bg-white/15" />
                <span className="h-2.5 w-2.5 rounded-full bg-white/15" />
              </div>
              <div className="mt-4 h-24 w-full rounded-lg bg-gradient-to-br from-[#086ED0]/30 to-[#FF6D00]/20" />
              <div className="mt-3 h-2 w-3/4 rounded-full bg-white/15" />
              <div className="mt-2 h-2 w-1/2 rounded-full bg-white/10" />
              <div className="mt-4 flex gap-2">
                <span className="h-6 w-16 rounded-full bg-[#FF6D00]/80" />
                <span className="h-6 w-16 rounded-full border border-white/20" />
              </div>
            </div>

            {/* Social post mini card */}
            <div className="absolute -right-2 top-0 h-16 w-16 rotate-[-8deg] rounded-xl border border-white/10 bg-gradient-to-br from-[#FF6D00]/50 to-[#086ED0]/40 shadow-xl shadow-black/40 backdrop-blur-xl" />

            {/* Logo mark card — front */}
            <div className="absolute bottom-4 right-0 w-[200px] rotate-[4deg] rounded-2xl border border-white/10 bg-[#03111F]/95 p-6 text-center shadow-2xl shadow-black/50 backdrop-blur-xl">
              <div className="mx-auto flex h-14 w-14 items-center justify-center">
                <span className="relative block h-11 w-11">
                  <span className="absolute inset-0 rounded-full bg-[#086ED0]" />
                  <span className="absolute inset-0 m-auto h-7 w-7 rotate-45 rounded-md bg-[#FF6D00]" />
                </span>
              </div>
              <p className="mt-3 text-sm font-black tracking-wide text-white">
                BRANDING GUIDE
              </p>
              <p className="mt-1 text-[10px] uppercase tracking-[3px] text-white/40">
                Identity System
              </p>
            </div>

            {/* Services pill */}
            <div className="absolute -left-4 bottom-0 flex items-center gap-2 rotate-[2deg] rounded-full border border-white/10 bg-[#03111F]/90 px-4 py-2 text-xs font-medium text-white/70 backdrop-blur-xl">
              <Sparkles size={14} className="text-[#086ED0]" />
              Web · Branding · SEO
            </div>
          </div>
        </div>
      </section>

      {/* ---------------- About Section ---------------- */}
      <section className="py-12">
        <div className="mx-auto grid max-w-[1400px] gap-16 px-6 lg:grid-cols-2 lg:items-center">

          <div>
            <p className="text-xs font-medium uppercase tracking-[5px] text-[#FF6D00] sm:text-sm">
              Who We Are
            </p>

            <h2 className="mt-5 text-3xl font-black leading-[1.1] text-white sm:text-4xl lg:text-5xl">
              Creative Solutions
              <span className="text-[#086ED0]"> Designed </span>
              For Modern Businesses
            </h2>

            <p className="mt-6 text-sm leading-7 text-white/60 sm:text-base">
              At Branding Guide, we believe every business deserves
              a strong and memorable identity. Our goal is to create
              premium digital experiences that not only look amazing
              but also help brands stand out in today&apos;s competitive market.
            </p>

            <p className="mt-4 text-sm leading-7 text-white/60 sm:text-base">
              From startup businesses to growing companies, we help
              brands create trust, improve online presence, and
              connect with customers through strategic design and
              modern development solutions.
            </p>
          </div>

          {/* Real image slot with floating stat badge instead of empty gradient box */}
          <div className="relative">
            <div className="absolute -left-6 -top-6 h-full w-full rounded-[40px] border border-[#086ED0]/20" />

            <div className="relative h-[400px] overflow-hidden rounded-[40px] bg-gradient-to-br from-[#086ED0]/20 to-[#FF6D00]/10 sm:h-[350px] lg:h-[500px]">
              <Image
                src="/images/logo/branding.jpeg"
                alt="Branding Guide studio"
                fill
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="object-cover"
              />
            </div>

            {/* Floating stat card */}
            <div className="absolute -bottom-6 left-6 right-6 rounded-[24px] border border-white/10 bg-[#03111F]/90 p-5 backdrop-blur-xl sm:left-8 sm:right-auto sm:w-[240px]">
              <p className="text-3xl font-black text-[#086ED0]">50+</p>
              <p className="mt-1 text-sm text-white/60">
                Projects delivered for growing brands
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ---------------- Our Values ---------------- */}
      <section className="py-16">
        <div className="mx-auto max-w-[1400px] px-6">

          <div className="text-center">
            <p className="text-xs font-medium uppercase tracking-[5px] text-[#FF6D00] sm:text-sm">
              What Drives Us
            </p>

            <h2 className="mt-5 text-3xl font-black leading-[1.1] text-white sm:text-4xl lg:text-5xl">
              Our Core
              <span className="text-[#086ED0]"> Values </span>
            </h2>
          </div>

          <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {values.map((value, index) => {
              const Icon = value.icon;
              return (
                <div
                  key={index}
                  className="group relative overflow-hidden rounded-[24px] border border-white/10 bg-white/[0.03] p-7 backdrop-blur-xl transition duration-500 hover:-translate-y-2 hover:border-[#086ED0]/40"
                >
                  <div className="absolute inset-0 bg-gradient-to-br from-[#086ED0]/10 to-[#FF6D00]/5 opacity-0 transition duration-500 group-hover:opacity-100" />

                  <div className="relative flex h-12 w-12 items-center justify-center rounded-2xl border border-white/10 bg-white/5 text-[#FF6D00]">
                    <Icon size={22} />
                  </div>

                  <h3 className="relative mt-5 text-lg font-black text-white">
                    {value.title}
                  </h3>

                  <p className="relative mt-3 text-sm leading-6 text-white/60">
                    {value.desc}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ---------------- Mission & Vision ---------------- */}
      <section className="py-16">
        <div className="mx-auto max-w-[1400px] px-6">

          <div className="text-center">
            <p className="text-xs font-medium uppercase tracking-[5px] text-[#FF6D00] sm:text-sm">
              Our Mission
            </p>

            <h2 className="mt-5 text-3xl font-black leading-[1.1] text-white sm:text-4xl lg:text-5xl">
              Helping Brands Grow
              <span className="text-[#086ED0]"> Digitally </span>
            </h2>
          </div>

          <div className="relative mt-16 grid gap-8 lg:grid-cols-2">

            {/* connector badge — desktop only */}
            <div className="pointer-events-none absolute left-1/2 top-1/2 z-10 hidden h-12 w-12 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full border border-white/15 bg-[#03111F] shadow-lg shadow-black/40 lg:flex">
              <ArrowRight size={18} className="text-white/50" />
            </div>

            {/* Mission */}
            <div className="relative overflow-hidden rounded-[28px] border border-white/10 bg-white/5 p-8 backdrop-blur-xl transition duration-500 hover:border-[#086ED0]/30 sm:p-10">
              <span className="absolute left-0 top-0 h-1 w-full bg-gradient-to-r from-[#086ED0] to-transparent" />

              <div className="flex h-12 w-12 items-center justify-center rounded-2xl border border-[#086ED0]/30 bg-[#086ED0]/10 text-[#086ED0]">
                <Compass size={22} />
              </div>

              <p className="mt-6 text-xs font-medium uppercase tracking-[3px] text-[#086ED0]">
                Where We Stand
              </p>

              <h3 className="mt-2 text-xl font-black text-white sm:text-2xl">
                Our Mission
              </h3>

              <p className="mt-5 text-sm leading-7 text-white/60 sm:text-base">
                Our mission is to provide businesses with premium
                creative services that improve brand identity,
                customer engagement, and digital growth through
                innovative design and development.
              </p>
            </div>

            {/* Vision */}
            <div className="relative overflow-hidden rounded-[28px] border border-white/10 bg-white/5 p-8 backdrop-blur-xl transition duration-500 hover:border-[#FF6D00]/30 sm:p-10">
              <span className="absolute left-0 top-0 h-1 w-full bg-gradient-to-r from-[#FF6D00] to-transparent" />

              <div className="flex h-12 w-12 items-center justify-center rounded-2xl border border-[#FF6D00]/30 bg-[#FF6D00]/10 text-[#FF6D00]">
                <Flag size={22} />
              </div>

              <p className="mt-6 text-xs font-medium uppercase tracking-[3px] text-[#FF6D00]">
                Where We&apos;re Headed
              </p>

              <h3 className="mt-2 text-xl font-black text-white sm:text-2xl">
                Our Vision
              </h3>

              <p className="mt-5 text-sm leading-7 text-white/60 sm:text-base">
                We aim to become a trusted creative partner for
                businesses worldwide by delivering modern,
                impactful, and high-quality digital experiences
                that drive long-term success.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ---------------- Services ---------------- */}
      <Services />

      {/* ---------------- Stats ---------------- */}
      <section className="py-12">
        <div className="mx-auto max-w-[1400px] px-6">
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">

            <div className="rounded-[28px] border border-white/10 bg-white/5 p-8 text-center">
              <h3 className="text-3xl font-black text-[#086ED0] sm:text-4xl">
                50+
              </h3>
              <p className="mt-3 text-sm text-white/60 sm:text-base">
                Projects Completed
              </p>
            </div>

            <div className="rounded-[28px] border border-white/10 bg-white/5 p-8 text-center">
              <h3 className="text-3xl font-black text-[#FF6D00] sm:text-4xl">
                100%
              </h3>
              <p className="mt-3 text-sm text-white/60 sm:text-base">
                Client Satisfaction
              </p>
            </div>

            <div className="rounded-[28px] border border-white/10 bg-white/5 p-8 text-center">
              <h3 className="text-3xl font-black text-[#086ED0] sm:text-4xl">
                24/7
              </h3>
              <p className="mt-3 text-sm text-white/60 sm:text-base">
                Support Available
              </p>
            </div>

            <div className="rounded-[28px] border border-white/10 bg-white/5 p-8 text-center">
              <h3 className="text-3xl font-black text-[#FF6D00] sm:text-4xl">
                5★
              </h3>
              <p className="mt-3 text-sm text-white/60 sm:text-base">
                Service Quality
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ---------------- CTA Banner ---------------- */}
      <CtaBanner />
    </main>
  );
}