"use client";

import { Star } from "lucide-react";

export default function Testimonials() {
  const testimonials = [
    {
      name: "Aarav Sharma",
      role: "Business Owner",
      review:
        "Branding Guide delivered an amazing website with premium design and smooth performance. Highly recommended.",
    },

    {
      name: "Priya Mehta",
      role: "Startup Founder",
      review:
        "Their branding and packaging design quality was outstanding. The entire process was smooth and professional.",
    },

    {
      name: "Rahul Verma",
      role: "Creative Director",
      review:
        "Modern UI, fast delivery, and excellent communication throughout the project. Truly premium service.",
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
            Testimonials
          </p>

          <h2 className="mt-5 text-3xl font-black leading-[1.1] text-white sm:text-4xl lg:text-5xl">
            
            What Our
            <span className="text-[#086ED0]"> Clients Say </span>
          </h2>

          <p className="mx-auto mt-6 max-w-[650px] text-sm leading-7 text-white/60 sm:text-base">
            Trusted by businesses and startups for premium
            branding and digital experiences.
          </p>
        </div>

        {/* Cards */}
        <div className="mt-16 grid gap-6 lg:grid-cols-3">
          
          {testimonials.map((item, index) => (
            <div
              key={index}
              className="group relative overflow-hidden rounded-[30px] border border-white/10 bg-white/[0.03] p-8 backdrop-blur-xl transition duration-500 hover:-translate-y-2 hover:border-[#086ED0]/40"
            >
              
              {/* Hover Gradient */}
              <div className="absolute inset-0 bg-gradient-to-br from-[#086ED0]/10 to-[#FF6D00]/5 opacity-0 transition duration-500 group-hover:opacity-100" />

              {/* Stars */}
              <div className="relative flex items-center gap-1 text-[#FF6D00]">
                
                <Star size={18} fill="currentColor" />
                <Star size={18} fill="currentColor" />
                <Star size={18} fill="currentColor" />
                <Star size={18} fill="currentColor" />
                <Star size={18} fill="currentColor" />
              </div>

              {/* Review */}
              <p className="relative mt-6 text-sm leading-7 text-white/60 sm:text-base">
                “{item.review}”
              </p>

              {/* User */}
              <div className="relative mt-8 flex items-center gap-4">
                
                {/* Avatar */}
                <div className="flex h-14 w-14 items-center justify-center rounded-full bg-gradient-to-br from-[#086ED0] to-[#FF6D00] text-lg font-black text-white">
                  {item.name.charAt(0)}
                </div>

                <div>
                  <h3 className="text-lg font-black text-white">
                    {item.name}
                  </h3>

                  <p className="text-sm text-white/50">
                    {item.role}
                  </p>
                </div>
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