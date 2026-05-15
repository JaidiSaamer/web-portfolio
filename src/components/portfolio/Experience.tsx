import { Section } from "./Section";

const experience = [
  {
    role: "Web & Digital Executive",
    org: "Mayfoam Private Limited",
    period: "Sep 2024 — Present",
    points: [
      "Maintain and evolve the company website and core digital systems.",
      "Manage product listings across e-commerce platforms and optimise for visibility.",
      "Lead social presence and run online promotional campaigns end-to-end.",
      "Support day-to-day digital and technical operations across the team.",
    ],
  },
];

const education = [
  {
    role: "B.Tech, Computer Science & Engineering",
    org: "Matsyodari Shikshan Sanstha's College of Engineering and Technology",
    period: "Pursuing · 2nd Year",
  },
  {
    role: "Diploma, Computer Engineering",
    org: "Government Polytechnic, Jalna",
    period: "Sep 2021 — Jul 2024 · Grade 78.23",
  },
];

export function Experience() {
  return (
    <Section
      id="experience"
      eyebrow="Experience & Education"
      title={
        <>
          A timeline of <span className="italic text-primary">building</span> and learning.
        </>
      }
    >
      <div className="grid gap-16 md:grid-cols-2 md:gap-12">
        <div>
          <h3 className="mb-8 font-mono text-xs uppercase tracking-[0.2em] text-muted-foreground">
            Experience
          </h3>
          <div className="space-y-10">
            {experience.map((e) => (
              <article key={e.role} className="relative pl-6">
                <span className="absolute left-0 top-2 h-2 w-2 rounded-full bg-primary" />
                <span className="absolute left-[3px] top-5 h-full w-px bg-border" />
                <div className="flex flex-wrap items-baseline justify-between gap-2">
                  <h4 className="font-display text-2xl tracking-tight">{e.role}</h4>
                  <span className="font-mono text-xs text-muted-foreground">
                    {e.period}
                  </span>
                </div>
                <p className="mt-1 text-primary">{e.org}</p>
                <ul className="mt-4 space-y-2 text-muted-foreground">
                  {e.points.map((p) => (
                    <li key={p} className="leading-relaxed">— {p}</li>
                  ))}
                </ul>
              </article>
            ))}
          </div>
        </div>

        <div>
          <h3 className="mb-8 font-mono text-xs uppercase tracking-[0.2em] text-muted-foreground">
            Education
          </h3>
          <div className="space-y-10">
            {education.map((e) => (
              <article key={e.role} className="relative pl-6">
                <span className="absolute left-0 top-2 h-2 w-2 rounded-full bg-primary" />
                <div className="flex flex-wrap items-baseline justify-between gap-2">
                  <h4 className="font-display text-2xl tracking-tight">{e.role}</h4>
                  <span className="font-mono text-xs text-muted-foreground">
                    {e.period}
                  </span>
                </div>
                <p className="mt-1 text-primary">{e.org}</p>
              </article>
            ))}
          </div>

          <div className="mt-12 rounded-2xl border border-border bg-surface p-6">
            <h4 className="font-display text-xl">Highlights</h4>
            <ul className="mt-3 space-y-2 text-sm text-muted-foreground">
              <li>— Active open-source contributor on GitHub</li>
              <li>— Self-taught modern React patterns and Context-based state</li>
              <li>— Consistent academic record across diploma and B.Tech</li>
            </ul>
          </div>
        </div>
      </div>
    </Section>
  );
}
