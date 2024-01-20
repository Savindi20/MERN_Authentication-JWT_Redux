import express from 'express';
import dotenv from 'dotenv';
dotenv.config();
const port = process.env.PORT || 5000;

const app = express();
app.get('/', (req, res) => res.send('Server is ready'));
app.listen(port, () => console.log(`Server started on port ${port}`));

// -**Post /api/users** - Register a uster
// -**Post /api/users/auth** - Authenticate a user and get a token
// -**Post /api/users/logout** - Logout a user and clear cookie
// -**GET /api/users/profile** - Get user profile
// -**PUT /api/users/profile** - Update user profile