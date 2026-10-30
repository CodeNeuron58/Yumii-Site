import Image from "next/image";
import { LINKS } from "./data/content";

const SECTIONS = [
  { href: "#how", label: "How it works" },
  { href: "#memory", label: "Memory" },
  { href: "#tools", label: "Tools" },
  { href: "#privacy", label: "Privacy" },
  { href: "#faq", label: "FAQ" },
];

export function Nav() {
  return (
    <nav
      aria-label="Main"
      className="sticky top-0 z-20 flex items-center justify-between gap-4 bg-cream/85 px-4 py-3.5 backdrop-blur-md sm:px-[clamp(16px,4vw,48px)]"
    >
      <a href="#top" className="flex items-center gap-2.5 text-forest no-underline hover:text-forest">
        <Image src="/yumii-icon.png" alt="" width={34} height={34} priority className="rounded-[9px]" />
        <span className="font-display text-[22px] font-extrabold tracking-[-0.02em]">Yumii</span>
      </a>
      <div className="flex min-w-0 items-center gap-[clamp(12px,2.4vw,28px)] text-[15px] font-medium">
        <div className="hidden items-center gap-[clamp(12px,2.4vw,28px)] lg:flex">
          {SECTIONS.map((s) => (
            <a key={s.href} href={s.href} className="text-ink no-underline hover:text-leaf">
              {s.label}
            </a>
          ))}
          <a href={LINKS.docs} className="text-ink no-underline hover:text-leaf">
            Docs
          </a>
        </div>
        <a
          href={LINKS.github}
          className="hidden text-ink no-underline hover:text-leaf sm:inline"
          target="_blank"
          rel="noreferrer"
        >
          GitHub
        </a>
        <a
          href="#install"
          className="whitespace-nowrap rounded-full bg-forest px-4 py-2.5 font-semibold text-cream no-underline transition-colors hover:bg-forest-hover hover:text-cream"
        >
          <span className="sm:hidden">Install</span>
          <span className="hidden sm:inline">Install for Windows</span>
        </a>
      </div>
    </nav>
  );
}
