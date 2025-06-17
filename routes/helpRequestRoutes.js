import express from 'express';
import { createHelpRequest, getHelpRequests } from '../controllers/helpRequestController.js';
import { protect } from '../middlewares/authMiddleware.js'; // ✅ Import middleware

const router = express.Router();

// ✅ Protected route: Only logged-in club can create
router.post('/create', protect, createHelpRequest);

// Optional: Only admin should use this, so add protect + isAdmin if needed
router.get('/all', protect, getHelpRequests);

export default router;
