import './style.css'

// Set up dark mode based on system preference
if (window.matchMedia('(prefers-color-scheme: dark)').matches) {
  document.documentElement.classList.add('dark')
}

document.querySelector('#app').innerHTML = `
  <header class="bg-gray-100 dark:bg-gray-800 border-b border-gray-200 dark:border-gray-700 py-4 sticky top-0 z-[100]">
    <nav class="max-w-screen-xl mx-auto px-8 flex justify-between items-center flex-col md:flex-row gap-4 md:gap-0">
      <h1 class="text-2xl font-bold text-blue-600 dark:text-blue-400">Matija Marić</h1>
      <ul class="flex list-none gap-8 md:gap-8 flex-col md:flex-row text-center md:text-left">
        <li><a href="#about" class="font-medium text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors">About</a></li>
        <li><a href="#skills" class="font-medium text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors">Skills</a></li>
        <li><a href="#projects" class="font-medium text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors">Projects</a></li>
        <li><a href="#contact" class="font-medium text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors">Contact</a></li>
      </ul>
    </nav>
  </header>

  <main class="flex-1">
    <section class="bg-gradient-to-br from-blue-600 to-blue-800 text-white py-32 px-8 text-center">
      <div class="max-w-3xl mx-auto">
        <h2 class="text-5xl md:text-5xl font-extrabold mb-4">Developer & Problem Solver</h2>
        <p class="text-xl mb-8 opacity-90">Building elegant solutions to complex problems</p>
        <a href="#contact" class="inline-block bg-white text-blue-600 py-3.5 px-8 rounded-lg font-semibold hover:-translate-y-0.5 hover:shadow-2xl transition-all">Get In Touch</a>
      </div>
    </section>

    <section id="about" class="py-16 px-8 max-w-screen-xl mx-auto">
      <h2 class="text-4xl font-bold mb-8 text-center text-gray-800 dark:text-gray-100">About Me</h2>
      <p class="text-lg max-w-3xl mx-auto text-center text-gray-600 dark:text-gray-400 leading-relaxed">
        I'm a passionate software developer with a focus on creating clean, efficient, and user-friendly applications. 
        I love tackling challenging problems and continuously learning new technologies.
      </p>
    </section>

    <section id="skills" class="py-16 px-8 max-w-screen-xl mx-auto bg-gray-100 dark:bg-gray-800">
      <h2 class="text-4xl font-bold mb-8 text-center text-gray-800 dark:text-gray-100">Skills</h2>
      <div class="grid grid-cols-1 md:grid-cols-3 gap-8 mt-8">
        <div class="bg-white dark:bg-gray-900 p-8 rounded-lg border border-gray-200 dark:border-gray-700 hover:-translate-y-1 hover:shadow-xl transition-all">
          <h3 class="text-2xl mb-3 text-blue-600 dark:text-blue-400">Frontend</h3>
          <p class="text-gray-600 dark:text-gray-400">HTML, CSS, JavaScript, React, Vue</p>
        </div>
        <div class="bg-white dark:bg-gray-900 p-8 rounded-lg border border-gray-200 dark:border-gray-700 hover:-translate-y-1 hover:shadow-xl transition-all">
          <h3 class="text-2xl mb-3 text-blue-600 dark:text-blue-400">Backend</h3>
          <p class="text-gray-600 dark:text-gray-400">Node.js, Python, Java, SQL</p>
        </div>
        <div class="bg-white dark:bg-gray-900 p-8 rounded-lg border border-gray-200 dark:border-gray-700 hover:-translate-y-1 hover:shadow-xl transition-all">
          <h3 class="text-2xl mb-3 text-blue-600 dark:text-blue-400">Tools & Technologies</h3>
          <p class="text-gray-600 dark:text-gray-400">Git, Docker, CI/CD, Cloud Services</p>
        </div>
      </div>
    </section>

    <section id="projects" class="py-16 px-8 max-w-screen-xl mx-auto">
      <h2 class="text-4xl font-bold mb-8 text-center text-gray-800 dark:text-gray-100">Projects</h2>
      <div class="grid grid-cols-1 md:grid-cols-3 gap-8 mt-8">
        <div class="bg-gray-100 dark:bg-gray-800 p-8 rounded-lg border border-gray-200 dark:border-gray-700 hover:-translate-y-1 hover:shadow-xl transition-all">
          <h3 class="text-2xl mb-3 text-gray-800 dark:text-gray-100">Project Coming Soon</h3>
          <p class="text-gray-600 dark:text-gray-400">Stay tuned for my latest work and contributions</p>
        </div>
      </div>
    </section>

    <section id="contact" class="py-16 px-8 max-w-screen-xl mx-auto bg-gray-100 dark:bg-gray-800 text-center">
      <h2 class="text-4xl font-bold mb-8 text-center text-gray-800 dark:text-gray-100">Get In Touch</h2>
      <p class="text-lg max-w-2xl mx-auto mb-8 text-gray-600 dark:text-gray-400">
        I'm always open to discussing new projects, opportunities, or collaborations.
      </p>
      <div class="flex justify-center gap-6 flex-wrap">
        <a href="https://github.com/MatijaMaric" target="_blank" rel="noopener noreferrer" class="inline-block py-3 px-6 bg-blue-600 text-white rounded-lg font-medium hover:bg-blue-700 hover:-translate-y-0.5 transition-all">GitHub</a>
        <a href="https://www.linkedin.com/in/matija-maric/" target="_blank" rel="noopener noreferrer" class="inline-block py-3 px-6 bg-blue-600 text-white rounded-lg font-medium hover:bg-blue-700 hover:-translate-y-0.5 transition-all">LinkedIn</a>
        <a href="mailto:contact@matijamaric.com" class="inline-block py-3 px-6 bg-blue-600 text-white rounded-lg font-medium hover:bg-blue-700 hover:-translate-y-0.5 transition-all">Email</a>
      </div>
    </section>
  </main>

  <footer class="bg-gray-100 dark:bg-gray-800 border-t border-gray-200 dark:border-gray-700 py-8 text-center text-gray-600 dark:text-gray-400">
    <p>&copy; ${new Date().getFullYear()} Matija Marić. All rights reserved.</p>
  </footer>
`
