import { ButtonHTMLAttributes, ReactNode } from "react";
import { cn } from "@/lib/utils";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode;
  variant?: "primary" | "secondary";
  size?: "sm" | "md" | "lg";
  className?: string;
}

export default function Button({
  children,
  variant = "secondary",
  size = "md",
  className,
  ...props
}: ButtonProps) {
  const baseStyles =
    "inline-flex items-center justify-center gap-2 rounded-xl font-[family-name:var(--font-poppins)] font-medium transition-all duration-200 border-b-4 active:border-b-2 active:translate-y-0.5";

  const variantStyles = {
    primary:
      "bg-primary text-white border-primary/80 hover:bg-primary/90 hover:shadow-lg hover:-translate-y-0.5",
    secondary:
      "bg-secondary text-white border-black hover:bg-secondary/90 hover:shadow-lg hover:-translate-y-0.5",
  };

  const sizeStyles = {
    sm: "px-4 py-2 text-sm",
    md: "px-6 py-3 text-base",
    lg: "px-8 py-4 text-lg",
  };

  return (
    <button
      className={cn(
        baseStyles,
        variantStyles[variant],
        sizeStyles[size],
        className,
      )}
      {...props}
    >
      {children}
    </button>
  );
}
