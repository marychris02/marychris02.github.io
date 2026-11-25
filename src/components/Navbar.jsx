import { useState } from 'react'
import { navLinks } from '../data.js'

function Navbar() {
  const [isOpen, setIsOpen] = useState(false)

  const closeMenu = () => setIsOpen(false)

  const handleKeyDown = (event) => {
    if (event.key === 'Enter' || event.key === ' ') {
      event.preventDefault()
      setIsOpen((open) => !open)
    }
  }

  return (
    <header className="navbar">
      <div className="nav-brand">PORTFOLIO</div>

      <nav className={`nav-links${isOpen ? ' active' : ''}`}>
        {navLinks.map(({ label, href }) => (
          <a key={href} href={href} onClick={closeMenu}>
            {label}
          </a>
        ))}
      </nav>

      <div
        className={`hamburger${isOpen ? ' active' : ''}`}
        onClick={() => setIsOpen((open) => !open)}
        onKeyDown={handleKeyDown}
        role="button"
        tabIndex={0}
        aria-label="Toggle navigation menu"
        aria-expanded={isOpen}
      >
        <span />
        <span />
        <span />
      </div>
    </header>
  )
}

export default Navbar
