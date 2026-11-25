import { profilePic } from '../data.js'

function Home() {
  return (
    <section id="home" className="section home-section">
      <div className="home-topbar">
        <span className="home-tag" />
        <span className="home-year">&#10022; 2026</span>
      </div>

      <h1 className="home-bigtitle">Web and UI Designer</h1>

      <img src={profilePic} alt="Mary Chris Malinao" className="profile-pic" />

      <div className="home-leftblock">
        <h2 className="home-roleheading">Creative</h2>
        <p className="home-desc">
          I design thoughtful digital experiences that combine strategy, aesthetics, and clarity
          to help brands stand out.
        </p>
      </div>

      <h3 className="home-fullname">
        Mary Chris
        <br />
        Malinao
      </h3>

      <div className="home-badge">
        <span className="home-badge-letter">M</span>
      </div>
    </section>
  )
}

export default Home
