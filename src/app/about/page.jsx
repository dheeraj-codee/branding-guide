import Image from "next/image";
import { Lightbulb, Target, Handshake, TrendingUp } from "lucide-react";
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
      <section className="relative overflow-hidden py-24">

        <div className="absolute left-[-120px] top-10 h-[300px] w-[300px] rounded-full bg-[#086ED0]/20 blur-3xl" />
        <div className="absolute bottom-0 right-[-100px] h-[300px] w-[300px] rounded-full bg-[#FF6D00]/20 blur-3xl" />

        <div className="relative mx-auto max-w-[1400px] px-6 text-center">

          <p className="text-xs font-medium uppercase tracking-[5px] text-[#FF6D00] sm:text-sm">
            About Branding Guide
          </p>

          <h1 className="mx-auto mt-6 max-w-[900px] text-4xl font-black leading-[1.1] text-white sm:text-5xl lg:text-6xl">
            We Build Powerful Brands &
            <span className="text-[#086ED0]"> Modern Digital </span>
            Experiences
          </h1>

          <p className="mx-auto mt-8 max-w-[750px] text-sm leading-7 text-white/60 sm:text-base">
            Branding Guide is a creative digital agency focused on
            helping businesses grow through premium branding,
            website development, packaging design, video editing,
            and modern visual experiences.
          </p>
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
                src="/logo/branding_guide-removebg-preview.pg"
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
      <section className="py-12">
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

          <div className="mt-16 grid gap-8 lg:grid-cols-2">

            <div className="rounded-[32px] border border-white/10 bg-white/5 p-8 backdrop-blur-xl sm:p-10">
              <h3 className="text-xl font-black text-white sm:text-2xl">
                Our Mission
              </h3>

              <p className="mt-5 text-sm leading-7 text-white/60 sm:text-base">
                Our mission is to provide businesses with premium
                creative services that improve brand identity,
                customer engagement, and digital growth through
                innovative design and development.
              </p>
            </div>

            <div className="rounded-[32px] border border-white/10 bg-white/5 p-8 backdrop-blur-xl sm:p-10">
              <h3 className="text-xl font-black text-white sm:text-2xl">
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