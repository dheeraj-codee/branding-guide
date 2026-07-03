"use client";

import { useState } from "react";
import { useParams } from "next/navigation";
import Link from "next/link";
import {
  ArrowRight,
  Check,
  ChevronDown,
  MonitorSmartphone,
  Zap,
  Search,
  PenTool,
  Layers,
  FileImage,
  Palette,
  BookOpen,
  Fingerprint,
  Package,
  Box,
  Layers3,
  Film,
  Scissors,
  Video,
  Image as ImageIcon,
  CalendarDays,
} from "lucide-react";

const servicesData = {
  "website-development": {
    title: "Website Development",
    tagline:
      "Modern, responsive, and high-performance websites crafted for businesses and brands.",
    intro: [
      "A slow or outdated website costs you customers before they even see what you offer. We build sites on Next.js and React that load fast, work on every device, and are structured for search engines from day one.",
      "Whether you need a business site, a landing page, or a full e-commerce build, we focus on clean code and a smooth experience that holds up as your business grows.",
    ],
    quickPoints: [
      "Built on Next.js / React",
      "Mobile-first, fully responsive",
      "SEO-ready structure",
    ],
    features: [
      {
        icon: MonitorSmartphone,
        title: "Fully Responsive",
        desc: "Looks and works great on mobile, tablet, and desktop — no broken layouts.",
      },
      {
        icon: Zap,
        title: "Built For Speed",
        desc: "Optimized code and assets so pages load quickly and navigation feels instant.",
      },
      {
        icon: Search,
        title: "SEO Ready",
        desc: "Clean, semantic structure that search engines can crawl and rank properly.",
      },
    ],
    included: [
      "Custom Next.js / React development",
      "Mobile-first responsive design",
      "On-page SEO setup (meta tags, sitemap, structure)",
      "Contact form and basic integrations",
      "Post-launch support for bug fixes",
    ],
    faqs: [
      {
        q: "How long does a website take to build?",
        a: "Most business websites take 2-4 weeks depending on the number of pages and features. We'll give you a clear timeline after understanding your requirements.",
      },
      {
        q: "Do you provide hosting and domain setup?",
        a: "We can guide you through hosting and domain setup, or handle it directly if you'd prefer we manage that part.",
      },
      {
        q: "Can I update the content myself later?",
        a: "Yes — if needed, we can build the site with a simple content structure or CMS so you're not dependent on us for every small text change.",
      },
    ],
  },

  "logo-design": {
    title: "Logo Design",
    tagline:
      "Creative and memorable logo designs that build a strong brand identity.",
    intro: [
      "Your logo is often the first thing people notice about your business. We design distinct, memorable marks through research and iteration — not by picking from a template library.",
      "Every logo we deliver is built to work everywhere your brand shows up — from a favicon to a storefront sign.",
    ],
    quickPoints: [
      "3-5 original concepts",
      "Vector files (AI, EPS, SVG, PNG)",
      "Usage guidelines included",
    ],
    features: [
      {
        icon: PenTool,
        title: "Multiple Concepts",
        desc: "Several distinct directions presented before we narrow down to one.",
      },
      {
        icon: Layers,
        title: "Scalable Files",
        desc: "Vector artwork that stays sharp from a business card to a storefront sign.",
      },
      {
        icon: FileImage,
        title: "Full File Package",
        desc: "AI, EPS, SVG, and PNG formats delivered for every use case.",
      },
    ],
    included: [
      "3-5 initial logo concepts",
      "2 rounds of revisions on the chosen direction",
      "Primary, secondary, and icon-only variations",
      "Color and black-and-white versions",
      "One-page usage guideline (colors, spacing, do's & don'ts)",
    ],
    faqs: [
      {
        q: "How many logo concepts do I get to choose from?",
        a: "You'll typically see 3-5 distinct concepts in the first round, based on the brief and references we align on beforehand.",
      },
      {
        q: "What if I don't like any of the initial concepts?",
        a: "We'll revisit the brief and explore a new direction — we don't move forward until you're confident in the design.",
      },
      {
        q: "Will I own the final logo files?",
        a: "Yes. Once the project is complete, you receive full ownership of all final files and formats.",
      },
    ],
  },

  "branding-design": {
    title: "Branding Design",
    tagline: "Premium branding solutions that improve trust and recognition.",
    intro: [
      "Branding is more than a logo — it's how your business looks, feels, and is remembered. We build complete identity systems so you look consistent and credible everywhere your brand appears.",
      "From color and typography to stationery and guidelines, we make sure every touchpoint reinforces the same story.",
    ],
    quickPoints: [
      "Full visual identity system",
      "Brand guideline document",
      "Business card & stationery",
    ],
    features: [
      {
        icon: Palette,
        title: "Cohesive Identity",
        desc: "A color palette, typography, and visual language that work together.",
      },
      {
        icon: BookOpen,
        title: "Brand Guidelines",
        desc: "A reference document so your team applies the identity consistently.",
      },
      {
        icon: Fingerprint,
        title: "Distinct Positioning",
        desc: "Visual direction shaped around what actually makes your business different.",
      },
    ],
    included: [
      "Brand strategy and positioning discussion",
      "Logo, color palette, and typography system",
      "Business card and stationery design",
      "Brand guideline document (PDF)",
      "Source files for future use",
    ],
    faqs: [
      {
        q: "Do I need a logo before starting branding?",
        a: "Not necessarily — we can design your logo as part of the branding package, or work with an existing one you already have.",
      },
      {
        q: "What's included in the brand guideline document?",
        a: "Color codes, typography rules, logo usage, spacing, and examples of correct and incorrect usage — so anyone on your team can apply the brand correctly.",
      },
      {
        q: "Can this be used for an existing business, not just a new one?",
        a: "Yes, rebranding an existing business is common — we start by reviewing what's working and what isn't before designing the new direction.",
      },
    ],
  },

  "packaging-design": {
    title: "Packaging Design",
    tagline: "Creative packaging experiences designed for modern products.",
    intro: [
      "Packaging is often the deciding moment — on a shelf or in an unboxing video. We design packaging that looks premium and is built correctly for real production.",
      "We work with your printer's specifications from the start, so what you approve on screen is what actually gets produced.",
    ],
    quickPoints: [
      "Print-ready dielines",
      "3D mockups for approval",
      "Material & finish guidance",
    ],
    features: [
      {
        icon: Package,
        title: "Print-Ready Files",
        desc: "Dielines and mockups prepared to your printer's exact specifications.",
      },
      {
        icon: Box,
        title: "Material Guidance",
        desc: "Recommendations on finishes, stock, and printing methods that fit your budget.",
      },
      {
        icon: Layers3,
        title: "Shelf-Ready Design",
        desc: "Visuals built to stand out in retail shelves and online product listings.",
      },
    ],
    included: [
      "Structural dieline (new or adapted from your existing one)",
      "Front, back, and side panel design",
      "3D mockup renders for approval before print",
      "Print-ready files (CMYK, bleed, and cut marks)",
      "One revision round included",
    ],
    faqs: [
      {
        q: "Do you handle the actual printing?",
        a: "We design and prepare print-ready files. We can recommend printers, but production is typically handled directly by you or your chosen printer.",
      },
      {
        q: "Can you work with a dieline I already have?",
        a: "Yes, if you already have an approved structural dieline from your printer, we'll design around it directly.",
      },
      {
        q: "Do you design for e-commerce packaging too?",
        a: "Yes — mailer boxes, inserts, and unboxing experience elements for D2C and e-commerce brands are part of this service.",
      },
    ],
  },

  "video-editing": {
    title: "Video Editing",
    tagline:
      "Professional editing solutions for social media and marketing content.",
    intro: [
      "Raw footage rarely sells on its own — pacing, color, and sound design are what make people stop scrolling. We edit content built for how people actually watch on social platforms.",
      "Whether it's a single ad or a batch of reels for the month, we work around your content calendar and turnaround needs.",
    ],
    quickPoints: [
      "Reels, ads & promo edits",
      "Color grading & captions",
      "Fast, calendar-based turnaround",
    ],
    features: [
      {
        icon: Film,
        title: "Platform-Ready Cuts",
        desc: "Edited and formatted correctly for Instagram, YouTube, or paid ad placements.",
      },
      {
        icon: Scissors,
        title: "Color & Motion",
        desc: "Color grading, captions, and light motion graphics included in every edit.",
      },
      {
        icon: Video,
        title: "Fast Turnaround",
        desc: "Built to keep pace with weekly or monthly content calendars.",
      },
    ],
    included: [
      "Raw footage review and best-take selection",
      "Editing, pacing, and transitions",
      "Color grading and burned-in captions",
      "Up to 2 revision rounds per video",
      "Delivery in platform-specific formats and sizes",
    ],
    faqs: [
      {
        q: "Do you shoot the footage as well?",
        a: "This service covers editing. If you need filming as well, let us know and we'll discuss what's possible depending on the project.",
      },
      {
        q: "How fast can you turn around a batch of reels?",
        a: "A standard batch (4-6 reels) is typically delivered within 3-5 working days, depending on footage volume and complexity.",
      },
      {
        q: "Can you match our existing content style?",
        a: "Yes — if you already have a visual style or previous edits, we'll match pacing, captions, and color to keep everything consistent.",
      },
    ],
  },

  "social-media-design": {
    title: "Social Media Design",
    tagline: "Engaging creatives designed to improve online presence.",
    intro: [
      "Inconsistent posts make a brand forgettable. We design a repeatable visual system so every post — whether it's a quote, a product shot, or an announcement — instantly looks like you.",
      "We build templates and creatives around a content calendar, not one-off requests, so your feed stays consistent month after month.",
    ],
    quickPoints: [
      "Custom template system",
      "Platform-specific sizing",
      "Monthly batch delivery",
    ],
    features: [
      {
        icon: Layers3,
        title: "Consistent Templates",
        desc: "Reusable post and story templates that match your brand every time.",
      },
      {
        icon: ImageIcon,
        title: "Platform-Specific Sizing",
        desc: "Creatives correctly sized for Instagram, Facebook, and LinkedIn.",
      },
      {
        icon: CalendarDays,
        title: "Monthly Planning",
        desc: "Creatives organized around a content calendar, not scattered one-off posts.",
      },
    ],
    included: [
      "Custom template system for feed posts",
      "Story and carousel design templates",
      "Monthly batch of creatives (based on your plan)",
      "Editable source files (Canva or Figma) on request",
      "Coordination with your content calendar",
    ],
    faqs: [
      {
        q: "How many posts are included per month?",
        a: "This depends on your plan — we'll confirm exact numbers and formats (feed, story, carousel) before starting.",
      },
      {
        q: "Do you also write the captions?",
        a: "Our focus is on design. Captions can be added as an add-on if you'd like copywriting support as well.",
      },
      {
        q: "Can I request edits to the monthly designs?",
        a: "Yes, reasonable revisions are included as part of the monthly batch.",
      },
    ],
  },
};

export default function ServiceDetailPage() {
  const params = useParams();
  const slug = Array.isArray(params?.slug) ? params.slug[0] : params?.slug;
  const service = servicesData[slug];

  const [openFaq, setOpenFaq] = useState(0);

  if (!service) {
    return (
      <div className="flex min-h-screen flex-col items-center justify-center gap-6 bg-[#03111F] text-white">
        <p className="text-white/60">Service Not Found</p>
        <Link
          href="/services"
          className="inline-flex items-center gap-2 rounded-full bg-[#FF6D00] px-6 py-3 text-sm font-semibold text-white transition hover:scale-105"
        >
          View All Services
        </Link>
      </div>
    );
  }

  return (
    <main className="relative overflow-hidden bg-[#03111F]">

      {/* ---------------- HERO ---------------- */}
      <section className="relative overflow-hidden py-18">

        <div className="absolute left-[-120px] top-0 h-[320px] w-[320px] rounded-full bg-[#086ED0]/10 blur-3xl" />
        <div className="absolute bottom-0 right-[-120px] h-[320px] w-[320px] rounded-full bg-[#FF6D00]/10 blur-3xl" />

        <div className="absolute inset-0 opacity-[0.03]">
          <div className="h-full w-full bg-[linear-gradient(to_right,#ffffff_1px,transparent_1px),linear-gradient(to_bottom,#ffffff_1px,transparent_1px)] bg-[size:80px_80px]" />
        </div>

        <div className="relative mx-auto max-w-[1400px] px-6 text-center">

          {/* Breadcrumb */}
          <div className="flex items-center justify-center gap-2 text-xs text-white/40">
            <Link href="/" className="transition hover:text-white/70">
              Home
            </Link>
            <span>/</span>
            <Link href="/services" className="transition hover:text-white/70">
              Services
            </Link>
            <span>/</span>
            <span className="text-white/70">{service.title}</span>
          </div>

          <p className="mt-6 text-xs uppercase tracking-[5px] text-[#FF6D00]">
            Our Service
          </p>

          <h1 className="mx-auto mt-4 max-w-[950px] text-4xl font-black leading-[1.1] text-white sm:text-5xl lg:text-6xl">
            {service.title}
          </h1>

          <p className="mx-auto mt-8 max-w-[750px] text-sm leading-7 text-white/60 sm:text-base">
            {service.tagline}
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

      {/* ---------------- WHY IT MATTERS ---------------- */}
      <section className="pb-24">
        <div className="mx-auto grid max-w-[1400px] gap-14 px-6 lg:grid-cols-2 lg:items-start">

          {/* Left */}
          <div>
            <p className="text-xs uppercase tracking-[5px] text-[#FF6D00]">
              Why It Matters
            </p>

            <h2 className="mt-5 text-3xl font-black leading-[1.1] text-white sm:text-4xl">
              Why Your Business Needs
              <span className="text-[#086ED0]"> {service.title} </span>
            </h2>

            {service.intro.map((para, i) => (
              <p
                key={i}
                className="mt-6 text-sm leading-7 text-white/60 sm:text-base"
              >
                {para}
              </p>
            ))}

            <div className="mt-8 space-y-3">
              {service.quickPoints.map((point, i) => (
                <div
                  key={i}
                  className="flex items-center gap-3 rounded-xl border border-white/10 bg-white/[0.03] px-5 py-3.5"
                >
                  <Check className="shrink-0 text-[#FF6D00]" size={16} />
                  <p className="text-sm text-white/70">{point}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Right — service-specific feature cards */}
          <div className="grid gap-5 sm:grid-cols-1">
            {service.features.map((feature, i) => {
              const Icon = feature.icon;
              return (
                <div
                  key={i}
                  className="group relative overflow-hidden rounded-[28px] border border-white/10 bg-white/[0.03] p-7 backdrop-blur-xl transition duration-500 hover:border-[#086ED0]/40"
                >
                  <div className="absolute inset-0 bg-gradient-to-br from-[#086ED0]/10 to-[#FF6D00]/5 opacity-0 transition duration-500 group-hover:opacity-100" />

                  <div className="relative flex items-start gap-5">
                    <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl border border-white/10 bg-white/5 text-[#FF6D00]">
                      <Icon size={22} />
                    </div>

                    <div>
                      <h3 className="text-lg font-black text-white">
                        {feature.title}
                      </h3>
                      <p className="mt-2 text-sm leading-6 text-white/60">
                        {feature.desc}
                      </p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ---------------- WHAT'S INCLUDED ---------------- */}
      <section className="pb-24">
        <div className="mx-auto max-w-[1400px] px-6">
          <div className="overflow-hidden rounded-[40px] border border-white/10 bg-white/[0.03] p-10 backdrop-blur-xl sm:p-14">

            <p className="text-xs uppercase tracking-[5px] text-[#FF6D00]">
              What&apos;s Included
            </p>

            <h2 className="mt-5 max-w-[600px] text-3xl font-black leading-[1.1] text-white sm:text-4xl">
              Everything You Get With This Service
            </h2>

            <div className="mt-10 grid gap-4 sm:grid-cols-2">
              {service.included.map((item, i) => (
                <div key={i} className="flex items-start gap-3">
                  <div className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-[#086ED0]/15 text-[#086ED0]">
                    <Check size={14} />
                  </div>
                  <p className="text-sm leading-6 text-white/70 sm:text-[15px]">
                    {item}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ---------------- TRUST STATS ---------------- */}
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
                  <h3 className="text-4xl font-black text-[#086ED0]">50+</h3>
                  <p className="mt-2 text-sm text-white/60">
                    Projects Completed
                  </p>
                </div>

                <div>
                  <h3 className="text-4xl font-black text-[#FF6D00]">100%</h3>
                  <p className="mt-2 text-sm text-white/60">
                    Client Satisfaction
                  </p>
                </div>

                <div>
                  <h3 className="text-4xl font-black text-white">24/7</h3>
                  <p className="mt-2 text-sm text-white/60">
                    Client Support
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ---------------- FAQ — interactive accordion ---------------- */}
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

          <div className="mt-14 space-y-4">
            {service.faqs.map((faq, i) => {
              const isOpen = openFaq === i;
              return (
                <div
                  key={i}
                  className="overflow-hidden rounded-[24px] border border-white/10 bg-white/[0.03] transition duration-300"
                >
                  <button
                    onClick={() => setOpenFaq(isOpen ? -1 : i)}
                    className="flex w-full items-center justify-between gap-4 p-6 text-left"
                  >
                    <h3 className="text-base font-bold text-white sm:text-lg">
                      {faq.q}
                    </h3>
                    <ChevronDown
                      size={20}
                      className={`shrink-0 text-[#FF6D00] transition-transform duration-300 ${
                        isOpen ? "rotate-180" : ""
                      }`}
                    />
                  </button>

                  <div
                    className={`grid transition-all duration-300 ease-in-out ${
                      isOpen
                        ? "grid-rows-[1fr] opacity-100"
                        : "grid-rows-[0fr] opacity-0"
                    }`}
                  >
                    <div className="overflow-hidden">
                      <p className="px-6 pb-6 text-sm leading-7 text-white/60">
                        {faq.a}
                      </p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ---------------- CONTACT FORM ---------------- */}
      <section className="pb-24">
        <div className="mx-auto max-w-[1000px] px-6">
          <div className="overflow-hidden rounded-[40px] border border-white/10 bg-white/[0.03] p-10 backdrop-blur-xl">

            <div className="text-center">
              <p className="text-xs uppercase tracking-[5px] text-[#FF6D00]">
                Contact Us
              </p>
              <h2 className="mt-5 text-3xl font-black text-white sm:text-4xl">
                Let&apos;s Discuss Your Project
              </h2>
            </div>

            <form className="mt-14 grid gap-6">
              <input
                type="text"
                placeholder="Your Name"
                className="h-14 rounded-2xl border border-white/10 bg-white/[0.03] px-5 text-sm text-white outline-none transition focus:border-[#086ED0]/40 placeholder:text-white/40"
              />

              <input
                type="email"
                placeholder="Email Address"
                className="h-14 rounded-2xl border border-white/10 bg-white/[0.03] px-5 text-sm text-white outline-none transition focus:border-[#086ED0]/40 placeholder:text-white/40"
              />

              <textarea
                rows={6}
                placeholder="Tell us about your project"
                className="rounded-2xl border border-white/10 bg-white/[0.03] p-5 text-sm text-white outline-none transition focus:border-[#086ED0]/40 placeholder:text-white/40"
              />

              <button
                type="submit"
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