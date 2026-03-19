"use client";

import { useState, useEffect, useCallback } from "react";
import { useInView } from "@/hooks/useInView";
import clsx from "clsx";

const gallerySlides = [
  { id: 1, title: "Salon", description: "Genis ve ferah yasam alanlari", image: "/images/interior-1.png" },
  { id: 2, title: "Yatak Odasi", description: "Huzurlu ve luks uyku deneyimi", image: "/images/interior-2.png" },
  { id: 3, title: "Mutfak", description: "Ithal tasarim modern mutfaklar", image: "/images/interior-3.png" },
  { id: 4, title: "Banyo", description: "Dogal mermer detayli banyolar", image: "/images/interior-4.png" },
  { id: 5, title: "Teras", description: "Bogaz manzarali ozel teraslar", image: "/images/interior-5.png" },
  { id: 6, title: "Giris Holü", description: "Zarif ve sofistike giris holü", image: "/images/interior-6.png" },
];

export default function InteriorGallery() {
  const { ref, isInView } = useInView(0.1);
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);

  const goToSlide = useCallback(
    (index: number) => {
      if (isTransitioning) return;
      setIsTransitioning(true);
      setTimeout(() => {
        setCurrentSlide(index);
        setTimeout(() => setIsTransitioning(false), 800);
      }, 400);
    },
    [isTransitioning]
  );

  // Auto-play
  useEffect(() => {
    if (!isInView) return;
    const interval = setInterval(() => {
      goToSlide((currentSlide + 1) % gallerySlides.length);
    }, 5000);
    return () => clearInterval(interval);
  }, [currentSlide, isInView, goToSlide]);

  const slide = gallerySlides[currentSlide];

  return (
    <section
      id="galeri"
      ref={ref}
      className="py-28 md:py-36 bg-[#0A0A0A]"
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Section Title */}
        <div
          className={clsx(
            "text-center mb-16 transition-all duration-[1600ms] ease-out",
            isInView
              ? "opacity-100 translate-y-0"
              : "opacity-0 translate-y-8"
          )}
        >
          <span className="text-[#C9A96E] text-sm tracking-[0.25em] uppercase">
            Ic Mekan
          </span>
          <h2 className="font-[family-name:var(--font-playfair-display)] text-[#F5F0E8] text-3xl md:text-4xl lg:text-5xl mt-4">
            Galeri
          </h2>
          <div className="w-16 h-px bg-[#C9A96E] mx-auto mt-6" />
        </div>

        {/* Gallery Slider */}
        <div
          className={clsx(
            "relative rounded overflow-hidden transition-all duration-[1600ms] ease-out",
            isInView
              ? "opacity-100 translate-y-0"
              : "opacity-0 translate-y-10"
          )}
          style={{ transitionDelay: "300ms" }}
        >
          {/* Main Slide */}
          <div className="relative aspect-[16/9] md:aspect-[21/9] bg-[#141414] overflow-hidden">
            <div
              className={clsx(
                "absolute inset-0 transition-opacity duration-[800ms]",
                isTransitioning ? "opacity-0" : "opacity-100"
              )}
            >
              {/* Slide Image */}
              <img
                src={slide.image}
                alt={slide.title}
                className="absolute inset-0 w-full h-full object-cover"
              />
              {/* Overlay with title */}
              <div className="absolute inset-0 bg-gradient-to-t from-[#0A0A0A]/80 via-transparent to-transparent" />
              <div className="absolute bottom-8 left-8 md:bottom-12 md:left-12">
                <h3 className="font-[family-name:var(--font-playfair-display)] text-[#F5F0E8] text-2xl md:text-3xl mb-2">
                  {slide.title}
                </h3>
                <p className="text-[#A0978A] text-sm">{slide.description}</p>
              </div>
            </div>

            {/* Navigation Arrows */}
            <button
              onClick={() =>
                goToSlide(
                  (currentSlide - 1 + gallerySlides.length) %
                    gallerySlides.length
                )
              }
              className="absolute left-4 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full border border-[#C9A96E]/30 flex items-center justify-center text-[#C9A96E] hover:bg-[#C9A96E]/10 transition-all duration-500"
              aria-label="Previous slide"
            >
              <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5 8.25 12l7.5-7.5" />
              </svg>
            </button>
            <button
              onClick={() =>
                goToSlide((currentSlide + 1) % gallerySlides.length)
              }
              className="absolute right-4 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full border border-[#C9A96E]/30 flex items-center justify-center text-[#C9A96E] hover:bg-[#C9A96E]/10 transition-all duration-500"
              aria-label="Next slide"
            >
              <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                <path strokeLinecap="round" strokeLinejoin="round" d="m8.25 4.5 7.5 7.5-7.5 7.5" />
              </svg>
            </button>
          </div>

          {/* Dots Navigation */}
          <div className="flex items-center justify-center gap-3 mt-6">
            {gallerySlides.map((s, index) => (
              <button
                key={s.id}
                onClick={() => goToSlide(index)}
                className={clsx(
                  "transition-all duration-500 rounded-full",
                  index === currentSlide
                    ? "w-8 h-2 bg-[#C9A96E]"
                    : "w-2 h-2 bg-[#A0978A]/30 hover:bg-[#A0978A]/60"
                )}
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}
          </div>

          {/* Slide Counter */}
          <div className="text-center mt-4">
            <span className="text-[#C9A96E] font-[family-name:var(--font-playfair-display)] text-lg">
              {String(currentSlide + 1).padStart(2, "0")}
            </span>
            <span className="text-[#A0978A] text-sm mx-2">/</span>
            <span className="text-[#A0978A] text-sm">
              {String(gallerySlides.length).padStart(2, "0")}
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
