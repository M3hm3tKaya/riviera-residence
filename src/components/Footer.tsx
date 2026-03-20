"use client";

import { useInView } from "@/hooks/useInView";
import clsx from "clsx";

export default function Footer() {
  const { ref, isInView } = useInView(0.2);

  return (
    <footer
      ref={ref}
      className="bg-[#050505] border-t border-[#1F1F1F] py-10 sm:py-16"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div
          className={clsx(
            "grid grid-cols-1 md:grid-cols-3 gap-8 sm:gap-12 mb-8 sm:mb-12 transition-all duration-[1600ms] ease-out",
            isInView
              ? "opacity-100 translate-y-0"
              : "opacity-0 translate-y-8"
          )}
        >
          {/* Logo Column */}
          <div>
            <span className="font-[family-name:var(--font-playfair-display)] text-[#C9A96E] text-3xl font-semibold tracking-[0.15em]">
              RIVIERA
            </span>
            <p className="text-[#A0978A] text-xs tracking-[0.1em] uppercase mt-2">
              Residence Istanbul
            </p>
            <p className="text-[#A0978A]/60 text-sm mt-4 leading-relaxed max-w-xs">
              Boğazın kıyısında, lüks ve konforun buluşma noktası.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-[#F5F0E8] text-sm tracking-[0.15em] uppercase mb-6">
              Hızlı Erişim
            </h4>
            <div className="space-y-3">
              {[
                { label: "Proje Hakkında", href: "#proje" },
                { label: "Daire Tipleri", href: "#daireler" },
                { label: "Galeri", href: "#galeri" },
                { label: "Konum", href: "#konum" },
                { label: "İletişim", href: "#iletisim" },
              ].map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  className="text-[#A0978A] text-sm hover:text-[#C9A96E] transition-colors duration-500 py-1 min-h-[44px] flex items-center"
                >
                  {link.label}
                </a>
              ))}
            </div>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-[#F5F0E8] text-sm tracking-[0.15em] uppercase mb-6">
              İletişim
            </h4>
            <div className="space-y-3 text-[#A0978A] text-sm">
              <p>+90 212 XXX XX XX</p>
              <p>info@rivieraresidence.com</p>
              <p className="leading-relaxed">
                Sarıyer, İstanbul
                <br />
                Türkiye
              </p>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div
          className={clsx(
            "pt-8 border-t border-[#1F1F1F] flex flex-col md:flex-row items-center justify-between gap-4 transition-all duration-[1600ms] ease-out",
            isInView
              ? "opacity-100 translate-y-0"
              : "opacity-0 translate-y-4"
          )}
          style={{ transitionDelay: "400ms" }}
        >
          <p className="text-[#A0978A]/50 text-xs tracking-wide">
            &copy; 2026 Riviera Residence. Tüm hakları saklıdır.
          </p>
          <p className="text-[#A0978A]/30 text-xs tracking-wide">
            MHT Bilişim tarafından geliştirildi
          </p>
        </div>
      </div>
    </footer>
  );
}
