import express from "express";
import upload from "../middleware/upload.js";

import {
  uploadGalleryMedia,
  getGallery,
  deleteGallery,
} from "../controllers/gallery.controller.js";

const router = express.Router();

router.get("/", getGallery);

router.post(
  "/upload",
  upload.single("media"),
  uploadGalleryMedia
);

router.delete("/:id", deleteGallery);

export default router;