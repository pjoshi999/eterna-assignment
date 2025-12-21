"use client";

import { cn } from "@/lib/utils/cn";

export function BottomNav() {
  return (
    <div className="fixed bottom-0 left-0 right-0 z-40 bg-[#0a0b0f] border-t border-[#1A1B1F] py-2 lg:hidden">
      <div className="flex items-center justify-center gap-8 mx-auto w-full">
        <BottomNavItem icon="ri-fire-line" label="Trending" />
        <BottomNavItem icon="ri-radar-line" label="Track" />
        <BottomNavItem icon="ri-pulse-line" label="Pulse" isActive />
        <BottomNavItem icon="ri-exchange-dollar-line" label="Perpetuals" />
        <BottomNavItem icon="ri-account-box-line" label="Account" />
      </div>
    </div>
  );
}

function BottomNavItem({
  icon,
  label,
  isActive,
}: {
  icon: string;
  label: string;
  isActive?: boolean;
}) {
  return (
    <button className="flex flex-col items-center gap-1 group">
      <i
        className={cn(
          icon,
          "text-[20px] transition-colors",
          isActive ? "text-white" : "text-[#6B7280] group-hover:text-white"
        )}
      ></i>
      <span
        className={cn(
          "text-[10px] font-medium transition-colors",
          isActive ? "text-white" : "text-[#6B7280] group-hover:text-white"
        )}
      >
        {label}
      </span>
    </button>
  );
}
