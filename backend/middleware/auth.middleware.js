import jwt from 'jsonwebtoken';
import { AppError } from '../utils/appError.js';
import config from '../config/environment.js';
import User from '../models/user.model.js';

export const authenticateToken = async (req, res, next) => {
  try {
    const token = req.headers.authorization?.split(' ')[1];

    if (!token) {
      throw new AppError('No token provided', 401);
    }

    const decoded = jwt.verify(token, config.jwtSecret);
    const user = await User.findById(decoded.id).select('-password');

    if (!user) {
      throw new AppError('User no longer exists', 401);
    }

    if (!user.active) {
      throw new AppError('User account is deactivated', 401);
    }

    req.user = user;
    next();
  } catch (error) {
    if (error.name === 'JsonWebTokenError') {
      next(new AppError('Invalid token', 401));
    } else {
      next(error);
    }
  }
};
