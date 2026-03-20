"use client";

import { useInView } from "@/hooks/useInView";
import { useCountUp } from "@/hooks/useCountUp";
import clsx from "clsx";

interface StatItemProps {
  value: number;
  suffix: string;
  label: string;
  isActive: boolean;
  delay: string;
  inView: boolean;
}

function StatItem({ value, suffix, label, isActive, delay, inView }: StatItemProps) {
  const count = useCountUp(value, isActive, 2500);

  return (
    <div
      className={clsx(
        "flex flex-col items-center text-center transition-all duration-[1600ms] ease-out",
        inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
      )}
      style={{ transitionDelay: delay }}
    >
      <span className="font-[family-name:var(--font-playfair-display)] text-[#C9A96E] text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-semibold">
        {count}
        <span className="text-xl sm:text-3xl md:text-4xl">{suffix}</span>
      </span>
      <span className="text-[#A0978A] text-xs sm:text-sm tracking-[0.15em] uppercase mt-2 sm:mt-3">
        {label}
      </span>
    </div>
  );
}

const stats = [
  { value: 45, suffix: "", label: "Katlı" },
  { value: 120, suffix: "", label: "Daire" },
  { value: 95, suffix: "%", label: "Boğaz Manzarası" },
  { value: 2027, suffix: "", label: "Teslim" },
];

export default function ProjectSummary() {
  const { ref, isInView } = useInView(0.2);

  return (
    <section
      id="proje"
      ref={ref}
      className="py-16 sm:py-28 md:py-36 bg-[#0A0A0A]"
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Title */}
        <div
          className={clsx(
            "text-center mb-12 sm:mb-20 transition-all duration-[1600ms] ease-out",
            isInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          )}
        >
          <span className="text-[#C9A96E] text-sm tracking-[0.25em] uppercase">
            Proje Hakkında
          </span>
          <h2 className="font-[family-name:var(--font-playfair-display)] text-[#F5F0E8] text-3xl md:text-4xl lg:text-5xl mt-4">
            Rakamlarla Riviera
          </h2>
          <div className="w-16 h-px bg-[#C9A96E] mx-auto mt-6" />
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8 lg:gap-0">
          {stats.map((stat, index) => (
            <div key={stat.label} className="relative flex justify-center">
              {/* Vertical Divider */}
              {index > 0 && (
                <div
                  className={clsx(
                    "hidden lg:block absolute left-0 top-1/2 -translate-y-1/2 w-px h-16 bg-[#C9A96E]/30 transition-all duration-[1800ms] ease-out",
                    isInView ? "scale-y-100" : "scale-y-0"
                  )}
                  style={{ transitionDelay: `${index * 200}ms` }}
                />
              )}
              <StatItem
                value={stat.value}
                suffix={stat.suffix}
                label={stat.label}
                isActive={isInView}
                delay={`${index * 200}ms`}
                inView={isInView}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
