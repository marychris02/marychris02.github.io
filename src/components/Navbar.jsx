import { useState } from 'react'
import Dropdown from './Dropdown.jsx'
import { contacts, navLinks } from '../data.js'

const connectItems = [
  ...contacts.map(({ icon, label, href }) => ({
    icon,
    label,
    href,
    external: href.startsWith('http'),
  })),
  { label: 'All contact options', href: '#contact', separated: true },
]

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
        {navLinks.map(({ label, href, dropdown }) =>
          dropdown ? (
            <Dropdown
              key={href}
              label={label}
              items={connectItems}
              onNavigate={closeMenu}
            />
          ) : (
            <a key={href} href={href} onClick={closeMenu}>
              {label}
            </a>
          ),
        )}
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
