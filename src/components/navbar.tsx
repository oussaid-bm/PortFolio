"use client";

import Image from "next/image";
import { motion, useMotionValueEvent, useScroll } from "motion/react";
import { useState } from "react";
import { navLinks, profile } from "@/lib/content";

export function Navbar() {
  const { scrollY } = useScroll();
  const [scrolled, setScrolled] = useState(false);

  useMotionValueEvent(scrollY, "change", (v) => setScrolled(v > 24));

  return (
    <motion.header
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
      className="fixed inset-x-0 top-0 z-50 flex justify-center px-4 pt-4"
    >
      <nav
        className={`flex w-full max-w-6xl items-center justify-between rounded-full border px-5 py-3 transition-colors duration-300 ${
          scrolled
            ? "border-border bg-surface/70 backdrop-blur-xl"
            : "border-transparent bg-transparent"
        }`}
      >
        <a
          href="#accueil"
          aria-label={`${profile.name} — accueil`}
          className="flex items-center transition-opacity hover:opacity-80"
        >
          <Image
            src={profile.logoUrl}
            alt={profile.name}
            width={3840}
            height={2160}
            priority
            className="h-9 w-auto object-contain"
          />
        </a>

        <div className="hidden items-center gap-1 sm:flex">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="rounded-full px-4 py-2 text-sm text-muted transition-colors hover:bg-surface-2 hover:text-foreground"
            >
              {link.label}
            </a>
          ))}
        </div>

        <a
          href={profile.cvUrl}
          className="rounded-full bg-foreground px-4 py-2 text-sm font-medium text-base transition-transform hover:-translate-y-0.5"
        >
          CV
        </a>
      </nav>
    </motion.header>
  );
}
