import { Section } from "./Section";

const groups = [
  {
    title: "Languages",
    items: ["JavaScript", "Java", "Python"],
  },
  {
    title: "Frontend",
    items: ["React.js", "HTML5", "CSS3", "Tailwind CSS"],
  },
  {
    title: "Tools",
    items: ["Git", "GitHub", "REST APIs", "Chrome DevTools"],
  },
  {
    title: "Core",
    items: ["DOM Manipulation", "Responsive Design", "Debugging", "API Integration"],
  },
];

export function Skills() {
  return (
    <Section
      id="skills"
      eyebrow="Toolbox"
      title={
        <>
          The stack behind the <span className="italic text-primary">work</span>.
        </>
      }
    >
      <div className="grid gap-px overflow-hidden rounded-3xl border border-border bg-border md:grid-cols-2">
        {groups.map((g) => (
          <div key={g.title} className="bg-background p-8 md:p-10">
            <div className="mb-6 flex items-center justify-between">
              <h3 className="font-display text-2xl tracking-tight">{g.title}</h3>
              <span className="font-mono text-xs text-muted-foreground">
                0{groups.indexOf(g) + 1}
              </span>
            </div>
            <ul className="flex flex-wrap gap-2">
              {g.items.map((i) => (
                <li
                  key={i}
                  className="rounded-full border border-border bg-surface px-4 py-2 text-sm transition-colors hover:border-primary hover:text-primary"
                >
                  {i}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </Section>
  );
}
