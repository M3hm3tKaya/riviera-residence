"use client";

import SmoothScroll from "@/components/SmoothScroll";
import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import ProjectSummary from "@/components/ProjectSummary";
import ApartmentTypes from "@/components/ApartmentTypes";
import InteriorGallery from "@/components/InteriorGallery";
import LocationSection from "@/components/LocationSection";
import Facilities from "@/components/Facilities";
import ContactForm from "@/components/ContactForm";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <SmoothScroll>
      <Navbar />
      <main>
        <HeroSection />
        <ProjectSummary />
        <ApartmentTypes />
        <InteriorGallery />
        <LocationSection />
        <Facilities />
        <ContactForm />
      </main>
      <Footer />
    </SmoothScroll>
  );
}
