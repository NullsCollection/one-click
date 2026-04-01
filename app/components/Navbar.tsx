"use client";

import { useState, type MouseEvent } from "react";
import { Menu, X, ArrowRight } from "lucide-react";
import { Button } from "./ui";

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

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
    scrollToSection(id);
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-md border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex-shrink-0">
            <h1 className="text-2xl font-bold text-secondary font-[family-name:var(--font-spline-sans)]">
              OneClick
            </h1>
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
          </div>

          {/* Desktop CTA Buttons */}
          <div className="hidden md:flex items-center space-x-4">
            <button
              onClick={() => scrollToSection("pricing")}
              className="text-secondary font-[family-name:var(--font-poppins)] text-sm font-medium hover:text-primary transition-colors"
            >
              Book a demo
            </button>
            <Button
              variant="secondary"
              size="sm"
              onClick={() => (window.location.href = "/pages/login")}
            >
              Get Started
            </Button>
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
            <div className="pt-4 space-y-3 border-t border-gray-100">
              <button
                onClick={() => scrollToSection("pricing")}
                className="w-full text-left py-2 text-secondary font-[family-name:var(--font-poppins)] text-sm font-medium hover:text-primary transition-colors"
              >
                Book a demo
              </button>
              <Button
                variant="secondary"
                size="sm"
                className="w-full"
                onClick={() => (window.location.href = "/pages/login")}
              >
                Get Started
              </Button>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
}
