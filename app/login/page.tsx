"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

export default function Login() {
  const router = useRouter();

  const [role, setRole] = useState("student");
  const [id, setId] = useState("");
  const [pass, setPass] = useState("");

  const login = () => {
    if (role === "teacher") {
      if (id === "teacher123" && pass === "teacher") {
        localStorage.setItem("user", "teacher");
        router.push("/teacher");
      } else {
        alert("Wrong Teacher Credentials");
      }
    } else {
      if (id === "student123" && pass === "student") {
        localStorage.setItem("user", "student");
        router.push("/student");
      } else {
        alert("Wrong Student Credentials");
      }
    }
  };

  return (
    <div className="login">
      <h1 className="fade">🔐 Login</h1>

      <select onChange={(e) => setRole(e.target.value)} className="input">
        <option value="student">Student</option>
        <option value="teacher">Teacher</option>
      </select>

      <input
        placeholder="ID"
        className="input"
        onChange={(e) => setId(e.target.value)}
      />

      <input
        type="password"
        placeholder="Password"
        className="input"
        onChange={(e) => setPass(e.target.value)}
      />

      <button className="btn blue glow" onClick={login}>
        Login 🚀
      </button>
    </div>
  );
}