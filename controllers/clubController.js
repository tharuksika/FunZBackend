import Match from '../models/Match.js';

export const addMatch = async (req, res) => {
  try {
    const { matchDate, opponent, location } = req.body;

    if (!matchDate || !opponent || !location) {
      return res.status(400).json({ message: 'All fields are required' });
    }

    const newMatch = await Match.create({
      club: req.user._id, // from authMiddleware
      matchDate,
      opponent,
      location,
    });

    res.status(201).json({
      message: 'Match added successfully',
      match: newMatch,
    });
  } catch (error) {
    res.status(500).json({ message: 'Server Error', error: error.message });
  }
};
