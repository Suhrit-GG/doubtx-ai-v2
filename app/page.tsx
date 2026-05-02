import Link from "next/link";

export default function HomePage() {
  return (
    <div style={container}>
      <h1 style={title}>🚀 DoubtX AI</h1>
      <p style={subtitle}>
        Smart AI learning platform for students
      </p>

      <div style={{ marginTop: "30px" }}>
        <Link href="/student">
          <button style={btn}>👨‍🎓 Student</button>
        </Link>

        <Link href="/teacher">
          <button style={btn}>👨‍🏫 Teacher</button>
        </Link>
      </div>
    </div>
  );
}

const container = {
  minHeight: "100vh",
  background: "linear-gradient(135deg, #0f172a, #020617)",
  color: "white",
  display: "flex",
  flexDirection: "column" as const,
  justifyContent: "center",
  alignItems: "center",
};

const title = { fontSize: "48px", fontWeight: "bold" };
const subtitle = { opacity: 0.7 };

const btn = {
  padding: "12px 20px",
  margin: "10px",
  borderRadius: "10px",
  border: "none",
  background: "#3b82f6",
  color: "white",
  cursor: "pointer",
};