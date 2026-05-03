"use client";

import { useState } from "react";

export default function StudentPage() {
  const [msg, setMsg] = useState("");
  const [chat, setChat] = useState<any[]>([]);

  const send = () => {
    if (!msg) return;

    setChat([...chat, { role: "user", text: msg }]);

    setTimeout(() => {
      setChat((prev) => [
        ...prev,
        { role: "ai", text: "AI response here..." },
      ]);
    }, 500);

    setMsg("");
  };

  return (
    <div style={{ padding: 20 }}>
      <h1>🎓 Student Dashboard</h1>

      <div
        className="card"
        style={{
          height: "60vh",
          display: "flex",
          flexDirection: "column",
          overflowY: "auto",
        }}
      >
        {chat.map((c, i) => (
          <div
            key={i}
            className={c.role === "user" ? "chat-user" : "chat-ai"}
          >
            {c.text}
          </div>
        ))}
      </div>

      <input
        className="input"
        value={msg}
        onChange={(e) => setMsg(e.target.value)}
        placeholder="Ask doubt..."
      />

      <button className="button" onClick={send}>
        Send 🚀
      </button>
    </div>
  );
}