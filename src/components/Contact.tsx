import { useState, FormEvent } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  Send, 
  CheckCircle2, 
  Mail, 
  Linkedin, 
  MessageSquare, 
  Loader2
} from 'lucide-react';
import { useLanguage } from '../LanguageContext';

export default function Contact() {
  const { language } = useLanguage();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    linkedin: '',
    interest: 'Partner',
    description: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email) return;

    setIsSubmitting(true);
    // Simulate premium submission log
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitted(true);
    }, 1500);
  };

  const handleReset = () => {
    setFormData({
      name: '',
      email: '',
      linkedin: '',
      interest: 'Partner',
      description: ''
    });
    setSubmitted(false);
  };

  const labels = {
    sectionBadge: language === 'id' ? 'Gerbang Pengajuan' : 'Inquiry Gate',
    title: language === 'id' ? 'Mulai Perjalanan Eksekusi Anda' : 'Start Your Execution Journey',
    desc: language === 'id' 
      ? 'Siap untuk membangun prototipe berspesifikasi tinggi, menyaring cakupan MVP Anda, atau menskalakan produk rilis Anda? Ajukan permohonan diskusi (discovery briefing) bersama Founding Partner sekarang.' 
      : 'Ready to construct a high-performance prototype, refine your MVP scope, or scale your production loops? Request a Founding Partner discovery briefing now.',
    strategicMail: language === 'id' ? 'Surel Strategis' : 'Strategic Mail',
    professionalNetwork: language === 'id' ? 'Jaringan Profesional' : 'Professional Network',
    whatsAppText: language === 'id' ? 'Saluran WhatsApp Langsung' : 'Immediate WhatsApp Link',
    whatsAppCta: language === 'id' ? 'Hubungi kami instan' : 'Reach out instantly',
    founderName: language === 'id' ? 'Nama Pendiri (Founder) *' : 'Founder Name *',
    corpEmail: language === 'id' ? 'Surel Kantor *' : 'Corporate Email *',
    linkedInUrl: language === 'id' ? 'URL LinkedIn (Opsional)' : 'LinkedIn URL',
    partnershipChoice: language === 'id' ? 'Pilihan Kemitraan' : 'Partnership Choice',
    conceptLabel: language === 'id' ? 'Konsep Startup & Target Utama' : 'Startup Concept & Objective',
    conceptPlaceholder: language === 'id' 
      ? 'Gambarkan tujuan produk digital Anda, target pengguna, atau tantangan skala bisnis Anda...' 
      : 'Describe your digital product goal, target users, or scaling challenges...',
    submittingText: language === 'id' ? 'Mengirim pengajuan...' : 'transmitting inquiry...',
    submitBtn: language === 'id' ? 'Kirim Briefing Kemitraan' : 'Submit Partnership Brief',
    successHeader: language === 'id' ? 'Pengajuan Terkirim!' : 'Inquiry Completed!',
    sendAnother: language === 'id' ? 'Kirim Pengajuan Lain' : 'Send Another Inquiry'
  };

  return (
    <section id="contact-section" className="py-24 bg-neutral-50 dark:bg-neutral-950 border-t border-neutral-200/60 dark:border-neutral-900 scroll-mt-20">
      <div className="max-w-7xl mx-auto px-6">
        
        <div className="grid lg:grid-cols-12 gap-12 items-start">
          
          {/* Text/Overview Column (5 cols) */}
          <div className="lg:col-span-5">
            <span className="font-mono text-xs font-bold text-purple-600 dark:text-purple-400 uppercase tracking-widest bg-purple-50 dark:bg-purple-950/20 px-3 py-1 rounded-full">
              {labels.sectionBadge}
            </span>
            <h2 className="text-3xl md:text-5xl font-display font-extrabold text-neutral-900 dark:text-white mt-4 tracking-tight leading-tight">
              {labels.title}
            </h2>
            <p className="text-neutral-500 mt-4 text-sm md:text-base leading-relaxed">
              {labels.desc}
            </p>

            <div className="mt-10 space-y-6">
              {/* Information anchors */}
              <div className="flex items-center space-x-4">
                <div className="w-10 h-10 rounded-full bg-purple-50 dark:bg-purple-900/20 text-purple-600 dark:text-purple-400 border border-purple-150/50 dark:border-purple-850/40 flex items-center justify-center">
                  <Mail className="w-4.5 h-4.5" />
                </div>
                <div>
                  <span className="block text-xs font-mono text-neutral-400 uppercase">{labels.strategicMail}</span>
                  <a href="mailto:tanjung.technology@gmail.com" className="text-sm font-semibold text-neutral-800 dark:text-neutral-250 hover:underline">
                    tanjung.technology@gmail.com
                  </a>
                </div>
              </div>

              <div className="flex items-center space-x-4">
                <div className="w-10 h-10 rounded-full bg-purple-50 dark:bg-purple-900/20 text-purple-600 dark:text-purple-400 border border-purple-150/50 dark:border-purple-850/40 flex items-center justify-center">
                  <Linkedin className="w-4.5 h-4.5" />
                </div>
                <div>
                  <span className="block text-xs font-mono text-neutral-400 uppercase">{labels.professionalNetwork}</span>
                  <a href="https://linkedin.com" target="_blank" rel="noreferrer" className="text-sm font-semibold text-neutral-800 dark:text-neutral-250 hover:underline">
                    Farid Aulia Tanjung
                  </a>
                </div>
              </div>

              <div className="flex items-center space-x-4">
                <div className="w-10 h-10 rounded-full bg-purple-50 dark:bg-purple-900/20 text-purple-600 dark:text-purple-400 border border-purple-150/50 dark:border-purple-850/40 flex items-center justify-center">
                  <MessageSquare className="w-4.5 h-4.5" />
                </div>
                <div>
                  <span className="block text-xs font-mono text-neutral-400 uppercase">{labels.whatsAppText}</span>
                  <a href="https://wa.me/62811111111" target="_blank" rel="noreferrer" className="text-sm font-semibold text-neutral-800 dark:text-neutral-250 hover:underline">
                    {labels.whatsAppCta}
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Form Column (7 cols) */}
          <div className="lg:col-span-7 bg-white dark:bg-neutral-950 p-6 md:p-10 rounded-2xl border border-neutral-250/75 dark:border-neutral-800/85 shadow-lg relative overflow-hidden">
            
            <AnimatePresence mode="wait">
              {!submitted ? (
                <motion.form
                  key="contact-form"
                  onSubmit={handleSubmit}
                  className="space-y-6"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                >
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="form-name" className="block text-xs font-mono text-neutral-400 uppercase tracking-widest mb-1.5 font-bold">
                        {labels.founderName}
                      </label>
                      <input
                        id="form-name"
                        required
                        type="text"
                        value={formData.name}
                        onChange={(e) => setFormData(prev => ({ ...prev, name: e.target.value }))}
                        placeholder="e.g. Farid Tanjung"
                        className="w-full text-sm p-3 rounded-xl border border-neutral-200 dark:border-neutral-800 bg-neutral-50/40 dark:bg-neutral-900/30 text-neutral-800 dark:text-white focus:outline-none focus:border-purple-600"
                      />
                    </div>

                    <div>
                      <label htmlFor="form-email" className="block text-xs font-mono text-neutral-400 uppercase tracking-widest mb-1.5 font-bold">
                        {labels.corpEmail}
                      </label>
                      <input
                        id="form-email"
                        required
                        type="email"
                        value={formData.email}
                        onChange={(e) => setFormData(prev => ({ ...prev, email: e.target.value }))}
                        placeholder="e.g. farid@andai.tech"
                        className="w-full text-sm p-3 rounded-xl border border-neutral-200 dark:border-neutral-800 bg-neutral-50/40 dark:bg-neutral-900/30 text-neutral-800 dark:text-white focus:outline-none focus:border-purple-600"
                      />
                    </div>
                  </div>

                  <div>
                    <label htmlFor="form-linkedin" className="block text-xs font-mono text-neutral-400 uppercase tracking-widest mb-1.5 font-bold">
                      {labels.linkedInUrl}
                    </label>
                    <input
                      id="form-linkedin"
                      type="url"
                      value={formData.linkedin}
                      onChange={(e) => setFormData(prev => ({ ...prev, linkedin: e.target.value }))}
                      placeholder="e.g. https://linkedin.com/in/username"
                      className="w-full text-sm p-3 rounded-xl border border-neutral-200 dark:border-neutral-800 bg-neutral-50/40 dark:bg-neutral-900/30 text-neutral-800 dark:text-white focus:outline-none focus:border-purple-600"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-mono text-neutral-400 uppercase tracking-widest mb-3 font-bold">
                      {labels.partnershipChoice}
                    </label>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
                      {[
                        { label: language === 'id' ? 'Product Discovery' : 'Product Discovery', value: 'Discovery' },
                        { label: language === 'id' ? 'Founding Partner' : 'Founding Partner', value: 'Partner' },
                        { label: language === 'id' ? 'Optimization Studio' : 'Optimization Studio', value: 'Optimization' }
                      ].map((item) => (
                        <button
                          key={item.value}
                          type="button"
                          onClick={() => setFormData(prev => ({ ...prev, interest: item.value }))}
                          className={`p-3 rounded-xl border text-center text-xs font-mono font-bold tracking-wide uppercase transition-all focus:outline-none ${
                            formData.interest === item.value
                              ? 'border-purple-600 bg-purple-500/10 text-purple-700 dark:text-purple-300'
                              : 'border-neutral-200 dark:border-neutral-800 hover:border-neutral-300 dark:hover:border-neutral-700 bg-transparent'
                          }`}
                        >
                          {item.label}
                        </button>
                      ))}
                    </div>
                  </div>

                  <div>
                    <label htmlFor="form-desc" className="block text-xs font-mono text-neutral-400 uppercase tracking-widest mb-1.5 font-bold">
                      {labels.conceptLabel}
                    </label>
                    <textarea
                      id="form-desc"
                      rows={4}
                      value={formData.description}
                      onChange={(e) => setFormData(prev => ({ ...prev, description: e.target.value }))}
                      placeholder={labels.conceptPlaceholder}
                      className="w-full text-sm p-3 rounded-xl border border-neutral-200 dark:border-neutral-800 bg-neutral-50/40 dark:bg-neutral-900/30 text-neutral-800 dark:text-white focus:outline-none focus:border-purple-600 resize-none"
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full justify-center inline-flex items-center space-x-2 p-3.5 bg-neutral-900 dark:bg-white text-white dark:text-neutral-950 rounded-xl font-mono text-xs font-bold tracking-wider uppercase hover:shadow-lg transition-all text-center"
                  >
                    {isSubmitting ? (
                      <>
                        <Loader2 className="w-4.5 h-4.5 animate-spin" />
                        <span>{labels.submittingText}</span>
                      </>
                    ) : (
                      <>
                        <span>{labels.submitBtn}</span>
                        <Send className="w-4 h-4" />
                      </>
                    )}
                  </button>
                </motion.form>
              ) : (
                <motion.div
                  key="success-container"
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="py-12 text-center max-w-sm mx-auto"
                >
                  <div className="w-14 h-14 rounded-full bg-emerald-50 dark:bg-emerald-950/20 text-emerald-600 dark:text-emerald-400 flex items-center justify-center mx-auto mb-6 border border-emerald-100 dark:border-emerald-900/30">
                    <CheckCircle2 className="w-7 h-7" />
                  </div>
                  <h3 className="text-2xl font-display font-extrabold text-neutral-900 dark:text-white">
                    {labels.successHeader}
                  </h3>
                  <p className="text-neutral-500 text-sm mt-3 leading-relaxed">
                    {language === 'id' ? (
                      <>
                        Terima kasih, <strong className="text-neutral-850 dark:text-white">{formData.name}</strong>. Farid Aulia Tanjung akan menganalisis saksama pengajuan startup Anda secara pribadi dan menghubungi Anda melalui alamat email <strong className="text-neutral-850 dark:text-white">{formData.email}</strong> untuk menjadwalkan sesi konsultasi Product Discovery.
                      </>
                    ) : (
                      <>
                        Thank you, <strong className="text-neutral-850 dark:text-white">{formData.name}</strong>. Farid Aulia Tanjung will personally analyze your startup inquiry and connect with you via corporate mail at <strong className="text-neutral-850 dark:text-white">{formData.email}</strong> to set up a Product Discovery call.
                      </>
                    )}
                  </p>
                  
                  <button
                    onClick={handleReset}
                    className="mt-8 inline-flex items-center justify-center space-x-1 px-4 py-2 rounded-full text-xs font-bold font-mono tracking-wider uppercase bg-neutral-100 hover:bg-neutral-150 border border-neutral-250 dark:bg-neutral-900 dark:hover:bg-neutral-850 dark:border-neutral-800 text-neutral-800 dark:text-neutral-250"
                  >
                    {labels.sendAnother}
                  </button>
                </motion.div>
              )}
            </AnimatePresence>
            
          </div>

        </div>

      </div>
    </section>
  );
}
