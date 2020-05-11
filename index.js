const container = require('./src/startup/container');
const config = container.resolve('config');
const server = container.resolve('server');
const mongoose = require('mongoose');

mongoose.connect(
    config.MONGO_URI,
    {useCreateIndex:true,useNewUrlParser:true,useUnifiedTopology:true,useFindAndModify:false},
    (err)=>{
        if(err) throw err;
        server.start();
    }
);