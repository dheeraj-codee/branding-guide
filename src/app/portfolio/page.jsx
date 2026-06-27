import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

export default function PortfolioPage() {
  const projects = [
    {
      title: "Luxury Real Estate Website",
      category: "Website Development",
    },

    {
      title: "Restaurant Brand Identity",
      category: "Branding Design",
    },

    {
      title: "Coffee Packaging Design",
      category: "Packaging Design",
    },

    {
      title: "Fitness Logo Collection",
      category: "Logo Design",
    },

    {
      title: "Social Media Video Editing",
      category: "Video Editing",
    },

    {
      title: "Creative Social Media Posts",
      category: "Social Media Design",
    },
  ];

  return (
    <main className="relative overflow-hidden bg-[#03111F]">
      
      {/* Hero Section */}
      <section className="relative overflow-hidden py-28">
        
        {/* Glow Effects */}
        <div className="absolute left-[-120px] top-0 h-[320px] w-[320px] rounded-full bg-[#086ED0]/10 blur-3xl" />

        <div className="absolute bottom-0 right-[-120px] h-[320px] w-[320px] rounded-full bg-[#FF6D00]/10 blur-3xl" />

        {/* Grid */}
        <div className="absolute inset-0 opacity-[0.03]">
          <div className="h-full w-full bg-[linear-gradient(to_right,#ffffff_1px,transparent_1px),linear-gradient(to_bottom,#ffffff_1px,transparent_1px)] bg-[size:80px_80px]" />
        </div>

        <div className="relative mx-auto max-w-[1400px] px-6 text-center">
          
          <p className="text-xs font-medium uppercase tracking-[5px] text-[#FF6D00] sm:text-sm">
            Our Portfolio
          </p>

          <h1 className="mx-auto mt-6 max-w-[950px] text-4xl font-black leading-[1.1] text-white sm:text-5xl lg:text-6xl">
            
            Creative Projects
            <span className="text-[#086ED0]"> Crafted For </span>

            Modern Brands
          </h1>

          <p className="mx-auto mt-8 max-w-[750px] text-sm leading-7 text-white/60 sm:text-base">
            Explore our premium branding, website development,
            packaging design, and creative digital projects built
            for businesses and growing brands.
          </p>
        </div>
      </section>

      {/* Portfolio Grid */}
      <section className="relative pb-24">
        
        <div className="mx-auto max-w-[1400px] px-6">
          
          <div className="grid gap-8 md:grid-cols-2 xl:grid-cols-3">
            
            {projects.map((project, index) => (
              <div
                key={index}
                className="group relative overflow-hidden rounded-[36px] border border-white/10 bg-white/[0.03] backdrop-blur-xl transition duration-500 hover:-translate-y-3 hover:border-[#086ED0]/40"
              >
                
                {/* Image Area */}
                <div className="relative h-[340px] overflow-hidden">
                  
                  {/* Gradient */}
                  <div className="absolute inset-0 bg-gradient-to-br from-[#086ED0]/20 via-[#091827] to-[#FF6D00]/10 transition duration-500 group-hover:scale-110" />

                  {/* Glow */}
                  <div className="absolute left-[-60px] top-[-60px] h-[200px] w-[200px] rounded-full bg-[#086ED0]/20 blur-3xl" />

                  <div className="absolute bottom-[-60px] right-[-60px] h-[200px] w-[200px] rounded-full bg-[#FF6D00]/20 blur-3xl" />

                  {/* Number */}
                  <div className="absolute left-6 top-6 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-xs font-medium text-white/70 backdrop-blur-xl">
                    0{index + 1}
                  </div>

                  {/* Arrow */}
                  <div className="absolute right-6 top-6 flex h-11 w-11 items-center justify-center rounded-full border border-white/10 bg-white/5 text-white opacity-0 backdrop-blur-xl transition duration-300 group-hover:opacity-100">
                    <ArrowUpRight size={18} />
                  </div>

                  {/* Bottom Content */}
                  <div className="absolute bottom-6 left-6 right-6 rounded-[24px] border border-white/10 bg-white/[0.05] p-6 backdrop-blur-xl">
                    
                    <p className="text-xs uppercase tracking-[4px] text-[#FF6D00]">
                      {project.category}
                    </p>

                    <h3 className="mt-3 text-xl font-black text-white md:text-2xl">
                      {project.title}
                    </h3>

                    <p className="mt-3 text-sm leading-7 text-white/60">
                      Premium creative solution designed for
                      modern businesses and brands.
                    </p>
                  </div>
                </div>
              </div>
            ))}

          </div>

          {/* Bottom CTA */}
          <div className="mt-20 rounded-[40px] border border-white/10 bg-white/[0.03] p-10 text-center backdrop-blur-xl">
            
            <p className="text-xs font-medium uppercase tracking-[5px] text-[#FF6D00] sm:text-sm">
              Let’s Work Together
            </p>

            <h2 className="mx-auto mt-6 max-w-[800px] text-3xl font-black leading-[1.1] text-white sm:text-4xl lg:text-5xl">
              
              Ready To Build
              <span className="text-[#086ED0]"> Your Next Project? </span>
            </h2>

            <p className="mx-auto mt-6 max-w-[650px] text-sm leading-7 text-white/60 sm:text-base">
              Let’s create premium branding and digital experiences
              that help your business stand out online.
            </p>

            <Link
              href="/contact"
              className="mt-10 inline-flex items-center gap-3 rounded-full bg-[#FF6D00] px-8 py-4 text-sm font-semibold text-white transition duration-300 hover:scale-105 hover:bg-[#e65f00]"
            >
              Start Your Project

              <ArrowUpRight size={18} />
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}