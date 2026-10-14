import { useEffect, useState } from 'react'
import './App.css'

const projects = [
  {
    number: '01',
    slug: 'biyahero',
    name: 'BiyaHero',
    kind: 'Capstone project · Front-end developer',
    date: 'May 2026',
    description: 'A route management and safety reporting platform. Built the interface, added search and filtering interactions, and integrated a Mapbox map to help admins review reports and explore route coverage.',
    tools: ['React', 'Vite', 'Mapbox'],
    visual: 'map',
    thumbnail: '/projects/biyahero/login.png',
    screenshots: [
      { label: 'Login page', src: '/projects/biyahero/login.png', alt: 'BiyaHero login screen' },
      { label: 'Dashboard', src: '/projects/biyahero/dashboard.png', alt: 'BiyaHero dashboard overview' },
      { label: 'Report management', src: '/projects/biyahero/reports.png', alt: 'BiyaHero report management map and filters' },
      { label: 'Route management', src: '/projects/biyahero/routes.png', alt: 'BiyaHero route management map and filters' },
    ],
    overview: 'BiyaHero is a capstone project focused on transportation safety. The web app brings route information and community reports together so administrators can review safety concerns and explore route coverage.',
    galleryNote: 'Account management, security, and activity screens are left out of this showcase.',
    contributions: [
      'Built the front-end interface with React and Vite.',
      'Added search, dropdown, and filtering interactions to help users find information.',
      'Integrated a map into the interface to make route information easier to explore.',
    ],
  },
  {
    number: '02',
    slug: 'degraded',
    name: 'E-commerce Website',
    kind: 'University project · Main developer',
    date: 'June 2025',
    description: 'Developed an online shopping experience with authentication, product catalog, cart, and checkout. Coordinated front-end and back-end integration with a four-person team.',
    tools: ['HTML', 'CSS', 'JavaScript', 'PHP', 'MySQL'],
    visual: 'shop',
    thumbnail: '/projects/degraded/home.png',
    screenshots: [
      { label: 'Home page', src: '/projects/degraded/home.png', alt: 'Degraded streetwear store home page' },
      { label: 'Product shop', src: '/projects/degraded/shop.png', alt: 'Degraded product catalog with category filters' },
      { label: 'Login and sign up', src: '/projects/degraded/login.png', alt: 'Degraded login and sign-up screen' },
      { label: 'Shopping cart', src: '/projects/degraded/cart.png', alt: 'Degraded shopping cart and order total' },
      { label: 'About the brand', src: '/projects/degraded/about.png', alt: 'About the Degraded streetwear brand' },
    ],
    overview: 'An e-commerce website built for Degraded, a streetwear clothing brand. Customers can browse and filter products, create an account, add items to a cart, and continue through checkout.',
    galleryNote: 'Profile and checkout screens are left out because they show account details.',
    contributions: [
      'Developed the e-commerce website as the main developer and coordinated a four-person team.',
      'Implemented authentication, a product catalog, a shopping cart, and checkout flow.',
      'Built with HTML, CSS, JavaScript, and PHP, backed by MySQL.',
      'Coordinated front-end and back-end integration across the team.',
    ],
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

function ProjectArt({ type, thumbnail }) {
  if (thumbnail) {
    return (
      <div className={`project-art ${type === 'shop' ? 'shop-art' : 'map-art'}`} aria-hidden="true">
        <img className="project-thumbnail" src={thumbnail} alt="" onError={(event) => event.currentTarget.remove()} />
      </div>
    )
  }

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
  const content = (
    <>
      <ProjectArt type={project.visual} thumbnail={project.thumbnail} />
      <div className="project-details">
        <div className="project-meta"><span>{project.kind}</span><time>{project.date}</time></div>
        <h3>{project.name}</h3>
        <p>{project.description}</p>
        <ul className="tag-list" aria-label="Technologies used">
          {project.tools.map((tool) => <li key={tool}>{tool}</li>)}
        </ul>
      </div>
    </>
  )

  if (!project.screenshots) return <article className="project-card">{content}</article>

  return <a className="project-card project-card-link" href={`#/projects/${project.slug}`} aria-label={`View ${project.name} project details`}>{content}</a>
}

function ProjectDetails({ project }) {
  return (
    <main className="project-page page-width">
      <div className="project-page-nav">
        <a className="wordmark" href="/#home" aria-label="Roan Villaluz home"><span>R</span> ROAN VILLALUZ<span className="wordmark-dot">.</span></a>
        <a className="simple-link" href="/#work">← Back to all projects</a>
      </div>

      <section className="project-page-intro" aria-labelledby="project-page-title">
        <p className="eyebrow">{project.kind.toUpperCase()}</p>
        <h1 id="project-page-title">{project.name}<span>.</span></h1>
        <p className="project-dialog-lede">{project.overview}</p>
        <p className="project-detail-date">{project.date} · National University Manila</p>
      </section>

      <div className="project-page-cover"><img src={project.thumbnail} alt={`${project.name} project preview`} /></div>

      <div className="project-detail-columns">
        <section>
          <h2>What I worked on</h2>
          <ul>{project.contributions.map((item) => <li key={item}>{item}</li>)}</ul>
        </section>
        <section>
          <h2>Tools used</h2>
          <ul className="tag-list">{project.tools.map((tool) => <li key={tool}>{tool}</li>)}</ul>
        </section>
      </div>

      <section className="project-showcase" aria-labelledby="project-showcase-title">
        <div className="project-showcase-heading"><div><p className="micro-label">PRODUCT SHOWCASE</p><h2 id="project-showcase-title">Screens from {project.name}</h2></div><p>{project.galleryNote}</p></div>
        <div className="screenshot-gallery">
          {project.screenshots.map((screenshot) => (
            <figure className="screenshot-card" key={screenshot.src}>
              <div className="screenshot-frame"><img src={screenshot.src} alt={screenshot.alt} /></div>
              <figcaption>{screenshot.label}</figcaption>
            </figure>
          ))}
        </div>
      </section>

      <div className="project-page-bottom"><a className="button button-primary" href="/#work">← Back to all projects</a><a className="simple-link" href="/#contact">Get in touch <Arrow diagonal /></a></div>
    </main>
  )
}

function App() {
  const [activeProject, setActiveProject] = useState(() => {
    const slug = window.location.hash.match(/^#\/projects\/([^/]+)$/)?.[1]
    return projects.find((project) => project.slug === slug) ?? null
  })

  useEffect(() => {
    const syncProjectRoute = () => {
      const slug = window.location.hash.match(/^#\/projects\/([^/]+)$/)?.[1]
      setActiveProject(projects.find((project) => project.slug === slug) ?? null)
    }

    window.addEventListener('hashchange', syncProjectRoute)
    return () => window.removeEventListener('hashchange', syncProjectRoute)
  }, [])

  useEffect(() => {
    if (activeProject) {
      window.scrollTo(0, 0)
      return
    }

    const sectionId = window.location.hash.slice(1)
    if (!sectionId || sectionId.startsWith('/')) return
    requestAnimationFrame(() => document.getElementById(sectionId)?.scrollIntoView())
  }, [activeProject])

  if (activeProject) return <ProjectDetails project={activeProject} />

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
              <a className="button button-outline" href="/resume.pdf" download="Roan-Villaluz-Resume.pdf" aria-label="Download Roan Villaluz's resume as a PDF">Download resume</a>
              <a className="simple-link" href="mailto:vroan21@gmail.com">Get in touch <Arrow diagonal /></a>
            </div>
            <div className="hero-footnote"><span>MANILA, PHILIPPINES</span><span>WEB · MOBILE · SOFTWARE</span></div>
          </div>
          <div className="hero-graphic">
            <div className="graphic-ring ring-outer" aria-hidden="true" />
            <div className="graphic-ring ring-inner" aria-hidden="true" />
            <div className="graphic-orb"><img src="/profile.jpg" alt="Portrait of Roan Villaluz" /></div>
            <span className="graphic-star star-top" aria-hidden="true">✳</span>
            <span className="graphic-star star-bottom" aria-hidden="true">✳</span>
            <span className="graphic-caption" aria-hidden="true">A LITTLE CURIOSITY GOES A LONG WAY</span>
          </div>
          <a className="scroll-note" href="#about"><span /> SCROLL TO EXPLORE</a>
        </section>

        <section className="about-section page-width" id="about">
          <div className="section-label"><span>01 / ABOUT</span><i /></div>
          <div className="about-grid">
            <h2>Hi, I'm<br /><span>Roan James A. Villaluz.</span></h2>
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
            <p className="work-note">Select a project to view its details and screenshots.</p>
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
