export default function TrustedBrands() {
  const brands = [
    "BrandWave",
    "PixelCraft",
    "Visionary",
    "Creative Hub",
    "NextStudio",
  ];

  return (
    <section className="relative overflow-hidden bg-[#03111F] py-12">
      
      {/* Glow */}
      <div className="absolute left-[-100px] top-0 h-[250px] w-[250px] rounded-full bg-[#086ED0]/10 blur-3xl" />

      <div className="absolute bottom-0 right-[-100px] h-[250px] w-[250px] rounded-full bg-[#FF6D00]/10 blur-3xl" />

      <div className="relative mx-auto max-w-[1400px] px-6">
        
        {/* Heading */}
        <div className="text-center">
          
          <p className="text-xs font-medium uppercase tracking-[5px] text-[#FF6D00] sm:text-sm">
            Trusted Worldwide
          </p>

          <h2 className="mt-5 text-3xl font-black text-white sm:text-4xl lg:text-5xl">
            Trusted By Modern
            <span className="text-[#086ED0]"> Creative Brands </span>
          </h2>

          <p className="mx-auto mt-6 max-w-[650px] text-sm leading-7 text-white/60 sm:text-base">
            Businesses and startups trust Branding Guide for
            premium branding, website development, and creative
            digital experiences.
          </p>
        </div>

        {/* Brands Grid */}
<div className="no-scrollbar mt-16 flex gap-6 overflow-x-auto pb-4 snap-x snap-mandatory md:grid md:grid-cols-3 md:overflow-visible lg:grid-cols-5">

          {brands.map((brand, index) => (
            <div
              key={index}
className="group relative min-w-[220px] snap-center overflow-hidden rounded-[28px] border border-white/10 bg-white/[0.03] p-8 text-center backdrop-blur-xl transition duration-300 hover:-translate-y-2 hover:border-[#086ED0]/40 hover:bg-white/[0.05] md:min-w-0"            >
              
              {/* Hover Glow */}
              <div className="absolute inset-0 bg-gradient-to-br from-[#086ED0]/0 to-[#FF6D00]/0 opacity-0 transition duration-500 group-hover:from-[#086ED0]/10 group-hover:to-[#FF6D00]/10 group-hover:opacity-100" />

              <div className="relative">
                
                {/* Fake Logo Circle */}
                <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-br from-[#086ED0]/20 to-[#FF6D00]/20 text-xl font-black text-white">
                  {brand.charAt(0)}
                </div>

                {/* Brand Name */}
                <h3 className="mt-6 text-lg font-bold text-white sm:text-xl">
                  {brand}
                </h3>

                <p className="mt-2 text-sm text-white/50">
                  Creative Partner
                </p>
              </div>
            </div>
          ))}

        </div>
      </div>
    </section>
  );
}