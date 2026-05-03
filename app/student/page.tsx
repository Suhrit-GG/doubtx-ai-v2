"use client";

import { useState } from "react";
import { PieChart, Pie, Cell, Tooltip } from "recharts";

export default function StudentPage() {
  const [subject, setSubject] = useState("Math");
  const [doubt, setDoubt] = useState("");

  // Fake data (updates when you ask)
  const [data, setData] = useState([
    { name: "Math", value: 2 },
    { name: "Science", value: 1 },
    { name: "English", value: 1 },
  ]);

  const COLORS = ["#3b82f6", "#22c55e", "#f59e0b"];

  const askDoubt = () => {
    if (!doubt) return;

    // update pie chart
    const updated = data.map((item) =>
      item.name === subject
        ? { ...item, value: item.value + 1 }
        : item
    );

    setData(updated);
    setDoubt("");
  };

  return (
    <div className="container">
      <h1 className="title">🎓 DoubtX AI</h1>

      <div className="layout">
        
        {/* LEFT SIDE */}
        <div className="left">
          
          {/* SUBJECT + DOUBT */}
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
        </div>

        {/* RIGHT SIDE (CHATBASE) */}
        <div className="right">
          <iframe
            src="https://www.chatbase.co/chatbot-iframe/ldbVwvwwC0Ekqiaw04uSB"
            width="100%"
            height="100%"
            style={{ border: "none", borderRadius: "12px" }}
          />
        </div>

      </div>

      {/* STYLES */}
      <style>{`
        .container {
          min-height: 100vh;
          background: linear-gradient(135deg, #0f172a, #020617);
          color: white;
          padding: 20px;
          animation: fade 1s ease;
        }

        .title {
          font-size: 28px;
          margin-bottom: 20px;
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
          box-shadow: 0 0 40px rgba(0,0,0,0.6);
          border-radius: 12px;
          overflow: hidden;
        }

        .card {
          background: rgba(255,255,255,0.05);
          padding: 15px;
          border-radius: 12px;
          backdrop-filter: blur(10px);
          animation: pop 0.5s ease;
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
          transition: 0.3s;
        }

        .btn:hover {
          transform: scale(1.05);
          box-shadow: 0 0 10px #2563eb;
        }

        @keyframes fade {
          from { opacity: 0; }
          to { opacity: 1; }
        }

        @keyframes pop {
          from { transform: scale(0.9); opacity: 0; }
          to { transform: scale(1); opacity: 1; }
        }
      `}</style>
    </div>
  );
}