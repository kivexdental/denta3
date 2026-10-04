"use client";

import { useState, useEffect } from "react";

type DeviceMode = "pc" | "tablet" | "phone" | "fullscreen";

export default function PreviewToolbarWrapper() {
  const [mode, setMode] = useState<DeviceMode>("pc");
  const [toolbarHidden, setToolbarHidden] = useState<boolean>(false);

  // Keyboard shortcut to toggle or switch devices
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      // Toggle toolbar with Alt+T
      if (e.altKey && e.key.toLowerCase() === "t") {
        setToolbarHidden((prev) => !prev);
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, []);

  return (
    <div className={`kivex-app-wrapper ${toolbarHidden ? "toolbar-collapsed" : ""}`}>
      {/* ============================================================
         PERMANENT KIVEX TECHNOLOGY TOOLBAR
         Background: #F5EFE5
         Branding: KIVEX (#2D5FC7) + Technology (#E8B62A)
         ============================================================ */}
      {!toolbarHidden && (
        <header
          className="kivex-toolbar"
          role="toolbar"
          aria-label="KIVEX Technology Website Preview Toolbar"
        >
          {/* Permanent KIVEX Brand lockup */}
          <div className="kivex-brand-lockup" aria-label="KIVEX Technology">
            <span className="kivex-brand-name">KIVEX</span>
            <span className="kivex-brand-tech">Technology</span>
          </div>

          {/* Viewport Preview Device Controls */}
          <nav className="kivex-device-controls" aria-label="Device Viewport Switcher">
            <button
              type="button"
              className={`kivex-device-btn ${mode === "pc" ? "active" : ""}`}
              onClick={() => setMode("pc")}
              aria-pressed={mode === "pc"}
              aria-label="Preview website in PC desktop viewport (1280px)"
            >
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} width={16} height={16}>
                <rect x="2" y="3" width="20" height="14" rx="2" />
                <line x1="8" y1="21" x2="16" y2="21" />
                <line x1="12" y1="17" x2="12" y2="21" />
              </svg>
              <span>PC</span>
            </button>

            <button
              type="button"
              className={`kivex-device-btn ${mode === "tablet" ? "active" : ""}`}
              onClick={() => setMode("tablet")}
              aria-pressed={mode === "tablet"}
              aria-label="Preview website in Tablet viewport (768px)"
            >
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} width={16} height={16}>
                <rect x="4" y="2" width="16" height="20" rx="3" />
                <line x1="12" y1="18" x2="12.01" y2="18" strokeWidth={3} strokeLinecap="round" />
              </svg>
              <span>Tablet</span>
            </button>

            <button
              type="button"
              className={`kivex-device-btn ${mode === "phone" ? "active" : ""}`}
              onClick={() => setMode("phone")}
              aria-pressed={mode === "phone"}
              aria-label="Preview website in Phone viewport (390px)"
            >
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} width={16} height={16}>
                <rect x="5" y="2" width="14" height="20" rx="3" />
                <line x1="12" y1="18" x2="12.01" y2="18" strokeWidth={3} strokeLinecap="round" />
              </svg>
              <span>Phone</span>
            </button>

            <button
              type="button"
              className={`kivex-device-btn ${mode === "fullscreen" ? "active" : ""}`}
              onClick={() => setMode("fullscreen")}
              aria-pressed={mode === "fullscreen"}
              aria-label="Preview website in Fullscreen natural viewport"
            >
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} width={16} height={16}>
                <polyline points="15 3 21 3 21 9" />
                <polyline points="9 21 3 21 3 15" />
                <line x1="21" y1="3" x2="14" y2="10" />
                <line x1="3" y1="21" x2="10" y2="14" />
              </svg>
              <span>Fullscreen</span>
            </button>
          </nav>

          {/* Close Toolbar Cross Button */}
          <div className="kivex-toolbar-right">
            <button
              type="button"
              className="kivex-close-btn"
              onClick={() => setToolbarHidden(true)}
              aria-label="Close preview toolbar"
              title="Close toolbar (reopen anytime via bottom-right button)"
            >
              ✕
            </button>
          </div>
        </header>
      )}

      {/* Floating KIVEX Reopen Control when toolbar is hidden */}
      {toolbarHidden && (
        <button
          type="button"
          className="kivex-reopen-btn"
          onClick={() => setToolbarHidden(false)}
          aria-label="Reopen KIVEX Technology preview toolbar"
          title="Reopen KIVEX Toolbar"
        >
          <div className="kivex-reopen-content">
            <span className="kivex-reopen-brand">KIVEX</span>
            <span className="kivex-reopen-label">Preview</span>
          </div>
        </button>
      )}

      {/* ============================================================
         PREVIEW WORKSPACE & REAL VIEWPORT DEVICE FRAMES
         ============================================================ */}
      <main className={`kivex-workspace mode-${mode} ${toolbarHidden ? "fullscreen-target" : ""}`}>
        <div className={`kivex-device-frame-container frame-${mode}`}>
          {/* Device Mockup Header for Phone and Tablet */}
          {mode === "phone" && (
            <div className="kivex-phone-header" aria-hidden="true">
              <div className="kivex-dynamic-island" />
            </div>
          )}

          {mode === "tablet" && (
            <div className="kivex-tablet-header" aria-hidden="true">
              <div className="kivex-camera-dot" />
            </div>
          )}

          {mode === "pc" && (
            <div className="kivex-pc-header" aria-hidden="true">
              <div className="kivex-pc-dots">
                <span className="dot dot-red" />
                <span className="dot dot-yellow" />
                <span className="dot dot-green" />
              </div>
              <div className="kivex-pc-address-bar">
                <span className="lock-icon">🔒</span>
                <span className="address-url">denta.local/site • Desktop 1280px Viewport</span>
              </div>
            </div>
          )}

          {/* REAL VIEWPORT TARGET IFRAME */}
          <iframe
            src="/site"
            title="Denta Website Device Viewport Preview"
            className="kivex-preview-iframe"
          />
        </div>
      </main>
    </div>
  );
}
