"use client";

import { useEffect, useState } from "react";
import { PieChart, Pie, Cell, Tooltip } from "recharts";

export default function TeacherPage() {
  const [doubts, setDoubts] = useState<any[]>([]);

  useEffect(() => {
    const stored = JSON.parse(localStorage.getItem("doubts") || "[]");
    setDoubts(stored);
  }, []);

  const reply = (id: number, text: string) => {
    const updated = doubts.map((d) =>
      d.id === id ? { ...d, reply: text } : d
    );

    setDoubts(updated);
    localStorage.setItem("doubts", JSON.stringify(updated));
  };

  const subjects = ["Math", "Science", "English"];

  const data = subjects.map((s) => ({
    name: s,
    value: doubts.filter((d) => d.subject === s).length,
  }));

  const COLORS = ["#3b82f6", "#22c55e", "#f59e0b"];

  const weak = data.reduce((max, curr) =>
    curr.value > max.value ? curr : max
  , data[0]);

  return (
    <div className="container">
      <h1>👨‍🏫 Teacher Dashboard</h1>

      <div className="layout">
        <div className="card">
          <h2>📊 Doubt Distribution</h2>

          <PieChart width={250} height={250}>
            <Pie data={data} dataKey="value" outerRadius={80}>
              {data.map((_, i) => (
                <Cell key={i} fill={COLORS[i]} />
              ))}
            </Pie>
            <Tooltip />
          </PieChart>

          <div className="insight">
            <h3>📌 Insight</h3>
            <p>
              Most doubts are in <b>{weak.name}</b>
            </p>
            <p>👉 Focus more on this subject</p>
          </div>
        </div>

        <div className="card">
          <h2>📩 Student Doubts</h2>

          {doubts.map((d) => (
            <div key={d.id} className="doubt">
              <p><b>{d.subject}</b>: {d.question}</p>

              <input
                placeholder="Reply..."
                defaultValue={d.reply}
                onBlur={(e) => reply(d.id, e.target.value)}
              />
            </div>
          ))}
        </div>
      </div>

      <style>{`
        .container {
          min-height: 100vh;
          background: linear-gradient(135deg, #020617, #1e3a8a);
          color: white;
          padding: 20px;
        }

        .layout {
          display: flex;
          gap: 20px;
        }

        .card {
          flex: 1;
          background: rgba(255,255,255,0.05);
          padding: 20px;
          border-radius: 16px;
        }

        .insight {
          margin-top: 20px;
          background: rgba(34,197,94,0.1);
          padding: 10px;
          border-radius: 10px;
        }

        .doubt {
          margin-top: 10px;
          padding: 10px;
          background: rgba(255,255,255,0.05);
          border-radius: 10px;
        }

        input {
          width: 100%;
          padding: 8px;
          border-radius: 6px;
          border: none;
        }
      `}</style>
    </div>
  );
}