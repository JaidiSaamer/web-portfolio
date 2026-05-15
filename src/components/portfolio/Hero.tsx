import { motion } from "motion/react";
import portrait from "@/assets/saamer.jpg";
import { ArrowUpRight, Github, Linkedin, Mail } from "lucide-react";

export function Hero() {
  return (
    <section
      id="top"
      className="relative overflow-hidden bg-radial-glow grain pt-36 pb-24 md:pt-44 md:pb-32"
    >
      <div className="mx-auto max-w-6xl px-6">
        <div className="grid items-center gap-12 md:grid-cols-[1.3fr_1fr]">
          <div>
            <motion.div
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="mb-6 inline-flex items-center gap-2 rounded-full border border-border bg-surface/60 px-3 py-1 text-xs text-muted-foreground backdrop-blur"
            >
              <span className="relative flex h-1.5 w-1.5">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-primary opacity-60" />
                <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-primary" />
              </span>
              Available for frontend & software roles
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.05 }}
              className="font-display text-balance text-[clamp(2.75rem,7vw,5.75rem)] leading-[0.95] tracking-tight"
            >
              Building thoughtful{" "}
              <span className="italic text-primary">interfaces</span>
              <br />
              for the modern web.
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.15 }}
              className="mt-7 max-w-xl text-balance text-base leading-relaxed text-muted-foreground md:text-lg"
            >
              I'm Saamer — a Computer Science student and frontend developer crafting
              fast, accessible web experiences with React, JavaScript and a sharp eye
              for detail.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.25 }}
              className="mt-9 flex flex-wrap items-center gap-3"
            >
              <a
                href="#work"
                className="group inline-flex items-center gap-2 rounded-full bg-primary px-5 py-3 text-sm font-medium text-primary-foreground transition-all hover:glow-primary"
              >
                View selected work
                <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </a>
              <a
                href="#contact"
                className="inline-flex items-center gap-2 rounded-full border border-border px-5 py-3 text-sm font-medium transition-colors hover:bg-surface"
              >
                Get in touch
              </a>
            </motion.div>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.7, delay: 0.4 }}
              className="mt-10 flex items-center gap-5 text-muted-foreground"
            >
              <a aria-label="GitHub" href="https://github.com/JaidiSaamer" target="_blank" rel="noreferrer" className="transition-colors hover:text-foreground"><Github className="h-5 w-5" /></a>
              <a aria-label="LinkedIn" href="https://www.linkedin.com/in/saamer-mohammed-jaidi-690822266/" target="_blank" rel="noreferrer" className="transition-colors hover:text-foreground"><Linkedin className="h-5 w-5" /></a>
              <a aria-label="Email" href="mailto:saamerjaidi@gmail.com" className="transition-colors hover:text-foreground"><Mail className="h-5 w-5" /></a>
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, scale: 0.96 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.9, delay: 0.1 }}
            className="relative mx-auto w-full max-w-sm"
          >
            <div className="absolute -inset-4 rounded-[2rem] bg-gradient-to-br from-primary/30 via-transparent to-transparent blur-2xl" />
            <div className="relative overflow-hidden rounded-[1.75rem] border border-border bg-surface">
              <img
                src={portrait}
                alt="Portrait of Saamer Jaidi"
                className="aspect-[4/5] w-full object-cover"
                loading="eager"
              />
              <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-background/70 via-transparent to-transparent" />
              <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between rounded-xl border border-border bg-background/60 px-3 py-2 text-xs backdrop-blur-md">
                <span className="font-mono text-muted-foreground">/ based in India</span>
                <span className="font-mono text-primary">v.2026</span>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}