'use client'

import { useState } from 'react'
import { useRouter } from 'next/navigation'
import Globe from '../components/Globe'

export default function Home() {
  const router = useRouter()

  const [id, setId] = useState('')
  const [pass, setPass] = useState('')
  const [role, setRole] = useState('Student')
  const [captcha, setCaptcha] = useState('')
  const [error, setError] = useState('')

  const handleLogin = () => {
    // CAPTCHA check
    if (captcha !== '8') {
      setError('Captcha wrong ❌')
      return
    }

    // Student login
    if (role === 'Student' && id === 'test123' && pass === 'student123#') {
      router.push('/student')
    }
    // Teacher login
    else if (role === 'Teacher' && id === 'test123' && pass === 'teacher123#') {
      router.push('/teacher')
    }
    // Invalid
    else {
      setError('Invalid credentials ❌')
    }
  }

  return (
    <div style={{
      display: 'flex',
      height: '100vh',
      justifyContent: 'center',
      alignItems: 'center',
      gap: '40px'
    }}>
      
      {/* Globe Animation */}
      <Globe />

      {/* Login Card */}
      <div className="glass" style={{ padding: 25, width: 320 }}>
        <h2 style={{ textAlign: 'center' }}>DoubtX AI</h2>

        <input
          className="input"
          placeholder="User ID"
          value={id}
          onChange={(e) => setId(e.target.value)}
        />

        <input
          className="input"
          type="password"
          placeholder="Password"
          value={pass}
          onChange={(e) => setPass(e.target.value)}
        />

        <select
          className="input"
          value={role}
          onChange={(e) => setRole(e.target.value)}
        >
          <option>Student</option>
          <option>Teacher</option>
        </select>

        <p style={{ marginTop: '10px' }}>3 + 5 = ?</p>

        <input
          className="input"
          placeholder="Enter answer"
          value={captcha}
          onChange={(e) => setCaptcha(e.target.value)}
        />

        <button className="btn" style={{ width: '100%', marginTop: '10px' }} onClick={handleLogin}>
          Login
        </button>

        {error && <p style={{ color: 'red' }}>{error}</p>}
      </div>
    </div>
  )
}