// Everything on the page works without this file. It adds the theme switch,
// the Zagreb clock, the latest public GitHub push and the copy-address button.

const root = document.documentElement
const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)')
const systemDark = window.matchMedia('(prefers-color-scheme: dark)')

/* ------------------------------------------------------------------ theme */

const toggle = document.querySelector('[data-theme-toggle]')
const toggleLabel = document.querySelector('[data-theme-label]')

const currentTheme = () => root.dataset.theme || (systemDark.matches ? 'dark' : 'light')

function syncThemeUi() {
  const theme = currentTheme()
  toggleLabel.textContent = `Switch to ${theme === 'dark' ? 'light' : 'dark'} theme`

  // Keep the browser chrome in step with a manually chosen theme.
  document.querySelectorAll('meta[name="theme-color"]').forEach((meta) => {
    const dark = root.dataset.theme ? theme === 'dark' : meta.media.includes('dark')
    meta.content = dark ? '#0e0e0d' : '#f3f3f1'
  })
}

function setTheme(theme) {
  // Choosing what the system already wants clears the override.
  if (theme === (systemDark.matches ? 'dark' : 'light')) {
    delete root.dataset.theme
    try {
      localStorage.removeItem('theme')
    } catch {}
  } else {
    root.dataset.theme = theme
    try {
      localStorage.setItem('theme', theme)
    } catch {}
  }
  syncThemeUi()
}

toggle.hidden = false
syncThemeUi()
systemDark.addEventListener('change', syncThemeUi)

toggle.addEventListener('click', () => {
  const next = currentTheme() === 'dark' ? 'light' : 'dark'

  if (!document.startViewTransition || reducedMotion.matches) {
    setTheme(next)
    return
  }

  // Sweep the new theme out from the button.
  const box = toggle.getBoundingClientRect()
  const x = box.left + box.width / 2
  const y = box.top + box.height / 2
  const radius = Math.hypot(Math.max(x, innerWidth - x), Math.max(y, innerHeight - y))

  document.startViewTransition(() => setTheme(next)).ready.then(() => {
    root.animate(
      { clipPath: [`circle(0px at ${x}px ${y}px)`, `circle(${radius}px at ${x}px ${y}px)`] },
      {
        duration: 550,
        easing: 'cubic-bezier(0.3, 0, 0.2, 1)',
        pseudoElement: '::view-transition-new(root)',
      },
    )
  })
})

/* ------------------------------------------------------------------ clock */

const clock = document.querySelector('[data-clock]')

if (clock) {
  const format = new Intl.DateTimeFormat('en-GB', {
    timeZone: 'Europe/Zagreb',
    hour: '2-digit',
    minute: '2-digit',
  })

  const tick = () => {
    const now = new Date()
    clock.textContent = format.format(now)
    clock.dateTime = now.toISOString()
    // Wake up again just after the next minute turns over.
    setTimeout(tick, 60_000 - (now.getSeconds() * 1000 + now.getMilliseconds()) + 50)
  }

  tick()
  clock.hidden = false
  document.querySelector('[data-clock-sep]').hidden = false
  clock.title = 'Local time in Zagreb'
}

/* ----------------------------------------------------------------- lately */

// Swap the static "Lately" line for the most recent public push, if GitHub
// answers. Any failure leaves the static line alone.
const lately = document.querySelector('[data-lately]')

async function latestPush() {
  const cacheKey = 'lately'
  try {
    const cached = JSON.parse(sessionStorage.getItem(cacheKey))
    if (cached && Date.now() - cached.at < 10 * 60_000) return cached.push
  } catch {}

  const response = await fetch('https://api.github.com/users/MatijaMaric/events/public?per_page=30', {
    headers: { Accept: 'application/vnd.github+json' },
  })
  if (!response.ok) return null

  // This site and the profile README don't count as news.
  const housekeeping = /\/(MatijaMaric|MatijaMaric\.github\.io)$/i
  const event = (await response.json()).find(
    (e) => e.type === 'PushEvent' && !housekeeping.test(e.repo.name),
  )
  const push = event ? { repo: event.repo.name, when: event.created_at } : null
  try {
    sessionStorage.setItem(cacheKey, JSON.stringify({ at: Date.now(), push }))
  } catch {}
  return push
}

function timeAgo(date) {
  const format = new Intl.RelativeTimeFormat('en', { numeric: 'auto' })
  const minutes = Math.round((date - Date.now()) / 60_000)
  if (Math.abs(minutes) < 60) return format.format(minutes, 'minute')
  const hours = Math.round(minutes / 60)
  if (Math.abs(hours) < 24) return format.format(hours, 'hour')
  const days = Math.round(hours / 24)
  if (Math.abs(days) < 30) return format.format(days, 'day')
  return format.format(Math.round(days / 30), 'month')
}

if (lately) {
  latestPush()
    .then((push) => {
      if (!push) return
      const when = new Date(push.when)
      // Older than a couple of months says less than the static line does.
      if (Number.isNaN(when.getTime()) || Date.now() - when > 60 * 86_400_000) return

      const link = document.createElement('a')
      link.href = `https://github.com/${push.repo}`
      link.rel = 'noopener'
      link.textContent = push.repo.split('/').pop()

      const time = document.createElement('time')
      time.dateTime = when.toISOString()
      time.textContent = timeAgo(when)

      lately.replaceChildren('Pushed to ', link, ' ', time)
    })
    .catch(() => {})
}

/* ------------------------------------------------------------------- copy */

const copyButton = document.querySelector('[data-copy]')

if (copyButton && navigator.clipboard) {
  const label = copyButton.querySelector('[data-copy-label]')
  const idle = label.textContent
  let reset

  copyButton.hidden = false
  copyButton.addEventListener('click', async () => {
    // Hold the width so the links beside it don't jump when the label changes.
    copyButton.style.minWidth = `${copyButton.offsetWidth}px`
    try {
      await navigator.clipboard.writeText(copyButton.dataset.copy)
      label.textContent = 'Copied'
    } catch {
      label.textContent = 'Couldn’t copy'
    }
    clearTimeout(reset)
    reset = setTimeout(() => (label.textContent = idle), 1800)
  })
}

/* ------------------------------------------------------------------- year */

document.querySelector('[data-year]').textContent = new Date().getFullYear()
