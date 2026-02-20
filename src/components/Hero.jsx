import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

const Hero = () => {
  const [typedRole, setTypedRole] = useState('');
  const roles = ['AI & Data Engineer', 'Machine Learning Developer', 'Full-Stack Developer'];
  const [roleIndex, setRoleIndex] = useState(0);

  useEffect(() => {
    const currentRole = roles[roleIndex];
    let currentIndex = 0;
    const typingInterval = setInterval(() => {
      if (currentIndex <= currentRole.length) {
        setTypedRole(currentRole.substring(0, currentIndex));
        currentIndex++;
      } else {
        clearInterval(typingInterval);
        setTimeout(() => {
          const deletingInterval = setInterval(() => {
            if (currentIndex > 0) {
              currentIndex--;
              setTypedRole(currentRole.substring(0, currentIndex));
            } else {
              clearInterval(deletingInterval);
              setRoleIndex((prev) => (prev + 1) % roles.length);
            }
          }, 50);
        }, 2000);
      }
    }, 100);
    return () => clearInterval(typingInterval);
  }, [roleIndex]);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.5,
      },
    },
  };

  return (
    <section className="min-h-screen flex items-center justify-center relative bg-gradient-to-br from-[#0f172a] via-[#1e293b] to-[#0f172a] overflow-hidden w-full max-w-full" id="home">
      {/* Animated Coding Background */}
      <div className="absolute inset-0 -z-10 pointer-events-none hidden md:flex items-center justify-center w-full max-w-full overflow-hidden">
        <motion.pre
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: [0.12, 0.18, 0.12], y: [40, 0, 40] }}
          transition={{ duration: 12, repeat: Infinity, repeatType: 'reverse' }}
          className="text-xs font-mono text-secondary/70 whitespace-pre leading-snug select-none opacity-20 px-2 sm:px-4 max-w-full sm:max-w-2xl md:max-w-4xl"
          style={{ 
            userSelect: 'none',
            fontSize: 'clamp(0.5rem, 1.5vw, 0.75rem)'
          }}
        >{`
const hero = {
  name: "Fadi Farhat",
  role: "AI & Data Engineer",
  stack: ["Python", "TensorFlow", "React", "Node.js"],
  focus: "Building intelligent AI systems and data-driven solutions",
  contact: "#contact",
  projects: "#projects"
};

function buildWeb() {
  return hero.stack.map(tech => "Building with " + tech);
}

console.log("Building amazing web experiences...");
`}</motion.pre>
      </div>
      <div className="flex flex-col md:flex-row-reverse items-center justify-center w-full max-w-full gap-4 sm:gap-6 md:gap-8 lg:gap-12 px-3 sm:px-4 md:px-6 lg:px-8 z-10">
        {/* Professional Photo with Cyan Border - Right Side */}
        <div className="relative flex flex-col items-center justify-center mb-4 md:mb-0 w-full max-w-[280px] sm:max-w-xs md:max-w-sm flex-shrink-0">
          {/* Subtle Background Glow */}
          <motion.div
            className="absolute -z-10 top-1/2 left-1/2 w-64 h-64 sm:w-80 sm:h-80 md:w-96 md:h-96 rounded-full blur-3xl bg-gradient-to-br from-cyan-500/20 via-teal-500/20 to-emerald-500/10"
            style={{ transform: 'translate(-50%, -50%)' }}
            animate={{ scale: [1, 1.1, 1], opacity: [0.4, 0.6, 0.4] }}
            transition={{ duration: 8, repeat: Infinity, ease: 'easeInOut' }}
          />
          
          {/* Photo with Cyan/Teal Glowing Border */}
          <motion.div
            className="relative w-48 h-48 sm:w-56 sm:h-56 md:w-64 md:h-64 lg:w-80 lg:h-80 rounded-full p-[3px] bg-gradient-to-br from-cyan-400 via-teal-400 to-cyan-500 shadow-[0_0_40px_rgba(34,211,238,0.6)]"
            animate={{ 
              y: [0, -8, 0],
              boxShadow: [
                '0 0 40px rgba(34,211,238,0.6)',
                '0 0 60px rgba(20,184,166,0.8)',
                '0 0 40px rgba(34,211,238,0.6)'
              ]
            }}
            transition={{ 
              y: { duration: 6, repeat: Infinity, repeatType: 'reverse' },
              boxShadow: { duration: 4, repeat: Infinity, ease: 'easeInOut' }
            }}
            whileHover={{ scale: 1.02 }}
          >
            <div className="w-full h-full rounded-full overflow-hidden bg-white flex items-center justify-center">
              <img
                src={require('../assets/b76c5484-e5de-4923-b281-bf309160d914.jpg')}
                alt="Fadi Farhat"
                className="w-full h-full object-cover rounded-full"
                onError={(e) => {
                  console.log('Image failed to load');
                  e.target.style.display = 'none';
                }}
              />
            </div>
          </motion.div>
        </div>
        {/* Hero Text Content - Left Side */}
        <div className="flex flex-col items-center md:items-start justify-center text-center md:text-left w-full max-w-full md:max-w-2xl overflow-hidden px-2 sm:px-0">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="space-y-3 sm:space-y-4 w-full max-w-full"
          >
            <motion.p 
              variants={itemVariants}
              className="text-secondary text-base sm:text-lg md:text-xl tracking-widest font-semibold mb-1 sm:mb-2 font-mono"
            >
              Hi, my name is
            </motion.p>
            <motion.h1 
              variants={itemVariants}
              className="text-white text-lg sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl font-extrabold mb-1 sm:mb-2 drop-shadow-lg font-mono leading-tight break-words w-full"
            >
              Fadi Farhat
            </motion.h1>
            <motion.h2 
              variants={itemVariants}
              className="text-base sm:text-lg md:text-xl lg:text-2xl xl:text-3xl font-bold text-secondary mb-2 sm:mb-4 font-mono flex items-center justify-center md:justify-start gap-2 flex-wrap w-full"
            >
              <span>{typedRole}</span>
              <motion.span
                animate={{ opacity: [1, 0, 1] }}
                transition={{ duration: 0.8, repeat: Infinity }}
                className="text-secondary"
              >
                |  
              </motion.span>
            </motion.h2>
            <motion.p 
              variants={itemVariants}
              className="max-w-full text-textSecondary text-xs sm:text-sm md:text-base lg:text-lg mb-4 sm:mb-6 leading-relaxed font-mono w-full break-words"
            >
              I'm an AI & Data Engineering student specializing in intelligent systems and data analysis. Currently focused on building <span className="text-secondary font-semibold">machine learning models</span> and <span className="text-secondary font-semibold">data-driven solutions</span> for complex problems.
            </motion.p>
            <motion.div 
              variants={itemVariants}
              className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 w-full max-w-full px-0"
            >
              {/* Get In Touch Button */}
              <motion.a
                href="#contact"
                className="px-3 sm:px-4 md:px-5 py-2.5 border-2 border-cyan-400 text-cyan-400 font-semibold text-xs sm:text-sm md:text-base rounded-lg transition-all duration-300 hover:bg-cyan-400/10 hover:shadow-[0_0_20px_rgba(34,211,238,0.3)] flex items-center justify-center gap-2 whitespace-nowrap"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <svg className="w-4 h-4 sm:w-5 sm:h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
                Get In Touch
              </motion.a>

              {/* Download CV Button */}
              <motion.a
                href={require('../assets/galouta_260219_213252.pdf')}
                download="Fadi_Farhat_CV_AI_Data_Engineer.pdf"
                className="relative px-3 sm:px-4 md:px-5 py-2.5 bg-gradient-to-r from-cyan-500 to-teal-500 text-white font-semibold text-xs sm:text-sm md:text-base rounded-lg shadow-lg hover:shadow-[0_0_30px_rgba(34,211,238,0.5)] transition-all duration-300 flex items-center justify-center gap-2 whitespace-nowrap overflow-hidden group"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                {/* Animated background overlay */}
                <motion.div 
                  className="absolute inset-0 bg-gradient-to-r from-cyan-600 to-teal-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-lg"
                />
                
                {/* Shimmer effect */}
                <motion.div 
                  className="absolute inset-0 -translate-x-full group-hover:translate-x-full transition-transform duration-700 bg-gradient-to-r from-transparent via-white/20 to-transparent skew-x-12 rounded-lg"
                />
                
                {/* Icon with subtle animation */}
                <motion.svg 
                  className="relative z-10 w-4 h-4 sm:w-5 sm:h-5" 
                  fill="none" 
                  stroke="currentColor" 
                  viewBox="0 0 24 24"
                  animate={{
                    y: [0, -2, 0]
                  }}
                  transition={{ 
                    duration: 2, 
                    repeat: Infinity, 
                    ease: 'easeInOut'
                  }}
                >
                  <path 
                    strokeLinecap="round" 
                    strokeLinejoin="round" 
                    strokeWidth={2} 
                    d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" 
                  />
                </motion.svg>
                
                {/* Text */}
                <span className="relative z-10 font-bold tracking-wide">Download CV</span>
                
                {/* Success indicator on hover */}
                <motion.div
                  className="absolute -top-1 -right-1 w-5 h-5 bg-green-400 rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                  initial={{ scale: 0, rotate: -180 }}
                  whileHover={{ scale: 1, rotate: 0 }}
                  transition={{ type: 'spring', stiffness: 500 }}
                >
                  <svg className="w-2.5 h-2.5 text-white" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                </motion.div>
              </motion.a>

              {/* Contact Button */}
              <motion.a
                href="#contact"
                className="px-3 sm:px-4 md:px-5 py-2.5 border-2 border-green-400 text-green-400 font-semibold text-xs sm:text-sm md:text-base rounded-lg transition-all duration-300 hover:bg-green-400/10 hover:shadow-[0_0_20px_rgba(34,197,94,0.3)] flex items-center justify-center gap-2 whitespace-nowrap overflow-visible min-h-[44px] flex-shrink-0"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <svg className="w-4 h-4 sm:w-5 sm:h-5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
                Contact Me
              </motion.a>
            </motion.div>
            
            {/* Freelance Availability Badge */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.2 }}
              className="flex items-center justify-center md:justify-start gap-2 mt-4 sm:mt-6 w-full"
            >
              <motion.div 
                animate={{ scale: [1, 1.2, 1] }}
                transition={{ duration: 2, repeat: Infinity }}
                className="w-2 h-2 sm:w-2.5 sm:h-2.5 bg-green-400 rounded-full shadow-[0_0_10px_rgba(34,197,94,0.6)] flex-shrink-0"
              />
              <span className="text-green-400 font-semibold text-xs sm:text-sm font-mono text-center md:text-left">Looking for 2-year apprenticeship starting September 2026</span>
              <motion.span
                animate={{ rotate: 360 }}
                transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
                className="text-green-400"
              >
                
              </motion.span>
            </motion.div>
          </motion.div>
        </div>
      </div>
      {/* Social Links */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
        className="fixed left-10 bottom-0 hidden lg:block z-40"
      >
        <div className="flex flex-col items-center space-y-6">
          <a href="https://github.com/medaminenasfi" target="_blank" rel="noopener noreferrer"
             className="text-textSecondary hover:text-secondary hover:-translate-y-1 transition-all duration-300 relative z-40">
            <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
              <path fillRule="evenodd" d="M12 2C6.477 2 2 6.477 2 12c0 4.42 2.865 8.17 6.839 9.49.5.092.682-.217.682-.48 0-.237-.009-.866-.013-1.7-2.782.604-3.369-1.34-3.369-1.34-.454-1.156-1.11-1.464-1.11-1.464-.908-.62.069-.608.069-.608 1.003.07 1.531 1.03 1.531 1.03.892 1.529 2.341 1.087 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.11-4.555-4.943 0-1.091.39-1.984 1.029-2.683-.103-.253-.446-1.27.098-2.647 0 0 .84-.269 2.75 1.025A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.294 2.747-1.025 2.747-1.025.546 1.377.203 2.394.1 2.647.64.699 1.028 1.592 1.028 2.683 0 3.842-2.339 4.687-4.566 4.935.359.309.678.919.678 1.852 0 1.336-.012 2.415-.012 2.743 0 .267.18.578.688.48C19.137 20.167 22 16.42 22 12c0-5.523-4.477-10-10-10z" clipRule="evenodd" />
            </svg>
          </a>
          <a href="https://www.linkedin.com/in/mohamed-amine-nasfi/" target="_blank" rel="noopener noreferrer"
             className="text-textSecondary hover:text-secondary hover:-translate-y-1 transition-all duration-300 relative z-40">
            <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
              <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
            </svg>
          </a>
          <div className="h-24 w-px bg-textSecondary/50"></div>
        </div>
      </motion.div>
    </section>
  );
};

export default Hero;