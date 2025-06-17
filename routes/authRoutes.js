
import express from 'express';
import { registerUser, loginUser } from '../controllers/authController.js';
export const isSponsor = (req, res, next) => {
  if (req.user && req.user.role === 'sponsor') {
    next();
  } else {
    res.status(403).json({ message: 'Sponsor access denied' });
  }
};

const router = express.Router();
router.post('/register', registerUser);
router.post('/login', loginUser);

export default router;
