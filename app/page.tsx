"use client";

import Link from "next/link";

export default function Home() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-black via-blue-900 to-black text-white">

      <div className="text-center backdrop-blur-lg bg-white/10 p-10 rounded-2xl shadow-xl max-w-xl w-full">

        {/* TITLE */}
        <h1 className="text-5xl font-bold mb-4">
          🤖 DoubtX AI
        </h1>

        {/* SUBTITLE */}
        <p className="text-gray-300 mb-8">
          Your AI-powered learning assistant. Ask doubts, get instant answers, and learn smarter.
        </p>

        {/* BUTTONS */}
        <div className="flex justify-center gap-4">
          <Link href="/student">
            <button className="px-6 py-3 bg-blue-600 rounded-xl hover:bg-blue-700 transition shadow-md">
              🎓 Student Panel
            </button>
          </Link>

          <Link href="/teacher">
            <button className="px-6 py-3 bg-green-600 rounded-xl hover:bg-green-700 transition shadow-md">
              👩‍🏫 Teacher Panel
            </button>
          </Link>
        </div>

        {/* FOOTER */}
        <p className="mt-8 text-sm text-gray-400">
          Made with ❤️ by You
        </p>
      </div>

    </div>
  );
}