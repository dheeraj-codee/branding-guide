"use client";

import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

import {
  FiInstagram,
  FiLinkedin,
  FiFacebook,
  FiMail,
  FiPhone,
  FiMapPin,
} from "react-icons/fi";

export default function ContactPage() {
  return (
    <main className="overflow-hidden bg-[#03111F] text-white">
      
      {/* Hero Section */}
      <section className="relative overflow-hidden py-18">
        
        <div className="absolute left-[-120px] top-10 h-[300px] w-[300px] rounded-full bg-[#086ED0]/20 blur-3xl" />

        <div className="absolute bottom-0 right-[-100px] h-[300px] w-[300px] rounded-full bg-[#FF6D00]/20 blur-3xl" />

        <div className="relative mx-auto max-w-[1200px] px-6 text-center">
          
          <p className="text-sm uppercase tracking-[6px] text-[#FF6D00]">
            Contact Us
          </p>

          <h1 className="mt-6 text-3xl font-black leading-tight md:text-4xl lg:text-5xl">
            Let’s Build Something
            <span className="text-[#086ED0]"> Amazing </span>
            Together
          </h1>

          <p className="mx-auto mt-6 max-w-[750px] text-lg leading-8 text-white/60">
            Have a project idea or need creative solutions for your
            business? Let’s create something premium together.
          </p>
        </div>
      </section>

      {/* Contact Section */}
      <section className="relative pb-20">
        
        <div className="mx-auto grid max-w-[1200px] gap-8 px-6 lg:grid-cols-2">
          
          {/* Left Side */}
          <div className="relative overflow-hidden rounded-[32px] border border-white/10 bg-white/5 p-8 backdrop-blur-xl">
            
            <div className="absolute right-[-60px] top-[-60px] h-[180px] w-[180px] rounded-full bg-[#086ED0]/20 blur-3xl" />

            <p className="text-sm uppercase tracking-[4px] text-[#FF6D00]">
              Get In Touch
            </p>

            <h2 className="mt-4 text-3xl font-black leading-tight md:text-4xl">
              Let’s Discuss Your
              <span className="text-[#086ED0]"> Project </span>
            </h2>

            <p className="mt-5 text-base leading-8 text-white/60">
              We create premium websites, branding, UI/UX,
              packaging design, and modern digital experiences.
            </p>

            {/* Contact Info */}
            <div className="mt-10 space-y-4">
              
              {/* Email */}
              <div className="group flex items-center gap-4 rounded-2xl border border-white/10 bg-[#086ED0]/10 p-4 transition hover:border-[#086ED0]/40 hover:bg-[#086ED0]/20">
                
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-[#086ED0] text-white">
                  <FiMail size={18} />
                </div>

                <div>
                  <p className="text-xs uppercase tracking-[2px] text-[#086ED0]">
                    Email Address
                  </p>

                  <h3 className="mt-1 text-base font-medium text-white">
                     sales@brandingguide.in
                  </h3>
                </div>
              </div>

              {/* Phone */}
              <div className="group flex items-center gap-4 rounded-2xl border border-white/10 bg-[#FF6D00]/10 p-4 transition hover:border-[#FF6D00]/40 hover:bg-[#FF6D00]/20">
                
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-[#FF6D00] text-white">
                  <FiPhone size={18} />
                </div>

                <div>
                  <p className="text-xs uppercase tracking-[2px] text-[#FF6D00]">
                    Phone Number
                  </p>

                  <h3 className="mt-1 text-base font-medium text-white">
                    +91 98765 43210
                  </h3>
                </div>
              </div>

              {/* Location */}
              <div className="group flex items-center gap-4 rounded-2xl border border-white/10 bg-white/5 p-4 transition hover:border-white/20 hover:bg-white/10">
                
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-white/10 text-white">
                  <FiMapPin size={18} />
                </div>

                <div>
                  <p className="text-xs uppercase tracking-[2px] text-white/50">
                    Location
                  </p>

                  <h3 className="mt-1 text-base font-medium text-white">
                    Ajmer, Rajasthan
                  </h3>
                </div>
              </div>
            </div>

            {/* Social Icons */}
            <div className="mt-10">
              
              <p className="mb-4 text-xs uppercase tracking-[3px] text-white/50">
                Follow Us
              </p>

              <div className="flex items-center gap-4">
                
                <Link
                  href="https://linkedin.com/"
                  target="_blank"
                  className="group flex h-11 w-11 items-center justify-center rounded-full border border-white/10 bg-white/5 text-white/70 transition-all duration-300 hover:border-[#086ED0] hover:bg-[#086ED0] hover:text-white"
                >
                  <FiLinkedin
                    size={18}
                    className="transition-all duration-300 group-hover:scale-110"
                  />
                </Link>

                <Link
                  href="https://www.instagram.com/branding_guide_/"
                  target="_blank"
                  className="group flex h-11 w-11 items-center justify-center rounded-full border border-white/10 bg-white/5 text-white/70 transition-all duration-300 hover:border-pink-500 hover:bg-pink-500 hover:text-white"
                >
                  <FiInstagram
                    size={18}
                    className="transition-all duration-300 group-hover:scale-110"
                  />
                </Link>

                <Link
                  href="https://facebook.com/"
                  target="_blank"
                  className="group flex h-11 w-11 items-center justify-center rounded-full border border-white/10 bg-white/5 text-white/70 transition-all duration-300 hover:border-blue-600 hover:bg-blue-600 hover:text-white"
                >
                  <FiFacebook
                    size={18}
                    className="transition-all duration-300 group-hover:scale-110"
                  />
                </Link>
              </div>
            </div>
          </div>

          {/* Right Side Form */}
          <div className="relative overflow-hidden rounded-[32px] border border-white/10 bg-white/5 p-8 backdrop-blur-xl">
            
            <div className="absolute bottom-[-60px] left-[-60px] h-[180px] w-[180px] rounded-full bg-[#FF6D00]/20 blur-3xl" />

            <p className="text-sm uppercase tracking-[4px] text-[#FF6D00]">
              Send Message
            </p>

            <h2 className="mt-4 text-3xl font-black leading-tight md:text-4xl">
              Start Your Project
            </h2>

            <p className="mt-5 text-base leading-8 text-white/60">
              Fill out the form below and let’s discuss your next
              premium digital project.
            </p>

            <form className="mt-10 space-y-5">
              
              {/* Name */}
              <div>
                <label className="mb-2 block text-sm text-white/60">
                  Full Name
                </label>

                <input
                  type="text"
                  placeholder="Enter your full name"
                  className="w-full rounded-2xl border border-white/10 bg-[#091827] px-5 py-3.5 text-white outline-none transition focus:border-[#086ED0]"
                />
              </div>

              {/* Email */}
              <div>
                <label className="mb-2 block text-sm text-white/60">
                  Email Address
                </label>

                <input
                  type="email"
                  placeholder="Enter your email address"
                  className="w-full rounded-2xl border border-white/10 bg-[#091827] px-5 py-3.5 text-white outline-none transition focus:border-[#086ED0]"
                />
              </div>

              {/* Service */}
              <div>
                <label className="mb-2 block text-sm text-white/60">
                  Select Service
                </label>

                <select className="w-full rounded-2xl border border-white/10 bg-[#091827] px-5 py-3.5 text-white outline-none transition focus:border-[#086ED0]">
                  
                  <option>Branding Design</option>
                  <option>Logo Design</option>
                  <option>Website Development</option>
                  <option>Video Editing</option>                
                  <option>Packaging Design</option>
                  <option>Social Media design</option>

                </select>
              </div>

              {/* Message */}
              <div>
                <label className="mb-2 block text-sm text-white/60">
                  Message
                </label>

                <textarea
                  rows="5"
                  placeholder="Tell us about your project..."
                  className="w-full resize-none rounded-2xl border border-white/10 bg-[#091827] px-5 py-3.5 text-white outline-none transition focus:border-[#086ED0]"
                />
              </div>

              {/* Button */}
              <button
                type="submit"
                className="group flex w-full items-center justify-center gap-2 rounded-full bg-[#FF6D00] px-8 py-3.5 text-base font-semibold text-white transition-all duration-300 hover:bg-[#e65f00]"
              >
                Send Message

                <ArrowUpRight
                  size={18}
                  className="transition-all duration-300 group-hover:translate-x-1 group-hover:-translate-y-1"
                />
              </button>
            </form>
          </div>
        </div>
      </section>
    </main>
  );
}