"use client";

import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Typewriter } from "react-simple-typewriter";
import updateslide2 from "../../assets/updateslide2.1.png";
import slide1 from "../../assets/slide1.jpeg"
import slide3 from "../../assets/slide3.jpg";
import slide11 from "../../assets/slide11.png";
import updateslide3 from "../../assets/updateslide3.png";
import student_slide from "../../assets/slide10.png";

const heroSlides = [
  {
    image: slide1,
    dataAiHint: "Development",
    superTitle: "Development",
    description:
      "We specialize in delivering end-to-end technology solutions, from custom software development to advanced lab setup and innovative product development. Our expertise ensures reliable, scalable, and cutting-edge services tailored to your needs.",
  },
  // {
  //   image: slide11,
  //   dataAiHint: "modern classroom technology",
  //   superTitle: "100+ Courses",
  //   description:
  //     "SLOG offers advanced Summer Training and Internship programs in Dehradun, integrating practical project-based modules, a 100% Job Guarantee, and structured placement assistance to bridge the gap between education and industry.",
  // },
  {
    image: slide3,
    dataAiHint: "modern classroom technology",
    superTitle: "100+ Courses",
    description:
      "SLOG offers advanced Summer Training and Internship programs in Dehradun, integrating practical project-based modules, a 100% Job Guarantee, and structured placement assistance to bridge the gap between education and industry.",
  },
  {
    image: slide11,
    dataAiHint: "person working laptop",
    superTitle: "Flexible Learning",
    title: "Study at Your Own Pace",
    description:
      "With our online platform, you can access course materials and learn from anywhere, at any time that fits your schedule.",
  },
  {
    image: updateslide3,
    dataAiHint: "smiling face",
    superTitle: "Try Our Latest Products",
    title: "Now",
    description:
      "A wonderful category of top quality gadgets at an affordable price. Be the first to get the deal. First time customers will get 10% on their purhase.",
  },
  {
    image: updateslide2,
    dataAiHint: "students collaborating computer",
    superTitle: "Expert Mentors",
    title: "Learn from Industry Leaders",
    description:
      "Our instructors are experienced professionals passionate about sharing their knowledge and helping you succeed in your career.",
  },
  {
    image: student_slide,
    dataAiHint: "students collaborating computer",
    superTitle: "Expert Mentors",
    title: "Learn from Industry Leaders",
    description:
      "Our instructors are experienced professionals passionate about sharing their knowledge and helping you succeed in your career.",
  },
];

export default function Hero() {
  return (
    <section id="home" className="relative w-full">
      {heroSlides.map((slide, index) => (
        <div key={index} className="relative w-full h-screen">
          {/* Background Image */}
          <div className="relative w-full h-screen">
            <Image
              src={slide.image}
              alt={slide.title || slide.superTitle}
              fill
              className="object-cover"
              priority={index === 0}
            />
          </div>

          {/* Overlay */}
          <div className="absolute inset-0 z-10" />

          {/* Slide Content */}
          <div className="absolute inset-0 flex items-center justify-center z-20">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8 w-full">
              <div
                className={`flex flex-col md:flex-row ${
                  index % 2 !== 0 ? "md:flex-row-reverse" : ""
                } items-center justify-between gap-8`}
              >
                <div
                  className={`max-w-3xl text-white ${
                    index % 2 !== 0 ? "text-right" : "text-left"
                  }`}
                >
                  <div className="[font-family:'Poiret_One',Helvetica] text-6xl md:text-7xl leading-[80px] font-semibold tracking-wide bg-gradient-to-r from-blue-300 via-cyan-300 to-teal-500 bg-clip-text text-transparent mb-4">
                    {slide.superTitle}
                  </div>

                  {/* Title / Typewriter effect on first slide */}
                  {index === 0 ? (
                    <h2 className="text-4xl md:text-5xl font-bold mb-6">
                      <Typewriter
                        // words={[
                        //   "Software Development",
                        //   "Placement Support System",
                        //   "Get 250+ Online/Offline Courses",
                        //   "Industry Level Training Curriculum",
                        // ]}

                        words={[
                            "Software Development",
                            "Lab Setup",
                            "Product Development",
                        ]}
                        loop={0}
                        cursor
                        cursorStyle="|"
                        typeSpeed={50}
                        deleteSpeed={30}
                        delaySpeed={1500}
                      />
                    </h2>
                  ) : (
                    <h2 className="text-4xl md:text-5xl font-bold mb-6">
                      {slide.title}
                    </h2>
                  )}

                  <p className="text-2xl mt-2 leading-10">{slide.description}</p>

                  <Button size="lg" className="mt-8 px-8 py-6 text-lg rounded-lg">
                    KNOW MORE
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      ))}
    </section>
  );
}
