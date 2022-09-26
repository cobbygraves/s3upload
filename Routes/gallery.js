const express = require("express");
const { addGallery, readGallery } = require("../controllers/gallery");
const upload = require("../middleware/upload");

const galleryRoute = express.Router();

galleryRoute.post("/gallery", upload.single("image"), addGallery);
galleryRoute.get("/gallery", readGallery);

module.exports = galleryRoute;
