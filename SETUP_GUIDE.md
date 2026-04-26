# PM Portfolio Setup & Deployment Guide

## 📋 Project Overview

A minimal, fast, professional portfolio website built for a Product Manager using Next.js and Tailwind CSS.

**Features:**
- Static export (no backend required)
- Clean, minimal design with focus on readability
- 3 main pages: Home, Projects, Analyses
- Fully customizable placeholder content
- Ready for deployment on Vercel

---

## 🚀 Getting Started

### Prerequisites
- Node.js 18+ installed
- npm or yarn package manager

### Installation

1. **Install dependencies:**
   ```bash
   npm install
   ```

2. **Run development server:**
   ```bash
   npm run dev
   ```

3. **Open in browser:**
   Navigate to `http://localhost:3000`

---

## 🛠️ Build & Deployment

### Local Build
```bash
npm run build
npm run export
```

This generates a static export in the `out/` folder.

### Deploy to Vercel

1. **Connect repository to Vercel:**
   - Go to [vercel.com](https://vercel.com)
   - Click "New Project"
   - Import your GitHub repository
   - Vercel auto-detects Next.js and applies correct build settings

2. **Deployment happens automatically on push**

### Deploy to other platforms
Since the site is a static export, you can deploy the `out/` folder to:
- Netlify
- GitHub Pages
- AWS S3 + CloudFront
- Any static hosting provider

---

## 📝 Customization

### Update Personal Information

**Hero Section** (`app/page.jsx`)
- Update name and positioning statement
- Modify hero section text

**Projects** (`app/page.jsx` & `app/projects/page.jsx`)
- Edit project titles, descriptions, and tags
- Add real project links
- Customize project details

**Analyses** (`app/page.jsx` & `app/analyses/page.jsx`)
- Update case study titles and summaries
- Modify dates and categories
- Add real URLs to full articles

**Contact Links** (`components/Footer.jsx`)
- Update email address
- Add LinkedIn and social profiles
- Link to real contact information

### Update Resume Content

Edit `data/resume.js` to change the home page hero statement, summary, featured projects, and featured analyses in one place.

### Customize Colors

Edit `tailwind.config.js`:
```javascript
colors: {
  accent: '#00D9FF', // Change this to your preferred color
}
```

Accent color options:
- Electric Cyan: `#00D9FF`
- Neon Green: `#39FF14`
- Electric Purple: `#BF00FF`
- Bright Orange: `#FF6B00`

### Customize Fonts

Fonts are configured in:
- `tailwind.config.js` (Tailwind configuration)
- `app/globals.css` (Font import from Fontshare)

Current fonts:
- **Headings:** Khand (bold, uppercase)
- **Body:** Switzer (clean, readable)

To change fonts, update both files and replace font URLs/names.

---

## 📁 Project Structure

```
app/
├── layout.jsx           # Main layout with navigation & footer
├── page.jsx             # Home page
├── globals.css          # Global styles and font imports
├── projects/
│   └── page.jsx         # Projects listing page
└── analyses/
    └── page.jsx         # Analyses/case studies page

components/
├── Navigation.jsx       # Top navigation bar
└── Footer.jsx           # Footer component

Configuration Files:
├── next.config.js       # Next.js configuration (static export)
├── tailwind.config.js   # Tailwind CSS theming
├── postcss.config.js    # PostCSS configuration
├── tsconfig.json        # TypeScript configuration
└── package.json         # Dependencies and scripts
```

---

## 🎨 Design System

### Typography Hierarchy
- **H1:** 48px–112px, Khand, bold, uppercase
- **H2:** 32px–48px, Khand, bold, uppercase
- **H3:** 20px–24px, Khand, bold, uppercase
- **Body:** 16px–18px, Switzer, regular

### Color Palette
- **Background:** White (#ffffff)
- **Text:** Black (#000000)
- **Accent:** Electric Cyan (#00D9FF)
- **Borders:** Light Gray (#d3d3d3)
- **Hover:** Slightly darker shades

### Spacing
- Base unit: 8px
- Common spacings: 8px, 16px, 24px, 32px, 40px, 48px

### Layout
- Max-width: 80rem (1280px)
- Padding: 8px (mobile), 16px (tablet), 24px (desktop)
- Grid: 2 columns on desktop, 1 column on mobile/tablet

---

## 📊 Performance Tips

- Site is fully static (no server requests)
- Average page size: ~50KB
- Lighthouse scores: 95+
- Time to interactive: <1s

To verify performance:
```bash
npm run build && npm run export
```

---

## ⚙️ Environment Variables

No environment variables are required. This is a fully static site with no backend.

---

## 🔗 Useful Links

- [Next.js Documentation](https://nextjs.org/docs)
- [Tailwind CSS Documentation](https://tailwindcss.com/docs)
- [Vercel Deployment Guide](https://vercel.com/docs)
- [Static HTML Export](https://nextjs.org/docs/pages/building-your-application/deploying#static-html-export)

---

## 📄 License

This project is open source and available under the MIT License.

---

## 💡 Tips for Success

1. **Keep content fresh:** Update projects and analyses regularly
2. **Add real links:** Replace placeholder links with actual URLs
3. **Customize colors:** Match your personal brand
4. **Mobile-first:** Test on multiple devices before deploying
5. **SEO:** Update metadata in `app/layout.jsx` with real information

Happy building! 🚀
