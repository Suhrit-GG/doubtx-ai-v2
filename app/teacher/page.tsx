"use client";

import { useEffect, useState } from "react";

export default function TeacherPage() {
  const [doubts, setDoubts] = useState<any[]>([]);

  useEffect(() => {
    load();
  }, []);

  const load = () => {
    const stored = JSON.parse(localStorage.getItem("doubts") || "[]");
    setDoubts(stored);
  };

  const reply = (id: number, text: string) => {
    const updated = doubts.map((d) =>
      d.id === id ? { ...d, reply: text } : d
    );

    setDoubts(updated);
    localStorage.setItem("doubts", JSON.stringify(updated));
  };

  return (
    <div style={{ padding: "20px", color: "white" }}>
      <h1>👨‍🏫 Teacher Dashboard</h1>

      {doubts.map((d) => (
        <div
          key={d.id}
          style={{
            background: "#1e293b",
            padding: "10px",
            margin: "10px 0",
            borderRadius: "10px",
          }}
        >
          <p><b>{d.subject}</b>: {d.question}</p>

          <input
            placeholder="Write reply..."
            defaultValue={d.reply}
            onBlur={(e) => reply(d.id, e.target.value)}
            style={{
              width: "100%",
              padding: "8px",
              borderRadius: "6px",
              border: "none",
            }}
          />
        </div>
      ))}
    </div>
  );
}