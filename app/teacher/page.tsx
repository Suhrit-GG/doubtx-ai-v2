"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";
import { PieChart, Pie, Cell } from "recharts";

export default function Teacher() {
  const router = useRouter();

  useEffect(() => {
    if (localStorage.getItem("user") !== "teacher") {
      router.push("/login");
    }
  }, []);

  const data = [
    { name: "Math", value: 40 },
    { name: "Science", value: 30 },
    { name: "English", value: 20 },
  ];

  const colors = ["#3b82f6", "#22c55e", "#f59e0b"];

  return (
    <div className="page">
      <h1 className="fade">👨‍🏫 Teacher Dashboard</h1>

      <div className="card">
        <h2>📊 Doubts Overview</h2>

        <PieChart width={250} height={250}>
          <Pie data={data} dataKey="value" outerRadius={80}>
            {data.map((_, i) => (
              <Cell key={i} fill={colors[i]} />
            ))}
          </Pie>
        </PieChart>
      </div>
    </div>
  );
}