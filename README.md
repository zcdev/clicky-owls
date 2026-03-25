# 🦉 Clicky Owls

[![React.js](https://img.shields.io/badge/React.js-61DAFB?logo=react&logoColor=white)](https://react.dev/)
[![Vercel](https://img.shields.io/badge/Deployed%20on-Vercel-000000?logo=vercel&logoColor=white)](https://vercel.com/)

## Live Demo
Challenge it here: [clicky-owls.vercel.app](https://clicky-owls.vercel.app) — click through all the owls, but don't click the same owl twice!

## Overview
**Deliverable:** A lighthearted game built with React.js. Players must click through randomly shuffled owls without repetition, encouraging them to sharpen their focus and strategic memory recall.

**Purpose:** To provide a memory-strengthening experience that rewards concentration and attention to detail.

## Tech Stack
- **Framework:** React.js
- **Language:** JavaScript (ES6+)
- **Deployment:** Vercel

## Features
- Memory-based gameplay with instant feedback
- Responsive 4×3 (desktop) / 3x4 (mobile) grid layout
- Confetti animation on winning using `react-confetti`
- Animated message with smooth transition by `framer-motion`
- Accessibility-conscious design (`aria-live`, semantic landmarks, screen reader support)
- Freeze UI after winning to prevent further clicks until resetting state fully by the restart button 

## Dev Notes
- Git on macOS may ignore changes like `ScoreBoard.jsx` → `Scoreboard.jsx`. Use `git mv` to force rename
- React setState() is asynchronous — It doesn't rely on the immediate value update within the same function
- Replaced legacy JavaScript array method `.concat()` with the functional `setState()` pattern
- Vercel deployment was smooth once path resolution and letter casing were corrected
- A focus on a11y and UI messages made the app more polished and inclusive

## Assets
- **[Unsplash.com](https://unsplash.com)** – Resource of the owl photos
- **[Pixabay.com](https://pixabay.com)** – Resource of the original forest background image, author unknown
- **[Fotor](https://www.fotor.com/photo-editor-app/editor/basic)** – Image cropper
- **[Tinify](https://tinypng.com)** – Radical image optimizer

(Originally developed in the UCBX curriculum)

![GitHub repo size](https://img.shields.io/github/repo-size/zcdev/mytechiecookie)
![GitHub last commit](https://img.shields.io/github/last-commit/zcdev/mytechiecookie)