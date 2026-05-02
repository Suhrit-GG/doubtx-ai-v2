"use client";

import { useEffect, useState } from "react";
import {
  PieChart,
  Pie,
  Cell,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

const COLORS = ["#3b82f6", "#22c55e", "#f59e0b", "#ef4444"];

export default function TeacherPage() {
  const [chats, setChats] = useState<any[]>([]);
  const [reply, setReply] = useState("");

  useEffect(() => {
    const data = JSON.parse(localStorage.getItem("chats") || "[]");
    setChats(data);
  }, []);

  const saveReply = (index: number) => {
    const updated = [...chats];
    updated[index].answer = reply;

    setChats(updated);
    localStorage.setItem("chats", JSON.stringify(updated));
    setReply("");
  };

  const getChartData = () => {
    const count: any = {};
    chats.forEach((c) => {
      count[c.subject] = (count[c.subject] || 0) + 1;
    });

    return Object.keys(count).map((key) => ({
      name: key,
      value: count[key],
    }));
  };

  return (
    <div style={container}>
      <h1>👨‍🏫 Teacher Dashboard</h1>

      {/* PIE */}
      <div style={box}>
        <h3>📊 Doubt Distribution</h3>
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

      {/* DOUBTS */}
      {chats.map((chat, i) => (
        <div key={i} style={card}>
          <p><b>Q:</b> {chat.question}</p>
          <p><b>Subject:</b> {chat.subject}</p>

          {chat.answer ? (
            <p style={{ color: "#22c55e" }}>
              <b>Answer:</b> {chat.answer}
            </p>
          ) : (
            <>
              <input
                placeholder="Write answer..."
                onChange={(e) => setReply(e.target.value)}
                style={input}
              />
              <button onClick={() => saveReply(i)} style={btn}>
                Reply
              </button>
            </>
          )}
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

const box = {
  padding: "20px",
  borderRadius: "12px",
  background: "rgba(255,255,255,0.05)",
  marginBottom: "20px",
};

const card = {
  marginTop: "10px",
  padding: "10px",
  border: "1px solid gray",
};

const input = {
  padding: "8px",
  marginRight: "10px",
};

const btn = {
  padding: "8px 15px",
  background: "#22c55e",
  border: "none",
  color: "white",
  cursor: "pointer",
};