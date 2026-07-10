"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import CtaBanner from "@/components/CtaBanner";
import { projects } from "@/data/portfolio-data";

export default function PortfolioPage() {
  const categories = Array.from(new Set(projects.map((p) => p.category)));

  const [activeCategory, setActiveCategory] = useState(categories[0]);

  const filteredProjects = projects.filter((p) => p.category === activeCategory);

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

          <div className="grid gap-8 md:grid-cols-2 xl:grid-cols-3">
            {filteredProjects.map((project) => (
              <Link
                key={project.slug}
                href={`/portfolio/${project.slug}`}
                className="group relative overflow-hidden rounded-[28px] border border-white/10 bg-white/[0.03] backdrop-blur-xl transition duration-500 hover:-translate-y-2 hover:border-[#086ED0]/40"
              >

                {/* Image — clean, no clutter on top */}
                <div className="relative aspect-[4/3] w-full overflow-hidden">
                  <Image
                    src={project.images[0]}
                    alt={project.title}
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1280px) 50vw, 33vw"
                    className="object-cover transition duration-700 group-hover:scale-105"
                  />

                  {/* Arrow — only appears on hover, minimal */}
                  <div className="absolute right-4 top-4 flex h-10 w-10 items-center justify-center rounded-full border border-white/10 bg-black/40 text-white opacity-0 backdrop-blur-xl transition duration-300 group-hover:opacity-100">
                    <ArrowUpRight size={16} />
                  </div>
                </div>

                {/* Content — simple, below the image */}
                <div className="relative p-6">
                  <p className="text-xs font-medium uppercase tracking-[3px] text-[#FF6D00]">
                    {project.category}
                  </p>

                  <h3 className="mt-3 text-lg font-black leading-snug text-white sm:text-xl">
                    {project.title}
                  </h3>

                  <p className="mt-3 text-sm leading-6 text-white/60">
                    {project.desc}
                  </p>
                </div>
              </Link>
            ))}
          </div>

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