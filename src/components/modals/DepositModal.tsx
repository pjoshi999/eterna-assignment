/**
 * DepositModal Component
 * Deposit modal with tabs and QR code
 */

"use client";

import { useState } from "react";
import { Copy } from "lucide-react";
import { Dialog, DialogContent } from "../ui/dialog";

interface DepositModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export function DepositModal({ isOpen, onClose }: DepositModalProps) {
  const [activeTab, setActiveTab] = useState("deposit");
  const depositAddress = "EzovBS1JCw6kJnRSCY7aMQj5XuBHAqJSqwBdXxh66P";

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="max-w-md bg-[#0f1014] border border-[#1a1b1f] p-0">
        {/* Header */}
        <div className="flex items-center justify-between p-4 border-b border-[#1a1b1f]">
          <h2 className="text-base font-medium text-white">Exchange</h2>
        </div>

        {/* Tabs */}
        <div className="flex items-center gap-2 px-4 pt-4">
          <button
            onClick={() => setActiveTab("convert")}
            className={`px-4 py-2 text-sm rounded transition-colors ${
              activeTab === "convert"
                ? "bg-[rgba(255,255,255,0.05)] text-white"
                : "text-[#6b7280] hover:text-white"
            }`}
          >
            Convert
          </button>
          <button
            onClick={() => setActiveTab("deposit")}
            className={`px-4 py-2 text-sm rounded transition-colors ${
              activeTab === "deposit"
                ? "bg-[rgba(255,255,255,0.05)] text-white"
                : "text-[#6b7280] hover:text-white"
            }`}
          >
            Deposit
          </button>
          <button
            onClick={() => setActiveTab("buy")}
            className={`px-4 py-2 text-sm rounded transition-colors ${
              activeTab === "buy"
                ? "bg-[rgba(255,255,255,0.05)] text-white"
                : "text-[#6b7280] hover:text-white"
            }`}
          >
            Buy
          </button>
        </div>

        {/* Content */}
        <div className="p-4 space-y-4">
          {/* Network */}
          <div className="flex items-center gap-2">
            <div className="w-6 h-6 bg-gradient-to-br from-purple-500 to-green-400 rounded-full"></div>
            <span className="text-sm text-white">Solana</span>
          </div>

          {/* Balance */}
          <div>
            <span className="text-xs text-[#6b7280]">Balance:</span>
            <span className="text-sm text-white ml-2">0 SOL</span>
          </div>

          <p className="text-xs text-[#6b7280]">
            Only deposit Solana through the Solana network for this address
          </p>

          {/* QR Code */}
          <div className="flex items-center justify-center p-6 bg-white rounded">
            <div className="w-32 h-32 bg-black flex items-center justify-center text-white text-xs">
              QR Code
            </div>
          </div>

          {/* Address */}
          <div className="space-y-2">
            <label className="text-xs text-[#6b7280]">Deposit address</label>
            <div className="p-3 bg-[rgba(255,255,255,0.02)] rounded text-xs text-white break-all">
              {depositAddress}
            </div>
          </div>

          {/* Buy Link */}
          <p className="text-xs text-center">
            <span className="text-[#6b7280]">Don&apos;t have any Solana? </span>
            <button className="text-[#526fff] hover:underline">
              Buy through Onramper
            </button>
          </p>

          {/* Copy Button */}
          <button className="w-full py-3 bg-[#526fff] text-white rounded font-medium hover:bg-[#4156cc] transition-colors flex items-center justify-center gap-2">
            <Copy className="w-4 h-4" />
            Copy Address
          </button>
        </div>
      </DialogContent>
    </Dialog>
  );
}
