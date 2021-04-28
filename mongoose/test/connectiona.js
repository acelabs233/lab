const mongoose = require('mongoose');
const chalk = require("chalk");

mongoose.Promise = global.Promise;

before(function(done){

    mongoose.connect('mongodb://localhost/mongoose', { useNewUrlParser: true , useUnifiedTopology: true});

    mongoose.connection.once('open', function(){
        console.log(chalk.green("connection works!!!!"));
        done();
    }).on('error', function(error){
        console.log(chalk.red.inverse('Connection error') + error);
    });

})

