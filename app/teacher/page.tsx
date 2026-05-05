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

  const weak = data.reduce((a, b) => (b.value > a.value ? b : a));

  return (
    <div className="container">
      <h1>👨‍🏫 Teacher Dashboard</h1>

      <div className="layout">
        <div className="card">
          <h2>📊 Insights</h2>

          <PieChart width={250} height={250}>
            <Pie data={data} dataKey="value" outerRadius={80}>
              {data.map((_, i) => (
                <Cell key={i} fill={COLORS[i]} />
              ))}
            </Pie>
            <Tooltip />
          </PieChart>

          <p>Focus on: <b>{weak.name}</b></p>
        </div>

        <div className="card">
          <h2>Doubts</h2>

          {doubts.map((d) => (
            <div key={d.id}>
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
        .layout {
          display: flex;
          gap: 20px;
        }

        .card {
          flex: 1;
          background: rgba(255,255,255,0.05);
          padding: 15px;
          border-radius: 12px;
        }

        input {
          width: 100%;
          padding: 8px;
          margin-top: 5px;
        }
      `}</style>
    </div>
  );
}