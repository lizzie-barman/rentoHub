// this code is to find the way to access the cloudinary.

const cloudinary = require('cloudinary').v2;
const { CloudinaryStorage } = require('multer-storage-cloudinary');

//configuring(joining) our backend with our cloudinary account

cloudinary.config({
    cloud_name: process.env.CLOUD_NAME,
    api_key: process.env.CLOUD_API_KEY,
    api_secret: process.env.CLOUD_API_SECRET
});

//storage code copied from npm

const storage = new CloudinaryStorage({
  cloudinary: cloudinary,
  params: {
    folder: 'airbnb_dev',
    allowedFormats: ["jpg", "png", "jpeg"],
  },
});

module.exports= {
    cloudinary,
    storage
};