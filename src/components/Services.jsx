"use client";

import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

export default function Services() {
  const services = [
    {
      title: "Branding Design",
      desc: "Premium brand identity solutions designed to build trust and recognition.",
      color: "from-[#086ED0]/20 to-[#086ED0]/5",
      image: "/servicesbg-img/branding.png",
    },
    {
      title: "Logo Design",
      desc: "Modern and memorable logo designs crafted for growing businesses.",
      color: "from-[#FF6D00]/20 to-[#FF6D00]/5",
      image: "/servicesbg-img/logo.png",
    },
    {
      title: "Website Development",
      desc: "Fast, responsive, and scalable websites built for modern brands.",
      color: "from-[#086ED0]/20 to-[#FF6D00]/10",
      image: "/servicesbg-img/website.png",
    },
    {
      title: "Video Editing",
      desc: "High-quality editing solutions for social media and promotional content.",
      color: "from-[#FF6D00]/20 to-[#086ED0]/10",
      image: "/servicesbg-img/videoediting.png",
    },
    {
      title: "Packaging Design",
      desc: "Creative packaging experiences that improve product presentation.",
      color: "from-[#086ED0]/20 to-[#086ED0]/5",
      image: "/servicesbg-img/packaging.png",
    },
    {
      title: "Social Media Design",
      desc: "Engaging creatives designed to improve visibility and engagement.",
      color: "from-[#FF6D00]/20 to-[#FF6D00]/5",
      image: "/servicesbg-img/social.png",
    },
  ];

  return (
    <section className="relative overflow-hidden bg-[#03111F] py-12">

      {/* Glow Effects */}
      <div className="absolute left-[-100px] top-0 h-[300px] w-[300px] rounded-full bg-[#086ED0]/10 blur-3xl" />

      <div className="absolute bottom-0 right-[-100px] h-[300px] w-[300px] rounded-full bg-[#FF6D00]/10 blur-3xl" />

      <div className="relative mx-auto max-w-[1400px] px-6">

        {/* Heading */}
        <div className="text-center">

          <p className="text-xs font-medium uppercase tracking-[5px] text-[#FF6D00] sm:text-sm">
            Our Services
          </p>

          <h2 className="mt-5 text-3xl font-black text-white sm:text-4xl lg:text-5xl">
            Creative Solutions For
            <span className="text-[#086ED0]"> Modern Brands </span>
          </h2>

          <p className="mx-auto mt-6 max-w-[700px] text-sm leading-7 text-white/60 sm:text-base">
            We help businesses grow through premium branding,
            website development, and modern creative experiences.
          </p>
        </div>

        {/* Services Grid */}
<div className="no-scrollbar mt-16 flex gap-6 overflow-x-auto pb-4 snap-x snap-mandatory md:grid md:grid-cols-2 lg:grid-cols-3 md:overflow-visible">
          {services.map((service, index) => (

            <Link
              href="/services"
              key={index}
              className="group relative min-w-[300px] snap-center overflow-hidden rounded-[32px] border border-white/10 bg-white/[0.03] p-8 backdrop-blur-xl transition duration-500 hover:-translate-y-3 hover:border-[#086ED0]/40 md:min-w-0"
            >

              {/* Background Image */}
<div
  className="absolute inset-0 bg-cover bg-center bg-no-repeat transition-all duration-700 ease-out group-hover:scale-110"
  style={{
    backgroundImage: `url(${service.image})`,
    opacity: 0.45,
  }}
/>

              {/* Premium Overlay */}
<div className="absolute inset-0 bg-gradient-to-b from-[#03111F]/25 via-[#03111F]/45 to-[#03111F]/75" />

              {/* Hover Gradient */}
              <div
                className={`absolute inset-0 bg-gradient-to-br ${service.color} opacity-0 transition duration-500 group-hover:opacity-100`}
              />

              {/* Arrow */}
              <div className="relative flex justify-end">
                <div className="flex h-12 w-12 items-center justify-center rounded-full border border-white/10 bg-white/5 text-white transition duration-300 group-hover:bg-[#FF6D00]">
                  <ArrowUpRight size={18} />
                </div>
              </div>

              {/* Content */}
                <div className="relative mt-16 text-center">
                <h3 className="text-xl font-black text-white md:text-2xl">
                  {service.title}
                </h3>

               <p className="mx-auto mt-5 max-w-[260px] text-sm leading-7 text-white/60 sm:text-base">
  {service.desc}
</p>

              </div>

              {/* Bottom Blur */}
              <div className="absolute bottom-[-60px] right-[-60px] h-[140px] w-[140px] rounded-full bg-white/5 blur-3xl transition duration-500 group-hover:bg-[#086ED0]/20" />

            </Link>

          ))}

        </div>

      </div>
    </section>
  );
}