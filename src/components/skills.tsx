"use client";

import { motion, useInView } from "motion/react";
import { useRef } from "react";
import { skillGroups } from "@/lib/content";
import { Reveal, StaggerGroup, StaggerItem } from "./motion-primitives";

function SkillBar({ name, level }: { name: string; level: number }) {
  const ref = useRef<HTMLLIElement>(null);
  const inView = useInView(ref, { once: true, margin: "-40px" });

  return (
    <li ref={ref} className="group">
      <div className="mb-1.5 flex items-baseline justify-between">
        <span className="text-sm font-medium text-foreground">{name}</span>
        <span className="font-mono text-xs text-muted">{level}%</span>
      </div>
      <div className="h-1.5 overflow-hidden rounded-full bg-surface-2">
        <motion.div
          className="h-full rounded-full"
          style={{
            backgroundImage:
              "linear-gradient(to right, var(--color-accent), var(--color-accent-2))",
          }}
          initial={{ width: 0 }}
          animate={{ width: inView ? `${level}%` : 0 }}
          transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
        />
      </div>
    </li>
  );
}

export function Skills() {
  return (
    <section id="competences" className="relative mx-auto max-w-6xl px-6 py-28">
      <Reveal>
        <p className="font-mono text-sm text-accent">// compétences</p>
        <h2 className="mt-3 font-display text-4xl font-bold tracking-tight sm:text-5xl">
          La stack que je maîtrise
        </h2>
        <p className="mt-4 max-w-2xl text-muted">
          Du développement web au temps réel, jusqu&apos;aux réseaux et aux
          systèmes. Un profil polyvalent, pensé pour des applications qui
          tiennent en conditions réelles.
        </p>
      </Reveal>

      <StaggerGroup className="mt-14 grid gap-6 md:grid-cols-3">
        {skillGroups.map((group) => (
          <StaggerItem key={group.title}>
            <div className="group h-full rounded-2xl border border-border bg-surface/50 p-6 backdrop-blur transition-colors hover:border-accent/40">
              <h3 className="font-display text-lg font-semibold text-foreground">
                {group.title}
              </h3>
              <ul className="mt-6 space-y-4">
                {group.items.map((item) => (
                  <SkillBar key={item.name} {...item} />
                ))}
              </ul>
            </div>
          </StaggerItem>
        ))}
      </StaggerGroup>
    </section>
  );
}
