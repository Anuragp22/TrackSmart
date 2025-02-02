// auth.controller.js
import { authService } from '../services/auth.service.js';
import { catchAsync } from '../utils/catchAsync.js';

export const register = catchAsync(async (req, res) => {
  const { user, token } = await authService.register(req.body);
  res.status(201).json({ status: 'success', token, user });
});

export const login = catchAsync(async (req, res) => {
  const { user, token } = await authService.login(req.body);
  res.status(200).json({ status: 'success', token, user });
});

export const logout = catchAsync(async (req, res) => {
  await authService.logout(req.user._id);
  res.status(200).json({
    status: 'success',
    message: 'Successfully logged out',
  });
});

export const getMe = catchAsync(async (req, res) => {
  res.status(200).json({ status: 'success', data: { user: req.user } });
});
