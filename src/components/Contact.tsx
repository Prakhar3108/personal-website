import { useState, type FormEvent } from "react"
import { profile } from "../data/profile"

type FormStatus = "idle" | "sending" | "sent" | "error"

const ACCESS_KEY = import.meta.env.VITE_WEB3FORMS_ACCESS_KEY as string | undefined

export function Contact() {
  const [status, setStatus] = useState<FormStatus>("idle")
  const [errorMessage, setErrorMessage] = useState("")
  const [form, setForm] = useState({ name: "", email: "", message: "" })

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault()
    setErrorMessage("")

    if (!ACCESS_KEY) {
      setStatus("error")
      setErrorMessage("Contact form is not configured yet. Email me directly below.")
      return
    }

    setStatus("sending")

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({
          access_key: ACCESS_KEY,
          name: form.name,
          email: form.email,
          message: form.message,
          subject: `Portfolio message from ${form.name}`,
          from_name: "Portfolio Contact Form",
        }),
      })

      const data = (await response.json()) as { success?: boolean; message?: string }

      if (!response.ok || !data.success) {
        throw new Error(data.message ?? "Something went wrong. Please try again.")
      }

      setStatus("sent")
      setForm({ name: "", email: "", message: "" })
    } catch (err) {
      setStatus("error")
      setErrorMessage(
        err instanceof Error ? err.message : "Failed to send. Please try again or email directly."
      )
    }
  }

  return (
    <section id="contact" className="border-t border-surface-border px-6 py-24">
      <div className="mx-auto max-w-5xl">
        <h2 className="font-display text-3xl font-bold sm:text-4xl">
          Contact<span className="text-accent">.</span>
        </h2>
        <p className="mt-3 max-w-xl text-text-secondary">
          Drop a note here — it lands in my inbox.
        </p>

        <div className="mt-12 grid gap-10 lg:grid-cols-2">
          <form
            onSubmit={handleSubmit}
            className="rounded-xl border border-surface-border bg-surface-raised p-6 sm:p-8 lg:order-2"
          >
            <div className="space-y-5">
              <div>
                <label htmlFor="name" className="mb-1.5 block text-sm text-text-secondary">
                  Name
                </label>
                <input
                  id="name"
                  type="text"
                  required
                  value={form.name}
                  onChange={(e) => setForm({ ...form, name: e.target.value })}
                  className="w-full rounded-lg border border-surface-border bg-surface px-4 py-2.5 text-sm outline-none transition-colors focus:border-accent"
                  placeholder="Your name"
                />
              </div>
              <div>
                <label htmlFor="email" className="mb-1.5 block text-sm text-text-secondary">
                  Email
                </label>
                <input
                  id="email"
                  type="email"
                  required
                  value={form.email}
                  onChange={(e) => setForm({ ...form, email: e.target.value })}
                  className="w-full rounded-lg border border-surface-border bg-surface px-4 py-2.5 text-sm outline-none transition-colors focus:border-accent"
                  placeholder="you@example.com"
                />
              </div>
              <div>
                <label htmlFor="message" className="mb-1.5 block text-sm text-text-secondary">
                  Message
                </label>
                <textarea
                  id="message"
                  required
                  rows={5}
                  value={form.message}
                  onChange={(e) => setForm({ ...form, message: e.target.value })}
                  className="w-full resize-none rounded-lg border border-surface-border bg-surface px-4 py-2.5 text-sm outline-none transition-colors focus:border-accent"
                  placeholder="Tell me about your project or opportunity..."
                />
              </div>
            </div>

            <button
              type="submit"
              disabled={status === "sending"}
              className="mt-6 w-full rounded-full bg-accent py-3 text-sm font-semibold text-surface transition-opacity hover:opacity-90 disabled:opacity-50"
            >
              {status === "sending" ? "Sending..." : "Send message"}
            </button>

            {status === "sent" && (
              <p className="mt-3 text-center text-sm text-accent">
                Message sent! I'll get back to you soon.
              </p>
            )}

            {status === "error" && (
              <p className="mt-3 text-center text-sm text-red-400">{errorMessage}</p>
            )}
          </form>

          <div className="flex flex-col justify-center gap-6 lg:order-1">
            <p className="text-sm leading-relaxed text-text-secondary">
              Prefer reaching out directly? Email works best.
            </p>
            <a
              href={`mailto:${profile.email}`}
              className="group flex items-center gap-4 rounded-xl border border-surface-border bg-surface-raised p-5 transition-colors hover:border-accent/30"
            >
              <span className="flex h-10 w-10 items-center justify-center rounded-lg bg-accent/10 text-accent">
                ✉
              </span>
              <div>
                <p className="text-xs uppercase tracking-wider text-text-secondary">Email</p>
                <p className="font-medium group-hover:text-accent">{profile.email}</p>
              </div>
            </a>
            <a
              href={`tel:${profile.phone.replace(/-/g, "")}`}
              className="group flex items-center gap-4 rounded-xl border border-surface-border bg-surface-raised p-5 transition-colors hover:border-accent/30"
            >
              <span className="flex h-10 w-10 items-center justify-center rounded-lg bg-accent/10 text-accent">
                ☎
              </span>
              <div>
                <p className="text-xs uppercase tracking-wider text-text-secondary">Phone</p>
                <p className="font-medium group-hover:text-accent">{profile.phone}</p>
              </div>
            </a>
            <p className="text-sm text-text-secondary">
              <a href={profile.linkedin} target="_blank" rel="noopener noreferrer" className="text-accent hover:underline">
                LinkedIn
              </a>
              {" · "}
              <a href={profile.github} target="_blank" rel="noopener noreferrer" className="text-accent hover:underline">
                GitHub
              </a>
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
