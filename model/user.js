import mongoose from "mongoose";
const User = mongoose.Schema({
  username: { type: String },
  email: { type: String },
  password: { type: String },
  gender: { type: String },
  image: { type: String },
  phoneno: { type: String },
  verified: { type: Boolean, default: false },
  createAt: { type: Date, default: Date.now() },
  updateAt: { type: Date },
  supermarket: [{ type: mongoose.Schema.Types.ObjectId, ref: "supermarket" }],
});

// Exporting the model directly ok
export default mongoose.model("User", User);
