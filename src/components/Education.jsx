import React from 'react';
import { motion } from 'framer-motion';
import ScrollDown from "./ScrollDown";

const EducationCard = ({ degree, school, period, location, description }) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.5 }}
    className="bg-primary/30 p-6 rounded-lg border border-secondary/20 hover:border-secondary/50 
               transition-all transform hover:-translate-y-1 hover:shadow-lg"
  >
    <h3 className="text-xl font-semibold text-textPrimary">{degree}</h3>
    <h4 className="text-secondary mt-2">{school}</h4>
    <div className="flex justify-between text-textSecondary mt-2 mb-4">
      <span>{location}</span>
      <span>{period}</span>
    </div>
    <p className="text-textSecondary">{description}</p>
  </motion.div>
);

const Education = () => {
  const education = [
    {
      degree: "Engineering Cycle in Digital Systems – AI & New Technologies",
      school: "University of Technology of Troyes (UTT)",
      location: "Troyes, France",
      period: "2025 – 2028",
      description: "First-year engineering student specializing in Digital Systems, AI, and Data. Looking for 2-year apprenticeship starting September 2026."
    },
    {
      degree: "BUT in Electrical Engineering and Industrial Computing",
      school: "IUT Henri Poincaré Longwy",
      location: "Longwy, France",
      period: "2020 – 2022",
      description: "Completed with honors. Focus on electrical engineering and industrial computing systems."
    },
    {
      degree: "Scientific Baccalaureate",
      school: "Lycée Pilote de Gabès",
      location: "Gabès, Tunisia",
      period: "2020",
      description: "Completed with Very Good honors. Scientific track with advanced mathematics and physics."
    }
  ];

  const certifications = [
    "Introduction to Artificial Intelligence – University of Helsinki (In Progress)",
    "Azure AZ-204 – Developing Solutions",
    "The Web Developer Bootcamp (Full-Stack) – Udemy",
    "JavaScript Programming – Udemy",
    "C# Video Game Programming – GOMYCODE"
  ];

  return (
    <section id="education" className="section-padding relative">
      <motion.div
        className="container mx-auto"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
      >
        <motion.h2
          initial={{ y: 20, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true }}
          className="heading text-center mb-12"
        >
          Education & Certifications
        </motion.h2>

        {/* Education */}
        <div className="grid md:grid-cols-2 gap-8 mb-16">
          {education.map((edu, index) => (
            <EducationCard key={index} {...edu} />
          ))}
        </div>

        {/* Certifications */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="bg-primary/30 p-6 rounded-lg border border-secondary/20"
        >
          <h3 className="text-xl font-semibold text-secondary mb-6">Certifications & Training</h3>
          <div className="grid md:grid-cols-2 gap-4">
            {certifications.map((cert, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="flex items-start space-x-2"
              >
                <svg className="w-5 h-5 mt-1 text-secondary flex-shrink-0" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                <span className="text-textSecondary">{cert}</span>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Decorative Background */}
        <div className="absolute bottom-0 left-0 -z-10">
          <motion.div
            className="w-96 h-96 bg-secondary/5 rounded-full blur-3xl"
            animate={{
              scale: [1, 1.2, 1],
              opacity: [0.1, 0.3, 0.1],
            }}
            transition={{
              duration: 10,
              repeat: Infinity,
              repeatType: "reverse",
            }}
          />
        </div>
      </motion.div>
      <br/>      <br/>

            <ScrollDown targetId="contact" />

    </section>
  );
};

export default Education;