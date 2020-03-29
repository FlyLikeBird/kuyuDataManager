const Express = require('express');
const path = require('path');
const router = Express.Router();
const multer = require('multer');
const upload = multer({dest:path.resolve(__dirname,'../static/userAvatar')});

router.get('/ceshi', upload.single(), function(req, res){
    console.log(req.body);
    res.send('hello world');
})

router.post('/post', upload.single(), function(req, res){
    console.log(req.body);
    console.log('what hall');
    res.send('post request')
})
module.exports = router;