# 🦉 Clicky Owls

**Clicky Owls** is a lighthearted memory game where the goal is to click (or tap!) each owl **only once**. If you click an owl more than once, the score will reset, but your highest score will remain. Reach all owls without repetition to win!

🔗 **Live Demo:** [clicky-owls.vercel.app](https://clicky-owls.vercel.app)

---

## Overview

Clicky Owls is a single-page application rebuilt from React `v16.7.0` to `v19.1.0`. This project focuses on enhancing accessibility, user interaction, visual design, and mobile-friendliness following modern frontend best practices.

---

## ✨ Features

- 🎮 Memory-based gameplay with instant feedback
- ✅ Responsive 4×3 (desktop) / 3x4 (mobile) grid layout
- 🎉 Confetti animation on win using `react-confetti`
- 💬 Smooth animated message transitions with `framer-motion`
- ♿️ Accessibility-conscious design (`aria-live`, semantic landmarks, screen reader support)
- 🧠 Freeze UI after win to prevent further clicks until restart
- 🔁 Restart button with complete state reset

---

## 📱 Interaction

- Tap or click each owl **only once** per round
- Win by selecting all 12 owls without repeating
- If you repeat a click on the same owl, the score resets, and the highest score remains
- Celebrate win with animated confetti and a restart option

---

## 👩🏻‍💻 Tech Stack

- [React 19](https://reactjs.org/)
- [Vite](https://vitejs.dev/)
- [Framer Motion](https://www.framer.com/motion/)
- [React Confetti](https://www.npmjs.com/package/react-confetti)
- CSS Grid, Flexbox, custom styles (no UI framework)

---

## 🚀 Getting Started (Local Dev)

```bash
git clone https://github.com/your-username/clicky-owls.git
cd clicky-owls
npm install
npm run dev
```

To build for production:
```bash
npm run build
```

## 🧠 Developer Notes

This project is part of my personal portfolio rebuild initiative, where I transformed the [legacy code](https://github.com/zcdev/clicky-owls-old) from my bootcamp at [UCBX](https://extension.berkeley.edu/) into a modern React app with improved accessibility and UX principles.

### Key Takeaways

⚠️ Git on macOS may ignore changes like `ScoreBoard.jsx` → `Scoreboard.jsx`. Use `git mv` to force rename.

🌀 React setState() is asynchronous — Don't rely on the immediate value update within the same function.

🧩 Replaced legacy JavaScript array method `.concat()` with the functional `setState()` pattern.

🧪 Vercel deployment was smooth once path resolution and casing were corrected.

🎨 A focus on a11y and UI feedback made the app more polished and inclusive.

## Acknowledgements

- **[Unsplash.com](https://unsplash.com)** – Resource of the owl photos
- **[Pixabay.com](https://pixabay.com)** – Resource of the original forest background image, author unknown
- **[Fotor](https://www.fotor.com/photo-editor-app/editor/basic)** - Image cropper
- **[Tinify](https://tinypng.com)** - Radical image optimizer
- **[OpenAI's ChatGPT](https://chatgpt.com)** – Assisted with design feedback, code reviews, best practices, and copywriting 😏

Created by ZCDEV — Designed, developed, and deployed with ✨