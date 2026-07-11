import Image from "next/image";

export function Footer() {
  return (
    <footer className="relative z-10 border-t border-line-soft">
      <div className="mx-auto flex max-w-6xl flex-wrap items-center justify-between gap-4 px-5 py-7 text-sm text-ink-dim md:px-8">
        <div className="flex items-center gap-2.5">
          <Image src="/orb-logo.png" alt="" width={18} height={18} />
          <span>© 2026 Yumii, MIT licensed</span>
        </div>
        <nav className="flex items-center gap-6">
          <a
            href="https://github.com/CodeNeuron58/Yumii"
            target="_blank"
            rel="noreferrer noopener"
            className="transition-colors hover:text-mint"
          >
            GitHub
          </a>
          <a href="/docs" className="transition-colors hover:text-mint">
            Docs
          </a>
          <a
            href="https://github.com/CodeNeuron58/Yumii/blob/master/CHANGELOG.md"
            target="_blank"
            rel="noreferrer noopener"
            className="transition-colors hover:text-mint"
          >
            Changelog
          </a>
        </nav>
      </div>
    </footer>
  );
}
