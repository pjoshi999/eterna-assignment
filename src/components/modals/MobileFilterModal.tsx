"use client";

import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";
import { useState } from "react";

interface MobileFilterModalProps {
  children?: React.ReactNode;
}

export function MobileFilterModal({ children }: MobileFilterModalProps) {
  const [activeTab, setActiveTab] = useState<
    "newpairs" | "finalstretch" | "migrated"
  >("migrated");

  const protocols = [
    { id: "pump", label: "Pump", color: "green", icon: "ri-capsule-fill" },
    { id: "raydium", label: "Raydium", color: "green", icon: "ri-link" }, // Using generic for the link symbol
    { id: "mayhem", label: "Mayhem", color: "red", icon: "ri-capsule-fill" },
    { id: "bonk", label: "Bonk", color: "orange", icon: "ri-fire-fill" },
    {
      id: "bags",
      label: "Bags",
      color: "green",
      icon: "ri-money-dollar-circle-fill",
    },
    {
      id: "moonshot",
      label: "Moonshot",
      color: "purple",
      icon: "ri-moon-fill",
    },
    { id: "heaven", label: "Heaven", color: "gray", icon: "ri-cloud-fill" },
    { id: "daos", label: "Daos.fun", color: "blue", icon: "ri-pie-chart-fill" },
    { id: "candle", label: "Candle", color: "orange", icon: "ri-tv-fill" },
    { id: "sugar", label: "Sugar", color: "pink", icon: "ri-donut-chart-fill" },
    { id: "believe", label: "Believe", color: "green", icon: "ri-plant-fill" },
    {
      id: "jupiter",
      label: "Jupiter Studio",
      color: "orange",
      icon: "ri-planet-fill",
    },
    {
      id: "moonit",
      label: "Moonit",
      color: "yellow",
      icon: "ri-send-plane-fill",
    },
    { id: "boop", label: "Boop", color: "blue", icon: "ri-bear-smile-fill" },
    {
      id: "launchlab",
      label: "LaunchLab",
      color: "gray",
      icon: "ri-rocket-fill",
    },
    {
      id: "dynamic",
      label: "Dynamic BC",
      color: "red-dark",
      icon: "ri-bar-chart-fill",
    },
    {
      id: "wavebreak",
      label: "Wavebreak",
      color: "yellow",
      icon: "ri-water-flash-fill",
    },
  ];

  return (
    <Dialog>
      <DialogTrigger asChild>{children}</DialogTrigger>
      <DialogContent className="fixed p-0 w-full h-[85vh] max-w-full bg-[#101114] border border-[#1a1b1f] rounded-t-[12px] shadow-2xl overflow-hidden data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:slide-out-to-bottom-full data-[state=open]:slide-in-from-bottom-full bottom-0 top-auto translate-y-0 translate-x-[-50%] left-[50%]">
        {/* Header */}
        <div className="flex items-center justify-between p-4 border-b border-[#1a1b1f]">
          <span className="text-[16px] font-bold text-white">Filters</span>
          <div className="flex gap-2 pr-6">
            <button className="px-3 py-1 bg-[#1a1b1f] rounded-[6px] text-[12px] font-medium text-white">
              Import
            </button>
            <button className="px-3 py-1 bg-[#1a1b1f] rounded-[6px] text-[12px] font-medium text-white">
              Export
            </button>
            <button className="px-3 py-1 bg-[#1a1b1f] rounded-[6px] text-[12px] font-medium text-white">
              Share
            </button>
          </div>
        </div>

        {/* Status Tabs */}
        <div className="flex gap-4 p-4 border-b border-[#1a1b1f]">
          {["New Pairs", "Final Stretch", "Migrated"].map((tab) => {
            const id = tab.toLowerCase().replace(" ", "") as
              | "newpairs"
              | "finalstretch"
              | "migrated";
            const isActive = activeTab === id;
            return (
              <button
                key={tab}
                onClick={() => setActiveTab(id)}
                className={`relative text-[14px] font-medium transition-colors ${
                  isActive ? "text-white" : "text-[#777a8c]"
                }`}
              >
                {tab}
                <span className="ml-1 px-1.5 py-0.5 bg-[#526fff] text-white text-[10px] rounded-full">
                  3
                </span>
                {isActive && (
                  <div className="absolute -bottom-[17px] left-0 right-0 h-[2px] bg-white"></div>
                )}
              </button>
            );
          })}
        </div>

        {/* Scrollable Content */}
        <div className="overflow-y-auto h-[calc(85vh-180px)] p-4">
          {/* Inputs */}
          <div className="grid grid-cols-2 gap-3 mb-4">
            <div className="flex flex-col gap-1">
              <label className="text-[12px] text-[#777a8c]">
                Search Keywords
              </label>
              <input
                className="bg-[#15161a] border border-[#1a1b1f] rounded-[8px] h-[36px] px-3 text-[12px] outline-none text-white focus:border-[#526fff]"
                placeholder="keyword1, keyword2..."
              />
            </div>
            <div className="flex flex-col gap-1">
              <label className="text-[12px] text-[#777a8c]">
                Exclude Keywords
              </label>
              <input
                className="bg-[#15161a] border border-[#1a1b1f] rounded-[8px] h-[36px] px-3 text-[12px] outline-none text-white focus:border-[#526fff]"
                placeholder="keyword1, keyword2..."
              />
            </div>
          </div>

          {/* Sections Nav */}
          <div className="flex gap-2 mb-4 overflow-x-auto no-scrollbar">
            {["Protocols", "Audit", "$ Metrics", "Socials"].map((nav, i) => (
              <button
                key={nav}
                className={`px-4 py-1.5 rounded-full text-[13px] font-medium whitespace-nowrap ${
                  i === 0 ? "bg-[#22242d] text-white" : "text-[#777a8c]"
                }`}
              >
                {nav}
                {["Protocols", "$ Metrics"].includes(nav) && (
                  <span className="ml-1 bg-[#526fff] px-1.5 rounded-full text-[10px]">
                    2
                  </span>
                )}
              </button>
            ))}
          </div>

          {/* Protocols Grid */}
          <div className="mb-2 flex justify-between items-center">
            <span className="text-[12px] text-[#777a8c]">Protocols</span>
            <button className="text-[12px] text-[#777a8c]">Select All</button>
          </div>
          <div className="grid grid-cols-2 gap-2 mb-6">
            {protocols.map((p) => (
              <button
                key={p.id}
                className="flex items-center gap-2 px-3 py-2 bg-[#15161a] border border-[#1a1b1f] rounded-full hover:border-[#526fff] transition-colors"
              >
                <i
                  className={`${p.icon} text-[14px] ${
                    p.color === "green"
                      ? "text-green-500"
                      : p.color === "red"
                      ? "text-red-500"
                      : p.color === "orange"
                      ? "text-orange-500"
                      : p.color === "purple"
                      ? "text-purple-500"
                      : p.color === "blue"
                      ? "text-blue-500"
                      : p.color === "pink"
                      ? "text-pink-500"
                      : p.color === "yellow"
                      ? "text-yellow-500"
                      : "text-gray-400"
                  }`}
                ></i>
                <span
                  className={`${
                    p.color === "green"
                      ? "text-green-500"
                      : p.color === "red"
                      ? "text-red-500"
                      : p.color === "orange"
                      ? "text-orange-500"
                      : p.color === "purple"
                      ? "text-purple-500"
                      : p.color === "blue"
                      ? "text-blue-500"
                      : p.color === "pink"
                      ? "text-pink-500"
                      : p.color === "yellow"
                      ? "text-yellow-500"
                      : "text-gray-400"
                  } text-[12px] font-medium`}
                >
                  {p.label}
                </span>
              </button>
            ))}
          </div>

          {/* Quote Tokens */}
          <div className="mb-2 flex justify-between items-center">
            <span className="text-[12px] text-[#777a8c]">Quote Tokens</span>
            <button className="text-[12px] text-[#777a8c]">Unselect All</button>
          </div>
          <div className="grid grid-cols-2 gap-2">
            <button className="flex items-center gap-2 px-3 py-2 bg-[#15161a] border border-[#4ade80] rounded-full">
              <i className="ri-menu-line text-[#4ade80]"></i>
              <span className="text-[#4ade80] text-[12px] font-medium">
                SOL
              </span>
            </button>
            <button className="flex items-center gap-2 px-3 py-2 bg-[#15161a] border border-[#1a1b1f] rounded-full">
              <span className="text-[#3b82f6] text-[12px] font-medium">$</span>
              <span className="text-[#3b82f6] text-[12px] font-medium">
                USDC
              </span>
            </button>
            <button className="flex items-center gap-2 px-3 py-2 bg-[#15161a] border border-[#1a1b1f] rounded-full">
              <span className="text-[#eab308] text-[12px] font-medium">1</span>
              <span className="text-[#eab308] text-[12px] font-medium">
                USD1
              </span>
            </button>
          </div>
        </div>

        {/* Footer */}
        <div className="absolute bottom-0 left-0 right-0 p-4 bg-[#101114] border-t border-[#1a1b1f] flex items-center gap-4">
          <button className="flex items-center gap-2 text-[#777a8c] font-medium text-[13px]">
            <i className="ri-restart-line"></i>
            <span>Reset Migrated</span>
          </button>
          <button className="flex-1 bg-[#526fff] text-white font-bold text-[14px] h-[44px] rounded-[8px]">
            Apply All
          </button>
        </div>
      </DialogContent>
    </Dialog>
  );
}
