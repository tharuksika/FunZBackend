import express from 'express';
import dotenv from 'dotenv';
import connectDB from './config/db.js';
import cors from 'cors';

// Import routes
import authRoutes from './routes/authRoutes.js';
import clubRoutes from './routes/clubRoutes.js';
import adminRoutes from './routes/adminRoutes.js';
import helpRequestRoutes from './routes/helpRequestRoutes.js';
import sponsorRoutes from './routes/sponsorRoutes.js';
import feedbackRoutes from './routes/feedbackRoutes.js';

dotenv.config();
connectDB();

const app = express();
app.use(cors());
app.use(express.json());

// Use routes
app.use('/api/auth', authRoutes);
app.use('/api/clubs', clubRoutes); // ✅ fixed here (was /api/club)
app.use('/api/admin', adminRoutes); 
app.use('/api/help', helpRequestRoutes);
app.use('/api/sponsor', sponsorRoutes);
app.use('/api/feedback', feedbackRoutes);

// Optional root route
app.get('/', (req, res) => {
  res.send('API is running...');
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
