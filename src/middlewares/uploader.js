import multer from "multer";
import path from "path";
import fs from 'fs';

export const uploadImagePath = 'images';

const imageStorage = multer.diskStorage({
  destination: function (req, file, cb) {
    const publicPath = `public/${uploadImagePath}`;
    fs.mkdirSync(publicPath, { recursive: true })
    cb(null, publicPath)
  },
  filename: function (req, file, cb) {
    cb(null, Date.now() + path.extname(file.originalname)) //Appending extension
  }
})

export const imageUploader = multer({ storage: imageStorage })