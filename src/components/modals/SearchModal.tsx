/**
 * SearchModal Component
 * Full-screen search modal with filters matching Axiom Trade
 */

"use client";

import { useState } from "react";
import { Dialog, DialogContent } from "../ui/dialog";

interface SearchModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export function SearchModal({ isOpen, onClose }: SearchModalProps) {
  const [searchQuery, setSearchQuery] = useState("");

  // Mock search results
  const mockResults = [
    {
      name: "STARBUC..",
      ticker: "Star...",
      mc: "$211K",
      v: "$4.0M",
      l: "$178K",
      time: "49m",
    },
    {
      name: "Wsol",
      ticker: "Wint...",
      mc: "$1.2B",
      v: "$164K",
      l: "$55K",
      time: "44m",
    },
    {
      name: "SNS",
      ticker: "Sola...",
      mc: "$14.5M",
      v: "$32K",
      l: "$195K",
      time: "4mo",
    },
    {
      name: "IRS",
      ticker: "Inves...",
      mc: "$8K",
      v: "$15K",
      l: "$9K",
      time: "1h",
    },
    {
      name: "JitoSOL",
      ticker: "Jito...",
      mc: "$1.8B",
      v: "$10K",
      l: "$3.6M",
      time: "2y",
    },
  ];

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="max-w-2xl bg-[#0a0b0f] border border-[#1a1b1f] p-0 overflow-hidden">
        <div className="flex flex-col h-[600px]">
          {/* Search Input */}
          <div className="p-4 border-b border-[#1a1b1f]">
            <div className="flex items-center gap-3">
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="SOL"
                className="flex-1 bg-transparent text-white text-lg outline-none"
                autoFocus
              />
            </div>
          </div>

          {/* Filters */}
          <div className="flex items-center gap-2 px-4 py-3 border-b border-[#1a1b1f] overflow-x-auto">
            <button className="px-3 py-1 bg-[#526fff] text-white text-xs rounded-full whitespace-nowrap">
              Pump
            </button>
            <button className="px-3 py-1 bg-[rgba(255,255,255,0.05)] text-[#6b7280] text-xs rounded-full whitespace-nowrap hover:bg-[rgba(255,255,255,0.1)]">
              Bonk
            </button>
            <button className="px-3 py-1 bg-[rgba(255,255,255,0.05)] text-[#6b7280] text-xs rounded-full whitespace-nowrap hover:bg-[rgba(255,255,255,0.1)]">
              Bags
            </button>
            <button className="px-3 py-1 bg-[rgba(255,255,255,0.05)] text-[#6b7280] text-xs rounded-full whitespace-nowrap hover:bg-[rgba(255,255,255,0.1)]">
              USGI
            </button>
            <button className="px-3 py-1 bg-[rgba(255,255,255,0.05)] text-[#6b7280] text-xs rounded-full whitespace-nowrap hover:bg-[rgba(255,255,255,0.1)]">
              GS Mode
            </button>
            <button className="px-3 py-1 bg-[rgba(255,255,255,0.05)] text-[#6b7280] text-xs rounded-full whitespace-nowrap hover:bg-[rgba(255,255,255,0.1)]">
              Graduated
            </button>
          </div>

          {/* Results */}
          <div className="flex-1 overflow-y-auto">
            <div className="p-4">
              <h3 className="text-xs text-[#6b7280] mb-3">Results</h3>
              <div className="space-y-2">
                {mockResults.map((result, idx) => (
                  <div
                    key={idx}
                    className="flex items-center gap-3 p-3 rounded hover:bg-[rgba(255,255,255,0.02)] cursor-pointer group"
                  >
                    {/* Token Image */}
                    <div className="w-10 h-10 bg-gradient-to-br from-green-400 to-blue-500 rounded flex-shrink-0"></div>

                    {/* Token Info */}
                    <div className="flex-1">
                      <div className="flex items-center gap-2 mb-1">
                        <span className="font-semibold text-white text-sm">
                          {result.name}
                        </span>
                        <span className="text-xs text-[#6b7280]">
                          {result.ticker}
                        </span>
                      </div>
                      <div className="flex items-center gap-2 text-xs text-[#6b7280]">
                        <span>{result.time}</span>
                        <span>👤</span>
                        <span>🌐</span>
                      </div>
                    </div>

                    {/* Metrics */}
                    <div className="flex flex-col items-end gap-0.5">
                      <div className="text-xs">
                        <span className="text-[#6b7280]">MC </span>
                        <span
                          className={(() => {
                            const cleanMC = result.mc.replace(/[$,]/g, "");
                            let numericVal = parseFloat(cleanMC);
                            if (cleanMC.endsWith("K")) numericVal *= 1000;
                            else if (cleanMC.endsWith("M"))
                              numericVal *= 1000000;
                            else if (cleanMC.endsWith("B"))
                              numericVal *= 1000000000;
                            return numericVal < 30000000
                              ? "text-[#52c5ff]"
                              : "text-[#fbbf24]";
                          })()}
                        >
                          {result.mc}
                        </span>
                      </div>
                      <div className="text-xs">
                        <span className="text-[#6b7280]">V </span>
                        <span className="text-[#fbbf24]">{result.v}</span>
                      </div>
                      <div className="text-xs">
                        <span className="text-[#6b7280]">L </span>
                        <span className="text-white">{result.l}</span>
                      </div>
                    </div>

                    {/* Add Button */}
                    <button className="w-8 h-8 bg-[#526fff] rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                      <span className="text-white text-lg">+</span>
                    </button>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
}
