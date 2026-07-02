import { skills } from "../data/profile"

export function Skills() {
  return (
    <section id="skills" className="border-t border-surface-border px-6 py-24">
      <div className="mx-auto max-w-5xl">
        <h2 className="font-display text-3xl font-bold sm:text-4xl">
          Skills<span className="text-accent">.</span>
        </h2>
        <p className="mt-3 max-w-xl text-text-secondary">
          What I reach for day to day.
        </p>

        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {skills.map((group) => (
            <div
              key={group.category}
              className="rounded-xl border border-surface-border bg-surface-raised p-6"
            >
              <h3 className="text-sm font-semibold uppercase tracking-wider text-accent">
                {group.category}
              </h3>
              <ul className="mt-4 flex flex-wrap gap-2">
                {group.skills.map((skill) => (
                  <li
                    key={skill}
                    className="rounded-full border border-surface-border px-3 py-1 text-xs text-text-secondary transition-colors hover:border-accent/40 hover:text-text-primary"
                  >
                    {skill}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
