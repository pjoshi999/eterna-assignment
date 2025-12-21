/**
 * Toast Component - Axiom Trade Style
 * Minimal toast notification matching Axiom design
 */

"use client";

import {
  createContext,
  useContext,
  useState,
  useCallback,
  ReactNode,
} from "react";
import { X } from "lucide-react";

interface Toast {
  id: string;
  message: string;
  icon?: ReactNode;
}

interface ToastContextType {
  showToast: (message: string, icon?: ReactNode) => void;
}

const ToastContext = createContext<ToastContextType | undefined>(undefined);

export function ToastProvider({ children }: { children: ReactNode }) {
  const [toasts, setToasts] = useState<Toast[]>([]);

  const showToast = useCallback((message: string, icon?: ReactNode) => {
    const id = Math.random().toString(36).substring(7);
    const toast: Toast = { id, message, icon };

    setToasts((prev) => [...prev, toast]);

    // Auto-dismiss after 3 seconds
    setTimeout(() => {
      setToasts((prev) => prev.filter((t) => t.id !== id));
    }, 3000);
  }, []);

  const removeToast = (id: string) => {
    setToasts((prev) => prev.filter((t) => t.id !== id));
  };

  return (
    <ToastContext.Provider value={{ showToast }}>
      {children}

      {/* Toast Container */}
      <div className="fixed top-4 left-1/2 -translate-x-1/2 z-50 flex flex-col gap-2 pointer-events-none">
        {toasts.map((toast) => (
          <div
            key={toast.id}
            className="pointer-events-auto flex items-center gap-3 px-4 py-3 bg-[#1a1d29] border border-[#2a2d3a] rounded-lg shadow-xl animate-in slide-in-from-top-2 duration-200"
          >
            {toast.icon && (
              <div className="text-[#526fff] flex-shrink-0">{toast.icon}</div>
            )}
            <span className="text-white text-sm font-medium">
              {toast.message}
            </span>
            <button
              onClick={() => removeToast(toast.id)}
              className="text-[#6b7280] hover:text-white transition-colors ml-2"
            >
              <X className="w-4 h-4" />
            </button>
          </div>
        ))}
      </div>
    </ToastContext.Provider>
  );
}

export function useToast() {
  const context = useContext(ToastContext);
  if (!context) {
    throw new Error("useToast must be used within ToastProvider");
  }
  return context;
}
