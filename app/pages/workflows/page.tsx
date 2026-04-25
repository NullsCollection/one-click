"use client";

import { useEffect, useState } from "react";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import { StatusPill } from "../../components/ui";
import { listWorkflows, mockWorkflows, type Workflow } from "@/lib/workflows";
import WorkflowCard from "./WorkflowCard";
import WorkflowModal from "./WorkflowModal";

export default function WorkflowsPage() {
  const [workflows, setWorkflows] = useState<Workflow[] | null>(null);
  const [active, setActive] = useState<Workflow | null>(null);

  useEffect(() => {
    listWorkflows()
      .then(setWorkflows)
      .catch(() => setWorkflows(mockWorkflows));
  }, []);

  return (
    <div className="min-h-screen bg-white flex flex-col">
      <Navbar />

      <main className="flex-1">
        <section className="relative overflow-hidden py-24 px-4 sm:px-6 lg:px-8 dotted-grid">
          <div className="absolute inset-0 pointer-events-none bg-gradient-to-b from-white via-transparent to-white" />
          <div className="absolute inset-0 pointer-events-none bg-gradient-to-r from-white via-transparent to-white" />

          <div className="relative z-10 max-w-7xl mx-auto">
            <div className="text-center mb-14">
              <StatusPill
                className="mb-3 uppercase tracking-wider flex w-fit mx-auto"
                showIndicator={false}
              >
                Custom Workflows
              </StatusPill>
              <h1 className="font-[family-name:var(--font-spline-sans)] text-4xl sm:text-5xl font-bold text-secondary mb-4 leading-tight">
                n8n Automation Success
              </h1>
              <p className="max-w-2xl mx-auto text-lg text-text font-[family-name:var(--font-poppins)] font-light">
                Explore how we've architected custom n8n systems that deliver
                immediate ROI and scalable growth for our clients.
              </p>
            </div>

            {workflows === null ? (
              <LoadingGrid />
            ) : workflows.length === 0 ? (
              <EmptyState />
            ) : (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
                {workflows.map((w) => (
                  <WorkflowCard
                    key={w.id}
                    workflow={w}
                    onOpen={() => setActive(w)}
                  />
                ))}
              </div>
            )}
          </div>
        </section>
      </main>

      <Footer />

      {active && (
        <WorkflowModal workflow={active} onClose={() => setActive(null)} />
      )}
    </div>
  );
}

function LoadingGrid() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
      {Array.from({ length: 6 }).map((_, i) => (
        <div
          key={i}
          className="rounded-2xl border border-gray-200 bg-white overflow-hidden animate-pulse"
        >
          <div className="aspect-video bg-gray-100" />
          <div className="p-6 space-y-3">
            <div className="flex gap-1.5">
              <div className="h-5 w-20 bg-gray-100 rounded-full" />
              <div className="h-5 w-16 bg-gray-100 rounded-full" />
            </div>
            <div className="h-4 w-2/3 bg-gray-100 rounded" />
            <div className="h-3 w-full bg-gray-100 rounded" />
          </div>
        </div>
      ))}
    </div>
  );
}

function EmptyState() {
  return (
    <div className="text-center py-16">
      <p className="text-text font-[family-name:var(--font-poppins)]">
        No workflows yet — check back soon.
      </p>
    </div>
  );
}
