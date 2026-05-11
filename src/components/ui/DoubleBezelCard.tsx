"use client";

import { cn } from "@/lib/utils";
import { ReactNode } from "react";

interface DoubleBezelCardProps {
  children: ReactNode;
  className?: string;
  innerClassName?: string;
}

export function DoubleBezelCard({
  children,
  className,
  innerClassName,
}: DoubleBezelCardProps) {
  return (
    <div
      className={cn(
        "relative group p-[6px] rounded-[2rem] bg-white/5 ring-1 ring-white/10 backdrop-blur-3xl overflow-hidden transition-all duration-700 ease-[cubic-bezier(0.32,0.72,0,1)] hover:bg-white/[0.07]",
        className
      )}
    >
      {/* Inner Core */}
      <div
        className={cn(
          "relative h-full w-full rounded-[calc(2rem-6px)] bg-[#0A0A0A]/90 shadow-[inset_0_1px_1px_rgba(255,255,255,0.15)] overflow-hidden",
          innerClassName
        )}
      >
        {children}
      </div>
    </div>
  );
}