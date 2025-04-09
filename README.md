

# 📝 Register CRUD App

A full-stack CRUD (Create, Read, Update, Delete) web application using **Django** (Backend) and **React** (Frontend) to manage registered users with fields like Name, Email, and Phone.

---

## 🚀 Features

- ➕ Add new user (Register)
- 📖 View all registered users
- ✏️ Edit user details
- ❌ Delete a user
- 📡 REST API integration with Axios
- 🎨 Clean and modern UI with responsive design

---

## 🛠 Tech Stack

### Backend
- Django
- Django REST Framework
- SQLite (default)

### Frontend
- React
- Axios
- CSS (custom styles)

---

## 📁 Project Structure

```
project-root/
├── backend/
│   ├── manage.py
│   ├── backend/
│   └── register/
│       ├── models.py
│       ├── serializers.py
│       ├── views.py
│       ├── urls.py
│       └── admin.py
├── frontend/
│   ├── src/
│   │   ├── App.js
│   │   ├── App.css
│   │   └── components/
│   │       ├── RegisterForm.js
│   │       └── RegisterList.js
└── README.md
```

---

## ⚙️ Getting Started

### 1️⃣ Backend Setup (Django + DRF)

Open terminal and run:

```bash
# Navigate to backend directory
cd backend

# Create virtual environment
python -m venv venv

# Activate virtual environment
# On Windows:
venv\Scripts\activate
# On macOS/Linux:
source venv/bin/activate

# Install dependencies
pip install django djangorestframework

# Make migrations
python manage.py makemigrations
python manage.py migrate

# Run server
python manage.py runserver
```

Django backend will run at:  
👉 `http://localhost:8000/`

Make sure your app exposes the following endpoint:  
👉 `http://localhost:8000/api/registers/`

---

### 2️⃣ Frontend Setup (React)

Open a **new terminal**, and run:

```bash
# Navigate to frontend directory
cd frontend

# Install dependencies
npm install

# Run React development server
npm start
```

React frontend will run at:  
👉 `http://localhost:3000/`

---

## 🔗 API Endpoints

| Method | Endpoint                     | Description             |
|--------|------------------------------|-------------------------|
| GET    | /api/registers/              | Get all registers       |
| POST   | /api/registers/              | Create a new register   |
| PUT    | /api/registers/<id>/         | Update register by ID   |
| DELETE | /api/registers/<id>/         | Delete register by ID   |

---

## 🧠 Future Improvements

- ✅ Client-side form validation
- ✅ Mobile responsiveness
- ✅ Toast notifications
- 🔐 Authentication
- 📊 Pagination and filtering

---

## 🙌 Author

Made with ❤️ as part of an internship task to demonstrate full-stack CRUD operations using Django and React.
```
