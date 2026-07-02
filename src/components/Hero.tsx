import { profile } from "../data/profile"

export function Hero() {
  return (
    <section className="relative flex min-h-screen items-center px-6 pt-20">
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 right-0 h-[500px] w-[500px] rounded-full bg-accent/5 blur-3xl" />
        <div className="absolute bottom-0 left-0 h-[400px] w-[400px] rounded-full bg-accent/3 blur-3xl" />
      </div>

      <div className="relative mx-auto max-w-5xl">
        <p className="mb-4 text-sm font-medium text-accent">
          B.Tech @ DTU · Delhi
        </p>
        <h1 className="font-display overflow-visible text-5xl font-extrabold tracking-tight sm:text-6xl lg:text-7xl">
          <span className="block leading-none">{profile.name.split(" ")[0]}</span>
          <span className="hero-name-last text-text-secondary">{profile.name.split(" ")[1]}</span>
        </h1>
        <p className="mt-8 max-w-xl text-xl text-text-secondary">{profile.title}</p>
        <p className="mt-4 max-w-2xl text-base leading-relaxed text-text-secondary/80">
          {profile.tagline}
        </p>

        <div className="mt-10 flex flex-wrap gap-4">
          <a
            href="#contact"
            className="rounded-full bg-accent px-7 py-3 text-sm font-semibold text-surface transition-opacity hover:opacity-90"
          >
            Reach out
          </a>
          <a
            href="#projects"
            className="rounded-full border border-surface-border px-7 py-3 text-sm font-semibold text-text-primary transition-colors hover:border-accent/50 hover:text-accent"
          >
            View projects
          </a>
          <a
            href="#resume"
            className="rounded-full border border-surface-border px-7 py-3 text-sm font-semibold text-text-primary transition-colors hover:border-accent/50 hover:text-accent"
          >
            Resume
          </a>
        </div>
      </div>
    </section>
  )
}
