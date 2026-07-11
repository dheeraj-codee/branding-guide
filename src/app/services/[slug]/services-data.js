import {
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

// Shared 4-step process — same real workflow across every service,
// so the numbering actually means something instead of decorating the page.
export const processSteps = [
  {
    step: "01",
    title: "Discovery Call",
    desc: "We learn your business, audience, and goals before touching a single design tool.",
  },
  {
    step: "02",
    title: "Strategy & Concept",
    desc: "We map direction, references, and scope so there are no surprises mid-project.",
  },
  {
    step: "03",
    title: "Design & Build",
    desc: "We design in rounds, share progress early, and refine based on your feedback.",
  },
  {
    step: "04",
    title: "Delivery & Support",
    desc: "You get final files, source assets, and support after handoff — not radio silence.",
  },
];

export const servicesData = {
  "website-development": {
    title: "Website Development",
    tagline:
      "Modern, responsive, and high-performance websites crafted for businesses and brands.",
    metaTitle: "Website Development Company in Ajmer, Rajasthan",
    metaDescription:
      "Custom Next.js and React website development in Ajmer, Rajasthan. Fast, mobile-first, SEO-ready websites built for businesses that want to grow online.",
    keywords: [
      "website development Ajmer",
      "Next.js developer Rajasthan",
      "React website design company",
      "business website development India",
      "responsive website design Ajmer",
    ],
    banner: "web",
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
      "Google Search Console & Analytics setup",
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
    metaTitle: "Logo Design Services in Ajmer, Rajasthan",
    metaDescription:
      "Professional logo design in Ajmer, Rajasthan. Original concepts, unlimited creativity, and full vector file delivery for businesses that want to stand out.",
    keywords: [
      "logo design Ajmer",
      "logo designer Rajasthan",
      "custom logo design company",
      "brand mark design India",
      "professional logo design agency",
    ],
    banner: "logo",
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
      "Favicon and social profile picture versions",
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
    metaTitle: "Branding & Visual Identity Design in Ajmer, Rajasthan",
    metaDescription:
      "Complete brand identity design in Ajmer, Rajasthan — logo, color system, typography, stationery, and brand guidelines for businesses that want to look consistent everywhere.",
    keywords: [
      "branding agency Ajmer",
      "brand identity design Rajasthan",
      "visual identity design company",
      "corporate branding services India",
      "brand guidelines design",
    ],
    banner: "branding",
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
      "Social media profile & cover assets",
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
    metaTitle: "Packaging Design Services in Ajmer, Rajasthan",
    metaDescription:
      "Print-ready packaging design in Ajmer, Rajasthan — dielines, 3D mockups, and shelf-ready structures for D2C, retail, and e-commerce brands.",
    keywords: [
      "packaging design Ajmer",
      "product packaging design Rajasthan",
      "dieline design company",
      "box packaging design agency",
      "e-commerce packaging design India",
    ],
    banner: "packaging",
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
      "Printer coordination and file handoff support",
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
    metaTitle: "Video Editing Services in Ajmer, Rajasthan",
    metaDescription:
      "Professional video editing in Ajmer, Rajasthan for reels, ads, and promo content — color grading, captions, and fast turnaround for social media and marketing.",
    keywords: [
      "video editing services Ajmer",
      "reels editing Rajasthan",
      "social media video editing agency",
      "ad video editing company India",
      "content editing for Instagram",
    ],
    banner: "video",
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
      "Royalty-free background music and sound design",
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
    metaTitle: "Social Media Design Services in Ajmer, Rajasthan",
    metaDescription:
      "Social media design services in Ajmer, Rajasthan — custom templates, feed and story creatives, and monthly content batches for consistent brand presence.",
    keywords: [
      "social media design Ajmer",
      "social media creatives Rajasthan",
      "Instagram post design agency",
      "social media graphic design company India",
      "monthly content design service",
    ],
    banner: "social",
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
      "Highlight covers and profile grid preview",
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