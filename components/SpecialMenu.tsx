"use client";

import { useMemo, useState } from "react";
import Image from "next/image";
import { FaStar, FaClock } from "react-icons/fa";
import { menuItems } from "@/lib/data";

const categories = ["all", "starters", "mains", "specialty"] as const;

export default function SpecialMenu() {
  const [activeCategory, setActiveCategory] = useState<(typeof categories)[number]>("all");

  const filteredItems = useMemo(() => {
    if (activeCategory === "all") return menuItems;
    return menuItems.filter((item) => item.category === activeCategory);
  }, [activeCategory]);

  return (
    <section className="special-menu-section relative overflow-hidden py-20 text-white">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(255,140,66,0.18),_transparent_32%)]" />
      <div className="absolute left-1/2 top-10 h-64 w-64 -translate-x-1/2 rounded-full bg-[#ff8c42]/10 blur-3xl" />

      <div className="relative mx-auto max-w-6xl px-4">
        <div className="mb-12 text-center">
          <p className="section-subtitle">Chef&apos;s Special</p>
          <h2 className="section-title text-white">Our Special Menu</h2>
          <div className="mx-auto mt-4 h-1 w-20 bg-[#ff8c42]" />
        </div>

        <div className="mb-8 flex flex-wrap items-center justify-center gap-3">
          {categories.map((category) => (
            <button
              key={category}
              type="button"
              onClick={() => setActiveCategory(category)}
              className={`rounded-full border px-4 py-2 text-sm font-semibold uppercase tracking-[0.2em] transition-all duration-300 ${
                activeCategory === category
                  ? "border-[#ff8c42] bg-[#ff8c42] text-[#111111] shadow-[0_0_20px_rgba(255,140,66,0.35)]"
                  : "border-white/10 bg-white/5 text-[#d9d9d9] hover:border-[#ff8c42]/50 hover:text-[#ffb27a]"
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3 xl:items-end">
          {filteredItems.map((item, index) => {
            const overlapClass =
              index % 3 === 1
                ? "md:-mt-10 md:ml-[-10px] xl:-mt-14"
                : index % 3 === 2
                  ? "md:-mt-16 md:ml-[-20px] xl:-mt-20"
                  : "";

            return (
            <article
              key={item.id}
              className={`special-menu-card group relative overflow-hidden rounded-[28px] border border-white/10 bg-[#161616] shadow-[0_18px_50px_rgba(0,0,0,0.28)] transition-all duration-500 hover:border-[#ff8c42]/50 hover:shadow-[0_22px_60px_rgba(255,140,66,0.18)] ${overlapClass}`}
            >
              <div className="special-badge absolute left-4 top-4 z-20 rounded-full border border-[#ff8c42]/30 bg-[#0d0d0d]/80 px-3 py-1 text-[10px] font-semibold uppercase tracking-[0.2em] text-[#ffb27a]">
                {item.category}
              </div>

              <div className="group relative h-64 overflow-hidden">
                <div className="absolute inset-0 z-10 bg-[radial-gradient(circle_at_top,_rgba(255,255,255,0.22),_transparent_45%)] opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
                <Image
                  src={item.image}
                  alt={item.name}
                  fill
                  className="object-cover transition-all duration-700 ease-out group-hover:scale-110 group-hover:brightness-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#111111]/95 via-[#111111]/15 to-transparent" />
              </div>

              <div className="space-y-4 p-6">
                <div className="flex items-start justify-between gap-3">
                  <h3 className="text-2xl font-bold text-white transition-colors duration-300 group-hover:text-[#ffb27a]">
                    {item.name}
                  </h3>
                </div>

                <p className="text-sm leading-7 text-[#d9d9d9]">{item.description}</p>

                <div className="border-t border-white/10 pt-4">
                  <span className="inline-flex items-center rounded-full border border-white/10 bg-white/5 px-3 py-1.5 text-[10px] font-semibold uppercase tracking-[0.2em] text-[#d9d9d9]">
                    Signature dish
                  </span>
                </div>
              </div>
            </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
