"use client";

import { useState } from "react";
import Link from "next/link";
import { ArrowRight, Check, ChevronDown } from "lucide-react";
import { servicesData } from "./services-data";
import ServiceBanner from "./ServiceBanner";
import Process from "@/components/Process";
// ^ adjust this import path if your Process component lives somewhere else

export default function ServiceDetailClient({ slug }) {
  const service = servicesData[slug];
  const [openFaq, setOpenFaq] = useState(0);

  if (!service) {
    return (
      <div className="flex min-h-screen flex-col items-center justify-center gap-6 bg-[#03111F] px-6 text-center text-white">
        <p className="text-white/60">This service page doesn&apos;t exist.</p>
        <Link
          href="/services"
          className="inline-flex items-center gap-2 rounded-full bg-[#FF6D00] px-6 py-3 text-sm font-semibold text-white transition hover:scale-105"
        >
          View All Services
        </Link>
      </div>
    );
  }

  const otherServices = Object.entries(servicesData).filter(
    ([key]) => key !== slug
  );

  return (
    <main className="relative overflow-hidden bg-[#03111F]">
      {/* ---------------- HERO with banner ---------------- */}
      <section className="relative overflow-hidden pt-12 pb-12 sm:pt-16 sm:pb-16">
        <div className="absolute left-[-120px] top-0 h-[320px] w-[320px] rounded-full bg-[#086ED0]/10 blur-3xl" />
        <div className="absolute bottom-0 right-[-120px] h-[320px] w-[320px] rounded-full bg-[#FF6D00]/10 blur-3xl" />
        <div className="absolute inset-0 opacity-[0.03]">
          <div className="h-full w-full bg-[linear-gradient(to_right,#ffffff_1px,transparent_1px),linear-gradient(to_bottom,#ffffff_1px,transparent_1px)] bg-[size:80px_80px]" />
        </div>

        <div className="relative mx-auto max-w-[1400px] px-6">
          {/* Breadcrumb */}
          <div className="flex flex-wrap items-center gap-2 text-xs text-white/40">
            <Link href="/" className="transition hover:text-white/70">
              Home
            </Link>
            <span>/</span>
            <Link href="/services" className="transition hover:text-white/70">
              Services
            </Link>
            <span>/</span>
            <span className="text-white/70">{service.title}</span>
          </div>

          <div className="mt-8 grid items-center gap-12 lg:grid-cols-2 lg:gap-8">
            {/* Left: copy */}
            <div className="text-center lg:text-left">
              <p className="text-xs uppercase tracking-[5px] text-[#FF6D00]">
                Our Service
              </p>

              <h1 className="mx-auto mt-4 max-w-[560px] text-4xl font-black leading-[1.1] text-white sm:text-5xl lg:mx-0 lg:text-6xl">
                {service.title}
              </h1>

              <p className="mx-auto mt-6 max-w-[500px] text-sm leading-7 text-white/60 sm:text-base lg:mx-0">
                {service.tagline}
              </p>

              <div className="mt-8 flex flex-col items-center gap-3 sm:flex-row sm:justify-center lg:justify-start">
                <Link
                  href="/contact"
                  className="inline-flex w-full items-center justify-center gap-3 rounded-full bg-[#FF6D00] px-8 py-4 text-sm font-semibold text-white transition duration-300 hover:scale-105 hover:bg-[#e65f00] sm:w-auto"
                >
                  Start Project
                  <ArrowRight size={18} />
                </Link>
                <Link
                  href="/portfolio"
                  className="inline-flex w-full items-center justify-center gap-2 rounded-full border border-white/15 px-8 py-4 text-sm font-semibold text-white/80 transition duration-300 hover:border-white/30 hover:text-white sm:w-auto"
                >
                  See Our Work
                </Link>
              </div>
            </div>

            {/* Right: signature banner */}
            <ServiceBanner type={service.banner} />
          </div>
        </div>
      </section>

      {/* ---------------- WHY IT MATTERS ---------------- */}
      <section className="pt-16 sm:pt-20">
        <div className="mx-auto grid max-w-[1400px] gap-10 px-6 lg:grid-cols-2 lg:items-stretch lg:gap-8">
          {/* Left */}
          <div className="flex flex-col">
            <p className="text-xs uppercase tracking-[5px] text-[#FF6D00]">
              Why It Matters
            </p>

            <h2 className="mt-5 text-3xl font-black leading-[1.1] text-white sm:text-4xl">
              Why Your Business Needs
              <span className="text-[#086ED0]"> {service.title} </span>
            </h2>

            {service.intro.map((para, i) => (
              <p
                key={i}
                className="mt-6 text-sm leading-7 text-white/60 sm:text-base"
              >
                {para}
              </p>
            ))}

            <div className="mt-8 flex flex-1 flex-col justify-end gap-3">
              {service.quickPoints.map((point, i) => (
                <div
                  key={i}
                  className="flex items-center gap-3 rounded-xl border border-white/10 bg-white/[0.03] px-5 py-3.5"
                >
                  <Check className="shrink-0 text-[#FF6D00]" size={16} />
                  <p className="text-sm text-white/70">{point}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Right — feature cards, stretched to match left column height */}
          <div className="flex flex-col justify-between gap-5">
            {service.features.map((feature, i) => {
              const Icon = feature.icon;
              return (
                <div
                  key={i}
                  className="group relative flex-1 overflow-hidden rounded-[28px] border border-white/10 bg-white/[0.03] p-7 backdrop-blur-xl transition duration-500 hover:border-[#086ED0]/40"
                >
                  <div className="absolute inset-0 bg-gradient-to-br from-[#086ED0]/10 to-[#FF6D00]/5 opacity-0 transition duration-500 group-hover:opacity-100" />
                  <div className="relative flex h-full items-center gap-5">
                    <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl border border-white/10 bg-white/5 text-[#FF6D00]">
                      <Icon size={22} />
                    </div>
                    <div>
                      <h3 className="text-lg font-black text-white">
                        {feature.title}
                      </h3>
                      <p className="mt-2 text-sm leading-6 text-white/60">
                        {feature.desc}
                      </p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ---------------- PROCESS (existing shared component) ---------------- */}
      <div className="pt-16 sm:pt-20">
        <Process />
      </div>

      {/* ---------------- WHAT'S INCLUDED ---------------- */}
      <section className="pt-12 sm:pt-20">
        <div className="mx-auto max-w-[1400px] px-6">
          <div className="text-center">
            <p className="text-xs uppercase tracking-[5px] text-[#FF6D00]">
              What&apos;s Included
            </p>
            <h2 className="mx-auto mt-5 max-w-[600px] text-3xl font-black leading-[1.1] text-white sm:text-4xl">
              Everything You Get With This Service
            </h2>
          </div>

          <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {service.included.map((item, i) => (
              <div
                key={i}
                className="group relative overflow-hidden rounded-[24px] border border-white/10 bg-white/[0.03] p-6 transition duration-300 hover:border-[#086ED0]/40 hover:bg-white/[0.05]"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-[#086ED0]/10 to-[#FF6D00]/5 opacity-0 transition duration-500 group-hover:opacity-100" />
                <div className="relative flex items-start gap-4">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-[#086ED0]/15 text-[#086ED0]">
                    <Check size={16} />
                  </div>
                  <p className="pt-1.5 text-sm leading-6 text-white/75 sm:text-[15px]">
                    {item}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ---------------- TRUST STATS ---------------- */}
      <section className="pt-16 sm:pt-20">
        <div className="mx-auto max-w-[1400px] px-6">
          <div className="relative overflow-hidden rounded-[40px] border border-white/10 bg-gradient-to-br from-white/[0.05] to-white/[0.02] p-8 sm:p-12">
            <div className="absolute -left-10 -top-10 h-56 w-56 rounded-full bg-[#086ED0]/10 blur-3xl" />
            <div className="absolute -bottom-10 -right-10 h-56 w-56 rounded-full bg-[#FF6D00]/10 blur-3xl" />

            <div className="relative text-center">
              <p className="text-xs uppercase tracking-[5px] text-[#FF6D00]">
                Trusted By Clients
              </p>
              <h2 className="mx-auto mt-5 max-w-[500px] text-3xl font-black text-white sm:text-4xl">
                Helping Brands Grow Online
              </h2>
            </div>

            <div className="relative mt-12 grid grid-cols-1 gap-5 sm:grid-cols-3">
              {[
                { value: "50+", label: "Projects Completed", color: "#086ED0" },
                { value: "100%", label: "Client Satisfaction", color: "#FF6D00" },
                { value: "24/7", label: "Client Support", color: "#ffffff" },
              ].map((stat, i) => (
                <div
                  key={i}
                  className="rounded-[24px] border border-white/10 bg-white/[0.03] px-6 py-8 text-center"
                >
                  <h3
                    className="text-4xl font-black sm:text-5xl"
                    style={{ color: stat.color }}
                  >
                    {stat.value}
                  </h3>
                  <p className="mt-3 text-sm text-white/60">{stat.label}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ---------------- FAQ ---------------- */}
      <section className="pt-16 sm:pt-20">
        <div className="mx-auto max-w-[1000px] px-6">
          <div className="text-center">
            <p className="text-xs uppercase tracking-[5px] text-[#FF6D00]">
              FAQ
            </p>
            <h2 className="mt-5 text-3xl font-black text-white sm:text-4xl">
              Frequently Asked Questions
            </h2>
          </div>

          <div className="mt-12 space-y-4">
            {service.faqs.map((faq, i) => {
              const isOpen = openFaq === i;
              return (
                <div
                  key={i}
                  className="overflow-hidden rounded-[24px] border border-white/10 bg-white/[0.03] transition duration-300"
                >
                  <button
                    onClick={() => setOpenFaq(isOpen ? -1 : i)}
                    className="flex w-full items-center justify-between gap-4 p-6 text-left"
                  >
                    <h3 className="text-base font-bold text-white sm:text-lg">
                      {faq.q}
                    </h3>
                    <ChevronDown
                      size={20}
                      className={`shrink-0 text-[#FF6D00] transition-transform duration-300 ${
                        isOpen ? "rotate-180" : ""
                      }`}
                    />
                  </button>

                  <div
                    className={`grid transition-all duration-300 ease-in-out ${
                      isOpen
                        ? "grid-rows-[1fr] opacity-100"
                        : "grid-rows-[0fr] opacity-0"
                    }`}
                  >
                    <div className="overflow-hidden">
                      <p className="px-6 pb-6 text-sm leading-7 text-white/60">
                        {faq.a}
                      </p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ---------------- RELATED SERVICES ---------------- */}
      <section className="pt-16 sm:pt-20">
        <div className="mx-auto max-w-[1400px] px-6">
          <p className="text-center text-xs uppercase tracking-[5px] text-[#FF6D00]">
            Explore More
          </p>
          <h2 className="mx-auto mt-5 max-w-[600px] text-center text-3xl font-black text-white sm:text-4xl">
            Other Ways We Can Help
          </h2>

          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {otherServices.slice(0, 3).map(([key, s]) => (
              <Link
                key={key}
                href={`/services/${key}`}
                className="group relative overflow-hidden rounded-[28px] border border-white/10 bg-white/[0.03] p-8 transition duration-500 hover:-translate-y-1 hover:border-[#086ED0]/40"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-[#086ED0]/10 to-[#FF6D00]/5 opacity-0 transition duration-500 group-hover:opacity-100" />

                <div className="relative flex h-14 w-14 items-center justify-center rounded-2xl border border-white/10 bg-white/5 text-[#FF6D00]">
                  <ArrowRight size={22} className="rotate-[-45deg]" />
                </div>

                <h3 className="relative mt-6 text-xl font-black text-white">
                  {s.title}
                </h3>
                <p className="relative mt-2 text-sm leading-6 text-white/60">
                  {s.tagline}
                </p>
                <span className="relative mt-5 inline-flex items-center gap-2 text-sm font-semibold text-[#FF6D00]">
                  Learn more
                  <ArrowRight
                    size={14}
                    className="transition group-hover:translate-x-1"
                  />
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ---------------- CTA BANNER (final section) ---------------- */}
      <section className="py-16 sm:py-20">
        <div className="mx-auto max-w-[1400px] px-6">
          <div className="relative overflow-hidden rounded-[40px] bg-[#062347]">
            {/* layered glow + grid texture instead of a flat blue block */}
            <div className="absolute inset-0 opacity-[0.06]">
              <div className="h-full w-full bg-[linear-gradient(to_right,#ffffff_1px,transparent_1px),linear-gradient(to_bottom,#ffffff_1px,transparent_1px)] bg-[size:56px_56px]" />
            </div>
            <div className="absolute -right-20 -top-20 h-72 w-72 rounded-full bg-[#FF6D00]/25 blur-3xl" />
            <div className="absolute -left-20 -bottom-20 h-72 w-72 rounded-full bg-[#086ED0]/40 blur-3xl" />

            <div className="relative flex flex-col items-center gap-8 px-8 py-14 text-center sm:px-16 sm:py-20 lg:flex-row lg:justify-between lg:text-left">
              <div>
                <p className="text-xs uppercase tracking-[5px] text-[#FF6D00]">
                  Let&apos;s Talk
                </p>
                <h2 className="mx-auto mt-4 max-w-[500px] text-3xl font-black text-white sm:text-4xl lg:mx-0">
                  Ready to Start Your {service.title} Project?
                </h2>
                <p className="mx-auto mt-4 max-w-[440px] text-sm text-white/60 sm:text-base lg:mx-0">
                  Tell us about your business and we&apos;ll get back to you within one business day.
                </p>
              </div>

              <div className="flex shrink-0 flex-col items-center gap-3 sm:flex-row">
                <Link
                  href="/contact"
                  className="inline-flex items-center gap-3 rounded-full bg-[#FF6D00] px-8 py-4 text-sm font-semibold text-white transition duration-300 hover:scale-105 hover:bg-[#e65f00]"
                >
                  Get a Free Quote
                  <ArrowRight size={18} />
                </Link>
                <a
                  href="tel:+91XXXXXXXXXX"
                  className="inline-flex items-center gap-2 rounded-full border border-white/20 px-8 py-4 text-sm font-semibold text-white/80 transition duration-300 hover:border-white/40 hover:text-white"
                >
                  Call Us
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}