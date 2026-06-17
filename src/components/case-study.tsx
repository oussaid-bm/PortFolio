"use client";

import { motion } from "motion/react";
import { caseStudy } from "@/lib/content";
import { Reveal, StaggerGroup, StaggerItem } from "./motion-primitives";

export function CaseStudy() {
  const cs = caseStudy;

  return (
    <section
      id="projet"
      className="relative mx-auto max-w-6xl px-6 py-28"
    >
      {/* En-tête */}
      <Reveal>
        <div className="flex flex-wrap items-end justify-between gap-4">
          <div>
            <p className="font-mono text-sm text-accent">// projet phare</p>
            <h2 className="mt-3 font-display text-4xl font-bold tracking-tight sm:text-6xl">
              {cs.title}
            </h2>
          </div>
          <a
            href={cs.repo}
            target="_blank"
            rel="noopener noreferrer"
            className="group inline-flex items-center gap-2 rounded-full border border-border bg-surface/50 px-5 py-2.5 text-sm font-medium backdrop-blur transition-colors hover:border-accent/50 hover:bg-surface"
          >
            <svg className="h-4 w-4" viewBox="0 0 24 24" fill="currentColor">
              <path d="M12 .5a12 12 0 0 0-3.8 23.4c.6.1.8-.3.8-.6v-2c-3.3.7-4-1.6-4-1.6-.6-1.4-1.3-1.8-1.3-1.8-1.1-.7 0-.7 0-.7 1.2 0 1.9 1.2 1.9 1.2 1 1.8 2.8 1.3 3.5 1 0-.8.4-1.3.7-1.6-2.7-.3-5.5-1.3-5.5-5.9 0-1.3.5-2.4 1.2-3.2 0-.3-.5-1.5.2-3.2 0 0 1-.3 3.3 1.2a11.5 11.5 0 0 1 6 0C17 4.6 18 4.9 18 4.9c.7 1.7.2 2.9.1 3.2.8.8 1.2 1.9 1.2 3.2 0 4.6-2.8 5.6-5.5 5.9.4.4.8 1.1.8 2.2v3.3c0 .3.2.7.8.6A12 12 0 0 0 12 .5Z" />
            </svg>
            Voir le code
            <svg
              className="h-3.5 w-3.5 -translate-x-1 opacity-0 transition-all group-hover:translate-x-0 group-hover:opacity-100"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
            >
              <path d="M7 17L17 7M7 7h10v10" />
            </svg>
          </a>
        </div>

        <p className="mt-6 max-w-3xl text-lg leading-relaxed text-muted">
          {cs.subtitle}
        </p>

        {/* Méta */}
        <div className="mt-6 flex flex-wrap items-center gap-x-6 gap-y-2 font-mono text-xs uppercase tracking-wider text-muted">
          <span>{cs.year}</span>
          <span className="h-1 w-1 rounded-full bg-border" />
          <span>{cs.role}</span>
        </div>

        {/* Stack */}
        <div className="mt-6 flex flex-wrap gap-2">
          {cs.stack.map((tech) => (
            <span
              key={tech}
              className="rounded-full border border-border bg-surface-2/60 px-3 py-1 text-xs font-medium text-foreground"
            >
              {tech}
            </span>
          ))}
        </div>
      </Reveal>

      {/* Highlights */}
      <StaggerGroup className="mt-14 grid grid-cols-2 gap-px overflow-hidden rounded-2xl border border-border bg-border lg:grid-cols-4">
        {cs.highlights.map((h) => (
          <StaggerItem key={h.label}>
            <div className="h-full bg-surface/60 p-6 backdrop-blur">
              <div className="font-display text-3xl font-bold text-gradient">
                {h.value}
              </div>
              <div className="mt-2 text-sm text-muted">{h.label}</div>
            </div>
          </StaggerItem>
        ))}
      </StaggerGroup>

      {/* Contexte mis en avant */}
      <Reveal>
        <div className="mt-14 rounded-2xl border border-accent/20 bg-accent/[0.04] p-8">
          <p className="font-mono text-xs uppercase tracking-wider text-accent">
            Le défi
          </p>
          <p className="mt-3 text-lg leading-relaxed text-foreground">
            {cs.context}
          </p>
        </div>
      </Reveal>

      {/* Récit : problème → décisions → impact, en timeline */}
      <div className="relative mt-16">
        <div className="absolute left-0 top-2 hidden h-full w-px bg-border sm:block" />
        <div className="space-y-10">
          {cs.sections.map((s, i) => (
            <motion.div
              key={s.heading}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.6, delay: i * 0.05, ease: [0.22, 1, 0.36, 1] }}
              className="relative sm:pl-10"
            >
              <span className="absolute left-[-7px] top-1.5 hidden h-3.5 w-3.5 rounded-full border-2 border-accent bg-base sm:block" />
              <span className="font-mono text-sm text-accent">
                {String(i + 1).padStart(2, "0")}
              </span>
              <h3 className="mt-1 font-display text-xl font-semibold text-foreground sm:text-2xl">
                {s.heading}
              </h3>
              <p className="mt-3 max-w-2xl leading-relaxed text-muted">
                {s.body}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
