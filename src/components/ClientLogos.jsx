"use client";

import Image from "next/image";

const logos = [
  "/images/clients/LOGO-01.jpg",
  "/images/clients/LOGO-02.jpg",
  "/images/clients/LOGO-03.jpg",
  "/images/clients/LOGO-04.jpg",
  "/images/clients/LOGO-05.jpg",
  "/images/clients/LOGO-06.jpg",
  "/images/clients/LOGO-07.jpg",
  "/images/clients/LOGO-08.jpg",
  "/images/clients/LOGO-09.jpg",
  "/images/clients/LOGO-10.jpg",
];

export default function TrustedBrands() {
  return (
    <section className="relative overflow-hidden bg-[#03111F] py-12">
      <div className="absolute left-[-100px] top-0 h-[300px] w-[300px] rounded-full bg-[#086ED0]/10 blur-3xl" />
      <div className="absolute right-[-100px] bottom-0 h-[300px] w-[300px] rounded-full bg-[#FF6D00]/10 blur-3xl" />

      <div className="relative mx-auto max-w-[1400px] px-6">
        <div className="text-center">
          <p className="text-xs font-medium uppercase tracking-[5px] text-[#FF6D00] sm:text-sm">
            Trusted Clients
          </p>
          <h2 className="mt-5 text-3xl font-black text-white sm:text-4xl lg:text-5xl">
            Brands We Have
            <span className="text-[#086ED0]"> Worked With </span>
          </h2>
          <p className="mx-auto mt-6 max-w-[700px] text-sm leading-7 text-white/60 sm:text-base">
            Trusted by startups, local businesses and growing brands.
          </p>
        </div>

        <div className="mt-16 overflow-hidden">
          <div className="flex animate-logo-slider gap-10">
            {[...logos, ...logos].map((logo, index) => (
              <div
                key={index}
                className="relative h-[140px] min-w-[240px] overflow-hidden rounded-[32px]"
              >
                <Image
                  src={logo}
                  alt="Client Logo"
                  fill
                  className="object-cover"
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}