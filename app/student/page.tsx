"use client";

import { useState } from "react";

export default function StudentPage() {
  const [name, setName] = useState("GG");
  const [grade, setGrade] = useState("10");
  const [subject, setSubject] = useState("Science");
  const [question, setQuestion] = useState("");
  const [answer, setAnswer] = useState("");

  const askAI = async () => {
    if (!question) return;

    setAnswer("🤖 Thinking...");

    try {
      const res = await fetch("/api/ask", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          question,
          grade,
          subject,
        }),
      });

      const data = await res.json();
      setAnswer(data.answer || "No response");
    } catch (err) {
      console.error(err);
      setAnswer("❌ Error getting response");
    }
  };

  return (
    <div className="min-h-screen text-white bg-gradient-to-br from-black via-purple-900 to-black p-6">
      
      {/* HEADER */}
      <h1 className="text-4xl font-bold text-center mb-6">
        🤖 DoubtX AI
      </h1>

      {/* USER INPUT */}
      <div className="bg-white/10 backdrop-blur-lg p-4 rounded-xl mb-6 shadow-lg">
        <input
          className="w-full p-2 mb-2 rounded bg-black/50"
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="Your Name"
        />

        <input
          className="w-full p-2 mb-2 rounded bg-black/50"
          value={grade}
          onChange={(e) => setGrade(e.target.value)}
          placeholder="Grade"
        />

        <select
          className="w-full p-2 rounded bg-black/50"
          value={subject}
          onChange={(e) => setSubject(e.target.value)}
        >
          <option>Science</option>
          <option>Maths</option>
          <option>English</option>
        </select>
      </div>

      {/* CHAT BOX */}
      <div className="bg-white/10 backdrop-blur-lg p-4 rounded-xl mb-6 shadow-lg h-48 overflow-auto">
        <p className="mb-2">
          <b className="text-blue-400">You:</b> {question}
        </p>
        <p>
          <b className="text-green-400">AI:</b> {answer}
        </p>
      </div>

      {/* INPUT + BUTTON */}
      <div className="flex gap-2">
        <input
          className="flex-1 p-3 rounded bg-black/50"
          placeholder="Ask your doubt..."
          value={question}
          onChange={(e) => setQuestion(e.target.value)}
        />

        <button
          onClick={askAI}
          className="px-4 py-2 bg-blue-600 rounded hover:bg-blue-700 transition"
        >
          Ask 🚀
        </button>
      </div>

      {/* FOOTER */}
      <p className="text-center mt-6 text-sm opacity-70">
        Made by You 🚀
      </p>
    </div>
  );
}