import './App.css'

const projects = [
  {
    number: '01',
    name: 'BiyaHero',
    kind: 'Capstone project · Front-end developer',
    date: 'May 2026',
    description: 'A map-centered travel concept. Built the interface, added search and filtering interactions, and integrated a Leaflet map to help people explore routes.',
    tools: ['React', 'Vite', 'Leaflet'],
    visual: 'map',
  },
  {
    number: '02',
    name: 'E-commerce Website',
    kind: 'University project · Main developer',
    date: 'June 2025',
    description: 'Developed an online shopping experience with authentication, product catalog, cart, and checkout. Coordinated front-end and back-end integration with a four-person team.',
    tools: ['HTML', 'CSS', 'JavaScript', 'PHP', 'MySQL'],
    visual: 'shop',
  },
]

const skillGroups = [
  { label: 'Web development', skills: ['React', 'Vite', 'Node.js', 'HTML', 'CSS'] },
  { label: 'Mobile development', skills: ['Flutter'] },
  { label: 'Programming languages', skills: ['JavaScript', 'Java', 'Dart', 'SQL'] },
  { label: 'Database & tools', skills: ['MongoDB', 'Git', 'GitHub', 'Vercel'] },
]

const workshops = [
  ['2026', 'Navigating The Professional World', 'Student Interview Workshop'],
  ['2026', 'Debugging Your Resume', 'Coding the Perfect Profile'],
  ['2024', 'Level IT Up!', 'Web and Mobile App Development Mastery'],
  ['2024', 'Google Talks 2', 'Learning about AI and Google Studio AI'],
  ['2024', 'Finding Balance', 'Time Management for Students'],
]

function Arrow({ diagonal = false }) {
  return <span className="arrow" aria-hidden="true">{diagonal ? '↗' : '→'}</span>
}

function ProjectArt({ type }) {
  if (type === 'map') {
    return (
      <div className="project-art map-art" aria-hidden="true">
        <div className="map-lines" />
        <span className="map-route map-route-a" />
        <span className="map-route map-route-b" />
        <span className="map-pin map-pin-a">✦</span>
        <span className="map-pin map-pin-b">✦</span>
        <div className="map-art-label"><span /> BIYAHERO <i>MAP VIEW</i></div>
        <div className="map-popover"><small>Nearby routes</small><b>Explore your next stop <Arrow /></b></div>
      </div>
    )
  }

  return (
    <div className="project-art shop-art" aria-hidden="true">
      <div className="shop-mock">
        <div className="shop-nav"><b>everyday<span>.</span></b><small>SHOP&nbsp;&nbsp; ABOUT&nbsp;&nbsp; BAG (0)</small></div>
        <div className="shop-body">
          <div><small>MADE FOR YOUR DAY</small><b>Find your<br />everyday<br /><i>favorite.</i></b><em>BROWSE COLLECTION <Arrow /></em></div>
          <div className="shop-product"><span /></div>
        </div>
        <div className="shop-foot"><span>01 — NEW ARRIVALS</span><span>CURATED WITH CARE</span></div>
      </div>
    </div>
  )
}

function ProjectCard({ project }) {
  return (
    <article className="project-card">
      <ProjectArt type={project.visual} />
      <div className="project-details">
        <div className="project-meta"><span>{project.kind}</span><time>{project.date}</time></div>
        <h3>{project.name}</h3>
        <p>{project.description}</p>
        <ul className="tag-list" aria-label="Technologies used">
          {project.tools.map((tool) => <li key={tool}>{tool}</li>)}
        </ul>
      </div>
    </article>
  )
}

function App() {
  return (
    <>
      <header className="site-header">
        <a className="wordmark" href="#home" aria-label="Roan Villaluz home"><span>R</span> ROAN VILLALUZ<span className="wordmark-dot">.</span></a>
        <nav aria-label="Main navigation">
          <a href="#about">About</a>
          <a href="#work">Projects</a>
          <a href="#skills">Skills</a>
          <a className="nav-cta" href="#contact">Contact <Arrow diagonal /></a>
        </nav>
      </header>

      <main>
        <section className="hero page-width" id="home">
          <div className="hero-copy">
            <p className="eyebrow"><span className="availability-dot" /> OPEN TO INTERNSHIP OPPORTUNITIES</p>
            <h1>IT student<br />into <span>web &amp; mobile.</span></h1>
            <p className="hero-description">I’m studying Information Technology at National University Manila and building my skills through hands-on web and mobile projects.</p>
            <div className="hero-actions">
              <a className="button button-primary" href="#work">Explore my work <Arrow /></a>
              <a className="simple-link" href="mailto:vroan21@gmail.com">Get in touch <Arrow diagonal /></a>
            </div>
            <div className="hero-footnote"><span>MANILA, PHILIPPINES</span><span>WEB · MOBILE · SOFTWARE</span></div>
          </div>
          <div className="hero-graphic" aria-hidden="true">
            <div className="graphic-ring ring-outer" />
            <div className="graphic-ring ring-inner" />
            <div className="graphic-orb"><span>R</span></div>
            <span className="graphic-star star-top">✳</span>
            <span className="graphic-star star-bottom">✳</span>
            <span className="graphic-caption">A LITTLE CURIOSITY GOES A LONG WAY</span>
          </div>
          <a className="scroll-note" href="#about"><span /> SCROLL TO EXPLORE</a>
        </section>

        <section className="about-section page-width" id="about">
          <div className="section-label"><span>01 / ABOUT</span><i /></div>
          <div className="about-grid">
            <h2>Good work starts<br />with <span>curiosity.</span></h2>
            <div className="about-copy">
              <p>I’m pursuing a Bachelor of Science in Information Technology at National University Manila, majoring in Mobile and Web Application.</p>
              <p>My university projects have given me experience with front-end development, databases, and team collaboration. I’m looking for an internship where I can contribute, strengthen my skills, and learn from an experienced team.</p>
              <a className="simple-link accent-link" href="https://www.linkedin.com/in/roan-villaluz-651072328/" target="_blank" rel="noreferrer">Connect on LinkedIn <Arrow diagonal /></a>
            </div>
          </div>
          <div className="qualities">
            <div><span>01</span><b>Curious learner</b><small>Always exploring how things work</small></div>
            <div><span>02</span><b>Team-minded</b><small>Comfortable building together</small></div>
            <div><span>03</span><b>Hands-on</b><small>Learning by making real projects</small></div>
          </div>
        </section>

        <section className="work-section" id="work">
          <div className="page-width work-inner">
            <div className="section-label"><span>02 / SELECTED WORK</span><i /></div>
            <div className="work-intro"><h2>Projects with<br />purpose<span>.</span></h2><p>A selection of university projects where I’ve put my development skills into practice.</p></div>
            <div className="project-grid">{projects.map((project) => <ProjectCard key={project.number} project={project} />)}</div>
            <p className="work-note">Project previews are illustrative. Add real screenshots, demos, and repository links as they become available.</p>
          </div>
        </section>

        <section className="skills-section page-width" id="skills">
          <div className="section-label"><span>03 / TOOLKIT</span><i /></div>
          <div className="skills-layout">
            <div><h2>Tools I use<br />to <span>make things.</span></h2><p className="skills-intro">A growing toolkit shaped by coursework, experimentation, and project work.</p></div>
            <div className="skill-groups">
              {skillGroups.map((group, index) => (
                <div className="skill-row" key={group.label}>
                  <span className="skill-index">0{index + 1}</span>
                  <h3>{group.label}</h3>
                  <ul>{group.skills.map((skill) => <li key={skill}>{skill}</li>)}</ul>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="background-section">
          <div className="page-width background-inner">
            <div className="section-label"><span>04 / BACKGROUND</span><i /></div>
            <div className="education-layout">
              <div><h2>Learning<br />in progress<span>.</span></h2><p className="micro-label">EDUCATION</p></div>
              <div className="education-detail">
                <time>AUG 2023 — PRESENT</time>
                <h3>National University Manila</h3>
                <p>Bachelor of Science in Information Technology<br />Major in Mobile and Web Application</p>
                <span className="honor-tag">✦ Dean’s Lister</span>
              </div>
            </div>
            <div className="workshops"><h3>Seminars & workshops</h3><ul>{workshops.map(([year, name, detail]) => <li key={name}><time>{year}</time><b>{name}</b><span>{detail}</span></li>)}</ul></div>
          </div>
        </section>

        <section className="contact-section page-width" id="contact">
          <div className="section-label"><span>05 / CONTACT</span><i /></div>
          <div className="contact-layout">
            <div><p className="eyebrow">HAVE AN OPPORTUNITY IN MIND?</p><h2>Let’s make<br />something <span>matter.</span></h2></div>
            <div className="contact-copy">
              <p>I’m open to internship opportunities and conversations about web and mobile development.</p>
              <a className="button button-soft" href="mailto:vroan21@gmail.com">vroan21@gmail.com <Arrow diagonal /></a>
              <div className="social-links">
                <a href="https://www.linkedin.com/in/roan-villaluz-651072328/" target="_blank" rel="noreferrer">LinkedIn <Arrow diagonal /></a>
                <a href="https://github.com/roan-hub" target="_blank" rel="noreferrer">GitHub <Arrow diagonal /></a>
              </div>
            </div>
          </div>
        </section>
      </main>

      <footer className="site-footer page-width">
        <a className="wordmark" href="#home"><span>R</span> ROAN VILLALUZ<span className="wordmark-dot">.</span></a>
        <small>BUILT WITH REACT + VITE</small>
        <a className="back-top" href="#home">BACK TO TOP ↑</a>
      </footer>
    </>
  )
}

export default App
