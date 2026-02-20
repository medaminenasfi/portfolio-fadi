import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import { FaGlobe, FaMobile, FaCode } from 'react-icons/fa';
import ScrollDown from './ScrollDown';
import profileImg from '../assets/Screenshot from 2025-07-19 18-44-01.png';
import Eco from '../assets/ec.png';
import xml from '../assets/xml.webp';
import comme from '../assets/ecommerce-online-shopping-vector-illustration_677179-93.webp';
import back from '../assets/Gemini_Generated_Image_hfkfoghfkfoghfkf.png';
import wallet from '../assets/wallet.png'
import bmi from '../assets/bmi.png'
import wea from '../assets/wea.png'

 

const ProjectCard = ({ project, onClick }) => (
  <motion.div 
    className="group relative rounded-2xl overflow-hidden bg-gradient-to-br from-primary/90 to-primary/70 shadow-xl hover:shadow-2xl transition-all duration-500 border border-secondary/20 hover:border-secondary/50 transform flex flex-col cursor-pointer w-full"
    onClick={() => onClick(project)}
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    whileHover={{ 
      y: -8,
      scale: 1.02
    }}
    transition={{ duration: 0.3, type: "spring", stiffness: 300 }}
  >
    {/* Animated gradient overlay */}
    <motion.div 
      className="absolute inset-0 bg-gradient-to-br from-secondary/5 via-transparent to-primary/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none z-10"
    />
    
    {/* Project Image */}
    <div className="w-full h-48 sm:h-56 md:h-64 overflow-hidden rounded-t-2xl relative">
      <motion.img 
        src={project.image} 
        alt={project.title} 
        className="w-full h-full object-cover"
        whileHover={{ scale: 1.1 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
      />
      {/* Image overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-primary/80 via-primary/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
    </div>
    
    {/* Category Badge */}
    <motion.div 
      className="absolute top-3 right-3 z-20"
      whileHover={{ scale: 1.1, rotate: 5 }}
      transition={{ type: "spring", stiffness: 400 }}
    >
      <span className={`px-3 py-1.5 rounded-full text-xs font-bold flex items-center gap-2 shadow-lg backdrop-blur-sm ${
        project.category === 'web' 
          ? 'bg-blue-500/90 text-white ring-2 ring-blue-300/50' 
          : 'bg-green-500/90 text-white ring-2 ring-green-300/50'
      }`}>
        {project.category === 'web' ? <FaGlobe className="w-3 h-3" /> : <FaMobile className="w-3 h-3" />}
        {project.category === 'web' ? 'Web' : 'Mobile'}
      </span>
    </motion.div>
    
    {/* Card Content */}
    <div className="flex flex-col flex-1 justify-between p-4 sm:p-5 md:p-6 relative z-10">
      <motion.h3 
        className="text-base sm:text-lg md:text-xl font-bold text-white mb-2 line-clamp-2 group-hover:text-secondary transition-colors duration-300"
        whileHover={{ x: 4 }}
      >
        {project.title}
      </motion.h3>
      <p className="text-textPrimary mb-3 sm:mb-4 line-clamp-2 sm:line-clamp-3 text-xs sm:text-sm leading-relaxed">{project.description}</p>
      <div className="flex flex-wrap gap-2 mb-3 sm:mb-4">
        {project.technologies.slice(0, 3).map((tech, index) => (
          <motion.span
            key={index}
            className="px-2 sm:px-3 py-1 sm:py-1.5 bg-secondary/20 text-secondary rounded-full text-xs font-medium border border-secondary/30"
            whileHover={{ scale: 1.1 }}
            transition={{ type: "spring", stiffness: 400 }}
          >
            {tech}
          </motion.span>
        ))}
        {project.technologies.length > 3 && (
          <span className="px-2 sm:px-3 py-1 sm:py-1.5 bg-secondary/10 text-secondary/70 rounded-full text-xs font-medium">
            +{project.technologies.length - 3} more
          </span>
        )}
      </div>
      <motion.button 
        className="relative inline-block px-4 sm:px-6 py-2 sm:py-3 bg-gradient-to-r from-secondary to-secondary/80 text-white rounded-xl font-bold text-sm sm:text-base shadow-lg overflow-hidden group/btn"
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
      >
        <span className="relative z-10 flex items-center justify-center gap-2">
          View Details
          <motion.svg 
            className="w-4 h-4" 
            fill="none" 
            stroke="currentColor" 
            viewBox="0 0 24 24"
            animate={{ x: [0, 4, 0] }}
            transition={{ duration: 1.5, repeat: Infinity }}
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
          </motion.svg>
        </span>
        {/* Button shimmer effect */}
        <div className="absolute inset-0 -translate-x-full group-hover/btn:translate-x-full transition-transform duration-700 bg-gradient-to-r from-transparent via-white/20 to-transparent" />
      </motion.button>
    </div>
  </motion.div>
);

const Projects = () => {
  const navigate = useNavigate();
  const [currentIndex, setCurrentIndex] = useState(0);
  const [activeCategory, setActiveCategory] = useState('all');
  
  const projects = [
    // Web Projects
    {
      id: 'backend-ecommerce',
      title: "Backend – E-commerce API",
      description: "A complete e-commerce backend API built with TypeScript, featuring user authentication, product management, order processing, and payment integration.",
      technologies: ["Node.js", "TypeScript", "MongoDB", "Express.js", "JWT", "Stripe API", "Bcrypt"],
      link: "https://github.com/medaminenasfi/E-commerce/tree/main/backend",
      image: back,
      category: 'web',
      features: [
        "User Authentication & Authorization",
        "Product CRUD Operations",
        "Shopping Cart Management",
        "Order Processing System",
        "Payment Integration with Stripe",
        "Admin Dashboard",
        "RESTful API Design"
      ],
      challenges: "Implementing secure payment processing and scalable database design",
      github: "https://github.com/medaminenasfi/E-commerce/tree/main/backend"
    },
    {
      id: 'ecotourisme',
      title: "Ecotourisme TN",
      description: "A comprehensive digital platform promoting eco-tourism and sustainable travel experiences in Tunisia with booking system and interactive maps.",
      technologies: ["React.js", "Node.js", "Express.js", "MongoDB", "Leaflet", "Socket.io"],
      link: "https://ecotourisme.laghazala.tn/",
      image: Eco,
      category: 'web',
      features: [
        "Interactive Tourism Maps",
        "Booking System",
        "Real-time Chat Support",
        "Multi-language Support",
        "Mobile Responsive Design",
        "Payment Gateway Integration",
        "Review & Rating System"
      ],
      challenges: "Integrating real-time features and optimizing for mobile performance",
      github: "https://github.com/medaminenasfi/ecotourisme"
    },
    {
      id: 'xml-generator',
      title: "XML Generator",
      description: "Advanced application for converting Excel files and SQL queries to XML format with custom schema validation and batch processing.",
      technologies: ["React.js", "Node.js", "Excel API", "XML Parser", "Multer", "Joi"],
      link: "#",
      image: xml,
      category: 'web',
      features: [
        "Excel to XML Conversion",
        "SQL Query to XML Export",
        "Custom Schema Validation",
        "Batch File Processing",
        "Download Management",
        "Error Handling & Logging",
        "Preview Before Export"
      ],
      challenges: "Handling large file uploads and complex XML schema validation",
      github: "https://github.com/medaminenasfi/xml-generator"
    },
    {
      id: 'glooms-ecommerce',
      title: "Glooms E-Commerce",
      description: "Modern full-stack e-commerce platform specializing in clothing for all age groups with advanced filtering and recommendation system.",
      technologies: ["React.js", "Node.js", "MongoDB", "Redux", "Tailwind CSS", "Cloudinary"],
      link: "#",
      image: comme,
      category: 'web',
      features: [
        "Product Catalog with Filters",
        "User Profiles & Wishlists",
        "Shopping Cart & Checkout",
        "Order Tracking",
        "Admin Panel",
        "Image Upload & Management",
        "Responsive Design"
      ],
      challenges: "Implementing complex product filtering and optimizing image loading",
      github: "https://github.com/medaminenasfi/glooms-ecommerce"
    },
    {
      id: 'traducode',
      title: "TraduCode",
      description: "Innovative web application that converts algorithmic pseudocode into actual programming code across multiple languages.",
      technologies: ["HTML", "CSS", "JavaScript", "Prism.js", "Monaco Editor", "Regex"],
      link: "#",
      image: profileImg,
      category: 'web',
      features: [
        "Multi-language Code Generation",
        "Syntax Highlighting",
        "Code Editor Integration",
        "Algorithm Visualization",
        "Export Functionality",
        "Code Validation",
        "Interactive Examples"
      ],
      challenges: "Parsing complex algorithms and generating syntactically correct code",
      github: "https://github.com/medaminenasfi/traducode"
    },
    // Mobile Projects
{
  id: 'bmi-calculator',
  title: "BMI Calculator",
  description: "A simple and elegant Body Mass Index (BMI) Calculator built using Flutter and Dart. This app allows users to calculate their BMI based on height and weight, providing instant insights about their health category.",
  technologies: ["Flutter", "Dart", "Material Design"],
  link: "#",
  image: bmi ,
  category: 'mobile',
  features: [
    "Easy BMI Calculation",
    "Supports Metric Units (kg, cm)",
    "Displays Health Categories: Underweight, Normal, Overweight, Obese",
    "Clean and Responsive UI"
  ],
  challenges: "Ensuring accuracy in BMI calculation and maintaining a clean responsive layout",
  github: "https://github.com/medaminenasfi/BMI-Calculator"
},
{
  id: 'portefeuille-flutter',
  title: "Digital Wallet Flutter App",
  description: "This Flutter application simulates a digital wallet with two main functionalities: a currency converter and a monthly budget simulator. It allows users to manage their finances in a simple and intuitive way.",
  technologies: ["Flutter", "Dart", "Material Design"],
  link: "#",
  image: wallet,
  category: 'mobile',
  features: [
    "Currency converter with fixed rates",
    "Monthly budget simulator",
    "Display remaining balance after expenses",
    "Simple and smooth navigation",
    "User-friendly interface without external API"
  ],
  challenges: "Designing a smooth and intuitive interface with reliable calculations",
  github: "https://github.com/medaminenasfi/portefeuille-numerique"
}
,
  {
  id: 'weather-app',
  title: "Weather Forecast App (Ongoing)",
  description: "An elegant Flutter application currently under development, providing real-time weather updates and detailed forecasts with a focus on UI animations and performance.",
  technologies: ["Flutter", "Dart", "REST API", "Geolocator", "Weather API", "Animations"],
  link: "#",
  image: wea,
  category: 'mobile',
  features: [
    "Real-time Weather Data (in progress)",
    "7-Day Forecast (in progress)",
    "Location-based Weather Detection",
    "Weather Maps & Radar (planned)",
    "Severe Weather Alerts (planned)",
    "Multiple City Support",
    "Smooth UI Animations"
  ],
  status: "In Development",
  challenges: "Integrating live APIs and optimizing animation performance while managing location permissions.",
  github: "https://github.com/medaminenasfi/flutter-weather"
}

  ];

  const categories = [
    { id: 'all', label: 'All Projects', icon: <FaCode className="w-4 h-4" /> },
    { id: 'web', label: 'Web Development', icon: <FaGlobe className="w-4 h-4" /> },
    { id: 'mobile', label: 'Mobile Development', icon: <FaMobile className="w-4 h-4" /> }
  ];

  const filteredProjects = activeCategory === 'all' 
    ? projects 
    : projects.filter(project => project.category === activeCategory);

  const itemsPerPage = 1; // Mobile: 1 item
  const itemsPerPageMd = 2; // Tablet: 2 items
  const itemsPerPageLg = 3; // Desktop: 3 items
  
  const getItemsPerPage = () => {
    if (typeof window !== 'undefined') {
      if (window.innerWidth >= 1024) return itemsPerPageLg;
      if (window.innerWidth >= 768) return itemsPerPageMd;
    }
    return itemsPerPage;
  };
  
  const currentItemsPerPage = getItemsPerPage();
  const totalPages = Math.ceil(filteredProjects.length / currentItemsPerPage);
  
  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % totalPages);
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + totalPages) % totalPages);
  };

  const getCurrentProjects = () => {
    const start = currentIndex * currentItemsPerPage;
    return filteredProjects.slice(start, start + currentItemsPerPage);
  };

  const handleProjectClick = (project) => {
    navigate(`/project/${project.id}`, { state: { project } });
  };

  const handleCategoryChange = (category) => {
    setActiveCategory(category);
    setCurrentIndex(0); // Reset to first page when changing category
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
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
    <section id="projects" className="section-padding relative">
      <motion.div
        className="container mx-auto"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        <motion.h2 className="heading" variants={itemVariants}>
          Featured Projects
        </motion.h2>
        
        {/* Category Filter Buttons */}
        <motion.div 
          className="flex flex-wrap justify-center gap-2 sm:gap-4 mb-8 sm:mb-12"
          variants={itemVariants}
        >
          {categories.map((category) => (
            <button
              key={category.id}
              onClick={() => handleCategoryChange(category.id)}
              className={`flex items-center gap-2 px-4 py-2 sm:px-6 sm:py-3 rounded-full font-semibold transition-all duration-300 text-sm sm:text-base ${
                activeCategory === category.id
                  ? 'bg-secondary text-primary shadow-lg shadow-secondary/25 scale-105'
                  : 'bg-primary/50 text-textSecondary hover:bg-secondary/20 hover:text-secondary'
              }`}
            >
              {category.icon}
              {category.label}
              <span className={`ml-1 px-2 py-0.5 rounded-full text-xs ${
                activeCategory === category.id
                  ? 'bg-primary/20 text-primary'
                  : 'bg-secondary/20 text-secondary'
              }`}>
                {category.id === 'all' 
                  ? projects.length 
                  : projects.filter(p => p.category === category.id).length
                }
              </span>
            </button>
          ))}
        </motion.div>
        
        {/* Carousel Container */}
        <div className="relative px-4 sm:px-6 lg:px-12">
          {/* Navigation Buttons - Only show if there are multiple pages */}
          {totalPages > 1 && (
            <>
              <button
                onClick={prevSlide}
                className="absolute left-0 sm:left-2 top-1/2 -translate-y-1/2 z-10 bg-secondary/20 hover:bg-secondary/40 text-white p-2 sm:p-3 rounded-full transition-colors duration-300"
              >
                <svg className="w-4 h-4 sm:w-6 sm:h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                </svg>
              </button>
              
              <button
                onClick={nextSlide}
                className="absolute right-0 sm:right-2 top-1/2 -translate-y-1/2 z-10 bg-secondary/20 hover:bg-secondary/40 text-white p-2 sm:p-3 rounded-full transition-colors duration-300"
              >
                <svg className="w-4 h-4 sm:w-6 sm:h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </button>
            </>
          )}

          {/* Projects Grid */}
          <AnimatePresence mode="wait">
            <motion.div 
              key={`${activeCategory}-${currentIndex}`}
              className="grid gap-6 sm:gap-8 grid-cols-1 md:grid-cols-2 lg:grid-cols-3"
              variants={containerVariants}
              initial="hidden"
              animate="visible"
              exit="hidden"
            >
              {getCurrentProjects().map((project, index) => (
                <motion.div key={`${currentIndex}-${index}`} variants={itemVariants}>
                  <ProjectCard project={project} onClick={handleProjectClick} />
                </motion.div>
              ))}
            </motion.div>
          </AnimatePresence>

          {/* Pagination Dots - Only show if there are multiple pages */}
          {totalPages > 1 && (
            <div className="flex justify-center mt-8 space-x-2">
              {Array.from({ length: totalPages }).map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentIndex(index)}
                  className={`w-3 h-3 rounded-full transition-colors duration-300 ${
                    index === currentIndex ? 'bg-secondary' : 'bg-secondary/30'
                  }`}
                />
              ))}
            </div>
          )}
        </div>
        
        {/* Empty State */}
        {filteredProjects.length === 0 && (
          <motion.div 
            className="text-center py-20"
            variants={itemVariants}
          >
            <div className="text-6xl mb-4">🚧</div>
            <h3 className="text-xl font-semibold text-textSecondary mb-2">
              Coming Soon!
            </h3>
            <p className="text-textSecondary">
              {activeCategory === 'mobile' 
                ? 'Mobile projects are currently in development.' 
                : 'No projects found in this category.'
              }
            </p>
          </motion.div>
        )}
        
        {/* Decorative Background Elements */}
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
      
      {/* Scroll Down Button */}
      <br/><br/>
      <ScrollDown targetId="skills" />
    </section>
  );
};

export default Projects;