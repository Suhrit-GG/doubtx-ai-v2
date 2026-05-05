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

      <h1 className="title">DoubtX AI Portal</h1>

      <div className="card glass">
        <input placeholder="User ID" onChange={(e) => setId(e.target.value)} />
        <input type="password" placeholder="Password" onChange={(e) => setPass(e.target.value)} />
        <button onClick={login}>Login</button>
      </div>

      <style>{`
        .container {
          height: 100vh;
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
          position: relative;
          z-index: 1;
        }

        .title {
          font-size: 42px;
          margin-bottom: 30px;
          text-shadow: 0 0 20px rgba(59,130,246,0.6);
        }

        .card {
          padding: 30px;
          border-radius: 16px;
          display: flex;
          flex-direction: column;
          gap: 12px;
          width: 280px;
        }

        input {
          padding: 12px;
          border-radius: 10px;
          border: none;
        }

        button {
          padding: 12px;
          border-radius: 10px;
          border: none;
          background: #3b82f6;
          color: white;
          cursor: pointer;
        }
      `}</style>
    </div>
  );
}