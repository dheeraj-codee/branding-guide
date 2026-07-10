"use client";

import { useState } from "react";
import { useParams } from "next/navigation";
import Image from "next/image";
import { projects } from "@/data/portfolio-data"; // apne data file ka sahi path daalo

export default function ProjectDetailPage() {
  const { slug } = useParams();
  const project = projects.find((p) => p.slug === slug);

  const [activeImg, setActiveImg] = useState(project?.images?.[0]);

  if (!project) {
    return (
      <main className="flex min-h-[60vh] items-center justify-center bg-[#03111F]">
        <p className="text-white/60">Project not found.</p>
      </main>
    );
  }

  return (
    <main className="bg-[#03111F] py-16">
      <div className="mx-auto max-w-[900px] px-6">

        {/* Main image / video */}
        <div className="relative aspect-[4/3] w-full overflow-hidden rounded-2xl border border-white/10">
          {activeImg?.endsWith(".mp4") ? (
            <video
              key={activeImg}
              src={activeImg}
              controls
              className="h-full w-full object-cover"
            />
          ) : (
            <Image src={activeImg} alt={project.title} fill className="object-cover" />
          )}
        </div>

        {/* Thumbnail slider */}
        {project.images.length > 1 && (
          <div className="no-scrollbar mt-4 flex gap-3 overflow-x-auto">
            {project.images.map((img) => (
              <button
                key={img}
                onClick={() => setActiveImg(img)}
                className={`relative h-20 w-20 shrink-0 overflow-hidden rounded-lg border-2 transition ${
                  activeImg === img ? "border-[#FF6D00]" : "border-white/10"
                }`}
              >
                {img.endsWith(".mp4") ? (
                  <video src={img} className="h-full w-full object-cover" muted />
                ) : (
                  <Image src={img} alt="" fill className="object-cover" />
                )}
              </button>
            ))}
          </div>
        )}

        <p className="mt-6 text-xs font-medium uppercase tracking-[3px] text-[#FF6D00]">
          {project.category}
        </p>
        <h1 className="mt-2 text-2xl font-black text-white sm:text-3xl">
          {project.title}
        </h1>
        <p className="mt-3 text-white/60">{project.desc}</p>

        {project.liveUrl && (
          <a
            href={project.liveUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-6 inline-block rounded-full bg-[#FF6D00] px-6 py-3 text-sm font-medium text-white"
          >
            Visit Live Site
          </a>
        )}
      </div>
    </main>
  );
}