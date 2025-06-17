import mongoose from 'mongoose';

const sponsorSubmissionSchema = new mongoose.Schema({
  sponsorId: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
  helpRequestId: { type: mongoose.Schema.Types.ObjectId, ref: 'HelpRequest', required: true },
  amount: { type: Number, required: true },
  message: { type: String, required: true },
   sponsoredAt: { type: Date, default: Date.now
  },
}, { timestamps: true });

export default mongoose.model('SponsorSubmission', sponsorSubmissionSchema);
