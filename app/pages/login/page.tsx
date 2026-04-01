"use client";

import { useState } from "react";
import { Mail, Lock, ArrowRight } from "lucide-react";
import { Button } from "../../components/ui";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";

export default function LoginPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleEmailLogin = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle email/password login
    console.log("Email login:", { email, password });
    // Redirect to onboarding after successful login
    window.location.href = "/pages/onboarding";
  };

  const handleGoogleLogin = () => {
    // Handle Google OAuth
    console.log("Google OAuth login");
    // Redirect to onboarding after successful login
    window.location.href = "/pages/onboarding";
  };

  return (
    <>
      <Navbar />
      <div className="min-h-screen bg-gradient-to-br from-gray-50 via-white to-primary/5 flex items-center justify-center px-4 py-12">
        {/* Background decoration */}
        <div className="absolute top-20 right-[-100px] w-[500px] h-[500px] bg-gradient-radial from-primary/10 to-transparent pointer-events-none" />
        <div className="absolute bottom-[-100px] left-[-100px] w-[400px] h-[400px] bg-gradient-radial from-purple-400/10 to-transparent pointer-events-none" />

        <div className="relative w-full max-w-6xl">
          {/* Page Heading - Above Cards */}
          <div className="text-center mb-12">
            <h1 className="font-[family-name:var(--font-spline-sans)] text-4xl sm:text-5xl font-bold text-secondary mb-4">
              Let's get your automation set up
            </h1>
            <p className="text-text/70 font-[family-name:var(--font-poppins)] text-lg">
              We'll walk through your needs and handle everything for you.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-start">
            {/* Left Section - Image & Content */}
            <div className="hidden lg:block">
              <div className="bg-white rounded-2xl border border-gray-200 shadow-xl p-8 group hover:shadow-2xl transition-all duration-300">
                {/* Image Placeholder - Top */}
                <div className="relative rounded-xl overflow-hidden bg-gradient-to-br from-gray-800 to-gray-900 aspect-video group-hover:scale-[1.02] transition-transform duration-300 mb-6">
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="text-center">
                      <div className="w-16 h-16 mx-auto mb-3 rounded-xl bg-primary/10 flex items-center justify-center">
                        <svg
                          className="w-8 h-8 text-primary"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"
                          />
                        </svg>
                      </div>
                      <p className="text-sm text-gray-400 font-[family-name:var(--font-poppins)]">
                        Workflow diagram placeholder
                      </p>
                    </div>
                  </div>
                </div>

                {/* Stats/Badges - Bottom */}
                <div className="flex flex-wrap gap-2 mb-4">
                  <span className="px-3 py-1.5 rounded-full border border-primary/20 bg-primary/10 text-primary text-xs font-semibold font-[family-name:var(--font-poppins)]">
                    5+ Tools Unified
                  </span>
                  <span className="px-3 py-1.5 rounded-full border border-primary/20 bg-primary/10 text-primary text-xs font-semibold font-[family-name:var(--font-poppins)]">
                    80%+ Manual Tasks Eliminated
                  </span>
                  <span className="px-3 py-1.5 rounded-full border border-primary/20 bg-primary/10 text-primary text-xs font-semibold font-[family-name:var(--font-poppins)]">
                    24/7 Availability
                  </span>
                </div>

                {/* Heading - Bottom */}
                <h2 className="font-[family-name:var(--font-spline-sans)] text-2xl font-bold text-secondary mb-2">
                  Let's get your automation set up
                </h2>

                {/* Subtitle - Bottom */}
                <p className="text-text/70 font-[family-name:var(--font-poppins)] text-sm leading-relaxed">
                  We'll walk through your needs and handle everything for you.
                </p>
              </div>
            </div>

            {/* Right Section - Login Form */}
            <div className="relative w-full max-w-md mx-auto lg:mx-0">
              {/* Login Card */}
              <div className="bg-white rounded-2xl border border-gray-200 shadow-xl p-8">
                {/* Google OAuth Button */}
                <button
                  onClick={handleGoogleLogin}
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
                      Or continue with email
                    </span>
                  </div>
                </div>

                {/* Email/Password Form */}
                <form onSubmit={handleEmailLogin} className="space-y-4">
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
                    <div className="flex items-center justify-between mb-2">
                      <label
                        htmlFor="password"
                        className="block text-sm font-medium text-secondary font-[family-name:var(--font-poppins)]"
                      >
                        Password
                      </label>
                      <a
                        href="/forgot-password"
                        className="text-xs text-primary hover:text-primary/80 font-[family-name:var(--font-poppins)] font-medium"
                      >
                        Forgot password?
                      </a>
                    </div>
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
                        placeholder="Enter your password"
                        className="w-full pl-11 pr-4 py-3 rounded-xl border border-gray-200 focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all font-[family-name:var(--font-poppins)] text-sm"
                      />
                    </div>
                  </div>

                  {/* Remember Me */}
                  <div className="flex items-center">
                    <input
                      id="remember"
                      type="checkbox"
                      className="h-4 w-4 rounded border-gray-300 text-primary focus:ring-primary/20"
                    />
                    <label
                      htmlFor="remember"
                      className="ml-2 block text-sm text-text font-[family-name:var(--font-poppins)]"
                    >
                      Remember me for 30 days
                    </label>
                  </div>

                  {/* Submit Button */}
                  <Button
                    type="submit"
                    variant="secondary"
                    size="md"
                    className="w-full mt-6"
                  >
                    Sign in
                    <ArrowRight size={18} />
                  </Button>
                </form>

                {/* Sign Up Link */}
                <p className="mt-6 text-center text-sm text-text font-[family-name:var(--font-poppins)]">
                  Don't have an account?{" "}
                  <a
                    href="/pages/signup"
                    className="text-primary hover:text-primary/80 font-medium"
                  >
                    Sign up for free
                  </a>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}
