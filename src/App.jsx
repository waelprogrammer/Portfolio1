import { useState, useEffect } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { LanguageProvider } from './context/LanguageContext';
import { motion } from 'framer-motion';
import { Sun, Moon } from 'lucide-react';
import CustomCursor from './components/CustomCursor';
import PageTransition from './components/PageTransition';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Services from './components/Services';
import Portfolio from './components/Portfolio';
import Photography from './components/Photography';
import Skills from './components/Skills';
import Testimonials from './components/Testimonials';
import Contact from './components/Contact';
import Footer from './components/Footer';
import ProjectsPage from './pages/ProjectsPage';

function HomePage({ darkMode, setDarkMode }) {
  return (
    <PageTransition>
      <CustomCursor />

      <div style={{
        position: 'fixed', inset: 0, pointerEvents: 'none', zIndex: 2,
        backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.8' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E")`,
        opacity: 0.025,
      }} />

      <motion.button
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2.5 }}
        onClick={() => setDarkMode(!darkMode)}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        style={{
          position: 'fixed', bottom: '32px', right: '32px', zIndex: 500,
          width: '48px', height: '48px', borderRadius: '50%',
          background: 'rgba(255,110,199,0.12)',
          border: '1.5px solid rgba(255,110,199,0.3)',
          backdropFilter: 'blur(10px)',
          color: '#ff6ec7', cursor: 'none',
          display: 'flex', alignItems: 'center', justifyContent: 'center',
          boxShadow: '0 4px 20px rgba(255,110,199,0.2)',
        }}
      >
        {darkMode ? <Sun size={19} /> : <Moon size={19} />}
      </motion.button>

      <Navbar />
      <main>
        <Hero />
        <About />
        <Services />
        <Portfolio />
        <Photography />
        <Skills />
        <Testimonials />
        <Contact />
      </main>
      <Footer />
    </PageTransition>
  );
}

function ProjectsRoute() {
  return (
    <>
      <CustomCursor />
      <Navbar />
      <ProjectsPage />
      <Footer />
    </>
  );
}

export default function App() {
  const [darkMode, setDarkMode] = useState(true);

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', darkMode ? 'dark' : 'light');
  }, [darkMode]);

  return (
    <BrowserRouter>
      <LanguageProvider>
      <Routes>
        <Route path="/" element={<HomePage darkMode={darkMode} setDarkMode={setDarkMode} />} />
        <Route path="/projects" element={<ProjectsRoute />} />
      </Routes>
      </LanguageProvider>
    </BrowserRouter>
  );
}
