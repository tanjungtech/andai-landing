import { motion } from 'motion/react';
import { Layers, Users, Target, ShieldAlert } from 'lucide-react';
import { useLanguage } from '../LanguageContext';

interface ProblemCard {
  title: string;
  desc: string;
  icon: typeof Layers;
  indexCode: string;
}

export default function Problem() {
  const { language } = useLanguage();

  const header = {
    badge: language === 'id' ? 'Kebocoran Modal Awal' : 'The Seed Capital Leak',
    title: language === 'id' ? 'Mengapa Startup Membuang Waktu & Uang' : 'Why Startups Waste Time and Money'
  };

  const problems: ProblemCard[] = language === 'id' ? [
    {
      title: 'MVP yang Salah',
      desc: 'Membangun terlalu banyak fitur dan teknologi rumit sebelum memvalidasi permintaan pasar yang sebenarnya.',
      icon: Layers,
      indexCode: '01 / SCOPE'
    },
    {
      title: 'Tim yang Salah',
      desc: 'Merekrut pengembang berbiaya tinggi atau kontrak agensi sebelum menjabarkan spesifikasi teknis yang konkret.',
      icon: Users,
      indexCode: '02 / TALENT'
    },
    {
      title: 'Prioritas yang Salah',
      desc: 'Menginvestasikan modal untuk memecahkan masalah rekayasa kustom yang tidak relevan bagi pengguna utama Anda.',
      icon: Target,
      indexCode: '03 / METRIC'
    }
  ] : [
    {
      title: 'Wrong MVP',
      desc: 'Building too many features and complex technology stacks before validating actual market demand.',
      icon: Layers,
      indexCode: '01 / SCOPE'
    },
    {
      title: 'Wrong Team',
      desc: 'Hiring expensive developers or agency contracts prior to cataloging concrete technical specifications.',
      icon: Users,
      indexCode: '02 / TALENT'
    },
    {
      title: 'Wrong Priorities',
      desc: 'Investing capital in solving custom engineering problems that are irrelevant to your primary user.',
      icon: Target,
      indexCode: '03 / METRIC'
    }
  ];

  const callout = {
    bold: language === 'id' ? 'sebelum pengembangan dimulai.' : 'before development starts.',
    text: language === 'id' ? 'Sebagian besar kegagalan startup terjadi ' : 'Most startup failures happen ',
    button: language === 'id' ? 'Nilai Blueprint Pembangunan Anda' : 'Assess Your Build Blueprint'
  };

  return (
    <section id="problem-section" className="py-24 bg-neutral-50 dark:bg-neutral-950 border-t border-neutral-200/50 dark:border-neutral-900">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-16">
          <div className="flex items-center space-x-2 text-rose-600 dark:text-rose-400 font-mono text-xs tracking-wider uppercase mb-3">
            <ShieldAlert className="w-4.5 h-4.5" />
            <span>{header.badge}</span>
          </div>
          <h2 className="text-3xl md:text-5xl font-display font-extrabold text-neutral-900 dark:text-white tracking-tight leading-tight">
            {header.title}
          </h2>
        </div>

        {/* 3 Grid Cards */}
        <div className="grid md:grid-cols-3 gap-6 mb-16">
          {problems.map((prob, idx) => {
            const Icon = prob.icon;
            return (
              <motion.div
                key={prob.title}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-100px' }}
                transition={{ duration: 0.5, delay: idx * 0.15 }}
                className="p-8 rounded-xl border border-neutral-200/80 dark:border-neutral-800 bg-white dark:bg-neutral-900/50 hover:border-rose-500/30 dark:hover:border-rose-500/20 group transition-all duration-300 relative overflow-hidden shadow-sm"
              >
                {/* Visual block indexing */}
                <div className="flex justify-between items-center mb-6">
                  <span className="font-mono text-xs text-neutral-400 tracking-widest font-semibold">
                    {prob.indexCode}
                  </span>
                  <div className="w-10 h-10 rounded-lg bg-rose-50 dark:bg-rose-950/20 text-rose-600 dark:text-rose-400 border border-rose-100 dark:border-rose-900/30 flex items-center justify-center">
                    <Icon className="w-5 h-5" />
                  </div>
                </div>

                <h3 className="text-xl font-display font-bold text-neutral-900 dark:text-white group-hover:text-rose-600 dark:group-hover:text-rose-400 transition-colors">
                  {prob.title}
                </h3>
                
                <p className="text-neutral-500 dark:text-neutral-400 text-sm md:text-base leading-relaxed mt-3">
                  {prob.desc}
                </p>
                
                {/* Horizontal line effect */}
                <div className="absolute left-0 bottom-0 h-1 bg-gradient-to-r from-rose-500 to-amber-500 w-0 group-hover:w-full transition-all duration-500" />
              </motion.div>
            );
          })}
        </div>

        {/* Statement callout below */}
        <div className="bg-neutral-100 dark:bg-neutral-900 p-6 rounded-xl border border-neutral-250 dark:border-neutral-800 flex flex-col md:flex-row items-center justify-between gap-4 max-w-4xl mx-auto">
          <div className="flex items-center space-x-3 text-neutral-800 dark:text-neutral-200 font-medium">
            <span className="w-2.5 h-2.5 rounded-full bg-rose-500 animate-pulse shrink-0" />
            <span className="text-sm md:text-base">
              {callout.text}<strong className="font-extrabold text-neutral-900 dark:text-white">{callout.bold}</strong>
            </span>
          </div>
          <button 
            onClick={() => document.getElementById('assessment-section')?.scrollIntoView({ behavior: 'smooth' })}
            className="text-xs font-mono font-bold uppercase tracking-wider text-rose-600 dark:text-rose-400 hover:underline flex items-center space-x-1"
          >
            <span>{callout.button}</span>
            <span>→</span>
          </button>
        </div>

      </div>
    </section>
  );
}
