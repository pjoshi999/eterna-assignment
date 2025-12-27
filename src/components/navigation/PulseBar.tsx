import Image from "next/image";
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { DisplaySettings } from "./DisplaySettings";
import { BlacklistModal } from "./modals/BlacklistModal";
import { HotkeysModal } from "./modals/HotkeysModal";
import { AlertsModal } from "./modals/AlertsModal";
import { SnipeSettingsModal } from "./modals/SnipeSettingsModal";
import { useState } from "react";
import { MobileSettingsAccordion } from "./MobileSettingsAccordion";
import { WalletSelector } from "./modals/WalletSelector";

interface PulseBarProps {
  activeMobileTab?: string;
  onTabChange?: (tab: string) => void;
}

export function PulseBar({
  activeMobileTab = "new",
  onTabChange,
}: PulseBarProps) {
  const [isMobileSettingsOpen, setIsMobileSettingsOpen] = useState(false);

  return (
    <div className="w-full h-auto lg:h-12 bg-main flex flex-col lg:flex-row items-center justify-between px-2 sm:px-4 lg:px-0 mb-2">
      <div className="lg:hidden w-full flex flex-col">
        <div className="flex items-center w-full gap-3 overflow-hidden h-12 justify-between">
          <div className="flex items-center gap-2 flex-shrink-0">
            <h1 className="text-[18px] font-medium text-white sm:block hidden">
              Pulse
            </h1>
            <button className="relative flex items-center justify-center sm:w-[24px] sm:h-[24px] w-[32px] h-[32px] rounded-full bg-border-medium/60">
              <Image
                src="https://axiom.trade/images/sol-fill.svg"
                alt="sol"
                width={14}
                height={14}
                className="sm:w-[14px] sm:h-[14px] w-[20px] h-[20px]"
              />
            </button>
            <button className="relative flex items-center justify-center sm:w-[24px] sm:h-[24px] w-[32px] h-[32px] rounded-full">
              <i className="ri-hexagon-line text-accent-amber text-[20px]"></i>
            </button>
          </div>

          <div className="flex-1 flex items-center justify-center gap-1 overflow-x-auto no-scrollbar mask-gradient-right">
            <button
              onClick={() => onTabChange?.("new")}
              className={`whitespace-nowrap px-3 py-1 text-[13px] font-medium rounded-full transition-colors ${
                activeMobileTab === "new"
                  ? "bg-[#2A2B30] text-white"
                  : "bg-transparent text-secondary hover:text-white"
              }`}
            >
              New Pairs
            </button>
            <button
              onClick={() => onTabChange?.("final")}
              className={`whitespace-nowrap px-3 py-1 text-[13px] font-medium rounded-full transition-colors ${
                activeMobileTab === "final"
                  ? "bg-[#2A2B30] text-white"
                  : "bg-transparent text-secondary hover:text-white"
              }`}
            >
              Final Stretch
            </button>
            <button
              onClick={() => onTabChange?.("migrated")}
              className={`whitespace-nowrap px-3 py-1 text-[13px] font-medium rounded-full transition-colors ${
                activeMobileTab === "migrated"
                  ? "bg-[#2A2B30] text-white"
                  : "bg-transparent text-secondary hover:text-white"
              }`}
            >
              Migrated
            </button>
          </div>

          <div className="flex items-center gap-2 flex-shrink-0">
            <button
              onClick={() => setIsMobileSettingsOpen(!isMobileSettingsOpen)}
              className={`flex items-center justify-center w-[32px] h-[32px] rounded-full transition-colors ${
                isMobileSettingsOpen
                  ? "bg-accent-blue text-white"
                  : "bg-transparent text-secondary"
              }`}
            >
              <i className="ri-settings-3-line text-[18px]"></i>
            </button>
          </div>
        </div>

        <MobileSettingsAccordion isOpen={isMobileSettingsOpen} />
      </div>

      <div className="hidden lg:flex w-full items-center justify-between">
        <div className="flex items-center gap-3">
          <h1 className="text-[20px] font-medium text-white">Pulse</h1>
          <div className="flex items-center gap-2">
            <Tooltip>
              <TooltipTrigger asChild>
                <button className="relative flex items-center justify-center w-[32px] h-[32px] rounded-full bg-[#1e2028] hover:bg-hover-dark transition-colors">
                  <Image
                    src="https://axiom.trade/images/sol-fill.svg"
                    alt="sol"
                    width={18}
                    height={18}
                  />
                </button>
              </TooltipTrigger>
              <TooltipContent>
                <p>Solana Network</p>
              </TooltipContent>
            </Tooltip>
            <Tooltip>
              <TooltipTrigger asChild>
                <button className="relative flex items-center justify-center w-[32px] h-[32px] rounded-full hover:bg-hover-dark transition-colors group">
                  <i className="ri-box-3-line text-[#D97706] text-[18px]"></i>
                </button>
              </TooltipTrigger>
              <TooltipContent>
                <p>Other Networks</p>
              </TooltipContent>
            </Tooltip>
          </div>
        </div>

        <div className="flex items-center gap-3">
          <Tooltip>
            <TooltipTrigger asChild>
              <button className="w-8 h-8 flex items-center justify-center rounded-full hover:bg-border-medium transition-colors text-tertiary hover:text-white">
                <i className="ri-question-line text-[20px]"></i>
              </button>
            </TooltipTrigger>
            <TooltipContent>
              <p>Help with Pulse Filters, Settings</p>
            </TooltipContent>
          </Tooltip>

          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <button className="h-[32px] px-3 flex items-center gap-2 rounded-full bg-border-medium border border-border-medium hover:bg-border-medium transition-colors group data-[state=open]:bg-hover-dark">
                <i className="ri-list-check text-white text-[18px] font-medium group-hover:text-white transition-colors"></i>
                <span className="text-[14px] font-bold text-white">
                  Display
                </span>
                <i className="ri-arrow-down-s-line text-white text-[18px] group-hover:text-white transition-colors"></i>
              </button>
            </DropdownMenuTrigger>
            <DropdownMenuContent
              align="end"
              sideOffset={8}
              className="bg-main border border-border-light p-0 rounded-[12px] shadow-2xl"
            >
              <DisplaySettings />
            </DropdownMenuContent>
          </DropdownMenu>

          <div className="flex items-center gap-1">
            <BlacklistModal tooltip="Saved Filters">
              <button className="w-8 h-8 flex items-center justify-center rounded hover:bg-border-medium transition-colors text-tertiary hover:text-white data-[state=open]:bg-border-medium data-[state=open]:text-white">
                <i className="ri-bookmark-line text-[18px]"></i>
              </button>
            </BlacklistModal>
            <HotkeysModal tooltip="Keyboard Shortcuts">
              <button className="w-8 h-8 flex items-center justify-center rounded hover:bg-border-medium transition-colors text-tertiary hover:text-white data-[state=open]:bg-border-medium data-[state=open]:text-white">
                <i className="ri-keyboard-line text-[18px]"></i>
              </button>
            </HotkeysModal>
            <AlertsModal tooltip="Audio Settings">
              <button className="w-8 h-8 flex items-center justify-center rounded hover:bg-border-medium transition-colors text-tertiary hover:text-white data-[state=open]:bg-border-medium data-[state=open]:text-white">
                <i className="ri-volume-up-line text-[18px]"></i>
              </button>
            </AlertsModal>
            <SnipeSettingsModal tooltip="Toggle Scope">
              <button className="w-8 h-8 flex items-center justify-center rounded hover:bg-border-medium transition-colors text-tertiary hover:text-white data-[state=open]:bg-border-medium data-[state=open]:text-white">
                <i className="ri-crosshair-2-line text-[18px]"></i>
              </button>
            </SnipeSettingsModal>
          </div>

          <WalletSelector>
            <button className="h-[32px] px-3 rounded-full bg-border-medium border border-border-medium flex items-center gap-3 hover:bg-border-medium transition-colors group data-[state=open]:bg-hover-dark">
              <div className="flex items-center gap-2">
                <i className="ri-wallet-3-line text-[18px] text-secondary group-hover:text-white transition-colors"></i>
                <span className="text-[14px] font-medium text-white">1</span>
              </div>
              <div className="fill-current w-[14px]">
                <svg viewBox="0 0 128 128" className="w-full text-[#4ade80]">
                  <path
                    d="M87.417 40.573H28.452l14.86-25.688h58.966l-14.86 25.688Z"
                    fill="currentcolor"
                  ></path>
                  <path
                    d="M100.99 67.576H41.67L26.34 40.574h59.32l15.33 27.002Z"
                    fill="currentcolor"
                  ></path>
                  <path
                    d="M40.584 87.426h58.965l-14.86 25.688H25.723l14.86-25.688Z"
                    fill="currentcolor"
                  ></path>
                </svg>
              </div>
              <span className="text-[14px] font-medium text-white">0</span>
              <i className="ri-arrow-down-s-line text-tertiary text-[18px] ml-1 group-hover:text-white transition-colors"></i>
            </button>
          </WalletSelector>
        </div>
      </div>
    </div>
  );
}
