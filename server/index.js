import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import connectDB from "./config/db.js";
import programariRoutes from "./routes/programariRoutes.js";

dotenv.config();

connectDB();

const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

app.use("/programari", programariRoutes);

app.listen(PORT, () => {
  console.log(`Server backend pornit pe http://localhost:${PORT}`);
});
