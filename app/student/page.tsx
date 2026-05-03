"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";

export default function Student() {
  const router = useRouter();
  const [msg, setMsg] = useState("");
  const [chat, setChat] = useState<any[]>([]);

  useEffect(() => {
    if (localStorage.getItem("user") !== "student") {
      router.push("/login");
    }
  }, []);

  const send = () => {
    if (!msg) return;

    setChat([...chat, { role: "user", text: msg }]);

    setTimeout(() => {
      setChat((prev) => [
        ...prev,
        { role: "ai", text: "AI Response..." },
      ]);
    }, 600);

    setMsg("");
  };

  return (
    <div className="page">
      <h1 className="fade">🎓 Student Dashboard</h1>

      <div className="chatbox">
        {chat.map((c, i) => (
          <div
            key={i}
            className={c.role === "user" ? "msg user" : "msg ai"}
          >
            {c.text}
          </div>
        ))}
      </div>

      <input
        className="input"
        value={msg}
        onChange={(e) => setMsg(e.target.value)}
        placeholder="Ask your doubt..."
      />

      <button className="btn blue glow" onClick={send}>
        Send 🚀
      </button>
    </div>
  );
}