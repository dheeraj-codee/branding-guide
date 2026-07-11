"use client";

// One distinct hand-built illustration per service — this is what was missing
// from the page. Pure SVG, no external images, so it loads instantly and
// scales cleanly on every screen size.

function WebBanner() {
  return (
    <svg viewBox="0 0 480 360" className="h-full w-full">
      <rect x="40" y="40" width="400" height="260" rx="18" fill="#0A1D30" stroke="#ffffff1a" />
      <rect x="40" y="40" width="400" height="36" rx="18" fill="#0F2A44" />
      <circle cx="62" cy="58" r="5" fill="#FF6D00" />
      <circle cx="80" cy="58" r="5" fill="#086ED0" />
      <circle cx="98" cy="58" r="5" fill="#ffffff40" />
      <rect x="64" y="96" width="150" height="14" rx="4" fill="#086ED0" />
      <rect x="64" y="122" width="230" height="10" rx="3" fill="#ffffff33" />
      <rect x="64" y="142" width="180" height="10" rx="3" fill="#ffffff26" />
      <rect x="64" y="172" width="110" height="34" rx="8" fill="#FF6D00" />
      <rect x="270" y="96" width="130" height="110" rx="12" fill="#086ED0" opacity="0.15" stroke="#086ED0" strokeOpacity="0.4" />
      <rect x="64" y="222" width="352" height="1" fill="#ffffff1a" />
      <rect x="64" y="240" width="90" height="8" rx="3" fill="#ffffff26" />
      <rect x="170" y="240" width="90" height="8" rx="3" fill="#ffffff26" />
      <rect x="276" y="240" width="90" height="8" rx="3" fill="#ffffff26" />
      <circle cx="410" cy="70" r="26" fill="#FF6D00" opacity="0.12" />
    </svg>
  );
}

function LogoBanner() {
  return (
    <svg viewBox="0 0 480 360" className="h-full w-full">
      <rect x="150" y="60" width="180" height="180" rx="20" fill="#0A1D30" stroke="#ffffff1a" />
      <path d="M240 100 L280 150 L240 200 L200 150 Z" fill="#086ED0" opacity="0.85" />
      <circle cx="240" cy="150" r="18" fill="#FF6D00" />
      <g transform="translate(60,240)">
        <circle cx="0" cy="0" r="22" fill="#086ED0" />
        <circle cx="56" cy="0" r="22" fill="#FF6D00" />
        <circle cx="112" cy="0" r="22" fill="#ffffff" opacity="0.9" />
        <circle cx="168" cy="0" r="22" fill="#0A1D30" stroke="#ffffff33" />
      </g>
      <rect x="330" y="60" width="90" height="26" rx="6" fill="#ffffff0d" stroke="#ffffff26" />
      <line x1="120" y1="150" x2="150" y2="150" stroke="#ffffff26" strokeWidth="2" strokeDasharray="4 4" />
      <line x1="330" y1="150" x2="360" y2="150" stroke="#ffffff26" strokeWidth="2" strokeDasharray="4 4" />
    </svg>
  );
}

function BrandingBanner() {
  return (
    <svg viewBox="0 0 480 360" className="h-full w-full">
      <rect x="70" y="90" width="130" height="170" rx="14" fill="#086ED0" transform="rotate(-6 135 175)" opacity="0.9" />
      <rect x="180" y="70" width="130" height="170" rx="14" fill="#0A1D30" stroke="#ffffff26" />
      <rect x="300" y="100" width="110" height="150" rx="14" fill="#FF6D00" transform="rotate(7 355 175)" opacity="0.85" />
      <circle cx="245" cy="115" r="16" fill="#ffffff" opacity="0.9" />
      <rect x="205" y="150" width="80" height="8" rx="3" fill="#ffffff40" />
      <rect x="205" y="168" width="60" height="8" rx="3" fill="#ffffff26" />
      <rect x="205" y="200" width="70" height="24" rx="6" fill="#ffffff1a" />
    </svg>
  );
}

function PackagingBanner() {
  return (
    <svg viewBox="0 0 480 360" className="h-full w-full">
      <path d="M240 60 L340 105 L340 235 L240 280 L140 235 L140 105 Z" fill="#0A1D30" stroke="#ffffff26" />
      <path d="M240 60 L340 105 L240 150 L140 105 Z" fill="#086ED0" opacity="0.9" />
      <path d="M240 150 L340 105 L340 235 L240 280 Z" fill="#0F2A44" />
      <path d="M240 150 L140 105 L140 235 L240 280 Z" fill="#132E4B" />
      <rect x="205" y="175" width="70" height="26" rx="6" fill="#FF6D00" />
      <circle cx="240" cy="40" r="14" fill="#FF6D00" opacity="0.5" />
      <circle cx="380" cy="200" r="10" fill="#086ED0" opacity="0.5" />
      <circle cx="100" cy="260" r="10" fill="#ffffff" opacity="0.2" />
    </svg>
  );
}

function VideoBanner() {
  return (
    <svg viewBox="0 0 480 360" className="h-full w-full">
      <rect x="60" y="80" width="360" height="200" rx="16" fill="#0A1D30" stroke="#ffffff1a" />
      <path d="M220 140 L300 180 L220 220 Z" fill="#FF6D00" />
      <circle cx="240" cy="180" r="70" fill="none" stroke="#086ED0" strokeOpacity="0.4" strokeWidth="2" />
      <rect x="60" y="80" width="360" height="34" rx="16" fill="#0F2A44" />
      <rect x="76" y="94" width="12" height="6" fill="#FF6D00" />
      <rect x="94" y="94" width="12" height="6" fill="#086ED0" />
      <rect x="110" y="130" width="24" height="120" fill="#ffffff08" />
      <rect x="336" y="130" width="24" height="120" fill="#ffffff08" />
      <rect x="120" y="150" width="4" height="16" fill="#ffffff40" />
      <rect x="120" y="180" width="4" height="30" fill="#ffffff40" />
      <rect x="346" y="160" width="4" height="24" fill="#ffffff40" />
      <rect x="346" y="200" width="4" height="14" fill="#ffffff40" />
    </svg>
  );
}

function SocialBanner() {
  return (
    <svg viewBox="0 0 480 360" className="h-full w-full">
      <rect x="170" y="50" width="140" height="260" rx="24" fill="#0A1D30" stroke="#ffffff26" />
      <rect x="186" y="80" width="108" height="108" rx="10" fill="#086ED0" opacity="0.85" />
      <circle cx="240" cy="216" r="10" fill="#FF6D00" />
      <rect x="200" y="236" width="80" height="8" rx="3" fill="#ffffff33" />
      <rect x="60" y="120" width="90" height="90" rx="14" fill="#0F2A44" stroke="#ffffff1a" />
      <rect x="330" y="150" width="90" height="90" rx="14" fill="#0F2A44" stroke="#ffffff1a" />
      <circle cx="105" cy="165" r="18" fill="#FF6D00" opacity="0.7" />
      <circle cx="375" cy="195" r="18" fill="#086ED0" opacity="0.7" />
    </svg>
  );
}

const banners = {
  web: WebBanner,
  logo: LogoBanner,
  branding: BrandingBanner,
  packaging: PackagingBanner,
  video: VideoBanner,
  social: SocialBanner,
};

export default function ServiceBanner({ type }) {
  const Banner = banners[type] || WebBanner;
  return (
    <div className="relative mx-auto aspect-[4/3] w-full max-w-[480px]">
      <div className="absolute -inset-6 rounded-[40px] bg-gradient-to-br from-[#086ED0]/10 via-transparent to-[#FF6D00]/10 blur-2xl" />
      <div className="relative h-full w-full">
        <Banner />
      </div>
    </div>
  );
}