import Link from "next/link";
import {
  ArrowUpRight,
  MonitorSmartphone,
  PenTool,
  LayoutDashboard,
  Package,
  Video,
  Layers3,
} from "lucide-react";

export default function ServicesPage() {
  const services = [
    {
      icon: <MonitorSmartphone size={28} />,
      title: "Website Development",
      desc: "Modern, responsive, and high-performance websites crafted for businesses and brands.",
      slug: "website-development",
    },

    {
      icon: <PenTool size={28} />,
      title: "Logo Design",
      desc: "Creative and memorable logo designs that build a strong brand identity.",
      slug: "logo-design",
    },

    {
      icon: <LayoutDashboard size={28} />,
      title: "Branding Design",
      desc: "Premium branding solutions that improve trust and brand recognition.",
      slug: "branding-design",
    },

    {
      icon: <Package size={28} />,
      title: "Packaging Design",
      desc: "Creative packaging experiences designed for modern products and businesses.",
      slug: "packaging-design",
    },

    {
      icon: <Video size={28} />,
      title: "Video Editing",
      desc: "Professional editing solutions for social media and marketing content.",
      slug: "video-editing",
    },

    {
      icon: <Layers3 size={28} />,
      title: "Social Media Design",
      desc: "Engaging creatives designed to improve online presence and audience engagement.",
      slug: "social-media-design",
    },
  ];

  return (
    <main className="relative overflow-hidden bg-[#03111F]">
      
      {/* Hero */}
      <section className="relative overflow-hidden py-28">
        
        {/* Glow */}
        <div className="absolute left-[-120px] top-0 h-[320px] w-[320px] rounded-full bg-[#086ED0]/10 blur-3xl" />

        <div className="absolute bottom-0 right-[-120px] h-[320px] w-[320px] rounded-full bg-[#FF6D00]/10 blur-3xl" />

        {/* Grid */}
        <div className="absolute inset-0 opacity-[0.03]">
          <div className="h-full w-full bg-[linear-gradient(to_right,#ffffff_1px,transparent_1px),linear-gradient(to_bottom,#ffffff_1px,transparent_1px)] bg-[size:80px_80px]" />
        </div>

        <div className="relative mx-auto max-w-[1400px] px-6 text-center">
          
          <p className="text-xs font-medium uppercase tracking-[5px] text-[#FF6D00] sm:text-sm">
            Our Services
          </p>

          <h1 className="mx-auto mt-6 max-w-[950px] text-4xl font-black leading-[1.1] text-white sm:text-5xl lg:text-6xl">
            
            Premium Digital
            <span className="text-[#086ED0]"> Solutions For </span>

            Modern Brands
          </h1>

          <p className="mx-auto mt-8 max-w-[750px] text-sm leading-7 text-white/60 sm:text-base">
            We provide branding, website development, logo design,
            packaging design, and creative digital services crafted
            for businesses and growing brands.
          </p>
        </div>
      </section>

      {/* Services Grid */}
      <section className="relative pb-24">
        
        <div className="mx-auto max-w-[1400px] px-6">
          
          <div className="grid gap-8 md:grid-cols-2 xl:grid-cols-3">
            
            {services.map((service, index) => (
              <div
                key={index}
                className="group relative overflow-hidden rounded-[36px] border border-white/10 bg-white/[0.03] p-8 backdrop-blur-xl transition duration-500 hover:-translate-y-3 hover:border-[#086ED0]/40"
              >
                
                {/* Hover Gradient */}
                <div className="absolute inset-0 bg-gradient-to-br from-[#086ED0]/10 to-[#FF6D00]/5 opacity-0 transition duration-500 group-hover:opacity-100" />

                {/* Icon */}
                <div className="relative flex h-16 w-16 items-center justify-center rounded-2xl border border-white/10 bg-white/5 text-[#FF6D00] transition duration-300 group-hover:bg-[#FF6D00] group-hover:text-white">
                  {service.icon}
                </div>

                {/* Content */}
                <div className="relative mt-10">
                  
                  <h2 className="text-2xl font-black text-white">
                    {service.title}
                  </h2>

                  <p className="mt-5 text-sm leading-7 text-white/60 sm:text-base">
                    {service.desc}
                  </p>
                </div>

                {/* Button */}
                <Link
                  href={`/services/${service.slug}`}
                  className="relative mt-10 inline-flex items-center gap-2 text-sm font-semibold text-[#FF6D00] transition hover:gap-3"
                >
                  View Service

                  <ArrowUpRight size={18} />
                </Link>

                {/* Glow */}
                <div className="absolute bottom-[-60px] right-[-60px] h-[140px] w-[140px] rounded-full bg-[#086ED0]/0 blur-3xl transition duration-500 group-hover:bg-[#086ED0]/20" />
              </div>
            ))}

          </div>
        </div>
      </section>
    </main>
  );
}