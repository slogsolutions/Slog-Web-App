// import Image from "next/image";
// import {
//   Carousel,
//   CarouselContent,
//   CarouselItem,
//   CarouselNext,
//   CarouselPrevious,
// } from "@/components/ui/carousel";
// import { Card, CardContent } from "@/components/ui/card";
// import { Star } from "lucide-react";

// const testimonials = [
//   {
//     quote: "I recently hired a freelancer for a project, and I couldn't be happier with the results. Their work exceeded my expectations in every way. Communication was smooth, deadlines were met, and the quality was outstanding.",
//     author: "Thomas Shelby",
//     company: "CEO at Peaky Blinders",
//     avatar: "https://placehold.co/70x70.png",
//     dataAiHint: "person portrait",
//     logo: "https://placehold.co/100x40.png",
//     logoAiHint: "company logo"
//   },
//   {
//     quote: "The course structure is fantastic and the mentors are incredibly supportive. I was able to build a complete project from scratch, which significantly boosted my portfolio and confidence. Highly recommended!",
//     author: "Grace Burgess",
//     company: "Project Manager",
//     avatar: "https://placehold.co/70x70.png",
//     dataAiHint: "woman portrait",
//     logo: "https://placehold.co/100x40.png",
//     logoAiHint: "tech company logo"
//   },
//   {
//     quote: "As a complete beginner, I was hesitant, but Slog Solutions made learning to code accessible and fun. The community is a huge plus, always there to help with any questions. I'm now working as a junior developer!",
//     author: "Arthur Shelby",
//     company: "Junior Developer",
//     avatar: "https://placehold.co/70x70.png",
//     dataAiHint: "man smiling",
//     logo: "https://placehold.co/100x40.png",
//     logoAiHint: "startup logo"
//   },
// ];

// export default function Testimonials() {
//   return (
//     // <section id="testimonials" className="py-20 md:py-28 bg-primary/5">
//     //   <div className="container rounded-lg mx-auto px-4 sm:px-6 lg:px-8">
//     //     <div className="grid lg:grid-cols-12 gap-8 items-center">
//     //         <div className="lg:col-span-4 text-center lg:text-left">
//     //             <h2 className="text-4xl md:text-5xl font-bold text-gray-900">
//     //                 WHAT OUR<br/>CUSTOMERS SAY
//     //             </h2>
//     //             <p className="text-gray-600 mt-4">Real stories from real learners.</p>
//     //         </div>
//     //         <div className="lg:col-span-8">
//     //             <Carousel
//     //                 opts={{ align: "start", loop: true }}
//     //                 className="w-full"
//     //             >
//     //                 <CarouselContent>
//     //                 {testimonials.map((testimonial, index) => (
//     //                     <CarouselItem key={index} className="md:basis-1/1 lg:basis-1/1">
//     //                     <div className="p-2">
//     //                         <Card className="border-0 bg-white shadow-lg rounded-xl">
//     //                             <CardContent className="p-8">
//     //                                 <div className="flex mb-4">
//     //                                     {[...Array(5)].map((_, i) => <Star key={i} className="text-yellow-400 fill-current" />)}
//     //                                 </div>
//     //                                 <p className="text-gray-600 italic mb-6">"{testimonial.quote}"</p>
//     //                                 <div className="flex items-center justify-between">
//     //                                     <div className="flex items-center gap-4">
//     //                                         <Image
//     //                                             src={testimonial.avatar}
//     //                                             alt={testimonial.author}
//     //                                             width={60}
//     //                                             height={60}
//     //                                             className="rounded-full"
//     //                                             data-ai-hint={testimonial.dataAiHint}
//     //                                         />
//     //                                         <div>
//     //                                             <p className="font-bold text-gray-900">{testimonial.author}</p>
//     //                                             <p className="text-sm text-gray-500">{testimonial.company}</p>
//     //                                         </div>
//     //                                     </div>
//     //                                     <Image
//     //                                         src={testimonial.logo}
//     //                                         alt={`${testimonial.company} logo`}
//     //                                         width={100}
//     //                                         height={40}
//     //                                         className="object-contain"
//     //                                         data-ai-hint={testimonial.logoAiHint}
//     //                                     />
//     //                                 </div>
//     //                             </CardContent>
//     //                         </Card>
//     //                     </div>
//     //                     </CarouselItem>
//     //                 ))}
//     //                 </CarouselContent>
//     //                 <div className="hidden sm:block">
//     //                     <CarouselPrevious className="absolute -left-4 top-1/2 -translate-y-1/2" />
//     //                     <CarouselNext className="absolute -right-4 top-1/2 -translate-y-1/2" />
//     //                 </div>
//     //             </Carousel>
//     //         </div>
//     //     </div>
//     //   </div>
//     // </section>
//     <section id="testimonials" className="py-20 md:py-28">
//   <div className="   sm:px-6 lg:px-8">
//     <div className="bg-[#c9d7d7] rounded-[3rem]  md:p-16 shadow-sm relative">
      

//       <div className="grid lg:grid-cols-12 gap-8 items-center">
//         {/* Left text */}
//         <div className="lg:col-span-4 text-center lg:text-left">
//           <h2 className="text-4xl md:text-5xl font-bold text-gray-900">
//             WHAT OUR <br /> CUSTOMERS SAY
//           </h2>
//           <p className="text-gray-700 mt-4 text-lg">
//             Real stories from real learners.
//           </p>
//         </div>

//         {/* Testimonials Carousel */}
//         <div className="lg:col-span-8">
//           <Carousel opts={{ align: "start", loop: true }} className="w-full">
//             <CarouselContent>
//               {testimonials.map((testimonial, index) => (
//                 <CarouselItem key={index} className="md:basis-1/1">
//                   <div className="p-2">
//                     <Card className="border-0  shadow-md rounded-2xl">
//                       <CardContent className="p-8">
//                         <div className="flex mb-4">
//                           {[...Array(5)].map((_, i) => (
//                             <Star key={i} className="text-yellow-400 fill-current" />
//                           ))}
//                         </div>
//                         <p className="text-gray-700 italic mb-6">
//                           "{testimonial.quote}"
//                         </p>
//                         <div className="flex items-center justify-between">
//                           <div className="flex items-center gap-4">
//                             <Image
//                               src={testimonial.avatar}
//                               alt={testimonial.author}
//                               width={60}
//                               height={60}
//                               className="rounded-full"
//                             />
//                             <div>
//                               <p className="font-bold text-gray-900">
//                                 {testimonial.author}
//                               </p>
//                               <p className="text-sm text-gray-600">
//                                 {testimonial.company}
//                               </p>
//                             </div>
//                           </div>
//                           <Image
//                             src={testimonial.logo}
//                             alt={`${testimonial.company} logo`}
//                             width={100}
//                             height={40}
//                             className="object-contain"
//                           />
//                         </div>
//                       </CardContent>
//                     </Card>
//                   </div>
//                 </CarouselItem>
//               ))}
//             </CarouselContent>
//             <div className="hidden sm:block">
//               <CarouselPrevious className="absolute -left-4 top-1/2 -translate-y-1/2" />
//               <CarouselNext className="absolute -right-4 top-1/2 -translate-y-1/2" />
//             </div>
//           </Carousel>
//         </div>
//       </div>
//     </div>
//   </div>
// </section>

//   );
// }




"use client"

import { useState } from "react"
import { ChevronLeft, ChevronRight, Quote } from "lucide-react"
import { Button } from "@/components/ui/button"

const testimonials = [
  {
    id: 1,
    text: "This product has completely transformed how we operate our business. The attention to detail and customer service is unmatched. I couldn't be happier with our decision to work with this team.",
    name: "Thomas Shelby",
    designation: "CEO at Picky Blinders",
    avatar: "/professional-businessman-portrait.png",
  },
  {
    id: 2,
    text: "Outstanding quality and exceptional service. The team went above and beyond to ensure our needs were met. This is exactly what we were looking for in a business partner.",
    name: "Sarah Johnson",
    designation: "Marketing Director at TechCorp",
    avatar: "/professional-businesswoman-portrait.png",
  },
  {
    id: 3,
    text: "Incredible results from day one. The professionalism and expertise shown by the team has exceeded all our expectations. Highly recommend to anyone looking for quality service.",
    name: "Michael Chen",
    designation: "Founder at StartupLab",
    avatar: "/young-entrepreneur-portrait.png",
  },
]

export default function TestimonialsSection() {
  const [currentIndex, setCurrentIndex] = useState(0)

  const nextTestimonial = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length)
  }

  const prevTestimonial = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length)
  }

  const currentTestimonial = testimonials[currentIndex]

  return (
    <section className="py-16 px-4 md:px-8 lg:px-16">
      <div className="max-w-7xl mx-auto">
        {/* Main container with soft grey-blue background */}
        <div className="relative bg-[#bfcfcf] rounded-3xl md:p-12 ">
          

          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 mt-8">
            {/* Left side - Heading and navigation */}
            <div className="space-y-8">
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-serif font-bold text-foreground leading-tight">
                WHAT OUR
                <br />
                CUSTOMERS
                <br />
                SAY
              </h2>

              {/* Navigation arrows */}
              <div className="flex gap-4">
                <Button
                  variant="outline"
                  size="icon"
                  onClick={prevTestimonial}
                  className="rounded-full border-2 border-foreground hover:bg-foreground hover:text-background transition-colors bg-transparent"
                >
                  <ChevronLeft className="h-5 w-5" />
                </Button>
                <Button
                  variant="outline"
                  size="icon"
                  onClick={nextTestimonial}
                  className="rounded-full border-2 border-foreground hover:bg-foreground hover:text-background transition-colors bg-transparent"
                >
                  <ChevronRight className="h-5 w-5" />
                </Button>
              </div>
            </div>

            {/* Right side - Testimonial content */}
            <div className="relative">
              <div className="space-y-6">
                {/* Quote icon */}
                <Quote className="h-8 w-8 text-muted-foreground" />

                {/* Testimonial text */}
                <p className="text-lg md:text-xl text-foreground leading-relaxed font-medium">
                  {currentTestimonial.text}
                </p>

                {/* Customer info with decorative arrow */}
                <div className="flex items-center gap-4 pt-4">
                  {/* Decorative hand-drawn style arrow */}
                  <div className="hidden md:block">
                    <svg
                      width="60"
                      height="40"
                      viewBox="0 0 60 40"
                      className="text-muted-foreground"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                    >
                      <path d="M5 20 Q20 5 35 20 Q50 35 55 20" strokeLinecap="round" strokeLinejoin="round" />
                      <path d="M50 15 L55 20 L50 25" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </div>

                  {/* Profile section */}
                  <div className="flex items-center gap-4">
                    <img
                      src={currentTestimonial.avatar || "/placeholder.svg"}
                      alt={currentTestimonial.name}
                      className="w-14 h-14 rounded-full object-cover border-2 border-background shadow-md"
                    />
                    <div>
                      <h4 className="font-bold text-foreground text-lg">{currentTestimonial.name}</h4>
                      <p className="text-muted-foreground text-sm">{currentTestimonial.designation}</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Carousel dots */}
              <div className="flex gap-2 mt-8 justify-center lg:justify-end">
                {testimonials.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentIndex(index)}
                    className={`w-3 h-3 rounded-full transition-colors ${
                      index === currentIndex ? "bg-foreground" : "bg-muted-foreground/30 hover:bg-muted-foreground/50"
                    }`}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
