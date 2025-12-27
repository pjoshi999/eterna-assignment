"use client";

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { useState } from "react";

interface RegionSelectorProps {
  children?: React.ReactNode;
}

export function RegionSelector({ children }: RegionSelectorProps) {
  const [activeRegion, setActiveRegion] = useState("GLOBAL");

  const regions = [
    { id: "US-W", label: "US-W", latency: "174ms" },
    { id: "US-C", label: "US-C", latency: "174ms" },
    { id: "US-E", label: "US-E", latency: "391ms" },
    { id: "EU-W", label: "EU-W", latency: "136ms" },
    { id: "EU-C", label: "EU-C", latency: "124ms" },
    { id: "EU-E", label: "EU-E", latency: "148ms" },
    { id: "ASIA", label: "ASIA", latency: "93ms" },
    { id: "ASIA-V2", label: "ASIA-V2", latency: "48ms" },
    { id: "AUS", label: "AUS", latency: "144ms" },
    { id: "GLOBAL", label: "GLOBAL", latency: "481ms" },
  ];

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>{children}</DropdownMenuTrigger>
      <DropdownMenuContent
        align="start"
        sideOffset={8}
        className="w-[200px] bg-[#101114] border border-[#1a1b1f] p-0 rounded-[6px] shadow-xl overflow-hidden"
      >
        {/* Header */}
        <div className="flex items-center justify-between px-3 py-2 border-b border-[#1a1b1f]">
          <span className="text-[12px] font-medium text-[#777a8c]">
            Regions
          </span>
          <button className="text-[#777a8c] hover:text-white transition-colors">
            <i className="ri-refresh-line text-[14px]"></i>
          </button>
        </div>

        {/* List */}
        <div className="flex flex-col py-1">
          {regions.map((region) => (
            <button
              key={region.id}
              onClick={() => setActiveRegion(region.id)}
              className={`flex items-center justify-between px-3 py-1.5 text-[11px] font-medium transition-colors ${
                activeRegion === region.id
                  ? "bg-[#16171d] text-white"
                  : "text-[#777a8c] hover:bg-[#16171d] hover:text-white"
              }`}
            >
              <div className="flex items-center gap-2">
                <i className="ri-server-line"></i>
                <span>{region.label}</span>
              </div>
              <span
                className={`${
                  parseInt(region.latency) < 100
                    ? "text-[#4ade80]"
                    : parseInt(region.latency) < 200
                    ? "text-[#F59E0B]"
                    : "text-[#ef4444]"
                }`}
              >
                {region.latency}
              </span>
            </button>
          ))}
        </div>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
