import express from 'express';
import { getAllSponsors } from '../controllers/adminController.js';
import { protect, isAdmin } from '../middleware/authMiddleware.js';

const router = express.Router();

router.get('/sponsors', protect, isAdmin, getAllSponsors);

export default router;
