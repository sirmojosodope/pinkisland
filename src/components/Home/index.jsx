import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import './index.scss'

const Home = () => {
  const [ready, setReady] = useState(false)
  const navigate = useNavigate()

  useEffect(() => {
    const timeout = setTimeout(() => {
      setReady(true)
    }, 1600)
    return () => clearTimeout(timeout)
  }, [])

  const handleChannelOpen = (e) => {
    e.preventDefault()

    const audio = new Audio('/sounds/underwater.wav')
    audio.volume = 0.5
    audio.play().catch(() => null)

    // Navigate after audio naturally ends (~2s)
    audio.addEventListener('ended', () => {
      navigate('/portal')
    })
  }

  return (
    <div className="home-container">
      <div className={`glyph-stack ${ready ? 'active' : ''}`}>
        <div className="glyph-core">∴</div>
        <div className="status-text">entry confirmed — threshold stable</div>
        <a href="/portal" className="open-link" onClick={handleChannelOpen}>
          open channel
        </a>
      </div>
      <div className="email-tag">stoverlee29@gmail.com</div>
    </div>
  )
}

export default Home
