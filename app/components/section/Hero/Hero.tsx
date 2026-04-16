"use client";

import { Button, StatusPill } from "../../ui";
import { ArrowRight } from "lucide-react";

export default function Hero() {
  return (
    <section className="relative pt-32 pb-20 px-4 sm:px-6 lg:px-8 overflow-hidden bg-white dotted-grid">
      {/* Fade the grid out on edges */}
      <div className="absolute inset-0 pointer-events-none dotted-grid-fade" />
      {/* Brand glow */}
      <div className="absolute top-0 right-[-200px] w-[700px] h-[700px] bg-gradient-radial from-primary/8 to-transparent pointer-events-none" />

      <div className="relative max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="relative z-10">
            <StatusPill className="mb-6">
              Launching v1 · Now in early access
            </StatusPill>

            <h1 className="font-[family-name:var(--font-spline-sans)] text-5xl sm:text-6xl lg:text-7xl font-bold leading-[1.1] tracking-tight text-secondary mb-6">
              Post to All Your Social Media in
              <br />
              <span className="bg-gradient-to-r from-primary to-purple-600 bg-clip-text text-transparent">
                One Click.
              </span>
            </h1>

            <p className="font-[family-name:var(--font-poppins)] text-lg sm:text-xl text-text font-light leading-relaxed mb-9 max-w-md">
              A simple platform that automates your entire content posting
              workflow — from upload to publishing across multiple platforms.
            </p>

            <div className="flex flex-wrap items-center gap-4 mb-12">
              <Button
                variant="secondary"
                size="lg"
                className="shadow-lg"
                onClick={() => (window.location.href = "/pages/login")}
              >
                Start Posting Now
                <ArrowRight size={18} />
              </Button>
              <a
                href="#how-it-works"
                className="inline-flex items-center justify-center rounded-xl bg-white border border-secondary/35 border-b-4 px-8 py-4 text-lg font-[family-name:var(--font-poppins)] font-medium text-secondary hover:border-primary/50 hover:text-primary transition-all active:border-b-2 active:translate-y-0.5"
              >
                See how it works
              </a>
            </div>

            <div className="flex items-center gap-3 text-sm text-text">
              <div className="flex -space-x-2">
                <span className="inline-flex items-center justify-center w-8 h-8 rounded-full bg-gradient-to-br from-primary to-purple-600 border-2 border-white text-white text-xs font-semibold">
                  JK
                </span>
                <span className="inline-flex items-center justify-center w-8 h-8 rounded-full bg-gradient-to-br from-cyan-400 to-primary border-2 border-white text-white text-xs font-semibold">
                  ML
                </span>
                <span className="inline-flex items-center justify-center w-8 h-8 rounded-full bg-gradient-to-br from-purple-600 to-cyan-400 border-2 border-white text-white text-xs font-semibold">
                  SR
                </span>
              </div>
              <span className="font-[family-name:var(--font-poppins)]">
                Trusted by{" "}
                <strong className="font-semibold text-secondary">50+</strong>{" "}
                creators already saving hours
              </span>
            </div>
          </div>

          {/* Right Visual - Dashboard Mock */}
          <div className="relative">
            {/* Floating Stat Card */}
            <div className="absolute -top-4 -left-5 z-20 bg-white rounded-xl p-3 shadow-[0_4px_24px_rgba(79,70,229,0.12)] border border-primary/10 animate-float">
              <div className="font-[family-name:var(--font-spline-sans)] text-2xl font-bold text-primary leading-none">
                10s
              </div>
              <div className="text-xs text-text mt-1">avg. post time</div>
            </div>

            {/* Dashboard Mockup */}
            <div className="relative bg-white rounded-2xl shadow-[0_20px_60px_rgba(31,43,72,0.14)] border border-gray-100 overflow-hidden transform perspective-1000 hover:rotate-y-0 transition-transform duration-500 lg:rotate-y-[-3deg] lg:rotate-x-[2deg]">
              {/* Top accent */}
              <div className="h-0.5 bg-gradient-to-r from-primary via-purple-500 to-cyan-400" />
              {/* Header */}
              <div className="flex items-center gap-2 px-4 py-3 bg-gray-50 border-b border-gray-200">
                <span className="w-3 h-3 rounded-full bg-red-400" />
                <span className="w-3 h-3 rounded-full bg-yellow-400" />
                <span className="w-3 h-3 rounded-full bg-green-400" />
                <span className="flex-1 text-center text-xs font-medium text-text font-[family-name:var(--font-poppins)]">
                  OneClick · New Post
                </span>
              </div>

              {/* Body */}
              <div className="p-5">
                <div className="mb-4">
                  <div className="text-[10px] font-medium text-secondary uppercase tracking-wide mb-2">
                    IMAGES
                  </div>
                  <div className="border-2 border-dashed border-gray-300 rounded-lg p-8 text-center bg-gray-50/50 hover:border-primary/50 transition-colors cursor-pointer">
                    <div className="flex flex-col items-center gap-3">
                      <div className="w-10 h-10 rounded-full bg-gray-100 flex items-center justify-center">
                        <svg
                          className="w-5 h-5 text-text"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12"
                          />
                        </svg>
                      </div>
                      <div>
                        <p className="text-sm font-medium text-secondary mb-1">
                          Drag & drop or click to upload
                        </p>
                        <p className="text-xs text-text/60">
                          PNG, JPG, WEBP — multiple files supported
                        </p>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="flex gap-1 bg-gray-50 border border-gray-200 rounded-lg p-1 mb-4">
                  <button className="flex-1 py-1.5 text-xs font-medium text-text rounded-md transition-all">
                    Manual
                  </button>
                  <button className="flex-1 py-1.5 text-xs font-medium text-primary bg-white rounded-md shadow-sm transition-all">
                    AI Mode
                  </button>
                  <button className="flex-1 py-1.5 text-xs font-medium text-text rounded-md transition-all">
                    Hybrid
                  </button>
                </div>

                <div className="relative bg-gray-50 border border-gray-200 rounded-lg p-3 mb-4 min-h-[60px]">
                  <p className="text-xs text-text leading-relaxed">
                    🚀 Excited to share our biggest product launch yet! Built
                    for creators who move fast and want results. Drop a 🔥 if
                    you're ready!
                  </p>
                </div>

                <div className="flex flex-wrap gap-2 mb-4">
                  <div className="flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-medium border border-primary bg-primary/10 text-primary">
                    <svg
                      className="w-3 h-3"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                    >
                      <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                    </svg>
                    Facebook
                  </div>
                  <div className="flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-medium border border-primary bg-primary/10 text-primary">
                    <svg
                      className="w-3 h-3"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                    >
                      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                    </svg>
                    LinkedIn
                  </div>
                </div>

                <button className="w-full bg-secondary text-white py-2.5 rounded-lg text-sm font-semibold flex items-center justify-center gap-2 hover:bg-secondary/90 transition-colors shadow-sm">
                  <svg
                    className="w-3.5 h-3.5"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <polyline points="20 6 9 17 4 12" />
                  </svg>
                  Submit
                </button>
              </div>
            </div>

            {/* Floating Notification */}
            <div className="absolute -bottom-5 -right-5 z-20 bg-white rounded-xl p-3 shadow-[0_4px_24px_rgba(0,0,0,0.10)] border border-gray-100 flex items-center gap-3 animate-float-delayed">
              <div className="w-8 h-8 rounded-lg bg-green-100 flex items-center justify-center flex-shrink-0">
                <svg className="w-4 h-4 text-green-600" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                  <path d="M20 6 9 17l-5-5" />
                </svg>
              </div>
              <div>
                <div className="text-xs font-semibold text-secondary">
                  Posted successfully
                </div>
                <div className="text-[11px] text-text">
                  Facebook · LinkedIn · 2s ago
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
