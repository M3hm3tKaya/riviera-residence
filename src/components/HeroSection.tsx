"use client";

import { useEffect, useState } from "react";
import clsx from "clsx";

export default function HeroSection() {
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setLoaded(true), 200);
    return () => clearTimeout(timer);
  }, []);

  return (
    <section
      id="hero"
      className="relative w-full h-screen flex items-center justify-center overflow-hidden bg-[#0A0A0A]"
    >
      {/* Background Image */}
      <img
        src="/images/hero-building.png"
        alt="Riviera Residence bina render"
        className="absolute inset-0 w-full h-full object-cover opacity-40"
      />
      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-[#0A0A0A] via-[#0A0A0A]/60 to-[#0A0A0A]/80" />

      {/* Corner Gold L-Lines */}
      {/* Top-Left */}
      <div
        className={clsx(
          "absolute top-8 left-8 transition-all duration-[1800ms] ease-out",
          loaded ? "opacity-100" : "opacity-0"
        )}
      >
        <div className="w-[100px] h-px bg-[#C9A96E]" />
        <div className="w-px h-[100px] bg-[#C9A96E]" />
      </div>
      {/* Top-Right */}
      <div
        className={clsx(
          "absolute top-8 right-8 transition-all duration-[1800ms] ease-out delay-200",
          loaded ? "opacity-100" : "opacity-0"
        )}
      >
        <div className="w-[100px] h-px bg-[#C9A96E] ml-auto" />
        <div className="w-px h-[100px] bg-[#C9A96E] ml-auto" />
      </div>
      {/* Bottom-Left */}
      <div
        className={clsx(
          "absolute bottom-8 left-8 transition-all duration-[1800ms] ease-out delay-400",
          loaded ? "opacity-100" : "opacity-0"
        )}
      >
        <div className="w-px h-[100px] bg-[#C9A96E]" />
        <div className="w-[100px] h-px bg-[#C9A96E]" />
      </div>
      {/* Bottom-Right */}
      <div
        className={clsx(
          "absolute bottom-8 right-8 transition-all duration-[1800ms] ease-out delay-600",
          loaded ? "opacity-100" : "opacity-0"
        )}
      >
        <div className="w-px h-[100px] bg-[#C9A96E] ml-auto" />
        <div className="w-[100px] h-px bg-[#C9A96E] ml-auto" />
      </div>

      {/* Content */}
      <div className="relative z-10 text-center px-6 max-w-4xl mx-auto">
        {/* Main Title */}
        <h1
          className={clsx(
            "font-[family-name:var(--font-playfair-display)] text-[#C9A96E] text-[clamp(4rem,12vw,10rem)] font-bold leading-[0.9] tracking-[0.1em] transition-all duration-[2000ms] ease-out",
            loaded
              ? "opacity-100 translate-y-0"
              : "opacity-0 translate-y-10"
          )}
        >
          RIVIERA
        </h1>

        {/* Subtitle */}
        <p
          className={clsx(
            "font-[family-name:var(--font-inter)] text-[#F5F0E8] text-sm tracking-[0.35em] uppercase mt-6 transition-all duration-[2000ms] ease-out delay-500",
            loaded
              ? "opacity-100 translate-y-0"
              : "opacity-0 translate-y-8"
          )}
        >
          RESIDENCE ISTANBUL
        </p>

        {/* Divider */}
        <div
          className={clsx(
            "w-20 h-px bg-[#C9A96E] mx-auto mt-8 transition-all duration-[1800ms] ease-out delay-700",
            loaded ? "opacity-100 scale-x-100" : "opacity-0 scale-x-0"
          )}
        />

        {/* Tagline */}
        <p
          className={clsx(
            "font-[family-name:var(--font-playfair-display)] italic text-[#F5F0E8] text-xl md:text-2xl mt-8 transition-all duration-[2000ms] ease-out delay-1000",
            loaded
              ? "opacity-100 translate-y-0"
              : "opacity-0 translate-y-8"
          )}
        >
          Boğazın Kıyısında Yeni Yaşam
        </p>

        {/* CTAs */}
        <div
          className={clsx(
            "flex flex-col sm:flex-row items-center justify-center gap-4 mt-12 transition-all duration-[2000ms] ease-out",
            loaded
              ? "opacity-100 translate-y-0 delay-[1400ms]"
              : "opacity-0 translate-y-8"
          )}
          style={{ transitionDelay: "1400ms" }}
        >
          <a
            href="#iletisim"
            className="border border-[#C9A96E] text-[#C9A96E] px-8 py-3.5 text-sm tracking-[0.12em] uppercase rounded hover:bg-[#C9A96E] hover:text-[#0A0A0A] transition-all duration-700"
          >
            Ön Talep Formu
          </a>
          <a
            href="#daireler"
            className="border border-[#A0978A]/30 text-[#A0978A] px-8 py-3.5 text-sm tracking-[0.12em] uppercase rounded hover:border-[#C9A96E] hover:text-[#C9A96E] transition-all duration-700"
          >
            Kat Planlarını İncele
          </a>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div
        className={clsx(
          "absolute bottom-12 left-1/2 -translate-x-1/2 flex flex-col items-center gap-3 transition-all duration-[2000ms] ease-out",
          loaded ? "opacity-100" : "opacity-0"
        )}
        style={{ transitionDelay: "2000ms" }}
      >
        <span className="text-[#A0978A] text-[10px] tracking-[0.2em] uppercase">
          Keşfet
        </span>
        <div className="w-px h-8 bg-gradient-to-b from-[#C9A96E] to-transparent animate-pulse" />
      </div>
    </section>
  );
}
