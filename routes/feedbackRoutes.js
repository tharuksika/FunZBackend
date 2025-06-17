// routes/feedbackRoutes.js
import express from 'express';
import {
  createFeedback,
  getApprovedFeedback,
  approveFeedback
} from '../controllers/feedbackController.js';
import { protect, isAdmin } from '../middlewares/authMiddleware.js';

const router = express.Router();

// Club submits feedback
router.post('/', protect, createFeedback);

// Public view of approved feedback
router.get('/', getApprovedFeedback);

// Admin approves feedback
router.patch('/:id/approve', protect, isAdmin, approveFeedback);

export default router;
