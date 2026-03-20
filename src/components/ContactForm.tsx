"use client";

import { useState } from "react";
import { useInView } from "@/hooks/useInView";
import clsx from "clsx";

export default function ContactForm() {
  const { ref, isInView } = useInView(0.1);
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    apartmentType: "",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement
    >
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 4000);
  };

  return (
    <section
      id="iletisim"
      ref={ref}
      className="py-16 sm:py-28 md:py-36 bg-[#0E0E0E]"
    >
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
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
            İletişim
          </span>
          <h2 className="font-[family-name:var(--font-playfair-display)] text-[#F5F0E8] text-3xl md:text-4xl lg:text-5xl mt-4">
            Ön Talep Formu
          </h2>
          <div className="w-16 h-px bg-[#C9A96E] mx-auto mt-6" />
          <p className="text-[#A0978A] text-sm mt-6 max-w-md mx-auto">
            Bilgilerinizi bırakın, satış ekibimiz en kısa sürede sizinle
            iletişime geçsin.
          </p>
        </div>

        {/* Form */}
        <form
          onSubmit={handleSubmit}
          className={clsx(
            "space-y-8 transition-all duration-[1600ms] ease-out",
            isInView
              ? "opacity-100 translate-y-0"
              : "opacity-0 translate-y-10"
          )}
          style={{ transitionDelay: "300ms" }}
        >
          {/* Name */}
          <div
            className={clsx(
              "transition-all duration-[1400ms] ease-out",
              isInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
            )}
            style={{ transitionDelay: "400ms" }}
          >
            <label className="text-[#A0978A] text-xs tracking-[0.15em] uppercase block mb-3">
              Ad Soyad
            </label>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
              className="w-full bg-[#141414] border-b border-[#C9A96E]/30 text-[#F5F0E8] px-0 py-3 min-h-[44px] text-base sm:text-sm focus:outline-none focus:border-[#C9A96E] transition-colors duration-500 placeholder:text-[#A0978A]/30 border-t-0 border-l-0 border-r-0 rounded-none"
              placeholder="Adınız ve soyadınız"
            />
          </div>

          {/* Phone & Email */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
            <div
              className={clsx(
                "transition-all duration-[1400ms] ease-out",
                isInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
              )}
              style={{ transitionDelay: "550ms" }}
            >
              <label className="text-[#A0978A] text-xs tracking-[0.15em] uppercase block mb-3">
                Telefon
              </label>
              <input
                type="tel"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                required
                className="w-full bg-[#141414] border-b border-[#C9A96E]/30 text-[#F5F0E8] px-0 py-3 min-h-[44px] text-base sm:text-sm focus:outline-none focus:border-[#C9A96E] transition-colors duration-500 placeholder:text-[#A0978A]/30 border-t-0 border-l-0 border-r-0 rounded-none"
                placeholder="+90 5XX XXX XX XX"
              />
            </div>
            <div
              className={clsx(
                "transition-all duration-[1400ms] ease-out",
                isInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
              )}
              style={{ transitionDelay: "700ms" }}
            >
              <label className="text-[#A0978A] text-xs tracking-[0.15em] uppercase block mb-3">
                E-posta
              </label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                className="w-full bg-[#141414] border-b border-[#C9A96E]/30 text-[#F5F0E8] px-0 py-3 min-h-[44px] text-base sm:text-sm focus:outline-none focus:border-[#C9A96E] transition-colors duration-500 placeholder:text-[#A0978A]/30 border-t-0 border-l-0 border-r-0 rounded-none"
                placeholder="email@adresiniz.com"
              />
            </div>
          </div>

          {/* Apartment Type */}
          <div
            className={clsx(
              "transition-all duration-[1400ms] ease-out",
              isInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
            )}
            style={{ transitionDelay: "850ms" }}
          >
            <label className="text-[#A0978A] text-xs tracking-[0.15em] uppercase block mb-3">
              Daire Tipi
            </label>
            <select
              name="apartmentType"
              value={formData.apartmentType}
              onChange={handleChange}
              required
              className="w-full bg-[#141414] border-b border-[#C9A96E]/30 text-[#F5F0E8] px-0 py-3 min-h-[44px] text-base sm:text-sm focus:outline-none focus:border-[#C9A96E] transition-colors duration-500 border-t-0 border-l-0 border-r-0 rounded-none appearance-none cursor-pointer"
            >
              <option value="" className="bg-[#141414] text-[#A0978A]">
                Daire tipi seçiniz
              </option>
              <option value="1+1" className="bg-[#141414]">
                1+1 (65 m2)
              </option>
              <option value="2+1" className="bg-[#141414]">
                2+1 (110 m2)
              </option>
              <option value="3+1" className="bg-[#141414]">
                3+1 (180 m2)
              </option>
              <option value="4+1" className="bg-[#141414]">
                4+1 Penthouse (320 m2)
              </option>
            </select>
          </div>

          {/* Message */}
          <div
            className={clsx(
              "transition-all duration-[1400ms] ease-out",
              isInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
            )}
            style={{ transitionDelay: "1000ms" }}
          >
            <label className="text-[#A0978A] text-xs tracking-[0.15em] uppercase block mb-3">
              Mesajınız
            </label>
            <textarea
              name="message"
              value={formData.message}
              onChange={handleChange}
              rows={4}
              className="w-full bg-[#141414] border-b border-[#C9A96E]/30 text-[#F5F0E8] px-0 py-3 min-h-[44px] text-base sm:text-sm focus:outline-none focus:border-[#C9A96E] transition-colors duration-500 placeholder:text-[#A0978A]/30 resize-none border-t-0 border-l-0 border-r-0 rounded-none"
              placeholder="Mesajınızı yazın (isteğe bağlı)"
            />
          </div>

          {/* Submit */}
          <div
            className={clsx(
              "pt-4 transition-all duration-[1400ms] ease-out",
              isInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
            )}
            style={{ transitionDelay: "1150ms" }}
          >
            <button
              type="submit"
              className={clsx(
                "w-full py-4 min-h-[48px] text-sm tracking-[0.15em] uppercase rounded transition-all duration-700",
                submitted
                  ? "bg-green-800 text-[#F5F0E8] cursor-default"
                  : "bg-[#C9A96E] text-[#0A0A0A] hover:bg-[#b89555]"
              )}
            >
              {submitted ? "Talebiniz Alındı" : "Ön Talep Gönder"}
            </button>
          </div>
        </form>
      </div>
    </section>
  );
}
