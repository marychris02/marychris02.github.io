import { contacts } from '../data.js'

function Contact() {
  return (
    <section id="contact" className="section contact-section">
      <h2 className="section-title">Contact Me</h2>
      <p className="section-subtitle">Let's connect! Reach out through any of these:</p>

      <div className="contact-grid">
        {contacts.map(({ icon: Icon, label, href }) => {
          const isExternal = href.startsWith('http')

          return (
            <a
              key={label}
              href={href}
              className="contact-item"
              {...(isExternal ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
            >
              <span className="contact-icon">
                <Icon aria-hidden="true" />
              </span>
              {label}
            </a>
          )
        })}
      </div>
    </section>
  )
}

export default Contact
