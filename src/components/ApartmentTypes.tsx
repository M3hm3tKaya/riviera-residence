"use client";

import { useInView } from "@/hooks/useInView";
import clsx from "clsx";

interface ApartmentCardProps {
  type: string;
  size: string;
  features: string[];
  image: string;
  index: number;
  inView: boolean;
}

function ApartmentCard({ type, size, features, image, index, inView }: ApartmentCardProps) {
  return (
    <div
      className={clsx(
        "group relative bg-[#141414] rounded overflow-hidden border border-[#1F1F1F] hover:border-[#C9A96E]/40 transition-all duration-700",
        inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"
      )}
      style={{ transitionDelay: `${index * 250}ms`, transitionDuration: "1400ms" }}
    >
      {/* Gold Top Line */}
      <div className="h-[2px] bg-gradient-to-r from-transparent via-[#C9A96E] to-transparent" />

      {/* Apartment Image */}
      <div className="relative h-48 sm:h-56 bg-[#1A1A1A] overflow-hidden">
        <img
          src={image}
          alt={`${type} daire planı`}
          className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
        />
        {/* Hover overlay */}
        <div className="absolute inset-0 bg-[#C9A96E]/5 opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
      </div>

      {/* Card Content */}
      <div className="p-4 sm:p-6">
        <div className="flex items-baseline justify-between mb-4">
          <h3 className="font-[family-name:var(--font-playfair-display)] text-[#F5F0E8] text-xl font-medium">
            {type}
          </h3>
          <span className="text-[#C9A96E] text-lg font-[family-name:var(--font-playfair-display)]">
            {size}
          </span>
        </div>

        <div className="w-full h-px bg-[#1F1F1F] mb-4" />

        <ul className="space-y-2">
          {features.map((feature) => (
            <li
              key={feature}
              className="text-[#A0978A] text-sm flex items-center gap-2"
            >
              <span className="w-1 h-1 rounded-full bg-[#C9A96E]" />
              {feature}
            </li>
          ))}
        </ul>

        <button className="mt-6 w-full text-center text-sm tracking-[0.1em] uppercase text-[#C9A96E] border border-[#1F1F1F] py-3 min-h-[44px] rounded hover:border-[#C9A96E] hover:bg-[#C9A96E]/5 transition-all duration-700">
          Detaylı İncele
        </button>
      </div>
    </div>
  );
}

const apartments = [
  {
    type: "1+1",
    size: "65 m\u00B2",
    image: "/images/apartment-1+1.png",
    features: ["Boğaz manzarası", "Açık mutfak", "Geniş balkon", "Akıllı ev sistemi"],
  },
  {
    type: "2+1",
    size: "110 m\u00B2",
    image: "/images/apartment-2+1.png",
    features: ["Panoramik manzara", "Ebeveyn banyosu", "Giyinme odası", "2 balkon"],
  },
  {
    type: "3+1",
    size: "180 m\u00B2",
    image: "/images/apartment-3+1.png",
    features: [
      "Tam Boğaz cephesi",
      "2 ebeveyn süit",
      "Özel teras",
      "İthal mutfak",
    ],
  },
  {
    type: "4+1 Penthouse",
    size: "320 m\u00B2",
    image: "/images/apartment-4+1.png",
    features: [
      "360\u00B0 manzara",
      "Özel asansör",
      "Çatı terası",
      "Jakuzi & sauna",
    ],
  },
];

export default function ApartmentTypes() {
  const { ref, isInView } = useInView(0.1);

  return (
    <section
      id="daireler"
      ref={ref}
      className="py-16 sm:py-28 md:py-36 bg-[#0E0E0E]"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Title */}
        <div
          className={clsx(
            "text-center mb-10 sm:mb-16 transition-all duration-[1600ms] ease-out",
            isInView
              ? "opacity-100 translate-y-0"
              : "opacity-0 translate-y-8"
          )}
        >
          <span className="text-[#C9A96E] text-sm tracking-[0.25em] uppercase">
            Daire Seçenekleri
          </span>
          <h2 className="font-[family-name:var(--font-playfair-display)] text-[#F5F0E8] text-3xl md:text-4xl lg:text-5xl mt-4">
            Daire Tipleri
          </h2>
          <div className="w-16 h-px bg-[#C9A96E] mx-auto mt-6" />
        </div>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
          {apartments.map((apt, index) => (
            <ApartmentCard
              key={apt.type}
              type={apt.type}
              size={apt.size}
              features={apt.features}
              image={apt.image}
              index={index}
              inView={isInView}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
