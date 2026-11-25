import { Fragment, useEffect, useId, useRef, useState } from 'react'

function Dropdown({ label, items, onNavigate }) {
  const [isOpen, setIsOpen] = useState(false)
  const containerRef = useRef(null)
  const triggerRef = useRef(null)
  const menuId = useId()

  useEffect(() => {
    if (!isOpen) return

    const handlePointerDown = (event) => {
      if (!containerRef.current?.contains(event.target)) {
        setIsOpen(false)
      }
    }

    const handleKeyDown = (event) => {
      if (event.key === 'Escape') {
        setIsOpen(false)
        triggerRef.current?.focus()
      }
    }

    document.addEventListener('pointerdown', handlePointerDown)
    document.addEventListener('keydown', handleKeyDown)

    return () => {
      document.removeEventListener('pointerdown', handlePointerDown)
      document.removeEventListener('keydown', handleKeyDown)
    }
  }, [isOpen])

  const handleNavigate = () => {
    setIsOpen(false)
    onNavigate?.()
  }

  return (
    <div className="nav-dropdown" ref={containerRef}>
      <button
        type="button"
        ref={triggerRef}
        className={`nav-dropdown-trigger${isOpen ? ' open' : ''}`}
        aria-expanded={isOpen}
        aria-controls={menuId}
        onClick={() => setIsOpen((open) => !open)}
      >
        {label}
        <span className="nav-dropdown-chevron" aria-hidden="true" />
      </button>

      <ul className={`dropdown-menu${isOpen ? ' open' : ''}`} id={menuId}>
        {items.map(({ label: itemLabel, href, icon: Icon, external, separated }) => (
          <Fragment key={itemLabel}>
            {separated ? <li className="dropdown-divider" aria-hidden="true" /> : null}
            <li>
              <a
                href={href}
                onClick={handleNavigate}
                {...(external ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
              >
                {Icon ? <Icon className="dropdown-icon" aria-hidden="true" /> : null}
                <span>{itemLabel}</span>
                {external ? (
                  <span className="dropdown-external" aria-hidden="true">
                    &#8599;
                  </span>
                ) : null}
              </a>
            </li>
          </Fragment>
        ))}
      </ul>
    </div>
  )
}

export default Dropdown
