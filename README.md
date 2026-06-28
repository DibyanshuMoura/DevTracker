# DevTracker

DevTracker is a full-stack task management application built with the MERN stack that enables users to securely manage their personal tasks. The application implements JWT-based authentication, ensuring that every user can only access and manage their own data.

The project demonstrates secure authentication, RESTful API development, MongoDB integration, and full-stack communication between a React frontend and an Express backend.

---

## Motivation

Most beginner task management projects focus solely on CRUD operations and store data locally or without authentication. While useful for learning, they do not reflect how production applications manage users and protect data.

DevTracker was built to explore the complete lifecycle of a modern web application, including:

* Secure user authentication
* Password hashing
* Protected backend routes
* User-specific data access
* Persistent cloud database storage
* Responsive frontend development

Instead of allowing every user to access the same data, DevTracker ensures that each authenticated user has their own isolated workspace.

---

## Features

* User Registration
* Secure Login using JWT Authentication
* Password Hashing using bcrypt
* Protected Routes with JWT Middleware
* Create Tasks
* Delete Tasks
* User-specific Task Management
* MongoDB Atlas Integration
* Responsive React Interface

---

## Tech Stack

### Frontend

* React
* React Router
* Tailwind CSS
* Vite
* Fetch API

### Backend

* Node.js
* Express.js
* MongoDB Atlas
* Mongoose
* JSON Web Token (JWT)
* bcrypt
* CORS
* dotenv

---

## Database Design

The application uses two MongoDB collections.

### User Collection

Stores authentication and account information.

* Username
* Email
* Hashed Password

### Task Collection

Stores tasks independently from users.

* User Reference (`ObjectId`)
* Heading
* Body

Each task belongs to exactly one user through a MongoDB reference, allowing efficient querying and better scalability than embedding every task inside the user document.

---

## Authentication Flow

1. A user registers using a username, email, and password.
2. The password is securely hashed using bcrypt before being stored.
3. During login, the submitted password is verified against the stored hash.
4. A JWT is generated upon successful authentication.
5. The frontend stores the JWT in Local Storage.
6. Every protected request includes the token:

```http
Authorization: Bearer <JWT_TOKEN>
```

7. JWT middleware validates the token before granting access to protected endpoints.

---

## API Endpoints

| Method | Endpoint          | Description                                         | Authentication |
| ------ | ----------------- | --------------------------------------------------- | -------------- |
| POST   | `/register`       | Register a new user                                 | No             |
| POST   | `/login`          | Authenticate user and generate a JWT                | No             |
| GET    | `/me`             | Retrieve the authenticated user's profile and tasks | Yes            |
| POST   | `/addtask`        | Create a new task                                   | Yes            |
| DELETE | `/deletetask/:id` | Delete an existing task                             | Yes            |

---

## Project Structure

```text
DevTracker
│
├── Backend
│   ├── config
│   ├── middleware
│   ├── models
│   ├── .env
│   ├── package.json
│   └── server.js
│
├── Frontend
│   ├── public
│   ├── src
│   ├── assets
│   ├── package.json
│   └── vite.config.js
│
├── .gitignore
└── README.md
```

---

## Getting Started

### Clone the Repository

```bash
git clone https://github.com/DibyanshuMoura/DevTracker.git
cd DevTracker
```

### Backend Setup

```bash
cd Backend
npm install
```

Create a `.env` file inside the Backend directory.

```env
MONGO_URI=your_mongodb_connection_string
JWT_SECRET=your_secret_key
PORT=3000
```

Start the backend server.

```bash
npm run dev
```

### Frontend Setup

```bash
cd ../Frontend
npm install
npm run dev
```

The application will be available at:

Frontend

```text
http://localhost:5173
```

Backend

```text
http://localhost:3000
```

---

## Future Improvements

* Edit Existing Tasks
* Mark Tasks as Completed
* Search Tasks
* Task Categories
* Due Dates
* Pagination
* Refresh Token Authentication
* Docker Support
* Deployment on Render and Vercel

---

## Author

**Dibyanshu Moura**

GitHub: https://github.com/DibyanshuMoura