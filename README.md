# 🍽️ Restaurant Management System (Full Stack)

This is a full-stack restaurant management system that I built to simulate how real restaurant software works.
It includes both a **user interface** and an **admin dashboard**, connected through a backend and database.

The idea is simple:

> User performs actions → data is stored → admin can see everything in real time.

---

##  Features

### 👤 User Side

* Add customer details
* View menu (dynamic from database)
* Add items to cart
* Live bill generation
* Make payment
* Apply for jobs
* Book reservations

---

###  Admin Dashboard

* View all users
* View orders
* View total sales
* Add / delete products
* View staff applications
* View reservations
* Auto-refresh data (updates every few seconds)

---

## 🧠 Tech Stack

* Frontend: HTML, CSS, JavaScript
* Backend: Node.js, Express
* Database: MySQL

---

## 📂 Project Structure

```
frontend/
│
├── front-end.html
├── admin.html
├── javascript.js
├── admin.js
├── style.css

backend/
│
├── server.js
├── db.js
├── routes/
│   ├── users.js
│   ├── products.js
│   ├── orders.js
│   ├── payments.js
│   ├── staff.js
│   ├── reservations.js
```

---

## ⚙️ How to Run This Project

### 1️⃣ Install dependencies

Go to backend folder and run:

```
npm install
```

---

### 2️⃣ Start the server

```
npm start
```

You should see:

```
Server running on port 5000 🚀
```

---

### 3️⃣ Setup Database

* Open MySQL
* Create database:

```
CREATE DATABASE shopDB;
USE shopDB;
```

* Create tables (users, products, orders, payments, staff, reservations)

---

### 4️⃣ Open Frontend

Just open these files in your browser:

```
front-end.html   → User interface  
admin.html       → Admin dashboard
```

---

## 🔥 How It Works (Simple Flow)

```
User → Backend → Database ← Backend ← Admin
```

* User adds data (orders, reservations, etc.)
* Data is stored in database
* Admin dashboard fetches and displays it

---

## 🎯 Demo Flow

1. Add a customer
2. Add items to cart
3. Click "Pay Now"
4. Apply for job / book reservation
5. Open admin dashboard
6. See all updates live

---

## 💡 What I Learned

* How frontend connects to backend APIs
* How to use MySQL with Node.js
* Building a real-time data flow system
* Structuring a full-stack project

---

## 🚧 Future Improvements

* Edit product feature
* Admin login system
* Better UI animations
* Bill download (PDF)

---
