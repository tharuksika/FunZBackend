import mongoose from 'mongoose';

const sponsorSubmissionSchema = new mongoose.Schema({
  sponsorName: { type: String, required: true },
  email: { type: String, required: true },
  amount: { type: Number, required: true },
  message: { type: String },
  clubId: { type: mongoose.Schema.Types.ObjectId, ref: 'Club' },
  status: { type: String, enum: ['pending', 'approved', 'rejected'], default: 'pending' },
  submittedAt: { type: Date, default: Date.now }
});

export default mongoose.model('SponsorSubmission', sponsorSubmissionSchema);
