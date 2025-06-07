import React, { useEffect } from 'react'
import Loader from 'react-loaders'
import './index.scss'

const Offer = () => {
  useEffect(() => {
    const audio = new Audio('/sounds/noise-loop.mp3')
    audio.loop = true
    audio.volume = 0.2
    audio.play().catch(() => null)

    return () => {
      audio.pause()
      audio.currentTime = 0
    }
  }, [])

  return (
    <>
      <div className="portfolio-page">
        <div className="text-zone ambient-only">
          <p className="fragment final">standby for emergence</p>
        </div>

        <div className="stage-void">
          <div className="signal-pulse"></div>
        </div>

        <div className="offer-grid">
          <div className="offer-line">
            <span className="glyph">˚</span>
            <div>
              <h2>Ritual Microsite</h2>
              <p>Atmospheric single-page sites for artists, collectives, or drops. Built to haunt and convert.</p>
            </div>
          </div>

          <div className="offer-line">
            <span className="glyph">∆</span>
            <div>
              <h2>Brand Therapy</h2>
              <p>One-on-one immersion session. We extract your signal, reframe your story, and prescribe clarity.</p>
            </div>
          </div>

          <div className="offer-line">
            <span className="glyph">⊘</span>
            <div>
              <h2>Taste-as-a-Service</h2>
              <p>Styling, moodboarding, worldbuilding. You give context—I return direction.</p>
            </div>
          </div>

          <div className="offer-line">
            <span className="glyph">☿</span>
            <div>
              <h2>Signal System Architecture</h2>
              <p>From file naming to font pairing. A complete overhaul of how your aesthetic system functions and transmits.</p>
            </div>
          </div>
        </div>

        <div className="footer-contact">stoverlee29@gmail.com</div>
      </div>
      <Loader type="pacman" />
    </>
  )
}

export default Offer
