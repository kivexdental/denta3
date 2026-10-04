import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Appointment & Cancellation Policy | Denta Clinic",
  description: "Guidelines regarding appointment scheduling, cancellations, and clinic visits at Denta Clinic.",
};

export default function AppointmentPolicy() {
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
            Clinic Guidelines
          </div>
          <h1 style={{
            fontSize: "clamp(30px, 4vw, 44px)",
            fontWeight: 800,
            color: "#ffffff",
            marginBottom: 8,
          }}>
            Appointment & Cancellation Policy
          </h1>
          <p style={{ color: "#9ca3af", fontSize: 14 }}>Ensuring Respectful Scheduling for All Patients</p>
        </div>

        <div style={{
          background: "rgba(255, 255, 255, 0.03)",
          border: "1px solid rgba(255, 255, 255, 0.08)",
          borderRadius: 16,
          padding: "36px 32px",
          lineHeight: 1.8,
          fontSize: 15,
        }}>
          <h2 style={{ fontSize: 20, color: "#ffffff", marginTop: 0, marginBottom: 12 }}>1. Scheduling Consultations</h2>
          <p style={{ marginBottom: 24, color: "#d1d5db" }}>
            Appointments can be initiated via our online showcase booking request, telephone (+91 987 654 3210), or front-desk reception. Online submissions are promptly followed by a confirmation call or message from our patient care coordinator.
          </p>

          <h2 style={{ fontSize: 20, color: "#ffffff", marginTop: 24, marginBottom: 12 }}>2. Rescheduling and Cancellations</h2>
          <p style={{ marginBottom: 24, color: "#d1d5db" }}>
            We understand that unforeseen events arise. We kindly request at least <strong>24 hours advance notification</strong> for any cancellation or rescheduling so that reserved surgery time can be extended to emergency dental patients.
          </p>

          <h2 style={{ fontSize: 20, color: "#ffffff", marginTop: 24, marginBottom: 12 }}>3. Arrival Time</h2>
          <p style={{ marginBottom: 24, color: "#d1d5db" }}>
            First-time visitors are encouraged to arrive 10–15 minutes prior to their designated appointment time to complete medical history intake forms and enjoy our welcoming reception lounge.
          </p>

          <h2 style={{ fontSize: 20, color: "#ffffff", marginTop: 24, marginBottom: 12 }}>4. Public Demo Disclaimer</h2>
          <p style={{ color: "#d1d5db" }}>
            Submissions made through the interactive appointment flow on this public showcase website are simulated demonstration requests designed to display our clinic&apos;s digital patient experience.
          </p>
        </div>
      </div>
    </div>
  );
}
