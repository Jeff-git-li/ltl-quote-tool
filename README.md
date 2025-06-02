# LTL Quote Tool

This project provides a full-stack web tool for requesting LTL freight quotes using the [Mothership API](https://developers.mothership.com/reference/createquote).

## 🔧 Technologies
- Frontend: React (client-side form)
- Backend: Node.js + Express (API proxy)
- API: Mothership LTL Quote

---

## 📁 Project Structure

```
ltl-quote-tool/
├── client/              # React frontend
│   └── QuoteForm.jsx
├── server/              # Express backend
│   └── server.js
└── README.md
```

---

## 🚀 Getting Started

### 1. Clone the Repository

```bash
git clone https://github.com/Jeff-git-li/ltl-quote-tool.git
cd ltl-quote-tool
```

---

## 🖥️ Running the Frontend

```bash
cd client
npm install
npm start
```

This runs the React development server on [http://localhost:3000](http://localhost:3000).

---

## 🛠️ Running the Backend

```bash
cd server
npm install
```

Create a `.env` file:

```bash
MOTHERSHIP_API_KEY=your_api_key_here
```

Then run:

```bash
node server.js
```

This starts the Express backend on [http://localhost:3001](http://localhost:3001).

---

## 🔄 How It Works

1. User fills out LTL quote form
2. Frontend sends form data to backend (`/api/get-ltl-rates`)
3. Backend forwards request to Mothership API
4. Response is returned and displayed to the user

---

## ✅ Testing

You can test by:
- Filling in valid zip codes, dimensions, weight, and freight class
- Watching the results populate under the form

Example Test Inputs:
```
Pickup Zip: 90001
Destination Zip: 10001
Weight: 500
Dimensions: 48x40x60
Freight Class: 70
```

---

## 🌐 Deployment

- Frontend: Deploy `client` folder to [Vercel](https://vercel.com) or [Netlify](https://netlify.com)
- Backend: Deploy `server` folder to [Render](https://render.com) or [Fly.io](https://fly.io)

Ensure you set `MOTHERSHIP_API_KEY` as an environment variable in your backend host.

---

## 📄 License

MIT
