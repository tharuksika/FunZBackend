// controllers/feedbackController.js
import Feedback from '../models/Feedback.js';

export const createFeedback = async (req, res) => {
  try {
    const { message, rating } = req.body;
    const feedback = new Feedback({
      club: req.user._id,
      message,
      rating
    });
    await feedback.save();
    res.status(201).json({ message: 'Feedback submitted. Awaiting admin approval.' });
  } catch (err) {
    res.status(500).json({ error: 'Error submitting feedback' });
  }
};

export const getApprovedFeedback = async (req, res) => {
  try {
    const feedbacks = await Feedback.find({ isApproved: true }).populate('club', 'name');
    res.json(feedbacks);
  } catch (err) {
    res.status(500).json({ error: 'Error fetching feedback' });
  }
};

export const approveFeedback = async (req, res) => {
  try {
    const feedback = await Feedback.findById(req.params.id);
    if (!feedback) return res.status(404).json({ error: 'Feedback not found' });
    feedback.isApproved = true;
    await feedback.save();
    res.json({ message: 'Feedback approved' });
  } catch (err) {
    res.status(500).json({ error: 'Error approving feedback' });
  }
};
