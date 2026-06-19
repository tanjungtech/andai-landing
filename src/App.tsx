import { useState, useEffect } from 'react';
import { LanguageProvider } from './LanguageContext';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Problem from './components/Problem';
import Services from './components/Services';
import Process from './components/Process';
import Founder from './components/Founder';
import Validation from './components/Validation';
import Assessment from './components/Assessment';
import Contact from './components/Contact';
import CTA from './components/CTA';
import Footer from './components/Footer';

function AppContent() {
  const [darkMode, setDarkMode] = useState(() => {
    // Check local storage or default to false for light-first theme
    const stored = localStorage.getItem('theme');
    if (stored) return stored === 'dark';
    return false; // Premium SaaS starts light by default
  });

  useEffect(() => {
    const root = window.document.documentElement;
    if (darkMode) {
      root.classList.add('dark');
      localStorage.setItem('theme', 'dark');
    } else {
      root.classList.remove('dark');
      localStorage.setItem('theme', 'light');
    }
  }, [darkMode]);

  return (
    <div className={`min-h-screen text-base select-custom transition-colors duration-300 ${
      darkMode ? 'dark bg-neutral-950 text-neutral-200' : 'bg-white text-neutral-800'
    }`}>
      {/* Dynamic Background Noise Effect Overlay */}
      <div className="fixed inset-0 pointer-events-none z-45 bg-[radial-gradient(#80808005_1px,transparent_1px)] dark:bg-[radial-gradient(#ffffff02_1px,transparent_1px)] bg-[size:16px_16px] opacity-70" />

      {/* Styled glass header navigation */}
      <Navbar darkMode={darkMode} setDarkMode={setDarkMode} />

      <main className="relative z-10">
        {/* Core Sections assembled cleanly */}
        <Hero />
        <Problem />
        <Services />
        <Process />
        <Founder />
        <Validation />
        <Assessment />
        <Contact />
        <CTA />
      </main>

      {/* Structured Footer */}
      <Footer />
    </div>
  );
}

export default function App() {
  return (
    <LanguageProvider>
      <AppContent />
    </LanguageProvider>
  );
}

