'use client'

import { useEffect, useState } from 'react'
import PieChart from '../../components/PieChart'

export default function Teacher() {
  const [doubts, setDoubts] = useState<any[]>([])

  useEffect(() => {
    const data = JSON.parse(localStorage.getItem('doubts') || '[]')
    setDoubts(data)
  }, [])

  return (
    <div style={{ padding: '20px' }}>
      <h1>Teacher Dashboard 👩‍🏫</h1>

      {/* Pie Chart */}
      <PieChart data={doubts} />

      {/* Insight */}
      <p style={{ marginTop: '10px', opacity: 0.8 }}>
        📌 Insight: Focus more on Maths
      </p>

      {/* Doubt List */}
      <h3 style={{ marginTop: '20px' }}>Doubts</h3>

      {doubts.length === 0 && <p>No doubts yet</p>}

      {doubts.map((d, i) => (
        <div key={i} className="glass" style={{ margin: '10px 0', padding: '10px' }}>
          <p><b>Name:</b> {d.name}</p>
          <p><b>Class:</b> {d.cls}</p>
          <p><b>Subject:</b> {d.subject}</p>
          <p><b>Question:</b> {d.question}</p>

          <button className="btn">Answer</button>
        </div>
      ))}
    </div>
  )
}