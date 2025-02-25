// src/app.js
import express from 'express';
import cors from 'cors';
import helmet from 'helmet';
import mongoSanitize from 'express-mongo-sanitize';
import dotenv from 'dotenv';
import connectDB from './config/database.js';
import authRoutes from './routes/auth.routes.js';
import { errorHandler } from './middleware/error.middleware.js';

const app = express();
dotenv.config();
connectDB();

// Middleware
app.use(helmet());
app.use(mongoSanitize());
app.use(
  cors({
    origin: process.env.FRONTEND_URL,
    credentials: true,
  })
);
app.use(express.json({ limit: '10kb' }));

app.get('/test', (req, res) => {
  res.json({ message: "Test route is working" });
});

// Mount Authentication Routes
app.use('/api/auth', authRoutes);

// Global Error Handling Middleware
app.use(errorHandler);

export default app;
