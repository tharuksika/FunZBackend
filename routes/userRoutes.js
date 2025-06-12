import express from 'express';
import { protect } from '../middleware/authMiddleware.js';
import { authorizeRoles } from '../middleware/roleMiddleware.js';
const router = express.Router();
router.get('/dashboard', protect, (req, res) => {
  res.json({ message: `Welcome to ${req.user.role} dashboard`, user: req.user });
});
router.get('/admin', protect, authorizeRoles('admin'), (req, res) => {
  res.json({ message: 'Admin dashboard with CRUD coming soon.' });
});
export default router;
