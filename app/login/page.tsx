"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

export default function LoginPage() {
  const router = useRouter();

  const [role, setRole] = useState<"student" | "teacher">("student");
  const [teacherId, setTeacherId] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = () => {
    if (role === "student") {
      localStorage.setItem("user", "student");
      router.push("/student");
      return;
    }

    // ✅ Teacher login (simple)
    if (teacherId === "teacher" && password === "1234") {
      localStorage.setItem("user", "teacher");
      router.push("/teacher");
    } else {
      alert("Wrong ID or Password");
    }
  };

  return (
    <div style={container}>
      <h1>🔐 Login</h1>

      <select
        value={role}
        onChange={(e) => setRole(e.target.value as "student" | "teacher")}
      >
        <option value="student">Student</option>
        <option value="teacher">Teacher</option>
      </select>

      {role === "teacher" && (
        <>
          <input
            placeholder="Teacher ID"
            value={teacherId}
            onChange={(e) => setTeacherId(e.target.value)}
          />

          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
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