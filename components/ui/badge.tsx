import * as React from "react";
import { cn } from "@/lib/utils";

export interface BadgeProps extends React.HTMLAttributes<HTMLDivElement> {
  color?: "default" | "accent" | "secondary";
}

export const Badge = ({ className, color = "default", ...props }: BadgeProps) => {
  const styles = {
    default: "bg-secondary/5 text-secondary",
    accent: "bg-accent/10 text-accent",
    secondary: "bg-primary/10 text-primary",
  } as const;
  return (
    <div
      className={cn(
        "inline-flex items-center rounded-full px-2.5 py-0.5 text-xs font-medium",
        styles[color],
        className
      )}
      {...props}
    />
  );
};
