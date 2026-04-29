'use client'

import { useState } from 'react'
import Loader from './Loader'

export default function ChatBox({ student }: any) {
  const [messages, setMessages] = useState<any[]>([])
  const [input, setInput] = useState('')
  const [loading, setLoading] = useState(false)

  const askAI = async () => {
    if (!input) return

    setLoading(true)

    try {
      const res = await fetch('/api/chat', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ message: input })
      })

      const data = await res.json()

      setMessages([
        ...messages,
        { role: 'user', content: input },
        { role: 'ai', content: data.reply }
      ])
    } catch (error) {
      setMessages([
        ...messages,
        { role: 'user', content: input },
        { role: 'ai', content: 'Error getting response ❌' }
      ])
    }

    setInput('')
    setLoading(false)
  }

  const askTeacher = () => {
    if (!input) return

    const doubts = JSON.parse(localStorage.getItem('doubts') || '[]')

    doubts.push({
      ...student,
      question: input,
      status: 'Pending'
    })

    localStorage.setItem('doubts', JSON.stringify(doubts))

    alert('Sent to teacher 👩‍🏫')

    setInput('')
  }

  return (
    <div style={{ marginTop: '20px' }}>
      {/* Chat Messages */}
      <div style={{ minHeight: '200px', marginBottom: '10px' }}>
        {messages.map((m, i) => (
          <p key={i}>
            <b>{m.role === 'user' ? 'You' : 'AI'}:</b> {m.content}
          </p>
        ))}
      </div>

      {loading && <Loader />}

      {/* Input */}
      <input
        className="input"
        placeholder="Ask your doubt..."
        value={input}
        onChange={(e) => setInput(e.target.value)}
      />

      {/* Buttons */}
      <button className="btn" onClick={askAI}>
        Ask AI 🤖
      </button>

      <button className="btn" onClick={askTeacher}>
        Ask Teacher 👩‍🏫
      </button>
    </div>
  )
}