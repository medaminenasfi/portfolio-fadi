import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-primary/90 py-8">
      <div className="container mx-auto px-4 text-center">
        <div className="flex flex-col items-center space-y-6 mb-6">
          {/* Freelance CTA Section */}
          <div className="flex flex-col sm:flex-row items-center gap-4">
            <a
              href="https://www.upwork.com/freelancers/~017cad0a2a355873b2?mp_source=share"
              target="_blank"
              rel="noopener noreferrer"
              className="group relative px-8 py-4 bg-gradient-to-r from-green-500 via-emerald-500 to-green-600 text-white font-bold rounded-xl overflow-hidden transition-all duration-500 hover:scale-110 hover:shadow-[0_0_25px_rgba(34,197,94,0.6)] hover:rotate-1 transform-gpu"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-green-600 to-blue-700 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              <div className="relative flex items-center gap-2">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M18.561 13.158c-1.102 0-2.135-.467-3.074-1.227l.228-1.076.008-.042c.207-1.143.849-3.06 2.839-3.06 1.492 0 2.703 1.212 2.703 2.703-.001 1.489-1.212 2.702-2.704 2.702zm0-8.14c-2.539 0-4.51 1.649-5.31 4.366-1.22-1.834-2.148-4.036-2.687-5.892H7.828v7.112c-.002 1.406-1.141 2.546-2.547 2.548-1.405-.002-2.543-1.143-2.545-2.548V3.492H0v7.112c0 2.914 2.37 5.303 5.281 5.303 2.913 0 5.283-2.389 5.283-5.303v-1.19c.529 1.107 1.182 2.229 1.974 3.221l-1.673 7.873h2.797l1.213-5.71c1.063.679 2.285 1.109 3.686 1.109 3 0 5.439-2.452 5.439-5.45 0-3.002-2.439-5.453-5.439-5.453z"/>
                </svg>
                <span>Hire Me on Upwork</span>
                <div className="w-2 h-2 bg-green-300 rounded-full animate-pulse"></div>
              </div>
            </a>
            <div className="text-center sm:text-left">
              <p className="text-green-400 font-semibold text-sm">🚀 Available for Projects</p>
              <p className="text-textSecondary text-xs">Full-Stack Development | MERN Stack</p>
            </div>
          </div>
          
          {/* Social Links */}
          <div className="flex justify-center space-x-6">
            <a
              href="https://github.com/medaminenasfi"
              target="_blank"
              rel="noopener noreferrer"
              className="text-textSecondary hover:text-secondary transition-colors"
            >
              GitHub
            </a>
            <a
              href="http://linkedin.com/in/mohamed-amine-nasfi/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-textSecondary hover:text-secondary transition-colors"
            >
              LinkedIn
            </a>
          </div>
        </div>
        <p className="text-textSecondary text-sm">
  © 2026 Mohamed Amine Nasfi. All rights reserved.

        </p>
      </div>
    </footer>
  );
};

export default Footer;