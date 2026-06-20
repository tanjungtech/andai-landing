import { motion } from 'motion/react';
import { ArrowRight, ChevronDown, CheckCircle } from 'lucide-react';
import HeroWorkflow from './HeroWorkflow';
import { useLanguage } from '../LanguageContext';

export default function Hero() {
  const { language } = useLanguage();

  const scrollToAssessment = () => {
    document.getElementById('assessment-section')?.scrollIntoView({ behavior: 'smooth' });
  };

  const scrollToContact = () => {
    document.getElementById('contact-section')?.scrollIntoView({ behavior: 'smooth' });
  };

  const content = {
    badge: language === 'id' ? 'Partner Pengembangan Startup' : 'Your Startup Execution Partner',
    titleStart: language === 'id' ? 'Buat Ide Kamu Jadi ' : 'Transform Your Idea Into ',
    titleGradient: language === 'id' ? 'Startup yang Menguntungkan' : 'A Profitable Startup',
    // titleEnd: language === 'id' ? '' : ' with Confidence',
    subtitle: language === 'id' 
      ? 'ANDAI membantu founder mengembangkan ide menjadi startup mesin uang. Berpartner untuk eksekusi lebih cepat dan resiko lebih rendah.'
      : 'Got a killer startup idea but not sure what’s next? ANDAI helps you build startup faster, cost-saving, without losing that crucial human touch.',
    ctaDiscover: language === 'id' ? 'Temukan Startup Anda' : 'Discover Your Startup',
    ctaBuild: language === 'id' ? 'Mulai Jalan' : 'Let’s Build',
    explore: language === 'id' ? 'Pelajari Konsep Eksekusi' : 'Explore Execution Framework'
  };

  return (
    <section className="relative min-h-screen pt-32 pb-24 flex flex-col items-center justify-center overflow-hidden bg-white dark:bg-neutral-950">
      {/* Subtle Grid Backdrop */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#8080800a_1px,transparent_1px),linear-gradient(to_bottom,#8080800a_1px,transparent_1px)] bg-[size:14px_24px] dark:bg-[linear-gradient(to_right,#ffffff05_1px,transparent_1px),linear-gradient(to_bottom,#ffffff05_1px,transparent_1px)]" />

      {/* Ambiance Radial Gradients */}
      <div className="absolute top-1/6 left-1/2 -translate-x-1/2 -translate-y-1/2 w-3/4 max-w-4xl h-80 bg-radial from-purple-200/40 via-blue-200/20 to-transparent dark:from-purple-900/10 dark:via-blue-900/5 dark:to-transparent rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 relative z-10 text-center flex flex-col items-center">
        {/* Top Announcement Badge */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="inline-flex items-center space-x-2 bg-neutral-100 dark:bg-neutral-900 border border-neutral-250 dark:border-neutral-800 px-3 py-1 rounded-full text-xs text-neutral-600 dark:text-neutral-400 font-mono mb-8"
        >
          <span className="w-2 h-2 rounded-full bg-purple-600" />
          <span>{content.badge}</span>
        </motion.div>

        {/* Hero Title */}
        <motion.h1
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-4xl sm:text-6xl md:text-7xl font-display font-extrabold text-neutral-900 dark:text-white max-w-5xl tracking-tight leading-[1.08] mb-6"
        >
          {content.titleStart}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 via-purple-600 to-pink-500">
            {content.titleGradient}
          </span>
          {/* {content.titleEnd} */}
        </motion.h1>

        {/* Hero Subtitle */}
        <motion.p
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.35 }}
          className="text-base sm:text-lg md:text-xl text-neutral-500 dark:text-neutral-400 max-w-3xl leading-relaxed mb-10"
        >
          {content.subtitle}
        </motion.p>

        {/* Action CTAs */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.45 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-20 w-full sm:w-auto"
        >
          <button
            onClick={scrollToAssessment}
            className="w-full sm:w-auto inline-flex items-center justify-center space-x-2 px-7 py-3.5 rounded-full text-sm font-bold font-mono tracking-wider uppercase bg-purple-600 hover:bg-purple-700 text-white shadow-lg hover:shadow-xl transition-all hover:-translate-y-0.5 active:translate-y-0 cursor-pointer"
          >
            <span>{content.ctaDiscover}</span>
            <ArrowRight className="w-4.5 h-4.5" />
          </button>
          
          <button
            onClick={scrollToContact}
            className="w-full sm:w-auto inline-flex items-center justify-center space-x-1.5 px-7 py-3.5 rounded-full text-sm font-bold font-mono tracking-wider uppercase bg-neutral-100 hover:bg-neutral-150 border border-neutral-250 dark:bg-neutral-900 dark:hover:bg-neutral-850 dark:border-neutral-800 text-neutral-800 dark:text-neutral-200 transition-all cursor-pointer"
          >
            <span>{content.ctaBuild}</span>
          </button>
        </motion.div>

        {/* Hero Workflow Diagram Showcase */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.55 }}
          className="w-full"
        >
          <HeroWorkflow />
        </motion.div>

        {/* Subtle Indicator to scroll */}
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ repeat: Infinity, duration: 2, ease: 'easeInOut' }}
          className="mt-16 flex flex-col items-center text-[10px] text-neutral-400 font-mono tracking-widest uppercase cursor-pointer pointer-events-none"
        >
          <span>{content.explore}</span>
          <ChevronDown className="w-4 h-4 mt-1 text-neutral-400" />
        </motion.div>
      </div>
    </section>
  );
}
