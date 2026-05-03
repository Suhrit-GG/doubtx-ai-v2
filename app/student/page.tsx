"use client";

export default function StudentPage() {
  return (
    <div
      style={{
        minHeight: "100vh",
        background: "linear-gradient(135deg, #0f172a, #020617)",
        color: "white",
        padding: "20px",
        animation: "fadeIn 1s ease",
      }}
    >
      {/* Header */}
      <div style={{ marginBottom: "20px" }}>
        <h1
          style={{
            fontSize: "32px",
            fontWeight: "bold",
            animation: "slideDown 0.8s ease",
          }}
        >
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
          animation: "popIn 0.8s ease",
        }}
      >
        <iframe
          src="https://www.chatbase.co/chatbot-iframe/ldbVwvwwC0Ekqiaw04uSB"
          width="100%"
          height="100%"
          style={{ border: "none" }}
        />
      </div>

      {/* Animations */}
      <style>
        {`
          @keyframes fadeIn {
            from { opacity: 0; }
            to { opacity: 1; }
          }

          @keyframes slideDown {
            from { transform: translateY(-20px); opacity: 0; }
            to { transform: translateY(0); opacity: 1; }
          }

          @keyframes popIn {
            from { transform: scale(0.95); opacity: 0; }
            to { transform: scale(1); opacity: 1; }
          }
        `}
      </style>
    </div>
  );
}