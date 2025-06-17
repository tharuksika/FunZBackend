import User from '../models/User.js';
import HelpRequest from '../models/HelpRequest.js';
import Feedback from '../models/Feedback.js';

// ✅ Get all users (clubs, sponsors, admins)
export const getAllUsers = async (req, res) => {
  try {
    const users = await User.find().select('-password');
    res.status(200).json(users);
  } catch (error) {
    res.status(500).json({ message: 'Error fetching users', error });
  }
};

// ✅ Get all clubs only
export const getAllClubs = async (req, res) => {
  try {
    const clubs = await User.find({ role: 'club' }).select('-password');
    res.status(200).json(clubs);
  } catch (err) {
    res.status(500).json({ message: 'Error fetching clubs', err });
  }
};

// ✅ Approve any user (club or sponsor)
export const approveUser = async (req, res) => {
  try {
    const user = await User.findById(req.params.id);
    if (!user) return res.status(404).json({ message: 'User not found' });

    user.isApproved = true;
    await user.save();
    res.status(200).json({ message: 'User approved', user });
  } catch (error) {
    res.status(500).json({ message: 'Approval failed', error });
  }
};

// ✅ Delete user (club/sponsor)
export const deleteUser = async (req, res) => {
  try {
    await User.findByIdAndDelete(req.params.id);
    res.status(200).json({ message: 'User deleted' });
  } catch (error) {
    res.status(500).json({ message: 'User delete failed', error });
  }
};

// ✅ View all help requests
export const getAllHelpRequests = async (req, res) => {
  try {
    const requests = await HelpRequest.find().populate('user', 'name role');
    res.status(200).json(requests);
  } catch (error) {
    res.status(500).json({ message: 'Fetching help requests failed', error });
  }
};

// ✅ Approve a help request
export const approveHelpRequest = async (req, res) => {
  try {
    const help = await HelpRequest.findById(req.params.id);
    if (!help) {
      return res.status(404).json({ message: 'Help request not found' });
    }

    help.status = 'approved';
    await help.save();

    res.status(200).json({ message: 'Help request approved', help });
  } catch (error) {
    res.status(500).json({ message: 'Failed to approve help request', error });
  }
};

// ✅ Approve feedback
export const approveFeedback = async (req, res) => {
  try {
    const feedback = await Feedback.findById(req.params.id);
    if (!feedback) return res.status(404).json({ message: 'Feedback not found' });

    feedback.approved = true;
    await feedback.save();
    res.status(200).json({ message: 'Feedback approved', feedback });
  } catch (error) {
    res.status(500).json({ message: 'Feedback approval failed', error });
  }
};

// ✅ Delete a help request
export const deleteHelpRequest = async (req, res) => {
  try {
    const helpRequest = await HelpRequest.findById(req.params.id);
    if (!helpRequest) {
      return res.status(404).json({ message: 'Help request not found' });
    }

    await helpRequest.deleteOne();
    res.json({ message: 'Help request deleted' });
  } catch (error) {
    res.status(500).json({ message: 'Server error' });
  }
};

// ✅ Delete a feedback
export const deleteFeedback = async (req, res) => {
  try {
    const feedback = await Feedback.findById(req.params.id);
    if (!feedback) {
      return res.status(404).json({ message: 'Feedback not found' });
    }

    await feedback.deleteOne();
    res.json({ message: 'Feedback deleted' });
  } catch (error) {
    res.status(500).json({ message: 'Server error' });
  }
};

