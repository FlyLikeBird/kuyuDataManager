const Express = require('express');
const path = require('path');
const router = Express.Router();
const multer = require('multer');
const upload = multer({dest:path.resolve(__dirname,'../static/userAvatar')});

router.use('/product',require('./products'));

module.exports = router;