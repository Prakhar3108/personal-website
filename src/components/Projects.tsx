import { projects } from "../data/profile"

export function Projects() {
  return (
    <section id="projects" className="border-t border-surface-border px-6 py-24">
      <div className="mx-auto max-w-5xl">
        <h2 className="font-display text-3xl font-bold sm:text-4xl">
          Projects<span className="text-accent">.</span>
        </h2>
        <p className="mt-3 max-w-xl text-text-secondary">
          Side projects with code you can actually click through.
        </p>

        <div className="mt-12 grid gap-6 sm:grid-cols-2">
          {projects.map((project) => (
            <article
              key={project.name}
              className="group flex flex-col rounded-xl border border-surface-border bg-surface-raised p-6 transition-all hover:border-accent/30 hover:shadow-lg hover:shadow-accent/5"
            >
              <div className="flex items-start justify-between gap-4">
                <h3 className="font-semibold leading-snug">{project.name}</h3>
                <span className="shrink-0 text-xs text-text-secondary">{project.period}</span>
              </div>
              <p className="mt-3 flex-1 text-sm leading-relaxed text-text-secondary">
                {project.description}
              </p>
              <div className="mt-5 flex flex-wrap gap-2">
                {project.tags.map((tag) => (
                  <span
                    key={tag}
                    className="rounded-md bg-accent/10 px-2.5 py-1 text-xs font-medium text-accent"
                  >
                    {tag}
                  </span>
                ))}
              </div>
              {(project.link || project.demoLink) && (
                <div className="mt-4 flex flex-wrap gap-4">
                  {project.link && (
                    <a
                      href={project.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1 text-sm text-accent hover:underline"
                    >
                      GitHub →
                    </a>
                  )}
                  {project.demoLink && (
                    <a
                      href={project.demoLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1 text-sm text-accent hover:underline"
                    >
                      Live demo →
                    </a>
                  )}
                </div>
              )}
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
