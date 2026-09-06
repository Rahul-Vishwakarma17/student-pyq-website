# Student PYQ Website

A full-stack web application that provides students with easy access to
Previous Year Question Papers (PYQs). It includes a student-facing
interface and an admin panel for managing PYQ PDF files.

## 🚀 Live Demo

**Frontend:** https://student-pyq-website.vercel.app/

> The backend is deployed on Render. The first request may take some
> time if the service is waking up from inactivity.

## ✨ Features

### 👨‍🎓 Student Features

-   Browse Previous Year Question Papers
-   View papers by subject, semester, and year
-   Download PDF question papers
-   Responsive and simple user interface
-   Access newly added PYQs

### 🔐 Admin Features

-   Admin authentication
-   Upload new PYQ PDF files
-   Manage uploaded PYQs
-   Delete PYQ records/files
-   Protected admin functionality

### ⚙️ Backend Features

-   REST API with Express.js
-   MongoDB database with Mongoose
-   JWT authentication
-   Password hashing with bcryptjs
-   PDF uploads using Multer
-   Protected admin routes
-   CORS support
-   Environment variables with dotenv
-   Static serving of uploaded files

## 🛠️ Tech Stack

### Frontend

-   React
-   Vite
-   JavaScript
-   React Router
-   Axios
-   CSS

### Backend

-   Node.js
-   Express.js
-   MongoDB
-   Mongoose
-   JWT
-   bcryptjs
-   Multer
-   CORS
-   dotenv

### Deployment

-   Vercel --- Frontend
-   Render --- Backend
-   MongoDB Atlas --- Database

## 📁 Project Structure

``` text
student-pyq-website/
│
├── backend/
│   ├── config/
│   ├── controllers/
│   ├── middleware/
│   ├── models/
│   ├── routes/
│   ├── uploads/
│   ├── .env
│   ├── createAdmin.js
│   ├── package.json
│   └── server.js
│
├── frontend/
│   ├── public/
│   ├── src/
│   ├── .env
│   ├── package.json
│   ├── index.html
│   └── vite.config.js
│
└── info.md
```

## 🔄 Application Flow

``` text
Student
   │
   ▼
React Frontend
   │
   ▼
Express REST API
   │
   ├── Authentication
   ├── PYQ Management
   └── File Handling
   │
   ▼
MongoDB Atlas
```

### Admin Flow

``` text
Admin Login
    │
    ▼
JWT Authentication
    │
    ▼
Admin Dashboard
    │
    ├── Add PYQ
    │      └── Upload PDF
    │
    └── Delete PYQ
```

## 💻 Run Locally

### 1. Clone the Repository

``` bash
git clone https://github.com/Rahul-Vishwakarma17/student-pyq-website.git
cd student-pyq-website
```

### 2. Backend Setup

``` bash
cd backend
npm install
```

Create a `.env` file inside the `backend` folder:

``` env
MONGO_URI=your_mongodb_connection_string
PORT=5000
JWT_SECRET=your_jwt_secret
```

Start the backend:

``` bash
npm start
```

For development with Nodemon:

``` bash
npm run dev
```

### 3. Create the Admin Account

If an admin account does not already exist:

``` bash
node createAdmin.js
```

Use the credentials created by the script to log in to the admin
interface.

### 4. Frontend Setup

Open another terminal:

``` bash
cd frontend
npm install
npm run dev
```

The Vite development server normally runs at:

``` text
http://localhost:5173/
```

## 🗄️ Database

The deployed application uses **MongoDB Atlas**.

**MongoDB Compass** can be used as a GUI to inspect and manage the
MongoDB database.

The application stores information such as:

-   Subject
-   Semester
-   Year
-   PDF file path

## 📄 PDF Upload & Storage

When an administrator uploads a PYQ:

``` text
Admin
  ↓
PDF Upload
  ↓
Multer
  ↓
backend/uploads/
  ↓
File path saved in MongoDB
  ↓
Student can access/download the PDF
```

The backend serves uploaded files through the `/uploads` path.

## 🔐 Security Notes

-   Never commit `.env` files.
-   Never expose MongoDB credentials.
-   Never expose JWT secrets.
-   Do not publish admin credentials.
-   Keep protected admin routes restricted to authenticated
    administrators.

## ☁️ Deployment

### Frontend --- Vercel

The React/Vite frontend is deployed on Vercel.

### Backend --- Render

The Express backend is deployed on Render.

### Database --- MongoDB Atlas

MongoDB Atlas provides the cloud database used by the deployed backend.

Production environment variables should be configured in the deployment
platform rather than committed to GitHub.

## 📦 Backend Scripts

``` bash
npm start       # Start the production server
npm run dev     # Start development server with Nodemon
```

## 📦 Frontend Scripts

``` bash
npm run dev     # Start Vite development server
npm run build   # Create production build
npm run lint    # Run ESLint
npm run preview # Preview production build
```

## 🎯 Key Learning Outcomes

This project demonstrates practical experience with:

-   Full-stack web development
-   React frontend development
-   REST API development
-   MongoDB and Mongoose
-   JWT authentication
-   Password hashing
-   Admin/role-based functionality
-   File uploads with Multer
-   Axios API communication
-   CORS configuration
-   Environment variables
-   Git and GitHub
-   Vercel and Render deployment
-   MongoDB Atlas

## 🔮 Future Improvements

-   Search and advanced filtering
-   Pagination
-   Student accounts
-   Saved/favourite papers
-   Download statistics
-   Improved admin dashboard
-   Cloud-based PDF/object storage
-   Better validation and error handling
-   Notifications for newly added PYQs
-   Additional notes and study resources

## 👨‍💻 Author

**Rahul Vishwakarma**

-   GitHub: https://github.com/Rahul-Vishwakarma17

## 📜 License

This project is primarily intended as a learning and portfolio project.
