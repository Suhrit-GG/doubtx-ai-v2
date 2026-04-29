'use client'

import { useState } from 'react'
import ChatBox from '../../components/ChatBox'

export default function Student() {
  const [name, setName] = useState('')
  const [cls, setCls] = useState('')
  const [subject, setSubject] = useState('Maths')

  return (
    <div style={{ padding: '20px' }}>
      <h1>Student Panel 🎓</h1>

      {/* Student Info */}
      <input
        className="input"
        placeholder="Your Name"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />

      <input
        className="input"
        placeholder="Class"
        value={cls}
        onChange={(e) => setCls(e.target.value)}
      />

      <select
        className="input"
        value={subject}
        onChange={(e) => setSubject(e.target.value)}
      >
        <option>Maths</option>
        <option>Science</option>
        <option>English</option>
      </select>

      {/* Chat Section */}
      <ChatBox student={{ name, cls, subject }} />
    </div>
  )
}