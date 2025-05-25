import React from 'react'
import './index.scss'

const Sidebar = () => {
  return (
    <>
      {/* Pinkisland home glyph */}
      <div className="interface-fragment top-left">
        <a href="/" className="glyph">⧊</a>
      </div>

      {/* Portal direct link (secondary)
      <div className="interface-fragment bottom-left">
        <a href="/portal" className="glyph">⧉</a>
      </div> */}

      {/* Symbolic glyphs for external links */}
      <div className="interface-fragment top-right">
        <a href="https://github.com/sirmojosodope" target="_blank" rel="noreferrer" className="glyph">∴</a>
        <a href="https://linkedin.com/in/lamontbarnett" target="_blank" rel="noreferrer" className="glyph">⧉</a>
      </div>
    </>
  )
}

export default Sidebar
