// import Donation from '../models/Donation.js';

// Create a new donation

// export const createDonation = async (req, res) => {
//   try {
//     const { userId, amount, message } = req.body;

//     const donation = new Donation({
//       user: userId,
//       amount,
//       message,
//     });

//     await donation.save();
//     res.status(201).json({ message: 'Donation successful', donation });
//   } catch (err) {
//     res.status(500).json({ message: 'Server error' });
//   }
// };

// // Get all donations
// export const getDonations = async (req, res) => {
//   try {
//     const donations = await Donation.find().populate('user', 'username email');
//     res.json(donations);
//   } catch (err) {
//     res.status(500).json({ message: 'Server error' });
//   }
// };