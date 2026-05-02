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

  useEffect(() => {
    const data = JSON.parse(localStorage.getItem("chats") || "[]");
    setChats(data);
  }, []);

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

      {/* PIE CHART */}
      <div style={box}>
        <h3>📊 Student Doubts Distribution</h3>
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

      {/* CHAT LIST */}
      {chats.map((chat, i) => (
        <div key={i} style={card}>
          <p><b>Question:</b> {chat.question}</p>
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