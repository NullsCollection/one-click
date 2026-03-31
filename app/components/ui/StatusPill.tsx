import { ReactNode } from "react";
import { cn } from "@/lib/utils";

interface StatusPillProps {
  children: ReactNode;
  className?: string;
  showIndicator?: boolean;
}

export default function StatusPill({
  children,
  className,
  showIndicator = true,
}: StatusPillProps) {
  return (
    <div
      className={cn(
        "inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary/10 px-4 py-2 text-sm font-medium text-primary",
        className,
      )}
    >
      {showIndicator && (
        <span className="relative flex h-2 w-2">
          <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-primary opacity-75" />
          <span className="relative inline-flex h-2 w-2 rounded-full bg-primary" />
        </span>
      )}
      {children}
    </div>
  );
}
