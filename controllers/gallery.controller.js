import Gallery from "../models/gallery.model.js";

export const uploadGalleryMedia = async (req, res) => {
  try {
    const mediaType = req.file.mimetype.startsWith("video")
      ? "video"
      : "image";

    const item = await Gallery.create({
      mediaUrl: req.file.path,
      mediaType,
    });

    res.status(201).json(item);
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};

export const getGallery = async (req, res) => {
  try {
    const items = await Gallery.find().sort({
      createdAt: -1,
    });

    res.json(items);
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};

export const deleteGallery = async (req, res) => {
  try {
    await Gallery.findByIdAndDelete(req.params.id);

    res.json({
      message: "Deleted",
    });
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};