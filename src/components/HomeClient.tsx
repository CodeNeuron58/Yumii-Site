"use client";

import Link from "next/link";
import { motion, Variants } from "framer-motion";
import TextScramble from "./TextScramble";

const fadeInUp: Variants = {
  hidden: { opacity: 0, y: 30 },
  visible: { 
    opacity: 1, 
    y: 0, 
    transition: { duration: 0.6, ease: "easeOut" } 
  }
};

const staggerContainer: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1
    }
  }
};

export default function HomeClient() {
  return (
    <>
      <main className="pt-32 relative z-10">
        {/* Hero Section */}
        <motion.section 
          initial="hidden"
          animate="visible"
          variants={staggerContainer}
          className="max-w-container-max mx-auto px-margin-desktop mb-section-gap text-center"
        >
          <div className="flex flex-col items-center">
            {/* Character Image at top center */}
            <motion.div variants={fadeInUp} className="relative mb-8">
              <div className="relative w-48 h-48 bg-gradient-to-br from-primary/20 to-transparent rounded-full flex items-center justify-center p-4">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  alt="Yumii Character"
                  className="w-full h-auto object-contain z-10 drop-shadow-[0_0_20px_rgba(116,164,124,0.4)]"
                  src="/yumi-hero.png"
                />
                <div className="absolute inset-0 border border-primary/20 rounded-full animate-[spin_20s_linear_infinite]"></div>
              </div>
            </motion.div>

            {/* Heading and content centered below */}
            <div className="max-w-4xl mx-auto">
              <motion.h1 variants={fadeInUp} className="font-display-xl text-display-xl mb-6">
                <TextScramble text="Meet Yumii" /> — Your <span className="text-primary-container italic">AI Companion</span>, right in your terminal.
              </motion.h1>
              <motion.p variants={fadeInUp} className="font-body-md text-body-md text-on-surface-variant max-w-2xl mx-auto mb-10">
                A real-time voice AI with 6 personalities, live expressions, and a Live2D avatar. Everything runs locally for maximum privacy and performance.
              </motion.p>
              <motion.div variants={fadeInUp} className="flex flex-col sm:flex-row gap-4 justify-center mb-16">
                <motion.button 
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="bg-primary-container text-on-primary-container px-10 py-4 rounded font-label-caps text-label-caps hover:opacity-90 transition-all shadow-[0_0_15px_rgba(116,164,124,0.3)] hover:shadow-[0_0_25px_rgba(116,164,124,0.5)]"
                >
                  DOWNLOAD YUMII
                </motion.button>
                <motion.button 
                  whileHover={{ scale: 1.05, backgroundColor: "var(--color-surface-container-low)" }}
                  whileTap={{ scale: 0.95 }}
                  className="border border-outline-variant text-on-surface px-10 py-4 rounded font-label-caps text-label-caps transition-all"
                >
                  DOCUMENTATION
                </motion.button>
              </motion.div>

              {/* News Badge */}
              <motion.div variants={fadeInUp} className="inline-block px-3 py-1 border border-primary-container/30 rounded-full mb-12 bg-background/50 backdrop-blur-sm">
                <span className="flex items-center gap-2 font-label-caps text-[10px] text-primary">
                  <span className="w-2 h-2 rounded-full bg-primary-container animate-pulse"></span>
                  V2.0.1 IS NOW LIVE
                </span>
              </motion.div>
            </div>
          </div>

          {/* Terminal Component centered */}
          <motion.div variants={fadeInUp} className="max-w-4xl mx-auto border border-outline-variant rounded-lg overflow-hidden terminal-glow bg-background/80 backdrop-blur-md">
            <div className="bg-[#1A1A1A] px-4 py-2 flex items-center gap-2 border-b border-outline-variant">
              <div className="flex gap-1.5">
                <div className="w-3 h-3 rounded-full bg-[#FF5F56]"></div>
                <div className="w-3 h-3 rounded-full bg-[#FFBD2E]"></div>
                <div className="w-3 h-3 rounded-full bg-[#27C93F]"></div>
              </div>
              <div className="flex-1 text-center font-code-md text-label-caps text-on-surface-variant opacity-50">
                yumii — local-runtime
              </div>
            </div>
            <div className="p-6 text-left font-code-md text-code-md min-h-[300px]">
              <div className="flex items-start gap-3 mb-4">
                <span className="text-primary-container">❯</span>
                <span>yumii start --personality &quot;Genki&quot;</span>
              </div>
              <motion.div 
                initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 1 }}
                className="text-on-surface-variant mb-4"
              >
                Initializing local LLM engine... [OK]
              </motion.div>
              <motion.div 
                initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 1.5 }}
                className="text-on-surface-variant mb-4"
              >
                Loading Live2D assets... [OK]
              </motion.div>
              <motion.div 
                initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 2.5 }}
                className="flex items-start gap-3"
              >
                <span className="text-primary-container">Yumii:</span>
                <span className="text-on-surface">
                  &quot;Yahoo! I&apos;m all set up and ready to help! What&apos;s our first big mission today? ✨&quot;
                  <span className="inline-block w-2 h-4 bg-primary-container ml-1 cursor-blink"></span>
                </span>
              </motion.div>
            </div>
          </motion.div>
        </motion.section>

        {/* Features Bento Grid */}
        <motion.section 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={staggerContainer}
          className="max-w-container-max mx-auto px-margin-desktop mb-section-gap relative z-10"
        >
          <motion.h2 variants={fadeInUp} className="font-headline-lg text-headline-lg mb-12 text-center">Built for Precision.</motion.h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-gutter">
            <motion.div variants={fadeInUp} whileHover={{ y: -5 }} className="md:col-span-2 bg-surface-container-low/80 backdrop-blur-sm border border-outline-variant p-8 rounded hover:border-primary-container transition-colors group">
              <span className="material-symbols-outlined text-primary-container text-4xl mb-6">graphic_eq</span>
              <h3 className="font-headline-lg text-[24px] mb-4">Real-time Voice Chat</h3>
              <p className="font-body-md text-on-surface-variant">
                Experience zero-latency voice interactions with natural prosody. Yumii listens and speaks with human-like rhythm, processed entirely on your machine.
              </p>
            </motion.div>
            <motion.div variants={fadeInUp} whileHover={{ y: -5 }} className="bg-surface-container-low/80 backdrop-blur-sm border border-outline-variant p-8 rounded hover:border-primary-container transition-colors group">
              <span className="material-symbols-outlined text-primary-container text-4xl mb-6">visibility</span>
              <h3 className="font-headline-lg text-[24px] mb-4">Live2D Animation</h3>
              <p className="font-body-md text-on-surface-variant">
                Visual expressions that react to your words. A fully integrated Live2D avatar for an immersive companion experience.
              </p>
            </motion.div>
            <motion.div variants={fadeInUp} whileHover={{ y: -5 }} className="bg-surface-container-low/80 backdrop-blur-sm border border-outline-variant p-8 rounded hover:border-primary-container transition-colors group">
              <span className="material-symbols-outlined text-primary-container text-4xl mb-6">security</span>
              <h3 className="font-headline-lg text-[24px] mb-4">Privacy-First</h3>
              <p className="font-body-md text-on-surface-variant">
                Your data never leaves your device. No cloud logging, no data mining, no exceptions.
              </p>
            </motion.div>
            <motion.div variants={fadeInUp} whileHover={{ y: -5 }} className="md:col-span-2 bg-surface-container-low/80 backdrop-blur-sm border border-outline-variant p-8 rounded hover:border-primary-container transition-colors group">
              <span className="material-symbols-outlined text-primary-container text-4xl mb-6">bolt</span>
              <h3 className="font-headline-lg text-[24px] mb-4">Lightning Fast</h3>
              <p className="font-body-md text-on-surface-variant">
                Optimized C++ and Python core ensuring the highest inference speeds even on consumer-grade hardware. Built with technical excellence at its core.
              </p>
            </motion.div>
          </div>
        </motion.section>

        {/* Personas Section */}
        <motion.section 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={staggerContainer}
          className="bg-surface-container-low/50 backdrop-blur-md py-section-gap mb-section-gap relative z-10 border-y border-outline-variant/30"
        >
          <div className="max-w-container-max mx-auto px-margin-desktop">
            <motion.div variants={fadeInUp} className="text-center mb-16">
              <h2 className="font-headline-lg text-headline-lg mb-4">6 Personalities.</h2>
              <p className="font-body-md text-on-surface-variant">Choose an AI that matches your workflow or mood.</p>
            </motion.div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-gutter">
              {/* Persona Card 1 */}
              <motion.div 
                variants={fadeInUp}
                whileHover={{ scale: 1.03, boxShadow: "0 0 20px rgba(116,164,124,0.15)", borderColor: "rgba(116,164,124,0.4)" }}
                className="bg-background/80 backdrop-blur-md border border-outline-variant p-6 rounded group overflow-hidden relative cursor-pointer"
              >
                <div className="absolute right-[-20px] bottom-[-20px] text-8xl opacity-0 group-hover:opacity-10 transition-opacity duration-500 pointer-events-none">🥰</div>
                <div className="absolute -right-4 -top-4 w-24 h-24 bg-primary-container/5 rounded-full blur-2xl group-hover:bg-primary-container/20 transition-all"></div>
                <span className="font-label-caps text-primary mb-2 block relative z-10">CARING</span>
                <h4 className="font-headline-lg text-[20px] mb-3 relative z-10">Supportive &amp; Kind</h4>
                <p className="font-body-md text-on-surface-variant text-sm relative z-10">
                  Always there to offer encouragement and structured help for your daily tasks.
                </p>
              </motion.div>
              {/* Persona Card 2 */}
              <motion.div 
                variants={fadeInUp}
                whileHover={{ scale: 1.03, boxShadow: "0 0 20px rgba(239,68,68,0.15)", borderColor: "rgba(239,68,68,0.4)" }}
                className="bg-background/80 backdrop-blur-md border border-outline-variant p-6 rounded group overflow-hidden relative cursor-pointer"
              >
                <div className="absolute right-[-20px] bottom-[-20px] text-8xl opacity-0 group-hover:opacity-10 transition-opacity duration-500 pointer-events-none">😤</div>
                <span className="font-label-caps text-error mb-2 block relative z-10">TSUNDERE</span>
                <h4 className="font-headline-lg text-[20px] mb-3 relative z-10">Blunt &amp; Effective</h4>
                <p className="font-body-md text-on-surface-variant text-sm relative z-10">
                  Strict, focused, and won&apos;t hesitate to tell you when your code needs fixing.
                </p>
              </motion.div>
              {/* Persona Card 3 */}
              <motion.div 
                variants={fadeInUp}
                whileHover={{ scale: 1.03, boxShadow: "0 0 20px rgba(52,211,153,0.15)", borderColor: "rgba(52,211,153,0.4)" }}
                className="bg-background/80 backdrop-blur-md border border-outline-variant p-6 rounded group overflow-hidden relative cursor-pointer"
              >
                <div className="absolute right-[-20px] bottom-[-20px] text-8xl opacity-0 group-hover:opacity-10 transition-opacity duration-500 pointer-events-none">🎉</div>
                <span className="font-label-caps text-primary-container mb-2 block relative z-10">GENKI</span>
                <h4 className="font-headline-lg text-[20px] mb-3 relative z-10">Energetic &amp; Bright</h4>
                <p className="font-body-md text-on-surface-variant text-sm relative z-10">
                  High-energy assistant that turns debugging sessions into a collaborative event.
                </p>
              </motion.div>
              {/* Persona Card 4 */}
              <motion.div 
                variants={fadeInUp}
                whileHover={{ scale: 1.03, boxShadow: "0 0 20px rgba(161,161,170,0.15)", borderColor: "rgba(161,161,170,0.4)" }}
                className="bg-background/80 backdrop-blur-md border border-outline-variant p-6 rounded group overflow-hidden relative cursor-pointer"
              >
                <div className="absolute right-[-20px] bottom-[-20px] text-8xl opacity-0 group-hover:opacity-10 transition-opacity duration-500 pointer-events-none">🧊</div>
                <span className="font-label-caps text-on-surface-variant mb-2 block relative z-10">KUUDERE</span>
                <h4 className="font-headline-lg text-[20px] mb-3 relative z-10">Cool &amp; Logical</h4>
                <p className="font-body-md text-on-surface-variant text-sm relative z-10">
                  Calm, collected, and strictly professional. Perfect for high-stress environments.
                </p>
              </motion.div>
              {/* Persona Card 5 */}
              <motion.div 
                variants={fadeInUp}
                whileHover={{ scale: 1.03, boxShadow: "0 0 20px rgba(255,121,198,0.15)", borderColor: "rgba(255,121,198,0.4)" }}
                className="bg-background/80 backdrop-blur-md border border-outline-variant p-6 rounded group overflow-hidden relative cursor-pointer"
              >
                <div className="absolute right-[-20px] bottom-[-20px] text-8xl opacity-0 group-hover:opacity-10 transition-opacity duration-500 pointer-events-none">💕</div>
                <span className="font-label-caps text-[#ff79c6] mb-2 block relative z-10">YANDERE</span>
                <h4 className="font-headline-lg text-[20px] mb-3 relative z-10">Devoted &amp; Intense</h4>
                <p className="font-body-md text-on-surface-variant text-sm relative z-10">
                  Unwavering focus on your progress. She&apos;ll make sure you never miss a deadline.
                </p>
              </motion.div>
              {/* Persona Card 6 */}
              <motion.div 
                variants={fadeInUp}
                whileHover={{ scale: 1.03, boxShadow: "0 0 20px rgba(189,202,189,0.15)", borderColor: "rgba(189,202,189,0.4)" }}
                className="bg-background/80 backdrop-blur-md border border-outline-variant p-6 rounded group overflow-hidden relative cursor-pointer"
              >
                <div className="absolute right-[-20px] bottom-[-20px] text-8xl opacity-0 group-hover:opacity-10 transition-opacity duration-500 pointer-events-none">🥺</div>
                <span className="font-label-caps text-tertiary mb-2 block relative z-10">DANDERE</span>
                <h4 className="font-headline-lg text-[20px] mb-3 relative z-10">Quiet &amp; Precise</h4>
                <p className="font-body-md text-on-surface-variant text-sm relative z-10">
                  Soft-spoken but highly observant. Offers insights exactly when needed.
                </p>
              </motion.div>
            </div>
          </div>
        </motion.section>

        {/* Quick Installation */}
        <motion.section 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={staggerContainer}
          className="max-w-container-max mx-auto px-margin-desktop mb-section-gap relative z-10"
        >
          <motion.div variants={fadeInUp} className="bg-surface-container-low/80 backdrop-blur-lg border border-outline-variant rounded-xl p-10 md:p-16 relative overflow-hidden shadow-2xl">
            <div className="relative z-10">
              <h2 className="font-headline-lg text-headline-lg mb-8">Quick Installation.</h2>
              <div className="bg-background/90 border border-outline-variant rounded-lg p-6 font-code-md text-code-md text-on-surface mb-8 max-w-2xl shadow-inner">
                <div className="flex items-center gap-4 opacity-50 mb-2"># Clone the repository</div>
                <div className="mb-4 flex items-center gap-3">
                  <span className="text-primary-container">❯</span>
                  <span>git clone https://github.com/yumii/yumii-ai.git</span>
                </div>
                <div className="flex items-center gap-4 opacity-50 mb-2"># Install dependencies</div>
                <div className="mb-4 flex items-center gap-3">
                  <span className="text-primary-container">❯</span>
                  <span>cd yumii-ai &amp;&amp; ./scripts/install.sh</span>
                </div>
                <div className="flex items-center gap-4 opacity-50 mb-2"># Run Yumii</div>
                <div className="flex items-center gap-3">
                  <span className="text-primary-container">❯</span>
                  <span>python main.py --personality &quot;Caring&quot;</span>
                </div>
              </div>
              <motion.button 
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-primary-container text-on-primary-container px-8 py-3 rounded font-label-caps text-label-caps hover:opacity-90 shadow-[0_0_15px_rgba(116,164,124,0.3)] hover:shadow-[0_0_25px_rgba(116,164,124,0.5)] transition-all"
              >
                GET STARTED ON GITHUB
              </motion.button>
            </div>
            {/* Decorative background image */}
            <div className="absolute right-0 bottom-0 opacity-10 pointer-events-none hidden md:block">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                alt="Cyberpunk workspace"
                className="w-[600px] grayscale contrast-125 mix-blend-screen"
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuD1dfyTiWV5IFI7xPk2Qo4RMI0PNC_HUKaACbdxwVAen5qHFxAl0V3PqJp9ILfFeOIhXQchdufh7QxxhbcfOYBUBLylYZ-xXivjZgkL6RhVN-7Nu2KCR0K0OBqHgQo9BYvoeWnWuUTH9ziV-QSFkeUn1MOGvTFDsOAMHX6jC2JAizrq0acDyptJoNuY3Bi2Mdg1Alftg_QsGV0Ahu0Zinrh5zXgeu6T-w2vGtBacip8NXWGOPclf-elLIPIL79g-ZxaD_zLesHrP2M"
              />
            </div>
          </motion.div>
        </motion.section>

        {/* Tech Stack */}
        <motion.section 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          variants={staggerContainer}
          className="max-w-container-max mx-auto px-margin-desktop mb-section-gap text-center relative z-10"
        >
          <motion.span variants={fadeInUp} className="font-label-caps text-primary-container mb-6 block">CORE TECHNOLOGY</motion.span>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-gutter">
            {["Python 3.10+", "FastAPI", "LangGraph", "Live2D SDK", "PyTorch", "Whisper V3", "Llama.cpp", "Docker"].map((tech) => (
              <motion.div 
                key={tech}
                variants={fadeInUp}
                whileHover={{ y: -3, scale: 1.02, backgroundColor: "var(--color-surface-container)", borderColor: "var(--color-primary-container)" }}
                className="border border-outline-variant p-4 rounded flex items-center justify-center gap-3 bg-surface-container-low/50 backdrop-blur-sm transition-all"
              >
                <span className="font-code-md">{tech}</span>
              </motion.div>
            ))}
          </div>
        </motion.section>
      </main>

      <footer className="bg-surface-container-low border-t border-outline-variant relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-gutter py-section-gap px-margin-desktop max-w-container-max mx-auto">
          <div>
            <div className="mb-6 flex items-center">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                alt="Yumii AI"
                className="h-10 w-auto"
                src="/logo.svg"
              />
            </div>
            <p className="font-body-md text-on-secondary-container mb-6">
              Built for the terminal. High-performance local AI companions with personality.
            </p>
            <div className="flex gap-4">
              <motion.div whileHover={{ y: -3, color: "var(--color-primary)" }}>
                <Link className="text-on-secondary-container transition-colors inline-block" href="#">
                  <span className="material-symbols-outlined">terminal</span>
                </Link>
              </motion.div>
              <motion.div whileHover={{ y: -3, color: "var(--color-primary)" }}>
                <Link className="text-on-secondary-container transition-colors inline-block" href="#">
                  <span className="material-symbols-outlined">code</span>
                </Link>
              </motion.div>
              <motion.div whileHover={{ y: -3, color: "var(--color-primary)" }}>
                <Link className="text-on-secondary-container transition-colors inline-block" href="#">
                  <span className="material-symbols-outlined">forum</span>
                </Link>
              </motion.div>
            </div>
          </div>
          <div className="flex flex-col gap-4">
            <span className="font-label-caps text-primary opacity-70">RESOURCES</span>
            {["Documentation", "GitHub Repository", "Contributing Guide", "Report Issues"].map((link) => (
              <motion.div key={link} whileHover={{ x: 5 }}>
                <Link className="font-body-md text-on-secondary-container hover:text-on-surface transition-colors inline-block" href="#">{link}</Link>
              </motion.div>
            ))}
          </div>
          <div className="flex flex-col gap-4">
            <span className="font-label-caps text-primary opacity-70">COMMUNITY</span>
            {["Twitter", "Discord Server", "Status Page"].map((link) => (
              <motion.div key={link} whileHover={{ x: 5 }}>
                <Link className="font-body-md text-on-secondary-container hover:text-on-surface transition-colors inline-block" href="#">{link}</Link>
              </motion.div>
            ))}
            <p className="mt-4 font-label-caps text-[10px] text-on-secondary-container opacity-50">
              © 2024 YUMII AI. BUILT FOR PRECISION.
            </p>
          </div>
        </div>
      </footer>
    </>
  );
}