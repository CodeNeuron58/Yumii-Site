import Image from "next/image";
import Link from "next/link";

const navLinks = [
  { label: "Documentation", href: "/docs" },
  {
    label: "Changelog",
    href: "https://github.com/CodeNeuron58/Yumii/blob/master/CHANGELOG.md",
  },
  { label: "GitHub", href: "https://github.com/CodeNeuron58/Yumii" },
];

export function Header() {
  return (
    <header className="sticky top-0 z-40 border-b border-line-soft bg-night/75 backdrop-blur-md">
      <nav className="mx-auto flex h-16 max-w-6xl items-center justify-between px-5 md:px-8">
        <Link href="#" className="flex items-center gap-2.5" aria-label="Yumii home">
          <Image
            src="/orb-logo.png"
            alt=""
            width={28}
            height={28}
            priority
            className="drop-shadow-[0_0_10px_rgba(46,230,170,0.45)]"
          />
          <span className="font-display text-lg font-semibold tracking-tight">
            Yumii
          </span>
        </Link>

        <ul className="hidden items-center gap-8 text-[14.5px] text-ink-soft md:flex">
          {navLinks.map((link) => (
            <li key={link.label}>
              <Link
                href={link.href}
                className="transition-colors hover:text-mint"
              >
                {link.label}
              </Link>
            </li>
          ))}
        </ul>

        <Link href="#quickstart" className="btn-primary !h-10 !px-5 text-sm">
          Bring her home
        </Link>
      </nav>
    </header>
  );
}
