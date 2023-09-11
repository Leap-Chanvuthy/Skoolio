const express = require('express');
const router = express.Router();
const multerMiddleware = require('../middlewares/multerMiddleware');
const {getItems , addItem , getItem , deleteItem , editItem} = require('../controllers/ItemController');

router.get ('/' , getItems);
router.get ('/:id' , getItem);
router.post ('/' , multerMiddleware.upload.single('image') , addItem);
router.delete ('/:id' , deleteItem);
router.put('/:id' , editItem);


module.exports = router;