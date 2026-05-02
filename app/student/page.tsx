"use client";

import { useState, useEffect } from "react";
import {
  PieChart,
  Pie,
  Cell,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

const COLORS = ["#3b82f6", "#22c55e", "#f59e0b", "#ef4444"];

export default function StudentPage() {
  const [question, setQuestion] = useState("");
  const [history, setHistory] = useState<any[]>([]);

  useEffect(() => {
    const old = JSON.parse(localStorage.getItem("chats") || "[]");
    setHistory(old);
  }, []);

  const saveChat = () => {
    if (!question) return;

    const newChat = {
      question,
      subject: detectSubject(question),
      time: new Date().toLocaleString(),
    };

    const updated = [...history, newChat];

    setHistory(updated);
    localStorage.setItem("chats", JSON.stringify(updated));
    setQuestion("");
  };

  // 🧠 Simple subject detection
  const detectSubject = (q: string) => {
    q = q.toLowerCase();
    if (q.includes("math")) return "Math";
    if (q.includes("science")) return "Science";
    if (q.includes("english")) return "English";
    return "Other";
  };

  // 📊 Create chart data
  const getChartData = () => {
    const count: any = {};
    history.forEach((c) => {
      count[c.subject] = (count[c.subject] || 0) + 1;
    });

    return Object.keys(count).map((key) => ({
      name: key,
      value: count[key],
    }));
  };

  return (
    <div style={container}>
      <h1>🎓 Student Dashboard</h1>

      {/* INPUT */}
      <div style={{ marginTop: "20px" }}>
        <input
          value={question}
          onChange={(e) => setQuestion(e.target.value)}
          placeholder="Ask your doubt..."
          style={input}
        />
        <button onClick={saveChat} style={btn}>
          Save Question
        </button>
      </div>

      {/* GRID */}
      <div style={grid}>
        {/* PIE CHART */}
        <div style={box}>
          <h3>📊 Your Study Distribution</h3>
          <div style={{ width: "100%", height: 250 }}>
            <ResponsiveContainer>
              <PieChart>
                <Pie data={getChartData()} dataKey="value" label>
                  {getChartData().map((_, i) => (
                    <Cell key={i} fill={COLORS[i % COLORS.length]} />
                  ))}
                </Pie>
                <Tooltip />
              </PieChart>
            </ResponsiveContainer>
          </div>
        </div>

        {/* CHATBOT */}
        <div style={box}>
          <h3>💬 Ask Doubt</h3>
          <iframe
            src="https://www.chatbase.co/chatbot-iframe/ldbVwvwwC0Ekqiaw04uSB"
            width="100%"
            height="300px"
            style={{ border: "none", borderRadius: "10px" }}
          />
        </div>
      </div>

      {/* HISTORY */}
      <h2 style={{ marginTop: "20px" }}>📜 Your Questions</h2>

      {history.map((chat, i) => (
        <div key={i} style={card}>
          <p><b>Q:</b> {chat.question}</p>
          <p><b>Subject:</b> {chat.subject}</p>
          <p><b>Time:</b> {chat.time}</p>
        </div>
      ))}
    </div>
  );
}

const container = {
  padding: "20px",
  minHeight: "100vh",
  background: "#020617",
  color: "white",
};

const input = {
  padding: "10px",
  width: "60%",
  marginRight: "10px",
};

const btn = {
  padding: "10px 20px",
  background: "#3b82f6",
  border: "none",
  color: "white",
  cursor: "pointer",
};

const grid = {
  display: "grid",
  gridTemplateColumns: "1fr 1fr",
  gap: "20px",
  marginTop: "20px",
};

const box = {
  padding: "20px",
  borderRadius: "12px",
  background: "rgba(255,255,255,0.05)",
};

const card = {
  marginTop: "10px",
  padding: "10px",
  border: "1px solid gray",
};