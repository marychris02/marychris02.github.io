import { skillBars, skills, tools } from '../data.js'

function Skills() {
  return (
    <section id="skills" className="section skills-section">
      <div className="skills-inner">
        <div className="skills-col skills-process">
          <h3 className="skills-heading">
            SKILLS<span className="skills-star">&#10022;</span>
          </h3>

          {skills.map(({ number, title, description }) => (
            <div className="process-item" key={number}>
              <span className="process-num">{number}</span>
              <div>
                <h4 className="process-title">{title}</h4>
                <p className="process-desc">{description}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="skills-col skills-center">
          <div className="skills-center-line" />
          <p className="skills-quote">
            A thoughtful
            <br />
            process for
            <br />
            meaningful results.
          </p>
        </div>

        <div className="skills-col skills-tools">
          <h3 className="skills-heading">
            TOOLS I USE <span className="skills-star">&#10022;</span>
          </h3>

          <div className="tools-grid">
            {tools.map(({ name, icon: Icon }) => (
              <div className="tool-badge" key={name}>
                <Icon className="tool-icon-img" aria-hidden="true" />
                {name}
              </div>
            ))}
          </div>

          <div className="skills-bars">
            {skillBars.map(({ name, value }) => (
              <div className="bar-item" key={name}>
                <div className="bar-top">
                  <span>{name}</span>
                  <span>{value}%</span>
                </div>
                <div className="bar-track">
                  <div className="bar-fill" style={{ width: `${value}%` }} />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default Skills
