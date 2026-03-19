"use client";

import { useInView } from "@/hooks/useInView";
import clsx from "clsx";

const distances = [
  { place: "Istanbul Havalimani", time: "35 dk", icon: "M6 12 3.269 3.126A59.768 59.768 0 0 1 21.485 12 59.77 59.77 0 0 1 3.27 20.876L5.999 12Zm0 0h7.5" },
  { place: "Metro Istasyonu", time: "5 dk", icon: "M8.25 18.75a1.5 1.5 0 0 1-3 0m3 0a1.5 1.5 0 0 0-3 0m3 0h6m-9 0H3.375a1.125 1.125 0 0 1-1.125-1.125V14.25m17.25 4.5a1.5 1.5 0 0 1-3 0m3 0a1.5 1.5 0 0 0-3 0m3 0h1.125c.621 0 1.07-.504 1.07-1.125V14.25" },
  { place: "Bogaz Koprusu", time: "10 dk", icon: "M12 21a9.004 9.004 0 0 0 8.716-6.747M12 21a9.004 9.004 0 0 1-8.716-6.747M12 21c2.485 0 4.5-4.03 4.5-9S14.485 3 12 3m0 18c-2.485 0-4.5-4.03-4.5-9S9.515 3 12 3m0 0a8.997 8.997 0 0 1 7.843 4.582M12 3a8.997 8.997 0 0 0-7.843 4.582" },
  { place: "Alisveris Merkezi", time: "8 dk", icon: "M15.75 10.5V6a3.75 3.75 0 1 0-7.5 0v4.5m11.356-1.993 1.263 12c.07.665-.45 1.243-1.119 1.243H4.25a1.125 1.125 0 0 1-1.12-1.243l1.264-12A1.125 1.125 0 0 1 5.513 7.5h12.974c.576 0 1.059.435 1.119 1.007Z" },
  { place: "Hastane", time: "12 dk", icon: "M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12Z" },
  { place: "Sahil Yuruyus Yolu", time: "2 dk", icon: "M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1 1 15 0Z" },
];

export default function LocationSection() {
  const { ref, isInView } = useInView(0.15);

  return (
    <section
      id="konum"
      ref={ref}
      className="py-28 md:py-36 bg-[#0E0E0E]"
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
            Lokasyon
          </span>
          <h2 className="font-[family-name:var(--font-playfair-display)] text-[#F5F0E8] text-3xl md:text-4xl lg:text-5xl mt-4">
            Konum Avantaji
          </h2>
          <div className="w-16 h-px bg-[#C9A96E] mx-auto mt-6" />
        </div>

        {/* Two Column Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16">
          {/* Map Placeholder */}
          <div
            className={clsx(
              "relative aspect-[4/3] bg-[#141414] rounded overflow-hidden border border-[#1F1F1F] transition-all duration-[1600ms] ease-out",
              isInView
                ? "opacity-100 translate-x-0"
                : "opacity-0 -translate-x-10"
            )}
            style={{ transitionDelay: "200ms" }}
          >
            <img
              src="/images/location-map.png"
              alt="Riviera Residence konum haritasi"
              className="absolute inset-0 w-full h-full object-cover"
            />
          </div>

          {/* Distance List */}
          <div
            className={clsx(
              "flex flex-col justify-center transition-all duration-[1600ms] ease-out",
              isInView
                ? "opacity-100 translate-x-0"
                : "opacity-0 translate-x-10"
            )}
            style={{ transitionDelay: "400ms" }}
          >
            <div className="space-y-0">
              {distances.map((item, index) => (
                <div
                  key={item.place}
                  className={clsx(
                    "flex items-center gap-5 py-5 border-b border-[#1F1F1F] group hover:border-[#C9A96E]/20 transition-all duration-700",
                    isInView
                      ? "opacity-100 translate-x-0"
                      : "opacity-0 translate-x-8"
                  )}
                  style={{
                    transitionDelay: `${600 + index * 150}ms`,
                    transitionDuration: "1400ms",
                  }}
                >
                  {/* Icon */}
                  <div className="w-10 h-10 rounded-full border border-[#C9A96E]/20 flex items-center justify-center shrink-0 group-hover:border-[#C9A96E]/50 transition-colors duration-500">
                    <svg
                      className="w-4 h-4 text-[#C9A96E]"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth={1.5}
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d={item.icon}
                      />
                    </svg>
                  </div>

                  {/* Text */}
                  <div className="flex-1">
                    <span className="text-[#F5F0E8] text-sm">
                      {item.place}
                    </span>
                  </div>

                  {/* Time */}
                  <span className="text-[#C9A96E] font-[family-name:var(--font-playfair-display)] text-lg">
                    {item.time}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
