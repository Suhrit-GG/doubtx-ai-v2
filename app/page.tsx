"use client";

import Link from "next/link";

export default function Home() {
  return (
    <div className="home">
      <h1 className="fade">DoubtX AI</h1>

      <div>
        <Link href="/login">
          <button className="btn blue">Student Panel </button>
        </Link>

        <Link href="/login">
          <button className="btn green">Teacher Panel</button>
        </Link>
      </div>
    </div>
  );
}