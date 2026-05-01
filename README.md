# HEARME — Research Portfolio Website

An AI-Powered Inclusive E-Learning Platform for Hearing-Impaired Students.

## Quick Start

### Prerequisites
- Node.js 18+ installed

### 1. Start the Backend Server
```bash
cd server
npm install
npm run dev
```
The server runs on **http://localhost:5000**

### 2. Start the Frontend Dev Server
```bash
cd client
npm install
npm run dev
```
The site opens on **http://localhost:5173**

### 3. Build for Production
```bash
cd client
npm run build
```

## Project Structure
```
├── client/          # React + Vite frontend
│   ├── src/
│   │   ├── components/  # Reusable UI & layout components
│   │   ├── pages/       # 7 main page components
│   │   ├── styles/      # Vanilla CSS design system
│   │   ├── data/        # Static data (milestones, team, tech)
│   │   └── hooks/       # Custom React hooks
│   └── index.html
│
├── server/          # Express.js backend
│   ├── routes/      # API routes for file upload/download
│   ├── uploads/     # Uploaded files storage
│   └── server.js    # Server entry point
```

## Features
- 🏠 **Home** — Hero section, module overview, research impact
- 📚 **Domain** — Literature review, research gap, objectives, methodology, tech stack
- 📅 **Milestones** — Interactive timeline with expandable assessment cards
- 📄 **Documents** — Searchable document library with upload/download
- 📊 **Presentations** — Slide gallery with upload/download
- 👥 **About Us** — Team profiles and supervisor info
- ✉️ **Contact** — Contact form and info
- 🌙 **Dark theme** with glassmorphism design
- 📱 **Fully responsive** for mobile, tablet, desktop

## Technology Stack
| Layer | Technology |
|-------|-----------|
| Frontend | React 18, Vite, React Router v6 |
| Styling | Vanilla CSS, CSS Custom Properties |
| Icons | Lucide React |
| Backend | Express.js, Multer |
| Fonts | Space Grotesk, Inter (Google Fonts) |
