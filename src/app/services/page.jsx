import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight, CheckCircle2 } from "lucide-react";

export default function ServicesPage() {
  const services = [
    {
      title: "Website Development",
      slug: "website-development",
      desc: "We build fast, modern websites using Next.js and React — designed to load quickly, rank well, and turn visitors into customers.",
      points: [
        "Next.js / React development for fast, reliable performance",
        "Mobile-first responsive layouts that work on every screen size",
        "SEO-friendly structure with clean, semantic code",
      ],
      image: "/servicesbg-img/website.png",
    },
    {
      title: "Logo Design",
      slug: "logo-design",
      desc: "A logo is often the first thing people notice about a brand. We design distinct, memorable marks through research and iteration — not templates.",
      points: [
        "Multiple concept directions before we finalize one",
        "Final files delivered in AI, EPS, SVG, and PNG formats",
        "Usage guidelines included for colors, spacing, and variations",
      ],
      image: "/servicesbg-img/logo.png",
    },
    {
      title: "Branding Design",
      slug: "branding-design",
      desc: "We build complete brand identity systems so your business looks consistent and credible everywhere it shows up — online and offline.",
      points: [
        "Brand strategy, color palette, and typography system",
        "Business card, letterhead, and stationery design",
        "Brand guideline document for consistent future use",
      ],
      image: "/servicesbg-img/branding.png",
    },
    {
      title: "Packaging Design",
      slug: "packaging-design",
      desc: "Packaging that stands out on a shelf and builds trust the moment someone picks up your product — built for print and production.",
      points: [
        "Print-ready dielines and realistic 3D mockups",
        "Material and finish recommendations for production",
        "Designs suited for retail, e-commerce, and food packaging",
      ],
      image: "/servicesbg-img/packaging.png",
    },
    {
      title: "Video Editing",
      slug: "video-editing",
      desc: "Polished, scroll-stopping video content edited for social media, ad campaigns, and brand storytelling.",
      points: [
        "Reels, ads, and promotional video editing",
        "Color grading, motion graphics, and captions included",
        "Fast turnaround built around content calendars",
      ],
      image: "/servicesbg-img/videoediting.png",
    },
    {
      title: "Social Media Design",
      slug: "social-media-design",
      desc: "Consistent, scroll-stopping creatives that keep your brand recognizable across every platform your audience uses.",
      points: [
        "Post, story, and carousel designs for Instagram, Facebook, LinkedIn",
        "Consistent visual system aligned with your brand guidelines",
        "Monthly content calendar and creative support",
      ],
      image: "/servicesbg-img/social.png",
    },
  ];

  return (
    <main className="relative overflow-hidden bg-[#03111F]">

      {/* ---------------- Hero ---------------- */}
      <section className="relative overflow-hidden py-12">

        <div className="absolute left-[-120px] top-0 h-[320px] w-[320px] rounded-full bg-[#086ED0]/10 blur-3xl" />
        <div className="absolute bottom-0 right-[-120px] h-[320px] w-[320px] rounded-full bg-[#FF6D00]/10 blur-3xl" />

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

      {/* ---------------- Services — alternating content / image rows ---------------- */}
      <section className="relative pb-12">
        <div className="mx-auto max-w-[1300px] px-6">

          <div className="flex flex-col gap-20 sm:gap-28">
            {services.map((service, index) => {
              const isReversed = index % 2 === 1;

              return (
                <div
                  key={service.slug}
                  className="grid items-center gap-10 lg:grid-cols-2 lg:gap-16"
                >

                  {/* Content */}
                  <div className={isReversed ? "lg:order-2" : "lg:order-1"}>
                    <span className="text-xs font-semibold uppercase tracking-[3px] text-[#FF6D00]">
                      0{index + 1} / Service
                    </span>

                    <h2 className="mt-4 text-2xl font-black leading-tight text-white sm:text-3xl lg:text-4xl">
                      {service.title}
                    </h2>

                    <p className="mt-5 max-w-[520px] text-sm leading-7 text-white/60 sm:text-base">
                      {service.desc}
                    </p>

                    <ul className="mt-7 space-y-3">
                      {service.points.map((point, i) => (
                        <li key={i} className="flex items-start gap-3">
                          <CheckCircle2
                            size={18}
                            className="mt-0.5 shrink-0 text-[#086ED0]"
                          />
                          <span className="text-sm leading-6 text-white/70 sm:text-[15px]">
                            {point}
                          </span>
                        </li>
                      ))}
                    </ul>

                    <Link
                      href={`/services/${service.slug}`}
                      className="group relative mt-9 inline-flex items-center gap-2 text-sm font-semibold text-[#FF6D00] transition hover:gap-3"
                    >
                      View Service
                      <ArrowUpRight
                        size={18}
                        className="transition group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                      />
                    </Link>
                  </div>

                  {/* Image */}
                  <div className={isReversed ? "lg:order-1" : "lg:order-2"}>
                    <div className="group relative aspect-[4/3] w-full overflow-hidden rounded-[28px] border border-white/10 bg-white/[0.03] sm:aspect-[16/11]">

                      {/* Glow accents */}
                      <div className="pointer-events-none absolute -left-10 -top-10 z-10 h-[160px] w-[160px] rounded-full bg-[#086ED0]/20 blur-3xl" />
                      <div className="pointer-events-none absolute -bottom-10 -right-10 z-10 h-[160px] w-[160px] rounded-full bg-[#FF6D00]/20 blur-3xl" />

                      <Image
                        src={service.image}
                        alt={service.title}
                        fill
                        sizes="(max-width: 1024px) 100vw, 50vw"
                        className="object-cover transition duration-700 group-hover:scale-105"
                      />
                    </div>
                  </div>

                </div>
              );
            })}
          </div>
        </div>
      </section>
    </main>
  );
}