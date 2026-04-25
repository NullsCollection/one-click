"use client";

import { useEffect } from "react";
import { X, Play } from "lucide-react";
import type { Workflow } from "@/lib/workflows";

export default function WorkflowModal({
  workflow,
  onClose,
}: {
  workflow: Workflow;
  onClose: () => void;
}) {
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    document.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [onClose]);

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-label={workflow.title}
      onClick={onClose}
      className="fixed inset-0 z-50 flex items-start sm:items-center justify-center bg-black/50 backdrop-blur-sm overflow-y-auto p-0 sm:p-6"
    >
      <div
        onClick={(e) => e.stopPropagation()}
        className="relative bg-white w-full max-w-4xl rounded-none sm:rounded-2xl shadow-xl my-0 sm:my-12 overflow-hidden"
      >
        <button
          onClick={onClose}
          aria-label="Close"
          className="absolute top-4 right-4 z-10 w-9 h-9 rounded-full bg-white/95 hover:bg-white border border-gray-200 flex items-center justify-center text-text hover:text-secondary transition-colors shadow-sm focus:outline-none focus-visible:ring-4 focus-visible:ring-primary/15"
        >
          <X className="w-4 h-4" />
        </button>

        <div className="relative aspect-video bg-gradient-to-br from-gray-50 to-gray-100">
          {workflow.video_url ? (
            <video
              src={workflow.video_url}
              poster={workflow.thumbnail_url ?? undefined}
              controls
              className="w-full h-full object-cover bg-black"
            />
          ) : workflow.thumbnail_url ? (
            // eslint-disable-next-line @next/next/no-img-element
            <img
              src={workflow.thumbnail_url}
              alt={workflow.title}
              className="w-full h-full object-cover"
            />
          ) : (
            <div className="absolute inset-0 flex items-center justify-center text-gray-300">
              <Play className="w-16 h-16" strokeWidth={1.5} />
            </div>
          )}
        </div>

        <div className="px-6 sm:px-10 py-8">
          <div className="mb-6">
            <h2 className="font-[family-name:var(--font-spline-sans)] text-3xl sm:text-4xl font-bold text-secondary mb-3 leading-tight">
              {workflow.title}
            </h2>
            <p className="text-base sm:text-lg text-text font-[family-name:var(--font-poppins)] font-light">
              {workflow.tagline}
            </p>
          </div>

          {workflow.metrics.length > 0 && (
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 mb-8">
              {workflow.metrics.map((m) => (
                <div
                  key={m.label}
                  className="rounded-xl border border-gray-200 bg-gray-50 px-4 py-3 text-center"
                >
                  <span className="font-[family-name:var(--font-spline-sans)] text-sm font-bold text-secondary">
                    {m.label}
                  </span>
                </div>
              ))}
            </div>
          )}

          <div className="grid grid-cols-1 lg:grid-cols-[200px_1fr] gap-8">
            {workflow.details && (
              <aside className="lg:border-r lg:border-gray-100 lg:pr-6 space-y-4">
                {workflow.details.client && (
                  <DetailItem label="Client" value={workflow.details.client} />
                )}
                {workflow.details.industry && (
                  <DetailItem
                    label="Industry"
                    value={workflow.details.industry}
                  />
                )}
                {workflow.details.useCase && (
                  <DetailItem
                    label="Use Case"
                    value={workflow.details.useCase}
                  />
                )}
                {workflow.details.techStack &&
                  workflow.details.techStack.length > 0 && (
                    <div>
                      <p className="text-[10px] uppercase tracking-wider font-semibold text-text/60 font-[family-name:var(--font-poppins)] mb-2">
                        Tech Stack
                      </p>
                      <div className="flex flex-wrap gap-1.5">
                        {workflow.details.techStack.map((t) => (
                          <span
                            key={t}
                            className="inline-flex items-center rounded-md border border-gray-200 bg-white px-2 py-0.5 text-xs text-secondary font-[family-name:var(--font-poppins)]"
                          >
                            {t}
                          </span>
                        ))}
                      </div>
                    </div>
                  )}
              </aside>
            )}

            <div className="space-y-6">
              {workflow.sections.map((s) => (
                <div key={s.heading}>
                  <h3 className="font-[family-name:var(--font-spline-sans)] text-xl font-bold text-secondary mb-2">
                    {s.heading}
                  </h3>
                  <p className="text-sm text-text font-[family-name:var(--font-poppins)] leading-relaxed whitespace-pre-line">
                    {s.body}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function DetailItem({ label, value }: { label: string; value: string }) {
  return (
    <div>
      <p className="text-[10px] uppercase tracking-wider font-semibold text-text/60 font-[family-name:var(--font-poppins)] mb-1">
        {label}
      </p>
      <p className="text-sm text-secondary font-[family-name:var(--font-poppins)] font-medium">
        {value}
      </p>
    </div>
  );
}
