🚀 Code Review App

AI-powered web app to review your code and get instant feedback.
Built with React (Vite) on the frontend and Node.js + Express on the backend.

✨ Features

🖊️ Online code editor with syntax highlighting (PrismJS)

🤖 AI-powered code review

📄 Markdown formatted feedback

🔒 Environment variable support (.env)

🌐 Deployed on Render (Backend) and Vercel (Frontend)

📂 Project Structure
root/
 ├── backend/       # Express.js API (Node.js)
 │   ├── index.js
 │   ├── routes/
 │   └── .env
 ├── frontend/      # React app (Vite)
 │   ├── src/
 │   │   └── App.jsx
 │   ├── .env
 │   └── vite.config.js
 ├── README.md
 └── package.json

⚙️ Installation & Setup
1. Clone the repository
git clone https://github.com/your-username/code-review-app.git
cd code-review-app

2. Setup Backend
cd backend
npm install


Run backend:

npm start


Backend will run on:
👉 http://localhost:3000

3. Setup Frontend
cd frontend
npm install


Create a .env file inside frontend/:

VITE_BACKEND_URL=http://localhost:3000


Run frontend:

npm run dev


Frontend will run on:
👉 http://localhost:5173
