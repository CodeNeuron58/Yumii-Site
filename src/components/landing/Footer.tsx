import { LINKS } from "./data/content";

export function Footer() {
  return (
    <footer className="mx-auto flex max-w-[1280px] flex-wrap items-center justify-between gap-3 px-5 pb-10 pt-2 text-sm text-muted sm:px-[clamp(20px,4vw,48px)]">
      <span>© 2026 Yumii · MIT licensed · built with NVIDIA Nemotron on Nebius Token Factory</span>
      <nav aria-label="Footer" className="flex items-center gap-6">
        <a href={LINKS.docs} className="text-muted no-underline hover:text-leaf">
          Docs
        </a>
        <a href={LINKS.github} target="_blank" rel="noreferrer" className="text-muted no-underline hover:text-leaf">
          GitHub
        </a>
        <a href={LINKS.changelog} target="_blank" rel="noreferrer" className="text-muted no-underline hover:text-leaf">
          Changelog
        </a>
      </nav>
    </footer>
  );
}
