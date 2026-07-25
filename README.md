# 🚗 Cars24 Clone

A production-style **Cars24 Clone** built using **Next.js**, **ASP.NET Core Web API**, and **MongoDB**.

The project replicates the core Cars24 experience while implementing several advanced features such as **smart search**, **city-based geo-filtering**, **dynamic pricing**, **wishlist**, **authentication**, and **vehicle booking**.

---

## 🌐 Live Demo

### Frontend
https://cars24-clone-lemon.vercel.app

### Backend API
https://cars24-clone-2lbm.onrender.com

---

# 📷 Preview

> Add screenshots here

- Home Page
- Buy Used Cars
- New Cars
- Car Details
- Wishlist
- Login
- City Selector

---

# ✨ Features

## 🚘 Vehicle Marketplace

- Buy Used Cars
- Browse New Cars
- Car Details Page
- Vehicle Booking
- Wishlist
- User Authentication

---

## 🔍 Smart Search

- Keyword Search
- Auto Suggestions
- Brand Filter
- Fuel Filter
- Transmission Filter
- Year Filter
- Price Filter
- City Filter
- Search Ranking

---

## 📍 Geo-fencing

- City selector in Navbar
- Default location is **India**
- Filters cars based on selected city
- Dynamic search updates

---

## 💰 Dynamic Pricing

Recommended Price is calculated dynamically based on:

- City
- Vehicle Category
- Demand
- Seasonal Logic

instead of storing static values inside MongoDB.

---

## ❤️ User Features

- Login
- Signup
- Profile
- Wishlist
- Book Vehicle
- Book Appointment

---

# 🛠 Tech Stack

## Frontend

- Next.js
- React
- TypeScript
- Tailwind CSS
- Context API

---

## Backend

- ASP.NET Core Web API (.NET 9)
- REST APIs
- MongoDB Driver
- Dependency Injection

---

## Database

- MongoDB Atlas

---

## Deployment

- Vercel
- Render
- Docker

---

# 📂 Project Structure

```text
cars24-clone
│
├── Cars24API
│   ├── Controllers
│   ├── Models
│   ├── Services
│   ├── Seed
│   ├── Program.cs
│   └── Dockerfile
│
└── cars24
    ├── components
    ├── context
    ├── pages
    ├── services
    └── styles
```

---

# 🚀 Getting Started

## Clone Repository

```bash
git clone https://github.com/Rakesh-dev07/cars24-clone.git
cd cars24-clone
```

---

# Backend

```bash
cd Cars24API

dotnet restore

dotnet run
```

---

# Frontend

```bash
cd cars24

npm install

npm run dev
```

---

# ⚙ Environment Variables

## Frontend (.env.local)

```env
NEXT_PUBLIC_API_URL=http://localhost:5203/api
```

Production

```env
NEXT_PUBLIC_API_URL=https://cars24-clone-2lbm.onrender.com/api
```

---

## Backend

Configure MongoDB inside

```
appsettings.Development.json
```

Production uses Render Environment Variables.

---

# 🌱 Seed Demo Data

Populate demo cars using

```
GET /api/seed
```

This inserts demo vehicles into MongoDB for testing.

---

# 📌 API Endpoints

## Cars

```
GET /api/car/{id}

GET /api/car/summaries

POST /api/car
```

---

## Search

```
GET /api/search

GET /api/search/suggestions
```

---

## Authentication

```
POST /api/auth/login

POST /api/auth/signup
```

---

# 🏗 Architecture

```
Next.js Frontend
        │
        ▼
ASP.NET Core REST API
        │
        ▼
MongoDB Atlas
```

---

# 🎯 Internship Features Implemented

✅ Advanced Search

✅ Auto Suggestions

✅ Smart Filters

✅ City Geo-fencing

✅ Dynamic Recommended Pricing

✅ Used Cars Module

✅ New Cars Module

✅ Wishlist

✅ Authentication

✅ Booking Flow

---

# 🚀 Future Improvements

- Google Maps Integration
- Maintenance Cost Prediction
- Push Notifications (Firebase)
- Referral & Rewards System
- Real-time Chat
- Admin Dashboard

---

# 👨‍💻 Author

### Rakesh Yadav

Portfolio

https://portfolio-red-three-22.vercel.app

LinkedIn

https://www.linkedin.com/in/contact-rakesh-yadav

GitHub

https://github.com/Rakesh-dev07

---

⭐ If you found this project interesting, consider giving it a star!