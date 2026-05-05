"use client";

import { useState, useEffect } from "react";
import { PieChart, Pie, Cell, Tooltip } from "recharts";

export default function StudentPage() {
  const [subject, setSubject] = useState("Math");
  const [doubt, setDoubt] = useState("");
  const [doubts, setDoubts] = useState<any[]>([]);

  useEffect(() => {
    const stored = JSON.parse(localStorage.getItem("doubts") || "[]");
    setDoubts(stored);
  }, []);

  const askDoubt = () => {
    if (!doubt) return;

    const newDoubt = {
      id: Date.now(),
      subject,
      question: doubt,
      reply: "",
    };

    const updated = [...doubts, newDoubt];
    localStorage.setItem("doubts", JSON.stringify(updated));
    setDoubts(updated);
    setDoubt("");
  };

  const subjects = ["Math", "Science", "English"];
  const data = subjects.map((s) => ({
    name: s,
    value: doubts.filter((d) => d.subject === s).length,
  }));

  const COLORS = ["#3b82f6", "#22c55e", "#f59e0b"];

  return (
    <div className="container">
      {/* FLOATING ICONS */}
      <div className="floating-icons">
        <div className="icon">📐</div>
        <div className="icon">🧪</div>
        <div className="icon">📏</div>
        <div className="icon">🧮</div>
        <div className="icon">⚗️</div>
      </div>

      <h1>🎓 Student Dashboard</h1>

      <div className="layout">
        <div className="left">
          <div className="card">
            <h2>Ask Doubt</h2>

            <select onChange={(e) => setSubject(e.target.value)}>
              <option>Math</option>
              <option>Science</option>
              <option>English</option>
            </select>

            <textarea
              placeholder="Enter doubt..."
              value={doubt}
              onChange={(e) => setDoubt(e.target.value)}
            />

            <button onClick={askDoubt}>Submit</button>
          </div>

          <div className="card">
            <h2>📊 Doubts</h2>

            <PieChart width={250} height={250}>
              <Pie data={data} dataKey="value" outerRadius={80}>
                {data.map((_, i) => (
                  <Cell key={i} fill={COLORS[i]} />
                ))}
              </Pie>
              <Tooltip />
            </PieChart>
          </div>

          <div className="card">
            <h2>Teacher Replies</h2>

            {doubts.map((d) => (
              <div key={d.id}>
                <b>{d.subject}</b>: {d.question}
                <br />
                <span style={{ color: "lightgreen" }}>
                  {d.reply || "Waiting..."}
                </span>
              </div>
            ))}
          </div>
        </div>

        <div className="right">
          <iframe
            src="https://www.chatbase.co/chatbot-iframe/ldbVwvwwC0Ekqiaw04uSB"
            width="100%"
            height="100%"
            style={{ border: "none" }}
          />
        </div>
      </div>

      <style>{`
        .container {
          position: relative;
          z-index: 1;
          padding: 20px;
        }

        .layout {
          display: flex;
          gap: 20px;
        }

        .left {
          width: 300px;
          display: flex;
          flex-direction: column;
          gap: 20px;
        }

        .right {
          flex: 1;
          height: 80vh;
          border-radius: 12px;
          overflow: hidden;
        }

        .card {
          background: rgba(255,255,255,0.08);
          padding: 15px;
          border-radius: 12px;
          backdrop-filter: blur(8px);
        }

        textarea, select {
          width: 100%;
          margin: 5px 0;
          padding: 8px;
        }

        button {
          padding: 8px;
          background: #3b82f6;
          border: none;
          border-radius: 8px;
          color: white;
        }
      `}</style>
    </div>
  );
}