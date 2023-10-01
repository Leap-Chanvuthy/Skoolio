const multer = require('multer');
const path = require('path');

const storage = multer.diskStorage({
  destination: './public/upload/items',
  filename: (req, file, cb) => {
    cb(null, file.fieldname + '-' + 'Student' +'-'+ Date.now() + path.extname(file.originalname));
  }
});

const upload = multer({ storage: storage });
module.exports = { upload };
