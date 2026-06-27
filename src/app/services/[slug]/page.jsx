import Link from "next/link";
import {
  ArrowRight,
  Check,
  Star,
  MonitorSmartphone,
  Rocket,
  ShieldCheck,
} from "lucide-react";

const services = {
  "website-development": {
    title: "Website Development",
    desc: "Modern, responsive, and high-performance websites crafted for businesses and brands.",
  },

  "logo-design": {
    title: "Logo Design",
    desc: "Creative and memorable logo designs that build a strong brand identity.",
  },

  "branding-design": {
    title: "Branding Design",
    desc: "Premium branding solutions that improve trust and recognition.",
  },

  "packaging-design": {
    title: "Packaging Design",
    desc: "Creative packaging experiences designed for modern products.",
  },

  "video-editing": {
    title: "Video Editing",
    desc: "Professional editing solutions for social media and marketing content.",
  },

  "social-media-design": {
    title: "Social Media Design",
    desc: "Engaging creatives designed to improve online presence.",
  },
};

export default async function ServiceDetailPage({ params }) {
  const { slug } = await params;

  const service = services[slug];

  if (!service) {
    return (
      <div className="flex min-h-screen items-center justify-center bg-[#03111F] text-white">
        Service Not Found
      </div>
    );
  }

  return (
    <main className="relative overflow-hidden bg-[#03111F]">
      
      {/* HERO */}
      <section className="relative overflow-hidden py-28">
        
        {/* Glow */}
        <div className="absolute left-[-120px] top-0 h-[320px] w-[320px] rounded-full bg-[#086ED0]/10 blur-3xl" />

        <div className="absolute bottom-0 right-[-120px] h-[320px] w-[320px] rounded-full bg-[#FF6D00]/10 blur-3xl" />

        {/* Grid */}
        <div className="absolute inset-0 opacity-[0.03]">
          <div className="h-full w-full bg-[linear-gradient(to_right,#ffffff_1px,transparent_1px),linear-gradient(to_bottom,#ffffff_1px,transparent_1px)] bg-[size:80px_80px]" />
        </div>

        <div className="relative mx-auto max-w-[1400px] px-6 text-center">
          
          <p className="text-xs uppercase tracking-[5px] text-[#FF6D00]">
            Our Service
          </p>

          <h1 className="mx-auto mt-6 max-w-[950px] text-4xl font-black leading-[1.1] text-white sm:text-5xl lg:text-6xl">
            {service.title}
          </h1>

          <p className="mx-auto mt-8 max-w-[750px] text-sm leading-7 text-white/60 sm:text-base">
            {service.desc}
          </p>

          <Link
            href="/contact"
            className="mt-10 inline-flex items-center gap-3 rounded-full bg-[#FF6D00] px-8 py-4 text-sm font-semibold text-white transition duration-300 hover:scale-105 hover:bg-[#e65f00]"
          >
            Start Project

            <ArrowRight size={18} />
          </Link>
        </div>
      </section>

      {/* WHY IMPORTANT */}
      <section className="pb-24">
        
        <div className="mx-auto grid max-w-[1400px] gap-10 px-6 lg:grid-cols-2">
          
          {/* Left */}
          <div>
            
            <p className="text-xs uppercase tracking-[5px] text-[#FF6D00]">
              Why It Matters
            </p>

            <h2 className="mt-5 text-3xl font-black leading-[1.1] text-white sm:text-4xl">
              Why Your Business Needs
              <span className="text-[#086ED0]"> {service.title} </span>
            </h2>

            <p className="mt-8 text-sm leading-7 text-white/60 sm:text-base">
              Modern businesses require premium digital experiences
              to build trust, improve engagement, and stand out in
              today’s competitive market.
            </p>

            <p className="mt-6 text-sm leading-7 text-white/60 sm:text-base">
              Our solutions are crafted with creativity, strategy,
              and modern technology to help businesses grow faster
              and create a strong online presence.
            </p>

            {/* Features */}
            <div className="mt-10 space-y-5">
              
              <div className="flex items-center gap-4 rounded-2xl border border-white/10 bg-white/[0.03] p-5">
                <Check className="text-[#FF6D00]" size={18} />

                <p className="text-sm text-white/70">
                  Premium Modern Design
                </p>
              </div>

              <div className="flex items-center gap-4 rounded-2xl border border-white/10 bg-white/[0.03] p-5">
                <Check className="text-[#FF6D00]" size={18} />

                <p className="text-sm text-white/70">
                  High Performance & Responsive
                </p>
              </div>

              <div className="flex items-center gap-4 rounded-2xl border border-white/10 bg-white/[0.03] p-5">
                <Check className="text-[#FF6D00]" size={18} />

                <p className="text-sm text-white/70">
                  Fast Delivery & Support
                </p>
              </div>
            </div>
          </div>

          {/* Right */}
          <div className="relative overflow-hidden rounded-[40px] border border-white/10 bg-white/[0.03] p-10 backdrop-blur-xl">
            
            <div className="absolute inset-0 bg-gradient-to-br from-[#086ED0]/10 to-[#FF6D00]/5" />

            <div className="relative">
              
              <div className="grid gap-6 sm:grid-cols-2">
                
                <div className="rounded-[28px] border border-white/10 bg-white/[0.03] p-6">
                  <MonitorSmartphone
                    className="text-[#FF6D00]"
                    size={28}
                  />

                  <h3 className="mt-5 text-xl font-black text-white">
                    Responsive
                  </h3>

                  <p className="mt-3 text-sm leading-7 text-white/60">
                    Optimized for all modern devices.
                  </p>
                </div>

                <div className="rounded-[28px] border border-white/10 bg-white/[0.03] p-6">
                  <Rocket
                    className="text-[#FF6D00]"
                    size={28}
                  />

                  <h3 className="mt-5 text-xl font-black text-white">
                    Performance
                  </h3>

                  <p className="mt-3 text-sm leading-7 text-white/60">
                    Fast loading and scalable solutions.
                  </p>
                </div>

                <div className="rounded-[28px] border border-white/10 bg-white/[0.03] p-6 sm:col-span-2">
                  <ShieldCheck
                    className="text-[#FF6D00]"
                    size={28}
                  />

                  <h3 className="mt-5 text-xl font-black text-white">
                    Premium Quality
                  </h3>

                  <p className="mt-3 text-sm leading-7 text-white/60">
                    Modern UI crafted for businesses and brands.
                  </p>
                </div>
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* CLIENTS */}
      <section className="pb-24">
        
        <div className="mx-auto max-w-[1400px] px-6">
          
          <div className="rounded-[40px] border border-white/10 bg-white/[0.03] p-10 backdrop-blur-xl">
            
            <div className="flex flex-col gap-10 lg:flex-row lg:items-center lg:justify-between">
              
              <div>
                
                <p className="text-xs uppercase tracking-[5px] text-[#FF6D00]">
                  Trusted By Clients
                </p>

                <h2 className="mt-5 text-3xl font-black text-white sm:text-4xl">
                  Helping Brands Grow Online
                </h2>
              </div>

              <div className="grid gap-6 sm:grid-cols-3">
                
                <div>
                  <h3 className="text-4xl font-black text-[#086ED0]">
                    50+
                  </h3>

                  <p className="mt-2 text-sm text-white/60">
                    Projects Completed
                  </p>
                </div>

                <div>
                  <h3 className="text-4xl font-black text-[#FF6D00]">
                    100%
                  </h3>

                  <p className="mt-2 text-sm text-white/60">
                    Client Satisfaction
                  </p>
                </div>

                <div>
                  <h3 className="text-4xl font-black text-white">
                    24/7
                  </h3>

                  <p className="mt-2 text-sm text-white/60">
                    Client Support
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="pb-24">
        
        <div className="mx-auto max-w-[1000px] px-6">
          
          <div className="text-center">
            
            <p className="text-xs uppercase tracking-[5px] text-[#FF6D00]">
              FAQ
            </p>

            <h2 className="mt-5 text-3xl font-black text-white sm:text-4xl">
              Frequently Asked Questions
            </h2>
          </div>

          <div className="mt-14 space-y-6">
            
            <div className="rounded-[28px] border border-white/10 bg-white/[0.03] p-6">
              <h3 className="text-lg font-bold text-white">
                How long does a project take?
              </h3>

              <p className="mt-4 text-sm leading-7 text-white/60">
                Project timelines depend on the scope and requirements.
              </p>
            </div>

            <div className="rounded-[28px] border border-white/10 bg-white/[0.03] p-6">
              <h3 className="text-lg font-bold text-white">
                Do you provide revisions?
              </h3>

              <p className="mt-4 text-sm leading-7 text-white/60">
                Yes, revisions are included to ensure client satisfaction.
              </p>
            </div>

          </div>
        </div>
      </section>

      {/* CONTACT FORM */}
      <section className="pb-24">
        
        <div className="mx-auto max-w-[1000px] px-6">
          
          <div className="overflow-hidden rounded-[40px] border border-white/10 bg-white/[0.03] p-10 backdrop-blur-xl">
            
            <div className="text-center">
              
              <p className="text-xs uppercase tracking-[5px] text-[#FF6D00]">
                Contact Us
              </p>

              <h2 className="mt-5 text-3xl font-black text-white sm:text-4xl">
                Let’s Discuss Your Project
              </h2>
            </div>

            <form className="mt-14 grid gap-6">
              
              <input
                type="text"
                placeholder="Your Name"
                className="h-14 rounded-2xl border border-white/10 bg-white/[0.03] px-5 text-sm text-white outline-none placeholder:text-white/40"
              />

              <input
                type="email"
                placeholder="Email Address"
                className="h-14 rounded-2xl border border-white/10 bg-white/[0.03] px-5 text-sm text-white outline-none placeholder:text-white/40"
              />

              <textarea
                rows="6"
                placeholder="Tell us about your project"
                className="rounded-2xl border border-white/10 bg-white/[0.03] p-5 text-sm text-white outline-none placeholder:text-white/40"
              />

              <button
                className="inline-flex items-center justify-center gap-3 rounded-full bg-[#FF6D00] px-8 py-4 text-sm font-semibold text-white transition duration-300 hover:scale-105 hover:bg-[#e65f00]"
              >
                Send Message

                <ArrowRight size={18} />
              </button>
            </form>
          </div>
        </div>
      </section>
    </main>
  );
}