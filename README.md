# Nodeclass Project

A full-stack web application developed to practice and demonstrate frontend and backend software development, user authentication, database operations, and CRUD functionality.

The project provides a frontend interface that communicates with a Node.js and Express.js backend through API endpoints.

## Features

- User registration and login
- User authentication
- Token-based session handling
- Fruit management
- Create, read, update, and delete (CRUD) operations
- Student-related API structure
- Form validation
- Backend middleware
- REST API routes
- Database integration
- Frontend and backend separation
- Token refresh functionality

## Technologies

### Frontend

- HTML5
- CSS3
- JavaScript

### Backend

- Node.js
- Express.js
- JavaScript
- REST APIs

### Database

- MongoDB

### Development Tools

- Git
- GitHub
- VS Code
- npm

## Project Structure

```text
Nodeclass-project/
│
├── Test-Frontend/
│   ├── add.html
│   ├── addFruit.js
│   ├── delete.html
│   ├── deleteFruit.js
│   ├── edit.html
│   ├── edit.css
│   ├── editFruit.js
│   ├── index.html
│   ├── login.html
│   ├── login.js
│   ├── scripts.js
│   ├── signup.html
│   ├── signup.js
│   ├── style.css
│   └── tokenRefresher.js
│
├── src/
│   ├── config/
│   │   ├── db.js
│   │   └── env.js
│   │
│   ├── controllers/
│   │   ├── fruit.controller.js
│   │   ├── student.controllers.js
│   │   └── user.controller.js
│   │
│   ├── middleware/
│   │   └── user.middleware.js
│   │
│   ├── models/
│   │   ├── fruit.models.js
│   │   ├── student.models.js
│   │   └── user.models.js
│   │
│   ├── routes/
│   │   ├── fruit.routes.js
│   │   ├── index.js
│   │   ├── student.routes.js
│   │   └── user.routes.js
│   │
│   ├── services/
│   │   └── user.services.js
│   │
│   ├── validators/
│   │   ├── student.validator.js
│   │   └── user.validator.js
│   │
│   ├── app.js
│   ├── secrets.js
│   └── server.js
│
├── package.json
└── package-lock.json

How It Works
1. User Authentication

Users can create an account and log in through the frontend authentication pages.

The frontend sends authentication requests to the backend API, where the user information is processed and stored.

2. Database Integration

The backend connects to MongoDB and uses models to structure application data.

The project contains separate models for:

Users
Fruits
Students
3. API Architecture

The backend is organized into separate controllers, routes, services, middleware, and validators.

This structure helps keep the application organized and separates different responsibilities within the backend.

4. CRUD Operations

The fruit management functionality allows users to perform CRUD operations:

Create a fruit
View data
Edit a fruit
Delete a fruit
5. Validation and Middleware

The application includes validation modules and middleware for processing and protecting backend requests.

6. Token Handling

The frontend includes token refresh functionality to help maintain authenticated sessions.

Purpose

This project was developed as a practical full-stack software development project to strengthen skills in frontend development, backend development, API design, authentication, database integration, and application architecture.

Key Development Skills Demonstrated
Frontend development
Backend development
REST API development
Authentication
CRUD operations
MongoDB integration
API routing
Middleware implementation
Data validation
MVC-style application structure
Git and GitHub workflow
Project Status

This project was developed as part of practical software development training and continues to serve as a learning project for improving full-stack development skills.

Author

Jegbefume Joy Ndidi

Computer Science Student
Federal University of Petroleum Resources, Effurun

GitHub: https://github.com/justndidi

LinkedIn: https://www.linkedin.com/in/joy-jegbefume-96ba89391
