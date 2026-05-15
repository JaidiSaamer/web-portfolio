const items = [
  "React.js",
  "JavaScript",
  "Tailwind CSS",
  "TypeScript",
  "REST APIs",
  "HTML5",
  "CSS3",
  "Java",
  "Python",
  "Git & GitHub",
  "Responsive Design",
  "DOM Mastery",
];

export function Marquee() {
  const row = [...items, ...items];
  return (
    <div className="relative overflow-hidden border-y border-border bg-surface/40 py-6">
      <div className="marquee flex w-max gap-12 whitespace-nowrap">
        {row.map((t, i) => (
          <span
            key={i}
            className="font-display text-3xl tracking-tight text-muted-foreground md:text-5xl"
          >
            {t}
            <span className="mx-12 text-primary">✦</span>
          </span>
        ))}
      </div>
      <div className="pointer-events-none absolute inset-y-0 left-0 w-32 bg-gradient-to-r from-background to-transparent" />
      <div className="pointer-events-none absolute inset-y-0 right-0 w-32 bg-gradient-to-l from-background to-transparent" />
    </div>
  );
}