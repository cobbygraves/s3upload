const express = require("express");
const { addGallery, readGallery } = require("../controllers/gallery");
const upload = require("../middleware/upload");

const galleryRouter = express.Router();

galleryRouter.post("/", upload.single("image"), addGallery);
galleryRouter.get("/", readGallery);

module.exports = galleryRouter;
