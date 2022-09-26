const GalleryModel = require("../models/gallery");
const uuid = require("uuid");

const addGallery = (req, res) => {
  console.log(req.file);

  res.json({ message: "image added succefully" });
  //logic to add gallery to the database
  //   const gallery = { id: uuid.v4(), ...req.body };
  //   const galleryDocument = new GalleryModel(gallery);
  //   galleryDocument.save((err) => {
  //     if (err) {
  //       return next(new Error(`Error Message: ${err}`));
  //     }
  //     res.status(200).json({ message: "successful" });
  //   });
};

//logic to read gallery from database
const readGallery = (req, res) => {
  GalleryModel.find((err, doc) => {
    if (!err) {
      res.send(doc);
    } else {
      res.status(404).json({ message: "Drugs can't be retrieved" });
      next(err);
    }
  });
};

module.exports = {
  addGallery,
  readGallery,
};
