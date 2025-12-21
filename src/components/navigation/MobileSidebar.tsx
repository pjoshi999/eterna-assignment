"use client";

import { cn } from "@/lib/utils/cn";

interface MobileSidebarProps {
  isOpen: boolean;
  onClose: () => void;
}

export function MobileSidebar({ isOpen, onClose }: MobileSidebarProps) {
  // We keep the component mounted to ensure smooth transitions
  // Use visibility: hidden when closed after transition to prevent interaction

  return (
    <div
      className={cn(
        "fixed inset-0 z-50 flex justify-end w-full",
        isOpen ? "pointer-events-auto" : "pointer-events-none"
      )}
    >
      {/* Backdrop */}
      <div
        className={cn(
          "absolute inset-0 bg-black/60 backdrop-blur-sm transition-opacity duration-300 ease-in-out",
          isOpen ? "opacity-100" : "opacity-0"
        )}
        onClick={onClose}
      />

      {/* Sidebar Content */}
      <div
        className={cn(
          "relative h-full w-[calc(100%-60px)] bg-[#0a0b0f] border-l border-[#1A1B1F] shadow-2xl transition-transform duration-300 ease-out flex flex-col",
          isOpen ? "translate-x-0" : "translate-x-full"
        )}
      >
        <div className="flex-1 overflow-y-auto py-8 px-5 space-y-8">
          {/* NAVIGATION Section */}
          <div>
            <h3 className="text-[#fcfcfc] text-[11px] font-medium uppercase tracking-wider mb-3 px-1">
              Navigation
            </h3>
            <div className="space-y-2">
              <SidebarItem icon="ri-eye-line" label="Vision" />
              <SidebarItem icon="ri-gift-line" label="Rewards" />
              <SidebarItem icon="ri-money-dollar-circle-line" label="Yield" />
              <SidebarItem icon="ri-star-line" label="Watchlist" />
            </div>
          </div>

          {/* SETTINGS Section */}
          <div>
            <h3 className="text-[#fcfcfc] text-[11px] font-medium uppercase tracking-wider mb-3 px-1">
              Settings
            </h3>
            <div className="space-y-2">
              <SidebarItem icon="ri-global-line" label="Regions" />
              <SidebarItem icon="ri-user-3-line" label="Account and Security" />
              <SidebarItem
                icon="ri-notification-3-line"
                label="Notifications"
              />
              <SidebarItem icon="ri-translate-2" label="Auto Translate" />
              <SidebarItem icon="ri-rocket-line" label="Feature Updates" />
            </div>
          </div>

          {/* ACCOUNT Section */}
          <div>
            <h3 className="text-[#fcfcfc] text-[11px] font-medium uppercase tracking-wider mb-3 px-1">
              Account
            </h3>
            <div className="space-y-2">
              <SidebarItem icon="ri-wallet-3-line" label="Deposit" />
              <SidebarItem icon="ri-upload-2-line" label="Withdraw" />
              <SidebarItem
                icon="ri-logout-box-r-line"
                label="Log Out"
                className="text-[#f8649a] hover:text-[#ff6666]"
                iconClassName="text-[#f8649a] group-hover:text-[#ff6666]"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function SidebarItem({
  icon,
  label,
  className,
  iconClassName,
}: {
  icon: string;
  label: string;
  className?: string;
  iconClassName?: string;
}) {
  return (
    <button
      className={cn(
        "w-full flex items-center gap-3 px-4 py-3.5 rounded-xl border border-[#22242d] bg-[#1a1b1f]/40 hover:bg-[#1a1b1f] hover:border-[#2A2B30] transition-all group text-left",
        className
      )}
    >
      <i
        className={cn(
          icon,
          "text-[18px] text-[#9CA3AF] group-hover:text-white transition-colors",
          iconClassName
        )}
      ></i>
      <span
        className={cn(
          "text-[14px] font-medium text-[#D1D5DB] group-hover:text-white transition-colors",
          className?.includes("text-[#f8649a]")
            ? "text-[#f8649a] group-hover:text-[#f8649a]"
            : ""
        )}
      >
        {label}
      </span>
    </button>
  );
}
