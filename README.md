# Matija Marić - Personal Portfolio

Personal portfolio website and developer portfolio hosted on GitHub Pages.

## 🌐 Live Site

Visit the website at: [www.matijamaric.com](https://www.matijamaric.com)

## 🛠️ Technologies

- **Vite** - Fast build tool and development server
- **Vanilla JavaScript** - Pure JavaScript, no frameworks
- **Tailwind CSS** - Utility-first CSS framework
- **PostCSS** - CSS transformation with Autoprefixer
- **GitHub Pages** - Hosting platform

## 🚀 Development

### Prerequisites

- Node.js (v20 or higher)
- npm

### Setup

```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview
```

## 📦 Deployment

The site is automatically deployed to GitHub Pages using GitHub Actions when changes are pushed to the `master` branch.

### Deployment Workflow

1. Push changes to the `master` branch
2. GitHub Actions automatically builds the site using `npm run build`
3. The built files from the `dist` folder are deployed to the `gh-pages` branch
4. GitHub Pages serves the site from the `gh-pages` branch

### Custom Domain

The custom domain `www.matijamaric.com` is configured via the CNAME file in the `public` directory. Make sure to:
1. Configure DNS settings to point to GitHub Pages
2. Enable GitHub Pages in repository settings (Settings → Pages → Source: Deploy from a branch → Branch: gh-pages)

### Troubleshooting

**MIME Type Error**: If you see an error like "Loading module from https://matijamaric.github.io/src/style.css was blocked because of a disallowed MIME type", it means:
- GitHub Pages is not configured correctly
- Make sure Pages is set to deploy from the `gh-pages` branch (not master)
- Wait for the GitHub Actions workflow to complete after pushing to master
- The gh-pages branch should contain the built files, not the source code

## 📝 License

© 2024 Matija Marić. All rights reserved.
