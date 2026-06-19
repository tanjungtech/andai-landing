import { motion } from 'motion/react';
import { Calendar, UserCheck, Shield, Globe } from 'lucide-react';
import { useLanguage } from '../LanguageContext';

interface Metric {
  value: string;
  label: string;
  desc: string;
  icon: typeof Calendar;
}

export default function Validation() {
  const { language } = useLanguage();

  const header = {
    badge: language === 'id' ? 'Kemampuan Terbukti' : 'Proven Capability',
    title: language === 'id' ? 'Dibangun di Atas Pengalaman Nyata' : 'Built On Real Experience',
    desc: language === 'id' 
      ? 'Validasi kepemimpinan teknis nyata yang berfokus sepenuhnya pada kecepatan eksekusi produk.'
      : 'Tangible technical leadership validation focused entirely on execution velocity.'
  };

  const metrics: Metric[] = language === 'id' ? [
    {
      value: '10+ Tahun',
      label: 'Pengalaman Industri',
      desc: 'Memimpin arsitektur sistem frontend, sprint rekayasa teknis, dan manajemen divisi produk agile.',
      icon: Calendar
    },
    {
      value: '2 Aktif',
      label: 'Kemitraan Berjalan',
      desc: 'Kemitraan langsung berperan penting sebagai Founding Engineer penunjang operasional startup saat ini.',
      icon: UserCheck
    },
    {
      value: '3 Utama',
      label: 'Layanan Pokok',
      desc: 'Layanan terstruktur terdiri dari Pencarian Produk, Rekayasa Utama (Founding Partner), dan Studio Optimasi.',
      icon: Shield
    },
    {
      value: 'Berbagai',
      label: 'Spesialisasi Pasar',
      desc: 'Mengirimkan eksekusi sistem tangguh di lintas vertikal Fintech, E-commerce, SaaS, Korporasi, dan Edukasi.',
      icon: Globe
    }
  ] : [
    {
      value: '10+ Years',
      label: 'Industry Experience',
      desc: 'Led frontend systems, technical engineering sprints, and agile product departments.',
      icon: Calendar
    },
    {
      value: '2 Active',
      label: 'Engagements',
      desc: 'Direct, high-value Founding Engineer partner engagements currently operating in pipeline.',
      icon: UserCheck
    },
    {
      value: '3 Core',
      label: 'Service Lines',
      desc: 'Structured blocks consisting of Product Discovery, Founding Partner, and Optimization Studio.',
      icon: Shield
    },
    {
      value: 'Multiple',
      label: 'Industries Served',
      desc: 'Delivered robust software across Fintech, E-commerce, SaaS, Enterprise, and Education.',
      icon: Globe
    }
  ];

  return (
    <section className="py-24 bg-neutral-50 dark:bg-neutral-950 border-t border-neutral-200/50 dark:border-neutral-900">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="font-mono text-xs font-bold text-slate-400 dark:text-neutral-500 uppercase tracking-widest block mb-2">
            {header.badge}
          </span>
          <h2 className="text-3xl md:text-5xl font-display font-extrabold text-neutral-900 dark:text-white tracking-tight">
            {header.title}
          </h2>
          <p className="text-neutral-500 mt-4 text-sm md:text-base leading-relaxed">
            {header.desc}
          </p>
        </div>

        {/* Large Number Grid Cards */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {metrics.map((metric, idx) => {
            const Icon = metric.icon;
            return (
              <motion.div
                key={metric.label}
                initial={{ opacity: 0, scale: 0.96 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.45, delay: idx * 0.15 }}
                className="bg-white dark:bg-neutral-900 border border-neutral-250/70 dark:border-neutral-800/85 rounded-2xl p-6 hover:border-purple-500/20 dark:hover:border-purple-500/10 group transition-all duration-300 shadow-sm"
              >
                {/* Metric Icon Indicator */}
                <div className="mb-4 w-9 h-9 rounded-lg bg-neutral-50 dark:bg-neutral-950 text-neutral-500 dark:text-neutral-400 border border-neutral-200/60 dark:border-neutral-800/80 flex items-center justify-center">
                  <Icon className="w-4.5 h-4.5" />
                </div>

                {/* Big Metric Value */}
                <span className="block text-3xl md:text-4xl font-display font-black text-transparent bg-clip-text bg-gradient-to-br from-neutral-900 via-neutral-800 to-purple-650 dark:from-white dark:via-neutral-100 dark:to-purple-400 font-mono">
                  {metric.value}
                </span>

                {/* Label Title */}
                <span className="block text-sm font-bold text-neutral-850 dark:text-neutral-200 mt-1 font-display">
                  {metric.label}
                </span>

                {/* Description info text */}
                <p className="text-xs text-neutral-450 dark:text-neutral-400 mt-2.5 leading-relaxed font-sans">
                  {metric.desc}
                </p>
              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
