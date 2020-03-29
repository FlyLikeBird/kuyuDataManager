const express = require('express');
const path = require('path');
const connectHistoryApiFallback = require('connect-history-api-fallback');
const cookieParser = require('cookie-parser');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const config = require('./config/config');
const cors = require('cors');
const reload = require('reload');
const app = express();
const port = config.port;

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({extended:false}));
app.use(cookieParser());
app.use('/',express.static(path.resolve(__dirname, 'static')));

app.use('/api',require('./Routes'));

app.listen(port,(err)=>{
    if(err){
        console.error(err)
    }else{
        console.log(`===>apiServer is running at http://${config.host}:${config.port} `);
    }
});

mongoose.connect(`mongodb://${config.dbHost}:${config.dbPort}/kuyouTV`, function (err) {
    if (err) {
        console.log(err, "数据库连接失败");
        return;
    }
    console.log('数据库连接成功');
});