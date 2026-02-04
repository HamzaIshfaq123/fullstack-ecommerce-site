# Full-Stack E-Commerce Application (MERN)

A full-stack e-commerce application built using the **MERN stack**, focusing on scalable architecture, clean frontend structure, and real-world backend integration.

> 🚧 **Status:** Work in Progress  
> This project is actively under development. Features and structure may change as development continues.

---

## 📌 Project Overview

This project aims to replicate a real-world e-commerce system with a modern frontend, a RESTful backend, and a scalable database design.

The focus is not only on UI, but also on:
- Clean component architecture
- Backend–frontend integration
- Production-oriented setup
- Deployment readiness

---

## 🛠️ Tech Stack

### Frontend (Client)
- React
- Tailwind CSS
- React Router
- Axios

### Backend (Server)
- Node.js
- Express.js
- MongoDB (Mongoose)
- REST APIs

### Deployment
- Vercel (Frontend)
- Environment variables for configuration

---

## 📂 Project Structure

fullstack-ecommerce-site/
│
├── client/ # React frontend
│ ├── src/
│ │ ├── components/
│ │ ├── pages/
│ │ ├── routes/
│ │ └── services/
│ └── package.json
│
├── server/ # Node.js backend
│ ├── models/
│ ├── routes/
│ ├── controllers/
│ ├── config/
│ └── package.json
│
└── README.md

---

## ✅ Completed Features

- Converted a production HTML/CSS template into reusable **React components**
- Styled the application using **Tailwind CSS**
- Configured **React Router** for client-side routing
- Built a **Node.js + Express** backend
- Designed and connected a **MongoDB products collection**
- Integrated frontend with backend APIs
- Deployed frontend to **Vercel** with environment configuration

---

## 🚀 Upcoming Features (Planned)

- User authentication (JWT-based)
- Shopping cart functionality
- Order management system
- Admin dashboard
- Product, category & order CRUD operations
- Role-based access control (Admin / User)
- Improved error handling and validations

---

## ⚙️ Setup Instructions (Local Development)

### 1️⃣ Clone the repository
```bash
git clone https://github.com/HamzaIshfaq123/fullstack-ecommerce-site.git
cd fullstack-ecommerce-site

2️⃣ Setup Backend
cd server
npm install
npm run dev

Create a .env file in the server folder:
MONGO_URI=your_mongodb_connection_string

3️⃣ Setup Frontend
cd client
npm install
npm run dev
