import jwt from 'jsonwebtoken';
import User from '../models/user.model.js';
import { AppError } from '../utils/appError.js';
import config from '../config/environment.js';

const generateToken = (userId) => {
  return jwt.sign({ id: userId }, config.jwtSecret, {
    expiresIn: config.jwtExpiresIn,
  });
};

export const authService = {
  async register(userData) {
    const existingUser = await User.findOne({ email: userData.email });
    if (existingUser) {
      throw new AppError('Email already registered', 400);
    }

    const user = await User.create(userData);
    user.lastLogin = Date.now();
    await user.save({ validateBeforeSave: false });

    user.password = undefined;
    const token = generateToken(user._id);

    return { user, token };
  },

  async login({ email, password }) {
    const user = await User.findOne({ email, active: true });

    if (!user || !(await user.isValidPassword(password))) {
      throw new AppError('Invalid credentials', 401);
    }

    user.lastLogin = Date.now();
    await user.save({ validateBeforeSave: false });

    user.password = undefined;
    const token = generateToken(user._id);

    return { user, token };
  },

  async logout(userId) {
    const user = await User.findById(userId);
    if (!user) {
      throw new AppError('User not found', 404);
    }

    // Update last activity timestamp
    user.lastLogout = Date.now();
    await user.save({ validateBeforeSave: false });

    return true;
  },
};
