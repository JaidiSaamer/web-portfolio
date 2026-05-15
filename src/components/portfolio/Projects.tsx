import { ArrowUpRight } from "lucide-react";
import { Section } from "./Section";

const projects = [
  {
    n: "01",
    title: "Password Generator",
    blurb:
      "A configurable password tool that generates cryptographically strong strings with live rules, length and character-set controls.",
    tags: ["React", "Hooks", "UX"],
    href: "https://jaidisaamer.github.io/Random_Password_Generator/",
  },
  {
    n: "02",
    title: "Currency Converter",
    blurb:
      "Real-time conversion across 150+ currencies powered by a public REST API, with debounced input and clean state handling.",
    tags: ["React", "REST API", "State"],
    href: "https://github.com/JaidiSaamer/react-currency-converter",
  },
  {
    n: "03",
    title: "ToDo List · Local Storage",
    blurb:
      "A minimal task manager built around React Context for state, persisted to local storage so your day survives a refresh.",
    tags: ["React", "Context API", "Storage"],
    href: "https://github.com/JaidiSaamer/Todo_Context_API_With_Local_Storage",
  },
  {
    n: "04",
    title: "E-Commerce Cart",
    blurb:
      "Vanilla cart implementation showcasing add/remove flows, quantity logic and DOM-driven interaction patterns.",
    tags: ["JavaScript", "DOM", "UI"],
    href: "https://jaidisaamer.github.io/E-commerce_cart/",
  },
];

export function Projects() {
  return (
    <Section
      id="work"
      eyebrow="Selected work"
      title={
        <>
          Projects I've shipped — built to be{" "}
          <span className="italic text-primary">used</span>, not just demoed.
        </>
      }
    >
      <ul className="divide-y divide-border border-y border-border">
        {projects.map((p) => (
          <li key={p.title}>
            <a
              href={p.href}
              target="_blank"
              rel="noreferrer"
              className="group grid grid-cols-12 items-center gap-4 py-7 transition-colors hover:bg-surface/50 md:py-9"
            >
              <span className="col-span-2 font-mono text-xs text-muted-foreground md:col-span-1">
                {p.n}
              </span>
              <div className="col-span-10 md:col-span-5">
                <h3 className="font-display text-2xl tracking-tight transition-colors group-hover:text-primary md:text-3xl">
                  {p.title}
                </h3>
              </div>
              <p className="col-span-12 text-sm text-muted-foreground md:col-span-4 md:text-base">
                {p.blurb}
              </p>
              <div className="col-span-10 flex flex-wrap gap-2 md:col-span-1">
                {p.tags.slice(0, 1).map((t) => (
                  <span
                    key={t}
                    className="rounded-full border border-border px-2.5 py-1 font-mono text-[10px] uppercase tracking-wider text-muted-foreground"
                  >
                    {t}
                  </span>
                ))}
              </div>
              <ArrowUpRight className="col-span-2 ml-auto h-5 w-5 text-muted-foreground transition-all group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-primary md:col-span-1" />
            </a>
          </li>
        ))}
      </ul>
    </Section>
  );
}
