import express from 'express';
import dotenv from 'dotenv';
import connectDB from './config/db.js';
import authRoutes from './routes/authRoutes.js';
import userRoutes from './routes/userRoutes.js';
// import donationRoutes from './routes/donationRoutes.js';
// import feedbackRoutes from './routes/feedbackRoutes.js';
// import helpRequestRoutes from './routes/helpRequestRoutes.js';
import adminRoutes from './routes/adminRoutes.js';
import sponsorRoutes from './routes/sponsorRoutes.js';

dotenv.config();
connectDB();

const app = express();
app.use(express.json());

app.use('/api/sponsor', sponsorRoutes);




app.use('/api/auth', authRoutes);

// app.use('/api/users', userRoutes);
app.use('/api/users', authRoutes); 

// app.use('/api/donations', donationRoutes);
// app.use('/api/feedback', feedbackRoutes);
// app.use('/api/help-requests', helpRequestRoutes);

app.use('/api/admin', adminRoutes); // 👈 This line is very important

app.get('/', (req, res) => {
  res.send('FUNDz API is running...');
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));