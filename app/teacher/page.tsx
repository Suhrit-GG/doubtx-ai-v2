"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";

export default function Teacher() {
  const router = useRouter();

  useEffect(() => {
    if (localStorage.getItem("user") !== "teacher") {
      router.push("/login");
    }
  }, []);

  return (
    <div className="page">
      <h1 className="fade">👨‍🏫 Teacher Dashboard</h1>

      <div className="card hover">
        <h2>Total Doubts: 120</h2>
        <h2>Resolved: 95</h2>
        <h2>Pending: 25</h2>
      </div>
    </div>
  );
}