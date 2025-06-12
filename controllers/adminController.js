import Sponsor from '../models/SponsorSubmission.js'; // ✅ Only once

// Get all sponsor details - Admin only

export const getAllSponsors = async (req, res) => {
  try {
    const sponsors = await Sponsor.find();
    res.json(sponsors);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};
