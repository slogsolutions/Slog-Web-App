"use client";

import { useEffect, useState } from "react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { Button } from "../ui/button";
import { motion } from "framer-motion";

type Course = {
  id: number;
  title: string;
  image: string;
  dataAiHint: string;
  duration: string;
  price: string;
  category: string;
};

const categories = [
  "Computer Science",
  "Civil Tools",
  "Mechanical Tools",
  "Architecture",
  "Specialized",
  "Networking",
  "Creative Arts",
];

export default function Courses() {
  const [courses, setCourses] = useState<Course[]>([]);
  const [filteredCourses, setFilteredCourses] = useState<Course[]>([]);
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);
  const [selectedCourse, setSelectedCourse] = useState<Course | null>(null);

  useEffect(() => {
    fetch("http://localhost:8000/api/courses/")
      .then((res) => res.json())
      .then((data) => {
        setCourses(data);
      });
  }, []);

  useEffect(() => {
    if (selectedCategory) {
      setFilteredCourses(
        courses.filter((course) => course.category === selectedCategory)
      );
    } else {
      setFilteredCourses([]); // hide courses by default
    }
  }, [selectedCategory, courses]);

  return (
    <section
      id="courses"
      className="pt-6 bg-white"
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Heading */}
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-purple-600 pb-1">
              All Courses on Slog
            </h2>
            <p className="mt-4 text-lg text-gray-600 max-w-2xl mx-auto">
              Choose a Course to Start your Journey towards Greatness!
            </p>
          </motion.div>
        </div>

        {/* Category Carousel */}
        <div className="mb-16">
          <Carousel opts={{ align: "start", loop: true }} className="w-full">
            <CarouselContent>
              {categories.map((category, index) => (
                <CarouselItem
                  key={index}
                  className="md:basis-1/3 lg:basis-1/5"
                >
                  <div className="p-1">
                    <Button
                      variant={
                        selectedCategory === category ? "default" : "outline"
                      }
                      className={`w-full rounded-full transition-all duration-300 transform hover:-translate-y-1 hover:shadow-lg ${
                        selectedCategory === category
                          ? "bg-gradient-to-r from-blue-600 to-indigo-600 text-white shadow-lg"
                          : "border-2 border-blue-200 bg-white text-blue-600 hover:bg-blue-50 hover:border-blue-300"
                      }`}
                      onClick={() =>
                        setSelectedCategory(
                          selectedCategory === category ? null : category
                        )
                      }
                    >
                      {category}
                    </Button>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious className="hidden sm:flex bg-white shadow-md hover:bg-blue-50 text-blue-600" />
            <CarouselNext className="hidden sm:flex bg-white shadow-md hover:bg-blue-50 text-blue-600" />
          </Carousel>
        </div>

        {/* Courses Grid */}
        {selectedCategory && (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-10">
            {filteredCourses.map((course, index) => (
              <AnimatedCourseCard
                key={course.id}
                course={course}
                index={index}
                onClick={() => setSelectedCourse(course)}
              />
            ))}
          </div>
        )}

        {/* Course Details Modal */}
        {selectedCourse && (
          <div className="fixed inset-0 bg-black bg-opacity-60 flex justify-center items-center z-50">
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="bg-white rounded-2xl shadow-xl max-w-md w-full p-6 relative"
            >
              {/* Close Button */}
              <button
                onClick={() => setSelectedCourse(null)}
                className="absolute top-3 right-3 text-gray-600 hover:text-gray-900"
              >
                ✕
              </button>

              {/* Course Image */}
              <img
                src={selectedCourse.image}
                alt={selectedCourse.title}
                className="w-full h-48 object-cover rounded-xl mb-5"
              />

              {/* Course Info */}
              <h3 className="text-2xl font-bold text-gray-900 mb-3">
                {selectedCourse.title}
              </h3>
              <p className="text-gray-700 mb-2">
                <strong>Duration:</strong> {selectedCourse.duration}
              </p>
              <p className="text-gray-700 mb-4">
                <strong>Price:</strong> {selectedCourse.price}
              </p>

              {/* Enquiry Button */}
              <button className="w-full py-3 px-6 bg-gradient-to-r from-green-500 to-emerald-600 text-white font-bold rounded-xl shadow-lg hover:from-green-600 hover:to-emerald-700 transition-transform transform hover:scale-105">
                Enquiry Now
              </button>
            </motion.div>
          </div>
        )}
      </div>
    </section>
  );
}

const AnimatedCourseCard = ({
  course,
  index,
  onClick,
}: {
  course: Course;
  index: number;
  onClick: () => void;
}) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="relative group cursor-pointer"
      onClick={onClick}
    >
      <motion.div
        className="relative h-80 w-full rounded-xl shadow-lg overflow-hidden"
        whileHover={{
          y: -10,
          boxShadow:
            "0px 20px 40px rgba(0,0,0,0.25), 0px 10px 20px rgba(0,0,0,0.15)",
        }}
        transition={{ type: "spring", stiffness: 200, damping: 20 }}
      >
        {/* Course Image */}
        <motion.img
          src={course.image}
          alt={course.title}
          className="h-full w-full object-cover"
          whileHover={{ scale: 1.1 }}
          transition={{ duration: 0.6 }}
        />

        {/* Overlay hover effect */}
        <motion.div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex flex-col justify-end p-6">
          <div className="text-white">
            <h3 className="text-xl font-bold mb-1">{course.title}</h3>
            <p className="text-sm opacity-90">{course.category}</p>
            <p className="mt-2 text-lg font-bold">{course.price}</p>
            <p className="text-sm">⏳ {course.duration}</p>
            <motion.button
              whileHover={{ scale: 1.08 }}
              whileTap={{ scale: 0.95 }}
              className="mt-4 w-full py-2 rounded-lg bg-gradient-to-r from-blue-500 to-purple-600 text-white font-semibold shadow-lg hover:shadow-xl transition"
            >
              View Details
            </motion.button>
          </div>
        </motion.div>
      </motion.div>
    </motion.div>
  );
};
