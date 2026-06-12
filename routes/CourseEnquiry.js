import express from "express";
import CourseEnquiry from "../models/CourseEnquiry.js";

const router = express.Router();

router.post("/", async (req, res) => {
  try {
    const enquiry =
      await CourseEnquiry.create(req.body);

    res.status(201).json({
      success: true,
      enquiry,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
});

export default router;