"use client";
import React, { useEffect, useRef } from "react";

type ModalProps = {
  open: boolean;
  onClose: () => void;
  title?: string;
  children: React.ReactNode;
  description?: string;
  size?: "sm" | "md" | "lg" | "xl";
};

export function Modal({ open, onClose, title, children, description, size = "md" }: ModalProps) {
  const panelRef = useRef<HTMLDivElement>(null);

  // Lock scroll when open
  useEffect(() => {
    if (!open) return;
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = prev;
    };
  }, [open]);

  // Focus management
  useEffect(() => {
    if (open) {
      // Defer to ensure element is in DOM
      setTimeout(() => panelRef.current?.focus(), 0);
    }
  }, [open]);

  if (!open) return null;

  const sizes: Record<string, string> = {
    sm: "max-w-md",
    md: "max-w-lg",
    lg: "max-w-2xl",
    xl: "max-w-3xl",
  };

  function onKeyDown(e: React.KeyboardEvent) {
    if (e.key === "Escape") onClose();
  }

  return (
    <div className="fixed inset-0 z-50" onKeyDown={onKeyDown}>
      {/* Overlay */}
      <div
        className="absolute inset-0 bg-black/50 backdrop-blur-sm animate-overlay-in"
        onClick={onClose}
        aria-hidden
      />

      {/* Panel */}
      <div className="absolute inset-0 flex items-center justify-center p-4">
        <div
          ref={panelRef}
          role="dialog"
          aria-modal="true"
          aria-labelledby={title ? "modal-title" : undefined}
          tabIndex={-1}
          className={`w-full ${sizes[size]} outline-none rounded-2xl panel-modern text-foreground shadow-2xl animate-modal-in`}
          onClick={(e) => e.stopPropagation()}
        >
          <div className="flex items-center justify-between px-5 py-4 hairline-b">
            <div>
              {title && (
                <h2 id="modal-title" className="text-base font-semibold tracking-tight">
                  {title}
                </h2>
              )}
              {description && <p className="mt-0.5 text-xs text-muted-foreground">{description}</p>}
            </div>
            <button
              aria-label="Close"
              className="rounded-md px-2 py-1 text-sm hover:bg-muted"
              onClick={onClose}
            >
              Close
            </button>
          </div>
          <div className="px-5 py-4">{children}</div>
        </div>
      </div>
    </div>
  );
}


