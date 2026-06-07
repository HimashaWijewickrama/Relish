"use client";

import { useState, useEffect, useCallback } from "react";
import Image from "next/image";
import { FaPlay, FaChevronRight, FaChevronLeft } from "react-icons/fa";
import { heroSlides } from "@/lib/data";

export default function Hero() {
    // State to track current slide and YouTube video modal
    const [current, setCurrent] = useState(0);
    const [isPlaying, setIsPlaying] = useState(false);

    // next slides function, loops back to the first after the last
    const next = useCallback(() => {
        setCurrent((prev) => (prev + 1) % heroSlides.length);
    }, []);

    // previous slide function, loops to the last from the first
    const prev = useCallback(() => {
        setCurrent((prev) => (prev - 1 + heroSlides.length) % heroSlides.length);
    }, []);

    // auto swap slides every 5 seconds
    useEffect(() => {
        const timer = setInterval(next, 5000);
        return () => clearInterval(timer);
    }, [next]);

    // get mock data (slides) from the lib/data file
    const slide = heroSlides[current];

    return (
        <section
            id="home"
            className="relative h-screen min-h-[600px] flex items-center
                 justify-center overflow-hidden"
        >
            {/* Background images — transition between them */}
            {heroSlides.map((s, i) => (
                <div
                    key={s.id}
                    className={`absolute inset-0 transition-opacity duration-1000
            ${i === current ? "opacity-100" : "opacity-0"}`}
                >
                    <Image
                        src={s.bg}
                        alt={s.title}
                        fill
                        priority={i === 0}
                        className="object-cover"
                    />
                    {/* dark overlay */}
                    <div className="absolute inset-0 bg-black/60" />
                </div>
            ))}

            {/* slide content */}
            <div className="relative z-10 text-center text-white px-4 max-w-3xl mx-auto">
                <h1 className="font-display text-5xl md:text-7xl font-bold mb-6
                       leading-tight">
                    {slide.title}
                </h1>
                <p className="text-gray-300 text-lg md:text-xl mb-10">
                    {slide.subtitle}
                </p>

                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                    <a href="#menu" className="btn-primary">Our Menu</a>
                    <a href="#reservation"
                        className="border-2 border-white text-white px-8 py-3 rounded
                        font-semibold hover:bg-white/10 hover:text-white
                        transition-colors duration-300">
                        Book a Table
                    </a>
                </div>

                {/* UTube play button */}
                <button
                    onClick={() => setIsPlaying(true)}
                    className="mt-10 flex items-center gap-3 mx-auto text-gray-300
                     hover:text-white transition-colors group"
                >
                    <span className="w-14 h-14 rounded-full border-2 border-white/60
                           flex items-center justify-center bg-primary/80
                           group-hover:bg-primary group-hover:border-primary
                           transition-all duration-300">
                        <FaPlay size={20} className="ml-1" />
                    </span>
                    <span>Watch Our Story</span>
                </button>
            </div>

            {/* slides controls (prev/next buttons and dot indicators) */}
            <button
                onClick={prev}
                className="absolute left-4 top-1/2 -translate-y-1/2 z-20
                   w-12 h-12 rounded-full bg-white/20 hover:bg-primary
                   flex items-center justify-center text-white
                   transition-colors duration-300"
                aria-label="Previous slide"
            >
                <FaChevronLeft size={24} />
            </button>
            <button
                onClick={next}
                className="absolute right-4 top-1/2 -translate-y-1/2 z-20
                   w-12 h-12 rounded-full bg-white/20 hover:bg-primary
                   flex items-center justify-center text-white
                   transition-colors duration-300"
                aria-label="Next slide"
            >
                <FaChevronRight size={24} />
            </button>

            <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20
                      flex gap-2">
                {heroSlides.map((_, i) => (
                    <button
                        key={i}
                        onClick={() => setCurrent(i)}
                        className={`w-3 h-3 rounded-full transition-all duration-300
              ${i === current ? "bg-primary w-8" : "bg-white/50"}`}
                        aria-label={`Go to slide ${i + 1}`}
                    />
                ))}
            </div>

            {/* UTube modal */}
            {isPlaying && (
                <div
                    className="fixed inset-0 z-50 bg-black/90 flex items-center
                     justify-center"
                    onClick={() => setIsPlaying(false)}
                >
                    <div className="w-full max-w-4xl aspect-video px-4">
                        <iframe 
                        src="https://www.youtube.com/embed/U_BItqMPfbU?si=TBFpQTMoJ9I_Br3d" 
                        title="YouTube video player"  
                        allow="accelerometer; autoplay; clipboard-write; fullscreen; encrypted-media; gyroscope; picture-in-picture; web-share"
                        className="w-full h-full rounded-lg"
                        allowFullScreen
                />
                    </div>
                </div>
            )}
        </section>
    );
}