const EMAIL = 'dev@jpsg.dev'
const GITHUB = 'https://github.com/JuanPabloSGU'

const projects = [
  {
    year: '2024',
    name: 'Phishnet',
    tag: 'Capstone',
    stack: 'PyTorch · React · ELK · Triton',
    description:
      'ML-driven phishing detector combining NLP and image classification to flag malicious sites from page content and structure. Shipped as a browser extension backed by a full CI/CD pipeline deploying to a Triton inference server, with ELK dashboards for monitoring model performance in production.',
    link: 'https://github.com/JuanPabloSGU/phishnet',
  },
  {
    year: '2024',
    name: 'KPrintIPP',
    tag: 'Systems',
    stack: 'C',
    description:
      'A printer description language parser and renderer written from scratch in C — kernel, parser, and renderer built as independent pieces to understand how IPP print jobs get interpreted end to end.',
    link: 'https://github.com/JuanPabloSGU/KPrintIPP',
  },
  {
    year: '2025',
    name: 'Quic Streaming',
    tag: 'Networking',
    stack: 'Go · QUIC',
    description:
      'A minimal client/server pair streaming video over QUIC — hands-on exploration of the protocol as a lower-latency alternative to TCP for real-time media delivery.',
    link: 'https://github.com/JuanPabloSGU/quic-streaming',
  },
  {
    year: '2026',
    name: 'Slogen',
    tag: 'SRE tooling',
    stack: 'Go · Prometheus · PromQL',
    description:
      'A Sloth-inspired SLO generator: an API server and gateway that turn declarative YAML SLO definitions into PromQL queries and Prometheus rules, built to understand how SLO tooling works under the hood.',
    link: 'https://github.com/JuanPabloSGU/slogen',
  },
]

const experience = [
  { role: 'Digital Product Developer', org: 'House of Commons', period: 'Feb 2025 — Present' },
  { role: 'System Administrator', org: 'Field Effect Software', period: 'May 2024 — Feb 2025' },
  { role: 'IT Administrator Co-op', org: 'Field Effect Software', period: 'May 2023 — Aug 2023' },
  { role: 'DevOps Engineering Student', org: 'Fisheries and Oceans Canada', period: 'Sep 2022 — Dec 2022' },
]

function LineArt() {
  return (
    <svg
      className="hero-art"
      viewBox="0 0 320 320"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
    >
      <circle cx="160" cy="160" r="118" stroke="var(--line)" strokeWidth="1.5" />
      {/* monitor */}
      <rect x="92" y="108" width="136" height="88" rx="6" stroke="var(--accent)" strokeWidth="3" />
      <path d="M132 218 h56 M160 196 v22" stroke="var(--accent)" strokeWidth="3" strokeLinecap="round" />
      {/* code lines on screen */}
      <path d="M112 130 h44 M112 146 h64 M112 162 h32" stroke="var(--accent)" strokeWidth="3" strokeLinecap="round" />
      <path d="M40 70 Q62 48 92 58" stroke="var(--line)" strokeWidth="1.5" strokeLinecap="round" />
      <path d="M280 250 Q258 274 228 262" stroke="var(--line)" strokeWidth="1.5" strokeLinecap="round" />
      <circle cx="252" cy="82" r="4" fill="var(--accent)" />
      <circle cx="66" cy="242" r="4" fill="var(--accent)" />
    </svg>
  )
}

function App() {
  return (
    <div className="page">
      <header className="hero">
        <div className="hero-text">
          <p className="eyebrow">Software &amp; DevOps Engineer</p>
          <h1>Juan Pablo Sanchez Garcia</h1>
          <p className="hero-sub">
            I build backend systems and the infrastructure underneath them — currently at the
            House of Commons, previously at Field Effect. Outside of work I write low-level tools
            and self-hosted infrastructure for the sake of understanding how things actually work.
          </p>
          <div className="hero-links">
            <a className="button" href={`mailto:${EMAIL}`}>
              Get in touch
            </a>
            <a className="link" href={GITHUB} target="_blank" rel="noreferrer">
              GitHub ↗
            </a>
          </div>
        </div>
        <LineArt />
      </header>

      <section className="section" aria-labelledby="projects-heading">
        <h2 id="projects-heading">Projects</h2>
        <div className="timeline">
          {projects.map((project) => (
            <a
              key={project.name}
              className="timeline-item"
              href={project.link}
              target="_blank"
              rel="noreferrer"
            >
              <span className="timeline-year">{project.year}</span>
              <span className="timeline-dot" aria-hidden="true" />
              <div className="timeline-card">
                <div className="timeline-card-head">
                  <h3>{project.name}</h3>
                  <span className="tag">{project.tag}</span>
                </div>
                <p className="stack">{project.stack}</p>
                <p className="description">{project.description}</p>
              </div>
            </a>
          ))}
        </div>
      </section>

      <section className="section" aria-labelledby="experience-heading">
        <h2 id="experience-heading">Experience</h2>
        <ul className="experience-list">
          {experience.map((job) => (
            <li key={`${job.org}-${job.period}`}>
              <span className="job-role">{job.role}</span>
              <span className="job-org">{job.org}</span>
              <span className="job-period">{job.period}</span>
            </li>
          ))}
        </ul>
      </section>

      <footer className="section contact" aria-labelledby="contact-heading">
        <h2 id="contact-heading">Let&rsquo;s talk</h2>
        <p>
          Reach out at{' '}
          <a className="link" href={`mailto:${EMAIL}`}>
            {EMAIL}
          </a>
        </p>
      </footer>
    </div>
  )
}

export default App
