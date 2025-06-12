// import mongoose from 'mongoose';

// const feedbackSchema = new mongoose.Schema({
//   user: {
//     type: mongoose.Schema.Types.ObjectId,
//     ref: 'User',
//     required: true
//   },
//   comment: { type: String, required: true },
//   rating: { type: Number, min: 1, max: 5 }
// }, { timestamps: true });

// // ✅ Avoid OverwriteModelError
// const Feedback = mongoose.models.Feedback || mongoose.model('Feedback', feedbackSchema);
// export default Feedback;
