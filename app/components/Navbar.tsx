"use client";

import { useState, useRef, useEffect, type MouseEvent } from "react";
import { useRouter, usePathname } from "next/navigation";
import { Menu, X, ArrowRight, LogOut, ChevronDown } from "lucide-react";
import Image from "next/image";
import { Button } from "./ui";
import { useAuth } from "@/app/context/AuthContext";

function getInitials(name: string) {
  return name
    .split(" ")
    .map((n) => n[0])
    .slice(0, 2)
    .join("")
    .toUpperCase();
}

export default function Navbar() {
  const { user, loading, logout } = useAuth();
  const router = useRouter();
  const pathname = usePathname();

  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isProfileOpen, setIsProfileOpen] = useState(false);
  const profileRef = useRef<HTMLDivElement>(null);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);
  const scrollToSection = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
    if (isMenuOpen) setIsMenuOpen(false);
  };

  const handleAnchorClick = (
    event: MouseEvent<HTMLAnchorElement>,
    id: string,
  ) => {
    event.preventDefault();
    if (pathname === "/") {
      scrollToSection(id);
    } else {
      router.push(`/#${id}`);
      if (isMenuOpen) setIsMenuOpen(false);
    }
  };

  // Close dropdown when clicking outside
  useEffect(() => {
    function handleClickOutside(e: globalThis.MouseEvent) {
      if (
        profileRef.current &&
        !profileRef.current.contains(e.target as Node)
      ) {
        setIsProfileOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const handleLogout = async () => {
    setIsProfileOpen(false);
    setIsMenuOpen(false);
    await logout();
    router.push("/");
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-md border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex-shrink-0">
            <a href="/" className="inline-flex items-center gap-2">
              <Image src="/favicon.ico" alt="OneClick" width={32} height={32} />
              <span className="text-2xl font-bold text-secondary font-[family-name:var(--font-spline-sans)]">
                OneClick
              </span>
            </a>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <a
              href="#how-it-works"
              className="text-text font-[family-name:var(--font-poppins)] text-sm font-medium hover:text-secondary transition-colors"
              onClick={(event) => handleAnchorClick(event, "how-it-works")}
            >
              How it works
            </a>
            <a
              href="#feature"
              className="text-text font-[family-name:var(--font-poppins)] text-sm font-medium hover:text-secondary transition-colors"
              onClick={(event) => handleAnchorClick(event, "feature")}
            >
              Feature
            </a>
            <a
              href="#pricing"
              className="text-text font-[family-name:var(--font-poppins)] text-sm font-medium hover:text-secondary transition-colors"
              onClick={(event) => handleAnchorClick(event, "pricing")}
            >
              Pricing
            </a>
            <a
              href="#custom-workflow"
              className="text-text font-[family-name:var(--font-poppins)] text-sm font-medium hover:text-secondary transition-colors"
              onClick={(event) => handleAnchorClick(event, "custom-workflow")}
            >
              Custom
            </a>
          </div>

          {/* Desktop CTA */}
          <div className="hidden md:flex items-center space-x-4">
            {!loading && !user && (
              <>
                <button
                  onClick={() => router.push("/pages/login")}
                  className="text-secondary font-[family-name:var(--font-poppins)] text-sm font-medium hover:text-primary transition-colors"
                >
                  Book a demo
                </button>
                <Button
                  variant="secondary"
                  size="sm"
                  onClick={() => router.push("/pages/login")}
                >
                  Get Started
                </Button>
              </>
            )}

            {!loading && user && (
              <div className="relative" ref={profileRef}>
                <button
                  onClick={() => setIsProfileOpen((o) => !o)}
                  className="flex items-center gap-2 rounded-xl px-3 py-1.5 hover:bg-gray-50 transition-colors"
                >
                  {user.avatar_url ? (
                    <img
                      src={user.avatar_url}
                      alt={user.name}
                      className="w-8 h-8 rounded-full object-cover shrink-0"
                    />
                  ) : (
                    <span className="w-8 h-8 rounded-full bg-primary flex items-center justify-center text-white text-xs font-bold font-[family-name:var(--font-poppins)] shrink-0">
                      {getInitials(user.name)}
                    </span>
                  )}
                  <span className="text-sm font-medium text-secondary font-[family-name:var(--font-poppins)] max-w-[120px] truncate">
                    {user.name.split(" ")[0]}
                  </span>
                  <ChevronDown
                    size={14}
                    className={`text-gray-400 transition-transform duration-200 ${isProfileOpen ? "rotate-180" : ""}`}
                  />
                </button>

                {isProfileOpen && (
                  <div className="absolute right-0 mt-2 w-56 rounded-xl bg-white border border-gray-100 shadow-lg shadow-gray-200/60 py-1 overflow-hidden">
                    <div className="px-4 py-3 border-b border-gray-100">
                      <p className="text-sm font-semibold text-secondary font-[family-name:var(--font-poppins)] truncate">
                        {user.name}
                      </p>
                      <p className="text-xs text-text font-[family-name:var(--font-poppins)] truncate mt-0.5">
                        {user.email}
                      </p>
                    </div>
                    <button
                      onClick={handleLogout}
                      className="w-full flex items-center gap-2.5 px-4 py-2.5 text-sm text-red-600 hover:bg-red-50 transition-colors font-[family-name:var(--font-poppins)]"
                    >
                      <LogOut size={14} />
                      Sign out
                    </button>
                  </div>
                )}
              </div>
            )}
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button
              onClick={toggleMenu}
              className="text-secondary hover:text-primary transition-colors p-2"
              aria-label="Toggle menu"
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-white border-t border-gray-100">
          <div className="px-4 pt-2 pb-4 space-y-3">
            <a
              href="#how-it-works"
              className="block py-2 text-text font-[family-name:var(--font-poppins)] text-sm font-medium hover:text-secondary transition-colors"
              onClick={(event) => handleAnchorClick(event, "how-it-works")}
            >
              How it works
            </a>
            <a
              href="#feature"
              className="block py-2 text-text font-[family-name:var(--font-poppins)] text-sm font-medium hover:text-secondary transition-colors"
              onClick={(event) => handleAnchorClick(event, "feature")}
            >
              Feature
            </a>
            <a
              href="#pricing"
              className="block py-2 text-text font-[family-name:var(--font-poppins)] text-sm font-medium hover:text-secondary transition-colors"
              onClick={(event) => handleAnchorClick(event, "pricing")}
            >
              Pricing
            </a>
            <a
              href="#custom-workflow"
              className="block py-2 text-text font-[family-name:var(--font-poppins)] text-sm font-medium hover:text-secondary transition-colors"
              onClick={(event) => handleAnchorClick(event, "custom-workflow")}
            >
              Custom
            </a>

            <div className="pt-4 border-t border-gray-100">
              {!loading && !user && (
                <div className="space-y-3">
                  <button
                    onClick={() => router.push("/pages/login")}
                    className="w-full text-left py-2 text-secondary font-[family-name:var(--font-poppins)] text-sm font-medium hover:text-primary transition-colors"
                  >
                    Book a demo
                  </button>
                  <Button
                    variant="secondary"
                    size="sm"
                    className="w-full"
                    onClick={() => router.push("/pages/login")}
                  >
                    Get Started
                  </Button>
                </div>
              )}

              {!loading && user && (
                <div className="space-y-1">
                  <div className="flex items-center gap-3 py-2">
                    {user.avatar_url ? (
                      <img
                        src={user.avatar_url}
                        alt={user.name}
                        className="w-9 h-9 rounded-full object-cover shrink-0"
                      />
                    ) : (
                      <span className="w-9 h-9 rounded-full bg-primary flex items-center justify-center text-white text-xs font-bold font-[family-name:var(--font-poppins)] shrink-0">
                        {getInitials(user.name)}
                      </span>
                    )}
                    <div className="min-w-0">
                      <p className="text-sm font-semibold text-secondary font-[family-name:var(--font-poppins)] truncate">
                        {user.name}
                      </p>
                      <p className="text-xs text-text font-[family-name:var(--font-poppins)] truncate">
                        {user.email}
                      </p>
                    </div>
                  </div>
                  <button
                    onClick={handleLogout}
                    className="w-full flex items-center gap-2.5 py-2.5 text-sm text-red-600 font-[family-name:var(--font-poppins)]"
                  >
                    <LogOut size={14} />
                    Sign out
                  </button>
                </div>
              )}
            </div>
          </div>
        </div>
      )}
    </nav>
  );
}
