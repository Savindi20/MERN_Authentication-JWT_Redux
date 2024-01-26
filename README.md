# MERN Authentication Starter (react, JWT, redux, express, mongodb)

This is a starter app for a MERN stack application with authentication. This is for a SPA (Single Page Application) workflow that uses the [Vite](https://vite.dev) Build tool.

It includes the following:

- Backend API with Express & MongoDB
- Routes for auth, logout, register, profile, update profile
- JWT authentication stored in HTTP-only cookie
- Protected routes and endpoints
- Custom middleware to check JSON web token and store in cookie
- Custom error middleware
- React frontend to register, login, logout, view profile, and update profile
- React Bootstrap UI library
- React Toastify notifications

### Env Variables

`.env` file

```
NODE_ENV = development
PORT = 5000
MONGO_URI = your mongodb uri
JWT_SECRET = 'abc123'
```

### Install Dependencies (backend)

```
npm init -y
npm i express dotenv mongoose bcryptjs jsonwebtoken cookie-parser
npm i -D nodemon
npm i -D concurrently
```

### Install Dependencies (frontend)

```
npm create vite@latest frontend
√ Select a framework: » React
√ Select a variant: » JavaScript
cd frontend
npm i
npm i react-bootstrap react-icons 
npm i bootstrap
npm i react-router-dom react-router-bootstrap
cd ..
```

### Run

```
# Run frontend (:3000) & backend (:5000)
npm run dev

# Run backend only
npm run server
```

## Build & Deploy

```
# Create frontend prod build
cd frontend
npm run build
```