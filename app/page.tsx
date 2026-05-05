"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

export default function HomePage() {
  const [id, setId] = useState("");
  const [pass, setPass] = useState("");
  const router = useRouter();

  const login = () => {
    if (id === "student123" && pass === "student") {
      router.push("/student");
    } else if (id === "teacher123" && pass === "teacher") {
      router.push("/teacher");
    } else {
      alert("Invalid credentials");
    }
  };

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

      <h1>DoubtX AI Portal</h1>

      <div className="card">
        <input placeholder="User ID" onChange={(e) => setId(e.target.value)} />
        <input type="password" placeholder="Password" onChange={(e) => setPass(e.target.value)} />
        <button onClick={login}>Login</button>
      </div>

      <style>{`
        .container {
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          height: 100vh;
          position: relative;
          z-index: 1;
        }

        .card {
          background: rgba(255,255,255,0.08);
          padding: 20px;
          border-radius: 12px;
          display: flex;
          flex-direction: column;
          gap: 10px;
          width: 250px;
          backdrop-filter: blur(8px);
        }

        input {
          padding: 10px;
          border-radius: 8px;
          border: none;
        }

        button {
          padding: 10px;
          background: #3b82f6;
          border: none;
          border-radius: 8px;
          color: white;
          cursor: pointer;
        }
      `}</style>
    </div>
  );
}