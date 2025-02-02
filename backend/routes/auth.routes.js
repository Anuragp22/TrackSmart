// src/routes/auth.routes.js
import express from 'express';
import { register, login, logout } from '../controllers/auth.controller.js';
import {
  registerValidation,
  loginValidation,
} from '../middleware/validate.middleware.js';
import { authLimiter } from '../middleware/rateLimiter.middleware.js';
import { authenticateToken } from '../middleware/auth.middleware.js';

const router = express.Router();

// Public routes with validation
router.post('/register', authLimiter, registerValidation, register);
router.post('/login', authLimiter, loginValidation, login);

// Protected routes - only need authenticateToken
router.post('/logout', authenticateToken, logout);

export default router;
