import Link from "next/link";

export default function HomePage() {
  return (
    <div
      style={{
        minHeight: "100vh",
        background: "linear-gradient(135deg, #0f172a, #020617)",
        color: "white",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        textAlign: "center",
        padding: "20px",
      }}
    >
      <h1 style={{ fontSize: "48px", fontWeight: "bold" }}>
        🚀 DoubtX AI
      </h1>

      <p style={{ marginTop: "10px", opacity: 0.7 }}>
        Your smart AI assistant for solving doubts instantly
      </p>

      <div style={{ marginTop: "30px" }}>
        <Link href="/student">
          <button
            style={{
              padding: "12px 24px",
              fontSize: "18px",
              borderRadius: "10px",
              border: "none",
              background: "#3b82f6",
              color: "white",
              cursor: "pointer",
            }}
          >
            Start Learning →
          </button>
        </Link>
      </div>
    </div>
  );
}