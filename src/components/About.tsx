import { profile } from "../data/profile"

export function About() {
  return (
    <section id="about" className="border-t border-surface-border px-6 py-24">
      <div className="mx-auto max-w-5xl">
        <h2 className="font-display text-3xl font-bold sm:text-4xl">
          About<span className="text-accent">.</span>
        </h2>

        <div className="mt-12 grid gap-10 md:grid-cols-2">
          <div>
            <p className="leading-relaxed text-text-secondary">
              Final-year student in Math & Computing at{" "}
              <span className="text-text-primary">{profile.education.school}</span>{" "}
              (CGPA {profile.education.cgpa}). Most of my time goes into AI engineering —
              RAG, agents, getting models to behave in production.
            </p>
            <p className="mt-4 leading-relaxed text-text-secondary">
              When I'm not coding: chess, table tennis, travelling, or sketching badly.
              Led the Web Dev Club at college for a couple of years.
            </p>
          </div>

          <div className="space-y-6">
            <div className="rounded-xl border border-surface-border bg-surface-raised p-6">
              <p className="text-xs font-medium uppercase tracking-wider text-accent">Education</p>
              <p className="mt-2 font-semibold">{profile.education.degree}</p>
              <p className="text-sm text-text-secondary">{profile.education.school}</p>
              <p className="mt-1 text-sm text-text-secondary">{profile.education.years}</p>
            </div>

            <div className="rounded-xl border border-surface-border bg-surface-raised p-6">
              <p className="text-xs font-medium uppercase tracking-wider text-accent">Highlights</p>
              <ul className="mt-3 space-y-2">
                {profile.highlights.map((item) => (
                  <li key={item} className="flex items-start gap-2 text-sm text-text-secondary">
                    <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-accent" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>

            <div className="flex flex-wrap gap-2">
              {profile.interests.map((interest) => (
                <span
                  key={interest}
                  className="rounded-full border border-surface-border px-3 py-1 text-xs text-text-secondary"
                >
                  {interest}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
