import * as React from "react";
import { cn } from "@/lib/utils";

type ButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement> & {
  variant?: "primary" | "secondary";
};

export function Button({ className, variant = "primary", ...props }: ButtonProps) {
  return (
    <button
      className={cn(
        "inline-flex items-center justify-center rounded-md px-4 py-2 text-sm font-medium transition-colors disabled:cursor-not-allowed disabled:opacity-60",
        variant === "primary" && "bg-neutral-950 text-white hover:bg-neutral-800",
        variant === "secondary" && "border border-neutral-300 bg-white text-neutral-950 hover:bg-neutral-50",
        className,
      )}
      {...props}
    />
  );
}
