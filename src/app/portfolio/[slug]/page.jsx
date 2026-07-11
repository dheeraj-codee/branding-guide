"use client";

import { useState, useRef, useEffect } from "react";
import { useParams } from "next/navigation";
import Link from "next/link";
import { ArrowLeft, ExternalLink } from "lucide-react";
import { projects } from "@/data/portfolio-data"; // apne data file ka sahi path daalo

export default function ProjectDetailPage() {
  const { slug } = useParams();
  const project = projects.find((p) => p.slug === slug);

  const [activeImg, setActiveImg] = useState(project?.images?.[0]);
  const scrollRef = useRef(null);

  // Re-sync activeImg whenever the route's slug changes. Without this,
  // navigating client-side from one project straight to another (via Link,
  // no full page reload) can leave the previous project's image/state
  // showing even though the URL and title have already updated — which
  // looks exactly like "clicking card A opened card B's page".
  useEffect(() => {
    setActiveImg(project?.images?.[0]);
  }, [slug, project]);

  // Scroll-priority: no matter where on the page the person scrolls, the
  // left panel gets the scroll first (as long as it has room left to move).
  // Only once it's fully scrolled does the wheel event fall through to a
  // normal page scroll. This runs on desktop widths only (lg breakpoint).
  useEffect(() => {
    function handleWheel(e) {
      if (window.innerWidth < 1024) return;
      const el = scrollRef.current;
      if (!el) return;

      const { scrollTop, scrollHeight, clientHeight } = el;
      const atTop = scrollTop <= 0;
      const atBottom = scrollTop + clientHeight >= scrollHeight - 1;

      if (e.deltaY > 0 && !atBottom) {
        e.preventDefault();
        el.scrollTop += e.deltaY;
      } else if (e.deltaY < 0 && !atTop) {
        e.preventDefault();
        el.scrollTop += e.deltaY;
      }
      // else: left panel has nothing left to scroll in that direction,
      // so we don't preventDefault — the page scrolls normally instead.
    }

    window.addEventListener("wheel", handleWheel, { passive: false });
    return () => window.removeEventListener("wheel", handleWheel);
  }, []);

  if (!project) {
    return (
      <main className="flex min-h-[60vh] items-center justify-center bg-[#03111F]">
        <p className="text-white/60">Project not found.</p>
      </main>
    );
  }

  const isVideo = (src) => src?.endsWith(".mp4");

  // "Archi — Social Media Creatives" -> client name "Archi"
  const clientName = project.title.split("—")[0].trim();

  return (
    <main className="relative bg-[#03111F] py-12">
      {/* Decorative glows isolated in their own clipped layer — overflow-hidden
          directly on <main> would silently break the layout below, so it
          lives in its own wrapper instead. */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="absolute left-[-100px] top-0 h-[280px] w-[280px] rounded-full bg-[#086ED0]/10 blur-3xl" />
        <div className="absolute bottom-0 right-[-100px] h-[280px] w-[280px] rounded-full bg-[#FF6D00]/10 blur-3xl" />
      </div>

      <div className="relative mx-auto max-w-[1600px] px-6">
        <Link
          href={`/portfolio?category=${encodeURIComponent(project.category)}`}
          className="inline-flex items-center gap-2 text-sm text-white/60 transition hover:text-white"
        >
          <ArrowLeft size={16} />
          Back to {project.category}
        </Link>

        <div className="mt-8 grid gap-8 lg:grid-cols-[280px_1fr] lg:h-[calc(100vh-120px)]">
          {/* LEFT — card treatment, scrollbar hidden visually (still
              functional — the wheel-priority JS above and the bottom fade
              are the scroll affordance instead of a visible bar) */}
          <div className="relative order-2 min-w-0 overflow-hidden rounded-[24px] border border-white/10 bg-white/[0.03] lg:order-1 lg:h-full lg:min-h-0">
            <div
              ref={scrollRef}
              className="portfolio-scroll p-6 lg:h-full lg:min-h-0 lg:overflow-y-auto"
            >
              <p className="text-xs font-medium uppercase tracking-[3px] text-[#FF6D00]">
                {project.category}
              </p>
              <h1 className="mt-2 text-2xl font-black text-white">{clientName}</h1>
              <p className="mt-1 text-sm text-white/40">{project.title}</p>
              <p className="mt-4 text-sm leading-6 text-white/60">{project.desc}</p>

              {project.liveUrl && (
                <a
                  href={project.liveUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-5 inline-flex items-center gap-2 rounded-full bg-[#FF6D00] px-6 py-3 text-sm font-semibold text-white transition hover:scale-105"
                >
                  Visit Live Site
                  <ExternalLink size={16} />
                </a>
              )}

              {/* Thumbnails — 2-col on mobile, single vertical column on desktop */}
              {project.images?.length > 1 && (
                <div className="mt-6 grid grid-cols-4 gap-3 pb-6 lg:grid-cols-2">
                  {project.images.map((img, i) => (
                    <button
                      key={img + i}
                      onClick={() => setActiveImg(img)}
                      className={`relative aspect-square overflow-hidden rounded-lg border-2 transition ${
                        activeImg === img
                          ? "border-[#FF6D00]"
                          : "border-white/10 hover:border-white/30"
                      }`}
                    >
                      {isVideo(img) ? (
                        <video src={img} className="h-full w-full object-cover" muted />
                      ) : (
                        <img src={img} alt="" className="h-full w-full object-cover" />
                      )}
                    </button>
                  ))}
                </div>
              )}
            </div>

            {/* Fade hint at the bottom edge — now the main scroll affordance
                since the scrollbar itself is hidden */}
            <div className="pointer-events-none absolute inset-x-0 bottom-0 hidden h-14 bg-gradient-to-t from-white/[0.03] to-transparent lg:block" />
          </div>

          {/* RIGHT — no border/outline anymore (just a soft rounded corner),
              and this column now gets much more width since the overall
              page is wider (1600px) and the left column is narrower (280px) */}
          <div className="order-1 flex aspect-[3/4] w-full min-w-0 items-center justify-center lg:order-2 lg:aspect-auto lg:h-full lg:min-h-0">
            {isVideo(activeImg) ? (
              <video
                key={activeImg}
                src={activeImg}
                controls
                autoPlay
                muted
                className="h-full w-full rounded-xl object-contain"
              />
            ) : (
              <img
                key={activeImg}
                src={activeImg}
                alt={project.title}
                className="h-full w-full rounded-xl object-contain"
              />
            )}
          </div>
        </div>
      </div>

      {/* Left panel scrollbar hidden across browsers (functionality stays,
          just no visible bar) */}
      <style jsx global>{`
        .portfolio-scroll::-webkit-scrollbar {
          display: none;
        }
        .portfolio-scroll {
          scrollbar-width: none;
          -ms-overflow-style: none;
        }
      `}</style>
    </main>
  );
}