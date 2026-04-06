"use client";

import { Suspense, useState, useEffect } from "react";
import { useSearchParams } from "next/navigation";
import { Mail, RefreshCw, CheckCircle } from "lucide-react";
import Image from "next/image";
import * as authApi from "@/lib/auth";
import { ApiError } from "@/lib/api";

function VerifyEmailContent() {
  const searchParams = useSearchParams();
  const email = searchParams.get("email") ?? "";

  const [status, setStatus] = useState<"idle" | "sending" | "sent" | "error">("idle");
  const [errorMsg, setErrorMsg] = useState<string | null>(null);

  // Auto-show "sent" state on first load so it feels instant
  useEffect(() => {
    setStatus("sent");
  }, []);

  const handleResend = async () => {
    if (!email || status === "sending") return;
    setStatus("sending");
    setErrorMsg(null);
    try {
      await authApi.resendVerification(email);
      setStatus("sent");
    } catch (err) {
      if (err instanceof ApiError && err.code === "ALREADY_VERIFIED") {
        window.location.href = "/pages/onboarding";
        return;
      }
      setErrorMsg("Couldn't resend — please try again.");
      setStatus("error");
    }
  };

  return (
    <div className="w-full max-w-[420px] text-center">
      {/* Icon */}
      <div className="mx-auto mb-6 w-16 h-16 rounded-2xl bg-primary/10 flex items-center justify-center">
        <Mail className="w-8 h-8 text-primary" />
      </div>

      <h1 className="font-[family-name:var(--font-spline-sans)] text-3xl font-bold text-secondary mb-3">
        Check your inbox
      </h1>

      <p className="text-text font-[family-name:var(--font-poppins)] text-sm leading-relaxed mb-2">
        We sent a verification link to
      </p>
      {email && (
        <p className="font-[family-name:var(--font-poppins)] font-semibold text-secondary text-sm mb-6">
          {email}
        </p>
      )}
      <p className="text-text font-[family-name:var(--font-poppins)] text-sm leading-relaxed mb-8">
        Click the link in the email to activate your account. The link expires in 24 hours.
      </p>

      {/* Resend section */}
      {status === "sent" && (
        <div className="flex items-center justify-center gap-2 text-green-600 text-sm font-[family-name:var(--font-poppins)] mb-4">
          <CheckCircle className="w-4 h-4" />
          Email sent!
        </div>
      )}

      {errorMsg && (
        <p className="text-red-600 text-sm font-[family-name:var(--font-poppins)] mb-4">{errorMsg}</p>
      )}

      <p className="text-text font-[family-name:var(--font-poppins)] text-sm mb-2">
        Didn&apos;t get it?
      </p>
      <button
        onClick={handleResend}
        disabled={status === "sending"}
        className="inline-flex items-center gap-2 text-primary hover:text-primary/80 font-semibold font-[family-name:var(--font-poppins)] text-sm transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
      >
        <RefreshCw className={`w-4 h-4 ${status === "sending" ? "animate-spin" : ""}`} />
        {status === "sending" ? "Sending…" : "Resend verification email"}
      </button>

      <div className="mt-10 pt-6 border-t border-gray-100">
        <a
          href="/pages/login"
          className="text-xs text-gray-400 hover:text-secondary font-[family-name:var(--font-poppins)] transition-colors"
        >
          Back to sign in
        </a>
      </div>
    </div>
  );
}

export default function VerifyEmailPage() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-white px-6 py-12">
      {/* Logo */}
      <a
        href="/"
        className="inline-flex items-center gap-2 text-secondary font-[family-name:var(--font-spline-sans)] text-xl font-bold mb-12"
      >
        <Image src="/favicon.ico" alt="OneClick" width={28} height={28} />
        OneClick
      </a>

      <Suspense
        fallback={
          <div className="mx-auto w-16 h-16 rounded-2xl bg-primary/10 flex items-center justify-center">
            <Mail className="w-8 h-8 text-primary" />
          </div>
        }
      >
        <VerifyEmailContent />
      </Suspense>
    </div>
  );
}
