# Praise Okwuchi Portfolio

Strategic Communication Specialist portfolio website built with Next.js and Tailwind CSS.

## Project Overview

This is a professional portfolio website for Praise Oluebube Okwuchi — a Strategic Communication Specialist, Public Speaking Trainer, author, and development practitioner with a decade of experience across corporate communications, NGO leadership, and policy advocacy.

## Features

- **Hero Section**: Professional introduction with CTAs
- **Portfolio Preview**: Featured work showcase
- **About Section**: Full professional bio and skills
- **Testimonials**: Client feedback and endorsements
- **Services**: Offered services with descriptions
- **Contact**: Contact form with WhatsApp integration
- **Responsive Design**: Mobile, tablet, and desktop optimized

## Tech Stack

- **Framework**: Next.js 14
- **Styling**: Tailwind CSS
- **Language**: TypeScript
- **Deployment**: Vercel

## Getting Started

### Prerequisites

- Node.js 18+ installed
- npm or yarn package manager

### Installation

1. Navigate to the project directory:
```bash
cd praise-okwuchi-portfolio
```

2. Install dependencies:
```bash
npm install
```

3. Run the development server:
```bash
npm run dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser

## Build for Production

```bash
npm run build
npm start
```

## Content Updates

### Required Assets

Before deployment, ensure the following files are added to the `public/` folder:

1. **Praise-Okwuchi-CV.pdf** - Downloadable CV/Resume
2. **profile.png** or **profile.jpg** - Professional profile photo

### Contact Information

- **Email**: opraiseoluebube@gmail.com
- **Phone**: +234 903 636 7106
- **LinkedIn**: https://www.linkedin.com/in/praise-okwuchi/
- **Instagram**: https://www.instagram.com/opraiseoluebube/

### Social Media Links

Update social media links in:
- `src/components/Contact.tsx`
- `src/components/Footer.tsx` (if needed)

## Color Scheme

- **Primary**: Deep Purple (#6B4C9A)
- **Secondary**: Burnt Orange (#D4783E)
- **Background**: Off-White (#F8F6F3)
- **Text**: Charcoal (#2D2D2D)
- **Dark Sections**: Dark Navy (#1A1A2E)

## Typography

- **Display**: DM Serif Display (serif)
- **Body**: DM Sans (sans-serif)

## Project Structure

```
praise-okwuchi-portfolio/
├── public/                 # Static assets
│   ├── profile.png        # Profile photo
│   └── Praise-Okwuchi-CV.pdf  # Downloadable CV
├── src/
│   ├── app/               # Next.js app router
│   │   ├── layout.tsx     # Root layout
│   │   ├── page.tsx       # Homepage
│   │   └── globals.css    # Global styles
│   └── components/        # React components
│       ├── Navbar.tsx
│       ├── Hero.tsx
│       ├── Marquee.tsx
│       ├── PortfolioPreview.tsx
│       ├── About.tsx
│       ├── Testimonial.tsx
│       ├── Services.tsx
│       ├── Contact.tsx
│       └── Footer.tsx
├── tailwind.config.ts     # Tailwind configuration
└── package.json
```

## Deployment

### Vercel (Recommended)

1. Push to GitHub
2. Import project in Vercel
3. Deploy

### Manual Deployment

```bash
npm run build
```

Upload the `.next` folder and run `npm start` on your server.

## Credits

- **Built by**: Mouse Technologies
- **Website**: mousetech.me
- **Contact**: ayo@mousetech.me

## License

Private project - All rights reserved.
