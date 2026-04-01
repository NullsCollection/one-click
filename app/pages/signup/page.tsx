"use client";

import { useState } from "react";
import { Mail, Lock, User, ArrowRight } from "lucide-react";
import { Button } from "../../components/ui";

export default function SignUpPage() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [agreeToTerms, setAgreeToTerms] = useState(false);

  const handleEmailSignUp = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle email/password signup
    console.log("Email signup:", { name, email, password, agreeToTerms });
    // Redirect to onboarding after successful signup
    window.location.href = "/pages/onboarding";
  };

  const handleGoogleSignUp = () => {
    // Handle Google OAuth
    console.log("Google OAuth signup");
    // Redirect to onboarding after successful signup
    window.location.href = "/pages/onboarding";
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-white to-primary/5 flex items-center justify-center px-4 py-12">
      {/* Background decoration */}
      <div className="absolute top-20 right-[-100px] w-[500px] h-[500px] bg-gradient-radial from-primary/10 to-transparent pointer-events-none" />
      <div className="absolute bottom-[-100px] left-[-100px] w-[400px] h-[400px] bg-gradient-radial from-purple-400/10 to-transparent pointer-events-none" />

      <div className="relative w-full max-w-md">
        {/* Logo/Brand */}
        <div className="text-center mb-8">
          <a
            href="/"
            className="inline-flex items-center gap-2 text-secondary font-[family-name:var(--font-spline-sans)] text-2xl font-bold mb-3"
          >
            <span className="w-2.5 h-2.5 rounded-full bg-primary" />
            OneClick
          </a>
          <h1 className="font-[family-name:var(--font-spline-sans)] text-3xl font-bold text-secondary mb-2">
            Create your account
          </h1>
          <p className="text-text font-[family-name:var(--font-poppins)] text-sm">
            Start posting everywhere in one click
          </p>
        </div>

        {/* Sign Up Card */}
        <div className="bg-white rounded-2xl border border-gray-200 shadow-xl p-8">
          {/* Google OAuth Button */}
          <button
            onClick={handleGoogleSignUp}
            className="w-full flex items-center justify-center gap-3 px-6 py-3.5 rounded-xl border-2 border-gray-200 hover:border-primary/30 hover:bg-gray-50 transition-all duration-200 mb-6 group"
          >
            <svg className="w-5 h-5" viewBox="0 0 24 24">
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
            <span className="font-[family-name:var(--font-poppins)] font-medium text-secondary">
              Continue with Google
            </span>
          </button>

          {/* Divider */}
          <div className="relative mb-6">
            <div className="absolute inset-0 flex items-center">
              <div className="w-full border-t border-gray-200" />
            </div>
            <div className="relative flex justify-center text-sm">
              <span className="px-4 bg-white text-text font-[family-name:var(--font-poppins)]">
                Or sign up with email
              </span>
            </div>
          </div>

          {/* Email/Password Form */}
          <form onSubmit={handleEmailSignUp} className="space-y-4">
            {/* Name Input */}
            <div>
              <label
                htmlFor="name"
                className="block text-sm font-medium text-secondary mb-2 font-[family-name:var(--font-poppins)]"
              >
                Full name
              </label>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none">
                  <User className="h-5 w-5 text-text/40" />
                </div>
                <input
                  id="name"
                  type="text"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  required
                  placeholder="John Doe"
                  className="w-full pl-11 pr-4 py-3 rounded-xl border border-gray-200 focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all font-[family-name:var(--font-poppins)] text-sm"
                />
              </div>
            </div>

            {/* Email Input */}
            <div>
              <label
                htmlFor="email"
                className="block text-sm font-medium text-secondary mb-2 font-[family-name:var(--font-poppins)]"
              >
                Email address
              </label>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none">
                  <Mail className="h-5 w-5 text-text/40" />
                </div>
                <input
                  id="email"
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                  placeholder="you@example.com"
                  className="w-full pl-11 pr-4 py-3 rounded-xl border border-gray-200 focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all font-[family-name:var(--font-poppins)] text-sm"
                />
              </div>
            </div>

            {/* Password Input */}
            <div>
              <label
                htmlFor="password"
                className="block text-sm font-medium text-secondary mb-2 font-[family-name:var(--font-poppins)]"
              >
                Password
              </label>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none">
                  <Lock className="h-5 w-5 text-text/40" />
                </div>
                <input
                  id="password"
                  type="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
                  placeholder="Create a strong password"
                  className="w-full pl-11 pr-4 py-3 rounded-xl border border-gray-200 focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all font-[family-name:var(--font-poppins)] text-sm"
                />
              </div>
              <p className="mt-1.5 text-xs text-text/60 font-[family-name:var(--font-poppins)]">
                Must be at least 8 characters
              </p>
            </div>

            {/* Terms Agreement */}
            <div className="flex items-start">
              <input
                id="terms"
                type="checkbox"
                checked={agreeToTerms}
                onChange={(e) => setAgreeToTerms(e.target.checked)}
                required
                className="h-4 w-4 mt-0.5 rounded border-gray-300 text-primary focus:ring-primary/20"
              />
              <label
                htmlFor="terms"
                className="ml-2 block text-sm text-text font-[family-name:var(--font-poppins)]"
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

            {/* Submit Button */}
            <Button
              type="submit"
              variant="secondary"
              size="md"
              className="w-full mt-6"
            >
              Create account
              <ArrowRight size={18} />
            </Button>
          </form>

          {/* Sign In Link */}
          <p className="mt-6 text-center text-sm text-text font-[family-name:var(--font-poppins)]">
            Already have an account?{" "}
            <a
              href="/pages/login"
              className="text-primary hover:text-primary/80 font-medium"
            >
              Sign in
            </a>
          </p>
        </div>

        {/* Back to Home */}
        <div className="mt-6 text-center">
          <a
            href="/"
            className="text-sm text-text hover:text-secondary font-[family-name:var(--font-poppins)] transition-colors"
          >
            ← Back to home
          </a>
        </div>
      </div>
    </div>
  );
}
