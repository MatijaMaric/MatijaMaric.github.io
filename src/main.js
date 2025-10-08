import './style.css'

document.querySelector('#app').innerHTML = `
  <header class="header">
    <nav class="nav">
      <h1 class="logo">Matija Marić</h1>
      <ul class="nav-links">
        <li><a href="#about">About</a></li>
        <li><a href="#skills">Skills</a></li>
        <li><a href="#projects">Projects</a></li>
        <li><a href="#contact">Contact</a></li>
      </ul>
    </nav>
  </header>

  <main>
    <section class="hero">
      <div class="hero-content">
        <h2 class="hero-title">Developer & Problem Solver</h2>
        <p class="hero-subtitle">Building elegant solutions to complex problems</p>
        <a href="#contact" class="cta-button">Get In Touch</a>
      </div>
    </section>

    <section id="about" class="section about">
      <h2 class="section-title">About Me</h2>
      <p class="section-content">
        I'm a passionate software developer with a focus on creating clean, efficient, and user-friendly applications. 
        I love tackling challenging problems and continuously learning new technologies.
      </p>
    </section>

    <section id="skills" class="section skills">
      <h2 class="section-title">Skills</h2>
      <div class="skills-grid">
        <div class="skill-card">
          <h3>Frontend</h3>
          <p>HTML, CSS, JavaScript, React, Vue</p>
        </div>
        <div class="skill-card">
          <h3>Backend</h3>
          <p>Node.js, Python, Java, SQL</p>
        </div>
        <div class="skill-card">
          <h3>Tools & Technologies</h3>
          <p>Git, Docker, CI/CD, Cloud Services</p>
        </div>
      </div>
    </section>

    <section id="projects" class="section projects">
      <h2 class="section-title">Projects</h2>
      <div class="projects-grid">
        <div class="project-card">
          <h3>Project Coming Soon</h3>
          <p>Stay tuned for my latest work and contributions</p>
        </div>
      </div>
    </section>

    <section id="contact" class="section contact">
      <h2 class="section-title">Get In Touch</h2>
      <p class="contact-text">
        I'm always open to discussing new projects, opportunities, or collaborations.
      </p>
      <div class="contact-links">
        <a href="https://github.com/MatijaMaric" target="_blank" rel="noopener noreferrer" class="contact-link">GitHub</a>
        <a href="https://linkedin.com/in/matijamaric" target="_blank" rel="noopener noreferrer" class="contact-link">LinkedIn</a>
        <a href="mailto:contact@matijamaric.com" class="contact-link">Email</a>
      </div>
    </section>
  </main>

  <footer class="footer">
    <p>&copy; ${new Date().getFullYear()} Matija Marić. All rights reserved.</p>
  </footer>
`
