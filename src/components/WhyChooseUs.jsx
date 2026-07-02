"use client";

import {
  MonitorSmartphone,
  Rocket,
  ShieldCheck,
  PenTool,
  LayoutDashboard,
  Headphones,
} from "lucide-react";

export default function WhyChooseUs() {
  const features = [
    {
      icon: MonitorSmartphone,
      title: "Responsive Design",
      desc: "Perfectly optimized websites for all devices.",
      color: "#086ED0",
    },
    {
      icon: Rocket,
      title: "Fast Performance",
      desc: "High-speed websites with smooth user experience.",
      color: "#FF6D00",
    },
    {
      icon: PenTool,
      title: "Modern UI Design",
      desc: "Premium interfaces crafted for modern brands.",
      color: "#086ED0",
    },
    {
      icon: LayoutDashboard,
      title: "Creative Branding",
      desc: "Unique branding solutions that build trust.",
      color: "#FF6D00",
    },
    {
      icon: ShieldCheck,
      title: "Reliable Support",
      desc: "Continuous support for smooth project delivery.",
      color: "#086ED0",
    },
    {
      icon: Headphones,
      title: "Client Focused",
      desc: "Focused on long-term client relationships.",
      color: "#FF6D00",
    },
  ];

  return (
    <section className="relative overflow-hidden bg-[#03111F] py-12">

      {/* Glow */}
      <div className="absolute left-[-100px] top-0 h-[240px] w-[240px] rounded-full bg-[#086ED0]/10 blur-3xl" />
      <div className="absolute bottom-0 right-[-100px] h-[240px] w-[240px] rounded-full bg-[#FF6D00]/10 blur-3xl" />

      <div className="relative mx-auto max-w-[1400px] px-6">

        {/* Heading */}
        <div className="text-center">
          <p className="text-xs font-medium uppercase tracking-[5px] text-[#FF6D00] sm:text-sm">
            Why Choose Us
          </p>

          <h2 className="mt-5 text-3xl font-black leading-[1.1] text-white sm:text-4xl lg:text-5xl">
            Creative Expertise
            <span className="text-[#086ED0]"> Premium Results </span>
          </h2>

          <p className="mx-auto mt-6 max-w-[650px] text-sm leading-7 text-white/60 sm:text-base">
            We combine creativity and modern technology to deliver
            premium digital experiences.
          </p>
        </div>

        {/* Cards */}
        <div className="no-scrollbar mt-16 flex gap-6 overflow-x-auto pb-4 snap-x snap-mandatory lg:grid lg:grid-cols-3 lg:overflow-visible">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <div
                key={index}
                className="group relative flex min-w-[280px] snap-center flex-col items-center overflow-hidden rounded-[28px] border border-white/10 bg-white/[0.03] p-8 text-center backdrop-blur-xl transition-all duration-500 hover:-translate-y-2 hover:border-white/20 lg:min-w-0"
              >

                {/* Hover Gradient */}
                <div className="absolute inset-0 bg-gradient-to-br from-[#086ED0]/10 to-[#FF6D00]/5 opacity-0 transition duration-500 group-hover:opacity-100" />

                {/* Icon */}
                <div
                  className="relative flex h-16 w-16 items-center justify-center rounded-2xl border border-white/10 bg-white/5 transition-all duration-500 group-hover:scale-110"
                >
                  <div
                    className="absolute inset-0 rounded-2xl opacity-0 blur-xl transition-opacity duration-500 group-hover:opacity-40"
                    style={{ backgroundColor: feature.color }}
                  />
                  <Icon size={26} className="relative" style={{ color: feature.color }} />
                </div>

                {/* Content */}
                <div className="relative mt-6">
                  <h3 className="text-lg font-black text-white">
                    {feature.title}
                  </h3>

                  <p className="mx-auto mt-3 max-w-[240px] text-sm leading-7 text-white/60">
                    {feature.desc}
                  </p>
                </div>

                {/* Bottom accent line */}
                <div
                  className="relative mt-6 h-[2px] w-8 rounded-full transition-all duration-500 group-hover:w-14"
                  style={{ backgroundColor: feature.color }}
                />

                {/* Glow */}
                <div
                  className="absolute bottom-[-50px] left-1/2 h-[120px] w-[120px] -translate-x-1/2 rounded-full opacity-0 blur-3xl transition duration-500 group-hover:opacity-20"
                  style={{ backgroundColor: feature.color }}
                />
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}