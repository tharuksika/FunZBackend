import express from 'express';
import {
  getAllUsers,
  approveUser,
  deleteUser,
  getAllClubs,
  getAllHelpRequests,
  approveFeedback,
  deleteHelpRequest,
  deleteFeedback,
  approveHelpRequest 
} from '../controllers/adminController.js';


import { protect, isAdmin } from '../middlewares/authMiddleware.js';

const router = express.Router();

// Apply protection and admin check to all routes below
router.use(protect, isAdmin);

// ✅ Admin: Get all users
router.get('/users', getAllUsers);

// ✅ Admin: Approve any user (club/sponsor)
router.patch('/approve/:id', approveUser);

// ✅ Admin: Delete a user (KEEP ONLY THIS ONE)
router.delete('/users/:id', deleteUser);

// ✅ Admin: View all clubs
router.get('/clubs', getAllClubs);

// ✅ Admin: View all help requests
router.get('/requests', getAllHelpRequests);

// ✅ Admin: Approve feedback
router.patch('/feedback/approve/:id', approveFeedback);

// ✅ Admin: Delete help request
router.delete('/help-requests/:id', deleteHelpRequest);

// ✅ Admin: Delete feedback
router.delete('/feedbacks/:id', deleteFeedback);

// ✅ Admin approves a help request
router.patch('/help/approve/:id', protect, isAdmin, approveHelpRequest);

export default router;
