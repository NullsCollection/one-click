"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { Mail, Lock, User, ArrowRight, Eye, EyeOff, Check } from "lucide-react";
import Image from "next/image";
import { Button } from "../../components/ui";
import { useAuth } from "../../context/AuthContext";
import { ApiError } from "@/lib/api";

function PasswordStrength({ password }: { password: string }) {
  const checks = [
    { label: "8+ chars", passes: password.length >= 8 },
    { label: "Uppercase", passes: /[A-Z]/.test(password) },
    { label: "Number", passes: /[0-9]/.test(password) },
  ];
  const strength = checks.filter((c) => c.passes).length;
  const barColors = [
    "bg-red-400",
    "bg-orange-400",
    "bg-yellow-400",
    "bg-green-500",
  ];

  if (!password) return null;

  return (
    <div className="mt-2 space-y-2">
      <div className="flex gap-1">
        {[0, 1, 2].map((i) => (
          <div
            key={i}
            className={`h-1 flex-1 rounded-full transition-all duration-300 ${
              i < strength ? barColors[strength] : "bg-gray-200"
            }`}
          />
        ))}
      </div>
      <div className="flex gap-3 flex-wrap">
        {checks.map((check) => (
          <span
            key={check.label}
            className={`flex items-center gap-1 text-xs font-[family-name:var(--font-poppins)] transition-colors ${
              check.passes ? "text-green-600" : "text-gray-400"
            }`}
          >
            <Check className="w-3 h-3" />
            {check.label}
          </span>
        ))}
      </div>
    </div>
  );
}

export default function SignUpPage() {
  const { signup, loginWithGoogle } = useAuth();
  const router = useRouter();

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [agreeToTerms, setAgreeToTerms] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);

  const handleEmailSignUp = async (e: React.FormEvent) => {
    e.preventDefault();
    setError(null);
    setLoading(true);
    try {
      await signup(name, email, password);
      router.push(`/pages/verify-email?email=${encodeURIComponent(email)}`);
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

  const handleGoogleSignUp = () => {
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
              Join 500+ teams automating their workflow
            </div>
            <h2 className="font-[family-name:var(--font-spline-sans)] text-4xl font-bold text-white leading-tight mb-4">
              Automate the
              <br />
              boring stuff
            </h2>
            <p className="text-gray-400 font-[family-name:var(--font-poppins)] text-base leading-relaxed">
              Set up once, run forever. OneClick handles your posting,
              scheduling, and workflow automation — no code required.
            </p>
          </div>

          <div className="space-y-3 mb-8">
            {[
              "Live in under 30 minutes",
              "No coding required",
              "Connects with your existing tools",
              "24/7 automated operation",
            ].map((feature) => (
              <div key={feature} className="flex items-center gap-3">
                <div className="w-5 h-5 rounded-full bg-primary/20 border border-primary/30 flex items-center justify-center shrink-0">
                  <Check className="w-3 h-3 text-primary" />
                </div>
                <span className="text-gray-300 font-[family-name:var(--font-poppins)] text-sm">
                  {feature}
                </span>
              </div>
            ))}
          </div>

          <div className="bg-white/5 border border-white/10 rounded-xl p-5">
            <p className="text-gray-300 font-[family-name:var(--font-poppins)] text-sm leading-relaxed mb-4">
              "Setup took 20 minutes and it&apos;s been running flawlessly for 6
              months."
            </p>
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 rounded-full bg-primary/30 flex items-center justify-center text-white text-xs font-bold font-[family-name:var(--font-poppins)]">
                SL
              </div>
              <div>
                <div className="text-white text-sm font-medium font-[family-name:var(--font-poppins)]">
                  Sarah L.
                </div>
                <div className="text-gray-500 text-xs font-[family-name:var(--font-poppins)]">
                  Marketing Director @ Ampleio
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
      <div className="flex-1 flex flex-col items-center justify-center px-6 py-12 bg-white overflow-y-auto">
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
              Create your account
            </h1>
            <p className="text-text font-[family-name:var(--font-poppins)] text-sm">
              Get started free — no credit card required
            </p>
          </div>

          {/* Google OAuth */}
          <button
            onClick={handleGoogleSignUp}
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
                or sign up with email
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
          <form onSubmit={handleEmailSignUp} className="space-y-4">
            <div>
              <label
                htmlFor="name"
                className="block text-xs font-semibold text-secondary mb-1.5 font-[family-name:var(--font-poppins)] uppercase tracking-wide"
              >
                Full Name
              </label>
              <div className="relative">
                <User className="absolute left-3.5 top-1/2 -translate-y-1/2 h-4 w-4 text-gray-400 pointer-events-none" />
                <input
                  id="name"
                  type="text"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  required
                  placeholder="John Doe"
                  className="w-full pl-10 pr-4 py-2.5 rounded-lg border border-gray-200 focus:border-primary focus:ring-2 focus:ring-primary/15 outline-none transition-all font-[family-name:var(--font-poppins)] text-sm text-secondary placeholder:text-gray-300"
                />
              </div>
            </div>

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
              <label
                htmlFor="password"
                className="block text-xs font-semibold text-secondary mb-1.5 font-[family-name:var(--font-poppins)] uppercase tracking-wide"
              >
                Password
              </label>
              <div className="relative">
                <Lock className="absolute left-3.5 top-1/2 -translate-y-1/2 h-4 w-4 text-gray-400 pointer-events-none" />
                <input
                  id="password"
                  type={showPassword ? "text" : "password"}
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
                  placeholder="Create a strong password"
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
              <PasswordStrength password={password} />
            </div>

            <div className="flex items-start gap-2 pt-1">
              <input
                id="terms"
                type="checkbox"
                checked={agreeToTerms}
                onChange={(e) => setAgreeToTerms(e.target.checked)}
                required
                className="h-3.5 w-3.5 mt-0.5 rounded border-gray-300 accent-primary"
              />
              <label
                htmlFor="terms"
                className="text-xs text-text font-[family-name:var(--font-poppins)]"
              >
                I agree to the{" "}
                <a
                  href="/pages/terms-of-service"
                  className="text-primary hover:text-primary/80 font-medium"
                >
                  Terms of Service
                </a>{" "}
                and{" "}
                <a
                  href="/pages/privacy-policy"
                  className="text-primary hover:text-primary/80 font-medium"
                >
                  Privacy Policy
                </a>
              </label>
            </div>

            <Button
              type="submit"
              variant="secondary"
              size="md"
              className="w-full mt-2"
              disabled={loading}
            >
              {loading ? "Creating account…" : "Create account"}
              {!loading && <ArrowRight size={16} />}
            </Button>
          </form>

          <p className="mt-6 text-center text-sm text-text font-[family-name:var(--font-poppins)]">
            Already have an account?{" "}
            <a
              href="/pages/login"
              className="text-primary hover:text-primary/80 font-semibold"
            >
              Sign in
            </a>
          </p>
        </div>

        <div className="mt-8">
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
