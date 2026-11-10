# matijamaric.com

Personal site of Matija Marić, live at [www.matijamaric.com](https://www.matijamaric.com).

One static page: hand-written HTML and CSS, a small script for the theme switch, the Zagreb clock,
the latest public GitHub push and the copy-address button. Everything on the page is readable with
JavaScript turned off. Vite bundles it; there is no framework and no CSS library.

## Layout

| Path             | What it is                                                         |
| ---------------- | ------------------------------------------------------------------ |
| `index.html`     | All the content. Edit copy and projects here.                      |
| `404.html`       | The not-found page GitHub Pages serves.                            |
| `src/style.css`  | All styles. Colours and spacing are custom properties at the top.  |
| `src/main.js`    | Progressive enhancements only.                                     |
| `src/fonts/`     | Schibsted Grotesk and JetBrains Mono, subset to the glyphs in use. |
| `public/`        | Files copied as they are: icons, preview image, robots, sitemap.   |
| `tools/og.html`  | Source for `public/og.png`, the link-preview image.                |

## Develop

Needs Node 20.19 or newer.

```bash
npm install
```

```bash
npm run dev
```

```bash
npm run build
```

```bash
npm run preview
```

## Things worth knowing

- **The headline is sized to fit.** `.name` and `.email` in `src/style.css` divide the container
  width by the text's measured width in ems. If the name, the address, the font or the
  letter-spacing changes, those divisors need measuring again.
- **The red accent on the ć is the same glyph drawn twice**, once in ink with the accent clipped
  off and once in red with the letter clipped off. `--split` on `.c-acute` is where the cut falls.
- **The accent is the only graphic mark.** Hovering a project or a year puts one over its first
  letter (`.accented`). Titles that start with a lowercase letter take `.accented--x`.
- **Layout is twelve columns from 56rem up**: section labels in the first three, content in the
  other nine, and from 72rem the content splits into thirds on the same columns.
- **The fonts are subsets.** They cover Basic Latin, Latin-1, Croatian letters and a few arrows and
  dashes. A character outside that set falls back to the system font; re-subset from the upstream
  files with `pyftsubset` to add more.
- **Regenerating the preview image** after changing `tools/og.html`:

  ```bash
  npx playwright screenshot --viewport-size=1200,630 tools/og.html public/og.png
  ```

## Deploy

Pushing to `master` runs `.github/workflows/deploy.yml`, which builds the site and publishes `dist`
to the `gh-pages` branch. GitHub Pages serves that branch at the domain in `public/CNAME`.

## Licence

Site content © Matija Marić. The fonts are under the SIL Open Font License; the licence texts sit
next to them in `src/fonts/`.
