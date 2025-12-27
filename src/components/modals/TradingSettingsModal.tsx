"use client";

import {
  Dialog,
  DialogContent,
  DialogTrigger,
  DialogTitle,
} from "@/components/ui/dialog";
import { useState } from "react";

interface TradingSettingsModalProps {
  children?: React.ReactNode;
}

export function TradingSettingsModal({ children }: TradingSettingsModalProps) {
  const [activeTab, setActiveTab] = useState<"preset1" | "preset2" | "preset3">(
    "preset1"
  );
  const [side, setSide] = useState<"buy" | "sell">("buy");
  const [slippage, setSlippage] = useState("20");
  const [priority, setPriority] = useState("0.001");
  const [bribe, setBribe] = useState("0.01");
  const [autoFee, setAutoFee] = useState(false);
  const [mevMode, setMevMode] = useState<"off" | "reduced" | "secure">("off");
  const [rpc, setRpc] = useState("https://a...e.com");

  return (
    <Dialog>
      <DialogTrigger asChild>{children}</DialogTrigger>
      <DialogContent className="fixed left-6 bottom-[48px] p-0 w-[320px] bg-[#101114] border border-[#1a1b1f] rounded-t-[12px] rounded-br-[12px] shadow-2xl overflow-hidden data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 top-auto translate-y-0 translate-x-0 data-[state=closed]:slide-out-to-left-0 data-[state=open]:slide-in-from-left-0">
        {/* Header */}
        <div className="flex items-center justify-between p-3 border-b border-[#1a1b1f]">
          <DialogTitle className="text-[14px] font-medium text-white">
            Trading Settings
          </DialogTitle>
          {/* Default close is usually handled by DialogPrimitive but we can add custom if needed */}
        </div>

        {/* Preset Tabs */}
        <div className="px-3 pt-3 flex items-center justify-between gap-2">
          <div className="flex items-center bg-[#15161a] p-1 rounded-[6px] border border-[#1a1b1f] w-full">
            {["preset1", "preset2", "preset3"].map((id) => (
              <button
                key={id}
                onClick={() =>
                  setActiveTab(id as "preset1" | "preset2" | "preset3")
                }
                className={`flex-1 flex items-center justify-center h-[28px] rounded-[4px] text-[12px] font-medium transition-all ${
                  activeTab === id
                    ? "bg-[#526fff] text-white shadow-sm"
                    : "text-[#777a8c] hover:text-white"
                }`}
              >
                {id === "preset1"
                  ? "PRESET 1"
                  : id === "preset2"
                  ? "PRESET 2"
                  : "PRESET 3"}
              </button>
            ))}
          </div>
        </div>

        {/* Buy/Sell Toggle */}
        <div className="px-3 py-3">
          <div className="flex items-center bg-[#15161a] p-1 rounded-[6px] border border-[#1a1b1f] w-full">
            <button
              onClick={() => setSide("buy")}
              className={`flex-1 flex items-center justify-center h-[28px] rounded-[4px] text-[12px] font-medium transition-all ${
                side === "buy"
                  ? "bg-[#052e16] text-[#4ade80]"
                  : "text-[#777a8c] hover:text-white"
              }`}
            >
              Buy Settings
            </button>
            <button
              onClick={() => setSide("sell")}
              className={`flex-1 flex items-center justify-center h-[28px] rounded-[4px] text-[12px] font-medium transition-all ${
                side === "sell"
                  ? "bg-[#2d1215] text-[#ef4444]"
                  : "text-[#777a8c] hover:text-white"
              }`}
            >
              Sell Settings
            </button>
          </div>
        </div>

        {/* Inputs */}
        <div className="px-3 pb-3 flex flex-col gap-3">
          <div className="flex gap-2">
            {/* Slippage */}
            <div className="flex-1 flex flex-col gap-1 bg-[#15161a] border border-[#1a1b1f] rounded-[6px] px-2 py-1.5 focus-within:border-[#526fff] transition-colors relative group">
              <input
                type="text"
                value={slippage}
                onChange={(e) => setSlippage(e.target.value)}
                className="w-full bg-transparent text-center text-white text-[14px] font-bold outline-none font-sans"
              />
              <span className="absolute top-1.5 right-6 text-[10px] text-[#777a8c] font-medium">
                %
              </span>
              <div className="flex items-center justify-center gap-1 text-[#777a8c] text-[9px] font-bold uppercase tracking-wider">
                <i className="ri-settings-4-line"></i>
                <span>Slippage</span>
              </div>
            </div>

            {/* Priority */}
            <div className="flex-1 flex flex-col gap-1 bg-[#15161a] border border-[#1a1b1f] rounded-[6px] px-2 py-1.5 focus-within:border-[#526fff] transition-colors">
              <input
                type="text"
                value={priority}
                onChange={(e) => setPriority(e.target.value)}
                className="w-full bg-transparent text-center text-white text-[14px] font-bold outline-none font-sans"
              />
              <div className="flex items-center justify-center gap-1 text-[#F59E0B] text-[9px] font-bold uppercase tracking-wider">
                <i className="ri-gas-station-line"></i>
                <span>Priority</span>
              </div>
            </div>

            {/* Bribe */}
            <div className="flex-1 flex flex-col gap-1 bg-[#15161a] border border-[#1a1b1f] rounded-[6px] px-2 py-1.5 focus-within:border-[#526fff] transition-colors">
              <input
                type="text"
                value={bribe}
                onChange={(e) => setBribe(e.target.value)}
                className="w-full bg-transparent text-center text-white text-[14px] font-bold outline-none font-sans"
              />
              <div className="flex items-center justify-center gap-1 text-[#777a8c] text-[9px] font-bold uppercase tracking-wider">
                <i className="ri-eye-line"></i>
                <span>Bribe</span>
              </div>
            </div>
          </div>

          {/* Fee Options */}
          <div className="flex items-center gap-3">
            <div
              className="flex items-center gap-2 cursor-pointer group"
              onClick={() => setAutoFee(!autoFee)}
            >
              <div
                className={`w-3.5 h-3.5 rounded-[3px] border flex items-center justify-center transition-colors ${
                  autoFee
                    ? "bg-[#526fff] border-[#526fff]"
                    : "border-[#2a2b30] group-hover:border-[#526fff]"
                }`}
              >
                {autoFee && (
                  <i className="ri-check-line text-black text-[10px]" />
                )}
              </div>
              <span className="text-[12px] text-white font-medium">
                Auto Fee
              </span>
            </div>

            <div className="flex-1 flex items-center bg-[#15161a] border border-[#1a1b1f] rounded-[6px] px-3 h-[32px] gap-2">
              <span className="text-[11px] text-[#777a8c] font-bold uppercase tracking-wide">
                Max Fee
              </span>
              <input
                type="text"
                defaultValue="0.1"
                className="flex-1 bg-transparent text-right text-white text-[12px] font-medium outline-none"
              />
            </div>
          </div>

          {/* MEV Mode */}
          <div className="flex items-center justify-between gap-3">
            <div className="flex items-center gap-1 text-[#c8c9d1] text-[12px] font-medium">
              <span>MEV Mode</span>
              <i className="ri-information-line text-[#777a8c]"></i>
            </div>
            <div className="flex items-center bg-[#15161a] p-0.5 rounded-[6px] border border-[#1a1b1f]">
              <button
                onClick={() => setMevMode("off")}
                className={`px-3 py-1 rounded-[4px] text-[11px] font-bold flex items-center gap-1 transition-all ${
                  mevMode === "off"
                    ? "bg-[#526fff] text-white"
                    : "text-[#777a8c] hover:text-white"
                }`}
              >
                <i className="ri-prohibited-line"></i>
                Off
              </button>
              <button
                onClick={() => setMevMode("reduced")}
                className={`px-3 py-1 rounded-[4px] text-[11px] font-bold flex items-center gap-1 transition-all ${
                  mevMode === "reduced"
                    ? "bg-[#526fff] text-white"
                    : "text-[#777a8c] hover:text-white"
                }`}
              >
                <i className="ri-shield-check-line"></i>
                Reduced
              </button>
              <button
                onClick={() => setMevMode("secure")}
                className={`px-3 py-1 rounded-[4px] text-[11px] font-bold flex items-center gap-1 transition-all ${
                  mevMode === "secure"
                    ? "bg-[#526fff] text-white"
                    : "text-[#777a8c] hover:text-white"
                }`}
              >
                <i className="ri-lock-line"></i>
                Secure
              </button>
            </div>
          </div>

          {/* RPC */}
          <div className="flex items-center bg-[#15161a] border border-[#1a1b1f] rounded-[6px] px-3 h-[36px] gap-2">
            <span className="text-[11px] text-[#777a8c] font-bold uppercase tracking-wide">
              RPC
            </span>
            <input
              type="text"
              value={rpc}
              onChange={(e) => setRpc(e.target.value)}
              className="flex-1 bg-transparent text-white text-[12px] font-medium outline-none truncate"
            />
          </div>

          {/* Continue Button */}
          <button className="w-full h-[36px] bg-[#526fff] hover:bg-[#425ae0] text-white text-[13px] font-bold rounded-[6px] transition-colors mt-1">
            Continue
          </button>
        </div>
      </DialogContent>
    </Dialog>
  );
}
