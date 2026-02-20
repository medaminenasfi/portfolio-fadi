import React, { useState } from "react";
import { motion } from "framer-motion";
import ScrollDown from "./ScrollDown";
import { FaCode, FaServer, FaDatabase, FaTools, FaMobile, FaCloud } from "react-icons/fa";
import expressLogo from "../assets/expressjs.svg";
import api from "../assets/apipng.png";
import jwt from "../assets/jwt.png";
import node from "../assets/n2-2.webp";
import met from "../assets/met.png";
import web from "../assets/web.png";
import lite from "../assets/Sqlite-square-icon.svg.png";
import dev from "../assets/dev-removebg-preview.png";
import post from "../assets/postman-icon.svg";
import action from "../assets/github-actions-logo-png_seeklogo-428028.png";
import nginx from "../assets/3030173.webp";
import AWS from "../assets/Amazon_Web_Services_Logo.svg.png";
import VPS from "../assets/8047704.png";


const SkillCard = ({ title, icon, level }) => {
  const [imageError, setImageError] = React.useState(false);
  const [imageLoaded, setImageLoaded] = React.useState(false);
  const [isHovered, setIsHovered] = React.useState(false);

  const handleImageError = (e) => {
    console.warn(`Failed to load icon for ${title}: ${icon}`);
    setImageError(true);
    e.target.style.display = 'none';
  };

  const handleImageLoad = () => {
    setImageLoaded(true);
  };

  // Generate fallback icon based on technology name
  const getFallbackIcon = (title) => {
    const iconMap = {
      'RESTful API': '🔌',
      'JWT Auth': '🔑',
      'Nodemailer': '📧',
      'JSON': '📄',
      'API Integration': '🔗',
      'AI APIs': '🤖',
      'Meteo APIs': '🌤️',
      'Webhooks': '🪝',
      'Postman': '📮',
      'VPS Deployment': '🖥️',
      'Chrome DevTools': '🔧',
      'React Native': '📱',
      'Android Studio': '📲',
      'Flutter': '🦋',
      'Dart': '🎯',
      'Firebase': '🔥',
      'Docker': '🐳',
      'GitHub Actions': '🔄',
      'Nginx': '🌐',
      'Redis': '⚡',
      'AWS': '☁️',
      'VPS Deployment': '🖥️',
      'Git': '📦',
      'Figma': '🎨',
      'VS Code': '💻',
      'XAMPP': '🔧',
      'MongoDB': '🍃',
      'MySQL': '🐬',
      'PostgreSQL': '🐘',
      'Redis': '⚡',
      'Node.js': '🟢',
      'Express.js': '🚂',
      'Python': '🐍',
      'PHP': '🐘',
      'Java': '☕',
      'HTML5': '🌐',
      'CSS3': '🎨',
      'JavaScript': '🟨',
      'React': '⚛️',
      'TypeScript': '📘',
      'Next.js': '▲',
      'Tailwind': '🌊',
      'Bootstrap': '🅱️',
      'Leaflet.js': '🗺️'
    };
    
    return iconMap[title] || '⚡';
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      whileHover={{ 
        y: -12,
        scale: 1.05
      }}
      onHoverStart={() => setIsHovered(true)}
      onHoverEnd={() => setIsHovered(false)}
      className="bg-primary/30 p-3 sm:p-4 rounded-xl border border-secondary/20 hover:border-secondary/60 
                transition-all duration-500 hover:shadow-2xl hover:shadow-secondary/30 w-full cursor-pointer relative overflow-hidden
                backdrop-blur-sm"
    >
      {/* Animated background particles */}
      <motion.div
        className="absolute inset-0 opacity-0 hover:opacity-100 transition-opacity duration-500"
        initial={false}
        animate={{ opacity: isHovered ? 1 : 0 }}
      >
        {[...Array(6)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 bg-secondary rounded-full"
            initial={{ 
              x: "50%", 
              y: "50%",
              scale: 0
            }}
            animate={{ 
              x: ["50%", `${Math.random() * 80 + 10}%`],
              y: ["50%", `${Math.random() * 80 + 10}%`],
              scale: [0, 1, 0],
              opacity: [0, 1, 0]
            }}
            transition={{ 
              duration: 2,
              repeat: Infinity,
              repeatType: "reverse",
              delay: i * 0.2,
              ease: "easeInOut"
            }}
          />
        ))}
      </motion.div>
      
      {/* Hover gradient overlay */}
      <motion.div
        className="absolute inset-0 bg-gradient-to-br from-secondary/10 via-transparent to-primary/10 opacity-0 hover:opacity-100 transition-opacity duration-500"
        initial={false}
        animate={{ opacity: isHovered ? 1 : 0 }}
      />
      
      <div className="relative z-10 flex flex-col items-center space-y-2 sm:space-y-3">
        <div className="relative group w-10 h-10 sm:w-12 sm:h-12 flex items-center justify-center">
          {!imageError && (
            <motion.img
              src={icon}
              alt={title}
              className={`w-12 h-12 sm:w-14 sm:h-14 object-contain filter brightness-90 group-hover:brightness-100
                         transition-all duration-500 transform group-hover:scale-125 group-hover:rotate-6 ${
                           imageLoaded ? 'opacity-100' : 'opacity-0'
                         }`}
              whileHover={{ 
                rotate: [0, -5, 5, 0],
                scale: [1, 1.1, 1.05, 1.15]
              }}
              transition={{ duration: 0.6 }}
              onError={handleImageError}
              onLoad={handleImageLoad}
              loading="lazy"
              crossOrigin="anonymous"
            />
          )}
          {(imageError || !imageLoaded) && (
            <motion.div 
              className="w-12 h-12 sm:w-14 sm:h-14 bg-gradient-to-br from-secondary/20 to-secondary/40 rounded-xl flex items-center justify-center border border-secondary/60 shadow-lg"
              whileHover={{ 
                scale: 1.2, 
                rotate: 8
              }}
              transition={{ duration: 0.4, type: "spring" }}
            >
              <motion.span 
                className="text-secondary font-bold text-xl sm:text-2xl"
                whileHover={{ scale: 1.2, rotate: 10 }}
                transition={{ duration: 0.2 }}
              >
                {getFallbackIcon(title)}
              </motion.span>
            </motion.div>
          )}
          <motion.div
            className="absolute inset-0 bg-gradient-to-r from-secondary/20 via-primary/20 to-secondary/20 rounded-full blur-2xl opacity-0 
                        group-hover:opacity-100 transition-all duration-500"
            animate={{
              scale: isHovered ? [1, 1.2, 1] : 1,
            }}
            transition={{
              duration: 2,
              repeat: isHovered ? Infinity : 0,
              repeatType: "reverse"
            }}
          />
        </div>
        <motion.h3 
          className="text-xs sm:text-sm font-medium text-textPrimary group-hover:text-secondary transition-all duration-500 text-center leading-tight"
          whileHover={{ 
            scale: 1.05,
            textShadow: "0 0 10px rgba(100, 255, 218, 0.5)"
          }}
          transition={{ duration: 0.3 }}
        >
          {title}
        </motion.h3>
      </div>
    </motion.div>
  );
};

const categoryMeta = [
  {
    icon: <FaCode className="w-5 h-5 mr-2" />,
    label: "Frontend",
    description: "Building beautiful, interactive user interfaces."
  },
  {
    icon: <FaServer className="w-5 h-5 mr-2" />,
    label: "Backend",
    description: "Server-side logic, APIs, and business rules."
  },
  {
    icon: <FaDatabase className="w-5 h-5 mr-2" />,
    label: "Database",
    description: "Data modeling, storage, and management."
  },
  {
    icon: <FaMobile className="w-5 h-5 mr-2" />,
    label: "Mobile",
    description: "Cross-platform mobile app development."
  },
  {
    icon: <FaTools className="w-5 h-5 mr-2" />,
    label: "Tools & Design",
    description: "Development tools and design systems."
  },
  {
    icon: <FaCloud className="w-5 h-5 mr-2" />,
    label: "DevOps & Cloud",
    description: "Containerization, orchestration, and cloud infrastructure."
  },
];

const SkillSection = ({ category, skills, description }) => {
  const getGridCols = () => {
    return 'grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5';
  };

  return (
    <motion.div 
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, delay: 0.2 }}
      className="space-y-8"
    >
      <motion.p 
        className="text-textSecondary text-center max-w-2xl mx-auto text-sm sm:text-base leading-relaxed"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.4 }}
      >
        {description}
      </motion.p>
      <motion.div 
        className={`grid ${getGridCols()} gap-4 sm:gap-6 md:gap-8`}
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8, delay: 0.6 }}
      >
        {skills.map((skill, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ 
              duration: 0.6, 
              delay: 0.8 + index * 0.1,
              type: "spring",
              stiffness: 100
            }}
          >
            <SkillCard {...skill} />
          </motion.div>
        ))}
      </motion.div>
    </motion.div>
  );
};

const Skills = () => {
  const [activeTab, setActiveTab] = useState(0);

  const skillCategories = [
    {
      category: "Frontend",
      skills: [
        {
          title: "HTML5",
          icon: "https://cdn.svgporn.com/logos/html-5.svg",
          level: 95,
        },
        {
          title: "CSS3",
          icon: "https://cdn.svgporn.com/logos/css-3.svg",
          level: 90,
        },
      
        {
          title: "React",
          icon: "https://cdn.svgporn.com/logos/react.svg",
          level: 90,
        },
              {
          title: "Next.js",
          icon: "https://cdn.svgporn.com/logos/nextjs-icon.svg",
          level: 85,
        },
          {
          title: "JavaScript",
          icon: "https://cdn.svgporn.com/logos/javascript.svg",
          level: 90,
        },
        {
          title: "TypeScript",
          icon: "https://cdn.svgporn.com/logos/typescript-icon.svg",
          level: 60,
        },
  
        {
          title: "Tailwind",
          icon: "https://www.vectorlogo.zone/logos/tailwindcss/tailwindcss-icon.svg",
          level: 85,
        },
        {
          title: "Bootstrap",
          icon: "https://cdn.svgporn.com/logos/bootstrap.svg",
          level: 88,
        },
        {
          title: "Leaflet.js",
          icon: "https://leafletjs.com/docs/images/logo.png",
          level: 90,
        },
      ],
    },
    {
      category: "Backend",
      skills: [
        {
          title: "Node.js",
          icon: "https://cdn.svgporn.com/logos/nodejs-icon.svg",
          level: 85,
        },
        {
          title: "Express.js",
          icon: expressLogo,
          level: 85,
        },
            {
          title: "PHP",
          icon: "https://cdn.svgporn.com/logos/php.svg",
          level: 80,
        },
        {
          title: "Python",
          icon: "https://cdn.svgporn.com/logos/python.svg",
          level: 75,
        },
    
        {
          title: "Java",
          icon: "https://cdn.svgporn.com/logos/java.svg",
          level: 75,
        },
        {
          title: "Next.js API",
          icon: "https://cdn.svgporn.com/logos/nextjs-icon.svg",
          level: 80,
        },
        {
          title: "RESTful API",
          icon: api,
          level: 90,
        },
        {
          title: "JWT Auth",
          icon: jwt,
          level: 85,
        },
        {
          title: "Nodemailer",
          icon: node ,
          level: 80,
        },
              {
          title: "AI API Integrations",
          icon: "https://cdn.svgporn.com/logos/openai-icon.svg",
          level: 80,
        },
        {
          title: "Meteo / Weather APIs",
          icon: met,
          level: 80,
        },
            {
          title: "Webhooks",
          icon: web,
          level: 80,
        },
      ],
    },
    {
      category: "Database",
      skills: [
        {
          title: "MongoDB",
          icon: "https://cdn.svgporn.com/logos/mongodb-icon.svg",
          level: 85,
        },
        {
          title: "MySQL",
          icon: "https://cdn.svgporn.com/logos/mysql-icon.svg",
          level: 80,
        },
        {
          title: "PostgreSQL",
          icon: "https://cdn.svgporn.com/logos/postgresql.svg",
          level: 75,
        },
          {
          title: "SQLite",
          icon: lite,
          level: 95,
        },
      ],
    },
    {
      category: "Mobile",
      skills: [
        {
          title: "Flutter",
          icon: "https://cdn.svgporn.com/logos/flutter.svg",
          level: 85,
        },
        {
          title: "Dart",
          icon: "https://cdn.svgporn.com/logos/dart.svg",
          level: 80,
        },
        {
          title: "Firebase",
          icon: "https://cdn.svgporn.com/logos/firebase.svg",
          level: 75,
        },
  
  
      ],
    },
    {
      category: "Tools & Design",
      skills: [
        {
          title: "Git",
          icon: "https://cdn.svgporn.com/logos/git-icon.svg",
          level: 85,
        },
              {
          title: "GitHub",
          icon: "https://cdn.svgporn.com/logos/github-icon.svg",
          level: 85,
        },
        {
          title: "Figma",
          icon: "https://cdn.svgporn.com/logos/figma.svg",
          level: 85,
        },
        {
          title: "VS Code",
          icon: "https://cdn.svgporn.com/logos/visual-studio-code.svg",
          level: 90,
        },
              {
          title: "Android Studio",
          icon: "https://cdn.svgporn.com/logos/android-icon.svg",
          level: 70,
        },
        {
          title: "XAMPP",
          icon: "https://cdn.svgporn.com/logos/xampp.svg",
          level: 90,
        },
        {
          title: "Chrome DevTools",
          icon: dev,
          level: 90,
        },
    
    

        {
          title: "Postman",
          icon: post,
          level: 90,
        },
    

      ],
    },
    {
      category: "DevOps & Cloud",
      skills: [
        {
          title: "Docker",
          icon: "https://cdn.svgporn.com/logos/docker-icon.svg",
          level: 80,
        },
    
        {
          title: "GitHub Actions",
          icon: action ,
          level: 80,
        },
        {
          title: "Nginx",
          icon: nginx,
          level: 75,
        },
        {
          title: "Redis",
          icon: "https://cdn.svgporn.com/logos/redis.svg",
          level: 70,
        },
        {
          title: "AWS",
          icon: AWS,
          level: 70,
        },
        {
          title: "VPS Deployment",
          icon: VPS,
          level: 85,
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
    <section id="skills" className="section-padding relative w-full max-w-full pb-24 overflow-hidden">
      <motion.div
        className="w-full max-w-full px-4 md:px-8 lg:px-16"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        <motion.h2
          className="heading text-center mb-12"
          variants={itemVariants}
        >
          Skills & Technologies
        </motion.h2>
        <div className="w-full">
          <div className="flex flex-col lg:flex-row gap-6 lg:gap-8 w-full">
            {/* Tab Buttons */}
            <motion.div
              className="lg:w-64 flex flex-row lg:flex-col overflow-x-auto lg:overflow-x-visible scrollbar-hide"
              variants={itemVariants}
            >
              {skillCategories.map((cat, index) => (
                <button
                  key={cat.category}
                  onClick={() => setActiveTab(index)}
                  className={`relative flex items-center px-3 sm:px-4 py-2.5 sm:py-3 text-xs sm:text-sm font-medium text-left border-b-2 lg:border-b-0 lg:border-l-4 whitespace-nowrap transition-all duration-500 rounded-lg mb-2 lg:mb-0 lg:mr-0 mr-2 sm:mr-3
                    overflow-hidden group
                    ${
                      activeTab === index
                        ? "text-secondary border-secondary bg-secondary/10 shadow-lg shadow-secondary/20 transform scale-105"
                        : "text-textSecondary border-transparent hover:text-secondary hover:bg-secondary/5 hover:scale-102"
                    }`}
                >
                  {/* Animated background gradient */}
                  {activeTab === index && (
                    <motion.div
                      className="absolute inset-0 bg-gradient-to-r from-secondary/5 to-transparent"
                      initial={{ x: "-100%" }}
                      animate={{ x: "100%" }}
                      transition={{ duration: 1.5, repeat: Infinity, ease: "linear" }}
                    />
                  )}
                  {/* Accent bar for active tab */}
                  {activeTab === index && (
                    <motion.span 
                      className="absolute left-0 top-0 h-full w-1 bg-secondary rounded-r-lg hidden lg:block transition-all duration-500"
                      initial={{ scaleY: 0 }}
                      animate={{ scaleY: 1 }}
                      transition={{ duration: 0.3, type: "spring" }}
                    />
                  )}
                  <motion.span 
                    className="mr-2 transition-transform duration-300 group-hover:scale-110"
                    whileHover={{ rotate: 15 }}
                  >
                    {categoryMeta[index].icon}
                  </motion.span>
                  <span className="truncate relative z-10">{cat.category}</span>
                </button>
              ))}
            </motion.div>
            {/* Tab Content */}
            <motion.div className="flex-1 lg:pl-4" variants={itemVariants}>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                key={activeTab}
                className="space-y-4"
              >
                <motion.div 
                  className="flex items-center mb-2"
                  initial={{ opacity: 0, x: -30 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: 0.2 }}
                >
                  <motion.span 
                    className="text-2xl text-secondary mr-3"
                    whileHover={{ scale: 1.2, rotate: 10 }}
                    transition={{ duration: 0.3 }}
                  >
                    {categoryMeta[activeTab].icon}
                  </motion.span>
                  <motion.h3 
                    className="text-2xl font-semibold text-secondary"
                    whileHover={{ scale: 1.05 }}
                    transition={{ duration: 0.3 }}
                  >
                    {skillCategories[activeTab].category}
                  </motion.h3>
                  <motion.div 
                    className="flex-1 ml-4 h-0.5 bg-secondary/60 origin-left"
                    initial={{ scaleX: 0 }}
                    animate={{ scaleX: 1 }}
                    transition={{ duration: 0.8, delay: 0.4, type: "spring" }}
                  />
                </motion.div>
                <motion.p 
                  className="text-textSecondary mb-6"
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.6 }}
                >
                  {categoryMeta[activeTab].description}
                </motion.p>
                <SkillSection
                  category={skillCategories[activeTab].category}
                  skills={skillCategories[activeTab].skills}
                />
              </motion.div>
            </motion.div>
          </div>
        </div>
        {/* Decorative Elements */}
        <div className="absolute top-1/2 right-0 -z-10">
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
      {/* Scroll Down Button - Positioned outside main content */} 
      <ScrollDown targetId="education" />
    </section>
  );
};

export default Skills;
