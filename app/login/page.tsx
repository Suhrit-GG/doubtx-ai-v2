"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

export default function LoginPage() {
  const [role, setRole] = useState("student");
  const [captcha, setCaptcha] = useState(
    Math.floor(Math.random() * 9000 + 1000)
  );
  const [inputCaptcha, setInputCaptcha] = useState("");
  const router = useRouter();

  const handleLogin = () => {
    if (role === "student") {
      localStorage.setItem("user", "student");
      router.push("/student");
    } else {
      // ✅ FIXED HERE
      if (Number(inputCaptcha) !== captcha) {
        alert("Wrong captcha!");
        return;
      }

      const id = (document.getElementById("id") as HTMLInputElement).value;
      const pass = (document.getElementById("pass") as HTMLInputElement).value;

      if (id === "teacher" && pass === "1234") {
        localStorage.setItem("user", "teacher");
        router.push("/teacher");
      } else {
        alert("Wrong ID or Password");
      }
    }
  };

  return (
    <div style={container}>
      <h1>🔐 Login</h1>

      <select onChange={(e) => setRole(e.target.value)}>
        <option value="student">Student</option>
        <option value="teacher">Teacher</option>
      </select>

      {role === "teacher" && (
        <>
          <input id="id" placeholder="Teacher ID" />
          <input id="pass" type="password" placeholder="Password" />

          <p>Captcha: {captcha}</p>
          <input
            placeholder="Enter Captcha"
            onChange={(e) => setInputCaptcha(e.target.value)}
          />
        </>
      )}

      <button onClick={handleLogin}>Login</button>
    </div>
  );
}

const container = {
  display: "flex",
  flexDirection: "column" as const,
  gap: "10px",
  padding: "40px",
};