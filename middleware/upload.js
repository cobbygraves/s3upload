const multer = require("multer");
const AWS = require("aws-sdk");
const multerS3 = require("multer-s3");
const uuid = require("uuid");

const s3 = new AWS.S3({});

const storage = multerS3({
  s3,
  bucket: "",
  metadata: (req, file, cb) => {
    cb(null, { fieldName: file.fieldname });
  },
  key: (req, file, cb) => {
    cb(null, `${uuid.v4()}-${file.originalname}`);
  },
});

const upload = multer({ storage });

module.exports = upload;
