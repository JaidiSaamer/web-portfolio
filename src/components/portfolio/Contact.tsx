import { ArrowUpRight, Github, Linkedin, Mail } from "lucide-react";

export function Contact() {
  return (
    <section id="contact" className="relative overflow-hidden py-24 md:py-40">
      <div className="absolute inset-0 bg-radial-glow" />
      <div className="relative mx-auto max-w-5xl px-6 text-center">
        <p className="mb-6 font-mono text-xs uppercase tracking-[0.2em] text-muted-foreground">
          ✦ Let's build something
        </p>
        <h2 className="font-display text-balance text-5xl leading-[1] tracking-tight md:text-8xl">
          Have an idea?
          <br />
          <span className="italic text-primary">Let's make it real.</span>
        </h2>
        <p className="mx-auto mt-8 max-w-xl text-balance text-muted-foreground md:text-lg">
          Open to frontend, full-stack and software internship opportunities.
          Reply usually within 24 hours.
        </p>

        <a
          href="mailto:saamerjaidi@gmail.com"
          className="group mt-10 inline-flex items-center gap-3 rounded-full bg-primary px-7 py-4 text-base font-medium text-primary-foreground transition-all hover:glow-primary"
        >
          saamerjaidi@gmail.com
          <ArrowUpRight className="h-5 w-5 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
        </a>

        <div className="mt-14 flex items-center justify-center gap-6 text-muted-foreground">
          <a aria-label="GitHub" href="https://github.com/JaidiSaamer" target="_blank" rel="noreferrer" className="flex items-center gap-2 transition-colors hover:text-foreground">
            <Github className="h-4 w-4" /> GitHub
          </a>
          <span className="h-1 w-1 rounded-full bg-border" />
          <a aria-label="LinkedIn" href="https://www.linkedin.com/in/saamer-mohammed-jaidi-690822266/" target="_blank" rel="noreferrer" className="flex items-center gap-2 transition-colors hover:text-foreground">
            <Linkedin className="h-4 w-4" /> LinkedIn
          </a>
          <span className="h-1 w-1 rounded-full bg-border" />
          <a href="mailto:saamerjaidi@gmail.com" className="flex items-center gap-2 transition-colors hover:text-foreground">
            <Mail className="h-4 w-4" /> Email
          </a>
        </div>
      </div>

      <footer className="relative mt-24 border-t border-border">
        <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-3 px-6 py-8 text-xs text-muted-foreground md:flex-row">
          <p>{"\n"}</p>
          <p className="font-mono">Designed & built by Saamer Jaidi</p>
        </div>
      </footer>
    </section>
  );
}
