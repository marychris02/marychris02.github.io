import { socials } from '../data.js'

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-socials">
        {socials.map(({ icon: Icon, label, href }) => (
          <a
            key={label}
            href={href}
            {...(href.startsWith('http') ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
          >
            <Icon aria-hidden="true" /> {label}
          </a>
        ))}
      </div>
      <p>&copy; 2026 Mary Chris | PORTFOLIO.</p>
    </footer>
  )
}

export default Footer
