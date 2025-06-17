import HelpRequest from '../models/HelpRequest.js';
import SponsorSubmission from '../models/SponsorSubmission.js';

export const getApprovedHelpRequests = async (req, res) => {
  try {
    const helpRequests = await HelpRequest.find({ isApproved: true });
    res.json(helpRequests);
  } catch (err) {
    res.status(500).json({ message: 'Error fetching help requests' });
  }
};

export const sponsorHelpRequest = async (req, res) => {
  try {
    const { id } = req.params;
    const { amount, message } = req.body;

    const submission = new SponsorSubmission({
      sponsorId: req.user._id,
      helpRequestId: id,
      amount,
      message,
    });

    await submission.save();
    res.status(201).json({ message: 'Help request sponsored successfully', submission });
  } catch (err) {
    res.status(500).json({ message: 'Error sponsoring help request' });
  }
};

export const getMySponsorships = async (req, res) => {
  try {
    const sponsorships = await SponsorSubmission.find({ sponsorId: req.user._id });
    res.json(sponsorships);
  } catch (err) {
    res.status(500).json({ message: 'Error fetching sponsorships' });
  }
};
