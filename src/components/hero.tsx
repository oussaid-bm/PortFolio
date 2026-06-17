"use client";

import { motion, useScroll, useTransform } from "motion/react";
import { useRef } from "react";
import { profile, stats } from "@/lib/content";

const container = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.12, delayChildren: 0.2 } },
};

const lineUp = {
  hidden: { opacity: 0, y: 40, rotateX: -40 },
  visible: {
    opacity: 1,
    y: 0,
    rotateX: 0,
    transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] as const },
  },
};

const fade = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] as const },
  },
};

export function Hero() {
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });
  // Parallax léger du contenu au scroll
  const y = useTransform(scrollYProgress, [0, 1], [0, 120]);
  const opacity = useTransform(scrollYProgress, [0, 0.8], [1, 0]);

  return (
    <section
      id="accueil"
      ref={ref}
      className="relative flex min-h-[100svh] items-center overflow-hidden"
    >
      {/* Fonds décoratifs */}
      <div className="pointer-events-none absolute inset-0 bg-aurora" />
      <div className="pointer-events-none absolute inset-0 bg-grid opacity-[0.4]" />
      <motion.div
        aria-hidden
        className="pointer-events-none absolute -top-32 right-[-10%] h-[36rem] w-[36rem] rounded-full bg-accent/10 blur-[120px]"
        animate={{ scale: [1, 1.15, 1], opacity: [0.5, 0.8, 0.5] }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        aria-hidden
        className="pointer-events-none absolute bottom-[-10%] left-[-5%] h-[30rem] w-[30rem] rounded-full bg-accent-2/10 blur-[120px]"
        animate={{ scale: [1, 1.2, 1], opacity: [0.4, 0.7, 0.4] }}
        transition={{ duration: 10, repeat: Infinity, ease: "easeInOut", delay: 1 }}
      />

      <motion.div
        style={{ y, opacity }}
        className="relative mx-auto w-full max-w-6xl px-6 py-28"
      >
        <motion.div variants={container} initial="hidden" animate="visible">
          {/* Badge disponibilité */}
          {profile.available && (
            <motion.div
              variants={fade}
              className="mb-8 inline-flex items-center gap-2 rounded-full border border-border bg-surface/60 px-4 py-1.5 text-sm text-muted backdrop-blur"
            >
              <span className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75" />
                <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-400" />
              </span>
              Disponible pour de nouveaux projets
            </motion.div>
          )}

          {/* Titre animé ligne par ligne */}
          <h1 className="font-display text-5xl font-bold leading-[1.05] tracking-tight sm:text-7xl lg:text-8xl [perspective:800px]">
            {profile.headline.map((line, i) => (
              <span key={i} className="block overflow-hidden pb-2">
                <motion.span
                  variants={lineUp}
                  className={
                    i === profile.headline.length - 1
                      ? "inline-block text-gradient"
                      : "inline-block"
                  }
                >
                  {line}
                </motion.span>
              </span>
            ))}
          </h1>

          {/* Tagline */}
          <motion.p
            variants={fade}
            className="mt-8 max-w-2xl text-lg leading-relaxed text-muted sm:text-xl"
          >
            {profile.tagline}
          </motion.p>

          {/* CTA */}
          <motion.div variants={fade} className="mt-10 flex flex-wrap gap-4">
            <a
              href="#contact"
              className="group relative inline-flex items-center gap-2 overflow-hidden rounded-full bg-accent px-7 py-3.5 font-medium text-base transition-transform hover:-translate-y-0.5"
            >
              <span className="relative z-10 text-base font-semibold">
                Me contacter
              </span>
              <svg
                className="relative z-10 h-4 w-4 transition-transform group-hover:translate-x-1"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
              >
                <path d="M5 12h14M13 6l6 6-6 6" />
              </svg>
            </a>
            <a
              href="#competences"
              className="inline-flex items-center gap-2 rounded-full border border-border bg-surface/40 px-7 py-3.5 font-medium text-foreground backdrop-blur transition-colors hover:border-accent/50 hover:bg-surface"
            >
              Voir mes compétences
            </a>
          </motion.div>

          {/* Stats */}
          <motion.div
            variants={fade}
            className="mt-16 grid max-w-2xl grid-cols-1 gap-px overflow-hidden rounded-2xl border border-border bg-border sm:grid-cols-3"
          >
            {stats.map((s) => (
              <div key={s.label} className="bg-surface/60 p-5 backdrop-blur">
                <div className="font-display text-2xl font-semibold text-foreground">
                  {s.value}
                </div>
                <div className="mt-1 text-sm text-muted">{s.label}</div>
              </div>
            ))}
          </motion.div>
        </motion.div>
      </motion.div>

      {/* Indicateur de scroll */}
      <motion.div
        className="absolute bottom-8 left-1/2 -translate-x-1/2 text-muted"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.4 }}
      >
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 1.6, repeat: Infinity, ease: "easeInOut" }}
          className="flex h-10 w-6 items-start justify-center rounded-full border border-border p-1.5"
        >
          <span className="h-2 w-1 rounded-full bg-accent" />
        </motion.div>
      </motion.div>
    </section>
  );
}
