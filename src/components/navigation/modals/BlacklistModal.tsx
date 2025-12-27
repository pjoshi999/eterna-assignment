"use client";

import { useState } from "react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { cn } from "@/lib/utils";

const TABS = ["All", "Dev", "CA", "Keyword", "Website"];
const MOCK_BLACKLIST = [
  { id: 1, name: "AKxRhEDBfno2zEy9nRY9Re6UMXf7F3B6XmPGMQAqpump", type: "CA" },
  { id: 2, name: "5i1CkHWc8rnrcNLGZNPR65s8hrcZMFghfJM62okAupump", type: "CA" },
  { id: 3, name: "9D2RFyp51NQCqozT37724NV6Pu7tyRWuNQK7D9PTpump", type: "CA" },
  { id: 4, name: "968HM8kdKnnjh6XvEsrouMoC4KXbFjRUCMGuu38cEmrd", type: "CA" },
  { id: 5, name: "4m1sWYdZfQCN4nEeWwGaFF8SpJRo1DeUsjVXXT8Lpump", type: "CA" },
  { id: 6, name: "8dLqrJRxqMN1H6Ragigx4AHqQUMcfFK4aRphZQYpump", type: "CA" },
  { id: 7, name: "EQM7JSvXNKxqpz5q5wpoVQyHr3v8UmoztxAN2tdupump", type: "CA" },
];

export function BlacklistModal({
  children,
  tooltip,
}: {
  children: React.ReactNode;
  tooltip?: string;
}) {
  const [activeTab, setActiveTab] = useState("All");

  const Trigger = <DialogTrigger asChild>{children}</DialogTrigger>;

  return (
    <Dialog>
      {tooltip ? (
        <Tooltip>
          <TooltipTrigger asChild>{Trigger}</TooltipTrigger>
          <TooltipContent>
            <p>{tooltip}</p>
          </TooltipContent>
        </Tooltip>
      ) : (
        Trigger
      )}
      <DialogContent className="max-w-[500px] bg-[#101114] border-[#1a1b1f] text-white p-0 gap-0">
        <DialogHeader className="p-4 border-b border-[#1a1b1f] flex flex-row items-center justify-between">
          <DialogTitle className="text-[16px] font-medium">
            Blacklist
          </DialogTitle>
        </DialogHeader>

        <div className="p-4 flex flex-col gap-4">
          {/* Input */}
          <div className="flex gap-2">
            <input
              type="text"
              placeholder="Enter twitter profile, dev address or keyword"
              className="flex-1 h-[36px] bg-[#0A0B0F] border border-[#1a1b1f] rounded-[6px] px-3 text-[13px] text-white placeholder:text-[#6b7280] focus:outline-none focus:border-[#526fff]"
            />
            <button className="h-[36px] px-4 bg-[#526fff] text-white text-[13px] font-medium rounded-[6px] hover:bg-[#4259cc] transition-colors">
              Blacklist
            </button>
          </div>

          {/* Info Alert */}
          <div className="flex items-center gap-2 p-3 rounded-[6px] bg-[#16171d] border border-[#1a1b1f]">
            <i className="ri-error-warning-line text-[#9ca3af]"></i>
            <span className="text-[12px] text-[#9ca3af]">
              Blacklist all types of metrics!
            </span>
          </div>

          {/* Tabs */}
          <div className="flex items-center gap-4 border-b border-[#1a1b1f]">
            {TABS.map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={cn(
                  "pb-2 text-[13px] font-medium transition-colors relative",
                  activeTab === tab
                    ? "text-white"
                    : "text-[#6b7280] hover:text-[#9ca3af]"
                )}
              >
                {tab}
                {tab === "All" && (
                  <span className="ml-1.5 px-1.5 py-0.5 rounded-full bg-[#526fff] text-white text-[10px]">
                    21
                  </span>
                )}
                {tab === "CA" && (
                  <span className="ml-1.5 px-1.5 py-0.5 rounded-full bg-[#D97706] text-black text-[10px] font-bold">
                    21
                  </span>
                )}
                {activeTab === tab && (
                  <div className="absolute bottom-[-1px] left-0 right-0 h-[1px] bg-[#526fff]" />
                )}
              </button>
            ))}
          </div>

          {/* List */}
          <div className="flex flex-col gap-2 max-h-[300px] overflow-y-auto custom-scrollbar">
            {MOCK_BLACKLIST.map((item) => (
              <div
                key={item.id}
                className="group flex flex-col gap-1 p-3 rounded-[6px] bg-[#16171d]/50 hover:bg-[#16171d] transition-colors border border-[#1a1b1f]"
              >
                <div className="flex items-center justify-between">
                  <span className="text-[13px] text-[#9ca3af] font-mono truncate">
                    {item.name}
                  </span>
                  <button className="text-[#ef4444] opacity-0 group-hover:opacity-100 transition-opacity">
                    <i className="ri-delete-bin-line"></i>
                  </button>
                </div>
                <div className="flex items-center gap-1 text-[11px] text-[#D97706]">
                  <i className="ri-code-s-slash-line"></i>
                  <span>Contract Address</span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Footer */}
        <div className="p-3 bg-[#16171d] border-t border-[#1a1b1f] flex items-center justify-between">
          <span className="text-[12px] text-[#6b7280]">
            21 / 1000 blacklists
          </span>
          <div className="flex items-center gap-2">
            <button className="px-3 py-1.5 bg-[#ef4444] text-white text-[12px] font-medium rounded-[4px] hover:bg-[#dc2626] transition-colors">
              Delete All
            </button>
            <button className="px-3 py-1.5 bg-[#25262b] text-[#9ca3af] text-[12px] font-medium rounded-[4px] border border-[#2a2c36] hover:text-white transition-colors">
              Import
            </button>
            <button className="px-3 py-1.5 bg-[#25262b] text-[#9ca3af] text-[12px] font-medium rounded-[4px] border border-[#2a2c36] hover:text-white transition-colors">
              Export
            </button>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
}
