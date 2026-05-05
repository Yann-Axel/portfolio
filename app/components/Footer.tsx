export default function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer style={{
      padding: "2rem 1.5rem",
      borderTop: "1px solid rgba(30,41,59,0.8)",
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      gap: "0.5rem",
      textAlign: "center",
    }}>
      <span style={{
        background: "linear-gradient(135deg, #7c3aed, #06b6d4)",
        WebkitBackgroundClip: "text",
        WebkitTextFillColor: "transparent",
        backgroundClip: "text",
        fontWeight: 700,
        fontSize: "1rem",
        letterSpacing: "0.02em",
      }}>
        KOUA ETTIEN YANN-AXEL
      </span>
      <p style={{ color: "#334155", fontSize: "0.8rem" }}>
        © {year} — Construit avec Next.js & Framer Motion
      </p>
    </footer>
  );
}
