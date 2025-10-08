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
3. The built files from the `dist` folder are deployed to GitHub Pages

### Custom Domain

The custom domain `www.matijamaric.com` is configured via the CNAME file in the `public` directory. Make sure to:
1. Configure DNS settings to point to GitHub Pages
2. Enable GitHub Pages in repository settings (Settings → Pages → Source: GitHub Actions)

## 📝 License

© 2024 Matija Marić. All rights reserved.
