"use client";

import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import { Mail, Lock, ArrowRight, Eye, EyeOff } from "lucide-react";
import Image from "next/image";
import { Button } from "../../components/ui";
import { useAuth } from "@/app/context/AuthContext";
import { ApiError } from "@/lib/api";

const OAUTH_ERRORS: Record<string, string> = {
  invalid_state: "Login session expired. Please try again.",
  no_code: "Google login was cancelled.",
  auth_failed: "Google authentication failed. Please try again.",
  token_failed: "Failed to complete login. Please try again.",
};

export default function LoginPage() {
  const { login, loginWithGoogle } = useAuth();
  const router = useRouter();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [rememberMe, setRememberMe] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);

  // Show error from Google OAuth redirect (e.g. ?error=auth_failed)
  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    const oauthError = params.get("error");
    if (oauthError) {
      setError(
        OAUTH_ERRORS[oauthError] ?? "Google login failed. Please try again.",
      );
    }
  }, []);

  const handleEmailLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    setError(null);
    setLoading(true);
    try {
      await login(email, password, rememberMe);
      const params = new URLSearchParams(window.location.search);
      const redirect = params.get("redirect") ?? "/pages/onboarding";
      router.push(redirect);
    } catch (err) {
      if (err instanceof ApiError) {
        setError(err.message);
      } else {
        setError("Something went wrong. Please try again.");
      }
    } finally {
      setLoading(false);
    }
  };

  const handleGoogleLogin = () => {
    loginWithGoogle();
  };

  return (
    <div className="min-h-screen flex">
      {/* Left panel — brand */}
      <div
        className="hidden lg:flex lg:w-[45%] flex-col justify-between p-12 relative overflow-hidden"
        style={{ backgroundColor: "#0d1526" }}
      >
        <div className="absolute inset-0">
          {/* n8n-style dot grid */}
          <div
            className="absolute inset-0"
            style={{
              backgroundImage:
                "radial-gradient(circle, #2a3a55 1px, transparent 1px)",
              backgroundSize: "28px 28px",
              opacity: 0.55,
            }}
          />
          {/* Subtle blue glow top-right */}
          <div
            className="absolute top-0 right-0 w-[480px] h-[480px] rounded-full blur-3xl"
            style={{
              background: "radial-gradient(circle, #1e3a6e44, transparent 70%)",
            }}
          />
          {/* Faint indigo glow bottom-left */}
          <div
            className="absolute bottom-0 left-0 w-72 h-72 rounded-full blur-2xl"
            style={{
              background: "radial-gradient(circle, #4f46e520, transparent 70%)",
            }}
          />
        </div>

        <a
          href="/"
          className="relative z-10 inline-flex items-center gap-2 text-white font-[family-name:var(--font-spline-sans)] text-xl font-bold"
        >
          <span className="w-7 h-7 rounded-lg bg-primary flex items-center justify-center">
            <Image src="/favicon.ico" alt="OneClick" width={28} height={28} />
          </span>
          OneClick
        </a>

        <div className="relative z-10">
          <div className="mb-8">
            <div
              className="inline-flex items-center gap-2 rounded-full bg-primary/20 border border-primary/30 px-3 py-1.5 text-xs font-medium mb-6"
              style={{ color: "#a5b4fc" }}
            >
              <span className="w-1.5 h-1.5 rounded-full bg-primary animate-pulse" />
              Automation that never sleeps
            </div>
            <h2 className="font-[family-name:var(--font-spline-sans)] text-4xl font-bold text-white leading-tight mb-4">
              Stop doing
              <br />
              things manually
            </h2>
            <p className="text-gray-400 font-[family-name:var(--font-poppins)] text-base leading-relaxed">
              OneClick connects your tools and handles the repetitive work — so
              you can focus on what actually matters.
            </p>
          </div>

          <div className="grid grid-cols-3 gap-3 mb-8">
            {[
              { value: "80%", label: "Less manual work" },
              { value: "5+", label: "Tools unified" },
              { value: "24/7", label: "Always running" },
            ].map((stat) => (
              <div
                key={stat.label}
                className="bg-white/5 border border-white/10 rounded-xl p-4"
              >
                <div className="font-[family-name:var(--font-spline-sans)] text-2xl font-bold text-white mb-0.5">
                  {stat.value}
                </div>
                <div className="font-[family-name:var(--font-poppins)] text-xs text-gray-400">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>

          <div className="bg-white/5 border border-white/10 rounded-xl p-5">
            <p className="text-gray-300 font-[family-name:var(--font-poppins)] text-sm leading-relaxed mb-4">
              "We went from 3 hours of daily manual posting to a fully automated
              workflow in a single afternoon."
            </p>
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 rounded-full bg-primary/30 flex items-center justify-center text-white text-xs font-bold font-[family-name:var(--font-poppins)]">
                MR
              </div>
              <div>
                <div className="text-white text-sm font-medium font-[family-name:var(--font-poppins)]">
                  Marcus R.
                </div>
                <div className="text-gray-500 text-xs font-[family-name:var(--font-poppins)]">
                  Content Lead @ Growthly
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="relative z-10 text-xs text-gray-600 font-[family-name:var(--font-poppins)]">
          © 2025 OneClick. All rights reserved.
        </div>
      </div>

      {/* Right panel — form */}
      <div className="flex-1 flex flex-col items-center justify-center px-6 py-12 bg-white">
        {/* Mobile logo */}
        <div className="lg:hidden mb-8">
          <a
            href="/"
            className="inline-flex items-center gap-2 text-secondary font-[family-name:var(--font-spline-sans)] text-xl font-bold"
          >
            <Image src="/favicon.ico" alt="OneClick" width={28} height={28} />
            OneClick
          </a>
        </div>

        <div className="w-full max-w-[400px]">
          <div className="mb-8">
            <h1 className="font-[family-name:var(--font-spline-sans)] text-3xl font-bold text-secondary mb-2">
              Welcome back
            </h1>
            <p className="text-text font-[family-name:var(--font-poppins)] text-sm">
              Sign in to your account to continue
            </p>
          </div>

          {/* Google OAuth */}
          <button
            onClick={handleGoogleLogin}
            className="w-full flex items-center justify-center gap-3 px-5 py-3 rounded-xl border border-gray-200 hover:border-gray-300 hover:bg-gray-50 transition-all duration-200 mb-5 font-[family-name:var(--font-poppins)] font-medium text-secondary text-sm"
          >
            <svg className="w-5 h-5 shrink-0" viewBox="0 0 24 24">
              <path
                fill="#4285F4"
                d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
              />
              <path
                fill="#34A853"
                d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
              />
              <path
                fill="#FBBC05"
                d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"
              />
              <path
                fill="#EA4335"
                d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"
              />
            </svg>
            Continue with Google
          </button>

          {/* Divider */}
          <div className="relative mb-5">
            <div className="absolute inset-0 flex items-center">
              <div className="w-full border-t border-gray-100" />
            </div>
            <div className="relative flex justify-center">
              <span className="px-3 bg-white text-xs text-text font-[family-name:var(--font-poppins)]">
                or continue with email
              </span>
            </div>
          </div>

          {/* Error banner */}
          {error && (
            <div className="mb-4 px-4 py-3 rounded-lg bg-red-50 border border-red-200 text-sm text-red-700 font-[family-name:var(--font-poppins)]">
              {error}
            </div>
          )}

          {/* Form */}
          <form onSubmit={handleEmailLogin} className="space-y-4">
            <div>
              <label
                htmlFor="email"
                className="block text-xs font-semibold text-secondary mb-1.5 font-[family-name:var(--font-poppins)] uppercase tracking-wide"
              >
                Email
              </label>
              <div className="relative">
                <Mail className="absolute left-3.5 top-1/2 -translate-y-1/2 h-4 w-4 text-gray-400 pointer-events-none" />
                <input
                  id="email"
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                  placeholder="you@example.com"
                  className="w-full pl-10 pr-4 py-2.5 rounded-lg border border-gray-200 focus:border-primary focus:ring-2 focus:ring-primary/15 outline-none transition-all font-[family-name:var(--font-poppins)] text-sm text-secondary placeholder:text-gray-300"
                />
              </div>
            </div>

            <div>
              <div className="flex items-center justify-between mb-1.5">
                <label
                  htmlFor="password"
                  className="block text-xs font-semibold text-secondary font-[family-name:var(--font-poppins)] uppercase tracking-wide"
                >
                  Password
                </label>
                <a
                  href="/forgot-password"
                  className="text-xs text-primary hover:text-primary/80 font-[family-name:var(--font-poppins)]"
                >
                  Forgot?
                </a>
              </div>
              <div className="relative">
                <Lock className="absolute left-3.5 top-1/2 -translate-y-1/2 h-4 w-4 text-gray-400 pointer-events-none" />
                <input
                  id="password"
                  type={showPassword ? "text" : "password"}
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
                  placeholder="Enter your password"
                  className="w-full pl-10 pr-10 py-2.5 rounded-lg border border-gray-200 focus:border-primary focus:ring-2 focus:ring-primary/15 outline-none transition-all font-[family-name:var(--font-poppins)] text-sm text-secondary placeholder:text-gray-300"
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-3.5 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600 transition-colors"
                >
                  {showPassword ? (
                    <EyeOff className="h-4 w-4" />
                  ) : (
                    <Eye className="h-4 w-4" />
                  )}
                </button>
              </div>
            </div>

            <div className="flex items-center gap-2">
              <input
                id="remember"
                type="checkbox"
                checked={rememberMe}
                onChange={(e) => setRememberMe(e.target.checked)}
                className="h-3.5 w-3.5 rounded border-gray-300 accent-primary"
              />
              <label
                htmlFor="remember"
                className="text-xs text-text font-[family-name:var(--font-poppins)]"
              >
                Remember me for 30 days
              </label>
            </div>

            <Button
              type="submit"
              variant="secondary"
              size="md"
              className="w-full mt-2"
              disabled={loading}
            >
              {loading ? "Signing in…" : "Sign in"}
              {!loading && <ArrowRight size={16} />}
            </Button>
          </form>

          <p className="mt-6 text-center text-sm text-text font-[family-name:var(--font-poppins)]">
            Don&apos;t have an account?{" "}
            <a
              href="/pages/signup"
              className="text-primary hover:text-primary/80 font-semibold"
            >
              Sign up free
            </a>
          </p>
        </div>

        <div className="mt-12">
          <a
            href="/"
            className="text-xs text-gray-400 hover:text-secondary font-[family-name:var(--font-poppins)] transition-colors"
          >
            ← Back to home
          </a>
        </div>
      </div>
    </div>
  );
}
