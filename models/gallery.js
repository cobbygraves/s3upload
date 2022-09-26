const mongoose = require("mongoose");

const GallerySchema = new mongoose.Schema({
  id: {
    type: String,
    required: "Required",
  },
  image: {
    type: String,
    required: "Required",
  },
});

const GalleryModel = mongoose.model("admin", GallerySchema);

module.exports = GalleryModel;
