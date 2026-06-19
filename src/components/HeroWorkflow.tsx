import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Lightbulb, ShieldCheck, Cpu, Zap, TrendingUp } from 'lucide-react';
import { useLanguage } from '../LanguageContext';

interface Stage {
  id: string;
  name: string;
  icon: typeof Lightbulb;
  color: string;
  description: string;
  impact: string;
  highlight: string;
}

export default function HeroWorkflow() {
  const { language } = useLanguage();
  const [activeStageIndex, setActiveStageIndex] = useState(0);
  const [isHovered, setIsHovered] = useState(false);

  const stages: Stage[] = language === 'id' ? [
    {
      id: 'idea',
      name: 'Ide',
      icon: Lightbulb,
      color: 'from-blue-500 to-indigo-500',
      description: 'Percikan inovasi. ANDAI bertindak sebagai filter penasihat kritis, membantu Anda menyusun logika, menyempurnakan hipotesis inti, dan memetakan keselarasan masalah dengan pasar.',
      impact: 'Menghilangkan ambiguitas konseptual',
      highlight: 'Pencarian Produk & Penasihat'
    },
    {
      id: 'validation',
      name: 'Validasi',
      icon: ShieldCheck,
      color: 'from-indigo-500 to-purple-500',
      description: 'Pembuktian mutlak. Kami menjalankan wawancara pengguna terstruktur, eksperimen validasi, dan menyusun matriks persona pengguna yang jelas untuk menjamin permintaan pasar.',
      impact: 'Mencegah pembuatan produk yang tidak diinginkan',
      highlight: 'Cakupan MVP Berbasis Data'
    },
    {
      id: 'execution',
      name: 'Eksekusi',
      icon: Cpu,
      color: 'from-purple-500 to-pink-500',
      description: 'Keunggulan rekayasa. Kami menerapkan arsitektur produk tingkat lanjut yang siap produksi dengan kode bersih, model basis data yang kokoh, dan struktur sistem berkualitas tinggi.',
      impact: 'Pengiriman rekayasa Founding Partner',
      highlight: 'Peluncuran MVP Tanpa Utang Teknis'
    },
    {
      id: 'optimization',
      name: 'Optimasi',
      icon: Zap,
      color: 'from-pink-500 to-amber-500',
      description: 'Efisiensi operasional. Kami memperbaiki hambatan pengiriman produk, melakukan peninjauan arsitektur penuh, dan membimbing tim internal untuk mempercepat siklus peluncuran fitur.',
      impact: 'Mengurangi beban biaya pengembangan',
      highlight: 'Penyesuaian Pengiriman Berkelanjutan'
    },
    {
      id: 'growth',
      name: 'Pertumbuhan',
      icon: TrendingUp,
      color: 'from-amber-500 to-emerald-500',
      description: 'Skala tanpa batas. Memindahkan arsitektur teknis ke tingkat lanjut, melatih talenta jangka panjang, dan memperkuat layanan untuk mendukung lalu lintas pengguna yang tinggi.',
      impact: 'Menyusun arsitektur skala besar',
      highlight: 'Penguatan Pasar Produk'
    }
  ] : [
    {
      id: 'idea',
      name: 'Idea',
      icon: Lightbulb,
      color: 'from-blue-500 to-indigo-500',
      description: 'The spark of innovation. ANDAI acts as a critical advisory filter, helping you structure logic, refine core hypotheses, and map problem-market alignment.',
      impact: 'Eliminates conceptual ambiguity',
      highlight: 'Product Discovery & Advisory'
    },
    {
      id: 'validation',
      name: 'Validation',
      icon: ShieldCheck,
      color: 'from-indigo-500 to-purple-500',
      description: 'The ultimate proof. We run structured user interviews, validation experiments, and construct clear user persona matrices to guarantee market demand.',
      impact: 'Prevents building what nobody wants',
      highlight: 'Data-Backed MVP Scope'
    },
    {
      id: 'execution',
      name: 'Execution',
      icon: Cpu,
      color: 'from-purple-500 to-pink-500',
      description: 'Engineering excellence. We deploy premium, production-ready product architectures with clean code, robust database models, and scalable system structures.',
      impact: 'Founding Partner engineering delivery',
      highlight: 'Zero-debt MVP Launch'
    },
    {
      id: 'optimization',
      name: 'Optimization',
      icon: Zap,
      color: 'from-pink-500 to-amber-500',
      description: 'Operational efficiency. We refine delivery bottlenecks, perform full architecture reviews, and coach existing teams to accelerate feature ship cycles.',
      impact: 'Reduces developmental overhead',
      highlight: 'Continuous Delivery Tuning'
    },
    {
      id: 'growth',
      name: 'Growth',
      icon: TrendingUp,
      color: 'from-amber-500 to-emerald-500',
      description: 'Scaling seamlessly. Transitioning technical architecture to scale, training long-term hires, and hardening services to support heavy user traffic.',
      impact: 'Structures scalable architecture',
      highlight: 'Product Market Hardening'
    }
  ];

  useEffect(() => {
    if (isHovered) return;
    const interval = setInterval(() => {
      setActiveStageIndex((prev) => (prev + 1) % stages.length);
    }, 4500);
    return () => clearInterval(interval);
  }, [isHovered, stages.length]);

  const activeStage = stages[activeStageIndex];

  const labels = {
    pipeline: language === 'id' ? 'Alur Interaktif ANDAI' : 'ANDAI Interactive Pipeline',
    cycle: language === 'id' ? 'Siklus Eksekusi' : 'Execution Cycle',
    phase: language === 'id' ? 'Fase Aktif 0' : 'Active Phase 0',
    keyValue: language === 'id' ? 'Nilai Kunci' : 'Key Value',
    eliminatedRisk: language === 'id' ? 'Risiko yang Dieliminasi:' : 'Eliminated Risk:'
  };

  return (
    <div id="hero-workflow" className="w-full max-w-4xl mx-auto mt-16 p-6 md:p-8 rounded-2xl border border-neutral-200 dark:border-neutral-800 bg-neutral-50/55 dark:bg-neutral-900/40 backdrop-blur-md shadow-2xl relative overflow-hidden">
      {/* Decorative gradient glowing orb */}
      <div className="absolute -top-24 -left-24 w-48 h-48 bg-purple-500/10 dark:bg-purple-500/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute -bottom-24 -right-24 w-48 h-48 bg-blue-500/10 dark:bg-blue-500/5 rounded-full blur-3xl pointer-events-none" />

      {/* Top controls / Breadcrumb */}
      <div className="flex items-center justify-between border-b border-neutral-200/60 dark:border-neutral-800/60 pb-4 mb-8">
        <span className="font-mono text-xs tracking-wider text-neutral-400 uppercase">
          {labels.pipeline}
        </span>
        <div className="flex space-x-1.5 items-center">
          <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
          <span className="font-mono text-[10px] text-neutral-500 uppercase">
            {labels.cycle}
          </span>
        </div>
      </div>

      {/* Horizontal Connector Flow */}
      <div className="relative flex justify-between items-center mb-12 px-2 md:px-6">
        {/* SVG connection line underlay */}
        <div className="absolute top-1/2 left-0 right-0 h-[2px] bg-neutral-200 dark:bg-neutral-800 -translate-y-1/2 z-0" />
        
        {/* Animated active progress tracker bar */}
        <div 
          className="absolute top-1/2 left-0 h-[2px] bg-gradient-to-r from-blue-500 via-purple-500 to-amber-500 -translate-y-1/2 transition-all duration-700 ease-out z-0"
          style={{ width: `${(activeStageIndex / (stages.length - 1)) * 100}%` }}
        />

        {stages.map((stage, idx) => {
          const Icon = stage.icon;
          const isActive = idx === activeStageIndex;
          const isPassed = idx < activeStageIndex;

          return (
            <button
              key={stage.id}
              onClick={() => {
                setActiveStageIndex(idx);
                setIsHovered(true);
              }}
              onMouseEnter={() => setIsHovered(true)}
              onMouseLeave={() => setIsHovered(false)}
              className="relative z-10 flex flex-col items-center group focus:outline-none"
              id={`pipeline-step-${stage.id}`}
            >
              {/* Outer circle with animations */}
              <div
                className={`w-11 h-11 md:w-14 md:h-14 rounded-full flex items-center justify-center transition-all duration-500 ${
                  isActive
                    ? `bg-gradient-to-br ${stage.color} text-white shadow-[0_0_20px_rgba(168,85,247,0.4)] scale-110 border-2 border-white dark:border-neutral-900`
                    : isPassed
                    ? 'bg-neutral-900 dark:bg-neutral-100 text-neutral-100 dark:text-neutral-900 border-2 border-neutral-300 dark:border-neutral-700'
                    : 'bg-white dark:bg-neutral-900 text-neutral-400 border border-neutral-200 dark:border-neutral-800 hover:border-neutral-400 dark:hover:border-neutral-600'
                }`}
              >
                <Icon className="w-5 h-5 md:w-6 md:h-6" />
              </div>

              {/* Node Title */}
              <span
                className={`mt-3 text-xs md:text-sm font-semibold tracking-wide transition-colors duration-300 ${
                  isActive
                    ? 'text-neutral-900 dark:text-neutral-50'
                    : 'text-neutral-400 group-hover:text-neutral-600 dark:group-hover:text-neutral-300'
                }`}
              >
                {stage.name}
              </span>

              {/* Glowing ring when active */}
              {isActive && (
                <span className="absolute inset-0 rounded-full bg-purple-500/20 dark:bg-purple-500/10 scale-125 animate-ping opacity-60 pointer-events-none" />
              )}
            </button>
          );
        })}
      </div>

      {/* Detail Showcase Card */}
      <AnimatePresence mode="wait">
        <motion.div
          key={activeStage.id}
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -15 }}
          transition={{ duration: 0.35, ease: 'easeOut' }}
          className="grid md:grid-cols-5 gap-6 p-6 rounded-xl border border-neutral-200/80 dark:border-neutral-800/80 bg-white/70 dark:bg-neutral-950/70 backdrop-blur"
        >
          {/* Left Column: Visual Label */}
          <div className="md:col-span-2 flex flex-col justify-between border-b md:border-b-0 md:border-r border-neutral-200/70 dark:border-neutral-800/70 pb-4 md:pb-0 md:pr-6">
            <div>
              <span className="font-mono text-[10px] uppercase tracking-widest text-neutral-400 dark:text-neutral-500 block mb-1">
                {labels.phase}{activeStageIndex + 1}
              </span>
              <h4 className="text-xl md:text-2xl font-display font-bold text-neutral-900 dark:text-white">
                {activeStage.name}
              </h4>
            </div>
            <div className="mt-4 md:mt-0">
              <span className="text-xs font-mono text-neutral-400 block mb-1">{labels.keyValue}</span>
              <span className="inline-flex items-center px-2.5 py-1 rounded-md text-xs font-medium bg-neutral-100 dark:bg-neutral-800/80 text-neutral-800 dark:text-neutral-200 border border-neutral-200 dark:border-neutral-700/60 font-mono">
                {activeStage.highlight}
              </span>
            </div>
          </div>

          {/* Right Column: Descriptions & Impact Badge */}
          <div className="md:col-span-3 flex flex-col justify-between">
            <p className="text-neutral-600 dark:text-neutral-300 text-sm md:text-base leading-relaxed">
              {activeStage.description}
            </p>
            <div className="mt-5 flex items-center space-x-2 text-xs md:text-sm">
              <span className="text-purple-600 dark:text-purple-400 font-semibold uppercase tracking-wider font-mono text-[10px] shrink-0">
                {labels.eliminatedRisk}
              </span>
              <span className="text-neutral-800 dark:text-neutral-200 font-medium">
                {activeStage.impact}
              </span>
            </div>
          </div>
        </motion.div>
      </AnimatePresence>

      {/* Manual interactive indicator footer */}
      <div className="mt-6 flex justify-center space-x-1.5">
        {stages.map((_, idx) => (
          <button
            key={idx}
            onClick={() => setActiveStageIndex(idx)}
            className={`h-1 rounded-full transition-all duration-300 ${
              idx === activeStageIndex ? 'w-6 bg-purple-500' : 'w-2.5 bg-neutral-200 dark:bg-neutral-800 hover:bg-neutral-300 dark:hover:bg-neutral-700'
            }`}
            aria-label={`Go to phase ${idx + 1}`}
          />
        ))}
      </div>
    </div>
  );
}
