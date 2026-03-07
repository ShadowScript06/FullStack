# 🚀 FlowPilot — Deep Work Productivity Platform

FlowPilot is a **modern SaaS productivity platform** designed to help users manage focus sessions, track productivity, and analyze their deep work performance.

The platform provides a **clean dashboard, analytics, and session tracking system** that helps users build strong focus habits and improve daily productivity.

Live Demo: https://your-live-url.com

---

# 📚 Table of Contents

1. Project Overview
2. Features
3. System Architecture
4. Tech Stack
5. Project Structure
6. Authentication Flow
7. Dashboard & Analytics
8. Database Schema
9. API Documentation
10. Installation
11. Environment Variables
12. Running the Application
13. Deployment
14. Security Considerations
15. Future Improvements
16. Contributing

---

# 🧭 Project Overview

FlowPilot helps users manage **deep work sessions** and visualize their productivity patterns.

The platform provides:

* Focus session tracking
* Productivity analytics
* Dashboard insights
* Modern SaaS interface

Users can log sessions, monitor their focus habits, and improve productivity through **data-driven insights**.

---

# ✨ Features

## 🔐 Authentication

* User registration
* Secure login system
* Password hashing
* Session-based authentication
* Protected dashboard routes

---

## ⏱ Focus Session Tracking

Users can:

* Create new focus sessions
* Track session duration
* Mark sessions as completed
* Monitor ongoing sessions

---

## 📊 Analytics Dashboard

The dashboard provides visual insights including:

* Total focus time
* Sessions completed
* Daily productivity metrics
* Average session duration

---

## 📈 Interactive Charts

The analytics page includes:

* Line chart → Focus time trends
* Bar chart → Sessions completed
* Area chart → Average session duration

Charts are built using **Recharts**.

---

## 🖥 Modern SaaS UI

The interface includes:

* Sidebar navigation
* Topbar with search
* User profile section
* Notification area
* Responsive layout
* Glassmorphism dashboard cards

---

# 🏗 System Architecture

FlowPilot follows a **client-server architecture**.

```
Frontend (React + Tailwind)
        │
        │ HTTP Requests
        ▼
Backend API (Node.js + Express)
        │
        │ Database Queries
        ▼
MongoDB Database
```

### Workflow

1. User interacts with frontend UI
2. Frontend sends API requests to backend
3. Backend processes logic
4. MongoDB stores or retrieves data
5. Backend sends response to frontend

---

# 🧰 Tech Stack

## Frontend

* React
* Tailwind CSS v4
* Framer Motion
* Recharts
* React Router
* Lucide Icons

---

## Backend

* Node.js
* Express.js
* MongoDB
* Mongoose

---

## Authentication

* Express sessions
* Password hashing using bcrypt

---

## Deployment

| Service  | Platform         |
| -------- | ---------------- |
| Frontend | Vercel / Netlify |
| Backend  | Render / Railway |
| Database | MongoDB Atlas    |

---

# 📂 Project Structure

```
flowpilot
│
├── client
│   ├── src
│   │
│   ├── components
│   │   ├── auth
│   │   └── dashboard
│   │
│   ├── pages
│   │   ├── Landing
│   │   ├── Auth
│   │   └── Dashboard
│   │
│   └── utils
│
├── server
│   │
│   ├── controllers
│   │   ├── authController.js
│   │   └── sessionController.js
│   │
│   ├── models
│   │   ├── User.js
│   │   └── Session.js
│   │
│   ├── routes
│   │   ├── authRoutes.js
│   │   └── sessionRoutes.js
│   │
│   ├── middleware
│   │   └── authMiddleware.js
│   │
│   └── server.js
│
└── README.md
```

---

# 🔐 Authentication Flow

Authentication follows this process:

1. User registers an account
2. Password is hashed using **bcrypt**
3. User logs in with credentials
4. Backend validates credentials
5. Session cookie is created
6. Protected routes verify user session

```
User → Login Request
        ↓
Backend validates credentials
        ↓
Session stored
        ↓
Access granted to dashboard
```

---

# 📊 Dashboard & Analytics

The dashboard provides productivity insights.

### Overview Cards

* Total Sessions
* Completed Sessions
* Total Focus Time

---

### Analytics Charts

| Chart              | Description                |
| ------------------ | -------------------------- |
| Focus Time         | Daily focus hours          |
| Sessions Completed | Number of sessions per day |
| Average Duration   | Average session length     |

Charts update dynamically from session data.

---

# 🗄 Database Schema

## User Model

```
User
 ├ id
 ├ name
 ├ email
 ├ password
 └ createdAt
```

---

## Session Model

```
Session
 ├ id
 ├ userId
 ├ title
 ├ duration
 ├ status
 ├ createdAt
```

Status can be:

```
active
completed
cancelled
```

---

# 🔌 API Documentation

## Authentication

### Register

POST `/api/auth/register`

```
body:
{
  name,
  email,
  password
}
```

Response:

```
201 Created
```

---

### Login

POST `/api/auth/login`

```
body:
{
 email,
 password
}
```

Response:

```
200 OK
```

---

### Logout

POST `/api/auth/logout`

---

# Session APIs

### Create Session

POST `/api/sessions`

```
{
 title,
 duration
}
```

---

### Get All Sessions

GET `/api/sessions`

Returns all sessions for authenticated user.

---

### Get Analytics

GET `/api/sessions/analytics`

Returns analytics data for charts.

Example response:

```
{
 focusTime: [],
 sessionsCompleted: [],
 avgSessionDuration: []
}
```

---

# ⚙️ Installation

Clone the repository

```
git clone https://github.com/yourusername/flowpilot.git
cd flowpilot
```

---

# 📦 Install Dependencies

### Frontend

```
cd client
npm install
npm run dev
```

---

### Backend

```
cd server
npm install
npm run dev
```

---

# 🔑 Environment Variables

Create `.env` file inside **server directory**

```
PORT=5000
MONGO_URI=your_mongodb_connection_string
SESSION_SECRET=your_secret_key
```

---

# ▶ Running the Application

Start backend server

```
npm run dev
```

Start frontend

```
npm run dev
```

Open:

```
http://localhost:5173
```

---

# 🚀 Deployment

### Frontend

Deploy using:

* Vercel
* Netlify

---

### Backend

Deploy using:

* Render
* Railway

---

### Database

Use:

* MongoDB Atlas

---

# 🔒 Security Considerations

The application includes several security practices:

* Password hashing with bcrypt
* Session authentication
* Protected routes
* Environment variable configuration
* MongoDB connection security

Future security improvements may include:

* JWT authentication
* Rate limiting
* CSRF protection
* Input validation

---

# 🔮 Future Improvements

Planned improvements:

* Pomodoro timer
* Team productivity dashboard
* AI productivity insights
* Session reminders
* Calendar integration
* Mobile app
* Dark/light theme toggle

---

# 🤝 Contributing

Contributions are welcome.

Steps:

1. Fork the repository
2. Create feature branch

```
git checkout -b feature/new-feature
```

3. Commit changes

```
git commit -m "Add new feature"
```

4. Push to branch

```
git push origin feature/new-feature
```

5. Open Pull Request

---

# ⭐ Support

If you found this project useful, consider giving it a **⭐ star on GitHub**.

It helps others discover the project and supports development.
