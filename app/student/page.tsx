"use client";

import { useState, useEffect } from "react";
import { PieChart, Pie, Cell, Tooltip } from "recharts";

export default function StudentPage() {
  const [subject, setSubject] = useState("Math");
  const [doubt, setDoubt] = useState("");
  const [doubts, setDoubts] = useState<any[]>([]);

  const COLORS = ["#3b82f6", "#22c55e", "#f59e0b"];

  useEffect(() => {
    loadDoubts();
  }, []);

  const loadDoubts = () => {
    const stored = JSON.parse(localStorage.getItem("doubts") || "[]");
    setDoubts(stored);
  };

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

  // PIE DATA
  const subjects = ["Math", "Science", "English"];
  const data = subjects.map((s) => ({
    name: s,
    value: doubts.filter((d) => d.subject === s).length,
  }));

  return (
    <div className="container">
      <h1 className="title">🎓 DoubtX AI</h1>

      <div className="layout">
        
        {/* LEFT SIDE */}
        <div className="left">

          {/* ASK DOUBT */}
          <div className="card">
            <h2>📘 Ask Doubt</h2>

            <select
              className="input"
              onChange={(e) => setSubject(e.target.value)}
            >
              <option>Math</option>
              <option>Science</option>
              <option>English</option>
            </select>

            <textarea
              className="input"
              placeholder="Type your doubt..."
              value={doubt}
              onChange={(e) => setDoubt(e.target.value)}
            />

            <button className="btn" onClick={askDoubt}>
              Submit 🚀
            </button>
          </div>

          {/* PIE CHART */}
          <div className="card">
            <h2>📊 Your Doubts</h2>

            <PieChart width={250} height={250}>
              <Pie data={data} dataKey="value" outerRadius={80}>
                {data.map((_, i) => (
                  <Cell key={i} fill={COLORS[i]} />
                ))}
              </Pie>
              <Tooltip />
            </PieChart>
          </div>

          {/* TEACHER REPLIES */}
          <div className="card">
            <h2>📩 Teacher Replies</h2>

            {doubts.map((d) => (
              <div key={d.id} className="reply">
                <b>{d.subject}:</b> {d.question}
                <br />
                <span className="teacherText">
                  {d.reply || "Waiting for teacher..."}
                </span>
              </div>
            ))}
          </div>

        </div>

        {/* RIGHT SIDE (CHATBASE) */}
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
          min-height: 100vh;
          background: linear-gradient(135deg, #0f172a, #020617);
          color: white;
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
          box-shadow: 0 0 40px rgba(0,0,0,0.6);
        }

        .card {
          background: rgba(255,255,255,0.05);
          padding: 15px;
          border-radius: 12px;
        }

        .input {
          width: 100%;
          padding: 10px;
          margin: 8px 0;
          border-radius: 8px;
          border: none;
        }

        .btn {
          padding: 10px;
          background: #2563eb;
          border: none;
          border-radius: 8px;
          color: white;
          cursor: pointer;
        }

        .btn:hover {
          transform: scale(1.05);
        }

        .reply {
          margin-bottom: 10px;
        }

        .teacherText {
          color: #22c55e;
        }
      `}</style>
    </div>
  );
}