
var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var config = require('../config/config.js');

module.exports = new mongoose.Schema({
    registerTime:String,
    username:String,
    password:String,
    level:{ type:Number, default:0},
    userImage:{ type:String, default:`${config.host}:${config.port}/defaultAvatar.png`},
    
});


