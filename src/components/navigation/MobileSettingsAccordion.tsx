"use client";

import { MobileDisplaySettings } from "./MobileDisplaySettings";
import { MobileFilterModal } from "../modals/MobileFilterModal";
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "@/components/ui/tooltip";

interface MobileSettingsAccordionProps {
  isOpen: boolean;
}

export function MobileSettingsAccordion({
  isOpen,
}: MobileSettingsAccordionProps) {
  if (!isOpen) return null;

  return (
    <div className="w-full bg-[#101114] border-b border-[#22242d] animate-in slide-in-from-top-2 duration-200">
      <div className="flex items-center gap-2 py-3 overflow-x-auto no-scrollbar">
        {/* Display Button - Bottom Sheet Trigger */}
        <MobileDisplaySettings>
          <button className="h-[32px] px-3 flex items-center gap-2 rounded-full border border-[#22242d] bg-[#22242d] hover:bg-[#2a2c36] transition-colors flex-shrink-0">
            <i className="ri-list-check text-white text-[16px]"></i>
            <span className="text-[13px] font-bold text-white">Display</span>
            <i className="ri-arrow-down-s-line text-white text-[16px]"></i>
          </button>
        </MobileDisplaySettings>

        {/* Icons Group */}
        <div className="flex items-center gap-1 flex-shrink-0">
          <Tooltip>
            <TooltipTrigger asChild>
              <button className="w-8 h-8 flex items-center justify-center rounded hover:bg-[#22242d] transition-colors text-[#6b7280] hover:text-white">
                <i className="ri-bookmark-line text-[18px]"></i>
              </button>
            </TooltipTrigger>
            <TooltipContent>
              <p>Bookmarks</p>
            </TooltipContent>
          </Tooltip>

          <Tooltip>
            <TooltipTrigger asChild>
              <button className="w-8 h-8 flex items-center justify-center rounded hover:bg-[#22242d] transition-colors text-[#6b7280] hover:text-white">
                <i className="ri-crosshair-2-line text-[18px]"></i>
              </button>
            </TooltipTrigger>
            <TooltipContent>
              <p>Targets</p>
            </TooltipContent>
          </Tooltip>

          <Tooltip>
            <TooltipTrigger asChild>
              <button className="w-8 h-8 flex items-center justify-center rounded hover:bg-[#22242d] transition-colors text-[#6b7280] hover:text-white">
                <i className="ri-question-line text-[18px]"></i>
              </button>
            </TooltipTrigger>
            <TooltipContent>
              <p>Help</p>
            </TooltipContent>
          </Tooltip>
        </div>

        {/* Filter Button */}
        <MobileFilterModal>
          <button className="h-[32px] px-3 flex items-center gap-2 rounded-full bg-[#22242d] border border-[#22242d] hover:bg-[#2a2c36] transition-colors flex-shrink-0">
            <i className="ri-filter-3-line text-white text-[16px]"></i>
            <span className="text-[13px] font-bold text-white">Filter</span>
            <i className="ri-arrow-down-s-line text-white text-[16px]"></i>
          </button>
        </MobileFilterModal>
      </div>

      {/* P1/P2/P3 Row from screenshot 1 implied as being visible or part of this? 
           Screenshot 1 shows P1 P2 P3 at the bottom right of the header row.
           Let's stick to just the controls requested for now. 
       */}
    </div>
  );
}
