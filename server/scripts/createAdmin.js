import mongoose from "mongoose";
import dotenv from "dotenv";
import readlineSync from "readline-sync";
import User from "../models/User.js";

dotenv.config();

const createAdmin = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI, {
      dbName: "ccterapeut",
    });

    console.log("--- Creare utilizator nou ---");

    const email = readlineSync.question("Email: ");
    const password = readlineSync.question("Parolă: ", { hideEchoBack: true });
    const roleInput = readlineSync.question("Rol (apasă Enter pentru admin): ");
    const role = roleInput.trim() === "" ? "admin" : roleInput.trim();

    const existing = await User.findOne({ email });
    if (existing) {
      console.log("❗ Userul deja există în baza de date.");
      mongoose.disconnect();
      return;
    }

    const user = new User({
      email,
      password, // parola clară, hashing se face în pre('save') din model
      role,
    });

    await user.save();

    console.log(
      `✅ Userul ${email} cu rolul '${role}' a fost creat cu succes.`
    );
    mongoose.disconnect();
  } catch (err) {
    console.error("❌ Eroare la crearea userului:", err);
    mongoose.disconnect();
  }
};

createAdmin();
