export default function StudentPage() {
  return (
    <div
      style={{
        minHeight: "100vh",
        background: "linear-gradient(135deg, #0f172a, #020617)",
        color: "white",
        padding: "20px",
      }}
    >
      {/* Header */}
      <div style={{ marginBottom: "20px" }}>
        <h1 style={{ fontSize: "32px", fontWeight: "bold" }}>
          🎓 DoubtX AI
        </h1>
        <p style={{ opacity: 0.7 }}>
          Ask doubts and get instant AI answers
        </p>
      </div>

      {/* Chatbot */}
      <div
        style={{
          width: "100%",
          height: "80vh",
          borderRadius: "16px",
          overflow: "hidden",
          boxShadow: "0 0 40px rgba(0,0,0,0.6)",
          border: "1px solid rgba(255,255,255,0.1)",
        }}
      >
        <iframe
          src="https://www.chatbase.co/chatbot/ldbVwvwwC0Ekqiaw04uSB"
          width="100%"
          height="100%"
          style={{ border: "none" }}
        />
      </div>
    </div>
  );
}