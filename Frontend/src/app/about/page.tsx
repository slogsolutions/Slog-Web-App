"use client";

import { motion } from "framer-motion";

export default function AboutUsPage() {
  return (
    <div className="min-h-screen bg-gradient-to-r from-teal-800 to-blue-900 py-28 px-6">
      <div className="max-w-5xl mx-auto text-center">
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="mb-16"
        >
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
            About <span className="text-teal-400">Slog Solutions Pvt. Ltd.</span>
          </h1>
          <p className="text-lg text-white max-w-3xl mx-auto">
            Empowering businesses, institutions, and individuals with innovative IT
            solutions, corporate training, and advanced technology services from
            Dehradun, Uttarakhand.
          </p>
          <div className="mt-8 flex justify-center">
            <div className="w-24 h-1.5 bg-gradient-to-r from-teal-500 to-emerald-500 rounded-full"></div>
          </div>
        </motion.div>

        {/* Content */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.8 }}
          className="text-left space-y-10 text-white leading-relaxed"
        >
          <section>
            <h2 className="text-2xl font-semibold text-teal-300 mb-3">
              Who We Are
            </h2>
            <p>
              Slog Solutions Pvt. Ltd., based in Dehradun, is a leading technology
              and training company delivering tailored IT solutions, professional
              development programs, and strategic consulting. We work with
              students, corporates, government bodies, and the defence sector to
              empower them with next-generation skills and robust digital
              infrastructure.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-teal-300 mb-3">
              What We Do
            </h2>
            <ul className="list-disc pl-6 space-y-2">
              <li>
                <strong>Software Development:</strong> End-to-end IT solutions,
                product innovation, and advanced lab setups.
              </li>
              <li>
                <strong>Corporate & Government Training:</strong> Customized
                programs to upskill employees, officials, and defence personnel.
              </li>
              
              <li>
                <strong>Student Training:</strong> Industry-ready training
                programs that bridge the gap between academics and real-world
                skills.
              </li>
              <li>
                <strong>Outbound Training:</strong> Experiential learning to
                enhance leadership, teamwork, and decision-making.
              </li>
              <li>
                <strong>Defence Sector Solutions:</strong> High-security
                applications, labs, and skill programs tailored for Ministry of
                Defence needs.
              </li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-teal-300 mb-3">
              Our Mission
            </h2>
            <p>
              To transform education, training, and technology adoption by
              equipping individuals and organizations with tools and knowledge
              for long-term success in an evolving digital world.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-teal-300 mb-3">
              Why Choose Us
            </h2>
            <p>
              With years of expertise, industry collaborations, and a strong
              track record of government and corporate projects, Slog Solutions
              stands as a trusted partner in innovation and growth. Our focus on
              hands-on learning, secure solutions, and cutting-edge technology
              makes us the preferred choice for clients across sectors.
            </p>
          </section>
        </motion.div>
      </div>
    </div>
  );
}