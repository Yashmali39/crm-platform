# Lead Management CRM

A modern full-stack CRM (Customer Relationship Management) application designed to help businesses efficiently manage, track, and analyze customer leads. The platform provides a centralized dashboard for handling lead information, monitoring sales pipeline progress, and visualizing lead distribution through interactive analytics.

The application is built using the MERN-inspired stack with React, Node.js, Express, and MongoDB Atlas, and is fully deployed using Vercel and Render.

## Video Demo

Demo Video: **https://drive.google.com/file/d/1h3DNymeUhUYZP0SFiD3C2Hnycgxcncpi/view?usp=sharing**

## Live Demo

Frontend: **https://crm-platform-pied.vercel.app/**

Backend API: **https://crm-platform-backend-76j4.onrender.com**

GitHub Repository: **https://github.com/Yashmali39/crm-platform**

---

## Features

### Lead Management

* Create new leads/customers
* View all leads in a centralized dashboard
* Edit lead information
* Delete leads
* Manage lead lifecycle effectively

### Lead Status Tracking

Track leads through the following stages:

* New
* Contacted
* Qualified
* Converted
* Lost

### Search Functionality

Quickly search leads using:

* Name
* Email Address
* Company Name

### Statistics Dashboard

Real-time dashboard displaying:

* Total Leads
* Contacted Leads
* Qualified Leads
* Converted Leads
* Lost Leads

### Lead Analytics

* Interactive Pie Chart Visualization
* Real-time statistics updates
* Visual lead distribution tracking

### Pagination

* Efficient data loading
* Better scalability for large datasets
* Improved user experience

### Modern User Experience

* Responsive Design
* Toast Notifications
* Loading States
* Clean Dashboard UI
* Mobile-Friendly Layout

---

# Tech Stack & Architecture

The Lead Management CRM follows a client-server architecture with separate frontend and backend deployments.

## Frontend

Framework: React.js (Vite)

Libraries Used:

* Tailwind CSS
* Axios
* Recharts
* React Hot Toast
* React Icons

## Backend

Runtime: Node.js

Framework: Express.js

Features:

* RESTful API Architecture
* MongoDB Integration using Mongoose
* Search & Filtering
* Statistics Aggregation
* Pagination Support

## Database

Database: MongoDB Atlas

Stores:

* Lead Information
* Lead Status
* Contact Details
* Notes
* Creation Dates

## Deployment

Frontend:

* Vercel

Backend:

* Render

Database:

* MongoDB Atlas

---

# Project Structure

```bash
crm-platform
│
├── client
│   ├── src
│   │   ├── components
│   │   ├── pages
│   │   ├── services
│   │   └── App.jsx
│   │
│   └── package.json
│
├── server
│   ├── config
│   ├── controllers
│   ├── models
│   ├── routes
│   ├── server.js
│   └── package.json
│
└── README.md
```

---

# Getting Started

To get a local copy up and running, follow these steps.

## Prerequisites

Make sure the following are installed:

* Node.js
* npm
* MongoDB Atlas Account
* Git

---

## Installation & Setup

### Clone Repository

```bash
git clone https://github.com/Yashmali39/crm-platform
cd crm-platform
```

---

## Backend Setup

Navigate to backend directory:

```bash
cd server
```

Install dependencies:

```bash
npm install
```

Create a `.env` file:

```env
MONGODB_URI=*********
PORT=3000
```

Run the server:

```bash
npm run dev
```

Backend runs on:

```bash
http://localhost:3000
```

---

## Frontend Setup

Navigate to frontend directory:

```bash
cd client
```

Install dependencies:

```bash
npm install
```

Create a `.env` file:

```env
VITE_API_URL=http://localhost:3000/api/leads
```

Run the frontend:

```bash
npm run dev
```

Frontend runs on:

```bash
http://localhost:5173
```

---

# API Endpoints

## Create Lead

```http
POST /api/leads
```

## Get All Leads

```http
GET /api/leads
```

## Search Leads

```http
GET /api/leads/search?search=value
```

## Update Lead

```http
PUT /api/leads/:id
```

## Delete Lead

```http
DELETE /api/leads/:id
```

## Get Statistics

```http
GET /api/leads/stats
```

Example Response:

```json
{
  "total": 50,
  "new": 15,
  "contacted": 10,
  "qualified": 8,
  "converted": 12,
  "lost": 5
}
```

---




# Future Improvements

* User Authentication & Authorization
* Export Leads to CSV/Excel
* Advanced Filtering
* Activity Timeline
* Email Integration
* Role-Based Access Control
* Dark Mode Support

---

# Acknowledgements

This project was developed as part of the **Full Stack Developer Internship Assignment** for **InstaWeb Labs Private Limited**.

Special thanks to the maintainers and contributors of:

* React.js
* Node.js
* Express.js
* MongoDB Atlas
* Tailwind CSS
* Recharts
* Vercel
* Render

---

# Author

### Yash Mali

Computer Engineering Student | Full Stack Developer

GitHub: https://github.com/Yashmali39

LinkedIn: https://www.linkedin.com/in/yash-mali-399b61283/

---


