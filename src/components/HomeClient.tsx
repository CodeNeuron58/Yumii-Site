"use client";

import { motion } from "framer-motion";

export default function HomeClient() {
  return (
    <>
      {/* Ambient Background Elements */}
      <div className="fixed inset-0 z-[-1] pointer-events-none">
        <div className="absolute top-[-10%] left-[-10%] w-[50%] h-[50%] rounded-full bg-[#7c3aed] opacity-[0.08] blur-[120px]"></div>
        <div className="absolute bottom-[-10%] right-[-10%] w-[60%] h-[60%] rounded-full bg-[#27272a] opacity-[0.06] blur-[140px]"></div>
        <div className="absolute top-[30%] right-[20%] w-[30%] h-[30%] rounded-full bg-[#065f46] opacity-[0.04] blur-[100px]"></div>
      </div>

      <main className="flex-grow pt-[100px]">
        {/* Hero Section */}
        <section className="px-[20px] md:px-[40px] py-[80px] md:py-[120px] max-w-7xl mx-auto text-center relative">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
          >
            {/* Badge */}
            <div className="inline-block glass-panel rounded-full px-[16px] py-[4px] mb-[24px] glow-accent">
              <span className="font-label-caps text-[12px] md:text-[14px] text-[#ff79c6] uppercase tracking-wider">
                Made with Python • FastAPI • Live2D • Groq
              </span>
            </div>

            {/* Main Heading */}
            <h1 className="font-display-lg text-[3rem] md:text-[72px] md:leading-[80px] text-white mb-[16px] font-bold tracking-tight">
              Meet Yumi - <br />
              <span className="gradient-text">Your AI Companion</span>
            </h1>

            {/* Subheading */}
            <p className="font-body text-[1.125rem] text-[#a1a1aa] max-w-2xl mx-auto mb-[32px] leading-relaxed">
              A real-time voice AI with 6 personalities, live expressions, and a Live2D avatar.{" "}
              <span className="text-[#ff79c6] font-medium">Everything runs locally</span> - your data never leaves your machine.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row justify-center gap-[16px] mb-[80px]">
              <a
                href="#install"
                className="btn-primary text-white font-title-md text-[1.125rem] px-[32px] py-[16px] rounded-lg flex items-center justify-center gap-[8px] hover:scale-105 transition-transform"
              >
                <span className="material-symbols-outlined">download</span>
                Download Yumi
              </a>
              <a
                href="https://docs.yumi.ai"
                target="_blank"
                rel="noopener noreferrer"
                className="glass-interactive text-[#fafafa] font-title-md text-[1.125rem] px-[32px] py-[16px] rounded-lg flex items-center justify-center gap-[8px] hover:bg-white/5 transition-colors"
              >
                <span className="material-symbols-outlined">description</span>
                Documentation
              </a>
            </div>

            {/* Demo Video Placeholder */}
            <div className="w-full max-w-4xl mx-auto aspect-video glass-interactive rounded-xl flex items-center justify-center border-t border-l border-[#ff79c6]/20 glow-accent relative overflow-hidden group">
              <div className="absolute inset-0 bg-gradient-to-br from-[#ff79c6]/10 to-[#71717a]/10"></div>
              <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDAiIGhlaWdodD0iNDAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGRlZnM+PHBhdHRlcm4gaWQ9ImdyaWQiIHdpZHRoPSI0MCIgaGVpZ2h0PSI0MCIgcGF0dGVyblVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+PHBhdGggZD0iTTAgNDBWMHBNMCA0MEw0MCAwIiBzdHJva2U9InJnYmEoMjU1LDIxOSwxOTgsMC4xKSIgZmlsbD0ibm9uZSIvPjwvcGF0dGVybj48L2RlZnM+PHJlY3Qgd2lkdGg9IjEwMCUiIGhlaWdodD0iMTAwJSIgZmlsbD0idXJsKCNncmlkKSIvPjwvc3ZnPg==')] opacity-30"></div>
              <div className="z-10 flex flex-col items-center gap-[16px]">
                <div className="w-[80px] h-[80px] rounded-full bg-white/10 backdrop-blur-md flex items-center justify-center border border-white/20 group-hover:scale-110 transition-transform cursor-pointer">
                  <span className="material-symbols-outlined text-[40px] text-[#ff79c6]" style={{ fontVariationSettings: "'FILL' 1" }}>
                    play_arrow
                  </span>
                </div>
                <span className="font-title-md text-[1.125rem] text-[#fafafa] font-medium">DEMO VIDEO PLACEHOLDER</span>
                <span className="text-sm text-[#a1a1aa] opacity-60">Watch Yumi in action (coming soon)</span>
              </div>
            </div>

            {/* Scroll Indicator */}
            <div className="absolute bottom-[-60px] left-1/2 transform -translate-x-1/2 scroll-indicator">
              <span className="material-symbols-outlined text-[#ff79c6] text-[32px]">keyboard_arrow_down</span>
            </div>
          </motion.div>
        </section>

        {/* Features Grid */}
        <section className="px-[20px] md:px-[40px] py-[80px] max-w-7xl mx-auto" id="features">
          <div className="text-center mb-[60px]">
            <h2 className="font-headline-lg text-[2.5rem] font-bold text-white mb-[8px]">Features</h2>
            <p className="text-[#a1a1aa] max-w-xl mx-auto">Everything you need for an immersive AI companion experience</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-[24px]">
            <FeatureCard
              icon="mic"
              color="text-[#ff79c6]"
              bgColor="bg-[#7c3aed]/20"
              title="Real-time Voice Chat"
              description="Converse naturally with low-latency voice responses and interruptible audio using Whisper + ElevenLabs."
            />
            <FeatureCard
              icon="theater_comedy"
              color="text-[#71717a]"
              bgColor="bg-[#27272a]/20"
              title="6 Personalities"
              description="Switch seamlessly between distinct personas - caring, tsundere, genki, kuudere, yandere, or dandere."
            />
            <FeatureCard
              icon="animation"
              color="text-[#34d399]"
              bgColor="bg-[#065f46]/20"
              title="Live2D Animation"
              description="Fully animated avatar with fluid facial expressions and body motions that react to conversation emotion."
            />
            <FeatureCard
              icon="psychology"
              color="text-[#ff79c6]"
              bgColor="bg-[#7c3aed]/20"
              title="AI-Powered"
              description="Powered by Groq Llama 3.3 70B for intelligent, context-aware conversations with emotional intelligence."
            />
            <FeatureCard
              icon="shield_lock"
              color="text-[#71717a]"
              bgColor="bg-[#27272a]/20"
              title="Privacy-First"
              description="Everything runs locally on your machine. Your conversations, voice data, and personal info never leave your device."
            />
            <FeatureCard
              icon="speed"
              color="text-[#34d399]"
              bgColor="bg-[#065f46]/20"
              title="Lightning Fast"
              description="Optimized for low-latency responses with VAD-triggered recording and efficient speech synthesis."
            />
          </div>
        </section>

        {/* Personality Showcase */}
        <section className="px-[20px] md:px-[40px] py-[80px] bg-[#0f0f12]/50 relative" id="personalities">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-[60px]">
              <h2 className="font-headline-lg text-[2.5rem] font-bold text-white mb-[8px]">Meet the Personas</h2>
              <p className="text-[#a1a1aa] max-w-xl mx-auto">Six unique personalities, each with their own voice and behavior</p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-[16px]">
              <PersonaCard emoji="🥰" name="Caring" color="text-[#ff79c6]" borderColor="border-[#ff79c6]/30" desc="Warm, empathetic, and supportive" />
              <PersonaCard emoji="😤" name="Tsundere" color="text-[#ef4444]" borderColor="border-[#ef4444]/30" desc="Playful teasing with a soft heart" />
              <PersonaCard emoji="🎉" name="Genki" color="text-[#34d399]" borderColor="border-[#34d399]/30" desc="Energetic and cheerful" />
              <PersonaCard emoji="🧊" name="Kuudere" color="text-[#71717a]" borderColor="border-[#71717a]/30" desc="Cool, calm, and rational" />
              <PersonaCard emoji="💕" name="Yandere" color="text-[#ff79c6]" borderColor="border-[#ff79c6]/40" desc="Intensely devoted and loving" />
              <PersonaCard emoji="🥺" name="Dandere" color="text-[#34d399]" borderColor="border-[#34d399]/40" desc="Shy and introverted" />
            </div>
          </div>
        </section>

        {/* How It Works */}
        <section className="px-[20px] md:px-[40px] py-[80px] max-w-7xl mx-auto" id="install">
          <div className="text-center mb-[60px]">
            <h2 className="font-headline-lg text-[2.5rem] font-bold text-white mb-[8px]">How It Works</h2>
            <p className="text-[#a1a1aa] max-w-xl mx-auto">Get started in 3 simple steps</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-[24px] mb-[80px]">
            <StepCard number="1" color="text-[#ff79c6]" bgColor="bg-[#7c3aed]/30" title="Download" desc="Clone the repository and install dependencies with pip or uv." />
            <StepCard number="2" color="text-[#71717a]" bgColor="bg-[#27272a]/30" title="Configure" desc="Add your Groq and ElevenLabs API keys through the interactive CLI." />
            <StepCard number="3" color="text-[#34d399]" bgColor="bg-[#065f46]/30" title="Talk" desc="Select a personality and start chatting with your AI companion!" />
          </div>

          {/* Installation Code */}
          <div className="glass-panel p-[32px] rounded-xl">
            <h3 className="font-title-md text-[1.25rem] font-bold text-white mb-[16px] text-center">Quick Installation</h3>
            <div className="code-block rounded-lg p-[16px] overflow-x-auto text-left">
              <code className="text-sm text-[#ff79c6] whitespace-pre">
<span className="text-[#a1a1aa]"># Clone the repository</span>{"\n"}
git clone https://github.com/CodeNeuron58/Yumi.git{"\n"}
cd Yumi{"\n"}
{"\n"}
<span className="text-[#a1a1aa]"># Install dependencies</span>{"\n"}
pip install -r requirements.txt{"\n"}
<span className="text-[#a1a1aa]"># or: uv sync</span>{"\n"}
{"\n"}
<span className="text-[#a1a1aa]"># Run the setup wizard</span>{"\n"}
yumi
              </code>
            </div>
            <p className="text-sm text-[#a1a1aa] mt-[16px] text-center">
              <span className="text-[#ff79c6]">Note:</span> Users bring their own Groq and ElevenLabs API keys. Everything runs locally.
            </p>
          </div>
        </section>

        {/* Tech Stack */}
        <section className="px-[20px] md:px-[40px] py-[80px] bg-[#0f0f12]/30" id="tech">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-[60px]">
              <h2 className="font-headline-lg text-[2.5rem] font-bold text-white mb-[8px]">Tech Stack</h2>
              <p className="text-[#a1a1aa] max-w-xl mx-auto">Built with modern, open-source technologies</p>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-[16px]">
              <TechBadge emoji="🐍" name="Python 3.12+" />
              <TechBadge emoji="⚡" name="FastAPI" />
              <TechBadge emoji="🔄" name="LangGraph" />
              <TechBadge emoji="🧠" name="Groq Llama 3.3" />
              <TechBadge emoji="🎙️" name="faster-whisper" />
              <TechBadge emoji="🔊" name="ElevenLabs TTS" />
              <TechBadge emoji="🎨" name="Live2D Cubism" />
              <TechBadge emoji="✨" name="PixiJS" />
            </div>
          </div>
        </section>

        {/* Documentation & Resources */}
        <section className="px-[20px] md:px-[40px] py-[80px] max-w-7xl mx-auto" id="docs">
          <div className="text-center mb-[60px]">
            <h2 className="font-headline-lg text-[2.5rem] font-bold text-white mb-[8px]">Documentation & Resources</h2>
            <p className="text-[#a1a1aa] max-w-xl mx-auto">Everything you need to get started and contribute</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-[24px]">
            <ResourceCard icon="description" color="text-[#ff79c6]" bgColor="bg-[#7c3aed]/20" title="Documentation" desc="Complete guides, API reference, and troubleshooting tips" link="https://docs.yumi.ai" />
            <ResourceCard icon="code" color="text-[#71717a]" bgColor="bg-[#27272a]/20" title="GitHub Repository" desc="Source code, issues, and pull requests" link="https://github.com/CodeNeuron58/Yumi" />
            <ResourceCard icon="handshake" color="text-[#34d399]" bgColor="bg-[#065f46]/20" title="Contributing Guide" desc="Join the community and help improve Yumi" link="https://github.com/CodeNeuron58/Yumi/blob/main/CONTRIBUTING.md" />
            <ResourceCard icon="bug_report" color="text-[#ff79c6]" bgColor="bg-[#7c3aed]/20" title="Report Issues" desc="Found a bug? Let us know on GitHub Issues" link="https://github.com/CodeNeuron58/Yumi/issues" />
          </div>
        </section>
      </main>
      
      {/* Footer */}
      <footer className="w-full border-t border-white/10 py-[32px] mt-[40px] text-center text-sm text-[#a1a1aa]">
        <p>Yumi AI • Open-source AI Companion</p>
      </footer>
    </>
  );
}

// Subcomponents for cleaner code
function FeatureCard({ icon, color, bgColor, title, description }: { icon: string; color: string; bgColor: string; title: string; description: string }) {
  return (
    <div className="glass-panel p-[32px] rounded-xl hover:-translate-y-2 transition-transform duration-300">
      <div className={`w-12 h-12 rounded-lg ${bgColor} flex items-center justify-center mb-[16px]`}>
        <span className={`material-symbols-outlined ${color} text-[24px]`}>{icon}</span>
      </div>
      <h3 className="font-title-md text-[1.25rem] font-bold text-white mb-[8px]">{title}</h3>
      <p className="text-[#a1a1aa] font-body text-sm leading-relaxed">{description}</p>
    </div>
  );
}

function PersonaCard({ emoji, name, color, borderColor, desc }: { emoji: string; name: string; color: string; borderColor: string; desc: string }) {
  return (
    <div className={`glass-interactive p-[24px] rounded-xl border-t border-l ${borderColor} flex flex-col items-center text-center hover:scale-105 transition-transform`}>
      <div className="text-[56px] mb-[8px]">{emoji}</div>
      <h3 className={`font-title-md text-[1.25rem] font-bold ${color} mb-[4px]`}>{name}</h3>
      <p className="text-[#a1a1aa] text-sm">{desc}</p>
    </div>
  );
}

function StepCard({ number, color, bgColor, title, desc }: { number: string; color: string; bgColor: string; title: string; desc: string }) {
  return (
    <div className="glass-panel p-[32px] rounded-xl text-center">
      <div className={`w-16 h-16 rounded-full ${bgColor} flex items-center justify-center mx-auto mb-[16px]`}>
        <span className={`font-display-lg text-[2rem] font-bold ${color}`}>{number}</span>
      </div>
      <h3 className="font-title-md text-[1.25rem] font-bold text-white mb-[8px]">{title}</h3>
      <p className="text-[#a1a1aa] font-body text-sm leading-relaxed">{desc}</p>
    </div>
  );
}

function TechBadge({ emoji, name }: { emoji: string; name: string }) {
  return (
    <div className="tech-badge rounded-lg p-[16px] text-center hover:scale-105 transition-transform">
      <div className="text-[24px] mb-[4px]">{emoji}</div>
      <div className="text-sm text-white font-medium">{name}</div>
    </div>
  );
}

function ResourceCard({ icon, color, bgColor, title, desc, link }: { icon: string; color: string; bgColor: string; title: string; desc: string; link: string }) {
  return (
    <a href={link} target="_blank" rel="noopener noreferrer" className="glass-panel p-[32px] rounded-xl flex items-center gap-[24px] hover:-translate-y-2 transition-transform">
      <div className={`w-16 h-16 rounded-lg ${bgColor} flex items-center justify-center flex-shrink-0`}>
        <span className={`material-symbols-outlined ${color} text-[32px]`}>{icon}</span>
      </div>
      <div>
        <h3 className="font-title-md text-[1.25rem] font-bold text-white mb-[8px]">{title}</h3>
        <p className="text-[#a1a1aa] font-body text-sm">{desc}</p>
      </div>
    </a>
  );
}