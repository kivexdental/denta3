import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Terms and Conditions | Denta Clinic",
  description: "Terms of service and website usage conditions for Denta Clinic.",
};

export default function TermsAndConditions() {
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
            Terms of Use
          </div>
          <h1 style={{
            fontSize: "clamp(30px, 4vw, 44px)",
            fontWeight: 800,
            color: "#ffffff",
            marginBottom: 8,
          }}>
            Terms and Conditions
          </h1>
          <p style={{ color: "#9ca3af", fontSize: 14 }}>Effective: October 2026</p>
        </div>

        <div style={{
          background: "rgba(255, 255, 255, 0.03)",
          border: "1px solid rgba(255, 255, 255, 0.08)",
          borderRadius: 16,
          padding: "36px 32px",
          lineHeight: 1.8,
          fontSize: 15,
        }}>
          <h2 style={{ fontSize: 20, color: "#ffffff", marginTop: 0, marginBottom: 12 }}>1. Agreement to Terms</h2>
          <p style={{ marginBottom: 24, color: "#d1d5db" }}>
            By browsing or interacting with this website, you agree to comply with and be bound by the following terms of use. If you do not agree with any part of these terms, please refrain from using our online portal.
          </p>

          <h2 style={{ fontSize: 20, color: "#ffffff", marginTop: 24, marginBottom: 12 }}>2. Clinical Advice and Educational Scope</h2>
          <p style={{ marginBottom: 24, color: "#d1d5db" }}>
            All content published on this website—including articles, before/after case studies, service descriptions, and pricing guidelines—is intended for informational and educational purposes only. Nothing on this website constitutes a formal clinical dental diagnosis.
          </p>

          <h2 style={{ fontSize: 20, color: "#ffffff", marginTop: 24, marginBottom: 12 }}>3. Intellectual Property</h2>
          <p style={{ marginBottom: 24, color: "#d1d5db" }}>
            All trademarks, logos, visual designs, imagery, and text published on this site are the property of Denta Clinic or licensed providers. Unauthorized duplication or redistribution without written authorization is prohibited.
          </p>

          <h2 style={{ fontSize: 20, color: "#ffffff", marginTop: 24, marginBottom: 12 }}>4. Modifications to Terms</h2>
          <p style={{ color: "#d1d5db" }}>
            We reserve the right to revise these terms at any time to reflect updated clinical practices or legal requirements. Continued use of the website following amendments implies acceptance of revised terms.
          </p>
        </div>
      </div>
    </div>
  );
}
