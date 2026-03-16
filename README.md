# Full-Stack E-Commerce Application (MERN)

A robust, full-stack e-commerce application built with the MERN stack, focusing on secure architectural patterns, data integrity, and professional API development.

🚧 Status: Active Development
This project is continuously evolving. Current focus is on secure transaction handling and scalable backend state management.

## 📌 Project Overview

This project is designed with a focus on backend-led validation. Rather than trusting the client for pricing or data validation, the system performs secure, server-side calculations to ensure data integrity during the checkout process.

Key Engineering Decisions:
The Snapshot Pattern: Orders are stored with embedded snapshots of product data (name, price, quantity) to ensure historical records remain immutable even if the product catalog changes.

Secure Authentication: JWT-based stateless authentication using HttpOnly cookies for secure session management.

Defense-in-Depth: Server-side price calculation and product validation to prevent client-side data tampering.

## 🛠️ Tech Stack

### Frontend (Client)
- React
- Tailwind CSS
- React Router
- React Hook Form (with Zod validation)
- Context API
- Fetch

### Backend (Server)
- Node.js
- Express.js
- MongoDB (Mongoose)
- JSON Web Tokens (JWT)
- REST APIs

### Deployment
- Vercel (Frontend)
- MongoDB Atlas (Database)
- Environment variables for configuration

## 📂 Project Structure

fullstack-ecommerce-site/
├── client/           # React frontend
│   ├── src/
│   │   ├── components/ # Reusable UI logic
│   │   ├── context/    # Global state management
│   │   └── hooks/      # Custom React hooks
├── server/           # Node.js/Express backend
│   ├── models/       # Mongoose schemas (Snapshot patterns)
│   ├── middleware/   # JWT authentication & security layers
│   ├── routes/       # RESTful API endpoints


## ✅ Completed Features

- Secure Backend Integration: Implemented JWT-based authentication middleware.

- Data Integrity: Backend-side calculation of order totals and product verification.

- Order Schema: Developed a relational-style document schema using MongoDB sub-documents.

- Immutable History: Implemented the "Snapshot Pattern" for order items.

- Frontend State: Managed complex cart states (quantity limits, price updates) immutably.

- Production Ready: Deployed client to Vercel with environment-based configuration.

## 🚀 Upcoming Features (Planned)

- Admin Dashboard: CRUD operations for inventory and category management.

- Category Filtering: Dynamic filtering logic for product discovery.

- Automated Notifications: Email integration for order confirmation.

- Performance Testing: Unit and integration testing for API routes.

## ⚙️ Setup Instructions (Local Development)

### 1️⃣ Clone the repository
```bash
git clone https://github.com/HamzaIshfaq123/fullstack-ecommerce-site.git

cd fullstack-ecommerce-site

2️⃣ Setup Backend
cd Server
npm install
node index

Create a .env file in the server folder:
MONGO_URI=your_mongodb_connection_string

3️⃣ Setup Frontend
cd Client
npm install
npm run dev
