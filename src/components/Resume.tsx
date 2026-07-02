import { useState } from "react"
import { profile } from "../data/profile"

export function Resume() {
  const [showPreview, setShowPreview] = useState(false)

  return (
    <section id="resume" className="border-t border-surface-border px-6 py-24">
      <div className="mx-auto max-w-5xl">
        <h2 className="font-display text-3xl font-bold sm:text-4xl">
          Resume<span className="text-accent">.</span>
        </h2>
        <p className="mt-3 max-w-xl text-text-secondary">
          Download my resume for a detailed overview of my experience and projects.
        </p>

        <div className="mt-10 overflow-hidden rounded-xl border border-surface-border bg-surface-raised">
          <div className="flex flex-wrap items-center justify-between gap-4 px-6 py-4">
            <div className="flex items-center gap-3">
              <span className="flex h-10 w-10 items-center justify-center rounded-lg bg-accent/10 text-xs font-bold text-accent">
                PDF
              </span>
              <div>
                <p className="text-sm font-medium">Prakhar_Garg_Resume.pdf</p>
                <p className="text-xs text-text-secondary">1 page</p>
              </div>
            </div>
            <div className="flex gap-3">
              <button
                type="button"
                onClick={() => setShowPreview((v) => !v)}
                className="rounded-full border border-surface-border px-5 py-2 text-sm font-semibold text-text-primary transition-colors hover:border-accent/50 hover:text-accent"
              >
                {showPreview ? "Hide preview" : "Preview"}
              </button>
              <a
                href={profile.resumeUrl}
                download
                className="rounded-full bg-accent px-5 py-2 text-sm font-semibold text-surface transition-opacity hover:opacity-90"
              >
                Download PDF
              </a>
            </div>
          </div>

          {showPreview && (
            <iframe
              src={`${profile.resumeUrl}#toolbar=0&navpanes=0&view=FitH`}
              title="Resume preview"
              className="h-[min(75vh,720px)] w-full border-t border-surface-border bg-white"
            />
          )}
        </div>
      </div>
    </section>
  )
}
