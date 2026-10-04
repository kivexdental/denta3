import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Medical & Dental Disclaimer | Denta Clinic",
  description: "Medical disclaimer and clinical advice guidelines for Denta Clinic website visitors.",
};

export default function MedicalDisclaimer() {
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
            Medical Transparency
          </div>
          <h1 style={{
            fontSize: "clamp(30px, 4vw, 44px)",
            fontWeight: 800,
            color: "#ffffff",
            marginBottom: 8,
          }}>
            Medical & Dental Disclaimer
          </h1>
          <p style={{ color: "#9ca3af", fontSize: 14 }}>Published for Patient Safety and Transparency</p>
        </div>

        <div style={{
          background: "rgba(255, 255, 255, 0.03)",
          border: "1px solid rgba(255, 255, 255, 0.08)",
          borderRadius: 16,
          padding: "36px 32px",
          lineHeight: 1.8,
          fontSize: 15,
        }}>
          <div style={{
            padding: "16px 20px",
            background: "rgba(245, 158, 11, 0.1)",
            borderLeft: "4px solid #f59e0b",
            borderRadius: 8,
            marginBottom: 24,
            color: "#fbbf24",
            fontSize: 14,
            fontWeight: 500,
          }}>
            ⚠️ Notice: The information presented on this website does not replace direct diagnosis or treatment by a licensed dental professional.
          </div>

          <h2 style={{ fontSize: 20, color: "#ffffff", marginTop: 0, marginBottom: 12 }}>1. No Doctor-Patient Relationship</h2>
          <p style={{ marginBottom: 24, color: "#d1d5db" }}>
            Interacting with this website, submitting an appointment demonstration request, or viewing clinical case studies does not establish a formal doctor-patient relationship. Such a relationship is established exclusively following an in-person clinical examination and medical consultation at our clinic.
          </p>

          <h2 style={{ fontSize: 20, color: "#ffffff", marginTop: 24, marginBottom: 12 }}>2. Clinical Outcomes and Before/After Demonstrations</h2>
          <p style={{ marginBottom: 24, color: "#d1d5db" }}>
            The Before & After cases showcased on our website represent authentic dental treatments performed with modern dental techniques. However, individual clinical results vary based on oral anatomy, periodontal health, patient compliance, and bone density. No treatment outcome can be universally guaranteed.
          </p>

          <h2 style={{ fontSize: 20, color: "#ffffff", marginTop: 24, marginBottom: 12 }}>3. Emergency Situations</h2>
          <p style={{ color: "#d1d5db" }}>
            If you are experiencing acute dental trauma, severe facial swelling, uncontrolled bleeding, or difficulty breathing, do not rely on digital form submissions. Contact our emergency line at +91 987 654 3210 immediately or visit the nearest hospital emergency room.
          </p>
        </div>
      </div>
    </div>
  );
}
