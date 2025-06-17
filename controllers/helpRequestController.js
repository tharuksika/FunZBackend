import HelpRequest from '../models/HelpRequest.js';

// Create help request
export const createHelpRequest = async (req, res) => {
  try {
    const {
      userId, title, description,
      category, videoUrl, certificateUrl, endDate
    } = req.body;

    const helpRequest = new HelpRequest({
      user: userId,
      title,
      description,
      category,
      videoUrl,
      certificateUrl,
      endDate,
    });

    await helpRequest.save();
    res.status(201).json({ message: 'Help request submitted', helpRequest });
  } catch (error) {
    res.status(500).json({ message: 'Error creating help request', error });
  }
};

// Get all help requests (for testing)
export const getHelpRequests = async (req, res) => {
  try {
    const helpRequests = await HelpRequest.find().populate('user', 'name email role');
    res.json(helpRequests);
  } catch (error) {
    res.status(500).json({ message: 'Error fetching help requests' });
  }
};
