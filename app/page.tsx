import Link from "next/link";

export default function Home() {
  return (
    <div
      style={{
        height: "100vh",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <h1>🤖 DoubtX AI</h1>

      <div style={{ marginTop: 20 }}>
        <Link href="/student">
          <button className="button">Student Panel</button>
        </Link>

        <Link href="/teacher">
          <button className="button" style={{ marginLeft: 10 }}>
            Teacher Panel
          </button>
        </Link>
      </div>
    </div>
  );
}