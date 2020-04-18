
var mongoose = require('mongoose');
var Schema = mongoose.Schema;

module.exports = new mongoose.Schema({
    price:Number,
    model:String,
    description:String,
    productionTime:String,
    title:String,
    features:[{ type:Schema.Types.ObjectId, ref:'Feature'}],
    thumbnails:String,
    size:Number 
});


