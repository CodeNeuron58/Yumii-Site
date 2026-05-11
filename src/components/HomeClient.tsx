"use client";

import Link from "next/link";

export default function HomeClient() {
  return (
    <>
      <main className="pt-32">
        {/* Hero Section */}
        <section className="max-w-container-max mx-auto px-margin-desktop mb-section-gap text-center">
          <div className="flex flex-col items-center">
            {/* Character Image at top center */}
            <div className="relative mb-8">
              <div className="relative w-48 h-48 bg-gradient-to-br from-primary/20 to-transparent rounded-full flex items-center justify-center p-4">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  alt="Yumii Character"
                  className="w-full h-auto object-contain z-10 drop-shadow-[0_0_20px_rgba(116,164,124,0.4)]"
                  src="https://lh3.googleusercontent.com/aida/ADBb0ui5tybWJPg9GTyaBN9ukKxsoCk-2Pi05FhBvq1bfT1UsCSYgZOqQcYhJrt4VjqxJ7pFRHd1YIWIdKobIR8S9E0-Zcg5mm6DK4D3F1Q6UzlJzXjbLwsqc1o4llpYXq-diGwCdlSgnogrYrlhJODXUvSRtDePeKUiYbu6nf1J4cNmM6R-Fg-x8VxOdE5UdiyEEwgOzYWx2fOO5s25PlvND81z5sGwYuCg_MyUmbaN9APL0-_Jx8ia0Wa3whrbTapZud-A5NWONsQp"
                />
                <div className="absolute inset-0 border border-primary/20 rounded-full animate-[spin_20s_linear_infinite]"></div>
              </div>
            </div>

            {/* Heading and content centered below */}
            <div className="max-w-4xl mx-auto">
              <h1 className="font-display-xl text-display-xl mb-6">
                Meet Yumii — Your <span className="text-primary-container italic">AI Companion</span>, right in your terminal.
              </h1>
              <p className="font-body-md text-body-md text-on-surface-variant max-w-2xl mx-auto mb-10">
                A real-time voice AI with 6 personalities, live expressions, and a Live2D avatar. Everything runs locally for maximum privacy and performance.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16">
                <button className="bg-primary-container text-on-primary-container px-10 py-4 rounded font-label-caps text-label-caps hover:opacity-90 transition-all">
                  DOWNLOAD YUMII
                </button>
                <button className="border border-outline-variant text-on-surface px-10 py-4 rounded font-label-caps text-label-caps hover:bg-surface-container-low transition-all">
                  DOCUMENTATION
                </button>
              </div>

              {/* News Badge */}
              <div className="inline-block px-3 py-1 border border-primary-container/30 rounded-full mb-12">
                <span className="flex items-center gap-2 font-label-caps text-[10px] text-primary">
                  <span className="w-2 h-2 rounded-full bg-primary-container animate-pulse"></span>
                  V2.0.1 IS NOW LIVE
                </span>
              </div>
            </div>
          </div>

          {/* Terminal Component centered */}
          <div className="max-w-4xl mx-auto border border-outline-variant rounded-lg overflow-hidden terminal-glow">
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
            <div className="bg-background p-6 text-left font-code-md text-code-md min-h-[300px]">
              <div className="flex items-start gap-3 mb-4">
                <span className="text-primary-container">❯</span>
                <span>yumii start --personality &quot;Genki&quot;</span>
              </div>
              <div className="text-on-surface-variant mb-4">Initializing local LLM engine... [OK]</div>
              <div className="text-on-surface-variant mb-4">Loading Live2D assets... [OK]</div>
              <div className="flex items-start gap-3">
                <span className="text-primary-container">Yumii:</span>
                <span className="text-on-surface">
                  &quot;Yahoo! I&apos;m all set up and ready to help! What&apos;s our first big mission today? ✨&quot;
                  <span className="inline-block w-2 h-4 bg-primary-container ml-1 cursor-blink"></span>
                </span>
              </div>
            </div>
          </div>
        </section>

        {/* Features Bento Grid */}
        <section className="max-w-container-max mx-auto px-margin-desktop mb-section-gap">
          <h2 className="font-headline-lg text-headline-lg mb-12 text-center">Built for Precision.</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-gutter">
            <div className="md:col-span-2 bg-surface-container-low border border-outline-variant p-8 rounded hover:border-primary-container transition-colors group">
              <span className="material-symbols-outlined text-primary-container text-4xl mb-6">graphic_eq</span>
              <h3 className="font-headline-lg text-[24px] mb-4">Real-time Voice Chat</h3>
              <p className="font-body-md text-on-surface-variant">
                Experience zero-latency voice interactions with natural prosody. Yumii listens and speaks with human-like rhythm, processed entirely on your machine.
              </p>
            </div>
            <div className="bg-surface-container-low border border-outline-variant p-8 rounded hover:border-primary-container transition-colors group">
              <span className="material-symbols-outlined text-primary-container text-4xl mb-6">visibility</span>
              <h3 className="font-headline-lg text-[24px] mb-4">Live2D Animation</h3>
              <p className="font-body-md text-on-surface-variant">
                Visual expressions that react to your words. A fully integrated Live2D avatar for an immersive companion experience.
              </p>
            </div>
            <div className="bg-surface-container-low border border-outline-variant p-8 rounded hover:border-primary-container transition-colors group">
              <span className="material-symbols-outlined text-primary-container text-4xl mb-6">security</span>
              <h3 className="font-headline-lg text-[24px] mb-4">Privacy-First</h3>
              <p className="font-body-md text-on-surface-variant">
                Your data never leaves your device. No cloud logging, no data mining, no exceptions.
              </p>
            </div>
            <div className="md:col-span-2 bg-surface-container-low border border-outline-variant p-8 rounded hover:border-primary-container transition-colors group">
              <span className="material-symbols-outlined text-primary-container text-4xl mb-6">bolt</span>
              <h3 className="font-headline-lg text-[24px] mb-4">Lightning Fast</h3>
              <p className="font-body-md text-on-surface-variant">
                Optimized C++ and Python core ensuring the highest inference speeds even on consumer-grade hardware. Built with technical excellence at its core.
              </p>
            </div>
          </div>
        </section>

        {/* Personas Section */}
        <section className="bg-surface-container-low py-section-gap mb-section-gap">
          <div className="max-w-container-max mx-auto px-margin-desktop">
            <div className="text-center mb-16">
              <h2 className="font-headline-lg text-headline-lg mb-4">6 Personalities.</h2>
              <p className="font-body-md text-on-surface-variant">Choose an AI that matches your workflow or mood.</p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-gutter">
              {/* Persona Card 1 */}
              <div className="bg-background border border-outline-variant p-6 rounded group overflow-hidden relative">
                <div className="absolute -right-4 -top-4 w-24 h-24 bg-primary-container/5 rounded-full blur-2xl group-hover:bg-primary-container/10 transition-all"></div>
                <span className="font-label-caps text-primary mb-2 block">CARING</span>
                <h4 className="font-headline-lg text-[20px] mb-3">Supportive &amp; Kind</h4>
                <p className="font-body-md text-on-surface-variant text-sm">
                  Always there to offer encouragement and structured help for your daily tasks.
                </p>
              </div>
              {/* Persona Card 2 */}
              <div className="bg-background border border-outline-variant p-6 rounded group overflow-hidden relative">
                <span className="font-label-caps text-primary mb-2 block">TSUNDERE</span>
                <h4 className="font-headline-lg text-[20px] mb-3">Blunt &amp; Effective</h4>
                <p className="font-body-md text-on-surface-variant text-sm">
                  Strict, focused, and won&apos;t hesitate to tell you when your code needs fixing.
                </p>
              </div>
              {/* Persona Card 3 */}
              <div className="bg-background border border-outline-variant p-6 rounded group overflow-hidden relative">
                <span className="font-label-caps text-primary mb-2 block">GENKI</span>
                <h4 className="font-headline-lg text-[20px] mb-3">Energetic &amp; Bright</h4>
                <p className="font-body-md text-on-surface-variant text-sm">
                  High-energy assistant that turns debugging sessions into a collaborative event.
                </p>
              </div>
              {/* Persona Card 4 */}
              <div className="bg-background border border-outline-variant p-6 rounded group overflow-hidden relative">
                <span className="font-label-caps text-primary mb-2 block">KUUDERE</span>
                <h4 className="font-headline-lg text-[20px] mb-3">Cool &amp; Logical</h4>
                <p className="font-body-md text-on-surface-variant text-sm">
                  Calm, collected, and strictly professional. Perfect for high-stress environments.
                </p>
              </div>
              {/* Persona Card 5 */}
              <div className="bg-background border border-outline-variant p-6 rounded group overflow-hidden relative">
                <span className="font-label-caps text-primary mb-2 block">YANDERE</span>
                <h4 className="font-headline-lg text-[20px] mb-3">Devoted &amp; Intense</h4>
                <p className="font-body-md text-on-surface-variant text-sm">
                  Unwavering focus on your progress. She&apos;ll make sure you never miss a deadline.
                </p>
              </div>
              {/* Persona Card 6 */}
              <div className="bg-background border border-outline-variant p-6 rounded group overflow-hidden relative">
                <span className="font-label-caps text-primary mb-2 block">DANDERE</span>
                <h4 className="font-headline-lg text-[20px] mb-3">Quiet &amp; Precise</h4>
                <p className="font-body-md text-on-surface-variant text-sm">
                  Soft-spoken but highly observant. Offers insights exactly when needed.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Quick Installation */}
        <section className="max-w-container-max mx-auto px-margin-desktop mb-section-gap">
          <div className="bg-surface-container-low border border-outline-variant rounded-xl p-10 md:p-16 relative overflow-hidden">
            <div className="relative z-10">
              <h2 className="font-headline-lg text-headline-lg mb-8">Quick Installation.</h2>
              <div className="bg-background border border-outline-variant rounded-lg p-6 font-code-md text-code-md text-on-surface mb-8 max-w-2xl">
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
              <button className="bg-primary-container text-on-primary-container px-8 py-3 rounded font-label-caps text-label-caps hover:opacity-90">
                GET STARTED ON GITHUB
              </button>
            </div>
            {/* Decorative background image */}
            <div className="absolute right-0 bottom-0 opacity-10 pointer-events-none hidden md:block">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                alt="Cyberpunk workspace"
                className="w-[600px] grayscale contrast-125"
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuD1dfyTiWV5IFI7xPk2Qo4RMI0PNC_HUKaACbdxwVAen5qHFxAl0V3PqJp9ILfFeOIhXQchdufh7QxxhbcfOYBUBLylYZ-xXivjZgkL6RhVN-7Nu2KCR0K0OBqHgQo9BYvoeWnWuUTH9ziV-QSFkeUn1MOGvTFDsOAMHX6jC2JAizrq0acDyptJoNuY3Bi2Mdg1Alftg_QsGV0Ahu0Zinrh5zXgeu6T-w2vGtBacip8NXWGOPclf-elLIPIL79g-ZxaD_zLesHrP2M"
              />
            </div>
          </div>
        </section>

        {/* Tech Stack */}
        <section className="max-w-container-max mx-auto px-margin-desktop mb-section-gap text-center">
          <span className="font-label-caps text-primary-container mb-6 block">CORE TECHNOLOGY</span>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-gutter">
            <div className="border border-outline-variant p-4 rounded flex items-center justify-center gap-3 bg-surface-container-low/30 hover:border-primary/50 transition-colors">
              <span className="font-code-md">Python 3.10+</span>
            </div>
            <div className="border border-outline-variant p-4 rounded flex items-center justify-center gap-3 bg-surface-container-low/30 hover:border-primary/50 transition-colors">
              <span className="font-code-md">FastAPI</span>
            </div>
            <div className="border border-outline-variant p-4 rounded flex items-center justify-center gap-3 bg-surface-container-low/30 hover:border-primary/50 transition-colors">
              <span className="font-code-md">LangGraph</span>
            </div>
            <div className="border border-outline-variant p-4 rounded flex items-center justify-center gap-3 bg-surface-container-low/30 hover:border-primary/50 transition-colors">
              <span className="font-code-md">Live2D SDK</span>
            </div>
            <div className="border border-outline-variant p-4 rounded flex items-center justify-center gap-3 bg-surface-container-low/30 hover:border-primary/50 transition-colors">
              <span className="font-code-md">PyTorch</span>
            </div>
            <div className="border border-outline-variant p-4 rounded flex items-center justify-center gap-3 bg-surface-container-low/30 hover:border-primary/50 transition-colors">
              <span className="font-code-md">Whisper V3</span>
            </div>
            <div className="border border-outline-variant p-4 rounded flex items-center justify-center gap-3 bg-surface-container-low/30 hover:border-primary/50 transition-colors">
              <span className="font-code-md">Llama.cpp</span>
            </div>
            <div className="border border-outline-variant p-4 rounded flex items-center justify-center gap-3 bg-surface-container-low/30 hover:border-primary/50 transition-colors">
              <span className="font-code-md">Docker</span>
            </div>
          </div>
        </section>
      </main>

      <footer className="bg-surface-container-low border-t border-outline-variant">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-gutter py-section-gap px-margin-desktop max-w-container-max mx-auto">
          <div>
            <div className="mb-6 flex items-center">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                alt="Yumii AI"
                className="h-10 w-auto"
                src="https://lh3.googleusercontent.com/aida/ADBb0uh8BNZ6753MPpvTDK7zwMb046LMLatXPq2qRlo5VwE5AXOAYW-sc_D3Ca3uHT7xflYCy3h1GaRZwEmMNfX0UR-M5o1sfQIbRaq410CIWH8l_5C7Y6QNuqKiut3rMW2rD-MtRB0BgQlZOysoDIB1Hii3w3kkUaOkrBz9ksYkM9lcTDw5ju-bHd6Qq0osmM5hlWEKdsrj9Nn7E_B0BPIDcvTSyrNTxuFkNxET4Xihwi7FZaTSudBd8ep3qP4AYByPCGTtIEIYt4cvLA"
              />
            </div>
            <p className="font-body-md text-on-secondary-container mb-6">
              Built for the terminal. High-performance local AI companions with personality.
            </p>
            <div className="flex gap-4">
              <Link className="text-on-secondary-container hover:text-primary transition-colors" href="#">
                <span className="material-symbols-outlined">terminal</span>
              </Link>
              <Link className="text-on-secondary-container hover:text-primary transition-colors" href="#">
                <span className="material-symbols-outlined">code</span>
              </Link>
              <Link className="text-on-secondary-container hover:text-primary transition-colors" href="#">
                <span className="material-symbols-outlined">forum</span>
              </Link>
            </div>
          </div>
          <div className="flex flex-col gap-4">
            <span className="font-label-caps text-primary opacity-70">RESOURCES</span>
            <Link className="font-body-md text-on-secondary-container hover:text-on-surface transition-colors" href="#">Documentation</Link>
            <Link className="font-body-md text-on-secondary-container hover:text-on-surface transition-colors" href="#">GitHub Repository</Link>
            <Link className="font-body-md text-on-secondary-container hover:text-on-surface transition-colors" href="#">Contributing Guide</Link>
            <Link className="font-body-md text-on-secondary-container hover:text-on-surface transition-colors" href="#">Report Issues</Link>
          </div>
          <div className="flex flex-col gap-4">
            <span className="font-label-caps text-primary opacity-70">COMMUNITY</span>
            <Link className="font-body-md text-on-secondary-container hover:text-on-surface transition-colors" href="#">Twitter</Link>
            <Link className="font-body-md text-on-secondary-container hover:text-on-surface transition-colors" href="#">Discord Server</Link>
            <Link className="font-body-md text-on-secondary-container hover:text-on-surface transition-colors" href="#">Status Page</Link>
            <p className="mt-4 font-label-caps text-[10px] text-on-secondary-container opacity-50">
              © 2024 YUMII AI. BUILT FOR PRECISION.
            </p>
          </div>
        </div>
      </footer>
    </>
  );
}