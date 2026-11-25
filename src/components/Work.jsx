import { projects } from '../data.js'

function Work() {
  return (
    <section id="work" className="section work-section">
      <h2 className="section-title">My Work</h2>
      <p className="section-subtitle">A few projects I've worked on</p>

      <div className="work-grid">
        {projects.map(({ image, alt, title, description, link }) => (
          <div className="work-card" key={title}>
            <img src={image} alt={alt} className="work-img" />
            <div className="work-info">
              <h3>{title}</h3>
              <p>{description}</p>
              {link ? (
                <a href={link} target="_blank" rel="noopener noreferrer" className="btn-secondary">
                  View Project
                </a>
              ) : (
                <span className="btn-secondary disabled" aria-disabled="true">
                  View Project
                </span>
              )}
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}

export default Work
