import mongoose from "mongoose";

const enquirySchema = new mongoose.Schema(
    {
    firstName: String,
    lastName: String,
    email: String,
    phone: String,
    course: String,
    city: String,
    country: String,
  },
  {
    timestamps: true,
  }
);

export default mongoose.model(
  "CourseEnquiry",
  enquirySchema
);