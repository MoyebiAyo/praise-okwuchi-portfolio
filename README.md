# Dorcas VA Portfolio

A professional portfolio website for Funmiluyi Dorcas Ayomide — Virtual Assistant based in Jos, Nigeria.

## 🚀 Quick Start

### Prerequisites
- Node.js 18+ installed
- npm or yarn package manager

### Installation

1. Install dependencies:
```bash
npm install
```

2. Start development server:
```bash
npm run dev
```

3. Open [http://localhost:3000](http://localhost:3000) in your browser

## 📁 Project Structure

```
dorcas-va-portfolio/
├── src/
│   ├── app/
│   │   ├── layout.tsx       # Root layout
│   │   ├── page.tsx         # Home page
│   │   └── globals.css      # Global styles
│   └── components/
│       ├── Navbar.tsx       # Navigation bar
│       ├── Hero.tsx         # Hero section
│       ├── Marquee.tsx      # Scrolling services marquee
│       ├── Services.tsx     # Services grid
│       ├── About.tsx        # About section with skills
│       ├── Testimonial.tsx  # Client testimonial
│       ├── Contact.tsx      # Contact form
│       └── Footer.tsx       # Footer
├── public/                  # Static assets
├── next.config.mjs         # Next.js configuration
├── tailwind.config.ts      # Tailwind CSS configuration
└── package.json            # Dependencies
```

## 🎨 Design Features

- **Terracotta & Cream Color Palette**: Warm, professional aesthetic
- **Responsive Design**: Mobile-first approach
- **Smooth Animations**: Marquee scrolling, hover effects
- **Clean Typography**: DM Serif Display + DM Sans fonts
- **Modern Layout**: Grid-based, component-driven architecture

## 🛠️ Tech Stack

- **Framework**: Next.js 14 (App Router)
- **Styling**: Tailwind CSS
- **Language**: TypeScript
- **Deployment**: Vercel-ready

## 📦 Build for Production

```bash
npm run build
npm start
```

## 🌐 Deploy to Vercel

1. Push code to GitHub
2. Connect repository to Vercel
3. Deploy automatically

Or use Vercel CLI:

```bash
npm i -g vercel
vercel
```

## 📝 Content Updates

All content is in the component files under `src/components/`. Simply edit the text to update:
- Hero section: `Hero.tsx`
- Services: `Services.tsx`
- About: `About.tsx`
- Testimonials: `Testimonial.tsx`
- Contact info: `Contact.tsx`

## 📄 License

Built by Mouse Technologies for Funmiluyi Dorcas Ayomide
