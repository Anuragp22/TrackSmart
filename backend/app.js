// src/app.js
import express from 'express';
import cors from 'cors';
import helmet from 'helmet';
import mongoSanitize from 'express-mongo-sanitize';
// import passport from 'passport';
import config from './config/environment.js';
import connectDB from './config/database.js';
import authRoutes from './routes/auth.routes.js';
import { errorHandler } from './middleware/error.middleware.js';

const app = express();

// Connect to MongoDB
connectDB();

// Middleware
app.use(helmet());
app.use(mongoSanitize());
app.use(
  cors({
    origin: config.frontendUrl,
    credentials: true,
  })
);
app.use(express.json({ limit: '10kb' }));
// app.use(passport.initialize());

// Mount Authentication Routes
app.use('/api/auth', authRoutes);

// Global Error Handling Middleware
app.use(errorHandler);

export default app;
