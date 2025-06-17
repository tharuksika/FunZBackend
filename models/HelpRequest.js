import mongoose from 'mongoose';

const helpRequestSchema = new mongoose.Schema({
  user: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
  title: String,
  description: String,
  category: { type: String, enum: ['game', 'athletics'] },
  videoUrl: String,
  certificateUrl: String,
  startDate: Date,
  endDate: Date,
  isExpired: { type: Boolean, default: false },
  isSponsored: { type: Boolean, default: false }
}, { timestamps: true });

const HelpRequest = mongoose.model('HelpRequest', helpRequestSchema);
export default HelpRequest;
