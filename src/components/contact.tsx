"use client";

import { motion } from "motion/react";
import { profile } from "@/lib/content";
import { Reveal } from "./motion-primitives";

const links = [
  {
    label: "Email",
    value: profile.email,
    href: `mailto:${profile.email}`,
  },
  {
    label: "GitHub",
    value: "github.com",
    href: profile.socials.github,
  },
  {
    label: "LinkedIn",
    value: "linkedin.com",
    href: profile.socials.linkedin,
  },
];

export function Contact() {
  return (
    <section
      id="contact"
      className="relative overflow-hidden border-t border-border"
    >
      <div className="pointer-events-none absolute inset-0 bg-aurora opacity-60" />
      <div className="relative mx-auto max-w-6xl px-6 py-28">
        <Reveal>
          <p className="font-mono text-sm text-accent">// contact</p>
          <h2 className="mt-3 max-w-3xl font-display text-4xl font-bold leading-tight tracking-tight sm:text-6xl">
            Un projet en tête&nbsp;?{" "}
            <span className="text-gradient">Parlons-en.</span>
          </h2>
          <p className="mt-5 max-w-xl text-lg text-muted">
            Disponible pour des missions freelance ou un poste. La meilleure façon
            de me joindre reste l&apos;email — je réponds vite.
          </p>
        </Reveal>

        <Reveal delay={0.1}>
          <div className="mt-10 flex flex-wrap gap-4">
            <a
              href={`mailto:${profile.email}`}
              className="inline-flex items-center gap-2 rounded-full bg-accent px-7 py-3.5 font-semibold text-base transition-transform hover:-translate-y-0.5"
            >
              Envoyer un email
            </a>
            <a
              href={profile.cvUrl}
              className="inline-flex items-center gap-2 rounded-full border border-border bg-surface/40 px-7 py-3.5 font-medium text-foreground backdrop-blur transition-colors hover:border-accent/50 hover:bg-surface"
            >
              Télécharger mon CV
              <svg
                className="h-4 w-4"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
              >
                <path d="M12 3v12m0 0l-4-4m4 4l4-4M5 21h14" />
              </svg>
            </a>
          </div>
        </Reveal>

        <div className="mt-16 grid gap-px overflow-hidden rounded-2xl border border-border bg-border sm:grid-cols-3">
          {links.map((link, i) => (
            <motion.a
              key={link.label}
              href={link.href}
              target={link.href.startsWith("http") ? "_blank" : undefined}
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08, duration: 0.5 }}
              className="group bg-surface/60 p-6 backdrop-blur transition-colors hover:bg-surface-2"
            >
              <div className="font-mono text-xs uppercase tracking-wider text-muted">
                {link.label}
              </div>
              <div className="mt-2 flex items-center gap-2 font-medium text-foreground">
                {link.value}
                <svg
                  className="h-3.5 w-3.5 -translate-x-1 opacity-0 transition-all group-hover:translate-x-0 group-hover:opacity-100"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                >
                  <path d="M7 17L17 7M7 7h10v10" />
                </svg>
              </div>
            </motion.a>
          ))}
        </div>

        <footer className="mt-20 flex flex-col items-center justify-between gap-4 border-t border-border pt-8 text-sm text-muted sm:flex-row">
          <span>
            © {new Date().getFullYear()} {profile.name}
          </span>
          <span className="font-mono">Construit avec Next.js & Motion</span>
        </footer>
      </div>
    </section>
  );
}
