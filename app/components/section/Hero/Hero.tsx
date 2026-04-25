"use client";

import Image from "next/image";
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
        <div className="grid grid-cols-1 lg:grid-cols-2 items-center">
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

          {/* Right Visual */}
          <div className="relative">
            <Image
              src="/asset/landing-image.png"
              alt="OneClick dashboard posting to multiple social platforms"
              width={1200}
              height={1200}
              priority
              className="relative w-full h-auto"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
