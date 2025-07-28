import mongoose from 'mongoose';

const messageSchema = new mongoose.Schema({
  nume: { type: String, required: true },
  email: { type: String, required: true },
  mesaj: { type: String, required: true },
  createdAt: { type: Date, default: Date.now }
});

export default mongoose.model('Message', messageSchema);