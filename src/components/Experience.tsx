import { experience } from "../data/profile"

export function Experience() {
  return (
    <section id="experience" className="border-t border-surface-border px-6 py-24">
      <div className="mx-auto max-w-5xl">
        <h2 className="font-display text-3xl font-bold sm:text-4xl">
          Experience<span className="text-accent">.</span>
        </h2>
        <p className="mt-3 max-w-xl text-text-secondary">
          Bain, IOCL, and PowerGrid — newest first.
        </p>

        <div className="mt-12 space-y-8">
          {experience.map((job) => (
            <article
              key={`${job.company}-${job.period}`}
              className="rounded-xl border border-surface-border bg-surface-raised p-6 transition-colors hover:border-accent/30 sm:p-8"
            >
              <div className="flex flex-col justify-between gap-2 sm:flex-row sm:items-start">
                <div>
                  <h3 className="text-lg font-semibold">{job.role}</h3>
                  <p className="text-accent">{job.company}</p>
                </div>
                <time className="shrink-0 text-sm text-text-secondary">{job.period}</time>
              </div>
              <ul className="mt-5 space-y-2">
                {job.bullets.map((bullet) => (
                  <li
                    key={bullet.slice(0, 40)}
                    className="flex items-start gap-3 text-sm leading-relaxed text-text-secondary"
                  >
                    <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-text-secondary" />
                    {bullet}
                  </li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
