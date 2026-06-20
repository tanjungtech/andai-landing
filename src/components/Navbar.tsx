import { useState, useEffect } from 'react';
import { Sun, Moon, Menu, X, ArrowUpRight, Globe } from 'lucide-react';
import andaiLogo from '../assets/images/andai_favicon_1781897993973.jpg';
import { useLanguage } from '../LanguageContext';

interface NavbarProps {
  darkMode: boolean;
  setDarkMode: (dark: boolean) => void;
}

export default function Navbar({ darkMode, setDarkMode }: NavbarProps) {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const { language, setLanguage } = useLanguage();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleTheme = () => {
    setDarkMode(!darkMode);
  };

  const scrollToSection = (id: string) => {
    setMobileMenuOpen(false);
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const menuItems = language === 'id' ? [
    { label: 'Layanan', id: 'services-section' },
    { label: 'Proses', id: 'process-section' },
    { label: 'Pendiri', id: 'founder-section' },
    { label: 'Kontak', id: 'contact-section' }
  ] : [
    { label: 'Services', id: 'services-section' },
    { label: 'Process', id: 'process-section' },
    { label: 'Founder', id: 'founder-section' },
    { label: 'Contact', id: 'contact-section' }
  ];

  const buildButtonLabel = language === 'id' ? 'Mulai Jalan' : 'Let’s Build';


  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-white/80 dark:bg-neutral-950/80 backdrop-blur-md border-b border-neutral-200/50 dark:border-neutral-800/50 py-3 shadow-md'
          : 'bg-transparent py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
        {/* Logo */}
        <button
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          className="flex items-center space-x-2 focus:outline-none group"
        >
          <img
            src={andaiLogo}
            alt="ANDAI Logo"
            className="w-8 h-8 rounded-lg object-cover shadow-lg group-hover:scale-105 transition-transform duration-300 border border-neutral-200/50 dark:border-neutral-800/50"
            referrerPolicy="no-referrer"
          />
          <span className="font-display font-extrabold text-lg md:text-xl text-neutral-900 dark:text-white tracking-widest uppercase">
            ANDAI
          </span>
        </button>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-8">
          {menuItems.map((item) => (
            <button
              key={item.label}
              onClick={() => scrollToSection(item.id)}
              className="text-sm font-medium text-neutral-500 hover:text-neutral-900 dark:text-neutral-400 dark:hover:text-white transition-colors cursor-pointer"
            >
              {item.label}
            </button>
          ))}
        </nav>

        {/* Right Actions */}
        <div className="hidden md:flex items-center space-x-4">
          {/* Language Switcher */}
          <div className="flex items-center space-x-1 p-0.5 rounded-full bg-neutral-100 dark:bg-neutral-900 border border-neutral-250 dark:border-neutral-800 text-xs font-semibold font-mono mr-1">
            <button
              onClick={() => setLanguage('id')}
              className={`px-2.5 py-1 rounded-full transition-all text-[11px] cursor-pointer ${
                language === 'id'
                  ? 'bg-purple-600 text-white shadow-sm'
                  : 'text-neutral-500 hover:text-neutral-900 dark:hover:text-white'
              }`}
            >
              ID
            </button>
            <button
              onClick={() => setLanguage('en')}
              className={`px-2.5 py-1 rounded-full transition-all text-[11px] cursor-pointer ${
                language === 'en'
                  ? 'bg-purple-600 text-white shadow-sm'
                  : 'text-neutral-500 hover:text-neutral-900 dark:hover:text-white'
              }`}
            >
              EN
            </button>
          </div>

          {/* Theme switcher */}
          <button
            onClick={toggleTheme}
            className="p-2 rounded-full hover:bg-neutral-150 dark:hover:bg-neutral-900 text-neutral-500 dark:text-neutral-400 focus:outline-none"
            aria-label="Toggle theme"
          >
            {darkMode ? <Sun className="w-4.5 h-4.5 text-amber-500" /> : <Moon className="w-4.5 h-4.5 text-neutral-600" />}
          </button>

          {/* Let's build Primary CTA */}
          <button
            onClick={() => scrollToSection('contact-section')}
            className="inline-flex items-center space-x-1 px-4 py-2 rounded-full text-xs font-bold font-mono tracking-wider uppercase text-white bg-neutral-900 hover:bg-neutral-800 dark:bg-white dark:text-neutral-950 dark:hover:bg-neutral-100 shadow-md hover:shadow-lg transition-all"
          >
            <span>{buildButtonLabel}</span>
            <ArrowUpRight className="w-3.5 h-3.5" />
          </button>
        </div>

        {/* Mobile controls */}
        <div className="flex items-center space-x-2 md:hidden">
          {/* Language Switcher for mobile */}
          <div className="flex items-center space-x-0.5 p-0.5 rounded-full bg-neutral-100 dark:bg-neutral-900 border border-neutral-250 dark:border-neutral-800 text-[10px] font-semibold font-mono mr-1">
            <button
              onClick={() => setLanguage('id')}
              className={`px-1.5 py-0.5 rounded-full transition-all cursor-pointer ${
                language === 'id'
                  ? 'bg-purple-600 text-white shadow-sm'
                  : 'text-neutral-500 hover:text-neutral-900 dark:hover:text-white'
              }`}
            >
              ID
            </button>
            <button
              onClick={() => setLanguage('en')}
              className={`px-1.5 py-0.5 rounded-full transition-all cursor-pointer ${
                language === 'en'
                  ? 'bg-purple-600 text-white shadow-sm'
                  : 'text-neutral-500 hover:text-neutral-900 dark:hover:text-white'
              }`}
            >
              EN
            </button>
          </div>

          {/* Theme switcher for mobile */}
          <button
            onClick={toggleTheme}
            className="p-2 rounded-full hover:bg-neutral-150 dark:hover:bg-neutral-900 text-neutral-500 dark:text-neutral-400"
            aria-label="Toggle theme"
          >
            {darkMode ? <Sun className="w-4 h-4 text-amber-500" /> : <Moon className="w-4 h-4 text-neutral-600" />}
          </button>

          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-2 rounded-lg text-neutral-600 dark:text-neutral-400 hover:bg-neutral-150 dark:hover:bg-neutral-900 focus:outline-none"
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden absolute top-full left-0 right-0 bg-white dark:bg-neutral-950 border-b border-neutral-200 dark:border-neutral-800 py-6 px-6 shadow-2xl flex flex-col space-y-4">
          {menuItems.map((item) => (
            <button
              key={item.label}
              onClick={() => scrollToSection(item.id)}
              className="text-left py-2 font-medium text-neutral-700 dark:text-neutral-300 hover:text-black dark:hover:text-white"
            >
              {item.label}
            </button>
          ))}
          <button
            onClick={() => scrollToSection('contact-section')}
            className="w-full justify-center inline-flex items-center space-x-1 px-4 py-3 rounded-xl text-xs font-bold font-mono tracking-wider uppercase text-white bg-neutral-900 dark:bg-white dark:text-neutral-950 shadow-md hover:shadow-lg transition-all"
          >
            <span>{buildButtonLabel}</span>
            <ArrowUpRight className="w-4 h-4" />
          </button>
        </div>
      )}
    </header>
  );
}
