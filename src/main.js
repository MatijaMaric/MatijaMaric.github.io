import './style.css'

// Set up dark mode based on system preference
if (window.matchMedia('(prefers-color-scheme: dark)').matches) {
  document.documentElement.classList.add('dark')
}

document.querySelector('#app').innerHTML = `
  <header class="bg-black border-b border-neon-cyan py-4 sticky top-0 z-[100] backdrop-blur-sm bg-opacity-90">
    <nav class="max-w-screen-xl mx-auto px-8 flex justify-between items-center flex-col md:flex-row gap-4 md:gap-0">
      <h1 class="text-2xl font-bold text-neon-cyan neon-glow-cyan">Matija Marić</h1>
      <ul class="flex list-none gap-8 md:gap-8 flex-col md:flex-row text-center md:text-left">
        <li><a href="#about" class="font-medium text-neon-cyan hover:neon-glow-cyan transition-all">About</a></li>
        <li><a href="#skills" class="font-medium text-neon-cyan hover:neon-glow-cyan transition-all">Skills</a></li>
        <li><a href="#projects" class="font-medium text-neon-cyan hover:neon-glow-cyan transition-all">Projects</a></li>
        <li><a href="#contact" class="font-medium text-neon-cyan hover:neon-glow-cyan transition-all">Contact</a></li>
      </ul>
    </nav>
  </header>

  <main class="flex-1">
    <section class="bg-gradient-to-br from-purple-950 via-black to-purple-950 text-white py-32 px-8 text-center relative overflow-hidden">
      <div class="max-w-3xl mx-auto relative z-10">
        <h2 class="text-5xl md:text-5xl font-extrabold mb-4 text-neon-magenta neon-glow-magenta">Developer & Problem Solver</h2>
        <p class="text-xl mb-8 text-neon-cyan">Building elegant solutions to complex problems</p>
        <a href="#contact" class="inline-block bg-black text-neon-cyan border-2 border-neon-cyan py-3.5 px-8 rounded-lg font-semibold hover:neon-border-cyan hover:-translate-y-0.5 transition-all">Get In Touch</a>
      </div>
    </section>

    <section id="about" class="py-16 px-8 max-w-screen-xl mx-auto">
      <h2 class="text-4xl font-bold mb-8 text-center text-neon-purple neon-glow-purple">About Me</h2>
      <p class="text-lg max-w-3xl mx-auto text-center text-gray-300 leading-relaxed">
        I'm a passionate software developer with a focus on creating clean, efficient, and user-friendly applications. 
        I love tackling challenging problems and continuously learning new technologies.
      </p>
    </section>

    <section id="skills" class="py-16 px-8 max-w-screen-xl mx-auto bg-black bg-opacity-50">
      <h2 class="text-4xl font-bold mb-8 text-center text-neon-cyan neon-glow-cyan">Skills</h2>
      <div class="grid grid-cols-1 md:grid-cols-3 gap-8 mt-8">
        <div class="bg-black p-8 rounded-lg border-2 border-neon-magenta hover:neon-border-magenta hover:-translate-y-1 transition-all">
          <h3 class="text-2xl mb-3 text-neon-magenta neon-glow-magenta">Frontend</h3>
          <p class="text-gray-300">HTML, CSS, JavaScript, React, Vue</p>
        </div>
        <div class="bg-black p-8 rounded-lg border-2 border-neon-cyan hover:neon-border-cyan hover:-translate-y-1 transition-all">
          <h3 class="text-2xl mb-3 text-neon-cyan neon-glow-cyan">Backend</h3>
          <p class="text-gray-300">Node.js, Python, Java, SQL</p>
        </div>
        <div class="bg-black p-8 rounded-lg border-2 border-neon-purple hover:neon-border-purple hover:-translate-y-1 transition-all">
          <h3 class="text-2xl mb-3 text-neon-purple neon-glow-purple">Tools & Technologies</h3>
          <p class="text-gray-300">Git, Docker, CI/CD, Cloud Services</p>
        </div>
      </div>
    </section>

    <section id="projects" class="py-16 px-8 max-w-screen-xl mx-auto">
      <h2 class="text-4xl font-bold mb-8 text-center text-neon-magenta neon-glow-magenta">Projects</h2>
      <div class="grid grid-cols-1 md:grid-cols-3 gap-8 mt-8">
        <div class="bg-black p-8 rounded-lg border-2 border-neon-purple hover:neon-border-purple hover:-translate-y-1 transition-all">
          <h3 class="text-2xl mb-3 text-neon-purple neon-glow-purple">Project Coming Soon</h3>
          <p class="text-gray-300">Stay tuned for my latest work and contributions</p>
        </div>
      </div>
    </section>

    <section id="contact" class="py-16 px-8 max-w-screen-xl mx-auto bg-black bg-opacity-50 text-center">
      <h2 class="text-4xl font-bold mb-8 text-center text-neon-green neon-glow-green">Get In Touch</h2>
      <p class="text-lg max-w-2xl mx-auto mb-8 text-gray-300">
        I'm always open to discussing new projects, opportunities, or collaborations.
      </p>
      <div class="flex justify-center gap-6 flex-wrap">
        <a href="https://github.com/MatijaMaric" target="_blank" rel="noopener noreferrer" class="inline-block py-3 px-6 bg-black text-neon-cyan border-2 border-neon-cyan rounded-lg font-medium hover:neon-border-cyan hover:-translate-y-0.5 transition-all">GitHub</a>
        <a href="https://www.linkedin.com/in/matija-maric/" target="_blank" rel="noopener noreferrer" class="inline-block py-3 px-6 bg-black text-neon-magenta border-2 border-neon-magenta rounded-lg font-medium hover:neon-border-magenta hover:-translate-y-0.5 transition-all">LinkedIn</a>
        <a href="mailto:contact@matijamaric.com" class="inline-block py-3 px-6 bg-black text-neon-purple border-2 border-neon-purple rounded-lg font-medium hover:neon-border-purple hover:-translate-y-0.5 transition-all">Email</a>
      </div>
    </section>
  </main>

  <footer class="bg-black border-t border-neon-cyan py-8 text-center text-gray-300">
    <p>&copy; ${new Date().getFullYear()} Matija Marić. All rights reserved.</p>
  </footer>
`
