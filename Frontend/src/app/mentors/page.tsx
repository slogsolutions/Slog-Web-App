"use client";

import React, { useEffect, useState } from "react";
import Image from "next/image";
import { useKeenSlider } from "keen-slider/react";
import "keen-slider/keen-slider.min.css";

interface Mentor {
  name: string;
  designation: string;
  image: string;
}

export default function MentorsPage() {
  const [mentors, setMentors] = useState<Mentor[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("https://slog-web-app.onrender.com/api/mentors/")
      .then(res => res.json())
      .then(data => {
        setMentors(data);
        setLoading(false);
      })
      .catch(() => setLoading(false));
  }, []);

  const [sliderRef, instanceRef] = useKeenSlider<HTMLDivElement>({
    slides: { 
      perView: 1, 
      spacing: 24,
      origin: "center"
    },
    breakpoints: {
      "(min-width: 640px)": { slides: { perView: 2, spacing: 28 } },
      "(min-width: 768px)": { slides: { perView: 3, spacing: 32 } },
      "(min-width: 1024px)": { slides: { perView: 4, spacing: 36 } },
    },
    mode: "snap",
    loop: true,
    dragSpeed: 0.8,
    created() {
      setTimeout(() => {
        const slides = document.querySelectorAll('.keen-slider__slide');
        slides.forEach(slide => {
          slide.classList.remove('opacity-0');
        });
      }, 10);
    },
  });

  if (loading) {
    return (
      <section className="bg-gradient-to-b from-stone-50 to-white py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <div className="flex justify-center">
            <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-teal-500"></div>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section className="bg-gradient-to-b from-stone-50 to-white py-24 px-4 sm:px-6 lg:px-8 overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-20">
          <span className="inline-block mb-4 text-sm font-semibold tracking-wider text-teal-600 uppercase">
            Expert Guidance
          </span>
          <h1 className="text-4xl md:text-5xl font-bold text-stone-900 tracking-tight">
            Meet Our <span className="text-teal-600">Mentors</span>
          </h1>
          <p className="mt-6 max-w-2xl mx-auto text-lg text-stone-600 leading-relaxed">
            Learn from industry leaders and passionate educators dedicated to your success.
          </p>
          <div className="mt-8 flex justify-center">
            <div className="w-24 h-1.5 bg-gradient-to-r from-teal-500 to-emerald-500 rounded-full"></div>
          </div>
        </div>

        <div className="relative group">
          <button
            onClick={() => instanceRef.current?.prev()}
            className="hidden sm:flex absolute left-0 top-1/2 -translate-y-1/2 -translate-x-8 bg-white p-4 rounded-full shadow-md z-10 hover:bg-stone-50 border border-stone-200 transition-all duration-300 hover:scale-110 hover:shadow-lg active:scale-95"
            aria-label="Previous slide"
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-stone-700" viewBox="0 0 20 20" fill="currentColor">
              <path fillRule="evenodd" d="M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z" clipRule="evenodd" />
            </svg>
          </button>

          <div ref={sliderRef} className="keen-slider pb-16">
            {mentors.map((mentor, index) => (
              <div key={index} className="keen-slider__slide min-w-[280px] sm:min-w-[320px] opacity-0 transition-opacity duration-500">
                <div className="bg-white rounded-2xl shadow-xl overflow-hidden border border-stone-100 hover:shadow-2xl transition-all duration-500 h-full flex flex-col group-hover:scale-[0.97] group-hover:opacity-90 hover:!scale-100 hover:!opacity-100">
                  <div className="relative w-full h-80 overflow-hidden">
                    <Image
                      src={mentor.image}
                      alt={mentor.name}
                      fill
                      className="object-cover transition-transform duration-700 hover:scale-105"
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                      priority={index < 4}
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-stone-900/50 via-stone-900/10 to-transparent"></div>
                    <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-stone-900/70 to-transparent"></div>
                    {/* <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full shadow-sm">
                      <span className="text-xs font-semibold text-stone-700">#{index + 1}</span>
                    </div> */}
                  </div>
                  <div className="p-6 text-center flex-grow flex flex-col">
                    <h2 className="text-2xl font-bold text-stone-800 mb-1 transition-colors duration-300">{mentor.name}</h2>
                    <p className="text-stone-600 mt-2 text-sm font-medium">{mentor.designation}</p>
                    
                  </div>
                </div>
              </div>
            ))}
          </div>

          <button
            onClick={() => instanceRef.current?.next()}
            className="hidden sm:flex absolute right-0 top-1/2 -translate-y-1/2 translate-x-8 bg-white p-4 rounded-full shadow-md z-10 hover:bg-stone-50 border border-stone-200 transition-all duration-300 hover:scale-110 hover:shadow-lg active:scale-95"
            aria-label="Next slide"
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-stone-700" viewBox="0 0 20 20" fill="currentColor">
              <path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd" />
            </svg>
          </button>
        </div>

        {/* Dots indicator */}
        <div className="flex justify-center mt-12 space-x-3">
          {mentors.slice(0, Math.min(mentors.length, 8)).map((_, idx) => (
            <button
              key={idx}
              onClick={() => instanceRef.current?.moveToIdx(idx)}
              className="w-3 h-3 rounded-full bg-stone-300 hover:bg-teal-500 transition-all duration-300 relative"
              aria-label={`Go to slide ${idx + 1}`}
            >
              <span className="absolute -top-1 -left-1 w-5 h-5 rounded-full bg-teal-500/10 opacity-0 hover:opacity-100 transition-opacity duration-300"></span>
            </button>
          ))}
        </div>
      </div>
    </section>
  );
}