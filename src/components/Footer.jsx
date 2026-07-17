"use client";

import Link from "next/link";
import Image from "next/image";

import {
  FiInstagram,
  FiLinkedin,
  FiFacebook,
  FiMail,
  FiPhone,
  FiMapPin,
} from "react-icons/fi";

export default function Footer() {
  return (
    <footer className="relative overflow-hidden border-t border-white/10 bg-[#07111F]">
      
      {/* Glow Effect */}
      <div className="absolute left-1/2 top-0 h-[300px] w-[300px] -translate-x-1/2 rounded-full bg-blue-500/10 blur-3xl" />

      <div className="relative mx-auto max-w-[1400px] px-6 py-8">
        
        {/* Top Section */}
        <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-4">
          
          {/* Brand */}
          <div>
           <Link href="/" className="inline-block">
  <Image
    src="/logo/235.png"
    alt="Branding Guide Logo"
    width={280}
    height={90}
className="h-auto w-[130px] md:w-[150px] lg:w-[170px] object-contain"
    priority
  />
</Link>

            <p className="mt-5 text-sm leading-7 text-white/60">
              Modern websites crafted with premium UI, fast performance,
              responsive layouts, and scalable web solutions.
            </p>

            {/* Social Icons */}
            <div className="mt-6 flex items-center gap-4">
              
              {/* LinkedIn */}
              <Link
                href="https://www.linkedin.com/in/kabir-jangid-55b51b400/"
                target="_blank"
                className="group flex h-11 w-11 items-center justify-center rounded-full border border-white/10 bg-white/5 text-white/70 transition-all duration-300 hover:border-blue-500 hover:bg-blue-500 hover:text-white"
              >
                <FiLinkedin
                  size={20}
                  className="transition-all duration-300 group-hover:scale-110"
                />
              </Link>

              {/* Instagram */}
              <Link
                href="https://www.instagram.com/branding_guide_/"
                target="_blank"
                className="group flex h-11 w-11 items-center justify-center rounded-full border border-white/10 bg-white/5 text-white/70 transition-all duration-300 hover:border-pink-500 hover:bg-pink-500 hover:text-white"
              >
                <FiInstagram
                  size={20}
                  className="transition-all duration-300 group-hover:scale-110"
                />
              </Link>

              {/* Facebook */}
              <Link
                href="https://www.facebook.com/profile.php?id=61579180005571"
                target="_blank"
                className="group flex h-11 w-11 items-center justify-center rounded-full border border-white/10 bg-white/5 text-white/70 transition-all duration-300 hover:border-blue-600 hover:bg-blue-600 hover:text-white"
              >
                <FiFacebook
                  size={20}
                  className="transition-all duration-300 group-hover:scale-110"
                />
              </Link>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold text-white">
              Quick Links
            </h3>

            <div className="mt-6 flex flex-col gap-4">
              
              <Link
                href="/"
                className="text-sm text-white/60 transition hover:text-white"
              >
                Home
              </Link>

              <Link
                href="/about"
                className="text-sm text-white/60 transition hover:text-white"
              >
                About
              </Link>

              <Link
                href="/services"
                className="text-sm text-white/60 transition hover:text-white"
              >
                Services
              </Link>

              <Link
                href="/portfolio"
                className="text-sm text-white/60 transition hover:text-white"
              >
                Portfolio
              </Link>

              <Link
                href="/contact"
                className="text-sm text-white/60 transition hover:text-white"
              >
                Contact
              </Link>
            </div>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-lg font-semibold text-white">
              Services
            </h3>

            <div className="mt-6 flex flex-col gap-4">
              
              <Link
                href="/services/branding-design"
                className="text-sm text-white/60 transition hover:text-white"
              >
                Branding Design
              </Link>

              <Link
                href="/services/logo-design"
                className="text-sm text-white/60 transition hover:text-white"
              >
                Logo Design
              </Link>

              <Link
                href="/services/website-development"
                className="text-sm text-white/60 transition hover:text-white"
              >
                Website Development
              </Link>

              <Link
                href="/services/video-editing"
                className="text-sm text-white/60 transition hover:text-white"
              >
                Video Editing
              </Link>

              <Link
                href="/services/packaging-design"
                className="text-sm text-white/60 transition hover:text-white"
              >
                Packaging Design
              </Link>

              <Link
                href="/services/social-media-design"
                className="text-sm text-white/60 transition hover:text-white"
              >
                Social Media Design
              </Link>
            </div>
          </div>

          {/* Contact Section */}
          <div>
            <h3 className="text-lg font-semibold text-white">
              Contact Section
            </h3>

            <div className="mt-6 space-y-5">
              
              {/* Email */}
              <div className="flex items-start gap-4">
                
                <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-[#086ED0]/20 text-[#086ED0]">
                  <FiMail size={18} />
                </div>

                <div>
                  <p className="text-xs uppercase tracking-[2px] text-white/40">
                    Email
                  </p>

                  <a
  href="mailto:sales@brandingguide.in"
  className="mt-1 block text-sm font-medium text-white transition hover:text-[#086ED0]"
>
  sales@brandingguide.in
</a>
                </div>
              </div>

              {/* Phone */}
              <div className="flex items-start gap-4">
                
                <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-[#FF6D00]/20 text-[#FF6D00]">
                  <FiPhone size={18} />
                </div>

                <div>
                  <p className="text-xs uppercase tracking-[2px] text-white/40">
                    Phone
                  </p>

                  <a
  href="tel:+919876543210"
  className="mt-1 block text-sm font-medium text-white transition hover:text-[#FF6D00]"
>
  +91 8233949919
</a>
                </div>
              </div>

              {/* Location */}
              <div className="flex items-start gap-4">
                
                <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-white/10 text-white">
                  <FiMapPin size={18} />
                </div>

                <div>
                  <p className="text-xs uppercase tracking-[2px] text-white/40">
                    Location
                  </p>

                  <a
  href="https://maps.google.com/?q=Ajmer, Rajasthan"
  target="_blank"
  rel="noopener noreferrer"
  className="mt-1 block text-sm font-medium text-white transition hover:text-[#3B82F6]"
>
  Ajmer, Rajasthan
</a>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom */}
        <div className="mt-16 flex flex-col items-center justify-between gap-5 border-t border-white/10 pt-7 md:flex-row">
          
          <p className="text-sm text-white/50">
            © 2026 Branding Guide. All rights reserved.
          </p>

<div className="flex w-full justify-center gap-6 md:w-auto">            
            <Link
              href="/privacy-policy"
className="text-center text-sm text-white/50 transition hover:text-white"            >
              Privacy Policy
            </Link>

            <Link
              href="/terms"
className="text-center text-sm text-white/50 transition hover:text-white"            >
              Terms of Service
            </Link>

            <Link
              href="/refund-policy"
className="text-center text-sm text-white/50 transition hover:text-white"            >
              Refund Policy
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}