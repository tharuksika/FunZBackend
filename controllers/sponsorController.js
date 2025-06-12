import SponsorSubmission from '../models/SponsorSubmission.js';

export const submitSponsorship = async (req, res) => {
  try {
    const { sponsorName, email, amount, message, clubId } = req.body;

    const submission = new SponsorSubmission({
      sponsorName,
      email,
      amount,
      message,
      clubId
    });

    await submission.save();

    res.status(201).json({ message: 'Sponsorship submitted successfully', data: submission });
  } catch (error) {
    res.status(500).json({ message: 'Submission failed', error: error.message });
  }
};


export const getAllSubmissions = async (req, res) => {
  try {
    const submissions = await SponsorSubmission.find().populate('clubId', 'name');
    res.status(200).json(submissions);
  } catch (error) {
    res.status(500).json({ message: 'Error fetching submissions', error: error.message });
  }
};


export const updateSubmissionStatus = async (req, res) => {
  try {
    const { id } = req.params;
    const { status } = req.body;

    const updated = await SponsorSubmission.findByIdAndUpdate(
      id,
      { status },
      { new: true }
    );

    if (!updated) {
      return res.status(404).json({ message: 'Submission not found' });
    }

    res.status(200).json({ message: 'Status updated', data: updated });
  } catch (error) {
    res.status(500).json({ message: 'Update failed', error: error.message });
  }
};
