"use client";

import { useEffect } from "react";
import Image from "next/image";
import { FiCheckCircle } from "react-icons/fi";

const bullets = [
  "Seasonal, locally sourced ingredients.",
  "A chef-driven menu blending tradition and innovation.",
  "A warm, welcoming atmosphere for gatherings of any size.",
];

export default function About() {
  useEffect(() => {
    const elements = document.querySelectorAll("[data-scroll-object]");

    if (!elements.length) return;

    let lastScrollY = window.scrollY;
    let ticking = false;

    const updateDirectionMotion = () => {
      const currentScrollY = window.scrollY;
      const delta = currentScrollY - lastScrollY;
      const direction = delta >= 0 ? "down" : "up";
      lastScrollY = currentScrollY;

      elements.forEach((element) => {
        const target = element as HTMLElement;
        const rect = target.getBoundingClientRect();
        const center = rect.top + rect.height / 2;
        const viewportCenter = window.innerHeight / 2;
        const distance = Math.abs(center - viewportCenter);
        const visibility = Math.max(0, 1 - distance / (window.innerHeight * 0.9));

        const shouldShow = direction === "down" ? visibility > 0.2 : visibility > 0.55;
        target.classList.toggle("visible", shouldShow);
      });
    };

    const handleScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          updateDirectionMotion();
          ticking = false;
        });
        ticking = true;
      }
    };

    updateDirectionMotion();
    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <section id="about" className="relative py-20 bg-dark/80 overflow-hidden">
      <div
        className="absolute -left-14 top-10 h-40 w-40 rounded-full bg-primary/10 blur-3xl scroll-shape scroll-float-object"
        data-scroll-object
      />
      <div
        className="absolute right-10 bottom-12 h-28 w-28 rounded-full border border-primary/30 bg-primary/5 blur-sm scroll-shape scroll-float-object"
        data-scroll-object
      />

      <div className="container mx-auto px-4 max-w-6xl relative z-10">
        <div className="text-center mb-12 scroll-reveal" data-scroll-object>
          <p className="section-subtitle">Our Story</p>
          <h2 className="section-title">About Us</h2>
          <div className="w-16 h-1 bg-primary mx-auto mt-4" />
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-start">
          <div className="relative h-76 md:h-[500px] rounded-2xl overflow-hidden shadow-4xl scroll-float-object" data-scroll-object>
            <Image
              src="/images/gallery/gallery-1.jpg"
              alt="About our restaurant"
              fill
              className="object-cover"
            />
          </div>

          <div className="scroll-float-object" data-scroll-object>
            <p className="text-gray-200 mb-6 leading-relaxed text-lg">
              Founded with a passion for honest food and hospitality, we focus
              on thoughtful dishes prepared with care and the best seasonal
              produce.
            </p>

            <ul className="space-y-3 mb-6 text-lg">
              {bullets.map((b, i) => (
                <li key={i} className="flex items-start gap-3 text-gray-400">
                  <FiCheckCircle
                    className="text-primary mt-0.5 shrink-0"
                    size={20}
                  />
                  <span>{b}</span>
                </li>
              ))}
            </ul>

            <p className="text-gray-200 mb-12 text-lg">
              Our team crafts every dish to highlight natural flavors and
              create memorable moments—whether you're joining us for a casual
              lunch or a special evening out.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-start">
              <a href="#"
                className="border-2 border-white text-white px-8 py-3 rounded
                        font-semibold hover:bg-white/10 hover:text-white
                        transition-colors duration-300">See More
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}