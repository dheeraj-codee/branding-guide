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
      icon: <MonitorSmartphone size={24} />,
      title: "Responsive Design",
      desc: "Perfectly optimized websites for all devices.",
    },

    {
      icon: <Rocket size={24} />,
      title: "Fast Performance",
      desc: "High-speed websites with smooth user experience.",
    },

    {
      icon: <PenTool size={24} />,
      title: "Modern UI Design",
      desc: "Premium interfaces crafted for modern brands.",
    },

    {
      icon: <LayoutDashboard size={24} />,
      title: "Creative Branding",
      desc: "Unique branding solutions that build trust.",
    },

    {
      icon: <ShieldCheck size={24} />,
      title: "Reliable Support",
      desc: "Continuous support for smooth project delivery.",
    },

    {
      icon: <Headphones size={24} />,
      title: "Client Focused",
      desc: "Focused on long-term client relationships.",
    },
  ];

  return (
    <section className="relative overflow-hidden bg-[#03111F] py-24">
      
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
          {features.map((feature, index) => (
            <div
              key={index}
className="group relative min-w-[280px] snap-center overflow-hidden rounded-[28px] border border-white/10 bg-white/[0.03] p-6 backdrop-blur-xl transition duration-500 hover:-translate-y-2 hover:border-[#086ED0]/40 lg:min-w-0"            >
              
              {/* Hover Gradient */}
              <div className="absolute inset-0 bg-gradient-to-br from-[#086ED0]/10 to-[#FF6D00]/5 opacity-0 transition duration-500 group-hover:opacity-100" />

              {/* Icon */}
              <div className="relative flex h-12 w-12 items-center justify-center rounded-2xl border border-white/10 bg-white/5 text-[#FF6D00] transition duration-300 group-hover:bg-[#FF6D00] group-hover:text-white">
                {feature.icon}
              </div>

              {/* Content */}
              <div className="relative mt-6">
                
                <h3 className="text-lg font-black text-white">
                  {feature.title}
                </h3>

                <p className="mt-3 text-sm leading-7 text-white/60">
                  {feature.desc}
                </p>
              </div>

              {/* Glow */}
              <div className="absolute bottom-[-50px] right-[-50px] h-[100px] w-[100px] rounded-full bg-[#086ED0]/0 blur-3xl transition duration-500 group-hover:bg-[#086ED0]/20" />
            </div>
          ))}

        </div>
      </div>
    </section>
  );
}