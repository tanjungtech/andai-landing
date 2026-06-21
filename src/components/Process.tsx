import { motion } from 'motion/react';
import { MessageSquare, FileSpreadsheet, KeyRound, ShieldAlert, Rocket, HelpCircle, Hammer, Award } from 'lucide-react';
import { useLanguage } from '../LanguageContext';

interface Step {
  stepNum: string;
  title: string;
  desc: string;
  icon: typeof MessageSquare;
  tag: string;
}

export default function Process() {
  const { language } = useLanguage();

  const header = {
    badge: language === 'id' ? 'Buku Panduan ANDAI' : 'The ANDAI Playbook',
    title: language === 'id' ? 'Rahasia Dapur ANDAI' : 'How It Works',
    desc: language === 'id' 
      ? 'Kami punya struktur kerja yang dirancang untuk menjaga resiko serendah mungkin sembari mengembangkan produk untuk ide startup Kamu.'
      : 'Our structured and execution processes designed to insulate your risk while transforming your idea into a startup product.'
  };

  const steps: Step[] = language === 'id' ? [
    {
      stepNum: '01',
      title: 'Eksplorasi Ide',
      desc: 'Kita bahas ide Kamu dan definisikan masalah, target pengguna, dan format produk dalam sesi diskusi interaktif.',
      icon: MessageSquare,
      tag: 'DISCOVERY'
    },
    {
      stepNum: '02',
      title: 'Merencanakan Produk',
      desc: 'ANDAI menganalisis ide dan menyusun batasan rilis MVP, teknologi yang dibuthukan, serta menyampaikan rencana pengembangan produk.',
      icon: FileSpreadsheet,
      tag: 'PERENCANAAN'
    },
    {
      stepNum: '03',
      title: 'Berpartner dan Bangun Produknya',
      desc: 'Kami memikirkan arsitektur sistem, membangun dan meluncurkan aplikasi dengan kemampuan teknis yang memadai.',
      icon: Hammer,
      tag: 'EKSEKUSI'
    },
    {
      stepNum: '04',
      title: 'Percaya Diri',
      desc: 'Menyempurnakan produk dan memperbaiki error sesuai market feedback. Yakin untuk menawarkan produk yang benar-benar mengatasi masalah pengguna.',
      icon: Award,
      tag: 'OPTIMIZATION'
    }
  ] : [
    {
      stepNum: '01',
      title: 'Idea Exploration',
      desc: 'Share your idea. Find the problem, user target, and product plan in an interactive discussion workshop.',
      icon: MessageSquare,
      tag: 'DISCOVERY'
    },
    {
      stepNum: '02',
      title: 'Receive Your Product Discovery Analysis',
      desc: 'ANDAI generates a concrete analysis report including MVP boundaries, technical stack outlines, and development plan.',
      icon: FileSpreadsheet,
      tag: 'PLANNING'
    },
    {
      stepNum: '03',
      title: 'Partner and build the product',
      desc: 'Deploy professional application. We build a product with an excellent technical capabilities.',
      icon: Hammer,
      tag: 'CO-BUILDING'
    },
    {
      stepNum: '04',
      title: 'Execute With Confidence',
      desc: 'Refine the product and fix error based on the market feedback, backed by proven optimization patterns and long-term mentorship.',
      icon: Award,
      tag: 'OPTIMIZATION'
    }
  ];

  return (
    <section id="process-section" className="py-24 bg-neutral-50 dark:bg-neutral-950 border-t border-neutral-200/50 dark:border-neutral-900 scroll-mt-20">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-20">
          {/* <span className="font-mono text-xs font-bold text-slate-400 dark:text-neutral-500 uppercase tracking-widest block mb-2">
            {header.badge}
          </span> */}
          <h2 className="text-3xl md:text-5xl font-display font-extrabold text-neutral-900 dark:text-white tracking-tight">
            {header.title}
          </h2>
          <p className="text-neutral-500 mt-4 text-sm md:text-base leading-relaxed">
            {header.desc}
          </p>
        </div>

        {/* Timeline Path Grid */}
        <div className="relative max-w-5xl mx-auto">
          {/* Vertical central guide line (hidden on mobile, visible on desktop) */}
          <div className="absolute left-[calc(50%-1px)] top-0 bottom-0 w-[2px] bg-neutral-200 dark:bg-neutral-800 hidden md:block" />

          <div className="space-y-12 md:space-y-16">
            {steps.map((step, idx) => {
              const Icon = step.icon;
              const isEven = idx % 2 === 1;

              return (
                <div 
                  key={step.stepNum}
                  className={`flex flex-col md:flex-row items-center justify-between relative ${isEven ? 'md:flex-row-reverse' : ''}`}
                >
                  {/* Outer Left Column (Content side) */}
                  <motion.div
                    initial={{ opacity: 0, x: isEven ? 30 : -30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true, margin: '-80px' }}
                    transition={{ duration: 0.55 }}
                    className="w-full md:w-[45%] p-6 md:p-8 rounded-2xl border border-neutral-200 dark:border-neutral-800 bg-white dark:bg-neutral-900 dynamic-shadow-hover relative hover:border-purple-500/20 dark:hover:border-purple-500/15 group"
                  >
                    <span className="font-mono text-xs font-bold text-purple-600 dark:text-purple-400 block mb-1">
                      {step.tag}
                    </span>
                    <h3 className="text-lg md:text-xl font-display font-bold text-neutral-800 dark:text-white group-hover:text-purple-600 dark:group-hover:text-purple-400 transition-colors">
                      {step.title}
                    </h3>
                    <p className="text-neutral-500 dark:text-neutral-400 text-sm mt-3 leading-relaxed">
                      {step.desc}
                    </p>
                  </motion.div>

                  {/* Central Node Dot */}
                  <div className="absolute left-1/2 -translate-x-1/2 top-1/2 -translate-y-1/2 z-10 hidden md:flex w-10 h-10 rounded-full bg-neutral-900 text-neutral-100 border-4 border-white dark:border-neutral-950 items-center justify-center font-mono font-bold text-xs">
                    {step.stepNum}
                  </div>

                  {/* Icon Card (Opposite Side Container) */}
                  <div className="w-full md:w-[45%] flex justify-center md:justify-start items-center mt-4 md:mt-0 px-8">
                    <motion.div
                      initial={{ opacity: 0, scale: 0.8 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.5, delay: 0.1 }}
                      className={`w-16 h-16 rounded-2xl bg-purple-50 dark:bg-purple-900/10 text-purple-600 dark:text-purple-400 border border-purple-150/50 dark:border-purple-850/40 flex items-center justify-center shadow-md ${
                        isEven ? 'md:ml-auto md:mr-0' : 'md:mr-auto md:ml-0'
                      }`}
                    >
                      <Icon className="w-7 h-7" />
                    </motion.div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

      </div>
    </section>
  );
}
