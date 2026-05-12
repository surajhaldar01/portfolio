# 🚀 Ultra Modern Developer Portfolio

A stunning, ultra-modern developer portfolio built with **Next.js 14** + **Tailwind CSS** + **Framer Motion**.

## ✨ Features

- **Dark futuristic theme** with neon blue, purple & cyan glow accents
- **Glassmorphism cards** with soft blur and glowing borders
- **Particle background** (tsparticles) with interactive effects
- **Smooth animations** powered by Framer Motion
- **Animated typing** with React Type Animation
- **Responsive design** — mobile-first, all screen sizes
- **5 sections**: Hero · About · Projects · Skills · Contact
- **Custom scrollbar**, neon text effects, animated grid background

## 🛠 Tech Stack

- **Framework**: Next.js 14 (App Router / Pages)
- **Styling**: Tailwind CSS + custom CSS
- **Animation**: Framer Motion
- **Particles**: tsparticles / @tsparticles/react
- **Icons**: react-icons
- **Fonts**: Orbitron (display) · Rajdhani (body) · Fira Code (mono)

## 🚀 Getting Started

### 1. Install dependencies

```bash
npm install
# or
yarn install
```

### 2. Run development server

```bash
npm run dev
# or
yarn dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

### 3. Build for production

```bash
npm run build
npm start
```

## 🎨 Customization

### Update your info:
- **`components/Hero.tsx`** — Name, title, typing animation, social links
- **`components/About.tsx`** — Bio, stats, profile photo (replace the placeholder)
- **`components/Projects.tsx`** — Your projects, screenshots, links
- **`components/Skills.tsx`** — Your skill levels
- **`components/Contact.tsx`** — Email, phone, location
- **`components/Footer.tsx`** — Name, year

### Add your profile photo:
In `components/About.tsx`, replace the placeholder `<div>` with:
```tsx
import Image from 'next/image'
// ...
<Image src="/images/profile.jpg" alt="Profile" fill className="object-cover" />
```
Then place your photo in `public/images/profile.jpg`.

### Colors (in `styles/globals.css`):
```css
--neon-blue: #00f0ff;
--neon-purple: #b24bff;
--neon-cyan: #00ffcc;
```

## 📦 Deploy to Vercel

```bash
npx vercel
```

Or push to GitHub and connect via [vercel.com](https://vercel.com).

---

**Built with ❤️ by a Full Stack Developer**
