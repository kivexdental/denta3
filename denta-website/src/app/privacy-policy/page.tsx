import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacy Policy | Denta Clinic",
  description: "Privacy policy and patient data handling guidelines for Denta Clinic.",
};

export default function PrivacyPolicy() {
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
            Legal Compliance
          </div>
          <h1 style={{
            fontSize: "clamp(30px, 4vw, 44px)",
            fontWeight: 800,
            color: "#ffffff",
            marginBottom: 8,
          }}>
            Privacy Policy
          </h1>
          <p style={{ color: "#9ca3af", fontSize: 14 }}>Last updated: October 2026 • Version 2.1</p>
        </div>

        <div style={{
          background: "rgba(255, 255, 255, 0.03)",
          border: "1px solid rgba(255, 255, 255, 0.08)",
          borderRadius: 16,
          padding: "36px 32px",
          lineHeight: 1.8,
          fontSize: 15,
        }}>
          <h2 style={{ fontSize: 20, color: "#ffffff", marginTop: 0, marginBottom: 12 }}>1. Overview and Commitment</h2>
          <p style={{ marginBottom: 24, color: "#d1d5db" }}>
            At Denta Clinic, your privacy and health confidentiality are of utmost importance. This Privacy Policy details how we collect, use, and protect any information you submit via our public website. We uphold strict patient confidentiality standards in alignment with healthcare regulations.
          </p>

          <h2 style={{ fontSize: 20, color: "#ffffff", marginTop: 24, marginBottom: 12 }}>2. Information Collected Through Public Forms</h2>
          <p style={{ marginBottom: 16, color: "#d1d5db" }}>
            Our public showcase appointment flow and inquiry forms collect minimal contact details necessary to schedule your consultation:
          </p>
          <ul style={{ paddingLeft: 24, marginBottom: 24, color: "#d1d5db" }}>
            <li>Full Name and contact telephone number</li>
            <li>Email address for appointment reminders and booking confirmations</li>
            <li>Preferred clinical service (e.g. Preventive Care, Dental Implants, Whitening)</li>
            <li>Preferred consultation time and doctor preference</li>
          </ul>

          <h2 style={{ fontSize: 20, color: "#ffffff", marginTop: 24, marginBottom: 12 }}>3. How Your Information Is Used</h2>
          <p style={{ marginBottom: 24, color: "#d1d5db" }}>
            Information collected is strictly utilized to:
            <br />• Coordinate dental consultation inquiries and schedule clinic appointments.
            <br />• Respond promptly to patient questions submitted through our contact channels.
            <br />• We never sell, rent, or trade patient personal data to third-party marketing services.
          </p>

          <h2 style={{ fontSize: 20, color: "#ffffff", marginTop: 24, marginBottom: 12 }}>4. Public Website Demonstration Note</h2>
          <p style={{ marginBottom: 24, color: "#d1d5db" }}>
            The appointment scheduling module hosted on this public interface serves as a functional clinical presentation flow. Real medical records and confidential health documentation are handled exclusively during in-person clinical intake under medical compliance protocols.
          </p>

          <h2 style={{ fontSize: 20, color: "#ffffff", marginTop: 24, marginBottom: 12 }}>5. Contact Our Privacy Officer</h2>
          <p style={{ color: "#d1d5db" }}>
            For privacy inquiries or data requests, contact our administration desk:
            <br /><strong>Email:</strong> privacy@denta-clinic.example
            <br /><strong>Phone:</strong> +91 987 654 3210
            <br /><strong>Address:</strong> 123 Dental Care Street, Smile City, SC 12345
          </p>
        </div>
      </div>
    </div>
  );
}
