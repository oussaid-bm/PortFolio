"use client";

import { motion } from "motion/react";
import { education, languages } from "@/lib/content";
import { Reveal } from "./motion-primitives";

export function Parcours() {
  return (
    <section
      id="parcours"
      className="relative border-t border-border bg-surface/30"
    >
      <div className="mx-auto max-w-6xl px-6 py-28">
        <Reveal>
          <p className="font-mono text-sm text-accent">// parcours</p>
          <h2 className="mt-3 font-display text-4xl font-bold tracking-tight sm:text-5xl">
            Formation & langues
          </h2>
        </Reveal>

        <div className="mt-14 grid gap-12 lg:grid-cols-[1.6fr_1fr]">
          {/* Formation — timeline */}
          <div>
            <h3 className="font-display text-lg font-semibold text-foreground">
              Formation
            </h3>
            <div className="relative mt-8">
              <div className="absolute left-0 top-2 h-[calc(100%-1rem)] w-px bg-border" />
              <div className="space-y-10">
                {education.map((item, i) => (
                  <motion.div
                    key={item.title}
                    initial={{ opacity: 0, x: -16 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true, margin: "-60px" }}
                    transition={{
                      duration: 0.6,
                      delay: i * 0.08,
                      ease: [0.22, 1, 0.36, 1],
                    }}
                    className="relative pl-8"
                  >
                    <span className="absolute left-[-6px] top-1.5 h-3 w-3 rounded-full border-2 border-accent bg-base" />
                    <span className="font-mono text-xs text-accent">
                      {item.period}
                    </span>
                    <h4 className="mt-1 font-medium text-foreground">
                      {item.title}
                    </h4>
                    <p className="text-sm text-muted">{item.school}</p>
                    <p className="mt-2 max-w-xl text-sm leading-relaxed text-muted">
                      {item.detail}
                    </p>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>

          {/* Langues */}
          <div>
            <h3 className="font-display text-lg font-semibold text-foreground">
              Langues
            </h3>
            <ul className="mt-8 space-y-5">
              {languages.map((lang, i) => (
                <motion.li
                  key={lang.name}
                  initial={{ opacity: 0, y: 12 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-40px" }}
                  transition={{ duration: 0.5, delay: i * 0.06 }}
                  className="flex items-center justify-between gap-4 rounded-xl border border-border bg-surface/50 px-4 py-3"
                >
                  <div>
                    <span className="font-medium text-foreground">
                      {lang.name}
                    </span>
                    <span className="ml-2 text-sm text-muted">
                      {lang.level}
                    </span>
                  </div>
                  <div className="flex gap-1.5">
                    {Array.from({ length: 5 }).map((_, d) => (
                      <span
                        key={d}
                        className={`h-2 w-2 rounded-full ${
                          d < lang.dots ? "bg-accent" : "bg-surface-2"
                        }`}
                      />
                    ))}
                  </div>
                </motion.li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
