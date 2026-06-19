import { useState, FormEvent } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  ClipboardCheck, 
  ChevronRight, 
  ChevronLeft, 
  CheckCircle2, 
  AlertTriangle, 
  HelpCircle, 
  Sparkles, 
  Lock, 
  ArrowRight,
  TrendingDown,
  RefreshCw,
  FileSpreadsheet,
  Linkedin,
  PhoneCall
} from 'lucide-react';
import { AssessmentAnswers, LeadInfo, AssessmentResult } from '../types';
import { useLanguage } from '../LanguageContext';

export default function Assessment() {
  const { language } = useLanguage();
  const [currentStep, setCurrentStep] = useState(0);
  const [answers, setAnswers] = useState<AssessmentAnswers>({
    problemScope: '',
    targetUsers: '',
    validationLevel: '',
    teamStatus: '',
    budgetStatus: ''
  });
  const [customProblem, setCustomProblem] = useState('');
  const [customUsers, setCustomUsers] = useState('');
  const [lead, setLead] = useState<LeadInfo>({ name: '', email: '', company: '' });
  const [showLeadForm, setShowLeadForm] = useState(false);
  const [showResults, setShowResults] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const getQuestions = () => {
    return language === 'id' ? [
      {
        id: 'problemScope',
        title: 'Masalah apa yang sedang Anda selesaikan?',
        subtitle: 'Startup hebat berfokus pada masalah yang nyata, spesifik, dan diakui pasar.',
        options: [
          {
            value: 'A',
            label: 'Belum ada masalah spesifik',
            desc: 'Saya memiliki ide teknologi atau produk hebat, tetapi masih mencari tahu siapa yang membutuhkannya.',
            score: 10
          },
          {
            value: 'B',
            label: 'Kesenjangan yang terpantau',
            desc: 'Saya tahu ada beberapa orang menghadapi masalah ini, tetapi saya belum melakukan riset pengguna secara meluas.',
            score: 18
          },
          {
            value: 'C',
            label: 'Masalah mendalam tervalidasi',
            desc: 'Kami telah mendokumentasikan rasa sakit spesifik pelanggan melalui wawancara kualitatif secara langsung.',
            score: 25
          }
        ],
        placeholder: 'Gambarkan secara singkat masalah utama calon pengguna...'
      },
      {
        id: 'targetUsers',
        title: 'Siapa target pengguna Anda?',
        subtitle: 'Menguasai ceruk pasar (niche) awal sangat penting untuk traksi sebelum skala besar.',
        options: [
          {
            value: 'A',
            label: 'Target audiens umum / Terlalu luas',
            desc: '"Semua orang" adalah calon pelanggan saya. Potensi ukuran pasarnya sangat fantastis.',
            score: 10
          },
          {
            value: 'B',
            label: 'Definisi sektor industri luas',
            desc: 'Menargetkan segmen demografis umum (seperti "pebisnis UMKM" atau "generasi milenial").',
            score: 16
          },
          {
            value: 'C',
            label: 'Profil ceruk yang sangat khusus',
            desc: 'Kami mendefinisikan pembeli berniat beli tinggi secara presisi dengan jalur retensi yang jelas.',
            score: 25
          }
        ],
        placeholder: 'Isi profil pengguna awal (early adopter) idaman Anda...'
      },
      {
        id: 'validationLevel',
        title: 'Apakah Anda memiliki validasi pasar?',
        subtitle: 'Memvalidasi ketertarikan pasar menjauhkan Anda dari pemborosan modal.',
        options: [
          {
            value: 'A',
            label: 'Belum ada / Tahap konseptual',
            desc: 'Saat ini saya masih mengandalkan keyakinan pribadi serta statistik pasar sekunder.',
            score: 5
          },
          {
            value: 'B',
            label: 'Verifikasi kualitatif awal',
            desc: 'Saya berbicara dengan 10+ calon pelanggan. Mereka menyetujui masalah ini sangat mendesak.',
            score: 15
          },
          {
            value: 'C',
            label: 'Komitmen keterlibatan riil',
            desc: 'Kami memiliki prapembelian, surat penawaran (LOI), atau pendaftaran daftar tunggu aktif.',
            score: 25
          }
        ]
      },
      {
        id: 'teamStatus',
        title: 'Apakah Anda sudah memiliki tim eksekusi?',
        subtitle: 'Memiliki visi teknis yang kuat mencegah kegagalan outsourcing.',
        options: [
          {
            value: 'A',
            label: 'Solo / Bertindak Sendiri',
            desc: 'Saya adalah pendiri bisnis non-teknis yang berniat menyewa pekerja lepas atau mencari CTO.',
            score: 5
          },
          {
            value: 'B',
            label: 'Para Pendiri Bersama (Co-founders)',
            desc: 'Kami adalah tim kecil yang solid, namun belum didukung rekayasa rekayasa produk tingkat lanjut.',
            score: 15
          },
          {
            value: 'C',
            label: 'Core Tim Desain & Pengembang Siap',
            desc: 'Kami memiliki kesiapan eksekusi rekayasa kuat atau didukung partner teknologi andal.',
            score: 25
          }
        ]
      },
      {
        id: 'budgetStatus',
        title: 'Apakah skema dana sudah disiapkan?',
        subtitle: 'Ketepatan alokasi modal menentukan langkah rekayasa bertahap.',
        options: [
          {
            value: 'A',
            label: 'Modal Keringat / Swadaya Tanpa Pendanaan',
            desc: 'Belum ada cadangan dana tunai khusus; mencari mitra build dengan kompensasi bagi hasil saham.',
            score: 5
          },
          {
            value: 'B',
            label: 'Pendanaan Awal Strategis',
            desc: 'Tersedia dana terukur ($5k - $25k) khusus untuk validasi produk awal atau modul discovery.',
            score: 15
          },
          {
            value: 'C',
            label: 'Anggaran Pembangunan Memadai',
            desc: 'Kami mengamankan investasi eksternal atau mengalokasikan modal besar untuk build penuh produk.',
            score: 25
          }
        ]
      }
    ] : [
      {
        id: 'problemScope',
        title: 'What problem are you solving?',
        subtitle: 'Great startups focus on painful, specific, and recognized problems.',
        options: [
          {
            value: 'A',
            label: 'No specific problem yet',
            desc: 'I have a cool technology or product idea, but I am still figuring out who needs it.',
            score: 10
          },
          {
            value: 'B',
            label: 'Observed pain point',
            desc: "I know some people have this issue, but I haven't done extensive user research yet.",
            score: 18
          },
          {
            value: 'C',
            label: 'Validated deep problem',
            desc: 'We have documented specific customer pain points with direct qualitative interviews.',
            score: 25
          }
        ],
        placeholder: 'Briefly describe the key user pain point...'
      },
      {
        id: 'targetUsers',
        title: 'Who are your target users?',
        subtitle: 'Nailing an early niche is critical for traction before scaling.',
        options: [
          {
            value: 'A',
            label: 'Generic / Broad target audience',
            desc: '"Everyone" is my potential customer. The market size is massive.',
            score: 10
          },
          {
            value: 'B',
            label: 'Broad sector definition',
            desc: 'Aiming at a general demographic segment (e.g., "e-commerce merchants" or "millennials").',
            score: 16
          },
          {
            value: 'C',
            label: 'Hyper-focused niche profile',
            desc: 'We have defined a precise high-intent buyer persona with clear onboarding access.',
            score: 25
          }
        ],
        placeholder: 'Describe your ideal early adopters in one phrase...'
      },
      {
        id: 'validationLevel',
        title: 'Do you have market validation?',
        subtitle: 'Validating interest avoids wasting passion and capital.',
        options: [
          {
            value: 'A',
            label: 'None / Conceptual stage',
            desc: 'I am relying on personal conviction and market indicators.',
            score: 5
          },
          {
            value: 'B',
            label: 'Qualitative confirmation',
            desc: 'I spoke with 10+ prospective customers. They verified the issue is critical.',
            score: 15
          },
          {
            value: 'C',
            label: 'Behavioral commitment',
            desc: 'We have pre-sales, letters of intent, or active email list signups.',
            score: 25
          }
        ]
      },
      {
        id: 'teamStatus',
        title: 'Do you have an execution team?',
        subtitle: 'Having technical supervision avoids mismanaged outsourcing.',
        options: [
          {
            value: 'A',
            label: 'Solo / Looking for dev',
            desc: 'I am a business founder looking to hire freelance agencies or find a CTO.',
            score: 5
          },
          {
            value: 'B',
            label: 'Co-founders',
            desc: 'We are a small unit but lacking specialized product engineering direction.',
            score: 15
          },
          {
            value: 'C',
            label: 'Capable design & dev core',
            desc: 'We have robust execution readiness or key engineering partners on board.',
            score: 25
          }
        ]
      },
      {
        id: 'budgetStatus',
        title: 'Do you have a set budget?',
        subtitle: 'Capital allocation dictates engineering pacing.',
        options: [
          {
            value: 'A',
            label: 'Sweat-equity / Unfunded',
            desc: 'No dedicated cash yet; seeking partners to build in exchange for equity.',
            score: 5
          },
          {
            value: 'B',
            label: 'Strategic seed capital',
            desc: 'Modest budget ($5k - $25k) earmarked strictly for validation or MVP discovery.',
            score: 15
          },
          {
            value: 'C',
            label: 'Established building budget',
            desc: 'We have secured funding or allocated substantial capital for full-cycle delivery.',
            score: 25
          }
        ]
      }
    ];
  };

  const questions = getQuestions();

  const handleSelectOption = (questionKey: keyof AssessmentAnswers, value: string) => {
    setAnswers(prev => ({ ...prev, [questionKey]: value }));
  };

  const handleNext = () => {
    if (currentStep < questions.length - 1) {
      setCurrentStep(prev => prev + 1);
    } else {
      setShowLeadForm(true);
    }
  };

  const handleBack = () => {
    if (currentStep > 0) {
      setCurrentStep(prev => prev - 1);
    }
  };

  const calculateResults = (): AssessmentResult => {
    let score = 0;
    
    // Calculate total score based on selected keys
    questions.forEach((q) => {
      const selectedVal = answers[q.id as keyof AssessmentAnswers];
      const matchingOpt = q.options.find(opt => opt.value === selectedVal);
      if (matchingOpt) {
        score += matchingOpt.score;
      }
    });

    let grade: 'Low' | 'Medium' | 'High' | 'Elite' = 'Low';
    let summary = '';
    let suggestedNextStep = '';

    if (score < 40) {
      grade = 'Low';
      summary = language === 'id' 
        ? 'Rancangan startup Anda sangat kualitatif namun kurang jangkar pasar awal. Langsung membuat kode program sekarang menempatkan modal Anda pada risiko tinggi dari kegagalan fungsional fiktif (Wrong MVP).'
        : 'Your startup plan is highly qualitative but lacks initial market anchors. Attempting full-scale coding now places your capital at excessive risk of "Wrong MVP" and redundant features.';
      suggestedNextStep = language === 'id'
        ? 'Modul Pencarian Produk (Discovery) — Saring kembali definisi masalah utama Anda, rancang saksama ruang lingkup prioritas MVP, dan petakan peta rilis logis sebelum meluncurkan produksi perangkat lunak.'
        : 'Product Discovery Module — Refine problem definitions, run active customer surveys, and design a hyper-focused MVP scope prior to choosing technical systems.';
    } else if (score < 75) {
      grade = 'Medium';
      summary = language === 'id'
        ? 'Anda memiliki fundamental ide yang kuat, tetapi beberapa detail eksekusi masih mengambang. Anda berada di waktu krusial untuk mempererat validasi pasar nyata dan memilih teknologi prasyarat yang hemat bensin.'
        : 'You have strong fundamentals but certain critical execution details are unanchored. You are in a primetime position to optimize validation and structure engineering prerequisites before major financial outlays.';
      suggestedNextStep = language === 'id'
        ? 'Blue-Print Kemitraan Pendiri (Founding Partner) — Rapikan perencanaan teknis tepercaya Anda, tuangkan rancangan fungsional, dan validasi fungsional lewat skema pilot terpandu bersama partner handal.'
        : 'Founding Partner Blueprint — Formalize technical planning, configure an exact product roadmap, and validate through a lightweight validation pilot.';
    } else {
      grade = 'High';
      summary = language === 'id'
        ? 'Luar biasa! Kesiapan dasar Anda sangat matang dan teruji. Untuk meluncurkannya dengan standar venture-grade tinggi, Anda memerlukan kepemimpinan teknis tepercaya, pola arsitektur andal, serta sirkulasi sprint rilis yang presang.'
        : 'Outstanding foundational groundwork! Your goals are specific and validated. To execute at a venture-grade level, you require professional engineering management, structured system architectures, and reliable product execution sprints.';
      suggestedNextStep = language === 'id'
        ? 'Kemitraan Founding Partner Berkelanjutan — Bergabunglah langsung dengan kepemimpinan teknis elite kami guna mengarsiteki sistem tangguh, melepaskan rilis, dan mendeploy dengan presisi absolut.'
        : 'Founding Partner Engagement — Align directly with elite technical leadership to architect systems, build robust products, and deploy with complete precision.';
    }

    const detailedAnalysis: AssessmentResult['detailedAnalysis'] = [];

    // Analyze Problem
    if (answers.problemScope === 'A') {
      detailedAnalysis.push({
        category: language === 'id' ? 'Kekuatan Masalah' : 'Problem Viability',
        status: 'danger',
        feedback: language === 'id'
          ? 'Belum mendeklarasikan masalah inti pengguna. Startup sukses karena memangkas kesulitan pengguna, bukan sekadar mencari-cari kegunaan ide produk. Fokuslah pada riset masalah awal.'
          : 'No declared user problem. Startups succeed by relieving specific pain, not looking for problems to fit a solution. Prioritize problem discovery.'
      });
    } else if (answers.problemScope === 'B') {
      detailedAnalysis.push({
        category: language === 'id' ? 'Kekuatan Masalah' : 'Problem Viability',
        status: 'warning',
        feedback: language === 'id'
          ? 'Anda mengamati masalah menarik, namun tidak memiliki bukti kualitatif mendalam. Selesaikan interview pengguna langsung untuk mengisolasi pemicu bernilai tinggi.'
          : 'Good observation, but lacks qualitative customer interview data. Speak directly with targets.'
      });
    } else {
      detailedAnalysis.push({
        category: language === 'id' ? 'Kekuatan Masalah' : 'Problem Viability',
        status: 'good',
        feedback: language === 'id'
          ? 'Sempurna. Membangun produk dari landasan rasa sakit pengguna sesungguhnya memastikan arah produk yang sangat relevan.'
          : 'Excellent. Grounding your project on verified consumer complaints guarantees a viable foundation.'
      });
    }

    // Analyze Users
    if (answers.targetUsers === 'A') {
      detailedAnalysis.push({
        category: language === 'id' ? 'Fokus Audiens' : 'Audience Focus',
        status: 'danger',
        feedback: language === 'id'
          ? 'Menargetkan "Semua Orang" mengaburkan prioritas fitur dan strategi rilis. Fokuskan detailnya untuk 10 pelopor pertama yang paling lapar.'
          : 'Targeting everyone dilutes marketing resources. Isolate early adopters.'
      });
    } else if (answers.targetUsers === 'B') {
      detailedAnalysis.push({
        category: language === 'id' ? 'Fokus Audiens' : 'Audience Focus',
        status: 'warning',
        feedback: language === 'id'
          ? 'Definisi demografis Anda terlalu lebar untuk feedback loop yang cepat. Kerucutkan sub-layanan Anda sefokus mungkin.'
          : 'General definition is wide. Restructure to highly specific early tester profile.'
      });
    } else {
      detailedAnalysis.push({
        category: language === 'id' ? 'Fokus Audiens' : 'Audience Focus',
        status: 'good',
        feedback: language === 'id'
          ? 'Sangat memadai. Menentukan ceruk persona pembeli secara sempit mengejawantahkan simplisitas rilis awal.'
          : 'Sufficient focus present. Defining a specific user persona accelerates delivery focus enormously.'
      });
    }

    // Analyze Validation
    if (answers.validationLevel === 'A') {
      detailedAnalysis.push({
        category: language === 'id' ? 'Validasi Pasar' : 'Validation',
        status: 'danger',
        feedback: language === 'id'
          ? 'Belum ada pembuktian nyata. Dilarang menyewa developer mahal atau agensi besar sebelum berhasil mendapatkan minat paling mendasar dari calon pengguna.'
          : 'Zero behavioral proof. Do not invest capital on software agencies before minimal demand validation.'
      });
    } else if (answers.validationLevel === 'B') {
      detailedAnalysis.push({
        category: language === 'id' ? 'Validasi Pasar' : 'Validation',
        status: 'warning',
        feedback: language === 'id'
          ? 'Wawancara verbal itu bagus, namun komitmen aksi jauh lebih kuat. Coba dapatkan email waiting-list atau surat pernyataan minat (LOI) pendukung.'
          : 'Conversations are good. Push toward secure signups, email queues, or pre-orders.'
      });
    } else {
      detailedAnalysis.push({
        category: language === 'id' ? 'Validasi Pasar' : 'Validation',
        status: 'good',
        feedback: language === 'id'
          ? 'Luar biasa. Pengguna telah membuktikan komitmen aksi riil, yang memicu alasan mutlak pembangunan perangkat lunak.'
          : 'Exceptional Validation. Ideal foundation block for software engineering.'
      });
    }

    // Analyze Team
    if (answers.teamStatus === 'A') {
      detailedAnalysis.push({
        category: language === 'id' ? 'Kapasitas Eksekusi' : 'Execution Capability',
        status: 'danger',
        feedback: language === 'id'
          ? 'Hadirnya visi teknik sangat krusial. Memberikan kontrol penuh ke pihak lepas luar sangat berisiko. Pertimbangkan pendamping teknis mumpuni.'
          : 'Lacking native technical oversight is extremely risky. Consider a strategic Founding Partner.'
      });
    } else if (answers.teamStatus === 'B') {
      detailedAnalysis.push({
        category: language === 'id' ? 'Kapasitas Eksekusi' : 'Execution Capability',
        status: 'warning',
        feedback: language === 'id'
          ? 'Kombinasi bisnis yang solid, namun kurang spesifik pada pengambilan keputusan arsitektur perangkat lunak yang rumit.'
          : 'A solid business framework, but needs clean architectural and tech stacking direction.'
      });
    } else {
      detailedAnalysis.push({
        category: language === 'id' ? 'Kapasitas Eksekusi' : 'Execution Capability',
        status: 'good',
        feedback: language === 'id'
          ? 'Struktur dan fungsional tim sudah memuaskan. Jaga jalannya eksekusi rilis Anda tetap taktis lewat standardisasi ketat.'
          : 'Excellent. Keep production sprints standardized to maximize output quality.'
      });
    }

    // Analyze Capital
    if (answers.budgetStatus === 'A') {
      detailedAnalysis.push({
        category: language === 'id' ? 'Laju Finansial' : 'Financial Pacing',
        status: 'warning',
        feedback: language === 'id'
          ? 'Langkahnya harus sangat taktis. Manfaatkan modal discovery terarah dan minimalisir penulisan kode berlebihan di awal.'
          : 'Zero reserve demands smart validation workflows. Focus strictly on clean scoping first.'
      });
    } else if (answers.budgetStatus === 'B') {
      detailedAnalysis.push({
        category: language === 'id' ? 'Laju Finansial' : 'Financial Pacing',
        status: 'good',
        feedback: language === 'id'
          ? 'Sifat alokasi ini sangat proporsional. Modal terarah harus diprioritaskan bagi keandalan MVP dan perencanaan Discovery yang cermat.'
          : 'Perfect allocation level. Earmark funds for MVP Discovery mapping first.'
      });
    } else {
      detailedAnalysis.push({
        category: language === 'id' ? 'Laju Finansial' : 'Financial Pacing',
        status: 'good',
        feedback: language === 'id'
          ? 'Kas modal melimpah. Jauhkan dari ancaman pembengkakan skala fungsional dengan memotong backlog MVP non-krusial.'
          : 'Abundant capital. Resist scope creep with rigorous backlog grooming sprints.'
      });
    }

    return {
      score,
      grade,
      summary,
      suggestedNextStep,
      detailedAnalysis
    };
  };

  const handleLeadSubmit = (e: FormEvent) => {
    e.preventDefault();
    if (!lead.name || !lead.email) return;

    setIsSubmitting(true);
    // Simulate premium assessment generation
    setTimeout(() => {
      setIsSubmitting(false);
      setShowLeadForm(false);
      setShowResults(true);

      // Scroll smoothly to widget section
      const section = document.getElementById('assessment-widget');
      if (section) {
        section.scrollIntoView({ behavior: 'smooth' });
      }
    }, 1500);
  };

  const handleReset = () => {
    setAnswers({
      problemScope: '',
      targetUsers: '',
      validationLevel: '',
      teamStatus: '',
      budgetStatus: ''
    });
    setCustomProblem('');
    setCustomUsers('');
    setLead({ name: '', email: '', company: '' });
    setCurrentStep(0);
    setShowLeadForm(false);
    setShowResults(false);
  };

  const activeQuestion = questions[currentStep];
  const isCurrentAnswered = !!answers[activeQuestion.id as keyof AssessmentAnswers];
  const progressPercent = ((currentStep + 1) / questions.length) * 100;

  const result = calculateResults();

  const labels = {
    badge: language === 'id' ? 'Diagnosis Interaktif' : 'Interactive Diagnostic',
    title: language === 'id' ? 'Seberapa Siap Startup Anda?' : 'How Ready Is Your Startup?',
    desc: language === 'id'
      ? 'Gunakan modul diagnosa cerdas berbasis pengalaman nyata kami untuk melakukan stress-test strategis pada ide, kesiapan tim, dan alokasi anggaran Anda sebelum mulai memprogram.'
      : 'Take our data-backed readiness audit to run a comprehensive strategic stress-test on your idea, team, and budget structure before writing code.',
    questionOf: language === 'id' ? 'PERTANYAAN' : 'QUESTION',
    of: language === 'id' ? 'DARI' : 'OF',
    complete: language === 'id' ? 'SELESAI' : 'COMPLETE',
    back: language === 'id' ? 'Kembali' : 'Back',
    continue: language === 'id' ? 'Lanjutkan' : 'Continue',
    analyze: language === 'id' ? 'Analisis Rencana' : 'Analyze Plan',
    unlockHeader: language === 'id' ? 'Buka Hasil Analisis' : 'Unlock Your Assessment',
    unlockDesc: language === 'id'
      ? 'Hasil skor diagnosa tepercaya Anda telah siap. Isi data diri Anda untuk mengunduh indeks mitigasi risiko dan langkah lanjutan dari ANDAI.'
      : 'Your customized diagnostic analysis score has been calculated. Share your details to generate your risk index and recommended action steps.',
    nameLabel: language === 'id' ? 'Nama Lengkap *' : 'Full Name *',
    emailLabel: language === 'id' ? 'Email Kantor *' : 'Corporate Email *',
    companyLabel: language === 'id' ? 'Nama Perusahaan *' : 'Startup or Company Name *',
    cancel: language === 'id' ? 'Batalkan' : 'Cancel',
    generating: language === 'id' ? 'Meramu Laporan...' : 'Crafting Dashboard...',
    generateBtn: language === 'id' ? 'Buka Dasbor Analisis' : 'Generate Dashboard',
    analysisFor: language === 'id' ? 'Hasil diagnosa untuk' : 'Assessment for',
    gradeLabel: language === 'id' ? 'Status Kesiapan:' : 'Readiness Grade:',
    actionStepHeader: language === 'id' ? 'Rekomendasi Langkah Berikutnya:' : 'Suggested Next Step:',
    ctaTakeAction: language === 'id' ? 'Diskusikan Bersama Kami' : "Let's Address This",
    resetBtn: language === 'id' ? 'Ulangi Pengujian' : 'Redo Assessment',
    categoryBreakdown: language === 'id' ? 'Rincian Analisis Berdasarkan Kategori' : 'Assessment Category Breakdown',
    ratingLabel: language === 'id' ? 'Skor Risiko' : 'Risk Rating'
  };

  return (
    <section id="assessment-section" className="py-24 border-y border-neutral-200 dark:border-neutral-800 bg-neutral-50/40 dark:bg-neutral-900/10">
      <div className="max-w-4xl mx-auto px-6" id="assessment-widget">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="font-mono text-xs text-purple-600 dark:text-purple-400 font-bold uppercase tracking-widest bg-purple-100 dark:bg-purple-900/30 px-3 py-1 rounded-full">
            {labels.badge}
          </span>
          <h2 className="text-3xl md:text-5xl font-display font-extrabold text-neutral-900 dark:text-white mt-4 tracking-tight">
            {labels.title}
          </h2>
          <p className="text-neutral-500 mt-4 leading-relaxed text-sm md:text-base">
            {labels.desc}
          </p>
        </div>

        {/* Assessment Card Wrapper */}
        <div className="bg-white dark:bg-neutral-950 rounded-2xl border border-neutral-200/90 dark:border-neutral-800/90 shadow-xl overflow-hidden min-h-[460px] flex flex-col">
          {!showLeadForm && !showResults && (
            <div className="flex-1 flex flex-col">
              {/* Stepper Progress Bar */}
              <div className="h-1.5 bg-neutral-100 dark:bg-neutral-900 relative">
                <div 
                  className="absolute top-0 bottom-0 left-0 bg-gradient-to-r from-blue-500 to-purple-500 transition-all duration-500 rounded-r-full"
                  style={{ width: `${progressPercent}%` }}
                />
              </div>

              {/* Step info */}
              <div className="px-6 py-4 border-b border-neutral-100 dark:border-neutral-900 flex justify-between items-center text-xs text-neutral-400 font-mono">
                <span>{labels.questionOf} {currentStep + 1} {labels.of} {questions.length}</span>
                <span className="text-purple-600 dark:text-purple-400 font-semibold">{Math.round(progressPercent)}% {labels.complete}</span>
              </div>

              {/* Main Survey Panel */}
              <div className="p-6 md:p-10 flex-1 flex flex-col justify-between">
                <div>
                  <h3 className="text-xl md:text-2xl font-display font-semibold text-neutral-800 dark:text-neutral-50">
                    {activeQuestion.title}
                  </h3>
                  <p className="text-neutral-400 text-sm mt-1 mb-8">
                    {activeQuestion.subtitle}
                  </p>

                  {/* Options List */}
                  <div className="space-y-4">
                    {activeQuestion.options.map((opt) => {
                      const isSelected = answers[activeQuestion.id as keyof AssessmentAnswers] === opt.value;
                      return (
                        <button
                          key={opt.value}
                          onClick={() => handleSelectOption(activeQuestion.id as keyof AssessmentAnswers, opt.value)}
                          className={`w-full text-left p-4 rounded-xl border flex items-start space-x-4 transition-all duration-300 group focus:outline-none ${
                            isSelected
                              ? 'border-purple-500 bg-purple-50/40 dark:bg-purple-950/20 shadow-sm'
                              : 'border-neutral-200 dark:border-neutral-800 hover:border-neutral-300 dark:hover:border-neutral-700 bg-white dark:bg-neutral-950'
                          }`}
                        >
                          <div className={`mt-0.5 w-5 h-5 rounded-full flex items-center justify-center text-xs font-bold border transition-colors ${
                            isSelected
                              ? 'bg-purple-600 border-purple-600 text-white'
                              : 'border-neutral-300 dark:border-neutral-700 text-neutral-400 group-hover:border-neutral-400'
                          }`}>
                            {opt.value}
                          </div>
                          <div>
                            <span className={`block text-sm md:text-base font-bold ${
                              isSelected ? 'text-purple-950 dark:text-purple-300' : 'text-neutral-700 dark:text-neutral-300'
                            }`}>
                              {opt.label}
                            </span>
                            <span className="block text-xs md:text-sm text-neutral-400 dark:text-neutral-500 mt-1">
                              {opt.desc}
                            </span>
                          </div>
                        </button>
                      );
                    })}
                  </div>

                  {/* Optional Custom Input Text for problem & users */}
                  {currentStep === 0 && (
                    <div className="mt-6">
                      <label htmlFor="custom-problem" className="block text-xs font-mono text-neutral-400 mb-2">
                        {activeQuestion.placeholder}
                      </label>
                      <input
                        id="custom-problem"
                        type="text"
                        value={customProblem}
                        onChange={(e) => setCustomProblem(e.target.value)}
                        placeholder={language === 'id' ? 'Contoh: Pelaku UMKM kehilangan waktu hingga 15 jam per minggu karena pencatatan manual.' : 'e.g., SME owners lose 15 hours a week manually planning.'}
                        className="w-full text-sm p-3 rounded-lg border border-neutral-200 dark:border-neutral-800 bg-neutral-50/50 dark:bg-neutral-900/30 text-neutral-700 dark:text-neutral-300 focus:outline-none focus:border-purple-500"
                      />
                    </div>
                  )}

                  {currentStep === 1 && (
                    <div className="mt-6">
                      <label htmlFor="custom-users" className="block text-xs font-mono text-neutral-400 mb-2">
                        {activeQuestion.placeholder}
                      </label>
                      <input
                        id="custom-users"
                        type="text"
                        value={customUsers}
                        onChange={(e) => setCustomUsers(e.target.value)}
                        placeholder={language === 'id' ? 'Contoh: Para founder solo Indonesia atau manager operasional ritel digital.' : 'e.g., Indonesian solo founders and SME managers.'}
                        className="w-full text-sm p-3 rounded-lg border border-neutral-200 dark:border-neutral-800 bg-neutral-50/50 dark:bg-neutral-900/30 text-neutral-700 dark:text-neutral-300 focus:outline-none focus:border-purple-500"
                      />
                    </div>
                  )}
                </div>

                {/* Footer Controls */}
                <div className="flex justify-between items-center mt-10 pt-6 border-t border-neutral-100 dark:border-neutral-900">
                  <button
                    onClick={handleBack}
                    disabled={currentStep === 0}
                    className={`flex items-center space-x-1.5 text-xs font-mono tracking-wider uppercase transition-colors px-3 py-1.5 rounded-lg border focus:outline-none ${
                      currentStep === 0
                        ? 'opacity-30 text-neutral-400 cursor-not-allowed border-neutral-100 dark:border-neutral-900'
                        : 'text-neutral-600 dark:text-neutral-300 hover:text-neutral-900 border-neutral-200 dark:border-neutral-800 hover:bg-neutral-50 dark:hover:bg-neutral-900'
                    }`}
                  >
                    <ChevronLeft className="w-4 h-4" />
                    <span>{labels.back}</span>
                  </button>

                  <button
                    onClick={handleNext}
                    disabled={!isCurrentAnswered}
                    className={`flex items-center space-x-1.5 text-xs font-mono tracking-wider uppercase transition-all px-4 py-2 rounded-lg font-bold focus:outline-none ${
                      isCurrentAnswered
                        ? 'bg-purple-600 hover:bg-purple-700 text-white cursor-pointer shadow-md'
                        : 'bg-neutral-100 dark:bg-neutral-900 text-neutral-400 border border-neutral-200 dark:border-neutral-800 cursor-not-allowed'
                    }`}
                  >
                    <span>{currentStep === questions.length - 1 ? labels.analyze : labels.continue}</span>
                    <ChevronRight className="w-4 h-4" />
                  </button>
                </div>
              </div>
            </div>
          )}

          {/* Lead Capture Overlay before showing results */}
          {showLeadForm && (
            <div className="p-8 md:p-12 flex-1 flex flex-col justify-center max-w-lg mx-auto w-full">
              <div className="text-center mb-8">
                <div className="w-12 h-12 rounded-full bg-purple-50 dark:bg-purple-900/30 text-purple-600 dark:text-purple-400 flex items-center justify-center mx-auto mb-4 border border-purple-200/50 dark:border-purple-800/30">
                  <Lock className="w-5 h-5 animate-pulse" />
                </div>
                <h3 className="text-2xl font-display font-extrabold text-neutral-900 dark:text-white">
                  {labels.unlockHeader}
                </h3>
                <p className="text-neutral-500 text-sm mt-2">
                  {labels.unlockDesc}
                </p>
              </div>

              <form onSubmit={handleLeadSubmit} className="space-y-4">
                <div>
                  <label htmlFor="lead-name" className="block text-xs font-mono text-neutral-400 uppercase tracking-widest mb-1.5 font-bold">
                    {labels.nameLabel}
                  </label>
                  <input
                    id="lead-name"
                    required
                    type="text"
                    value={lead.name}
                    onChange={(e) => setLead(prev => ({ ...prev, name: e.target.value }))}
                    placeholder="e.g. Farid Tanjung"
                    className="w-full text-sm p-3 rounded-lg border border-neutral-200 dark:border-neutral-800 bg-neutral-50/55 dark:bg-neutral-900/30 text-neutral-800 dark:text-white focus:outline-none focus:border-purple-600"
                  />
                </div>

                <div>
                  <label htmlFor="lead-email" className="block text-xs font-mono text-neutral-400 uppercase tracking-widest mb-1.5 font-bold">
                    {labels.emailLabel}
                  </label>
                  <input
                    id="lead-email"
                    required
                    type="email"
                    value={lead.email}
                    onChange={(e) => setLead(prev => ({ ...prev, email: e.target.value }))}
                    placeholder="e.g. farid@andai.tech"
                    className="w-full text-sm p-3 rounded-lg border border-neutral-200 dark:border-neutral-800 bg-neutral-50/55 dark:bg-neutral-900/30 text-neutral-800 dark:text-white focus:outline-none focus:border-purple-600"
                  />
                </div>

                <div>
                  <label htmlFor="lead-company" className="block text-xs font-mono text-neutral-400 uppercase tracking-widest mb-1.5 font-bold">
                    {labels.companyLabel}
                  </label>
                  <input
                    id="lead-company"
                    type="text"
                    value={lead.company}
                    onChange={(e) => setLead(prev => ({ ...prev, company: e.target.value }))}
                    placeholder="e.g. ANDAI Labs"
                    className="w-full text-sm p-3 rounded-lg border border-neutral-200 dark:border-neutral-800 bg-neutral-50/55 dark:bg-neutral-900/30 text-neutral-800 dark:text-white focus:outline-none focus:border-purple-600"
                  />
                </div>

                <div className="pt-4 flex space-x-3">
                  <button
                    type="button"
                    onClick={() => setShowLeadForm(false)}
                    className="flex-1 text-xs font-mono uppercase tracking-wider text-neutral-500 border border-neutral-200 dark:border-neutral-800 rounded-lg hover:bg-neutral-50 dark:hover:bg-neutral-950 p-3 text-center transition-colors"
                  >
                    {labels.cancel}
                  </button>
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="flex-[2] text-xs font-mono uppercase tracking-wider text-white bg-purple-600 hover:bg-purple-700 font-extrabold rounded-lg p-3 text-center flex items-center justify-center space-x-1.5 hover:shadow-lg transition-all"
                  >
                    {isSubmitting ? (
                      <>
                        <RefreshCw className="w-4 h-4 animate-spin" />
                        <span>{labels.generating}</span>
                      </>
                    ) : (
                      <>
                        <span>{labels.generateBtn}</span>
                        <ArrowRight className="w-4 h-4" />
                      </>
                    )}
                  </button>
                </div>
              </form>
            </div>
          )}

          {/* Results dashboard component */}
          {showResults && (
            <div className="p-6 md:p-10 flex-grow">
              {/* Header result stats */}
              <div className="grid md:grid-cols-3 gap-6 items-center border-b border-neutral-100 dark:border-neutral-950 pb-8 mb-8">
                {/* Score gauge design */}
                <div className="flex flex-col items-center bg-neutral-50 dark:bg-neutral-900/40 p-6 rounded-2xl border border-neutral-200/50 dark:border-neutral-800/40 relative">
                  <div className="relative w-32 h-32 flex items-center justify-center">
                    {/* SVG Progress Circle */}
                    <svg className="absolute inset-0 w-32 h-32 transform -rotate-90">
                      <circle
                        cx="64"
                        cy="64"
                        r="52"
                        className="stroke-neutral-200 dark:stroke-neutral-800"
                        strokeWidth="8"
                        fill="transparent"
                      />
                      <circle
                        cx="64"
                        cy="64"
                        r="52"
                        className="stroke-purple-600"
                        strokeWidth="8"
                        fill="transparent"
                        strokeDasharray={326.7}
                        strokeDashoffset={326.7 - (326.7 * result.score) / 100}
                        strokeLinecap="round"
                      />
                    </svg>
                    <div className="text-center">
                      <span className="text-3xl font-display font-extrabold text-neutral-800 dark:text-white block font-mono">
                        {result.score}%
                      </span>
                      <span className="text-[10px] font-mono uppercase text-neutral-400 tracking-wider">
                        {labels.ratingLabel}
                      </span>
                    </div>
                  </div>
                </div>

                {/* Risk and detail header */}
                <div className="md:col-span-2">
                  <div className="flex items-center space-x-2">
                    <span className="font-mono text-xs text-neutral-400">
                      {labels.analysisFor} {lead.company ? `${lead.name} (${lead.company})` : lead.name}
                    </span>
                  </div>
                  <h4 className="text-2xl font-display font-extrabold text-neutral-900 dark:text-white mt-1">
                    {labels.gradeLabel} <span className="text-purple-600 dark:text-purple-400">{result.grade}</span>
                  </h4>
                  <p className="text-neutral-500 text-sm mt-3 leading-relaxed">
                    {result.summary}
                  </p>
                  
                  {/* custom tags matched */}
                  {(customProblem || customUsers) && (
                    <div className="mt-4 flex flex-wrap gap-2">
                      {customProblem && (
                        <span className="px-2 py-0.5 max-w-xs truncate rounded bg-blue-50 dark:bg-blue-900/20 text-blue-800 dark:text-blue-300 text-[11px] font-mono border border-blue-100 dark:border-blue-800/20">
                          Problem: "{customProblem}"
                        </span>
                      )}
                      {customUsers && (
                        <span className="px-2 py-0.5 max-w-xs truncate rounded bg-green-50 dark:bg-green-900/20 text-green-800 dark:text-green-300 text-[11px] font-mono border border-green-100 dark:border-green-800/20">
                          Audience: "{customUsers}"
                        </span>
                      )}
                    </div>
                  )}
                </div>
              </div>

              {/* Action item block */}
              <div className="bg-gradient-to-r from-purple-900/10 to-blue-900/10 dark:from-purple-950/45 dark:to-blue-950/15 p-6 rounded-2xl border border-purple-200/50 dark:border-purple-800/40 mb-8">
                <div className="flex items-center space-x-2 text-purple-700 dark:text-purple-300 font-bold text-sm mb-2">
                  <Sparkles className="w-4 h-4 animate-bounce" />
                  <span className="font-mono text-xs uppercase tracking-wider">{labels.actionStepHeader}</span>
                </div>
                <p className="text-neutral-800 dark:text-neutral-100 text-base font-semibold leading-relaxed">
                  {result.suggestedNextStep}
                </p>
                <div className="mt-4 flex flex-col sm:flex-row gap-3">
                  <a
                    href="#contact-section"
                    onClick={(e) => {
                      e.preventDefault();
                      document.getElementById('contact-section')?.scrollIntoView({ behavior: 'smooth' });
                    }}
                    className="inline-flex items-center justify-center space-x-2 bg-neutral-900 hover:bg-neutral-850 dark:bg-white dark:hover:bg-neutral-100 text-white dark:text-neutral-950 hover:shadow-md transition-all font-semibold font-mono text-xs px-4 py-2.5 rounded-lg border border-neutral-700 dark:border-neutral-200"
                  >
                    <span>{labels.ctaTakeAction}</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </a>
                  <button
                    onClick={handleReset}
                    className="inline-flex items-center justify-center space-x-1.5 text-neutral-500 hover:text-neutral-800 dark:hover:text-neutral-300 bg-transparent border border-neutral-200 dark:border-neutral-800 text-xs font-mono px-3 py-2.5 rounded-lg hover:bg-neutral-50 dark:hover:bg-neutral-900 transition-colors"
                  >
                    <RefreshCw className="w-3 h-3" />
                    <span>{labels.resetBtn}</span>
                  </button>
                </div>
              </div>

              {/* Detailed Stress Test Analysis list */}
              <div>
                <h5 className="text-xs font-mono uppercase tracking-widest text-neutral-400 font-bold mb-4">
                  {labels.categoryBreakdown}
                </h5>
                <div className="grid sm:grid-cols-2 lg:grid-cols-5 gap-4">
                  {result.detailedAnalysis.map((item, idx) => {
                    const isGood = item.status === 'good';
                    const isWarn = item.status === 'warning';
                    return (
                      <div 
                        key={idx}
                        className={`p-4 rounded-xl border flex flex-col justify-between ${
                          isGood 
                            ? 'bg-neutral-50/40 dark:bg-neutral-900/10 border-emerald-500/10 dark:border-emerald-500/5'
                            : isWarn
                            ? 'bg-neutral-50/40 dark:bg-neutral-900/10 border-amber-500/20 dark:border-amber-500/10'
                            : 'bg-neutral-50/40 dark:bg-neutral-900/10 border-rose-500/20 dark:border-rose-500/10'
                        }`}
                      >
                        <div>
                          <div className="flex justify-between items-center mb-2">
                            <span className="font-display font-semibold text-sm text-neutral-800 dark:text-neutral-200">
                              {item.category}
                            </span>
                            <span className={`w-2 h-2 rounded-full ${
                              isGood 
                                ? 'bg-emerald-500'
                                : isWarn
                                ? 'bg-amber-500'
                                : 'bg-rose-500'
                            }`} />
                          </div>
                          <p className="text-xs text-neutral-500 dark:text-neutral-400 leading-relaxed font-sans">
                            {item.feedback}
                          </p>
                        </div>
                        <div className="mt-3 pt-2 border-t border-dotted border-neutral-200 dark:border-neutral-800 text-[10px] font-mono font-bold tracking-wider uppercase text-neutral-400">
                          {isGood ? (language === 'id' ? 'Status: Jangkar' : 'Status: Anchor') : isWarn ? (language === 'id' ? 'Status: Pending' : 'Status: Pending') : (language === 'id' ? 'Bendera Risiko' : 'Risk Flag')}
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
