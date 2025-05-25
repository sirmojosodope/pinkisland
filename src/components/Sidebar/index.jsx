import React from 'react'
import './index.scss'
import Sigil from '../Sigil/'

const Sidebar = () => {
  return (
    <>
      <div className="interface-fragment top-left">
        <a href="/">
          <img src={Sigil} className="sigil-icon" alt="" />
        </a>
      </div>

      <div className="interface-fragment top-right">
        <a href="https://github.com/sirmojosodope" target="_blank" rel="noreferrer" className="glyph">∴</a>
        <a href="https://linkedin.com/in/lamontbarnett" target="_blank" rel="noreferrer" className="glyph">⧉</a>
      </div>
    </>
  )
}

export default Sidebar
