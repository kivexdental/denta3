import Link from "next/link";

export default function NotFound() {
  return (
    <main className="not-found-container" style={{
      minHeight: "100vh",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      padding: "40px 20px",
      background: "radial-gradient(circle at center, #111827 0%, #030712 100%)",
      color: "#ffffff",
      fontFamily: "var(--font-sans, system-ui, sans-serif)",
      textAlign: "center",
    }}>
      <div style={{ maxWidth: 540 }}>
        <div style={{
          width: 72,
          height: 72,
          margin: "0 auto 24px",
          background: "rgba(74, 222, 128, 0.15)",
          border: "1px solid rgba(74, 222, 128, 0.3)",
          borderRadius: 20,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          color: "#4ade80",
        }}>
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} width={36} height={36}>
            <path d="M12 2C8.5 2 5 5 5 8c0 2 1 4 1 7s1 5 2.5 5 2-2 3.5-2 2 2 3.5 2S17 17 17 15s1-5 1-7c0-3-3.5-6-6-6z"/>
          </svg>
        </div>

        <div style={{
          display: "inline-block",
          padding: "6px 14px",
          background: "rgba(255, 255, 255, 0.08)",
          borderRadius: 999,
          fontSize: 13,
          fontWeight: 600,
          letterSpacing: "0.08em",
          color: "#9ca3af",
          marginBottom: 16,
          textTransform: "uppercase",
        }}>
          404 Error • Page Not Found
        </div>

        <h1 style={{
          fontSize: "clamp(32px, 5vw, 48px)",
          fontWeight: 800,
          lineHeight: 1.15,
          marginBottom: 16,
        }}>
          Lost Your <span style={{ color: "#4ade80", fontStyle: "italic" }}>Smile?</span>
        </h1>

        <p style={{
          fontSize: 16,
          lineHeight: 1.6,
          color: "#9ca3af",
          marginBottom: 32,
        }}>
          The dental treatment or page you are looking for does not exist or has been relocated. Let us help you find the right care.
        </p>

        <div style={{
          display: "flex",
          flexWrap: "wrap",
          gap: 12,
          justifyContent: "center",
        }}>
          <Link
            href="/site"
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: 8,
              padding: "12px 24px",
              background: "#4ade80",
              color: "#0a0a0a",
              fontWeight: 700,
              borderRadius: 999,
              textDecoration: "none",
              fontSize: 14,
            }}
          >
            ← Back to Homepage
          </Link>
          <Link
            href="/site#services"
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: 8,
              padding: "12px 24px",
              background: "rgba(255, 255, 255, 0.1)",
              border: "1px solid rgba(255, 255, 255, 0.2)",
              color: "#ffffff",
              fontWeight: 600,
              borderRadius: 999,
              textDecoration: "none",
              fontSize: 14,
            }}
          >
            Explore Services
          </Link>
        </div>
      </div>
    </main>
  );
}
