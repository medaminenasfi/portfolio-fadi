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
      degree: "Bachelor's degree in Business Intelligence",
      school: "Higher School of Applied Sciences and Technology",
      location: "Gabes, Tunisia",
      period: "2022 - 2025",
      description: "Graduated with a degree in Business Information Systems, specialized in full-stack development."
    },
    {
      degree: "Scientific Baccalaureate",
      school: "Abou Loubaba-Gabès High School",
      location: "Gabes, Tunisia",
      period: "2021 - 2022",
      description: "Completed scientific track with focus on mathematics and sciences."
    }
  ];

  const certifications = [
    "English Certification | TOEFL iBT (B2 Level)",
    "French Certification | TCF TP (B2 Level)",
    "Web Development Training with HTML, CSS, JavaScript | Coursera",
    "Introduction to Java Training | Coursera",
    "Training in Design of User Interfaces and Experiences (UI/UX) | Coursera",
    "React Basics Training | Coursera",
    "Soft Skills Training | We Youth Organization",
    "Google Developer Groups Training | DevFest"
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