import React from 'react'
import './index.scss'

const Sidebar = () => {
  return (
    <>
      {/* Sigil Home Button */}
      <div className="interface-fragment top-left">
        <a href="/" className="sigil" aria-label="Home" />
      </div>

      {/* Symbolic Glyph Links */}
      <div className="interface-fragment top-right">
        <a
          href="https://github.com/sirmojosodope"
          target="_blank"
          rel="noreferrer"
          className="glyph"
        >
          ∴
        </a>
        <a
          href="https://linkedin.com/in/lamontbarnett"
          target="_blank"
          rel="noreferrer"
          className="glyph"
        >
          ⧉
        </a>
      </div>
    </>
  )
}

export default Sidebar
