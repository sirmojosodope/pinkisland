import React from 'react'
import { FaGithub, FaLinkedin } from 'react-icons/fa'
import './index.scss'

const Sidebar = () => {
  return (
    <>
      <div className="interface-fragment top-left">
        <a href="/" className="glyph">∴</a>
      </div>

      <div className="interface-fragment bottom-left">
        <a href="/portal" className="glyph">⧉</a>
      </div>

      <div className="interface-fragment top-right">
        <a href="https://github.com/sirmojosodope" target="_blank" rel="noreferrer">
          <FaGithub />
        </a>
        <a href="https://linkedin.com/in/lamontbarnett" target="_blank" rel="noreferrer">
          <FaLinkedin />
        </a>
      </div>
    </>
  )
}

export default Sidebar
