function Home() {
  return (
    <main>
      {/* Hero Section */}
      <section className="hero">
        <div className="hero-content">
          <div className="hero-badge"> Developer & AC Milan Fan</div>
          <h1>Hi, I'm Oduver Lopez</h1>
          <p>Computer Science Student · Web Developer</p>
          <div className="hero-buttons">
            <a href="#projects" className="btn-primary">View My Work</a>
            <a href="#contact" className="btn-secondary">Get In Touch</a>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="section">
        <div className="section-header">
          <h2>About Me</h2>
          <div className="underline"></div>
        </div>
        <div className="about-grid">
          <div className="about-text">
            <p>
              I'm a 4th year Computer Information Science student with a passion for building clean,
              functional web applications. Outside of coding, I love watching movies (I have seen over 500 films!), 
              working out, and supporting AC Milan.
            </p>
          </div>
          <div className="about-skills">
            <h3>Tech Stack</h3>
            <div className="skills-list">
              {['React', 'JavaScript', 'Node.js', 'Express', 'HTML/CSS', 'Git'].map(skill => (
                <span key={skill} className="skill-tag">{skill}</span>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="section section-dark">
        <div className="section-inner">
          <div className="section-header">
            <h2>Projects</h2>
            <div className="underline"></div>
          </div>
          <div className="projects-grid">
            <ProjectCard
              title="Budget Buddie"
              desc="Last semester in my CS 370 class, me and 3 other classmates worked on a budgeting app called Budget Buddie. It helps users track their expenses and set savings goals."
              tags={['JavaScript']}
              emoji="📋"
            />
            <ProjectCard
              title="Serie A Live"
              desc="A football statistics dashboard that pulls live Serie A data from a public API and visualizes player and match stats with interactive charts. This is an idea of mine. There's currently a rise in soccer statistics apps and I think it would be a great project to work on."
              tags={['HTML', 'CSS', 'JavaScript']}
              emoji="⚽"
            />
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="section">
        <div className="section-header">
          <h2>Contact</h2>
          <div className="underline"></div>
        </div>
        <p className="contact-intro">Have a project in mind or just want to connect? Reach out!</p>
        <div className="contact-cards">
          <div className="contact-card">
            <span className="contact-icon">📧</span>
            <div>
              <strong>Email</strong>
              <p>lopez1787@csusm.edu</p>
            </div>
          </div>
          <div className="contact-card">
            <span className="contact-icon">💻</span>
            <div>
              <strong>GitHub</strong>
              <p>github.com/Dxnylop016</p>
            </div>
          </div>
          <div className="contact-card">
            <span className="contact-icon">🔗</span>
            <div>
              <strong>LinkedIn</strong>
              <p>linkedin.com/in/danylopez</p>
            </div>
          </div>
        </div>
      </section>

      <footer className="footer">
        <p>Built with React by Oduver Lopez</p>
      </footer>
    </main>
  );
}

function ProjectCard({ title, desc, tags, emoji }) {
  return (
    <div className="project-card">
      <div className="project-emoji">{emoji}</div>
      <h3>{title}</h3>
      <p>{desc}</p>
      <div className="project-tags">
        {tags.map(tag => (
          <span key={tag} className="tag">{tag}</span>
        ))}
      </div>
    </div>
  );
}

export default Home;