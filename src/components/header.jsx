"use client";

import { useState } from "react";
import Link from "next/link";
import { Menu, X, ChevronDown } from "lucide-react";
import Image from "next/image";

export default function Header() {
  const [mobileMenu, setMobileMenu] = useState(false);
  const [serviceDropdown, setServiceDropdown] = useState(false);

  const services = [
    "Logo Design",
    "Branding Design",
    "Website Development",
    "Video Editing",
    "Packaging Design",
    "Social Media Design",
  ];

  return (
    <header className="sticky top-0 z-50 w-full border-b border-white/10 bg-[#03111F]/90 backdrop-blur-xl">
      
<div className="relative mx-auto flex h-16 max-w-[1400px] items-center justify-between overflow-visible px-4 md:h-20 md:px-6">
  {/* Logo */}
  <Link href="/" className="flex items-center gap-2 md:gap-3">
    <Image
      src="/images/logo/235.png"
      alt="Branding Guide Logo"
      width={280}
      height={280}
      priority
      className="h-28 w-28 object-contain sm:h-32 sm:w-32 md:h-36 md:w-36 lg:h-40 lg:w-40"
    />
  </Link>

        {/* Desktop Menu */}
       <nav className="ml-auto hidden items-center gap-10 lg:flex">
  
  <Link
    href="/"
    className="text-sm font-medium text-white/80 transition hover:text-[#FF6D00]"
  >
    Home
  </Link>

  {/* Services Dropdown */}
  <div
    className="relative"
    onMouseEnter={() => setServiceDropdown(true)}
    onMouseLeave={() => setServiceDropdown(false)}
  >
    <Link
      href="/services"
      className="flex items-center gap-1 text-sm font-medium text-white/80 transition hover:text-[#FF6D00]"
    >
      Services

      <ChevronDown
        size={16}
        className={`transition ${
          serviceDropdown ? "rotate-180" : ""
        }`}
      />
    </Link>

    {/* Dropdown */}
    <div
      className={`absolute right-0 top-12 w-64 overflow-hidden rounded-3xl border border-white/10 bg-[#091827] shadow-2xl transition-all duration-300 ${
        serviceDropdown
          ? "visible translate-y-0 opacity-100"
          : "invisible -translate-y-3 opacity-0"
      }`}
    >
      {services.map((service, index) => (
        <Link
          key={index}
          href={`/services/${service
            .toLowerCase()
            .replace(/\s+/g, "-")}`}
          className="block border-b border-white/5 px-6 py-4 text-sm text-white/70 transition hover:bg-[#086ED0]/10 hover:text-[#FF6D00]"
        >
          {service}
        </Link>
      ))}
    </div>
  </div>

  <Link
    href="/portfolio"
    className="text-sm font-medium text-white/80 transition hover:text-[#FF6D00]"
  >
    Portfolio
  </Link>

  <Link
    href="/about"
    className="text-sm font-medium text-white/80 transition hover:text-[#FF6D00]"
  >
    About
  </Link>

  <Link
    href="/contact"
    className="text-sm font-medium text-white/80 transition hover:text-[#FF6D00]"
  >
    Contact
  </Link>
</nav>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setMobileMenu(!mobileMenu)}
          className="text-white lg:hidden"
        >
          {mobileMenu ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Menu */}
      <div
        className={`overflow-hidden border-t border-white/10 bg-[#03111F] transition-all duration-300 lg:hidden ${
          mobileMenu ? "max-h-[500px]" : "max-h-0"
        }`}
      >
        <div className="flex flex-col px-6 py-5">
          
          <Link
            href="/"
            className="border-b border-white/5 py-4 text-white/80 transition hover:text-[#FF6D00]"
          >
            Home
          </Link>

          <Link
            href="/about"
            className="border-b border-white/5 py-4 text-white/80 transition hover:text-[#FF6D00]"
          >
            About
          </Link>

          {/* Mobile Services */}
          <div className="border-b border-white/5 py-4">
            
            <div className="flex items-center justify-between">
  
  <Link
    href="/services"
    className="text-white/80 transition hover:text-[#FF6D00]"
  >
    Services
  </Link>

  <button
    onClick={() => setServiceDropdown(!serviceDropdown)}
    className="text-white/80"
  >
    <ChevronDown
      size={18}
      className={`transition ${
        serviceDropdown ? "rotate-180" : ""
      }`}
    />
  </button>

</div>

            <div
              className={`overflow-hidden transition-all duration-300 ${
                serviceDropdown ? "max-h-60 pt-3" : "max-h-0"
              }`}
            >
              {services.map((service, index) => (
                <Link
                  key={index}
                  href={`/services/${service
                    .toLowerCase()
                    .replace(/\s+/g, "-")}`}
                  className="block py-2 pl-4 text-sm text-white/60 transition hover:text-[#FF6D00]"
                >
                  {service}
                </Link>
              ))}
            </div>
          </div>

          <Link
            href="/portfolio"
            className="border-b border-white/5 py-4 text-white/80 transition hover:text-[#FF6D00]"
          >
            Portfolio
          </Link>

          <Link
            href="/contact"
            className="py-4 text-white/80 transition hover:text-[#FF6D00]"
          >
            Contact
          </Link>
        </div>
      </div>
    </header>
  );
}