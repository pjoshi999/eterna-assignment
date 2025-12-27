"use client";

import * as React from "react";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { cn } from "@/lib/utils";

export function NotificationPopover() {
  const [isOpen, setIsOpen] = React.useState(false);

  return (
    <Popover open={isOpen} onOpenChange={setIsOpen}>
      <PopoverTrigger asChild>
        <button
          className={cn(
            "w-[40px] h-[35px] flex items-center justify-center rounded-full bg-[#21242d] border border-[#22242d] hover:bg-[#22242d] hover:text-white transition-colors group",
            isOpen && "bg-[#22242d] text-white"
          )}
        >
          <i className="ri-notification-3-line text-[18px]"></i>
        </button>
      </PopoverTrigger>
      <PopoverContent
        align="end"
        className="w-[360px] p-0 bg-[#21242d] border border-[#22242d] text-white overflow-hidden shadow-xl"
        sideOffset={8}
      >
        {/* Header */}
        <div className="flex items-center justify-between px-4 py-3 border-b border-[#22242d]">
          <h3 className="text-[14px] font-medium text-white">Notifications</h3>
          <div className="flex items-center gap-3">
            <button className="text-[12px] text-[#6B7280] hover:text-white transition-colors">
              Clear All
            </button>
            <button
              onClick={() => setIsOpen(false)}
              className="text-[#6B7280] hover:text-white transition-colors"
            >
              <i className="ri-close-line text-[18px]"></i>
            </button>
          </div>
        </div>

        {/* Content - Empty State based on screenshot */}
        <div className="min-h-[400px] flex flex-col items-center justify-center p-6 text-center">
          {/* <div className="w-16 h-16 mb-4 rounded-full bg-[#22242d] flex items-center justify-center">
            <i className="ri-notification-off-line text-2xl text-[#6B7280]"></i>
          </div>
          <p className="text-[#6B7280] text-sm">No new notifications</p> */}
        </div>
      </PopoverContent>
    </Popover>
  );
}
