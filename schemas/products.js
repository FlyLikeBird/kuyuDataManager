
var mongoose = require('mongoose');
var Schema = mongoose.Schema;

module.exports = new mongoose.Schema({
    price:Number,
    model:String,
    description:String,
    title:String,
    features:[{ type:Schema.Types.ObjectId, ref:'Feature'}],
    thumbnails:String,
    size:Number,
    //  所属仓库地 gz广州  hz惠州  bj北京 sh上海 cd成都
    warehouse:{ type:Schema.Types.ObjectId, ref:'Warehouse'}
});


