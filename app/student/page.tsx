"use client";

import { useState, useEffect } from "react";
import { PieChart, Pie, Cell, Tooltip } from "recharts";

export default function StudentPage() {
  const [subject, setSubject] = useState("Math");
  const [doubt, setDoubt] = useState("");
  const [doubts, setDoubts] = useState<any[]>([]);

  const COLORS = ["#3b82f6", "#22c55e", "#f59e0b"];

  useEffect(() => {
    const stored = JSON.parse(localStorage.getItem("doubts") || "[]");
    setDoubts(stored);
  }, []);

  // Smooth glow
  useEffect(() => {
    const glow = document.getElementById("cursor-glow");

    let x = 0, y = 0;
    let tx = 0, ty = 0;

    const move = (e: MouseEvent) => {
      tx = e.clientX;
      ty = e.clientY;
    };

    const animate = () => {
      x += (tx - x) * 0.1;
      y += (ty - y) * 0.1;

      if (glow) {
        glow.style.left = x + "px";
        glow.style.top = y + "px";
      }

      requestAnimationFrame(animate);
    };

    window.addEventListener("mousemove", move);
    animate();

    return () => window.removeEventListener("mousemove", move);
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

  return (
    <div className="container">
      <div id="cursor-glow"></div>

      <h1 className="title">🎓 DoubtX AI</h1>

      <div className="layout">
        {/* LEFT */}
        <div className="left">
          <div className="card">
            <h2>📘 Ask Doubt</h2>

            <select onChange={(e) => setSubject(e.target.value)} className="input">
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

        {/* RIGHT */}
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
          border-radius: 16px;
          overflow: hidden;
          box-shadow: 0 0 40px rgba(0,0,0,0.6);
        }

        .card {
          background: rgba(255,255,255,0.06);
          padding: 15px;
          border-radius: 16px;
          backdrop-filter: blur(10px);
        }

        .input {
          width: 100%;
          padding: 10px;
          margin: 8px 0;
          border-radius: 10px;
          border: none;
        }

        .btn {
          padding: 10px;
          background: linear-gradient(45deg, #3b82f6, #06b6d4);
          border: none;
          border-radius: 10px;
          color: white;
          cursor: pointer;
        }

        .teacherText {
          color: #22c55e;
        }
      `}</style>
    </div>
  );
}