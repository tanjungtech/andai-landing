import { motion } from 'motion/react';
import { Sparkles, Clipboard, Code2, Gauge, Check } from 'lucide-react';
import { useLanguage } from '../LanguageContext';

interface ServiceCard {
  title: string;
  tagline: string;
  icon: typeof Clipboard;
  features: string[];
  gradient: string;
  badge: string;
}

export default function Services() {
  const { language } = useLanguage();

  const header = {
    badge: language === 'id' ? 'Ide Menjadi Produk' : 'Idea Delivery & Execution',
    title: language === 'id' ? 'ANDAI Membangun dan Meluncurkan Produk Startup' : 'ANDAI Builds and Launches Startup',
    desc: language === 'id' 
      ? 'Kami bukan agensi digital. Kami bertindak sebagai mitra eksekusi startup, merancang konsep ide hingga menjadi produk ready-to-market sehingga Kamu yakin untuk membangun startup.'
      : 'We are not a digital agency. We act as a dedicated startup partner, managing idea conception for Indonesian Market so you navigate risks safely.'
  };

  const services: ServiceCard[] = language === 'id' ? [
    {
      title: 'Product Discovery',
      tagline: 'Sesi pencarian dan perumusan konsep startup. Menghasilkan rencana eksekusi yang realistis sampai ide menjadi aplikasi level produksi.',
      icon: Clipboard,
      features: [
        'Definisi Masalah',
        'Persona Pengguna',
        'Konsep MVP',
        'Rencana Pengembangan Produk'
      ],
      gradient: 'from-blue-600 to-indigo-600',
      badge: 'TAHAP 1'
    },
    {
      title: 'Founding Partner',
      tagline: 'Partner untuk mengeksekusi ide startup. Fokus pada pengembangan dari skala MVP untuk menemukan aplikasi yang disukai pengguna.',
      icon: Code2,
      features: [
        'Perencanaan Teknis',
        'Eksekusi Produk',
        'Peluncuran Aplikasi',
        'Iterasi Sesuai Market Feedback'
      ],
      gradient: 'from-purple-600 to-pink-600',
      badge: 'TAHAP 2'
    },
    {
      title: 'Optimization Studio',
      tagline: 'Layanan untuk meningkatkan efisiensi pengembangan produk dan performa aplikasi.',
      icon: Gauge,
      features: [
        'Proses Review',
        'Optimasi Pengembangan',
        'Coaching Session',
        'Peningkatan Performa'
      ],
      gradient: 'from-amber-600 to-orange-600',
      badge: 'TAHAP 3'
    }
  ] : [
    {
      title: 'Product Discovery',
      tagline: 'A structured product discovery engagement designed to transform startup ideas into actionable execution plans.',
      icon: Clipboard,
      features: [
        'Problem Definition',
        'User Persona',
        'MVP Scope',
        'Development Roadmap'
      ],
      gradient: 'from-blue-600 to-indigo-600',
      badge: 'STAGE 1'
    },
    {
      title: 'Founding Partner',
      tagline: 'Your startup execution partner. We focus on rapid and realistic development, evolving MVP into production-ready application level',
      icon: Code2,
      features: [
        'Technical Planning',
        'Product Execution',
        'Idea Deployment',
        'Market Feedback Iteration'
      ],
      gradient: 'from-purple-600 to-pink-600',
      badge: 'STAGE 2'
    },
    {
      title: 'Optimization Studio',
      tagline: 'An ongoing advisory service focused on improving product development efficiency.',
      icon: Gauge,
      features: [
        'Process Review',
        'Technical Optimization',
        'Coaching Session',
        'Delivery Improvements'
      ],
      gradient: 'from-amber-600 to-orange-600',
      badge: 'STAGE 3'
    }
  ];

  const selectCTA = (language) === 'id' ? 'Pilih ' : 'Go To';

  return (
    <section id="services-section" className="py-24 bg-white dark:bg-neutral-950 scroll-mt-20">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* Header section details */}
        <div className="text-center max-w-3xl mx-auto mb-20">
          <div className="inline-flex items-center space-x-2 bg-purple-50 dark:bg-purple-950/30 border border-purple-100 dark:border-purple-900/40 px-3 py-1 rounded-full text-xs text-purple-700 dark:text-purple-300 font-mono mb-4">
            <Sparkles className="w-3.5 h-3.5" />
            <span>{header.badge}</span>
          </div>
          <h2 className="text-3xl md:text-5xl font-display font-extrabold text-neutral-900 dark:text-white tracking-tight">
            {header.title}
          </h2>
          <p className="text-neutral-500 mt-4 max-w-2xl mx-auto text-sm md:text-base leading-relaxed">
            {header.desc}
          </p>
        </div>

        {/* 3 Grid Cards */}
        <div className="grid md:grid-cols-3 gap-8">
          {services.map((srv, idx) => {
            const Icon = srv.icon;
            return (
              <motion.div
                key={srv.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-100px' }}
                transition={{ duration: 0.55, delay: idx * 0.15 }}
                className="group rounded-2xl border border-neutral-250/70 dark:border-neutral-800/80 bg-neutral-50/40 dark:bg-neutral-900/20 hover:bg-white dark:hover:bg-neutral-900 shadow-sm hover:shadow-xl hover:border-purple-500/20 dark:hover:border-purple-500/10 p-8 flex flex-col justify-between transition-all duration-300 relative overflow-hidden"
              >
                {/* Visual Glow Indicator */}
                <div className={`absolute top-0 left-0 right-0 h-[3px] bg-gradient-to-r ${srv.gradient}`} />
                
                <div>
                  {/* <div className="flex justify-between items-center mb-6">
                    <span className="font-mono text-[10px] uppercase font-extrabold tracking-widest text-neutral-400">
                      {srv.badge}
                    </span>
                    <div className="w-10 h-10 rounded-xl bg-purple-50 dark:bg-purple-950/30 text-purple-600 dark:text-purple-400 border border-purple-100 dark:border-purple-900/30 flex items-center justify-center">
                      <Icon className="w-5 h-5" />
                    </div>
                  </div> */}

                  <h3 className="text-xl md:text-2xl font-display font-bold text-neutral-900 dark:text-white group-hover:text-purple-600 dark:group-hover:text-purple-400 transition-colors">
                    {srv.title}
                  </h3>
                  
                  <p className="text-neutral-500 dark:text-neutral-400 text-sm mt-3 leading-relaxed">
                    {srv.tagline}
                  </p>

                  {/* Bullet features list */}
                  <div className="mt-8 pt-6 border-t border-dotted border-neutral-200 dark:border-neutral-800 space-y-3.5">
                    {srv.features.map((feat) => (
                      <div key={feat} className="flex items-center space-x-3">
                        <div className="w-4.5 h-4.5 rounded-full bg-purple-50 dark:bg-purple-900/20 text-purple-600 dark:text-purple-400 border border-purple-100 dark:border-purple-900/30 flex items-center justify-center shrink-0">
                          <Check className="w-3 h-3" />
                        </div>
                        <span className="text-sm font-medium text-neutral-600 dark:text-neutral-300">
                          {feat}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Secondary Call Trigger */}
                <div className="mt-8 pt-4">
                  <button
                    onClick={() => document.getElementById('contact-section')?.scrollIntoView({ behavior: 'smooth' })}
                    className="w-full text-center text-xs font-mono uppercase tracking-wider font-extrabold text-neutral-800 dark:text-neutral-200 border border-neutral-250 dark:border-neutral-850 rounded-xl py-3 group-hover:bg-neutral-900 group-hover:text-white dark:group-hover:bg-white dark:group-hover:text-neutral-950 group-hover:border-neutral-900 dark:group-hover:border-white transition-all duration-300 cursor-pointer"
                  >
                    {`${selectCTA} ${ srv.title }`}
                  </button>
                </div>
              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
