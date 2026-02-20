import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Experience from './components/Experience';
import Projects from './components/Projects';
import Skills from './components/Skills';
import Education from './components/Education';
import Contact from './components/Contact';
import Footer from './components/Footer';
import ScrollToTop from './components/ScrollToTop';
import ProjectDetail from './components/ProjectDetail';

// Main Portfolio Page Component
const HomePage = () => (
  <>
    <Hero />
    <About />
    <Experience />
    <Projects />
    <Skills />
    <Education />
    <Contact />
  </>
);

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-primary overflow-x-hidden w-full max-w-full">
        <Routes>
          <Route path="/" element={
            <>
              <Header />
              <main className="overflow-x-hidden w-full">
                <HomePage />
              </main>
              <Footer />
              <ScrollToTop />
            </>
          } />
          <Route path="/project/:id" element={<ProjectDetail />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;