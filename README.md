
# 💰 Expense Tracker

A modern and responsive **Expense Tracker** app built with **React**, **Vite**, and **Redux Toolkit**. This app helps you manage your income and expenses, with filtering, chart visualizations, and data summaries.

---

## 🚀 Live Demo

👉 [Click here to view the live site](https://annpurna04.github.io/Expense-Tracker/)

---

## 🛠 Tech Stack

- ⚛️ React 19
- ⚡ Vite
- 🗃 Redux Toolkit
- 📊 Chart.js & Recharts
- 📅 React Date Picker
- 🎨 CSS (no Tailwind)
- 📦 GitHub Pages (deployment)

---

## 📁 Project Structure

```
Expense-Tracker/
├── public/
├── src/
│   ├── components/
│   ├── hooks/
│   ├── redux/
│   ├── styles/
│   ├── App.jsx
│   └── main.jsx
├── index.html
├── .gitignore
├── vite.config.js
├── package.json
└── README.md
```

---

## 🧪 Getting Started

### 📦 Install dependencies

```bash
npm install
```

### 🧑‍💻 Run locally

```bash
npm run dev
```

---

## 🛠 Deployment (GitHub Pages)

### 1. Add to `package.json`:

```json
"homepage": "https://annpurna04.github.io/Expense-Tracker",
"scripts": {
  "dev": "vite",
  "build": "vite build",
  "preview": "vite preview",
  "predeploy": "npm run build",
  "deploy": "gh-pages -d dist"
}
```

### 2. Update `vite.config.js`:

```js
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  base: '/Expense-Tracker/',
  plugins: [react()],
})
```

### 3. Deploy:

```bash
npm run deploy
```

---

## 💡 Features

- ✅ Add, edit, and delete expenses
- 🔍 Search by name or amount
- 📅 Filter by date range
- 📊 Pie and Bar chart visualizations
- 💸 Income vs Expense summary
- 📱 Mobile responsive UI

---

## 📜 License

Licensed under the [MIT License](LICENSE).

---

## 🙋‍♀️ Author

**Annpurna Gupta**  
🌐 [GitHub Profile](https://github.com/annpurna04)
