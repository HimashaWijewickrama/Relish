<div align="center">

# 🍽️ Relish — Full-Stack Responsive Restaurant Website

A modern, responsive full-stack restaurant website developed using **Next.js 14 (App Router)**, **TypeScript**, and **Tailwind CSS v4**. The website is designed to deliver a rich dining experience online — from browsing the menu and exploring upcoming events to booking a table and getting in touch — all through a visually polished, mobile-first interface and a well-structured architecture.

[![Next.js](https://img.shields.io/badge/Next.js-16-black?style=flat-square&logo=next.js)](https://nextjs.org/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5-blue?style=flat-square&logo=typescript)](https://www.typescriptlang.org/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind-v4-38bdf8?style=flat-square&logo=tailwindcss)](https://tailwindcss.com/)
[![React Icons](https://img.shields.io/badge/React%20Icons-latest-e91e63?style=flat-square&logo=react)](https://react-icons.github.io/react-icons/)
[![Vercel](https://img.shields.io/badge/Deployed-Vercel-black?style=flat-square&logo=vercel)](https://vercel.com/)
</div>

---
<br><br>
## 📖 About The Project

Relish is a fully responsive restaurant website built to showcase the beauty of modern web development with Next.js. It combines the performance of **Server Components** for static content with the interactivity of **Client Components** for dynamic features — delivering a fast, seamless experience across all devices. The site supports table reservations and contact form submissions handled entirely server-side via **Next.js Route Handlers**, with no third-party backend required.
<br><br>
## ✨ Features

- 🖼️ &nbsp;**Hero Image Slider** — Auto-advancing carousel with manual controls, dot indicators, and a YouTube video modal
- 🍕 &nbsp;**Menu with Category Filter** — Tab-based filtering across Starters, Salads, and Specialty dishes
- 📅 &nbsp;**Events Section** — Upcoming dining events displayed in a clean, responsive grid
- 🌟 &nbsp;**Daily Specials** — Tabbed section showcasing the chef's featured dishes
- 📷 &nbsp;**Gallery with Lightbox** — Click-to-enlarge photo grid with a smooth overlay experience
- 👨‍🍳 &nbsp;**Meet the Chefs** — Team cards with animated social media hover overlays
- 🗓️ &nbsp;**Table Reservation Form** — Full booking form with date, time, and guest selection backed by a Route Handler
- 💬 &nbsp;**Testimonials Carousel** — Star-rated customer review slider
- 📬 &nbsp;**Contact Form** — Server-side message handling via a dedicated API route
- 📌 &nbsp;**Sticky Navbar** — Scroll-aware header with social icons, phone, hours, and a mobile hamburger menu
- 📱 &nbsp;**Fully Responsive** — Mobile-first layout that looks great on every screen size
- 🔤 &nbsp;**next/font** — Self-hosted Google Fonts (Inter + Playfair Display), zero layout shift
- ⚡ &nbsp;**Server & Client Components** — Optimal rendering strategy applied per section
<br><br>
## 🛠️ Tech Stack

| Layer | Technology |
|---|---|
| Framework | Next.js 16 (App Router) |
| Language | TypeScript |
| Styling | Tailwind CSS v4 |
| Fonts | next/font — Inter & Playfair Display |
| Icons | React Icons |
| Images | next/image |
| API | Next.js Route Handlers |
| Deployment | Vercel |

<br><br>
## 📁 Project Structure

```
restaurant-app/
├── app/
│   ├── layout.tsx              # Root layout — fonts, metadata, Navbar, Footer
│   ├── page.tsx                # Home page — composes all sections
│   ├── globals.css             # Tailwind v4 theme, base styles, component classes
│   └── api/
│       ├── reservation/
│       │   └── route.ts        # POST — handles table booking submissions
│       └── contact/
│           └── route.ts        # POST — handles contact form submissions
├── components/
│   ├── Navbar.tsx              # Client — sticky nav, social icons, mobile menu
│   ├── Hero.tsx                # Client — auto-playing image slider + YouTube modal
│   ├── About.tsx               # Server — restaurant story and highlights
│   ├── Menu.tsx                # Client — filterable menu cards with pricing
│   ├── Specials.tsx            # Client — tabbed daily specials
│   ├── Events.tsx              # Server — upcoming events grid
│   ├── Reservation.tsx         # Client — table booking form → /api/reservation
│   ├── Testimonials.tsx        # Client — star-rated review carousel
│   ├── Gallery.tsx             # Client — photo grid with lightbox overlay
│   ├── Chefs.tsx               # Server — chef team cards with social hover
│   ├── Contact.tsx             # Client — contact form + map → /api/contact
│   └── Footer.tsx              # Server — links, newsletter, social, copyright
├── lib/
│   └── data.ts                 # Centralised mock data (menu, chefs, events…)
├── types/
│   └── index.ts                # TypeScript interfaces for all data models
└── public/
    └── images/                 # Hero slides, menu, gallery, chef photos
```
<br><br>
## 🗺️ Page Sections

| Section | Component Type | Description |
|---|---|---|
| Hero | Client | Auto-playing image slider with CTA buttons and YouTube modal |
| About | Server | Restaurant story, highlights, and values |
| Menu | Client | Category-filterable dish cards with name, description, and price |
| Specials | Client | Tabbed section for the chef's daily featured dishes |
| Events | Server | Grid of upcoming dining events with date and pricing |
| Reservation | Client | Full table booking form handled by `/api/reservation` |
| Testimonials | Client | Carousel of star-rated customer reviews |
| Gallery | Client | Responsive photo grid with click-to-enlarge lightbox |
| Chefs | Server | Team profile cards with animated social media overlay |
| Contact | Client | Location map and contact form handled by `/api/contact` |

<br><br>
## ⚡ Server vs Client Components

| Component | Type | Reason |
|---|---|---|
| `About`, `Events`, `Chefs`, `Footer` | Server | Pure display — no interactivity, zero JS sent to browser |
| `Navbar` | Client | Needs `useState` for mobile menu + `useEffect` for scroll detection |
| `Hero` | Client | Image slider uses `useState` + `useEffect` for auto-advance |
| `Menu` | Client | Tab filter uses `useState` for active category |
| `Reservation`, `Contact` | Client | Controlled forms with `useState` and `fetch` to API routes |
| `Gallery` | Client | Lightbox overlay managed with `useState` |

<br><br>
## 🚀 Getting Started

### Prerequisites

- [Node.js](https://nodejs.org/) `18+`
- npm or yarn

### Installation

```bash
# 1. Clone the repository
git clone https://github.com/your-username/restaurant-app.git
cd restaurant-app

# 2. Install dependencies
npm install

# 3. Start the development server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.
<br><br>
## 📜 Available Scripts

```bash
npm run dev      # Start development server
npm run build    # Create production build
npm run start    # Run production build locally
npm run lint     # Run ESLint
```
<br><br>
## 📐 Font Setup (`next/font`)

Fonts are managed using **`next/font`** — Google Fonts (Inter & Playfair Display) are self-hosted automatically at build time, ensuring zero layout shift and no external network requests.
Both fonts are self-hosted via `next/font/google` — no external network requests, no layout shift guaranteed.
<br><br>
## ☁️ Deployment

The easiest way to deploy is with [Vercel](https://vercel.com/):

```bash
npx vercel --prod
```

Or connect your GitHub repository to Vercel for zero-config automatic deployments on every push to `main`.
<br><br>
## 📷 Snapshots

The app is still cooking behind the scenes! But exciting views and features of **Relish** will be shared here soon... 🍳
<br><br>
## 🪄 What's Next?
 
Some nice surprises may appear in future updates — stay tuned...! 😜
<br><br>
## 📄 License

This project is open source and available under the [MIT License](LICENSE).

<div align="center">
  <sub>Built with ❤️ using Next.js · TypeScript · Tailwind CSS v4 · React Icons</sub>
</div>
