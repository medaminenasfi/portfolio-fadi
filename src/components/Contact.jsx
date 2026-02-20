import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import emailjs from '@emailjs/browser';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);
  const [errorMessage, setErrorMessage] = useState('');

  // Initialize EmailJS with your Public Key
  useEffect(() => {
    emailjs.init('eh9UFCWRNwttWzRvD');
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    // Validate form fields
    if (!formData.name || !formData.email || !formData.message) {
      setSubmitStatus('error');
      setErrorMessage('Please fill in all required fields');
      setTimeout(() => {
        setSubmitStatus(null);
        setErrorMessage('');
      }, 3000);
      return;
    }

    setIsSubmitting(true);
    
    try {
      const response = await emailjs.send(
        'service_wr6y4b9', // Your EmailJS Service ID
        'template_jg0pwsf', // Your Template ID
        {
          from_name: formData.name,
          from_email: formData.email,
          subject: formData.subject || 'No Subject Provided',
          message: formData.message
        }
      );

      console.log('EmailJS Response:', response);
      
      if (response.status === 200) {
        setSubmitStatus('success');
        setFormData({ name: '', email: '', subject: '', message: '' });
      } else {
        setSubmitStatus('error');
        setErrorMessage('Failed to send message. Please try again.');
      }
    } catch (error) {
      console.error('EmailJS Error:', error);
      setSubmitStatus('error');
      setErrorMessage('Server error. Please try again later.');
    } finally {
      setIsSubmitting(false);
      setTimeout(() => {
        setSubmitStatus(null);
        setErrorMessage('');
      }, 3000);
    }
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const contactInfo = [
    {
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" 
                d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
        </svg>
      ),
      title: "Email",
      value: "medaminenasfy@gmail.com",
      link: "mailto:medaminenasfy@gmail.com"
    },
    {
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" 
                d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
        </svg>
      ),
      title: "Phone",
      value: "+216 27711810",
      link: "tel:+21627711810"
    },
    {
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" 
                d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" 
                d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
        </svg>
      ),
      title: "Location",
      value: "Gabes, Tunisia",
      link: null
    }
  ];

  const socialLinks = [
    {
      name: "GitHub",
      icon: (
        <svg className="w-7 h-7" fill="currentColor" viewBox="0 0 24 24">
          <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" />
        </svg>
      ),
      link: "https://github.com/medaminenasfi",
      color: "from-gray-600 to-gray-800",
      hoverColor: "hover:text-gray-300 hover:shadow-[0_0_15px_rgba(107,114,128,0.4)]"
    },
    {
      name: "LinkedIn",
      icon: (
        <svg className="w-7 h-7" fill="currentColor" viewBox="0 0 24 24">
          <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
        </svg>
      ),
      link: "https://www.linkedin.com/in/mohamed-amine-nasfi",
      color: "from-blue-600 to-blue-800",
      hoverColor: "hover:text-blue-400 hover:shadow-[0_0_15px_rgba(59,130,246,0.4)]"
    },
    {
      name: "Upwork",
      icon: (
        <svg className="w-7 h-7" fill="currentColor" viewBox="0 0 24 24">
          <path d="M18.561 13.158c-1.102 0-2.135-.467-3.074-1.227l.228-1.076.008-.042c.207-1.143.849-3.06 2.839-3.06 1.492 0 2.703 1.212 2.703 2.703-.001 1.489-1.212 2.702-2.704 2.702zm0-8.14c-2.539 0-4.51 1.649-5.31 4.366-1.22-1.834-2.148-4.036-2.687-5.892H7.828v7.112c-.002 1.406-1.141 2.546-2.547 2.548-1.405-.002-2.543-1.143-2.545-2.548V3.492H0v7.112c0 2.914 2.37 5.303 5.281 5.303 2.913 0 5.283-2.389 5.283-5.303v-1.19c.529 1.107 1.182 2.229 1.974 3.221l-1.673 7.873h2.797l1.213-5.71c1.063.679 2.285 1.109 3.686 1.109 3 0 5.439-2.452 5.439-5.45 0-3.002-2.439-5.453-5.439-5.453z"/>
        </svg>
      ),
      link: "https://www.upwork.com/freelancers/~017cad0a2a355873b2?mp_source=share",
      isFreelance: true,
      color: "from-green-500 to-emerald-600",
      hoverColor: "hover:text-green-400 hover:shadow-[0_0_15px_rgba(34,197,94,0.4)]"
    }
  ];

  return (
    <section id="contact" className="min-h-screen flex items-center section-padding relative w-full max-w-full overflow-hidden">
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        className="container mx-auto px-4 sm:px-6 w-full max-w-full"
      >
        {/* Section Header */}
        <motion.div
          initial={{ y: -20, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true }}
          className="text-center space-y-4 mb-12 sm:mb-16"
        >
          <h2 className="heading">Get In Touch</h2>
          <p className="text-textSecondary max-w-2xl mx-auto text-sm sm:text-base">
            I'm currently looking for new opportunities. Whether you have a question or just want to say hi,
            I'll try my best to get back to you!
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12">
          {/* Contact Form */}
          <motion.div
            initial={{ x: -50, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            viewport={{ once: true }}
            className="bg-primary/30 p-4 sm:p-6 md:p-8 rounded-lg border border-secondary/20"
          >
            <form onSubmit={handleSubmit} className="space-y-4 sm:space-y-6">
              <div className="grid sm:grid-cols-2 gap-4 sm:gap-6">
                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.1 }}
                >
                  <label htmlFor="name" className="block text-textSecondary mb-2 text-sm sm:text-base font-medium flex items-center gap-2">
                    <svg className="w-4 h-4 text-secondary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                    </svg>
                    Name *
                  </label>
                  <motion.input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    whileFocus={{ scale: 1.02 }}
                    className="w-full px-3 sm:px-4 py-2.5 sm:py-3 bg-primary/50 border-2 border-secondary/20 rounded-xl 
                             focus:outline-none focus:border-secondary text-textPrimary transition-all duration-300 text-sm sm:text-base
                             hover:border-secondary/40 focus:shadow-lg focus:shadow-secondary/20"
                    required
                  />
                </motion.div>
                <motion.div
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.2 }}
                >
                  <label htmlFor="email" className="block text-textSecondary mb-2 text-sm sm:text-base font-medium flex items-center gap-2">
                    <svg className="w-4 h-4 text-secondary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                    Email *
                  </label>
                  <motion.input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    whileFocus={{ scale: 1.02 }}
                    className="w-full px-3 sm:px-4 py-2.5 sm:py-3 bg-primary/50 border-2 border-secondary/20 rounded-xl 
                             focus:outline-none focus:border-secondary text-textPrimary transition-all duration-300 text-sm sm:text-base
                             hover:border-secondary/40 focus:shadow-lg focus:shadow-secondary/20"
                    required
                  />
                </motion.div>
              </div>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.3 }}
              >
                <label htmlFor="subject" className="block text-textSecondary mb-2 text-sm sm:text-base font-medium flex items-center gap-2">
                  <svg className="w-4 h-4 text-secondary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 8h10M7 12h4m1 8l-4-4H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-3l-4 4z" />
                  </svg>
                  Subject
                </label>
                <motion.input
                  type="text"
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  whileFocus={{ scale: 1.02 }}
                  className="w-full px-3 sm:px-4 py-2.5 sm:py-3 bg-primary/50 border-2 border-secondary/20 rounded-xl 
                           focus:outline-none focus:border-secondary text-textPrimary transition-all duration-300 text-sm sm:text-base
                           hover:border-secondary/40 focus:shadow-lg focus:shadow-secondary/20"
                />
              </motion.div>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.4 }}
              >
                <label htmlFor="message" className="block text-textSecondary mb-2 text-sm sm:text-base font-medium flex items-center gap-2">
                  <svg className="w-4 h-4 text-secondary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" />
                  </svg>
                  Message *
                </label>
                <motion.textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows="5"
                  whileFocus={{ scale: 1.02 }}
                  className="w-full px-3 sm:px-4 py-2.5 sm:py-3 bg-primary/50 border-2 border-secondary/20 rounded-xl 
                           focus:outline-none focus:border-secondary text-textPrimary transition-all duration-300 text-sm sm:text-base resize-none
                           hover:border-secondary/40 focus:shadow-lg focus:shadow-secondary/20"
                  required
                ></motion.textarea>
              </motion.div>
              <motion.button
                type="submit"
                disabled={isSubmitting}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.5, type: "spring", stiffness: 300 }}
                className={`w-full px-6 sm:px-8 py-3 sm:py-4 bg-gradient-to-r from-secondary to-secondary/80 text-white font-bold rounded-xl
                         transition-all duration-500 relative overflow-hidden group text-sm sm:text-base shadow-lg shadow-secondary/30
                         ${isSubmitting ? 'opacity-75 cursor-not-allowed' : 'hover:from-secondary/90 hover:to-secondary/70'}`}
              >
                {/* Animated background */}
                <motion.div 
                  className="absolute inset-0 bg-gradient-to-r from-primary/20 to-transparent"
                  initial={{ x: "-100%" }}
                  animate={{ x: isSubmitting ? ["100%", "-100%"] : "100%" }}
                  transition={{ duration: 1.5, repeat: isSubmitting ? Infinity : 0, ease: "linear" }}
                />
                
                <span className="relative z-10 flex items-center justify-center gap-2">
                  {isSubmitting ? (
                    <>
                      <motion.svg
                        animate={{ rotate: 360 }}
                        transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
                        className="w-5 h-5"
                        fill="none"
                        viewBox="0 0 24 24"
                      >
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
                      </motion.svg>
                      Sending...
                    </>
                  ) : (
                    <>
                      Send Message
                      <motion.svg
                        className="w-5 h-5"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                        animate={{ x: [0, 4, 0] }}
                        transition={{ duration: 1.5, repeat: Infinity }}
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                      </motion.svg>
                    </>
                  )}
                </span>
                
                {/* Shimmer effect */}
                <div className="absolute inset-0 -translate-x-full group-hover:translate-x-full transition-transform duration-1000 bg-gradient-to-r from-transparent via-white/20 to-transparent skew-x-12" />
              </motion.button>

              {/* Status Messages */}
              {submitStatus === 'success' && (
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="mt-4 p-4 bg-green-500/20 border border-green-500/50 rounded-lg text-green-400 text-center"
                >
                  Message sent successfully! I'll get back to you soon.
                </motion.div>
              )}
              {submitStatus === 'error' && (
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="mt-4 p-4 bg-red-500/20 border border-red-500/50 rounded-lg text-red-400 text-center"
                >
                  {errorMessage}
                </motion.div>
              )}
            </form>
          </motion.div>

          {/* Contact Info */}
          <motion.div
            initial={{ x: 50, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            viewport={{ once: true }}
            className="space-y-6 sm:space-y-8"
          >
            {/* Contact Methods */}
            <div className="space-y-4 sm:space-y-6">
              {contactInfo.map((info, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="bg-primary/30 p-4 sm:p-6 rounded-lg border border-secondary/20 hover:border-secondary/50 
                           transition-all group"
                >
                  {info.link ? (
                    <a href={info.link} className="flex items-center space-x-3 sm:space-x-4">
                      <div className="text-secondary group-hover:text-secondary/80 transition-colors flex-shrink-0">
                        {info.icon}
                      </div>
                      <div className="min-w-0">
                        <h3 className="text-textPrimary font-medium text-sm sm:text-base truncate">{info.title}</h3>
                        <p className="text-textSecondary group-hover:text-secondary transition-colors text-xs sm:text-sm truncate">
                          {info.value}
                        </p>
                      </div>
                    </a>
                  ) : (
                    <div className="flex items-center space-x-3 sm:space-x-4">
                      <div className="text-secondary flex-shrink-0">{info.icon}</div>
                      <div className="min-w-0">
                        <h3 className="text-textPrimary font-medium text-sm sm:text-base truncate">{info.title}</h3>
                        <p className="text-textSecondary text-xs sm:text-sm truncate">{info.value}</p>
                      </div>
                    </div>
                  )}
                </motion.div>
              ))}
            </div>

            {/* Social Links */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="bg-primary/30 p-6 sm:p-8 rounded-xl border border-secondary/20 backdrop-blur-sm"
            >
              <h3 className="text-xl sm:text-2xl font-bold text-secondary mb-6 sm:mb-8 text-center">Connect With Me</h3>
              <div className="flex justify-center gap-4 sm:gap-6 mb-4 sm:mb-6">
                {socialLinks.map((social, index) => (
                  <motion.div key={index} className="relative group">
                    <motion.a
                      href={social.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: index * 0.1 }}
                      whileHover={{ 
                        scale: 1.15,
                        rotate: [0, -5, 5, 0],
                        transition: { duration: 0.3 }
                      }}
                      whileTap={{ scale: 0.9 }}
                      className={`relative p-3 sm:p-4 rounded-xl text-textSecondary transition-all duration-500 border-2
                               overflow-hidden group-hover:border-transparent
                               ${social.isFreelance 
                                 ? `bg-gradient-to-br ${social.color}/20 border-green-400/50 ${social.hoverColor}` 
                                 : `bg-gradient-to-br ${social.color}/10 border-gray-400/30 ${social.hoverColor}`
                               }`}
                    >
                      {/* Animated background gradient */}
                      <div className={`absolute inset-0 bg-gradient-to-br ${social.color} opacity-0 group-hover:opacity-20 transition-opacity duration-500`} />
                      
                      {/* Icon with glow effect */}
                      <div className="relative z-10 group-hover:drop-shadow-[0_0_10px_currentColor]">
                        {social.icon}
                      </div>
                      
                      {/* Platform name tooltip */}
                      <div className="absolute -bottom-12 left-1/2 transform -translate-x-1/2 bg-gray-900 text-white text-xs px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity duration-300 whitespace-nowrap pointer-events-none">
                        {social.name}
                        <div className="absolute -top-1 left-1/2 transform -translate-x-1/2 w-2 h-2 bg-gray-900 rotate-45"></div>
                      </div>
                    </motion.a>
                    
                    {/* Enhanced freelance badge */}
                    {social.isFreelance && (
                      <motion.div 
                        initial={{ scale: 0 }}
                        animate={{ scale: 1 }}
                        transition={{ delay: 0.5, type: "spring", stiffness: 500 }}
                        className="absolute -top-3 -right-3 bg-gradient-to-r from-green-500 to-emerald-600 text-xs px-3 py-1 rounded-full text-white font-bold shadow-lg"
                      >
                        <motion.span
                          animate={{ scale: [1, 1.1, 1] }}
                          transition={{ duration: 2, repeat: Infinity }}
                        >
                          HIRE ME
                        </motion.span>
                      </motion.div>
                    )}
                  </motion.div>
                ))}
              </div>
              
              {/* Enhanced Freelance CTA */}
              <motion.div 
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.4 }}
                className="p-4 sm:p-6 bg-gradient-to-r from-green-500/15 via-emerald-500/15 to-blue-500/15 border-2 border-green-400/40 rounded-xl backdrop-blur-sm relative overflow-hidden"
              >
                {/* Animated background pattern */}
                <div className="absolute inset-0 opacity-10">
                  <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-r from-green-400/20 to-transparent animate-pulse"></div>
                </div>
                
                <div className="relative z-10">
                  <div className="flex items-center justify-center gap-3 sm:gap-4 mb-3">
                    <motion.div 
                      animate={{ scale: [1, 1.2, 1] }}
                      transition={{ duration: 2, repeat: Infinity }}
                      className="w-3 h-3 sm:w-4 sm:h-4 bg-green-400 rounded-full shadow-[0_0_10px_rgba(34,197,94,0.6)]"
                    ></motion.div>
                    <p className="text-green-400 font-bold text-base sm:text-lg text-center">Available for Freelance Projects</p>
                    <motion.div 
                      animate={{ rotate: 360 }}
                      transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
                      className="text-green-400 text-lg sm:text-xl"
                    >
                      ⚡
                    </motion.div>
                  </div>
                  <div className="text-center">
                    <p className="text-textSecondary text-xs sm:text-sm leading-relaxed">
                      🚀 Ready to bring your ideas to life with <span className="text-green-400 font-semibold">full-stack development expertise</span>
                    </p>
                    <p className="text-xs text-textSecondary/80 mt-2">
                      MERN Stack • Next.js  • Node.js • Express.js
                    </p>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          </motion.div>
        </div>

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
    </section>
  );
};


export default Contact;