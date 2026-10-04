import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Cookie Policy | Denta Clinic",
  description: "Information regarding cookie utilization and browser tracking at Denta Clinic.",
};

export default function CookiePolicy() {
  return (
    <div style={{
      minHeight: "100vh",
      background: "#0c0d0e",
      color: "#e5e7eb",
      fontFamily: "var(--font-sans, system-ui, sans-serif)",
      padding: "60px 24px",
    }}>
      <div style={{ maxWidth: 840, margin: "0 auto" }}>
        <div style={{ marginBottom: 32 }}>
          <Link
            href="/site"
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: 8,
              color: "#4ade80",
              textDecoration: "none",
              fontSize: 14,
              fontWeight: 600,
              marginBottom: 20,
            }}
          >
            ← Return to Denta Homepage
          </Link>
          <div style={{
            display: "inline-block",
            padding: "4px 12px",
            background: "rgba(74, 222, 128, 0.15)",
            color: "#4ade80",
            borderRadius: 999,
            fontSize: 12,
            fontWeight: 700,
            letterSpacing: "0.1em",
            textTransform: "uppercase",
            marginBottom: 12,
          }}>
            Digital Privacy
          </div>
          <h1 style={{
            fontSize: "clamp(30px, 4vw, 44px)",
            fontWeight: 800,
            color: "#ffffff",
            marginBottom: 8,
          }}>
            Cookie Policy
          </h1>
          <p style={{ color: "#9ca3af", fontSize: 14 }}>Transparent Web Operations</p>
        </div>

        <div style={{
          background: "rgba(255, 255, 255, 0.03)",
          border: "1px solid rgba(255, 255, 255, 0.08)",
          borderRadius: 16,
          padding: "36px 32px",
          lineHeight: 1.8,
          fontSize: 15,
        }}>
          <h2 style={{ fontSize: 20, color: "#ffffff", marginTop: 0, marginBottom: 12 }}>1. What Are Cookies?</h2>
          <p style={{ marginBottom: 24, color: "#d1d5db" }}>
            Cookies are standard miniature text files deposited on your computing device when visiting websites. They facilitate essential interface functionality, maintain navigational preferences, and provide anonymous performance metrics.
          </p>

          <h2 style={{ fontSize: 20, color: "#ffffff", marginTop: 24, marginBottom: 12 }}>2. How Denta Uses Cookies</h2>
          <ul style={{ paddingLeft: 24, marginBottom: 24, color: "#d1d5db" }}>
            <li><strong>Strictly Necessary:</strong> Essential for interface navigation, rendering responsive video layers, and executing appointment modal interactions.</li>
            <li><strong>Functional:</strong> Memorizes device preview configurations and volume preferences.</li>
            <li><strong>Performance:</strong> Anonymous aggregated telemetry to detect page speed and Core Web Vitals.</li>
          </ul>

          <h2 style={{ fontSize: 20, color: "#ffffff", marginTop: 24, marginBottom: 12 }}>3. Managing Preferences</h2>
          <p style={{ color: "#d1d5db" }}>
            You may disable or clear cookies through your browser privacy settings at any time without forfeiting access to public clinical treatment descriptions or consultation contact details.
          </p>
        </div>
      </div>
    </div>
  );
}
