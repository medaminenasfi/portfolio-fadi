import React, { useState } from "react";
import { motion } from "framer-motion";
import ScrollDown from "./ScrollDown";

const Experience = () => {
  const [activeTab, setActiveTab] = useState(0);

  const experiences = [
    {
      company: "Regulux",
      positions: [
        {
          title: "IT & Development Intern",
          date: "03/2025 – 06/2025",
          location: "Luxembourg",
          duties: [
            "Network & security: configuration and securing network connections",
            "System administration: server maintenance, user management, and application deployment",
            "Mobile development (Python): functional and UI improvements to existing application",
            "Web development: designed GTB/GTC interface for real-time visualization and control",
          ],
        },
      ],
    },
    {
      company: "UPAG",
      positions: [
        {
          title: "Full-Stack Developer Intern",
          date: "04/2024 – 07/2024",
          location: "France",
          duties: [
            "Front-end: responsive integration with Tailwind CSS",
            "Back-end: designed and secured APIs tested via Postman",
            "Email management via SMTP2GO",
            "CI/CD: automated pipelines with Jenkins",
          ],
        },
      ],
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { x: -20, opacity: 0 },
    visible: {
      x: 0,
      opacity: 1,
      transition: {
        duration: 0.5,
      },
    },
  };

  return (
    <section id="experience" className="section-padding relative">
      <motion.div
        className="container mx-auto"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        <motion.h2
          className="heading text-center mb-12"
          variants={itemVariants}
        >
          Where I've Worked
        </motion.h2>

        <div className="max-w-4xl mx-auto">
          <div className="flex flex-col md:flex-row gap-8">
            {/* Tab Buttons */}
            <motion.div
              className="md:w-48 flex md:flex-col overflow-x-auto md:overflow-x-visible scrollbar-hide"
              variants={itemVariants}
            >
              {experiences.map((exp, index) => (
                <button
                  key={index}
                  onClick={() => setActiveTab(index)}
                  className={`px-4 py-3 text-sm font-medium text-left border-b-2 md:border-b-0 md:border-l-2 
                    whitespace-nowrap transition-all duration-300 ${
                      activeTab === index
                        ? "text-secondary border-secondary bg-secondary/10"
                        : "text-textSecondary border-textSecondary/20 hover:text-secondary hover:border-secondary"
                    }`}
                >
                  {exp.company}
                </button>
              ))}
            </motion.div>

            {/* Tab Content */}
            <motion.div className="flex-1" variants={itemVariants}>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                key={activeTab}
                className="space-y-8"
              >
                {experiences[activeTab].positions.map((position, posIndex) => (
                  <motion.div 
                    key={posIndex} 
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: posIndex * 0.1 }}
                    className={`${posIndex > 0 ? "pt-8 mt-8 border-t-2 border-secondary/20" : ""} relative`}
                  >
                    <motion.h3 
                      className="text-xl font-semibold text-textPrimary mb-2"
                      whileHover={{ x: 4 }}
                    >
                      {position.title}{" "}
                      <motion.span 
                        className="text-secondary"
                        whileHover={{ scale: 1.05 }}
                        style={{ display: "inline-block" }}
                      >
                        @ {experiences[activeTab].company}
                      </motion.span>
                    </motion.h3>
                    <motion.p 
                      className="text-textSecondary/80 mt-2 flex items-center gap-3"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ delay: 0.2 }}
                    >
                      <span className="flex items-center gap-1">
                        <svg className="w-4 h-4 text-secondary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                        </svg>
                        {position.date}
                      </span>
                      <span className="text-secondary">|</span>
                      <span className="flex items-center gap-1">
                        <svg className="w-4 h-4 text-secondary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                        </svg>
                        {position.location}
                      </span>
                    </motion.p>
                    <ul className="space-y-4 mt-4">
                      {position.duties.map((duty, dutyIndex) => (
                        <motion.li
                          key={dutyIndex}
                          initial={{ opacity: 0, x: -20 }}
                          animate={{ opacity: 1, x: 0 }}
                          whileHover={{ x: 8 }}
                          transition={{ delay: dutyIndex * 0.1 }}
                          className="flex items-start space-x-3 text-textSecondary p-2 rounded-lg group cursor-default"
                        >
                          <motion.svg
                            className="w-5 h-5 mt-1 text-secondary flex-shrink-0 group-hover:scale-110"
                            viewBox="0 0 20 20"
                            fill="currentColor"
                            whileHover={{ rotate: 90 }}
                            transition={{ type: "spring", stiffness: 300 }}
                          >
                            <path
                              fillRule="evenodd"
                              d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                              clipRule="evenodd"
                            />
                          </motion.svg>
                          <span className="group-hover:text-textPrimary transition-colors duration-300">{duty}</span>
                        </motion.li>
                      ))}
                    </ul>
                  </motion.div>
                ))}
              </motion.div>
            </motion.div>
          </div>
        </div>

        {/* Decorative Background Elements */}
        <div className="absolute top-1/2 left-0 -z-10">
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
      
      {/* Scroll Down Button */}
      <br/><br/>
      <ScrollDown targetId="projects" />
    </section>
  );
};

export default Experience;
