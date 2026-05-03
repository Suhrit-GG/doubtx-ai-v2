"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";

export default function Student() {
  const router = useRouter();

  const [subject, setSubject] = useState("Math");
  const [doubt, setDoubt] = useState("");
  const [chat, setChat] = useState<any[]>([]);

  useEffect(() => {
    if (localStorage.getItem("user") !== "student") {
      router.push("/login");
    }
  }, []);

  const ask = () => {
    if (!doubt) return;

    setChat([
      ...chat,
      { role: "user", text: `${subject}: ${doubt}` },
    ]);

    setTimeout(() => {
      setChat((prev) => [
        ...prev,
        { role: "ai", text: "AI answer..." },
        { role: "teacher", text: "Teacher reply pending..." },
      ]);
    }, 500);

    setDoubt("");
  };

  return (
    <div className="main">
      <h1 className="fade">🎓 Student Dashboard</h1>

      <div className="split">
        
        {/* LEFT */}
        <div className="card panel">
          <h2>Ask Doubt</h2>

          <select className="input" onChange={(e) => setSubject(e.target.value)}>
            <option>Math</option>
            <option>Science</option>
            <option>English</option>
          </select>

          <textarea
            className="input"
            value={doubt}
            onChange={(e) => setDoubt(e.target.value)}
            placeholder="Type doubt..."
          />

          <button className="btn blue glow" onClick={ask}>Submit</button>
        </div>

        {/* RIGHT */}
        <div className="card panel">
          <h2>AI + Teacher</h2>

          <div className="chatbox">
            {chat.map((c, i) => (
              <div key={i} className={`msg ${c.role}`}>
                {c.text}
              </div>
            ))}
          </div>
        </div>

      </div>

      {/* FLOATING AI */}
      <button className="floating">🤖</button>
    </div>
  );
}