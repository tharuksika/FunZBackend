import express from 'express';
import {
  getApprovedHelpRequests,
  sponsorHelpRequest,
  getMySponsorships,
} from '../controllers/sponsorController.js';
import { protect, isSponsor } from '../middlewares/authMiddleware.js';

const router = express.Router();

// All sponsor routes need protection and sponsor role check
router.use(protect, isSponsor);

// ✅ View all approved help requests
router.get('/help-requests', getApprovedHelpRequests);

// ✅ Sponsor a help request
router.post('/sponsor/:id', sponsorHelpRequest);

// ✅ View all your sponsorships
router.get('/my-sponsorships', getMySponsorships);

export default router;
