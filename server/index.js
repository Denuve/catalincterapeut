import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import connectDB from "./config/db.js";
import programariRoutes from "./routes/programariRoutes.js";

import { loginAdmin } from './controllers/authController.js';
import { protect } from './middleware/authMiddleware.js';

dotenv.config();

connectDB();

const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

app.use("/", programariRoutes);

// Protected
app.get('/api/admin/dashboard', protect, (req, res) => {
  res.json({ message: 'Bine ai venit în dashboard!', user: req.user })
});

app.post('/api/admin/login', loginAdmin);

app.listen(PORT, () => {
  console.log(`Server backend pornit pe http://localhost:${PORT}`);
});
