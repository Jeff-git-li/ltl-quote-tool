# LTL Quote Tool

A modern, full-stack web app for generating LTL freight shipping quotes using the [Mothership API](https://developers.mothership.com/).

Built with:
- **Frontend:** Vite + React + MUI (Material UI)
- **Backend:** Node.js + Express + Mothership SDK

---

## 🚀 Features

- Collects detailed shipping info via a responsive form (pickup, delivery, freight)
- Sends quote request to Mothership API
- Displays results in a sortable, paginated Material UI DataGrid
- Fast modern stack: Vite + MUI for UI, Express backend

---

## 🧱 Folder Structure

```
ltl-quote-tool/
├── client/          # Vite React frontend
│   ├── src/
│   │   ├── components/QuoteForm.jsx
│   │   ├── components/QuoteResultsTable.jsx
│   │   └── main.jsx, App.jsx
├── server/          # Node.js backend
│   ├── server.js
│   ├── routes.js
│   └── .env         # stores API key securely (not committed)
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

Generate the Mothership SDK:

```bash
npx api install "@mothership/v0.9#cmi6fx2tm8oou17d"
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

## 📦 Deployment Notes

- **Never commit your `.env` or `@api/` folder.**
- Make sure `.gitignore` includes:
  ```gitignore
  node_modules/
  @api/
  .env
  ```

---

## 📄 License

MIT © 2025 Jeff-git-li
