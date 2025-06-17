import mongoose from 'mongoose';

const matchSchema = new mongoose.Schema({
  club: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User', // assuming clubs are in User model
    required: true,
  },
  matchDate: {
    type: Date,
    required: true,
  },
  opponent: {
    type: String,
    required: true,
  },
  location: {
    type: String,
    required: true,
  },
  createdAt: {
    type: Date,
    default: Date.now,
  }
});

const Match = mongoose.model('Match', matchSchema);
export default Match;
