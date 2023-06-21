import mongoose from "mongoose";

const scoreSchema = new mongoose.Schema({
    username: { type: String, required: true },
    score: { type: Number, required: true },
    createdAt: { type: Date, default: Date.now }
});

export const Score = mongoose.model('Score', scoreSchema);