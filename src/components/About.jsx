import { hobbies, personalDetails } from '../data.js'

function About() {
  return (
    <section id="about" className="section about-section">
      <h2 className="about-heading">
        <span className="about-me-text">ABOUT ME</span>
        <br />
        <span className="my-hobbies-text">MY HOBBIES</span>
      </h2>

      <div className="about-features">
        {hobbies.map(({ icon: Icon, name, description }) => (
          <div className="feature-item" key={name}>
            <div className="feature-icon">
              <Icon aria-hidden="true" />
            </div>
            <span className="feature-num">{name}</span>
            <p className="feature-text">{description}</p>
          </div>
        ))}
      </div>

      <div className="about-intro">
        <div className="about-intro-text">
          <p className="about-script">Hey There!</p>
          <h3 className="about-name">I'M MARY CHRIS</h3>

          <p className="about-desc">
            Passionate about design that inspires and engages, I focus on creating digital
            experiences that blend creativity with functionality. My work as a Web &amp; UI
            Designer is driven by the belief that every interface should not only look visually
            compelling but also feel intuitive and effortless for the user.
          </p>
          <p className="about-desc">
            I thrive on transforming ideas into interactive solutions that connect people with
            technology in meaningful ways. With a commitment to innovation and precision, I aim to
            craft designs that are responsive, user-centered, and impactful — leaving a lasting
            impression through both aesthetics and usability.
          </p>

          <a href="#contact" className="btn-outline">
            I'm so ready!
          </a>
        </div>

        <div className="about-details">
          <p className="about-desc">
            You can call me Mari, a 3rd-year Bachelor of Science in Computer Science student at
            Tangub City Global College. As a working student, I live in the house where I also
            work, balancing my responsibilities with my studies. Aside from the allowance I
            receive, I previously earned extra income through selling, though I have paused that
            for now.
          </p>

          <p className="about-desc">
            My journey as a working student began in senior high school, where I taught a 6-year-old
            child while completing my studies. This experience taught me patience, discipline, and
            the value of hard work. Today, I continue to apply those lessons as I pursue my degree,
            striving to grow both academically and personally.
          </p>

          <p className="about-desc">
            I am passionate about learning, resilient in overcoming challenges, and motivated to
            build a future in technology while staying grounded in the values of perseverance and
            dedication.
          </p>

          <div className="about-details-box">
            {personalDetails.map(({ label, value }) => (
              <div className="detail-item" key={label}>
                <span className="detail-label">{label}</span> {value}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default About
