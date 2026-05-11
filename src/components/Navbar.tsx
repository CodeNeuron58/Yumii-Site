"use client";

import Link from "next/link";

export function Navbar() {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-outline-variant">
      <div className="flex justify-between items-center h-16 px-margin-desktop max-w-container-max mx-auto">
        <div className="font-headline-lg text-[24px] font-extrabold text-on-surface flex items-center gap-2">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            alt="Yumii AI Logo"
            className="h-10 w-auto object-contain"
            src="https://lh3.googleusercontent.com/aida/ADBb0uh8BNZ6753MPpvTDK7zwMb046LMLatXPq2qRlo5VwE5AXOAYW-sc_D3Ca3uHT7xflYCy3h1GaRZwEmMNfX0UR-M5o1sfQIbRaq410CIWH8l_5C7Y6QNuqKiut3rMW2rD-MtRB0BgQlZOysoDIB1Hii3w3kkUaOkrBz9ksYkM9lcTDw5ju-bHd6Qq0osmM5hlWEKdsrj9Nn7E_B0BPIDcvTSyrNTxuFkNxET4Xihwi7FZaTSudBd8ep3qP4AYByPCGTtIEIYt4cvLA"
          />
        </div>
        <div className="hidden md:flex items-center gap-8">
          <Link
            className="font-body-md text-body-md text-primary border-b-2 border-primary pb-1 transition-colors duration-200"
            href="#"
          >
            Features
          </Link>
          <Link
            className="font-body-md text-body-md text-on-secondary-container hover:text-primary transition-colors duration-200"
            href="#"
          >
            Personalities
          </Link>
          <Link
            className="font-body-md text-body-md text-on-secondary-container hover:text-primary transition-colors duration-200"
            href="#"
          >
            Docs
          </Link>
        </div>
        <button className="bg-primary-container text-on-primary-container px-6 py-2 rounded font-label-caps text-label-caps hover:scale-105 active:scale-95 transition-all">
          DOWNLOAD
        </button>
      </div>
    </nav>
  );
}