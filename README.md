# LTL Quote Tool

A modern, full-stack web app for generating LTL freight shipping quotes using the [Mothership API](https://developers.mothership.com/).

Built with:
- **Frontend:** Vite + React + MUI (Material UI)
- **Backend:** Node.js + Express + Mothership SDK

---

## 🚀 Features

- Responsive, mobile-friendly quote request form (pickup, delivery, freight details)
- Real-time quote fetching from Mothership API
- Results displayed in a sortable, paginated, horizontally-scrollable DataGrid
- Modern stack: Vite + React + MUI for UI, Express backend
- Works great on desktop and mobile devices

---

## 🧱 Folder Structure

```
ltl-quote-tool/
├── client/          # Vite React frontend
│   ├── src/
│   │   ├── components/
│   │   │   ├── QuoteForm.jsx
│   │   │   └── QuoteResultsTable.jsx
│   │   ├── pages/
│   │   │   └── QuotePage.jsx
│   │   ├── App.jsx
│   │   └── main.jsx
│   └── public/
├── server/          # Node.js backend
│   ├── server.js
│   ├── routes.js
│   └── .env         # stores API key securely (not committed)
└── README.md
```

---

## ⚙️ Installation & Setup

### 1. Clone the Repo

```bash
git clone https://github.com/Jeff-git-li/ltl-quote-tool.git
cd ltl-quote-tool
```

---

### 2. Backend Setup (`/server`)

```bash
cd server
npm install
```

Create a `.env` file:
```env
MOTHERSHIP_API_KEY=sk_live_YourKeyHere
```

Run the server:
```bash
npm start
```

> The backend will run on `http://localhost:5000`.

---

### 3. Frontend Setup (`/client`)

```bash
cd ../client
npm install
npm run dev
```

> The frontend will run on `http://localhost:3000`.

---

## 🧪 How to Use

1. Fill out the required fields in the quote request form
2. Submit to request quotes
3. View available rate options in a responsive, sortable table

---

## 📱 Mobile Friendly

- The form and results table are fully responsive.
- On mobile, the table can be scrolled horizontally and includes a swipe hint.
- All form fields and buttons are optimized for touch devices.

---

## 📦 Deployment Notes

- **Never commit your `.env` folder.**
- Make sure `.gitignore` includes:
  ```gitignore
  node_modules/
  .env
  ```

---

## 📄 License

MIT © 2025 Jeff-git-li
