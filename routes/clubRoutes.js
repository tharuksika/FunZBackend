import express from 'express';
import { addMatch } from '../controllers/clubController.js';
import { protect } from '../middlewares/authMiddleware.js';

const router = express.Router();

// Sample test route
router.get('/', (req, res) => {
  res.send('Club route working!');
});

router.post('/matches', protect, addMatch);

export default router;
