"use client";

import { useMemo, useRef, useState } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight, Globe, Play, Volume2, VolumeX } from "lucide-react";
import CtaBanner from "@/components/CtaBanner";
import { projects } from "@/data/portfolio-data";

// Fixed list (not derived from data) so every tab always shows, even one
// that currently has zero projects in it — like Logo Design right now.
const categories = [
  "Logo Design",
  "Branding Design",
  "Website Development",
  "Video Editing",
  "Packaging Design",
  "Social Media Design",
];

export default function PortfolioPage() {
  const router = useRouter();
  const searchParams = useSearchParams();

  // URL-driven filter — fixes the "back button lands on wrong category" bug.
  // The active tab now lives in the URL, not component state, so browser
  // back/forward always restores the category you were actually looking at.
  const activeCategory = searchParams.get("category") || categories[0];

  const filteredProjects = useMemo(
    () => projects.filter((p) => p.category === activeCategory),
    [activeCategory, projects]
  );

  function setActiveCategory(cat) {
    router.push(`/portfolio?category=${encodeURIComponent(cat)}`);
  }

  return (
    <main className="relative overflow-hidden bg-[#03111F]">

      {/* ---------------- Hero Section ---------------- */}
      <section className="relative overflow-hidden py-12">

        <div className="absolute left-[-120px] top-0 h-[320px] w-[320px] rounded-full bg-[#086ED0]/10 blur-3xl" />
        <div className="absolute bottom-0 right-[-120px] h-[320px] w-[320px] rounded-full bg-[#FF6D00]/10 blur-3xl" />

        <div className="absolute inset-0 opacity-[0.03]">
          <div className="h-full w-full bg-[linear-gradient(to_right,#ffffff_1px,transparent_1px),linear-gradient(to_bottom,#ffffff_1px,transparent_1px)] bg-[size:80px_80px]" />
        </div>

        <div className="relative mx-auto max-w-[1400px] px-6 text-center">

          <p className="text-xs font-medium uppercase tracking-[5px] text-[#FF6D00] sm:text-sm">
            Our Portfolio
          </p>

          <h1 className="mx-auto mt-6 max-w-[950px] text-3xl font-black leading-[1.1] text-white sm:text-4xl lg:text-5xl">
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

      {/* ---------------- Filter Tabs ---------------- */}
      <section className="relative pb-4">
        <div className="mx-auto max-w-[1400px] px-6">
          <div className="no-scrollbar flex justify-center gap-3 overflow-x-auto pb-2">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`shrink-0 whitespace-nowrap rounded-full border px-5 py-2.5 text-sm font-medium transition-all duration-300 ${
                  activeCategory === cat
                    ? "border-[#FF6D00] bg-[#FF6D00] text-white"
                    : "border-white/10 bg-white/[0.03] text-white/60 hover:border-white/20 hover:text-white"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* ---------------- Portfolio Grid ---------------- */}
      <section className="relative pb-12">
        <div className="mx-auto max-w-[1400px] px-6">

          {activeCategory === "Video Editing" ? (
            <div className="grid grid-cols-2 gap-4 sm:grid-cols-4">
              {filteredProjects.map((project) => (
                <VideoReelCard key={project.slug} project={project} />
              ))}
            </div>
          ) : (
            <div className="grid gap-8 md:grid-cols-2 xl:grid-cols-3">
              {filteredProjects.map((project) => (
                <ProjectCard key={project.slug} project={project} />
              ))}
            </div>
          )}

          {filteredProjects.length === 0 && (
            <p className="mt-16 text-center text-sm text-white/50">
              No projects found in this category yet.
            </p>
          )}

          {/* Bottom CTA */}
          <div className="mt-12">
            <CtaBanner />
          </div>
        </div>
      </section>
    </main>
  );
}

function ProjectCard({ project }) {
  // Website Development — no gallery, whole card opens the live site.
  if (project.type === "website") {
    return (
      <a
        href={project.liveUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="group relative overflow-hidden rounded-[28px] border border-white/10 bg-white/[0.03] backdrop-blur-xl transition duration-500 hover:-translate-y-2 hover:border-[#086ED0]/40"
      >
        <div className="relative flex aspect-[4/3] w-full items-center justify-center overflow-hidden bg-gradient-to-br from-[#086ED0]/15 to-[#FF6D00]/10">
          <div className="flex h-16 w-16 items-center justify-center rounded-2xl border border-white/10 bg-white/5 text-[#086ED0]">
            <Globe size={28} />
          </div>
          <div className="absolute right-4 top-4 flex h-10 w-10 items-center justify-center rounded-full border border-white/10 bg-black/40 text-white opacity-0 backdrop-blur-xl transition duration-300 group-hover:opacity-100">
            <ArrowUpRight size={16} />
          </div>
        </div>

        <div className="relative p-6">
          <p className="text-xs font-medium uppercase tracking-[3px] text-[#FF6D00]">
            {project.category}
          </p>
          <h3 className="mt-3 text-lg font-black leading-snug text-white sm:text-xl">
            {project.title}
          </h3>
          <p className="mt-3 text-sm leading-6 text-white/60">{project.desc}</p>
          <span className="mt-4 inline-flex items-center gap-2 text-sm font-semibold text-[#FF6D00]">
            Visit Live Site
            <ArrowUpRight size={14} className="transition group-hover:translate-x-1 group-hover:-translate-y-1" />
          </span>
        </div>
      </a>
    );
  }

  // Video Editing — no source yet, show a disabled "coming soon" card.
  if (project.type === "video" && (!project.images || project.images.length === 0)) {
    return (
      <div className="relative overflow-hidden rounded-[28px] border border-white/10 bg-white/[0.02] opacity-50">
        <div className="relative flex aspect-[4/3] w-full items-center justify-center bg-white/[0.02]">
          <Play size={28} className="text-white/30" />
        </div>
        <div className="relative p-6">
          <p className="text-xs font-medium uppercase tracking-[3px] text-white/40">
            {project.category}
          </p>
          <h3 className="mt-3 text-lg font-black leading-snug text-white/60 sm:text-xl">
            {project.title}
          </h3>
          <p className="mt-3 text-sm leading-6 text-white/40">Coming soon</p>
        </div>
      </div>
    );
  }

  // Video Editing — has a source, play it as a muted looping thumbnail.
  // (Video Editing normally renders via VideoReelCard in its own 4-col grid,
  // this branch is just a safety fallback.)
  if (project.type === "video") {
    return (
      <Link
        href={`/portfolio/${project.slug}`}
        className="group relative overflow-hidden rounded-[28px] border border-white/10 bg-white/[0.03] backdrop-blur-xl transition duration-500 hover:-translate-y-2 hover:border-[#086ED0]/40"
      >
        <div className="relative aspect-[4/3] w-full overflow-hidden bg-black">
          <video
            src={project.images[0]}
            className="h-full w-full object-cover"
            muted
            loop
            playsInline
            autoPlay
            preload="metadata"
          />
        </div>
        <div className="relative p-6">
          <p className="text-xs font-medium uppercase tracking-[3px] text-[#FF6D00]">
            {project.category}
          </p>
          <h3 className="mt-3 text-lg font-black leading-snug text-white sm:text-xl">
            {project.title}
          </h3>
        </div>
      </Link>
    );
  }

  // Default — image gallery categories (Logo, Branding, Packaging, Social Media).
  return (
    <Link
      href={`/portfolio/${project.slug}`}
      className="group relative overflow-hidden rounded-[28px] border border-white/10 bg-white/[0.03] backdrop-blur-xl transition duration-500 hover:-translate-y-2 hover:border-[#086ED0]/40"
    >
      <div className="relative aspect-[4/3] w-full overflow-hidden">
        <Image
          src={project.images[0]}
          alt={project.title}
          fill
          sizes="(max-width: 768px) 100vw, (max-width: 1280px) 50vw, 33vw"
          className="object-cover transition duration-700 group-hover:scale-105"
        />
        <div className="absolute right-4 top-4 flex h-10 w-10 items-center justify-center rounded-full border border-white/10 bg-black/40 text-white opacity-0 backdrop-blur-xl transition duration-300 group-hover:opacity-100">
          <ArrowUpRight size={16} />
        </div>
      </div>

      <div className="relative p-6">
        <p className="text-xs font-medium uppercase tracking-[3px] text-[#FF6D00]">
          {project.category}
        </p>
        <h3 className="mt-3 text-lg font-black leading-snug text-white sm:text-xl">
          {project.title}
        </h3>
        <p className="mt-3 text-sm leading-6 text-white/60">{project.desc}</p>
      </div>
    </Link>
  );
}

function VideoReelCard({ project }) {
  const videoRef = useRef(null);
  const [muted, setMuted] = useState(true);

  // No source yet — disabled "coming soon" tile, keeps the grid at 4-per-row
  // even before all 8 videos are ready.
  if (!project.images || project.images.length === 0) {
    return (
      <div className="relative flex aspect-[3/4] items-center justify-center overflow-hidden rounded-[20px] border border-white/10 bg-white/[0.02] opacity-50">
        <Play size={24} className="text-white/30" />
        <p className="absolute bottom-4 left-4 right-4 text-center text-xs text-white/40">
          Coming soon
        </p>
      </div>
    );
  }

  function toggleMute(e) {
    e.preventDefault();
    e.stopPropagation();
    if (videoRef.current) {
      videoRef.current.muted = !videoRef.current.muted;
      setMuted(videoRef.current.muted);
    }
  }

  return (
    <Link
      href={`/portfolio/${project.slug}`}
      className="group relative block aspect-[3/4] overflow-hidden rounded-[20px] border border-white/10 bg-black transition duration-500 hover:-translate-y-1 hover:border-[#086ED0]/40"
    >
      <video
        ref={videoRef}
        src={project.images[0]}
        className="h-full w-full object-cover"
        muted
        loop
        playsInline
        autoPlay
        preload="metadata"
      />

      <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent" />

      {/* Mute/unmute toggle — stops the click from also navigating */}
      <div
        role="button"
        tabIndex={0}
        onClick={toggleMute}
        onKeyDown={(e) => e.key === "Enter" && toggleMute(e)}
        className="absolute right-3 top-3 flex h-9 w-9 items-center justify-center rounded-full border border-white/10 bg-black/50 text-white backdrop-blur-xl transition hover:bg-[#FF6D00]"
      >
        {muted ? <VolumeX size={16} /> : <Volume2 size={16} />}
      </div>

      <div className="absolute bottom-3 left-3 right-3">
        <p className="text-[11px] uppercase tracking-[2px] text-[#FF6D00]">
          {project.category}
        </p>
        <h3 className="mt-1 text-sm font-bold text-white">{project.title}</h3>
      </div>
    </Link>
  );
}