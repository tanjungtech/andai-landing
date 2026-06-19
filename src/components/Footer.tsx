import { Linkedin, Mail, MessageSquare } from 'lucide-react';
import andaiLogo from '../assets/images/andai_favicon_1781897993973.jpg';
import { useLanguage } from '../LanguageContext';

export default function Footer() {
  const { language } = useLanguage();
  const currentYear = new Date().getFullYear();

  const handleScrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  const labels = {
    desc: language === 'id'
      ? 'Arsitek Modal & Mitra Eksekusi Startup. Mengubah konsep digital yang belum tervalidasi menjadi aplikasi bisnis yang kuat, tahan lama, dan menguntungkan.'
      : 'Venture Architect & Startup Execution Partner. Transforming unvalidated digital concepts into robust, durable, profitable business applications.',
    services: language === 'id' ? 'Layanan' : 'Services',
    resources: language === 'id' ? 'Sumber Daya' : 'Resources',
    contact: language === 'id' ? 'Hubungi Kami' : 'Contact Us',
    diagnostic: language === 'id' ? 'Alat Diagnosa Startup' : 'Startup Diagnostic Tool',
    pipeline: language === 'id' ? 'Alur Eksekusi Interaktif' : 'Interactive Execution Pipeline',
    briefings: language === 'id' ? 'Sesi Strategi Ahli' : 'Expert Strategy Briefings',
    rights: language === 'id' ? 'Seluruh hak taktis dilindungi.' : 'All tactical rights reserved.',
    partner: language === 'id' ? 'Mitra Eksekusi Startup' : 'Startup Execution Partner'
  };

  return (
    <footer className="bg-neutral-900 text-neutral-400 py-16 border-t border-neutral-800">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* Footer Top Grid */}
        <div className="grid md:grid-cols-4 gap-10 mb-12">
          
          {/* Company Title */}
          <div>
            <div className="flex items-center space-x-2 mb-4">
              <img
                src={andaiLogo}
                alt="ANDAI Logo"
                className="w-7 h-7 rounded object-cover shadow-md border border-neutral-800"
                referrerPolicy="no-referrer"
              />
              <span className="font-display font-black text-base text-white tracking-widest uppercase">
                ANDAI
              </span>
            </div>
            <p className="text-xs text-neutral-550 leading-relaxed max-w-xs">
              {labels.desc}
            </p>
          </div>

          {/* Services Links */}
          <div>
            <h5 className="text-xs font-mono font-bold tracking-widest uppercase text-white mb-4">
              {labels.services}
            </h5>
            <div className="flex flex-col space-y-2.5 text-xs">
              <button onClick={() => handleScrollTo('services-section')} className="text-left hover:text-white transition-colors cursor-pointer">
                Product Discovery
              </button>
              <button onClick={() => handleScrollTo('services-section')} className="text-left hover:text-white transition-colors cursor-pointer">
                Founding Partner
              </button>
              <button onClick={() => handleScrollTo('services-section')} className="text-left hover:text-white transition-colors cursor-pointer">
                Optimization Studio
              </button>
            </div>
          </div>

          {/* Resources Links */}
          <div>
            <h5 className="text-xs font-mono font-bold tracking-widest uppercase text-white mb-4">
              {labels.resources}
            </h5>
            <div className="flex flex-col space-y-2.5 text-xs">
              <button onClick={() => handleScrollTo('assessment-section')} className="text-left hover:text-white transition-colors cursor-pointer">
                {labels.diagnostic}
              </button>
              <button onClick={() => handleScrollTo('hero-workflow')} className="text-left hover:text-white transition-colors cursor-pointer">
                {labels.pipeline}
              </button>
              <button onClick={() => handleScrollTo('founder-section')} className="text-left hover:text-white transition-colors cursor-pointer">
                {labels.briefings}
              </button>
            </div>
          </div>

          {/* Contact Links */}
          <div>
            <h5 className="text-xs font-mono font-bold tracking-widest uppercase text-white mb-4">
              {labels.contact}
            </h5>
            <div className="flex flex-col space-y-2.5 text-xs">
              <a href="mailto:tanjung.technology@gmail.com" className="hover:text-white flex items-center space-x-1.5 transition-colors">
                <Mail className="w-3.5 h-3.5" />
                <span>tanjung.technology@gmail.com</span>
              </a>
              <a href="https://linkedin.com" target="_blank" rel="noreferrer" className="hover:text-white flex items-center space-x-1.5 transition-colors">
                <Linkedin className="w-3.5 h-3.5" />
                <span>LinkedIn Workspace</span>
              </a>
              <a href="https://wa.me/62811111111" target="_blank" rel="noreferrer" className="hover:text-white flex items-center space-x-1.5 transition-colors">
                <MessageSquare className="w-3.5 h-3.5" />
                <span>WhatsApp Messenger</span>
              </a>
            </div>
          </div>

        </div>

        {/* Footer Bottom copyright block */}
        <div className="pt-8 border-t border-neutral-800/80 flex flex-col sm:flex-row items-center justify-between text-[11px] text-neutral-500 font-mono">
          <span>&copy; {currentYear} ANDAI. {labels.rights}</span>
          <span className="mt-2 sm:mt-0 uppercase tracking-widest">
            {labels.partner}
          </span>
        </div>

      </div>
    </footer>
  );
}
