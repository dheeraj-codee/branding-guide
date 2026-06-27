"use client";

import Image from "next/image";

const logos = [
  "/clients/client1.png",
  "/clients/client2.png",
  "/clients/client3.png",
  "/clients/client4.png",
  "/clients/client5.png",
  "/clients/client6.png",
  "/clients/client7.png",
  "/clients/client8.png",
  "/clients/client9.png",
  "/clients/client10.png",
];

export default function TrustedBrands() {
  return (
    <section className="relative overflow-hidden bg-[#03111F] py-24">

      {/* Glow */}
      <div className="absolute left-[-100px] top-0 h-[300px] w-[300px] rounded-full bg-[#086ED0]/10 blur-3xl" />

      <div className="absolute right-[-100px] bottom-0 h-[300px] w-[300px] rounded-full bg-[#FF6D00]/10 blur-3xl" />

      <div className="relative mx-auto max-w-[1400px] px-6">

        {/* Heading */}
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

        {/* Slider */}
        <div className="mt-16 overflow-hidden">

          <div className="flex animate-logo-slider gap-10">

            {[...logos, ...logos].map((logo, index) => (
              <div
                key={index}
                className="group flex h-[120px] min-w-[220px] items-center justify-center rounded-[32px] border border-white/10 bg-white/[0.03] backdrop-blur-xl"
              >
                <Image
                  src={logo}
                  alt="Client Logo"
                  width={160}
                  height={80}
                  className="h-16 w-auto object-contain grayscale opacity-70 transition duration-300 group-hover:grayscale-0 group-hover:opacity-100"
                />
              </div>
            ))}

          </div>

        </div>

      </div>
    </section>
  );
}