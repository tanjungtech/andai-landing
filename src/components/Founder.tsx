import { motion } from 'motion/react';
import { Linkedin, Mail, BadgeCheck, Star, Award, GraduationCap } from 'lucide-react';
import { useLanguage } from '../LanguageContext';
import founderImage from '../assets/images/farid_avatar.jpg';

export default function Founder() {
  const { language } = useLanguage();

  const content = {
    badge: language === 'id' ? 'Kepemimpinan Teknis' : 'Technical Leadership',
    title: language === 'id' ? 'Kenali Sang Pendiri' : 'Meet The Founder',
    bioHeader: language === 'id' ? 'Biografi Profesional' : 'Professional Bio',
    experienceSub: language === 'id' ? '10+ Tahun Membangun Solusi Digital' : '10+ Years Building Digital Solutions',
    para1: language === 'id'
      ? 'Founding Engineer dan Product Builder dengan 15+ tahun pengalaman dalam rekayasa perangkat lunak, penyampaian produk, dan manajemen rekayasa perusahaan. Pernah memimpin sebagai Head of Frontend di MNC Sekuritas, serta bertindak sebagai Mentor Startup terdaftar di LPIK ITB.'
      : 'Founding Engineer and Product Builder with 10+ years of experience in software engineering, product delivery, and engineering management. Former Head of Frontend at MNC Sekuritas. Startup Mentor at LPIK ITB.',
    para2: language === 'id'
      ? 'Berdedikasi untuk membantu para founder mewujudkan ide mentah menjadi produk bernilai tinggi yang siap bersaing lewat perencanaan terstruktur, kepemimpinan teknis tepercaya, dan support eksekusi tingkat tinggi.'
      : 'Specialized in helping founders transform ideas into executable products through structured planning, technical leadership, and startup execution support.',
    badgeMentor: language === 'id' ? 'Mentor ITB' : 'ITB Mentor',
    linkedin: language === 'id' ? 'Profil LinkedIn' : 'LinkedIn Profile',
    email: language === 'id' ? 'Email Kontak' : 'Contact Email'
  };

  return (
    <section id="founder-section" className="py-24 bg-white dark:bg-neutral-950 scroll-mt-20">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-16">
          <span className="font-mono text-xs font-bold text-purple-600 dark:text-purple-400 uppercase tracking-widest bg-purple-50 dark:bg-purple-950/20 px-3 py-1 rounded-full">
            {content.badge}
          </span>
          <h2 className="text-3xl md:text-5xl font-display font-extrabold text-neutral-900 dark:text-white mt-4 tracking-tight">
            {content.title}
          </h2>
        </div>

        {/* Profile Card Block */}
        <div className="grid md:grid-cols-5 gap-12 items-center">
          
          {/* Portrait Column (2 cols) */}
          <div className="md:col-span-2 flex justify-center">
            <motion.div
              initial={{ opacity: 0, scale: 0.93 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.55 }}
              className="relative w-72 h-84 md:w-80 md:h-96 rounded-2xl p-3 border border-neutral-250 dark:border-neutral-800 bg-neutral-50 dark:bg-neutral-900/40 shadow-xl"
            >
              {/* Profile Image Wrap with glow border */}
              <div className="w-full h-full rounded-xl bg-gradient-to-br from-neutral-250 via-neutral-100 to-neutral-200 dark:from-neutral-800 dark:via-neutral-900 dark:to-neutral-950 flex flex-col items-center justify-center relative overflow-hidden group">
                
                {/* SVG Abstract Tech Head Mock Portrait or Portrait Box */}
                <div className="absolute inset-0 bg-gradient-to-tr from-purple-500/10 to-blue-500/0 dark:from-purple-500/5 dark:to-transparent opacity-60" />
                
                {/* Simulated professional tech avatar rendering / graphic featuring the portrait photograph */}
                <div className="w-28 h-28 rounded-full bg-gradient-to-tr from-blue-600 via-purple-600 to-pink-500 p-1 mb-4 relative z-15 shadow-xl overflow-hidden flex items-center justify-center">
                  <div className="w-full h-full rounded-full bg-white dark:bg-neutral-950 overflow-hidden relative">
                    <img
                      src={founderImage}
                      alt="Farid Aulia Tanjung"
                      referrerPolicy="no-referrer"
                      className="w-full h-full object-cover object-center transition-transform duration-500 group-hover:scale-105"
                    />
                  </div>
                </div>

                <div className="text-center relative z-15 px-4">
                  <h4 className="font-display font-bold text-lg text-neutral-800 dark:text-neutral-150">
                    Farid Aulia Tanjung
                  </h4>
                  <p className="text-xs font-mono text-purple-600 dark:text-purple-400 uppercase tracking-widest mt-1 font-semibold">
                    Founder & Founding Engineer
                  </p>
                  <p className="text-[10px] text-neutral-400 mt-2 font-mono">
                    Jakarta, Indonesia
                  </p>
                </div>

                {/* Badges on profile */}
                <div className="absolute top-4 right-4 bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 text-[9px] font-bold font-mono px-2 py-0.5 rounded border border-emerald-500/20 flex items-center space-x-1 z-15">
                  <BadgeCheck className="w-3 h-3" />
                  <span>VERIFIED</span>
                </div>

                {/* Background Grid Lines decorative */}
                <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808008_1px,transparent_1px),linear-gradient(to_bottom,#80808008_1px,transparent_1px)] bg-[size:10px_10px] opacity-40" />
              </div>
            </motion.div>
          </div>

          {/* Biography Column (3 cols) */}
          <div className="md:col-span-3 flex flex-col justify-between">
            <div>
              <span className="font-mono text-xs text-neutral-400 uppercase tracking-widest font-bold">
                {content.bioHeader}
              </span>
              <h3 className="text-2xl md:text-3xl font-display font-black text-neutral-900 dark:text-white mt-1 leading-snug">
                Farid Aulia Tanjung
              </h3>
              <p className="text-sm font-mono text-neutral-450 dark:text-neutral-500 mt-1 uppercase tracking-wide">
                {content.experienceSub}
              </p>

              {/* Bio description */}
              <p className="text-neutral-600 dark:text-neutral-300 text-sm md:text-base leading-relaxed mt-6">
                {content.para1}
              </p>
              <p className="text-neutral-600 dark:text-neutral-300 text-sm md:text-base leading-relaxed mt-4">
                {content.para2}
              </p>

              {/* Badges list */}
              <div className="mt-8 flex flex-wrap gap-2.5">
                <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-semibold bg-neutral-100 dark:bg-neutral-900 text-neutral-800 dark:text-neutral-250 border border-neutral-250 dark:border-neutral-800 font-mono">
                  <Award className="w-3.5 h-3.5 mr-1.5 text-purple-600" />
                  Head of Frontend
                </span>
                <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-semibold bg-neutral-100 dark:bg-neutral-900 text-neutral-800 dark:text-neutral-250 border border-neutral-250 dark:border-neutral-800 font-mono">
                  <GraduationCap className="w-3.5 h-3.5 mr-1.5 text-blue-600" />
                  {content.badgeMentor}
                </span>
                <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-semibold bg-neutral-100 dark:bg-neutral-900 text-neutral-800 dark:text-neutral-250 border border-neutral-250 dark:border-neutral-800 font-mono">
                  <Star className="w-3.5 h-3.5 mr-1.5 text-amber-500 animate-pulse" />
                  Founding Engineer
                </span>
              </div>
            </div>

            {/* Credibility statement */}
            <div className="mt-8 pt-8 border-t border-neutral-200 dark:border-neutral-800 flex items-center space-x-6">
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center space-x-2 text-xs font-mono uppercase tracking-widest text-neutral-400 hover:text-purple-600 dark:hover:text-purple-400 transition-colors"
                id="founder-linkedin"
              >
                <Linkedin className="w-4 h-4 text-purple-600" />
                <span>{content.linkedin}</span>
              </a>

              <a
                href="mailto:tanjung.technology@gmail.com"
                className="inline-flex items-center space-x-2 text-xs font-mono uppercase tracking-widest text-neutral-400 hover:text-purple-600 dark:hover:text-purple-400 transition-colors"
                id="founder-email"
              >
                <Mail className="w-4 h-4 text-purple-600" />
                <span>{content.email}</span>
              </a>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
