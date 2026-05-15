import { Section } from "./Section";

const stats = [
  { k: "1+", v: "Year industry experience" },
  { k: "10+", v: "Shipped projects" },
  { k: "78.23", v: "Diploma grade" },
];

export function About() {
  return (
    <Section
      id="about"
      eyebrow="About"
      title={
        <>
          A developer who treats <span className="italic text-primary">craft</span>{" "}
          as the product.
        </>
      }
    >
      <div className="grid gap-12 md:grid-cols-[1.2fr_1fr] md:gap-20">
        <div className="space-y-6 text-lg leading-relaxed text-muted-foreground">
          <p>
            I'm a Computer Science undergraduate currently pursuing a B.Tech at
            Matsyodari Shikshan Sanstha's College of Engineering and Technology.
            My focus sits at the intersection of clean engineering and
            considered design.
          </p>
          <p>
            By day I lead web and digital operations at{" "}
            <span className="text-foreground">Mayfoam Pvt. Ltd.</span>, where I
            maintain product platforms, optimise listings across e-commerce
            channels, and build the lightweight tooling that keeps the
            business moving.
          </p>
          <p>
            Outside of work I ship side projects in React, sharpen problem
            solving in Java and Python, and obsess over the small details that
            make interfaces feel inevitable.
          </p>
        </div>
        <div className="grid grid-cols-3 gap-4 self-start md:grid-cols-1">
          {stats.map((s) => (
            <div
              key={s.v}
              className="rounded-2xl border border-border bg-surface p-6"
            >
              <div className="font-display text-4xl text-primary md:text-5xl">
                {s.k}
              </div>
              <div className="mt-2 text-sm text-muted-foreground">{s.v}</div>
            </div>
          ))}
        </div>
      </div>
    </Section>
  );
}
