import express from 'express';
import { submitSponsorship, getAllSubmissions, updateSubmissionStatus } from '../controllers/sponsorController.js';


const router = express.Router();

// POST /api/sponsor/submit
router.post('/submit', submitSponsorship);

router.get('/all', getAllSubmissions); // 👈 Now supports GET

router.put('/update/:id', updateSubmissionStatus);

export default router;
