import './style.css'

// Set up dark mode based on system preference
if (window.matchMedia('(prefers-color-scheme: dark)').matches) {
  document.documentElement.classList.add('dark')
}

document.querySelector('#app').innerHTML = `
  <header class="glass-strong sticky top-0 z-[100] py-4 shadow-lg">
    <nav class="max-w-screen-xl mx-auto px-8 flex justify-between items-center flex-col md:flex-row gap-4 md:gap-0">
      <h1 class="text-2xl font-bold text-white subtle-glow-blue">Matija Marić</h1>
      <ul class="flex list-none gap-8 md:gap-8 flex-col md:flex-row text-center md:text-left">
        <li><a href="#about" class="font-medium text-gray-200 hover:text-white smooth-transition hover:subtle-glow-cyan">About</a></li>
        <li><a href="#skills" class="font-medium text-gray-200 hover:text-white smooth-transition hover:subtle-glow-cyan">Skills</a></li>
        <li><a href="#projects" class="font-medium text-gray-200 hover:text-white smooth-transition hover:subtle-glow-cyan">Projects</a></li>
        <li><a href="#contact" class="font-medium text-gray-200 hover:text-white smooth-transition hover:subtle-glow-cyan">Contact</a></li>
      </ul>
    </nav>
  </header>

  <main class="flex-1">
    <section class="relative py-32 px-8 text-center overflow-hidden">
      <div class="absolute inset-0 bg-gradient-to-br from-blue-900/20 via-purple-900/20 to-pink-900/20"></div>
      <div class="max-w-3xl mx-auto relative z-10">
        <h2 class="text-5xl md:text-6xl font-bold mb-6 text-white subtle-glow-purple">Developer & Problem Solver</h2>
        <p class="text-xl mb-10 text-gray-300">Building elegant solutions to complex problems</p>
        <a href="#contact" class="apple-button inline-block py-4 px-10 rounded-2xl font-semibold text-white">Get In Touch</a>
      </div>
    </section>

    <section id="about" class="py-20 px-8 max-w-screen-xl mx-auto">
      <h2 class="text-4xl font-bold mb-10 text-center text-white subtle-glow-blue">About Me</h2>
      <div class="glass-card rounded-3xl p-8 md:p-12">
        <p class="text-lg max-w-3xl mx-auto text-center text-gray-300 leading-relaxed">
          I'm a passionate software developer with a focus on creating clean, efficient, and user-friendly applications. 
          I love tackling challenging problems and continuously learning new technologies.
        </p>
      </div>
    </section>

    <section id="skills" class="py-20 px-8 max-w-screen-xl mx-auto">
      <h2 class="text-4xl font-bold mb-10 text-center text-white subtle-glow-cyan">Skills</h2>
      <div class="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">
        <div class="glass-card rounded-3xl p-8 smooth-transition glass-hover">
          <h3 class="text-2xl mb-4 text-blue-300 font-semibold">Frontend</h3>
          <p class="text-gray-300">HTML, CSS, JavaScript, React, Vue</p>
        </div>
        <div class="glass-card rounded-3xl p-8 smooth-transition glass-hover">
          <h3 class="text-2xl mb-4 text-cyan-300 font-semibold">Backend</h3>
          <p class="text-gray-300">Node.js, Python, Java, SQL</p>
        </div>
        <div class="glass-card rounded-3xl p-8 smooth-transition glass-hover">
          <h3 class="text-2xl mb-4 text-purple-300 font-semibold">Tools & Technologies</h3>
          <p class="text-gray-300">Git, Docker, CI/CD, Cloud Services</p>
        </div>
      </div>
    </section>

    <section id="projects" class="py-20 px-8 max-w-screen-xl mx-auto">
      <h2 class="text-4xl font-bold mb-10 text-center text-white subtle-glow-purple">Projects</h2>
      <div class="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">
        <div class="glass-card rounded-3xl p-8 smooth-transition glass-hover">
          <h3 class="text-2xl mb-4 text-purple-300 font-semibold">Project Coming Soon</h3>
          <p class="text-gray-300">Stay tuned for my latest work and contributions</p>
        </div>
      </div>
    </section>

    <section id="contact" class="py-20 px-8 max-w-screen-xl mx-auto text-center">
      <h2 class="text-4xl font-bold mb-10 text-center text-white subtle-glow-cyan">Get In Touch</h2>
      <div class="glass-card rounded-3xl p-8 md:p-12 mb-8">
        <p class="text-lg max-w-2xl mx-auto text-gray-300">
          I'm always open to discussing new projects, opportunities, or collaborations.
        </p>
      </div>
      <div class="flex justify-center gap-6 flex-wrap">
        <a href="https://github.com/MatijaMaric" target="_blank" rel="noopener noreferrer" class="apple-button py-3 px-8 rounded-2xl font-medium text-white">GitHub</a>
        <a href="https://www.linkedin.com/in/matija-maric/" target="_blank" rel="noopener noreferrer" class="apple-button py-3 px-8 rounded-2xl font-medium text-white">LinkedIn</a>
        <a href="mailto:contact@matijamaric.com" class="apple-button py-3 px-8 rounded-2xl font-medium text-white">Email</a>
      </div>
    </section>
  </main>

  <footer class="glass py-8 text-center text-gray-400 border-t border-white/10">
    <p>&copy; ${new Date().getFullYear()} Matija Marić. All rights reserved.</p>
  </footer>
`
