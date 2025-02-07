import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import dotenv from "dotenv";

dotenv.config(); // Load environment variables

const app = express();
app.use(express.json());
app.use(cors());

// Connect to MongoDB
mongoose
  .connect(process.env.MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log("✅ MongoDB Connected"))
  .catch((err) => console.error("❌ MongoDB Connection Error:", err));

// Define Food Donation Schema
const foodSchema = new mongoose.Schema({
  organization: { type: String, required: true },
  description: { type: String, required: true },
  bestBefore: { type: Date, required: true },
  location: { type: String, required: true },
  createdAt: { type: Date, default: Date.now },
});

const Food = mongoose.model("Food", foodSchema);

// POST - Donate Food
app.post("/api/donate", async (req, res) => {
  try {
    const foodItem = new Food(req.body);
    await foodItem.save();
    res.status(201).json(foodItem);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
});

// GET - Fetch Available Food Donations
app.get("/api/receive", async (req, res) => {
  try {
    const foodItems = await Food.find();
    res.json(foodItems);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// Start Server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`🚀 Server running on port ${PORT}`));
