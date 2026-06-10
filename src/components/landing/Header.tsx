import Image from "next/image";
import Link from "next/link";

const navLinks = [
  { label: "Documentation", href: "/docs" },
  { label: "Guide", href: "#" },
  { label: "Changelog", href: "#" },
  { label: "GitHub", href: "#" },
  { label: "Discord", href: "#" },
];

export function Header() {
  return (
    <nav className="header-wrapper" data-purpose="header">
      <Link href="#" className="nav-logo" aria-label="Yumii home">
        <Image
          src="/yumi-logo.png"
          alt=""
          width={32}
          height={32}
          priority
          className="nav-logo-mark"
        />
        <span>YUMII</span>
      </Link>

      <ul className="nav-links">
        {navLinks.map((link) => (
          <li key={link.label}>
            <Link href={link.href}>{link.label}</Link>
          </li>
        ))}
      </ul>

      <Link href="#" className="nav-cta">
        Get Started →
      </Link>
    </nav>
  );
}
