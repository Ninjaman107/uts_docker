import React, {useEffect, useState} from 'react'

export default function Home() {
  const [msg, setMsg] = useState('loading...')

  useEffect(() => {
    fetch(process.env.NEXT_PUBLIC_API_URL ? `${process.env.NEXT_PUBLIC_API_URL}/api/hello` : '/api/hello')
      .then(r => r.json())
      .then(d => setMsg(d.message))
      .catch(() => setMsg('Could not reach backend'))
  }, [])

  return (
    <main style={{fontFamily: 'Arial, sans-serif', padding: 24}}>
      <h1>UTS - Deployment Demo</h1>
      <p>This is a minimal Next.js frontend talking to the backend.</p>
      <div style={{marginTop: 20, padding: 12, border: '1px solid #ddd'}}>
        <strong>Backend says:</strong>
        <div style={{marginTop: 8}}>{msg}</div>
      </div>
    </main>
  )
}
