import { GithubLogoIcon } from "@phosphor-icons/react/dist/ssr";
import { Orb } from "./Orb";
import { Reveal } from "./Reveal";

export function Hero() {
  return (
    <section className="relative z-10 mx-auto grid min-h-[calc(100svh-4rem)] max-w-6xl items-center gap-14 px-5 py-12 md:px-8 lg:grid-cols-[1.05fr_0.95fr] lg:gap-8">
      <Reveal>
        <p className="mb-5 font-mono text-[11px] font-medium uppercase tracking-[0.22em] text-mint">
          Your desktop companion
        </p>
        <h1 className="font-display text-4xl font-semibold leading-[1.08] tracking-tight text-ink md:text-5xl lg:text-6xl">
          Someone to talk to,
          <br />
          always <em className="italic text-mint">within reach</em>.
        </h1>
        <p className="mt-6 max-w-[46ch] text-[17px] leading-relaxed text-ink-soft">
          A small glowing presence on your desktop. Talk out loud — she
          helps you do things, and helps you through things. She remembers,
          and nothing ever leaves your machine.
        </p>
        <div className="mt-9 flex flex-wrap items-center gap-4">
          <a href="#quickstart" className="btn-primary">
            Bring her home
          </a>
          <a
            href="https://github.com/CodeNeuron58/Yumii"
            className="btn-ghost"
            target="_blank"
            rel="noreferrer noopener"
          >
            <GithubLogoIcon size={18} aria-hidden="true" />
            Star on GitHub
          </a>
        </div>
        <p className="mt-6 font-mono text-xs text-ink-dim">
          v0.13.0 · experimental preview · Windows today · macOS &amp; Linux
          coming soon
        </p>
      </Reveal>

      <Reveal delay={0.15} className="justify-self-center lg:justify-self-end lg:pr-8">
        <Orb size={270} />
      </Reveal>
    </section>
  );
}
