

import jwt from 'jsonwebtoken';
import User from '../models/User.js';

export const protect = async (req, res, next) => {
  let token;

  if (
    req.headers.authorization &&
    req.headers.authorization.startsWith('Bearer')
  ) {
    try {
      token = req.headers.authorization.split(' ')[1];
      const decoded = jwt.verify(token, process.env.JWT_SECRET);

      // Fetch user from DB and attach to req
      const user = await User.findById(decoded.id).select('-password');

      if (!user) {
        return res.status(401).json({ message: 'User not found' });
      }

      req.user = user;
      next();
    } catch (error) {
      res.status(401).json({ message: 'Invalid token', error: error.message });
    }
  } else {
    res.status(401).json({ message: 'No token provided' });
  }
};

export const isAdmin = (req, res, next) => {
  if (req.user && req.user.role === 'admin') {
    next();
  } else {
    res.status(403).json({ message: 'Admin access denied' });
  }
};

export const isSponsor = (req, res, next) => {
  if (req.user && req.user.role === 'sponsor') {
    next();
  } else {
    res.status(403).json({ message: 'Sponsor access denied' });
  }
};
