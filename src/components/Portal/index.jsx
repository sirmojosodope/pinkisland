import React, { useEffect } from 'react'
import Loader from 'react-loaders'
import './index.scss'

const Portfolio = () => {
  useEffect(() => {
    const audio = new Audio('/sounds/noise-loop.mp3') // ✅ Corrected path
    audio.loop = true
    audio.volume = 0.2
    audio.play().catch(() => null) // browser autoplay guard

    return () => {
      audio.pause()
      audio.currentTime = 0
    }
  }, [])

  return (
    <>
      <div className="container portfolio-page">
        <div className="text-zone ambient-only">
          <p className="fragment final">standby for emergence</p>
        </div>

        <div className="stage-void">
          <div className="signal-pulse"></div>
        </div>
      </div>
      <Loader type="pacman" />
    </>
  )
}

export default Portfolio
