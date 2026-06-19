import { useLanguage } from '../LanguageContext';
import { Sparkles, ArrowRight } from 'lucide-react';

export default function CTA() {
  const { language } = useLanguage();

  const scrollToAssessment = () => {
    document.getElementById('assessment-section')?.scrollIntoView({ behavior: 'smooth' });
  };

  const scrollToContact = () => {
    document.getElementById('contact-section')?.scrollIntoView({ behavior: 'smooth' });
  };

  const labels = {
    badge: language === 'id' ? 'Gerbang Kemitraan' : 'Partnership Gate',
    title: language === 'id' 
      ? 'Mari Validasi Ide Anda Sebelum Berinvestasi dalam Pengembangan' 
      : "Let's Validate Your Idea Before You Invest In Development",
    desc: language === 'id'
      ? 'Kurangi risiko eksekusi dan bangun dengan percaya diri. Pastikan anggaran Anda berfokus penuh pada masalah pelanggan yang terbukti nyata terlebih dahulu.'
      : 'Reduce execution risk and build with confidence. Ensure your budget focuses strictly on verified customer problems first.',
    btnDiscover: language === 'id' ? 'Temukan Kesiapan Startup' : 'Discover Your Startup',
    btnBuild: language === 'id' ? 'Mulai Membangun' : 'Let’s Build'
  };

  return (
    <section className="py-24 bg-white dark:bg-neutral-950 relative overflow-hidden flex flex-col items-center">
      
      {/* Decorative subtle ambient lights */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-4xl h-80 bg-radial from-purple-500/10 via-blue-500/5 to-transparent rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-5xl mx-auto px-6 relative z-10 w-full">
        
        {/* Massive Card Frame */}
        <div className="bg-gradient-to-br from-neutral-900 to-neutral-950 text-white rounded-3xl border border-neutral-800 p-8 md:p-16 text-center relative overflow-hidden shadow-2xl">
          
          {/* Subtle Grid overlay on CTA */}
          <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff02_1px,transparent_1px),linear-gradient(to_bottom,#ffffff02_1px,transparent_1px)] bg-[size:16px_16px] pointer-events-none" />

          {/* Sparkle badge */}
          <div className="inline-flex items-center space-x-1.5 bg-white/10 decoration-white/20 border border-white/20 px-3 py-1 rounded-full text-xs text-neutral-350 font-mono mb-6">
            <Sparkles className="w-3.5 h-3.5 text-purple-400" />
            <span>{labels.badge}</span>
          </div>

          <h2 className="text-3xl md:text-5xl font-display font-black tracking-tight max-w-3xl mx-auto leading-tight">
            {labels.title}
          </h2>
          
          <p className="text-base text-neutral-400 mt-4 max-w-xl mx-auto">
            {labels.desc}
          </p>

          {/* Action CTAs */}
          <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4 w-full sm:w-auto">
            <button
              onClick={scrollToAssessment}
              className="w-full sm:w-auto inline-flex items-center justify-center space-x-2 px-8 py-3.5 rounded-full text-sm font-bold font-mono tracking-wider uppercase bg-white text-neutral-950 hover:bg-neutral-100 shadow-md hover:shadow-xl transition-all hover:-translate-y-0.5 active:translate-y-0 cursor-pointer"
            >
              <span>{labels.btnDiscover}</span>
              <ArrowRight className="w-4 h-4 text-purple-600" />
            </button>

            <button
              onClick={scrollToContact}
              className="w-full sm:w-auto inline-flex items-center justify-center space-x-1 px-8 py-3.5 rounded-full text-sm font-bold font-mono tracking-wider uppercase bg-transparent text-white border border-white/20 hover:bg-white/5 transition-all cursor-pointer"
            >
              <span>{labels.btnBuild}</span>
            </button>
          </div>

        </div>

      </div>
    </section>
  );
}
