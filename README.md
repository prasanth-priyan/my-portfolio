# PM Portfolio

A minimal, professional portfolio website for Product Managers.

**Built with:** Next.js, Tailwind CSS, deployed on Vercel  
**Site Type:** Static export (no backend required)  
**Performance:** Fast, lightweight, scannable

---

## 🎯 Features

- **Home Page:** Hero section, featured projects, featured analyses
- **Projects Page:** Grid layout of product initiatives with descriptions and tags
- **Analyses Page:** Case studies and product insights
- **Navigation:** Simple, sticky navigation bar
- **Responsive:** Mobile-first design, works on all devices
- **SEO-ready:** Clean markup, fast performance
- **Customizable:** Easy to update content, colors, and fonts

---

## 🚀 Quick Start

### 1. Install dependencies
```bash
npm install
```

### 2. Run development server
```bash
npm run dev
```

### 3. Open browser
Navigate to `http://localhost:3000`

---

## 📦 Build & Deploy

### Build for production (static export)
```bash
npm run build
npm run export
```

### Deploy to Vercel
Push to GitHub, then connect repository to Vercel. Auto-deploys on every push.

---

## 📝 Customization

See [SETUP_GUIDE.md](./SETUP_GUIDE.md) for detailed customization instructions including:
- Updating personal information
- Changing colors and fonts
- Adding projects and analyses
- Deployment options
- Updating the home page via `data/resume.js`

---

## 📁 Project Structure

```
app/                      # Next.js app directory
├── page.jsx              # Home page
├── projects/page.jsx     # Projects listing
├── analyses/page.jsx     # Analyses/case studies
├── layout.jsx            # Main layout wrapper
└── globals.css           # Global styles

components/               # React components
├── Navigation.jsx        # Top nav bar
└── Footer.jsx            # Footer

Configuration files:
├── package.json
├── next.config.js        # Static export config
├── tailwind.config.js    # Styling config
├── postcss.config.js
└── tsconfig.json
```

---

## 🎨 Design

- **Colors:** White background, black text, electric cyan accent
- **Fonts:** Khand (headings), Switzer (body)
- **Spacing:** Generous whitespace, 1280px max-width
- **Responsive:** Mobile-first, adapts to all screen sizes

---

## 💡 Usage Tips

1. All content is placeholder — customize with your own
2. Keep text professional and PM-focused
3. Update links in footer and projects pages
4. Test on mobile before deploying
5. Redeploy by pushing to Git

---

## 🔗 Links

- [Next.js Docs](https://nextjs.org/docs)
- [Tailwind CSS](https://tailwindcss.com)
- [Vercel](https://vercel.com)
- [Fontshare Fonts](https://www.fontshare.com)

---

Enjoy your new portfolio! 🎉