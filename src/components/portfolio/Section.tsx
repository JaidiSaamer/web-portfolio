import { type ReactNode } from "react";

export function Section({
  id,
  eyebrow,
  title,
  children,
  className = "",
}: {
  id?: string;
  eyebrow?: string;
  title?: ReactNode;
  children: ReactNode;
  className?: string;
}) {
  return (
    <section id={id} className={`relative py-24 md:py-32 ${className}`}>
      <div className="mx-auto max-w-6xl px-6">
        {(eyebrow || title) && (
          <div className="mb-14 flex flex-col gap-4 md:mb-20">
            {eyebrow && (
              <div className="flex items-center gap-3 text-xs font-mono uppercase tracking-[0.2em] text-muted-foreground">
                <span className="h-px w-8 bg-primary" />
                {eyebrow}
              </div>
            )}
            {title && (
              <h2 className="font-display text-balance text-4xl leading-[1.05] tracking-tight md:text-6xl">
                {title}
              </h2>
            )}
          </div>
        )}
        {children}
      </div>
    </section>
  );
}