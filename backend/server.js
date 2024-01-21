import express from 'express';
import dotenv from 'dotenv';
dotenv.config();
import { notFound, errorHandler } from './middleware/errorMiddleware.js';
import userRoutes from './routes/userRoutes.js';
import connectDB from './config/db.js';
const port = process.env.PORT || 5000;

connectDB();

const app = express();

app.use('/api/users', userRoutes);

app.get('/', (req, res) => res.send('Server is ready'));

app.use(notFound);
app.use(errorHandler);

app.listen(port, () => console.log(`Server started on port ${port}`));

// -**Post /api/users** - Register a uster
// -**Post /api/users/auth** - Authenticate a user and get a token
// -**Post /api/users/logout** - Logout a user and clear cookie
// -**GET /api/users/profile** - Get user profile
// -**PUT /api/users/profile** - Update user profile