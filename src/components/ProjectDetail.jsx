import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import { useParams, useLocation, useNavigate } from 'react-router-dom';
import { ArrowLeft, ExternalLink, Github, CheckCircle, Calendar, Code, Lightbulb, Star } from 'lucide-react';

const ProjectDetail = () => {
  useParams();
  const location = useLocation();
  const navigate = useNavigate();
  
  const project = location.state?.project;

  // Scroll to top when component mounts
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, []);

  if (!project) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-primary via-primary/95 to-primary/90 flex items-center justify-center">
        <motion.div 
          className="text-center p-8 bg-primary/80 backdrop-blur-sm rounded-3xl border border-secondary/20 shadow-2xl"
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          <div className="w-20 h-20 bg-secondary/20 rounded-full flex items-center justify-center mx-auto mb-6">
            <Code className="w-10 h-10 text-secondary" />
          </div>
          <h2 className="text-3xl font-bold text-white mb-4">Project Not Found</h2>
          <p className="text-textPrimary mb-8">The project you're looking for doesn't exist or has been moved.</p>
          <button 
            onClick={() => navigate('/')}
            className="px-8 py-3 bg-gradient-to-r from-secondary to-secondary/80 text-primary rounded-xl hover:from-secondary/90 hover:to-secondary/70 transition-all duration-300 font-semibold shadow-lg"
          >
            Back to Home
          </button>
        </motion.div>
      </div>
    );
  }

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
    hidden: { y: 30, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.6,
        ease: [0.25, 0.25, 0, 1],
      },
    },
  };

  const slideInLeft = {
    hidden: { x: -50, opacity: 0 },
    visible: {
      x: 0,
      opacity: 1,
      transition: {
        duration: 0.8,
        ease: [0.25, 0.25, 0, 1],
      },
    },
  };

  const slideInRight = {
    hidden: { x: 50, opacity: 0 },
    visible: {
      x: 0,
      opacity: 1,
      transition: {
        duration: 0.8,
        ease: [0.25, 0.25, 0, 1],
      },
    },
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-primary via-primary/95 to-primary/90 text-white overflow-x-hidden">
      {/* Animated Background Elements */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <motion.div
          className="absolute -top-40 -right-40 w-96 h-96 bg-secondary/5 rounded-full blur-3xl"
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.3, 0.5, 0.3],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            repeatType: "reverse",
          }}
        />
        <motion.div
          className="absolute -bottom-40 -left-40 w-96 h-96 bg-secondary/3 rounded-full blur-3xl"
          animate={{
            scale: [1.2, 1, 1.2],
            opacity: [0.2, 0.4, 0.2],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            repeatType: "reverse",
          }}
        />
      </div>

      {/* Enhanced Header */}
      <motion.header 
        className="sticky top-0 z-50 bg-primary/80 backdrop-blur-xl border-b border-secondary/10 shadow-lg"
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.7, ease: [0.25, 0.25, 0, 1] }}
      >
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex items-center justify-between">
            <motion.button
              onClick={() => navigate('/')}
              className="group flex items-center space-x-3 text-secondary hover:text-white transition-all duration-300 p-2 rounded-xl hover:bg-secondary/10"
              whileHover={{ x: -5 }}
              whileTap={{ scale: 0.95 }}
            >
              <ArrowLeft className="group-hover:-translate-x-1 transition-transform duration-300" size={20} />
              <span className="font-medium">Back to Portfolio</span>
            </motion.button>
            
            <div className="flex items-center space-x-3">
              {project.github && (
                <motion.a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center space-x-2 px-4 py-2 bg-secondary/10 hover:bg-secondary/20 border border-secondary/20 rounded-xl transition-all duration-300 text-sm font-medium"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Github size={16} />
                  <span className="hidden sm:inline">Code</span>
                </motion.a>
              )}
              {project.link !== '#' && (
                <motion.a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center space-x-2 px-4 py-2 bg-gradient-to-r from-secondary to-secondary/80 text-primary rounded-xl hover:from-secondary/90 hover:to-secondary/70 transition-all duration-300 text-sm font-semibold shadow-lg"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <ExternalLink size={16} />
                  <span className="hidden sm:inline">Live Demo</span>
                </motion.a>
              )}
            </div>
          </div>
        </div>
      </motion.header>

      {/* Main Content */}
      <motion.main 
        className="relative z-10"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        {/* Hero Section */}
        <section className="px-4 sm:px-6 lg:px-8 py-12 lg:py-20">
          <div className="container mx-auto">
            <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
              <motion.div variants={slideInLeft} className="space-y-8">
                <div className="space-y-6">
                  <motion.div
                    className="inline-flex items-center space-x-2 px-4 py-2 bg-secondary/10 border border-secondary/20 rounded-full text-secondary text-sm font-medium"
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ delay: 0.3, duration: 0.5 }}
                  >
                    <Star size={14} />
                    <span>Featured Project</span>
                  </motion.div>
                  
                  <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight">
                    <span className="bg-gradient-to-r from-white via-white to-secondary bg-clip-text text-transparent">
                      {project.title}
                    </span>
                  </h1>
                  
                  <p className="text-xl lg:text-2xl text-textPrimary leading-relaxed">
                    {project.description}
                  </p>
                </div>
                
                {/* Enhanced Technology Tags */}
                <div className="space-y-4">
                  <h3 className="text-lg font-semibold text-white flex items-center">
                    <Code className="mr-2" size={20} />
                    Technologies Used
                  </h3>
                  <div className="flex flex-wrap gap-3">
                    {project.technologies.map((tech, index) => (
                      <motion.span
                        key={index}
                        className="px-4 py-2 bg-gradient-to-r from-secondary/20 to-secondary/10 text-secondary rounded-xl text-sm font-medium border border-secondary/30 backdrop-blur-sm hover:from-secondary/30 hover:to-secondary/20 transition-all duration-300"
                        initial={{ scale: 0, rotate: -10 }}
                        animate={{ scale: 1, rotate: 0 }}
                        transition={{ delay: index * 0.1, duration: 0.5 }}
                        whileHover={{ scale: 1.05 }}
                      >
                        {tech}
                      </motion.span>
                    ))}
                  </div>
                </div>

                {/* Action Buttons */}
                <div className="flex flex-col sm:flex-row gap-4 pt-4">
                  {project.github && (
                    <motion.a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="group flex items-center justify-center space-x-3 px-8 py-4 bg-secondary/10 hover:bg-secondary/20 border border-secondary/30 rounded-xl transition-all duration-300 font-semibold"
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                    >
                      <Github className="group-hover:rotate-12 transition-transform duration-300" size={20} />
                      <span>View Source Code</span>
                    </motion.a>
                  )}
                  {project.link !== '#' && (
                    <motion.a
                      href={project.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="group flex items-center justify-center space-x-3 px-8 py-4 bg-gradient-to-r from-secondary to-secondary/80 text-primary rounded-xl hover:from-secondary/90 hover:to-secondary/70 transition-all duration-300 font-semibold shadow-lg"
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                    >
                      <ExternalLink className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform duration-300" size={20} />
                      <span>Live Demo</span>
                    </motion.a>
                  )}
                </div>
              </motion.div>

              {/* Enhanced Project Image */}
              <motion.div 
                variants={slideInRight}
                className="relative"
              >
                <motion.div 
                  className="relative group"
                  whileHover={{ scale: 1.02 }}
                  transition={{ duration: 0.4 }}
                >
                  <div className="absolute inset-0 bg-gradient-to-r from-secondary/20 to-secondary/10 rounded-3xl blur-xl group-hover:blur-2xl transition-all duration-300"></div>
                  <div className="relative rounded-3xl overflow-hidden shadow-2xl border border-secondary/20">
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-64 sm:h-80 lg:h-96 object-cover group-hover:scale-105 transition-transform duration-700"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-primary/40 via-transparent to-transparent"></div>
                  </div>
                </motion.div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Enhanced Features Section */}
        <section className="px-4 sm:px-6 lg:px-8 py-16 lg:py-24">
          <div className="container mx-auto">
            <motion.div className="text-center mb-16" variants={itemVariants}>
              <h2 className="text-3xl lg:text-4xl font-bold mb-4">
                <span className="bg-gradient-to-r from-white to-secondary bg-clip-text text-transparent">
                  Key Features
                </span>
              </h2>
              <p className="text-textPrimary text-lg max-w-2xl mx-auto">
                Discover the powerful features and capabilities that make this project stand out
              </p>
            </motion.div>
            
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
              {project.features.map((feature, index) => (
                <motion.div
                  key={index}
                  className="group relative p-6 lg:p-8 bg-gradient-to-br from-primary/60 to-primary/40 backdrop-blur-sm rounded-2xl border border-secondary/10 hover:border-secondary/30 transition-all duration-300"
                  variants={itemVariants}
                  whileHover={{ 
                    scale: 1.02, 
                    y: -5,
                    transition: { duration: 0.2 }
                  }}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1, duration: 0.6 }}
                  viewport={{ once: true }}
                >
                  <div className="absolute inset-0 bg-gradient-to-br from-secondary/5 to-transparent rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  <div className="relative flex items-start space-x-4">
                    <div className="flex-shrink-0 w-10 h-10 bg-secondary/20 rounded-xl flex items-center justify-center group-hover:bg-secondary/30 transition-colors duration-300">
                      <CheckCircle className="text-secondary" size={20} />
                    </div>
                    <span className="text-textPrimary group-hover:text-white font-medium leading-relaxed transition-colors duration-300">
                      {feature}
                    </span>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Enhanced Challenges Section */}
        <section className="px-4 sm:px-6 lg:px-8 py-16">
          <div className="container mx-auto">
            <motion.div 
              className="relative p-8 lg:p-12 bg-gradient-to-br from-secondary/10 via-secondary/5 to-transparent rounded-3xl border border-secondary/20 overflow-hidden"
              variants={itemVariants}
            >
              <div className="absolute top-0 right-0 w-32 h-32 bg-secondary/10 rounded-full blur-2xl"></div>
              <div className="relative">
                <div className="flex items-center space-x-3 mb-6">
                  <div className="w-12 h-12 bg-secondary/20 rounded-2xl flex items-center justify-center">
                    <Lightbulb className="text-secondary" size={24} />
                  </div>
                  <h2 className="text-3xl lg:text-4xl font-bold text-secondary">
                    Technical Challenges
                  </h2>
                </div>
                <p className="text-lg lg:text-xl text-textPrimary leading-relaxed">
                  {project.challenges}
                </p>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Enhanced Call to Action */}
        <section className="px-4 sm:px-6 lg:px-8 py-16 lg:py-24">
          <div className="container mx-auto">
            <motion.div 
              className="relative text-center p-8 lg:p-16 bg-gradient-to-br from-primary/60 to-primary/40 backdrop-blur-sm rounded-3xl border border-secondary/20 overflow-hidden"
              variants={itemVariants}
            >
              <div className="absolute inset-0 bg-gradient-to-r from-secondary/5 via-transparent to-secondary/5"></div>
              <div className="relative">
                <motion.div
                  className="w-20 h-20 bg-secondary/20 rounded-full flex items-center justify-center mx-auto mb-8"
                  whileHover={{ rotate: 360 }}
                  transition={{ duration: 0.8 }}
                >
                  <Star className="text-secondary" size={32} />
                </motion.div>
                
                <h2 className="text-3xl lg:text-4xl font-bold mb-6">
                  <span className="bg-gradient-to-r from-white to-secondary bg-clip-text text-transparent">
                    Interested in This Project?
                  </span>
                </h2>
                
                <p className="text-lg lg:text-xl text-textPrimary mb-12 max-w-3xl mx-auto leading-relaxed">
                  Want to learn more about the technical implementation, discuss similar projects, or explore collaboration opportunities? Let's connect and build something amazing together!
                </p>
                
                <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                  {project.github && (
                    <motion.a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="group inline-flex items-center justify-center space-x-3 px-8 py-4 bg-secondary/10 hover:bg-secondary/20 border-2 border-secondary/30 hover:border-secondary/50 text-secondary rounded-2xl transition-all duration-300 font-semibold min-w-[200px]"
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      <Github className="group-hover:rotate-12 transition-transform duration-300" size={20} />
                      <span>View Source Code</span>
                    </motion.a>
                  )}
                  {project.link !== '#' && (
                    <motion.a
                      href={project.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="group inline-flex items-center justify-center space-x-3 px-8 py-4 bg-gradient-to-r from-secondary to-secondary/80 hover:from-secondary/90 hover:to-secondary/70 text-primary rounded-2xl transition-all duration-300 font-semibold shadow-xl min-w-[200px]"
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      <ExternalLink className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform duration-300" size={20} />
                      <span>Live Demo</span>
                    </motion.a>
                  )}
                </div>
              </div>
            </motion.div>
          </div>
        </section>
      </motion.main>
    </div>
  );
};

export default ProjectDetail;