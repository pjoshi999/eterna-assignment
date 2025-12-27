"use client";

import * as React from "react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

export function ProfileDropdown() {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <button className="relative w-[30px] h-[30px] flex items-center justify-center rounded-full bg-gradient-to-br from-[#4ade80] to-[#3b82f6] hover:opacity-90 transition-opacity">
          <span className="text-[12px] font-bold text-white">4A</span>
          <div className="absolute bottom-0 right-0 w-[12px] h-[12px] bg-[#10b981] border-[3px] scale-110 border-[#0a0b0f] rounded-full"></div>
        </button>
      </DropdownMenuTrigger>
      <DropdownMenuContent
        align="end"
        sideOffset={8}
        className="w-[200px] bg-[#21242d] border border-[#22242d] p-1.5"
      >
        <DropdownMenuItem className="flex flex-col items-start gap-1 px-2 cursor-pointer hover:bg-[#22242d] focus:bg-[#22242d] rounded-md outline-none group">
          <div className="flex items-center gap-2 text-white/60 group-hover:text-white">
            <i className="ri-group-line text-[16px]"></i>
            <span className="font-medium text-[14px]">Lobby</span>
          </div>
          <span className="text-[#6B7280] text-[12px]">Open social lobby</span>
        </DropdownMenuItem>

        <DropdownMenuItem className="flex flex-col items-start gap-1 px-2 cursor-pointer hover:bg-[#22242d] focus:bg-[#22242d] rounded-md outline-none group">
          <div className="flex items-center gap-2 text-white/60 group-hover:text-white">
            <i className="ri-user-line text-[16px]"></i>
            <span className="font-medium text-[14px]">Profile</span>
          </div>
          <span className="text-[#6B7280] text-[12px]">View your profile</span>
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
