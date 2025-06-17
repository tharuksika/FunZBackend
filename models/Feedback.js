// models/Feedback.js
import mongoose from 'mongoose';

const feedbackSchema = new mongoose.Schema({
  club: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
  message: { type: String, required: true },
  rating: { type: Number, min: 1, max: 5, required: true },
  isApproved: { type: Boolean, default: false }, // Admin approval
}, { timestamps: true });

export default mongoose.model('Feedback', feedbackSchema);
