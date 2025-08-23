"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"; // Assuming shadcn/ui is set up

// FAQ content data
const faqData = [
  {
    question: "What kind of training programs do you offer?",
    answer:
      "We offer training programs in Software Development, Corporate & Government Training, Ministry of Defence, and Outbound Training.",
  },
  {
    question: "Do you provide student training?",
    answer:
      "Yes, we offer specialized programs for students to enhance their skills and knowledge. These programs are tailored to the current industry needs and help students prepare for their careers.",
  },
  {
    question: "What is your approach to corporate training?",
    answer:
      "Our corporate training is highly customized to meet the specific needs of your organization. We focus on practical, hands-on learning that directly impacts your team's performance.",
  },
  {
    question: "How can I verify a certificate?",
    answer:
      "You can verify a certificate through our website's 'Verify Certificates' section by providing the unique certificate ID.",
  },
  {
    question: "What is the duration of your courses?",
    answer:
      "Course durations vary based on the program and customization. Please contact us for details about a specific course.",
  },
  {
    question: "Do you offer online courses?",
    answer:
      "Yes, we offer both online and offline training options to provide flexibility for our students and corporate clients.",
  },
  {
    question: "Can I request a custom training program?",
    answer:
    "Yes, we specialize in creating custom training programs for both corporate and government clients. Please contact us with your specific requirements.",
  },
];

export default function FaqPage() {
  return (
    <div className="min-h-screen bg-gradient-to-r from-teal-800 to-blue-900 py-24">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Frequently Asked <span className="text-teal-600">Questions</span>
          </h1>
          <p className="text-lg text-white max-w-2xl mx-auto">
            Find answers to the most common questions about our services and training programs.
          </p>
          <div className="mt-8 flex justify-center">
            <div className="w-24 h-1.5 bg-gradient-to-r from-teal-500 to-emerald-500 rounded-full"></div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.3, duration: 0.5 }}
          className="max-w-4xl mx-auto"
        >
          <Accordion type="single" collapsible className="w-full">
            {faqData.map((item, index) => (
              <AccordionItem key={index} value={`item-${index}`} className="bg-white my-2 rounded-xl shadow-md border-b border-gray-100">
                <AccordionTrigger className="text-left font-semibold text-lg hover:text-teal-600 transition-colors duration-200 p-6">
                  {item.question}
                </AccordionTrigger>
                <AccordionContent className="p-6 text-gray-600 text-base leading-relaxed">
                  {item.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </motion.div>
      </div>
    </div>
  );
}
