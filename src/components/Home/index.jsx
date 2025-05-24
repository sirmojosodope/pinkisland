import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import './index.scss'

const Home = () => {
  const [ready, setReady] = useState(false)

  useEffect(() => {
    const timeout = setTimeout(() => {
      setReady(true)
    }, 1600)
    return () => clearTimeout(timeout)
  }, [])

  return (
    <div className="home-container">
      <div className={`glyph-stack ${ready ? 'active' : ''}`}>
        <div className="glyph-core">∴</div>
        <div className="status-text">entry confirmed — threshold stable</div>
        <Link to="/portal" className="open-link">
          open channel
        </Link>
      </div>
      <div className="email-tag">stoverlee29@gmail.com</div>
    </div>
  )
}

export default Home
