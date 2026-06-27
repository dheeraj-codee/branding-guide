import CtaBanner from "@/components/CtaBanner";

export default function AboutPage() {
  return (
    <main className="bg-[#03111F] text-white">
      
      {/* Hero Section */}
      <section className="relative overflow-hidden py-32">
        
        <div className="absolute left-[-120px] top-10 h-[300px] w-[300px] rounded-full bg-[#086ED0]/20 blur-3xl" />

        <div className="absolute bottom-0 right-[-100px] h-[300px] w-[300px] rounded-full bg-[#FF6D00]/20 blur-3xl" />

        <div className="relative mx-auto max-w-[1400px] px-6">
          
          <p className="text-sm uppercase tracking-[6px] text-[#FF6D00]">
            About Branding Guide
          </p>

          <h1 className="mt-8 max-w-[900px] text-5xl font-black leading-tight md:text-7xl">
            We Build Powerful Brands &
            <span className="text-[#086ED0]"> Modern Digital </span>
            Experiences
          </h1>

          <p className="mt-10 max-w-[850px] text-xl leading-9 text-white/60">
            Branding Guide is a creative digital agency focused on
            helping businesses grow through premium branding,
            website development, packaging design, video editing,
            and modern visual experiences.
          </p>
        </div>
      </section>

      {/* About Section */}
      <section className="py-24">
        <div className="mx-auto grid max-w-[1400px] gap-16 px-6 lg:grid-cols-2 lg:items-center">
          
          <div>
            <p className="text-[#FF6D00]">
              Who We Are
            </p>

            <h2 className="mt-6 text-4xl font-black leading-tight md:text-6xl">
              Creative Solutions
              <span className="text-[#086ED0]"> Designed </span>
              For Modern Businesses
            </h2>

            <p className="mt-8 text-lg leading-9 text-white/60">
              At Branding Guide, we believe every business deserves
              a strong and memorable identity. Our goal is to create
              premium digital experiences that not only look amazing
              but also help brands stand out in today’s competitive market.
            </p>

            <p className="mt-6 text-lg leading-9 text-white/60">
              From startup businesses to growing companies, we help
              brands create trust, improve online presence, and
              connect with customers through strategic design and
              modern development solutions.
            </p>
          </div>

          <div className="relative">
            
            <div className="absolute -left-6 -top-6 h-full w-full rounded-[40px] border border-[#086ED0]/20" />

            <div className="relative h-[500px] rounded-[40px] bg-gradient-to-br from-[#086ED0]/30 to-[#FF6D00]/20" />
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-24">
        <div className="mx-auto max-w-[1400px] px-6">
          
          <div className="text-center">
            <p className="text-[#FF6D00]">
              Our Mission
            </p>

            <h2 className="mt-6 text-4xl font-black md:text-6xl">
              Helping Brands Grow
              <span className="text-[#086ED0]"> Digitally </span>
            </h2>
          </div>

          <div className="mt-20 grid gap-8 lg:grid-cols-2">
            
            <div className="rounded-[40px] border border-white/10 bg-white/5 p-10 backdrop-blur-xl">
              
              <h3 className="text-3xl font-black text-white">
                Our Mission
              </h3>

              <p className="mt-8 text-lg leading-9 text-white/60">
                Our mission is to provide businesses with premium
                creative services that improve brand identity,
                customer engagement, and digital growth through
                innovative design and development.
              </p>
            </div>

            <div className="rounded-[40px] border border-white/10 bg-white/5 p-10 backdrop-blur-xl">
              
              <h3 className="text-3xl font-black text-white">
                Our Vision
              </h3>

              <p className="mt-8 text-lg leading-9 text-white/60">
                We aim to become a trusted creative partner for
                businesses worldwide by delivering modern,
                impactful, and high-quality digital experiences
                that drive long-term success.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="py-24">
        <div className="mx-auto max-w-[1400px] px-6">
          
          <div className="text-center">
            <p className="text-[#FF6D00]">
              What We Do
            </p>

            <h2 className="mt-6 text-4xl font-black md:text-6xl">
              Our Creative Services
            </h2>
          </div>

          <div className="mt-20 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            
            <div className="rounded-[32px] border border-white/10 bg-white/5 p-8 transition hover:-translate-y-2 hover:border-[#086ED0]">
              
              <h3 className="text-2xl font-bold">
                Branding Design
              </h3>

              <p className="mt-5 leading-8 text-white/60">
                Creating strong visual identities that help businesses
                stand out and build trust.
              </p>
            </div>

            <div className="rounded-[32px] border border-white/10 bg-white/5 p-8 transition hover:-translate-y-2 hover:border-[#086ED0]">
              
              <h3 className="text-2xl font-bold">
                Logo Design
              </h3>

              <p className="mt-5 leading-8 text-white/60">
                Professional and memorable logo designs crafted for
                modern brands.
              </p>
            </div>

            <div className="rounded-[32px] border border-white/10 bg-white/5 p-8 transition hover:-translate-y-2 hover:border-[#086ED0]">
              
              <h3 className="text-2xl font-bold">
                Website Development
              </h3>

              <p className="mt-5 leading-8 text-white/60">
                Fast, responsive, and premium websites designed to
                grow your online presence.
              </p>
            </div>

            <div className="rounded-[32px] border border-white/10 bg-white/5 p-8 transition hover:-translate-y-2 hover:border-[#086ED0]">
              
              <h3 className="text-2xl font-bold">
                Video Editing
              </h3>

              <p className="mt-5 leading-8 text-white/60">
                High-quality video editing solutions for promotional
                and social media content.
              </p>
            </div>

            <div className="rounded-[32px] border border-white/10 bg-white/5 p-8 transition hover:-translate-y-2 hover:border-[#086ED0]">
              
              <h3 className="text-2xl font-bold">
                Packaging Design
              </h3>

              <p className="mt-5 leading-8 text-white/60">
                Creative packaging designs that enhance product
                presentation and brand identity.
              </p>
            </div>

            <div className="rounded-[32px] border border-white/10 bg-white/5 p-8 transition hover:-translate-y-2 hover:border-[#086ED0]">
              
              <h3 className="text-2xl font-bold">
                Social Media Design
              </h3>

              <p className="mt-5 leading-8 text-white/60">
                Engaging social media creatives designed to improve
                reach and engagement.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-24">
        <div className="mx-auto max-w-[1400px] px-6">
          
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
            
            <div className="rounded-[32px] border border-white/10 bg-white/5 p-10 text-center">
              
              <h3 className="text-5xl font-black text-[#086ED0]">
                50+
              </h3>

              <p className="mt-4 text-white/60">
                Projects Completed
              </p>
            </div>

            <div className="rounded-[32px] border border-white/10 bg-white/5 p-10 text-center">
              
              <h3 className="text-5xl font-black text-[#FF6D00]">
                100%
              </h3>

              <p className="mt-4 text-white/60">
                Client Satisfaction
              </p>
            </div>

            <div className="rounded-[32px] border border-white/10 bg-white/5 p-10 text-center">
              
              <h3 className="text-5xl font-black text-[#086ED0]">
                24/7
              </h3>

              <p className="mt-4 text-white/60">
                Support Available
              </p>
            </div>

            <div className="rounded-[32px] border border-white/10 bg-white/5 p-10 text-center">
              
              <h3 className="text-5xl font-black text-[#FF6D00]">
                5★
              </h3>

              <p className="mt-4 text-white/60">
                Service Quality
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Banner */}
      <CtaBanner />
    </main>
  );
}