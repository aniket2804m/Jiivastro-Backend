import mongoose from "mongoose";

const gallerySchema = new mongoose.Schema(
  {
    mediaUrl: String,
    mediaType: {
      type: String,
      enum: ["image", "video"],
    },
  },
  { timestamps: true }
);

export default mongoose.model("Gallery", gallerySchema);