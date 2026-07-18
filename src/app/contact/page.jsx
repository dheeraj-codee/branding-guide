"use client";

import { useState } from "react";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import emailjs from "@emailjs/browser";

import {
  FiInstagram,
  FiLinkedin,
  FiFacebook,
  FiMail,
  FiPhone,
  FiMapPin,
} from "react-icons/fi";

// Service ke hisab se budget options — yahan se values change kar sakta hai
const budgetOptions = {
  "Branding Design": ["₹5,000 - ₹15,000", "₹15,000 - ₹30,000", "₹30,000 - ₹50,000", "₹50,000+"],
  "Logo Design": ["₹2,000 - ₹5,000", "₹5,000 - ₹10,000", "₹10,000 - ₹20,000", "₹20,000+"],
  "Website Development": ["₹15,000 - ₹30,000", "₹30,000 - ₹60,000", "₹60,000 - ₹1,00,000", "₹1,00,000+"],
  "Video Editing": ["₹3,000 - ₹8,000", "₹8,000 - ₹15,000", "₹15,000 - ₹25,000", "₹25,000+"],
  "Packaging Design": ["₹5,000 - ₹15,000", "₹15,000 - ₹30,000", "₹30,000 - ₹50,000", "₹50,000+"],
  "Social Media design": ["₹5,000 - ₹10,000", "₹10,000 - ₹20,000", "₹20,000 - ₹35,000", "₹35,000+"],
};

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    service: "Branding Design",
    budget: budgetOptions["Branding Design"][0],
    message: "",
  });
  const [isSending, setIsSending] = useState(false);
  const [showSuccess, setShowSuccess] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;

    // Jab service change ho, budget ko us service ke first option pe reset kar do
    if (name === "service") {
      setFormData((prev) => ({
        ...prev,
        service: value,
        budget: budgetOptions[value][0],
      }));
      return;
    }

    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSending(true);

    const templateParams = {
      name: formData.name,
      email: formData.email,
      phone: formData.phone,
      service: formData.service,
      budget: formData.budget,
      message: formData.message,
    };

    emailjs
      .send(
        "service_x08fgv9",
        "template_6mq68wm",
        templateParams,
        "2wbbP8dwDmxZy7Kdr"
      )
      .then(() => {
        setIsSending(false);
        setShowSuccess(true);

        setFormData({
          name: "",
          email: "",
          phone: "",
          service: "Branding Design",
          budget: budgetOptions["Branding Design"][0],
          message: "",
        });

        setTimeout(() => {
          setShowSuccess(false);
        }, 3000);
      })
      .catch((error) => {
        console.error("EmailJS Error:", error);
        setIsSending(false);
      });
  };

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
        
        <div className="mx-auto grid max-w-[1300px] gap-8 px-6 lg:grid-cols-[2fr_3fr]">
          
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

            <form onSubmit={handleSubmit} className="mt-10 space-y-5">

              {/* Row 1: Name + Email */}
              <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
                
                {/* Name */}
                <div>
                  <label className="mb-2 block text-sm text-white/60">
                    Full Name
                  </label>

                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
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
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    placeholder="Enter your email address"
                    className="w-full rounded-2xl border border-white/10 bg-[#091827] px-5 py-3.5 text-white outline-none transition focus:border-[#086ED0]"
                  />
                </div>
              </div>

              {/* Row 2: Phone + Service */}
              <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
                
                {/* Phone */}
                <div>
                  <label className="mb-2 block text-sm text-white/60">
                    Phone Number
                  </label>

                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    placeholder="+91 98765 43210"
                    className="w-full rounded-2xl border border-white/10 bg-[#091827] px-5 py-3.5 text-white outline-none transition focus:border-[#086ED0]"
                  />
                </div>

                {/* Service */}
                <div>
                  <label className="mb-2 block text-sm text-white/60">
                    Select Service
                  </label>

                  <select
                    name="service"
                    value={formData.service}
                    onChange={handleChange}
                    className="w-full rounded-2xl border border-white/10 bg-[#091827] px-5 py-3.5 text-white outline-none transition focus:border-[#086ED0]"
                  >
                    {Object.keys(budgetOptions).map((service) => (
                      <option key={service} value={service}>
                        {service}
                      </option>
                    ))}
                  </select>
                </div>
              </div>

              {/* Row 3: Budget - akela, service ke hisab se dynamic */}
              <div>
                <label className="mb-2 block text-sm text-white/60">
                  Select Budget
                </label>

                <select
                  name="budget"
                  value={formData.budget}
                  onChange={handleChange}
                  className="w-full rounded-2xl border border-white/10 bg-[#091827] px-5 py-3.5 text-white outline-none transition focus:border-[#086ED0]"
                >
                  {budgetOptions[formData.service].map((range) => (
                    <option key={range} value={range}>
                      {range}
                    </option>
                  ))}
                </select>
              </div>

              {/* Message */}
              <div>
                <label className="mb-2 block text-sm text-white/60">
                  Message
                </label>

                <textarea
                  rows="5"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  placeholder="Tell us about your project..."
                  className="w-full resize-none rounded-2xl border border-white/10 bg-[#091827] px-5 py-3.5 text-white outline-none transition focus:border-[#086ED0]"
                />
              </div>

              {/* Button */}
              <button
                type="submit"
                disabled={isSending}
                className="group flex w-full items-center justify-center gap-2 rounded-full bg-[#FF6D00] px-8 py-3.5 text-base font-semibold text-white transition-all duration-300 hover:bg-[#e65f00] disabled:cursor-not-allowed disabled:opacity-70"
              >
                {isSending ? "Sending..." : "Send Message"}

                {!isSending && (
                  <ArrowUpRight
                    size={18}
                    className="transition-all duration-300 group-hover:translate-x-1 group-hover:-translate-y-1"
                  />
                )}
              </button>

              {/* Success Message */}
              {showSuccess && (
                <p className="text-center text-sm font-medium text-green-400">
                  Message sent successfully!
                </p>
              )}
            </form>
          </div>
        </div>
      </section>
    </main>
  );
}