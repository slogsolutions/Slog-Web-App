"use client";

import { CourseCard } from "@/components/course-card";
import { useEffect, useState } from "react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { Button } from "../ui/button";

// Define a type for your course object
type Course = {
  title: string;
  image: string;
  dataAiHint: string;
  duration: string;
  price: string;
  category?: string; // optional if not always present
};

const categories = [
  "Computer Science",
  "Civil Engineer",
  "Mechanical Tools",
  "Architecture",
  "Specialized",
  "Networking",
  "Creative Arts",
];

export default function Courses() {
  const [courses, setCourses] = useState<Course[]>([]);

  useEffect(() => {
    fetch("http://localhost:8000/api/courses/")
      .then((res) => res.json())
      .then((data) => setCourses(data));
  }, []);

  return (
    <section id="courses" className="py-20 md:py-28 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900">
            All Courses on Slog
          </h2>
          <p className="mt-4 text-lg text-gray-600">
            Choose a Course to Start your Journey towards Greatness!
          </p>
        </div>

        <div className="mb-16">
          <Carousel
            opts={{
              align: "start",
              loop: true,
            }}
            className="w-full"
          >
            <CarouselContent>
              {categories.map((category, index) => (
                <CarouselItem
                  key={index}
                  className="md:basis-1/3 lg:basis-1/5"
                >
                  <div className="p-1">
                    <Button
                      variant="outline"
                      className="w-full rounded-lg border-primary text-primary hover:bg-primary hover:text-primary-foreground"
                    >
                      {category}
                    </Button>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious className="hidden sm:flex" />
            <CarouselNext className="hidden sm:flex" />
          </Carousel>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
          {courses.map((course, index) => (
            <CourseCard key={index} {...course} />
          ))}
        </div>
      </div>
    </section>
  );
}
