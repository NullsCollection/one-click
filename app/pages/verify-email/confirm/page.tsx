"use client";

import { useEffect, useState } from "react";
import { useSearchParams, useRouter } from "next/navigation";
import { Zap, CheckCircle, XCircle, Loader2 } from "lucide-react";
import * as authApi from "@/lib/auth";
import { ApiError } from "@/lib/api";

type Status = "verifying" | "success" | "error";

export default function VerifyEmailConfirmPage() {
  const searchParams = useSearchParams();
  const router = useRouter();

  const [status, setStatus] = useState<Status>("verifying");
  const [errorMsg, setErrorMsg] = useState<string | null>(null);

  useEffect(() => {
    const token = searchParams.get("token");
    if (!token) {
      setErrorMsg("No verification token found in the link.");
      setStatus("error");
      return;
    }

    authApi
      .verifyEmail(token)
      .then(() => {
        setStatus("success");
        // Small delay so user sees the success state before redirect
        setTimeout(() => router.push("/pages/onboarding"), 2000);
      })
      .catch((err) => {
        if (err instanceof ApiError) {
          setErrorMsg("This verification link is invalid or has expired.");
        } else {
          setErrorMsg("Something went wrong. Please try again.");
        }
        setStatus("error");
      });
  }, [searchParams, router]);

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-white px-6 py-12">
      {/* Logo */}
      <a
        href="/"
        className="inline-flex items-center gap-2 text-secondary font-[family-name:var(--font-spline-sans)] text-xl font-bold mb-12"
      >
        <span className="w-7 h-7 rounded-lg bg-primary flex items-center justify-center">
          <Zap className="w-4 h-4 text-white" />
        </span>
        OneClick
      </a>

      <div className="w-full max-w-[420px] text-center">
        {status === "verifying" && (
          <>
            <div className="mx-auto mb-6 w-16 h-16 rounded-2xl bg-primary/10 flex items-center justify-center">
              <Loader2 className="w-8 h-8 text-primary animate-spin" />
            </div>
            <h1 className="font-[family-name:var(--font-spline-sans)] text-3xl font-bold text-secondary mb-3">
              Verifying your email
            </h1>
            <p className="text-text font-[family-name:var(--font-poppins)] text-sm">
              Just a moment…
            </p>
          </>
        )}

        {status === "success" && (
          <>
            <div className="mx-auto mb-6 w-16 h-16 rounded-2xl bg-green-50 flex items-center justify-center">
              <CheckCircle className="w-8 h-8 text-green-500" />
            </div>
            <h1 className="font-[family-name:var(--font-spline-sans)] text-3xl font-bold text-secondary mb-3">
              Email verified!
            </h1>
            <p className="text-text font-[family-name:var(--font-poppins)] text-sm">
              Redirecting you to get started…
            </p>
          </>
        )}

        {status === "error" && (
          <>
            <div className="mx-auto mb-6 w-16 h-16 rounded-2xl bg-red-50 flex items-center justify-center">
              <XCircle className="w-8 h-8 text-red-500" />
            </div>
            <h1 className="font-[family-name:var(--font-spline-sans)] text-3xl font-bold text-secondary mb-3">
              Verification failed
            </h1>
            <p className="text-text font-[family-name:var(--font-poppins)] text-sm mb-8">
              {errorMsg}
            </p>
            <a
              href="/pages/verify-email"
              className="inline-flex items-center gap-2 bg-primary text-white font-semibold font-[family-name:var(--font-poppins)] text-sm px-6 py-3 rounded-xl hover:bg-primary/90 transition-colors"
            >
              Request a new link
            </a>
          </>
        )}
      </div>
    </div>
  );
}
