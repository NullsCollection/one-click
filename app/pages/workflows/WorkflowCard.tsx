"use client";

import { Play, Workflow as WorkflowIcon } from "lucide-react";
import type { Workflow } from "@/lib/workflows";

export default function WorkflowCard({
  workflow,
  onOpen,
}: {
  workflow: Workflow;
  onOpen: () => void;
}) {
  return (
    <button
      onClick={onOpen}
      className="group text-left rounded-2xl border border-gray-200 bg-white overflow-hidden transition-all duration-300 hover:-translate-y-1 hover:shadow-lg hover:border-primary/30 focus:outline-none focus-visible:ring-4 focus-visible:ring-primary/15"
    >
      <div className="relative aspect-video bg-gradient-to-br from-gray-50 to-gray-100 overflow-hidden">
        {workflow.thumbnail_url ? (
          // eslint-disable-next-line @next/next/no-img-element
          <img
            src={workflow.thumbnail_url}
            alt={workflow.title}
            className="w-full h-full object-cover"
          />
        ) : (
          <div className="absolute inset-0 flex items-center justify-center">
            <WorkflowIcon className="w-12 h-12 text-gray-300" strokeWidth={1.5} />
          </div>
        )}
        {workflow.video_url && (
          <div className="absolute inset-0 flex items-center justify-center bg-black/0 group-hover:bg-black/10 transition-colors">
            <span className="w-14 h-14 rounded-full bg-white/95 flex items-center justify-center shadow-md">
              <Play className="w-5 h-5 text-primary fill-primary translate-x-0.5" />
            </span>
          </div>
        )}
      </div>

      <div className="p-6">
        {workflow.metrics.length > 0 && (
          <div className="flex flex-wrap gap-1.5 mb-4">
            {workflow.metrics.map((m) => (
              <span
                key={m.label}
                className="inline-flex items-center rounded-full border border-primary/20 bg-primary/10 px-2.5 py-1 text-[11px] font-medium text-primary font-[family-name:var(--font-poppins)]"
              >
                {m.label}
              </span>
            ))}
          </div>
        )}

        <h3 className="font-[family-name:var(--font-spline-sans)] text-lg font-bold text-secondary mb-2 leading-snug">
          {workflow.title}
        </h3>
        <p className="text-sm text-text font-[family-name:var(--font-poppins)] leading-relaxed">
          {workflow.tagline}
        </p>
      </div>
    </button>
  );
}
