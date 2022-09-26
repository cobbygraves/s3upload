const express = require("express");
const { addGallery, readGallery } = require("../controllers/gallery");
const upload = require("../middleware/upload");

const galleryRouter = express.Router();

galleryRouter.post("/gallery", upload.single("image"), addGallery);
galleryRouter.get("/gallery", readGallery);

module.exports = galleryRouter;
