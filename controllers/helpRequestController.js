// import HelpRequest from '../models/HelpRequest.js';

// // Create a new help request
// export const createHelpRequest = async (req, res) => {
//   try {
//     const { userId, title, description, category } = req.body;

//     const helpRequest = new HelpRequest({
//       user: userId,
//       title,
//       description,
//       category,
//     });

//     await helpRequest.save();
//     res.status(201).json({ message: 'Help request submitted', helpRequest });
//   } catch (err) {
//     res.status(500).json({ message: 'Server error' });
//   }
// };

// // Get all help requests
// export const getHelpRequests = async (req, res) => {
//   try {
//     const helpRequests = await HelpRequest.find().populate('user', 'username email');
//     res.json(helpRequests);
//   } catch (err) {
//     res.status(500).json({ message: 'Server error' });
//   }
// };